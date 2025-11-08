import type { Chord, ChordProgression, MelodyPattern, Note } from "@/types/music";

/**
 * MIDIノート番号の定数
 */
export const NOTES = {
  C3: 48,
  D3: 50,
  E3: 52,
  F3: 53,
  G3: 55,
  A3: 57,
  B3: 59,
  C4: 60,
  D4: 62,
  E4: 64,
  F4: 65,
  G4: 67,
  A4: 69,
  B4: 71,
  C5: 72,
  D5: 74,
  E5: 76,
  F5: 77,
  G5: 79,
  A5: 81,
} as const;

/**
 * スケール/モード定義（ルートからの半音数）
 */
export const SCALES = {
  // 基本スケール
  major: [0, 2, 4, 5, 7, 9, 11], // メジャースケール (Ionian)
  minor: [0, 2, 3, 5, 7, 8, 10], // ナチュラルマイナー (Aeolian)
  harmonicMinor: [0, 2, 3, 5, 7, 8, 11], // ハーモニックマイナー
  melodicMinor: [0, 2, 3, 5, 7, 9, 11], // メロディックマイナー

  // モード
  dorian: [0, 2, 3, 5, 7, 9, 10], // ドリアン（ジャズ的）
  phrygian: [0, 1, 3, 5, 7, 8, 10], // フリジアン（スペイン風）
  lydian: [0, 2, 4, 6, 7, 9, 11], // リディアン（浮遊感）
  mixolydian: [0, 2, 4, 5, 7, 9, 10], // ミクソリディアン（ブルース風）
  locrian: [0, 1, 3, 5, 6, 8, 10], // ロクリアン（不安定）

  // エキゾチックスケール
  pentatonic: [0, 2, 4, 7, 9], // ペンタトニック（5音音階）
  minorPentatonic: [0, 3, 5, 7, 10], // マイナーペンタトニック
  blues: [0, 3, 5, 6, 7, 10], // ブルーススケール
  wholeTone: [0, 2, 4, 6, 8, 10], // ホールトーン（全音音階）
  diminished: [0, 2, 3, 5, 6, 8, 9, 11], // ディミニッシュ

  // ワールドミュージック
  hirajoshi: [0, 2, 3, 7, 8], // 平調子（日本）
  inSen: [0, 1, 5, 7, 10], // 陰旋（日本）
  phrygianDominant: [0, 1, 4, 5, 7, 8, 10], // フリジアンドミナント（中東風）
  hungarianMinor: [0, 2, 3, 6, 7, 8, 11], // ハンガリアンマイナー
} as const;

/**
 * コードインターバル定義
 */
const CHORD_INTERVALS = {
  major: [0, 4, 7],
  minor: [0, 3, 7],
  sus4: [0, 5, 7],
  sus2: [0, 2, 7],
  maj7: [0, 4, 7, 11],
  min7: [0, 3, 7, 10],
  dom7: [0, 4, 7, 10],
} as const;

/**
 * コードから音符配列を生成
 */
export function getChordNotes(chord: Chord): number[] {
  const intervals = CHORD_INTERVALS[chord.type];
  return intervals.map(interval => chord.root + interval);
}

/**
 * スケールから指定オクターブの音符配列を生成
 */
export function getScaleNotes(
  root: number,
  scaleName: keyof typeof SCALES,
  octaves: number = 1
): number[] {
  const scale = SCALES[scaleName];
  const notes: number[] = [];

  for (let octave = 0; octave < octaves; octave++) {
    for (const interval of scale) {
      notes.push(root + interval + (octave * 12));
    }
  }

  return notes;
}

/**
 * スケールからランダムなメロディー音符を取得
 */
export function getRandomScaleNote(
  root: number,
  scaleName: keyof typeof SCALES,
  minOctave: number = 0,
  maxOctave: number = 2
): number {
  const scale = SCALES[scaleName];
  const octave = Math.floor(Math.random() * (maxOctave - minOctave + 1)) + minOctave;
  const scaleIndex = Math.floor(Math.random() * scale.length);
  return root + scale[scaleIndex]! + (octave * 12);
}

/**
 * 壮大だけど退屈なコード進行パターン
 */
