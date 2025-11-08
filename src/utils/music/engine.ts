import type { Chord, Note, SoundParameters, BassPattern, ArpeggioPattern, DrumPattern } from "@/types/music";
import { getChordNotes } from "./patterns";

/**
 * MIDIノート番号から周波数に変換
 */
function midiToFrequency(midi: number): number {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

/**
 * Web Audio API音楽エンジン
 */
export class MusicEngine {
  private audioContext: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private fadeGain: GainNode | null = null;
  private activeOscillators: Set<OscillatorNode> = new Set();
  private isPlaying = false;

  /**
   * エンジンを初期化
   */
  public async initialize(): Promise<void> {
    if (this.audioContext) {
      return;
    }

    try {
      this.audioContext = new AudioContext();

      // マスターゲイン（全体音量制御）
      this.masterGain = this.audioContext.createGain();
      this.masterGain.gain.value = 0; // setVolume()で設定されるまで無音
      this.masterGain.connect(this.audioContext.destination);

      // フェードゲイン（クロスフェード用）
      this.fadeGain = this.audioContext.createGain();
      this.fadeGain.gain.value = 0.0; // フェードイン用（初期状態は無音）
      this.fadeGain.connect(this.masterGain);

      // AudioContextを開始（ユーザーインタラクション後に必要）
      if (this.audioContext.state === 'suspended') {
        await this.audioContext.resume();
      }
    } catch (error) {
      console.error('Failed to initialize audio context:', error);
      throw error;
    }
  }

  /**
   * エンジンを破棄
   */
  public async destroy(): Promise<void> {
    this.stop();

    if (this.audioContext) {
      await this.audioContext.close();
      this.audioContext = null;
      this.masterGain = null;
    }
  }

  /**
   * 再生中かどうか
   */
  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  /**
   * 再生を開始
   */
  public start(): void {
    this.isPlaying = true;
  }

  /**
   * 再生を停止
   */
  public stop(): void {
    this.isPlaying = false;

    // すべてのアクティブなオシレーターを停止
    this.activeOscillators.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (e) {
        // Already stopped
      }
    });
    this.activeOscillators.clear();
  }

  /**
   * コードを再生（パッド音）
   */
  public playChord(chord: Chord, soundParams: SoundParameters, startTime?: number): void {
    if (!this.audioContext || !this.masterGain || !this.isPlaying) {
      return;
    }

    const now = this.audioContext.currentTime;
    const start = startTime ?? now;
    const chordNotes = getChordNotes(chord);

    // 各コード音を再生
    chordNotes.forEach((midiNote, index) => {
      this.playPadNote(
        midiNote,
        start,
        chord.duration,
        soundParams.padVolume + index * 0.01,
        soundParams
      );
    });
  }

  /**
   * メロディーノートを再生
   */
  public playMelodyNote(note: Note, soundParams: SoundParameters, startTime?: number): void {
    if (!this.audioContext || !this.masterGain || !this.isPlaying) {
      return;
    }

    const now = this.audioContext.currentTime;
    const start = startTime ?? now + note.startTime;
    const velocity = note.velocity ?? 0.3;

    this.playLeadNote(note.pitch, start, note.duration, velocity, soundParams);
  }

  /**
   * パッド音（コード用）を再生
   * 壮大で退屈な感じを出すために、長いアタック/リリース
   */
  private playPadNote(
    midiNote: number,
    startTime: number,
    duration: number,
    volume: number,
    soundParams: SoundParameters
  ): void {
    if (!this.audioContext || !this.masterGain) {
      return;
    }

    const freq = midiToFrequency(midiNote);

    // オシレーター1: メイン波形
    const osc1 = this.audioContext.createOscillator();
    osc1.type = soundParams.oscillatorType;
    osc1.frequency.value = freq;

    // オシレーター2: サブ波形（サイン波で低音を補強）
    const osc2 = this.audioContext.createOscillator();
    osc2.type = "sine";
    osc2.frequency.value = freq;

    // ゲインノード（エンベロープ用）
    const gainNode = this.audioContext.createGain();
    gainNode.gain.value = 0;

    // 接続
    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(this.fadeGain!);

    // エンベロープ: スタイルごとのアタック/リリース
    const attackTime = soundParams.padAttack;
    const releaseTime = soundParams.padRelease;
    const sustainLevel = volume;

    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(sustainLevel, startTime + attackTime);
    gainNode.gain.setValueAtTime(
      sustainLevel,
      startTime + Math.max(duration - releaseTime, attackTime)
    );
    gainNode.gain.linearRampToValueAtTime(0, startTime + duration);

    // 再生
    osc1.start(startTime);
    osc2.start(startTime);
    osc1.stop(startTime + duration);
    osc2.stop(startTime + duration);

    // トラッキング
    this.activeOscillators.add(osc1);
    this.activeOscillators.add(osc2);

    // クリーンアップ
    osc1.onended = () => {
      osc1.disconnect();
      osc2.disconnect();
      gainNode.disconnect();
      this.activeOscillators.delete(osc1);
      this.activeOscillators.delete(osc2);
    };
  }

  /**
   * リード音（メロディー用）を再生
   * よりクリアで目立つ音
   */
  private playLeadNote(
    midiNote: number,
    startTime: number,
    duration: number,
    velocity: number,
    soundParams: SoundParameters
  ): void {
    if (!this.audioContext || !this.masterGain) {
      return;
    }

    const freq = midiToFrequency(midiNote);

    // オシレーター: スタイルに応じた波形
    const osc = this.audioContext.createOscillator();
    osc.type = soundParams.oscillatorType;
    osc.frequency.value = freq;

    // ゲインノード（エンベロープ用）
    const gainNode = this.audioContext.createGain();
    gainNode.gain.value = 0;

    // 接続
    osc.connect(gainNode);
    gainNode.connect(this.fadeGain!);

    // エンベロープ: スタイルごとのアタック/リリース
    const attackTime = soundParams.leadAttack;
    const releaseTime = soundParams.leadRelease;
    const sustainLevel = velocity * soundParams.leadVolume;

    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(sustainLevel, startTime + attackTime);
    gainNode.gain.setValueAtTime(
      sustainLevel,
      startTime + Math.max(duration - releaseTime, attackTime)
    );
    gainNode.gain.linearRampToValueAtTime(0, startTime + duration);

    // 再生
    osc.start(startTime);
    osc.stop(startTime + duration);

    // トラッキング
    this.activeOscillators.add(osc);

    // クリーンアップ
    osc.onended = () => {
      osc.disconnect();
      gainNode.disconnect();
      this.activeOscillators.delete(osc);
    };
  }

  /**
   * マスターボリュームを設定
   */
  public setVolume(volume: number): void {
    if (this.masterGain) {
      this.masterGain.gain.setValueAtTime(
        Math.max(0, Math.min(1, volume)),
        this.audioContext?.currentTime ?? 0
      );
    }
  }

  /**
   * 現在の時刻を取得
   */
  public getCurrentTime(): number {
    return this.audioContext?.currentTime ?? 0;
  }

  /**
   * フェードイン（クロスフェード用）
   * @param duration フェード時間（秒）
   * @param startTime 開始時刻（省略時は現在時刻）
   */
  public fadeIn(duration: number, startTime?: number): void {
    if (!this.audioContext || !this.fadeGain) {
      return;
    }

    const start = startTime ?? this.audioContext.currentTime;
    const fadeGain = this.fadeGain.gain;

    // 現在の値をキャンセル
    fadeGain.cancelScheduledValues(start);
    // 常に0から開始してフェードイン（タイミング問題を回避）
    fadeGain.setValueAtTime(0, start);

    // フェードイン
    fadeGain.linearRampToValueAtTime(1.0, start + duration);
  }

  /**
   * フェードアウト（クロスフェード用）
   * @param duration フェード時間（秒）
   * @param startTime 開始時刻（省略時は現在時刻）
   */
  public fadeOut(duration: number, startTime?: number): void {
    if (!this.audioContext || !this.fadeGain) {
      return;
    }

    const start = startTime ?? this.audioContext.currentTime;
    const fadeGain = this.fadeGain.gain;

    // 現在の値をキャンセル
    fadeGain.cancelScheduledValues(start);
    fadeGain.setValueAtTime(fadeGain.value, start);

    // フェードアウト
    fadeGain.linearRampToValueAtTime(0.0, start + duration);
  }

  /**
   * フェードゲインを即座にリセット
   * @param value リセット値（デフォルト: 1.0）
   */
  public resetFade(value: number = 1.0): void {
    if (!this.audioContext || !this.fadeGain) {
      return;
    }

    const now = this.audioContext.currentTime;
    this.fadeGain.gain.cancelScheduledValues(now);
    this.fadeGain.gain.setValueAtTime(value, now);
  }

  /**
   * ベースラインを再生
   */
  public playBassline(
    chord: Chord,
    bassPattern: BassPattern,
    soundParams: SoundParameters,
    startTime?: number
  ): void {
    if (!this.audioContext || !this.masterGain || !this.isPlaying) {
      return;
    }

    const now = this.audioContext.currentTime;
    const start = startTime ?? now;
    const rootNote = chord.root - 12; // ベースは1オクターブ下

    bassPattern.rhythm.forEach((rhythmTime, index) => {
      const noteOffset = bassPattern.pattern[index] ?? 0;
      const pitch = rootNote + noteOffset;
      const duration = bassPattern.durations[index] ?? 1;
      const noteStart = start + rhythmTime;

      this.playBassNote(pitch, noteStart, duration, soundParams);
    });
  }

  /**
   * ベース音を再生
   */
  private playBassNote(
    midiNote: number,
    startTime: number,
    duration: number,
    soundParams: SoundParameters
  ): void {
    if (!this.audioContext || !this.masterGain) {
      return;
    }

    const freq = midiToFrequency(midiNote);

    // オシレーター: サイン波（ベースには柔らかい音）
    const osc = this.audioContext.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;

    // ゲインノード
    const gainNode = this.audioContext.createGain();
    gainNode.gain.value = 0;

    // 接続
    osc.connect(gainNode);
    gainNode.connect(this.fadeGain!);

    // エンベロープ: ベースらしい短いアタックと適度なリリース
    const attackTime = 0.05;
    const releaseTime = 0.2;
    const sustainLevel = 0.12; // ベースは控えめに

    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(sustainLevel, startTime + attackTime);
    gainNode.gain.setValueAtTime(
      sustainLevel,
      startTime + Math.max(duration - releaseTime, attackTime)
    );
    gainNode.gain.linearRampToValueAtTime(0, startTime + duration);

    // 再生
    osc.start(startTime);
    osc.stop(startTime + duration);

    // トラッキング
    this.activeOscillators.add(osc);

    // クリーンアップ
    osc.onended = () => {
      osc.disconnect();
      gainNode.disconnect();
      this.activeOscillators.delete(osc);
    };
  }

  /**
   * アルペジオを再生
   */
  public playArpeggio(
    chord: Chord,
    arpeggioPattern: ArpeggioPattern,
    soundParams: SoundParameters,
    startTime?: number
  ): void {
    if (!this.audioContext || !this.masterGain || !this.isPlaying) {
      return;
    }

    const now = this.audioContext.currentTime;
    const start = startTime ?? now;
    const chordNotes = getChordNotes(chord);

    let currentTime = start;
    const noteCount = arpeggioPattern.pattern.length;
    const patternDuration = chord.duration;
    const totalNotes = Math.floor(patternDuration / arpeggioPattern.noteDuration);

    for (let i = 0; i < totalNotes; i++) {
      const patternIndex = arpeggioPattern.pattern[i % noteCount];
      if (patternIndex !== undefined && patternIndex < chordNotes.length) {
        const pitch = chordNotes[patternIndex]! + 12; // アルペジオは1オクターブ上
        this.playArpeggioNote(
          pitch,
          currentTime,
          arpeggioPattern.noteDuration,
          soundParams
        );
      }
      currentTime += arpeggioPattern.noteDuration / arpeggioPattern.speed;
    }
  }

  /**
   * アルペジオ音を再生
   */
  private playArpeggioNote(
    midiNote: number,
    startTime: number,
    duration: number,
    soundParams: SoundParameters
  ): void {
    if (!this.audioContext || !this.masterGain) {
      return;
    }

    const freq = midiToFrequency(midiNote);

    // オシレーター: トライアングル波（クリアで明るい音）
    const osc = this.audioContext.createOscillator();
    osc.type = "triangle";
    osc.frequency.value = freq;

    // ゲインノード
    const gainNode = this.audioContext.createGain();
    gainNode.gain.value = 0;

    // 接続
    osc.connect(gainNode);
    gainNode.connect(this.fadeGain!);

    // エンベロープ: 短いアタックとリリース
    const attackTime = 0.02;
    const releaseTime = 0.1;
    const sustainLevel = 0.08; // アルペジオは繊細に

    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(sustainLevel, startTime + attackTime);
    gainNode.gain.setValueAtTime(
      sustainLevel,
      startTime + Math.max(duration - releaseTime, attackTime)
    );
    gainNode.gain.linearRampToValueAtTime(0, startTime + duration);

    // 再生
    osc.start(startTime);
    osc.stop(startTime + duration);

    // トラッキング
    this.activeOscillators.add(osc);

    // クリーンアップ
    osc.onended = () => {
      osc.disconnect();
      gainNode.disconnect();
      this.activeOscillators.delete(osc);
    };
  }

  /**
   * ドラムパターンを再生
   */
  public playDrums(
    drumPattern: DrumPattern,
    sectionDuration: number,
    startTime?: number
  ): void {
    if (!this.audioContext || !this.masterGain || !this.isPlaying) {
      return;
    }

    const now = this.audioContext.currentTime;
    const start = startTime ?? now;

    // パターンを繰り返して再生
    const repeatCount = Math.ceil(sectionDuration / drumPattern.duration);

    for (let i = 0; i < repeatCount; i++) {
      const patternStartTime = start + (i * drumPattern.duration);

      // キックドラムを再生
      drumPattern.kick.forEach((time) => {
        this.playKick(patternStartTime + time);
      });

      // スネアドラムを再生
      drumPattern.snare.forEach((time) => {
        this.playSnare(patternStartTime + time);
      });

      // ハイハットを再生
      drumPattern.hihat.forEach((time) => {
        this.playHihat(patternStartTime + time);
      });
    }
  }

  /**
   * キックドラム音を再生
   */
  private playKick(startTime: number): void {
    if (!this.audioContext || !this.masterGain) {
      return;
    }

    const duration = 0.5;

    // 低周波オシレーター（ピッチエンベロープ付き）
    const osc = this.audioContext.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(150, startTime);
    osc.frequency.exponentialRampToValueAtTime(50, startTime + 0.05);

    // ゲインノード
    const gainNode = this.audioContext.createGain();
    gainNode.gain.setValueAtTime(0.4, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

    // 接続
    osc.connect(gainNode);
    gainNode.connect(this.fadeGain!);

    // 再生
    osc.start(startTime);
    osc.stop(startTime + duration);

    // トラッキング
    this.activeOscillators.add(osc);

    // クリーンアップ
    osc.onended = () => {
      osc.disconnect();
      gainNode.disconnect();
      this.activeOscillators.delete(osc);
    };
  }

  /**
   * スネアドラム音を再生
   */
  private playSnare(startTime: number): void {
    if (!this.audioContext || !this.masterGain) {
      return;
    }

    const duration = 0.2;

    // ノイズ生成（ホワイトノイズ）
    const bufferSize = this.audioContext.sampleRate * duration;
    const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.audioContext.createBufferSource();
    noise.buffer = buffer;

    // ノイズ用ハイパスフィルター
    const noiseFilter = this.audioContext.createBiquadFilter();
    noiseFilter.type = "highpass";
    noiseFilter.frequency.value = 1000;

    // トーン成分（200Hz）
    const tone = this.audioContext.createOscillator();
    tone.type = "triangle";
    tone.frequency.value = 200;

    // ゲインノード
    const gainNode = this.audioContext.createGain();
    gainNode.gain.setValueAtTime(0.3, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

    // 接続
    noise.connect(noiseFilter);
    noiseFilter.connect(gainNode);
    tone.connect(gainNode);
    gainNode.connect(this.fadeGain!);

    // 再生
    noise.start(startTime);
    tone.start(startTime);
    noise.stop(startTime + duration);
    tone.stop(startTime + duration);

    // トラッキング
    this.activeOscillators.add(tone);

    // クリーンアップ
    tone.onended = () => {
      noise.disconnect();
      noiseFilter.disconnect();
      tone.disconnect();
      gainNode.disconnect();
      this.activeOscillators.delete(tone);
    };
  }

  /**
   * ハイハット音を再生
   */
  private playHihat(startTime: number): void {
    if (!this.audioContext || !this.masterGain) {
      return;
    }

    const duration = 0.1;

    // ノイズ生成（ホワイトノイズ）
    const bufferSize = this.audioContext.sampleRate * duration;
    const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.audioContext.createBufferSource();
    noise.buffer = buffer;

    // ノイズ用ハイパスフィルター（より高い周波数）
    const noiseFilter = this.audioContext.createBiquadFilter();
    noiseFilter.type = "highpass";
    noiseFilter.frequency.value = 7000;

    // ゲインノード
    const gainNode = this.audioContext.createGain();
    gainNode.gain.setValueAtTime(0.15, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

    // 接続
    noise.connect(noiseFilter);
    noiseFilter.connect(gainNode);
    gainNode.connect(this.fadeGain!);

    // 再生
    noise.start(startTime);
    noise.stop(startTime + duration);

    // クリーンアップ（タイムアウトを使用）
    setTimeout(() => {
      try {
        noise.disconnect();
        noiseFilter.disconnect();
        gainNode.disconnect();
      } catch (e) {
        // Already disconnected
      }
    }, duration * 1000 + 100);
  }
}
