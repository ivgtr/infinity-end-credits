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

/**
 * ====================
 * 有名な定型メロディパターン生成関数
 * ====================
 */

/**
 * クラシック音楽の定型パターン
 */

/**
 * モーツァルト・ロケット（急速上昇アルペジオ）
 * 1度→3度→5度→8度（オクターブ）の典型的な上昇パターン
 */
export function createMozartRocket(root: number, duration: number): MelodyPattern {
  const noteCount = 8;
  const noteDuration = duration / noteCount;
  const notes: Note[] = [];

  // 1度→3度→5度→8度（オクターブ）の上昇
  const intervals = [0, 4, 7, 12, 0, 4, 7, 12];

  for (let i = 0; i < noteCount; i++) {
    notes.push({
      pitch: root + intervals[i]! + 12,
      duration: noteDuration * 0.9,
      startTime: noteDuration * i,
      velocity: 0.3 + (i * 0.02),
    });
  }

  return { name: "Mozart Rocket", notes, repeat: 1 };
}

/**
 * 運命の動機（短短短長リズム）
 * ベートーヴェン交響曲第5番の有名なリズムパターン
 */
export function createFateMotif(root: number, duration: number): MelodyPattern {
  const shortDur = duration / 8;
  const longDur = duration / 2;

  return {
    name: "Fate Motif",
    notes: [
      { pitch: root + 7 + 12, duration: shortDur, startTime: 0, velocity: 0.35 },
      { pitch: root + 7 + 12, duration: shortDur, startTime: shortDur, velocity: 0.35 },
      { pitch: root + 7 + 12, duration: shortDur, startTime: shortDur * 2, velocity: 0.35 },
      { pitch: root + 4 + 12, duration: longDur, startTime: shortDur * 3, velocity: 0.38 },
    ],
    repeat: 1,
  };
}

/**
 * アルベルティバス（分散和音：低-高-中-高）
 * クラシック時代のピアノ伴奏の典型パターン
 */
export function createAlbertiBass(root: number, duration: number): MelodyPattern {
  const noteDuration = duration / 8;
  const notes: Note[] = [];

  // パターン: 1度-5度-3度-5度を繰り返す
  const pattern = [0, 7, 4, 7];

  for (let rep = 0; rep < 2; rep++) {
    pattern.forEach((interval, i) => {
      notes.push({
        pitch: root + interval + 24,
        duration: noteDuration * 0.9,
        startTime: noteDuration * (i + rep * 4),
        velocity: 0.28,
      });
    });
  }

  return { name: "Alberti Bass", notes, repeat: 1 };
}

/**
 * バロック・セクエンス（音型の反復移動）
 * 同じパターンを異なる音程で繰り返す
 */
export function createBaroqueSequence(root: number, duration: number): MelodyPattern {
  const noteDur = duration / 12;
  const notes: Note[] = [];

  // 基本パターン: 上昇3音
  const basePattern = [0, 2, 4];
  
  // パターンを3回、異なる開始音で繰り返す
  const startNotes = [0, 2, 4, 7];

  startNotes.forEach((start, groupIndex) => {
    basePattern.forEach((interval, i) => {
      notes.push({
        pitch: root + start + interval + 24,
        duration: noteDur * 0.9,
        startTime: noteDur * (i + groupIndex * 3),
        velocity: 0.3,
      });
    });
  });

  return { name: "Baroque Sequence", notes, repeat: 1 };
}

/**
 * ポップス/ロックの定番パターン
 */

/**
 * オクターブジャンプ（主音→オクターブ上→5度）
 * キャッチーなフックラインの定番
 */
export function createOctaveJump(root: number, duration: number): MelodyPattern {
  return {
    name: "Octave Jump",
    notes: [
      { pitch: root + 24, duration: duration * 0.25, startTime: 0, velocity: 0.35 },
      { pitch: root + 36, duration: duration * 0.4, startTime: duration * 0.25, velocity: 0.38 },
      { pitch: root + 31, duration: duration * 0.35, startTime: duration * 0.65, velocity: 0.33 },
    ],
    repeat: 1,
  };
}