export const CHORD_PROGRESSIONS: ChordProgression[] = [
  // I-V-vi-IV (王道進行)
  {
    name: "Royal Road",
    tempo: 65,
    chords: [
      { root: NOTES.C4, type: "major", duration: 4 },
      { root: NOTES.G3, type: "major", duration: 4 },
      { root: NOTES.A3, type: "minor", duration: 4 },
      { root: NOTES.F3, type: "major", duration: 4 },
    ],
  },
  // I-vi-IV-V
  {
    name: "Classic Pop",
    tempo: 60,
    chords: [
      { root: NOTES.C4, type: "major", duration: 4 },
      { root: NOTES.A3, type: "minor", duration: 4 },
      { root: NOTES.F3, type: "major", duration: 4 },
      { root: NOTES.G3, type: "major", duration: 4 },
    ],
  },
  // I-IV-I-V (シンプル)
  {
    name: "Simple",
    tempo: 70,
    chords: [
      { root: NOTES.C4, type: "major", duration: 4 },
      { root: NOTES.F3, type: "major", duration: 4 },
      { root: NOTES.C4, type: "major", duration: 4 },
      { root: NOTES.G3, type: "major", duration: 4 },
    ],
  },
  // I-V-vi-iii-IV-I-IV-V (エモーショナル)
  {
    name: "Emotional",
    tempo: 62,
    chords: [
      { root: NOTES.C4, type: "major", duration: 2 },
      { root: NOTES.G3, type: "major", duration: 2 },
      { root: NOTES.A3, type: "minor", duration: 2 },
      { root: NOTES.E3, type: "minor", duration: 2 },
      { root: NOTES.F3, type: "major", duration: 2 },
      { root: NOTES.C4, type: "major", duration: 2 },
      { root: NOTES.F3, type: "major", duration: 2 },
      { root: NOTES.G3, type: "major", duration: 2 },
    ],
  },
  // I-IV-vi-V (アンビエント)
  {
    name: "Ambient",
    tempo: 55,
    chords: [
      { root: NOTES.C4, type: "maj7", duration: 6 },
      { root: NOTES.F3, type: "maj7", duration: 6 },
      { root: NOTES.A3, type: "min7", duration: 6 },
      { root: NOTES.G3, type: "sus4", duration: 6 },
    ],
  },
];

/**
 * シンプルなメロディーパターン
 * 壮大だけど退屈な感じを出すために、長い音符と反復を使用
 */
export const MELODY_PATTERNS: MelodyPattern[] = [
  // ゆったりとした上昇パターン
  {
    name: "Ascending Slow",
    notes: [
      { pitch: NOTES.C5, duration: 2, startTime: 0, velocity: 0.3 },
      { pitch: NOTES.D5, duration: 2, startTime: 2, velocity: 0.3 },
      { pitch: NOTES.E5, duration: 2, startTime: 4, velocity: 0.3 },
      { pitch: NOTES.G5, duration: 2, startTime: 6, velocity: 0.3 },
      { pitch: NOTES.E5, duration: 4, startTime: 8, velocity: 0.25 },
    ],
    repeat: 2,
  },
  // 反復的なパターン
  {
    name: "Repetitive",
    notes: [
      { pitch: NOTES.E5, duration: 3, startTime: 0, velocity: 0.3 },
      { pitch: NOTES.D5, duration: 1, startTime: 3, velocity: 0.25 },
      { pitch: NOTES.E5, duration: 3, startTime: 4, velocity: 0.3 },
      { pitch: NOTES.C5, duration: 1, startTime: 7, velocity: 0.25 },
    ],
    repeat: 3,
  },
  // ゆったりとした下降パターン
  {
    name: "Descending Slow",
    notes: [
      { pitch: NOTES.G5, duration: 3, startTime: 0, velocity: 0.3 },
      { pitch: NOTES.E5, duration: 3, startTime: 3, velocity: 0.3 },
      { pitch: NOTES.D5, duration: 3, startTime: 6, velocity: 0.3 },
      { pitch: NOTES.C5, duration: 3, startTime: 9, velocity: 0.25 },
    ],
    repeat: 2,
  },
  // ミニマルパターン
  {
    name: "Minimal",
    notes: [
      { pitch: NOTES.G5, duration: 4, startTime: 0, velocity: 0.25 },
      { pitch: NOTES.E5, duration: 4, startTime: 4, velocity: 0.25 },
      { pitch: NOTES.G5, duration: 4, startTime: 8, velocity: 0.25 },
      { pitch: NOTES.C5, duration: 4, startTime: 12, velocity: 0.25 },
    ],
    repeat: 2,
  },
];

/**
 * ランダムにコード進行を選択
 */
export function getRandomChordProgression(): ChordProgression {
  return CHORD_PROGRESSIONS[
    Math.floor(Math.random() * CHORD_PROGRESSIONS.length)
  ]!;
}

/**
 * ランダムにメロディーパターンを選択
 */
export function getRandomMelodyPattern(): MelodyPattern {
  return MELODY_PATTERNS[
    Math.floor(Math.random() * MELODY_PATTERNS.length)
  ]!;
}

/**
 * スケールベースのメロディーパターンを生成
 * @param root ルート音（MIDIノート番号）
 * @param scaleName スケール名
 * @param duration メロディーの総持続時間（秒）
 * @param noteCount 音符の数（デフォルト: 4-8のランダム）
 * @returns 生成されたメロディーパターン
 */
