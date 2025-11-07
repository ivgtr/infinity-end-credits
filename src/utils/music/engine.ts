import type { Chord, Note, SoundParameters, BassPattern, ArpeggioPattern } from "@/types/music";
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
      this.masterGain = this.audioContext.createGain();
      this.masterGain.gain.value = 0.15; // 全体的に控えめな音量
      this.masterGain.connect(this.audioContext.destination);

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
    gainNode.connect(this.masterGain);

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
    gainNode.connect(this.masterGain);

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
    gainNode.connect(this.masterGain);

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
    gainNode.connect(this.masterGain);

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
}