/**
 * ペンタトニック・ロック（典型的なロックリフ）
 * マイナーペンタトニックスケールの順次進行
 */
export function createPentatonicRock(root: number, duration: number): MelodyPattern {
  const noteDur = duration / 5;
  // マイナーペンタトニック: 1度→♭3度→4度→5度→♭7度
  const intervals = [0, 3, 5, 7, 10];
  const notes: Note[] = [];

  intervals.forEach((interval, i) => {
    notes.push({
      pitch: root + interval + 24,
      duration: noteDur * 0.85,
      startTime: noteDur * i,
      velocity: 0.32 + (Math.random() * 0.06),
    });
  });

  return { name: "Pentatonic Rock", notes, repeat: 1 };
}

/**
 * シンコペーション8ビート（裏拍強調）
 * ファンク/ディスコの典型的なリズムパターン
 */
export function createSyncopated8Beat(root: number, duration: number): MelodyPattern {
  const noteDur = duration / 8;
  const notes: Note[] = [];

  // リズムパターン: 裏拍を強調
  const pattern = [
    { interval: 0, velocity: 0.25 },
    { interval: 2, velocity: 0.35 }, // 裏拍強調
    { interval: 4, velocity: 0.28 },
    { interval: 2, velocity: 0.36 }, // 裏拍強調
    { interval: 0, velocity: 0.26 },
    { interval: 4, velocity: 0.34 }, // 裏拍強調
    { interval: 7, velocity: 0.3 },
    { interval: 4, velocity: 0.32 },
  ];

  pattern.forEach(({ interval, velocity }, i) => {
    notes.push({
      pitch: root + interval + 24,
      duration: noteDur * 0.7,
      startTime: noteDur * i,
      velocity,
    });
  });

  return { name: "Syncopated 8-Beat", notes, repeat: 1 };
}

/**
 * ジャズの定型リック
 */

/**
 * ブルーノート下降（♭7→♭6→5→♭3）
 * ブルース感を出す定番の下降フレーズ
 */
export function createBlueNoteDescend(root: number, duration: number): MelodyPattern {
  const noteDur = duration / 4;
  const intervals = [10, 8, 7, 3]; // ♭7, ♭6, 5, ♭3
  const notes: Note[] = [];

  intervals.forEach((interval, i) => {
    notes.push({
      pitch: root + interval + 24,
      duration: noteDur * 0.9,
      startTime: noteDur * i,
      velocity: 0.31 - (i * 0.02),
    });
  });

  return { name: "Blue Note Descend", notes, repeat: 1 };
}

/**
 * ビバップ・クロマチック（スケール音 + 半音階）
 * ジャズのスムーズな音の連結
 */
export function createBebopChromatic(root: number, duration: number): MelodyPattern {
  const noteDur = duration / 8;
  // 1→2→♯2→3→4→♯4→5→6の半音階的上昇
  const intervals = [0, 2, 3, 4, 5, 6, 7, 9];
  const notes: Note[] = [];

  intervals.forEach((interval, i) => {
    notes.push({
      pitch: root + interval + 24,
      duration: noteDur * 0.85,
      startTime: noteDur * i,
      velocity: 0.29 + (i * 0.01),
    });
  });

  return { name: "Bebop Chromatic", notes, repeat: 1 };
}

/**
 * ii-V-I ターンアラウンド
 * ジャズで最も一般的なコード進行に合わせたフレーズ
 */
export function createIIVITurnaround(root: number, duration: number): MelodyPattern {
  const noteDur = duration / 6;
  // ドリアン→ミクソリディアン→メジャーの順次進行
  const intervals = [2, 4, 5, 7, 9, 11];
  const notes: Note[] = [];

  intervals.forEach((interval, i) => {
    notes.push({
      pitch: root + interval + 24,
      duration: noteDur * 0.95,
      startTime: noteDur * i,
      velocity: 0.31,
    });
  });

  return { name: "ii-V-I Turnaround", notes, repeat: 1 };
}