export function generateScaleMelody(
  root: number,
  scaleName: keyof typeof SCALES,
  duration: number,
  noteCount?: number
): MelodyPattern {
  const scale = SCALES[scaleName];
  const count = noteCount ?? Math.floor(Math.random() * 5) + 4; // 4-8音符

  const notes: Note[] = [];
  let currentTime = 0;

  // メロディーの動きのパターンを決定
  const movementPattern = Math.random();
  let previousScaleIndex = Math.floor(scale.length / 2); // 中央付近から開始

  for (let i = 0; i < count; i++) {
    // 音符の持続時間（総時間を音符数で均等に分配、若干のランダム性を持たせる）
    const baseDuration = duration / count;
    const durationVariation = baseDuration * (Math.random() * 0.4 - 0.2); // ±20%
    const noteDuration = Math.max(0.5, baseDuration + durationVariation);

    // スケール内の音を選択（前の音との関連性を持たせる）
    let scaleIndex: number;

    if (movementPattern < 0.3) {
      // 上昇パターン
      scaleIndex = Math.min(scale.length - 1, previousScaleIndex + Math.floor(Math.random() * 3));
    } else if (movementPattern < 0.6) {
      // 下降パターン
      scaleIndex = Math.max(0, previousScaleIndex - Math.floor(Math.random() * 3));
    } else {
      // ランダムジャンプ（ただし近い音を選びやすい）
      const jump = Math.floor(Math.random() * 5) - 2; // -2 to +2
      scaleIndex = Math.max(0, Math.min(scale.length - 1, previousScaleIndex + jump));
    }

    // オクターブ選択（中央の2オクターブを中心に）
    const octave = i < count / 2 ?
      Math.floor(Math.random() * 2) : // 前半は低め
      Math.floor(Math.random() * 2) + 1; // 後半は高め

    const pitch = root + scale[scaleIndex]! + (octave * 12);

    // ベロシティ（音量）: 若干のランダム性
    const baseVelocity = 0.32;
    const velocity = baseVelocity + (Math.random() * 0.12 - 0.06); // ±0.06

    notes.push({
      pitch,
      duration: noteDuration,
      startTime: currentTime,
      velocity: Math.max(0.2, Math.min(0.45, velocity)),
    });

    currentTime += noteDuration;
    previousScaleIndex = scaleIndex;
  }

  return {
    name: `Generated ${scaleName}`,
    notes,
    repeat: 1,
  };
}

/**
 * スケールベースのシンプルなメロディーを生成（より音楽的）
 * @param root ルート音
 * @param scaleName スケール名
 * @param chordDuration コード進行の長さ
 */
export function generateMusicalMelody(
  root: number,
  scaleName: keyof typeof SCALES,
  chordDuration: number
): MelodyPattern {
  const scale = SCALES[scaleName];

  // メロディーのフレーズパターンを選択
  const phraseType = Math.floor(Math.random() * 4);

  const notes: Note[] = [];

  switch (phraseType) {
    case 0: {
      // アルペジオ的上昇フレーズ
      const baseOctave = 1;
      for (let i = 0; i < 4; i++) {
        const scaleIndex = i % scale.length;
        const octaveOffset = Math.floor(i / scale.length);
        notes.push({
          pitch: root + scale[scaleIndex]! + ((baseOctave + octaveOffset) * 12),
          duration: chordDuration / 4,
          startTime: (chordDuration / 4) * i,
          velocity: 0.3 + (i * 0.05),
        });
      }
      break;
    }

    case 1: {
      // ステップワイズ（順次進行）
      const startIndex = Math.floor(Math.random() * (scale.length - 3));
      const direction = Math.random() > 0.5 ? 1 : -1;

      for (let i = 0; i < 5; i++) {
        const scaleIndex = Math.max(0, Math.min(scale.length - 1, startIndex + (i * direction)));
        notes.push({
          pitch: root + scale[scaleIndex]! + 24, // 2オクターブ上
          duration: chordDuration / 6,
          startTime: (chordDuration / 6) * i,
          velocity: 0.32,
        });
      }
      break;
    }

    case 2: {
      // ロングトーン + 装飾
      const mainNoteIndex = Math.floor(Math.random() * scale.length);
      notes.push({
        pitch: root + scale[mainNoteIndex]! + 24,
        duration: chordDuration * 0.6,
        startTime: 0,
        velocity: 0.35,
      });

      // 短い装飾音
      const ornamentIndex = (mainNoteIndex + 1) % scale.length;
      notes.push({
        pitch: root + scale[ornamentIndex]! + 24,
        duration: chordDuration * 0.2,
        startTime: chordDuration * 0.7,
        velocity: 0.28,
      });
      break;
    }

    case 3: {
      // リズミカルな反復
      const noteIndex = Math.floor(Math.random() * scale.length);
      const rhythmPattern = [0.3, 0.2, 0.3, 0.2]; // 比率
      let currentTime = 0;

      rhythmPattern.forEach((ratio) => {
        notes.push({
          pitch: root + scale[noteIndex]! + 24,
          duration: chordDuration * ratio * 0.8, // 少し短めに
          startTime: currentTime,
          velocity: 0.3 + (Math.random() * 0.1),
        });
        currentTime += chordDuration * ratio;
      });
      break;
    }
  }

  return {
    name: `Musical ${scaleName} Phrase`,
    notes,
    repeat: 1,
  };
}