/**
 * 民族音楽の定型パターン
 */

/**
 * 陰旋下降（日本の演歌風）
 * 日本的な哀愁を帯びた下降メロディ
 */
export function createInsenDescend(root: number, duration: number): MelodyPattern {
  const noteDur = duration / 5;
  // レ→ド→ラ→ファ→ミ（相対音程）
  const intervals = [2, 0, -3, -5, -7];
  const notes: Note[] = [];

  intervals.forEach((interval, i) => {
    notes.push({
      pitch: root + interval + 24,
      duration: noteDur * 1.1,
      startTime: noteDur * i,
      velocity: 0.33 - (i * 0.015),
    });
  });

  return { name: "Insen Descend", notes, repeat: 1 };
}

/**
 * ケルト・ロール（装飾音の連続）
 * アイルランド/スコットランドの伝統音楽風
 */
export function createCelticRoll(root: number, duration: number): MelodyPattern {
  const noteDur = duration / 12;
  const notes: Note[] = [];

  // 主音周辺の細かい装飾
  const pattern = [0, 2, 0, -2, 0, 2, 4, 2, 0, 2, 4, 7];

  pattern.forEach((interval, i) => {
    notes.push({
      pitch: root + interval + 24,
      duration: noteDur * 0.8,
      startTime: noteDur * i,
      velocity: 0.27 + (Math.random() * 0.08),
    });
  });

  return { name: "Celtic Roll", notes, repeat: 1 };
}

/**
 * ヒジャーズ・マカーム（中東の音階）
 * 増2度を含むエキゾチックな音程
 */
export function createHijazMaqam(root: number, duration: number): MelodyPattern {
  const noteDur = duration / 6;
  // ヒジャーズ: 半音→増2度→半音の特徴的な音程
  const intervals = [0, 1, 5, 6, 7, 10];
  const notes: Note[] = [];

  intervals.forEach((interval, i) => {
    notes.push({
      pitch: root + interval + 24,
      duration: noteDur * 0.95,
      startTime: noteDur * i,
      velocity: 0.32,
    });
  });

  return { name: "Hijaz Maqam", notes, repeat: 1 };
}

/**
 * ラーガ・オーナメント（インド古典音楽）
 * 主音周辺の細かい装飾音
 */
export function createRagaOrnament(root: number, duration: number): MelodyPattern {
  const noteDur = duration / 10;
  const notes: Note[] = [];

  // 主音周辺の装飾: 上下の補助音を使った装飾
  const pattern = [0, 1, 0, -1, 0, 2, 1, 0, 2, 4];

  pattern.forEach((interval, i) => {
    notes.push({
      pitch: root + interval + 24,
      duration: noteDur * 0.7,
      startTime: noteDur * i,
      velocity: 0.28 + (Math.random() * 0.08),
    });
  });

  return { name: "Raga Ornament", notes, repeat: 1 };
}

/**
 * 現代電子音楽パターン
 */

/**
 * アルペジエイター・シーケンス（16分音符の均等アルペジオ）
 * EDM/トランスの定番パターン
 */
export function createArpeggiatorSeq(root: number, duration: number): MelodyPattern {
  const noteDur = duration / 16;
  const notes: Note[] = [];

  // 1-3-5-8のアルペジオを4回繰り返す
  const pattern = [0, 4, 7, 12];

  for (let rep = 0; rep < 4; rep++) {
    pattern.forEach((interval, i) => {
      notes.push({
        pitch: root + interval + 24,
        duration: noteDur * 0.75,
        startTime: noteDur * (i + rep * 4),
        velocity: 0.28,
      });
    });
  }

  return { name: "Arpeggiator Sequence", notes, repeat: 1 };
}

/**
 * ドロップ・ビルド（徐々に上昇→急降下）
 * ダブステップ/トラップの定番テクニック
 */
export function createDropBuild(root: number, duration: number): MelodyPattern {
  const notes: Note[] = [];

  // ビルドアップ（徐々に上昇）
  for (let i = 0; i < 6; i++) {
    notes.push({
      pitch: root + (i * 2) + 24,
      duration: duration * 0.1,
      startTime: duration * 0.12 * i,
      velocity: 0.25 + (i * 0.02),
    });
  }

  // ドロップ（急降下）
  notes.push({
    pitch: root + 12,
    duration: duration * 0.3,
    startTime: duration * 0.72,
    velocity: 0.4,
  });

  return { name: "Drop Build", notes, repeat: 1 };
}

/**
 * サイドチェイン・リズム（キックに合わせた音量変動風）
 * ハウス/エレクトロの典型的なグルーヴ
 */
export function createSidechainRhythm(root: number, duration: number): MelodyPattern {
  const noteDur = duration / 4;
  const notes: Note[] = [];

  // キックのタイミングで音量が下がるイメージ
  const pattern = [
    { interval: 0, velocity: 0.2 },  // キック（小）
    { interval: 4, velocity: 0.35 }, // オフビート（大）
    { interval: 7, velocity: 0.22 }, // キック（小）
    { interval: 4, velocity: 0.36 }, // オフビート（大）
  ];

  pattern.forEach(({ interval, velocity }, i) => {
    notes.push({
      pitch: root + interval + 24,
      duration: noteDur * 0.9,
      startTime: noteDur * i,
      velocity,
    });
  });

  return { name: "Sidechain Rhythm", notes, repeat: 1 };
}

/**
 * ====================
 * コード進行連動メロディ生成関数
 * ====================
 */

/**
 * コード進行に沿ったメロディーを生成
 * 各コードのコードトーン（構成音）を使って、コード進行に沿ったメロディーを作る
 * 
 * @param progression コード進行
 * @returns 生成されたメロディーパターン
 */
export function generateChordBasedMelody(progression: ChordProgression): MelodyPattern {
  const notes: Note[] = [];
  let currentTime = 0;

  // 各コードに対してメロディーを生成
  progression.chords.forEach((chord, chordIndex) => {
    const chordNotes = getChordNotes(chord);
    const chordDuration = chord.duration;
    
    // コードごとのメロディーパターンを選択
    const patternType = Math.floor(Math.random() * 5);

    switch (patternType) {
      case 0: {
        // パターン1: コードトーンの上昇
        const notesPerChord = Math.min(chordNotes.length, 3);
        const noteDuration = chordDuration / notesPerChord;

        for (let i = 0; i < notesPerChord; i++) {
          notes.push({
            pitch: chordNotes[i]! + 12, // 1オクターブ上
            duration: noteDuration * 0.9,
            startTime: currentTime + (noteDuration * i),
            velocity: 0.32 + (i * 0.03),
          });
        }
        break;
      }

      case 1: {
        // パターン2: コードトーンの下降
        const notesPerChord = Math.min(chordNotes.length, 3);
        const noteDuration = chordDuration / notesPerChord;

        for (let i = 0; i < notesPerChord; i++) {
          const noteIndex = chordNotes.length - 1 - i;
          notes.push({
            pitch: chordNotes[noteIndex]! + 12,
            duration: noteDuration * 0.9,
            startTime: currentTime + (noteDuration * i),
            velocity: 0.34 - (i * 0.02),
          });
        }
        break;
      }

      case 2: {
        // パターン3: ロングトーン（コードの最高音）
        const topNote = chordNotes[chordNotes.length - 1]!;
        notes.push({
          pitch: topNote + 12,
          duration: chordDuration * 0.85,
          startTime: currentTime,
          velocity: 0.35,
        });
        break;
      }

      case 3: {
        // パターン4: アルペジオ（上下）
        const pattern = [0, 1, 2, 1]; // 低-中-高-中
        const noteDuration = chordDuration / pattern.length;

        pattern.forEach((index, i) => {
          const noteIndex = Math.min(index, chordNotes.length - 1);
          notes.push({
            pitch: chordNotes[noteIndex]! + 12,
            duration: noteDuration * 0.85,
            startTime: currentTime + (noteDuration * i),
            velocity: 0.3 + (Math.random() * 0.08),
          });
        });
        break;
      }

      case 4: {
        // パターン5: リズミカルな繰り返し（ルート音中心）
        const rootNote = chordNotes[0]!;
        const thirdNote = chordNotes[1] ?? rootNote;
        const rhythmPattern = [
          { note: rootNote, ratio: 0.3 },
          { note: thirdNote, ratio: 0.2 },
          { note: rootNote, ratio: 0.3 },
          { note: thirdNote, ratio: 0.2 },
        ];

        let localTime = 0;
        rhythmPattern.forEach(({ note, ratio }) => {
          notes.push({
            pitch: note + 12,
            duration: chordDuration * ratio * 0.8,
            startTime: currentTime + localTime,
            velocity: 0.31,
          });
          localTime += chordDuration * ratio;
        });
        break;
      }
    }

    currentTime += chordDuration;
  });

  return {
    name: "Chord-Based Melody",
    notes,
    repeat: 1,
  };
}

/**
 * コード進行に沿ったスムーズなメロディーを生成
 * 前のコードから次のコードへ滑らかに移行する
 * 
 * @param progression コード進行
 * @returns 生成されたメロディーパターン
 */
export function generateSmoothChordMelody(progression: ChordProgression): MelodyPattern {
  const notes: Note[] = [];
  let currentTime = 0;
  let previousNote = -1; // 前の音程

  progression.chords.forEach((chord, chordIndex) => {
    const chordNotes = getChordNotes(chord);
    const chordDuration = chord.duration;

    // コードの中から、前の音に近い音を選ぶ（スムーズな進行）
    let targetNote: number;

    if (previousNote === -1) {
      // 最初のコード: ランダムに選択
      targetNote = chordNotes[Math.floor(Math.random() * chordNotes.length)]!;
    } else {
      // 前の音に最も近いコードトーンを選択
      let closestNote = chordNotes[0]!;
      let minDistance = Math.abs(previousNote - closestNote);

      chordNotes.forEach((note) => {
        const distance = Math.abs(previousNote - note);
        if (distance < minDistance) {
          minDistance = distance;
          closestNote = note;
        }
      });

      targetNote = closestNote;
    }

    // メロディーを生成（2-3音のフレーズ）
    const phraseLength = Math.floor(Math.random() * 2) + 2; // 2-3音
    const noteDuration = chordDuration / phraseLength;

    for (let i = 0; i < phraseLength; i++) {
      let pitch: number;

      if (i === 0) {
        // 最初の音: 選択したコードトーン
        pitch = targetNote + 12;
      } else {
        // その他の音: コード内で隣接音を選ぶ
        const currentIndex = chordNotes.indexOf(targetNote);
        const variation = Math.random() > 0.5 ? 1 : -1;
        const newIndex = Math.max(0, Math.min(chordNotes.length - 1, currentIndex + variation));
        pitch = chordNotes[newIndex]! + 12;
        targetNote = chordNotes[newIndex]!;
      }

      notes.push({
        pitch,
        duration: noteDuration * 0.9,
        startTime: currentTime + (noteDuration * i),
        velocity: 0.32 + (Math.random() * 0.06),
      });

      previousNote = pitch - 12; // 次のコードのために保存
    }

    currentTime += chordDuration;
  });

  return {
    name: "Smooth Chord Melody",
    notes,
    repeat: 1,
  };
}

/**
 * アンビエント専用の定型パターン
 */

/**
 * ブライアン・イーノ風パッド（ゆっくりとした音色の変化）
 */
export function createEnoAmbientPad(root: number, duration: number): MelodyPattern {
  const notes: Note[] = [];
  
  // 非常に長いロングトーンを複数重ねる
  const chordNotes = [0, 4, 7, 11]; // maj7コード
  let currentTime = 0;
  const noteCount = Math.floor(duration / 6) + 1;

  for (let i = 0; i < noteCount; i++) {
    chordNotes.forEach((interval, idx) => {
      notes.push({
        pitch: root + interval + 24,
        duration: 6 + (Math.random() * 2),
        startTime: currentTime + (idx * 1.5),
        velocity: 0.25 + (Math.random() * 0.05),
      });
    });
    currentTime += 6;
  }

  return { name: "Eno Ambient Pad", notes, repeat: 1 };
}

/**
 * シマー・リバーブ風（高音域の煌めき）
 */
export function createShimmerReverb(root: number, duration: number): MelodyPattern {
  const notes: Note[] = [];
  const noteCount = Math.floor(duration / 2);

  for (let i = 0; i < noteCount; i++) {
    // 高音域でキラキラした音
    const intervals = [0, 4, 7, 12, 16, 19];
    const interval = intervals[Math.floor(Math.random() * intervals.length)]!;
    
    notes.push({
      pitch: root + interval + 36, // 3オクターブ上
      duration: 2 + (Math.random() * 2),
      startTime: i * 2,
      velocity: 0.2 + (Math.random() * 0.08),
    });
  }

  return { name: "Shimmer Reverb", notes, repeat: 1 };
}

/**
 * テクスチャル・ドローン（微妙に変化する持続音）
 */
export function createTexturalDrone(root: number, duration: number): MelodyPattern {
  const notes: Note[] = [];
  
  // ベース音を持続させつつ、微妙に変化する上声部
  notes.push({
    pitch: root + 12,
    duration: duration * 0.95,
    startTime: 0,
    velocity: 0.28,
  });

  // 微妙に変化する中音域
  const changePoints = Math.floor(duration / 4);
  for (let i = 0; i < changePoints; i++) {
    const intervals = [4, 7, 11, 14];
    const interval = intervals[i % intervals.length]!;
    
    notes.push({
      pitch: root + interval + 12,
      duration: 4,
      startTime: i * 4,
      velocity: 0.22 + (Math.random() * 0.06),
    });
  }

  return { name: "Textural Drone", notes, repeat: 1 };
}

/**
 * グラニュラー・クラウド（粒状の浮遊感）
 */
export function createGranularCloud(root: number, duration: number): MelodyPattern {
  const notes: Note[] = [];
  const grainCount = Math.floor(duration * 3); // 3粒/秒

  for (let i = 0; i < grainCount; i++) {
    // ランダムな音程（スケール内）
    const intervals = [0, 2, 4, 7, 9, 11];
    const interval = intervals[Math.floor(Math.random() * intervals.length)]!;
    const octaveShift = Math.floor(Math.random() * 3) * 12;
    
    notes.push({
      pitch: root + interval + 12 + octaveShift,
      duration: 0.3 + (Math.random() * 0.5),
      startTime: (duration / grainCount) * i + (Math.random() * 0.2),
      velocity: 0.18 + (Math.random() * 0.12),
    });
  }

  return { name: "Granular Cloud", notes, repeat: 1 };
}

/**
 * モジュラー・シーケンス（ゆっくりと変化するパターン）
 */
export function createModularSequence(root: number, duration: number): MelodyPattern {
  const notes: Note[] = [];
  const pattern = [0, 7, 4, 9, 2, 11, 7, 4]; // 不規則だが調和的
  const noteDur = duration / pattern.length;

  pattern.forEach((interval, i) => {
    notes.push({
      pitch: root + interval + 24,
      duration: noteDur * 0.95,
      startTime: noteDur * i,
      velocity: 0.26 + (Math.sin(i) * 0.08), // 波状に音量変化
    });
  });

  return { name: "Modular Sequence", notes, repeat: 1 };
}
