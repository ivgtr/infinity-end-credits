import type { MusicStyle, ArpeggioPattern, BassPattern } from "@/types/music";
import { NOTES } from "./patterns";

/**
 * 共通ベースパターン
 */
export const BASS_PATTERNS: BassPattern[] = [
  {
    name: "Root-Fifth",
    pattern: [0, 7], // ルート、5度
    durations: [2, 2],
    rhythm: [0, 2],
  },
  {
    name: "Walking Bass",
    pattern: [0, 2, 4, 5], // ルート、2度、3度、4度
    durations: [1, 1, 1, 1],
    rhythm: [0, 1, 2, 3],
  },
  {
    name: "Octave Jump",
    pattern: [0, 12, 0, 7], // ルート、オクターブ上、ルート、5度
    durations: [1, 1, 1, 1],
    rhythm: [0, 1, 2, 3],
  },
  {
    name: "Minimal",
    pattern: [0], // ルートのみ
    durations: [4],
    rhythm: [0],
  },
];

/**
 * 共通アルペジオパターン
 */
export const ARPEGGIO_PATTERNS: ArpeggioPattern[] = [
  {
    name: "Up",
    pattern: [0, 1, 2, 1], // コードの音を上昇
    noteDuration: 0.5,
    speed: 1,
  },
  {
    name: "Down",
    pattern: [2, 1, 0, 1], // コードの音を下降
    noteDuration: 0.5,
    speed: 1,
  },
  {
    name: "Up-Down",
    pattern: [0, 1, 2, 1, 0, 1, 2, 1], // 上昇下降
    noteDuration: 0.25,
    speed: 1.5,
  },
  {
    name: "Random",
    pattern: [0, 2, 1, 0, 2, 0, 1, 2], // ランダムパターン
    noteDuration: 0.3,
    speed: 1.2,
  },
];

/**
 * 1. 壮大（Grand）: 映画のようなエピック感
 */
export const GRAND_STYLE: MusicStyle = {
  type: "grand",
  name: "壮大",
  description: "映画のような壮大でエピックな雰囲気",
  soundParams: {
    padVolume: 0.09,
    padAttack: 1.0,
    padRelease: 1.5,
    leadVolume: 0.45,
    leadAttack: 0.15,
    leadRelease: 0.4,
    oscillatorType: "sine",
  },
  progressions: [
    // I-V-vi-IV (王道進行 / カノン進行バリエーション)
    {
      name: "Canon Progression",
      tempo: 65,
      chords: [
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.G3, type: "major", duration: 4 },
        { root: NOTES.A3, type: "minor", duration: 4 },
        { root: NOTES.F3, type: "major", duration: 4 },
      ],
    },
    // I-vi-IV-V (50s progression)
    {
      name: "50s Progression",
      tempo: 60,
      chords: [
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.A3, type: "minor", duration: 4 },
        { root: NOTES.F3, type: "major", duration: 4 },
        { root: NOTES.G3, type: "major", duration: 4 },
      ],
    },
    // I-IV-vi-V (sensitive feminine chord progression)
    {
      name: "Sensitive Progression",
      tempo: 58,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 5 },
        { root: NOTES.F3, type: "maj7", duration: 5 },
        { root: NOTES.A3, type: "min7", duration: 5 },
        { root: NOTES.G3, type: "sus4", duration: 5 },
      ],
    },
    // vi-IV-I-V (Let It Be progression / Pachelbel変形)
    {
      name: "Let It Be",
      tempo: 62,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 4 },
        { root: NOTES.F3, type: "major", duration: 4 },
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.G3, type: "major", duration: 4 },
      ],
    },
    // I-III-IV-iv (クリシェ進行 / 映画的)
    {
      name: "Cliche Progression",
      tempo: 56,
      chords: [
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.E3, type: "major", duration: 4 },
        { root: NOTES.F3, type: "major", duration: 4 },
        { root: NOTES.F3, type: "minor", duration: 4 },
      ],
    },
    // IV-V-iii-vi (逆循環 / Axis progression)
    {
      name: "Axis Progression",
      tempo: 64,
      chords: [
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.G3, type: "major", duration: 3 },
        { root: NOTES.E3, type: "minor", duration: 3 },
        { root: NOTES.A3, type: "minor", duration: 3 },
      ],
    },
    // I-bVII-bVI-bVII (Royal Road変化形)
    {
      name: "Royal Road Variant",
      tempo: 60,
      chords: [
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.A3 + 10, type: "major", duration: 4 }, // Bb
        { root: NOTES.G3 + 8, type: "major", duration: 4 }, // Ab
        { root: NOTES.A3 + 10, type: "major", duration: 4 }, // Bb
      ],
    },
  ],
  melodyPatterns: [
    {
      name: "Epic Rise",
      notes: [
        { pitch: NOTES.C5, duration: 3, startTime: 0, velocity: 0.3 },
        { pitch: NOTES.E5, duration: 3, startTime: 3, velocity: 0.32 },
        { pitch: NOTES.G5, duration: 3, startTime: 6, velocity: 0.35 },
        { pitch: NOTES.C5 + 12, duration: 3, startTime: 9, velocity: 0.38 },
      ],
      repeat: 1,
    },
    {
      name: "Heroic Theme",
      notes: [
        { pitch: NOTES.G5, duration: 2, startTime: 0, velocity: 0.35 },
        { pitch: NOTES.E5, duration: 2, startTime: 2, velocity: 0.33 },
        { pitch: NOTES.C5, duration: 2, startTime: 4, velocity: 0.3 },
        { pitch: NOTES.E5, duration: 2, startTime: 6, velocity: 0.32 },
        { pitch: NOTES.G5, duration: 4, startTime: 8, velocity: 0.35 },
      ],
      repeat: 1,
    },
  ],
  bassPatterns: BASS_PATTERNS.filter(p => ["Root-Fifth", "Octave Jump"].includes(p.name)),
  arpeggioPatterns: ARPEGGIO_PATTERNS.filter(p => ["Up", "Up-Down"].includes(p.name)),
  durationRange: [35, 55],
};

/**
 * 2. 退屈（Monotonous）: ミニマリスト的な反復
 */
export const MONOTONOUS_STYLE: MusicStyle = {
  type: "monotonous",
  name: "退屈",
  description: "極限のミニマリズムと反復",
  soundParams: {
    padVolume: 0.06,
    padAttack: 1.5,
    padRelease: 2.0,
    leadVolume: 0.25,
    leadAttack: 0.3,
    leadRelease: 0.6,
    oscillatorType: "sine",
  },
  progressions: [
    // I-IV (最もシンプル)
    {
      name: "Minimal Two",
      tempo: 45,
      chords: [
        { root: NOTES.C4, type: "major", duration: 8 },
        { root: NOTES.F3, type: "major", duration: 8 },
      ],
    },
    // vi-IV (アンビエント的)
    {
      name: "Ambient Two",
      tempo: 42,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 10 },
        { root: NOTES.F3, type: "major", duration: 10 },
      ],
    },
    // I-V (ドローン的)
    {
      name: "Drone",
      tempo: 40,
      chords: [
        { root: NOTES.C4, type: "sus2", duration: 12 },
        { root: NOTES.G3, type: "sus2", duration: 12 },
      ],
    },
    // I-bVII (Mixolydian)
    {
      name: "Mixolydian Minimal",
      tempo: 44,
      chords: [
        { root: NOTES.C4, type: "major", duration: 10 },
        { root: NOTES.A3 + 10, type: "major", duration: 10 }, // Bb
      ],
    },
    // vi-V (2コードマイナー)
    {
      name: "Two Chord Minor",
      tempo: 43,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 12 },
        { root: NOTES.E3, type: "major", duration: 12 },
      ],
    },
    // IV-I (サブドミナントドローン)
    {
      name: "Subdominant Drone",
      tempo: 41,
      chords: [
        { root: NOTES.F3, type: "sus2", duration: 14 },
        { root: NOTES.C4, type: "sus2", duration: 14 },
      ],
    },
  ],
  melodyPatterns: [
    {
      name: "Single Note",
      notes: [
        { pitch: NOTES.E5, duration: 8, startTime: 0, velocity: 0.2 },
        { pitch: NOTES.C5, duration: 8, startTime: 8, velocity: 0.2 },
      ],
      repeat: 1,
    },
  ],
  bassPatterns: BASS_PATTERNS.filter(p => p.name === "Minimal"),
  arpeggioPatterns: [],
  durationRange: [50, 80],
};

/**
 * 3. 明るい（Bright）: ポップで前向き
 */
export const BRIGHT_STYLE: MusicStyle = {
  type: "bright",
  name: "明るい",
  description: "ポップで前向きな雰囲気",
  soundParams: {
    padVolume: 0.08,
    padAttack: 0.3,
    padRelease: 0.6,
    leadVolume: 0.5,
    leadAttack: 0.05,
    leadRelease: 0.2,
    oscillatorType: "triangle",
  },
  progressions: [
    // I-IV-V (ポップスの基本)
    {
      name: "Pop Basic",
      tempo: 75,
      chords: [
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.G3, type: "major", duration: 3 },
        { root: NOTES.C4, type: "major", duration: 3 },
      ],
    },
    // I-vi-ii-V (Circle progression)
    {
      name: "Circle of Fifths",
      tempo: 72,
      chords: [
        { root: NOTES.C4, type: "major", duration: 2 },
        { root: NOTES.A3, type: "minor", duration: 2 },
        { root: NOTES.D4, type: "minor", duration: 2 },
        { root: NOTES.G3, type: "major", duration: 2 },
      ],
    },
    // I-V-vi-iii-IV-I-II-V (JPop進行)
    {
      name: "JPop Progression",
      tempo: 68,
      chords: [
        { root: NOTES.C4, type: "major", duration: 2 },
        { root: NOTES.G3, type: "major", duration: 2 },
        { root: NOTES.A3, type: "minor", duration: 2 },
        { root: NOTES.E3, type: "minor", duration: 2 },
        { root: NOTES.F3, type: "major", duration: 2 },
        { root: NOTES.C4, type: "major", duration: 2 },
        { root: NOTES.D4, type: "major", duration: 2 },
        { root: NOTES.G3, type: "major", duration: 2 },
      ],
    },
    // I-IV-I-V (ブルース風)
    {
      name: "Blues Style",
      tempo: 74,
      chords: [
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.F3, type: "major", duration: 2 },
        { root: NOTES.C4, type: "major", duration: 2 },
        { root: NOTES.G3, type: "major", duration: 4 },
      ],
    },
    // I-iii-IV-V (順次進行)
    {
      name: "Sequential Ascent",
      tempo: 70,
      chords: [
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.E3, type: "minor", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.G3, type: "major", duration: 3 },
      ],
    },
    // I-V-IV-IV (ポップパンク進行)
    {
      name: "Pop Punk",
      tempo: 76,
      chords: [
        { root: NOTES.C4, type: "major", duration: 2 },
        { root: NOTES.G3, type: "major", duration: 2 },
        { root: NOTES.F3, type: "major", duration: 2 },
        { root: NOTES.F3, type: "major", duration: 2 },
      ],
    },
    // vi-IV-I-V (悲しい→明るい転調)
    {
      name: "Minor to Major",
      tempo: 69,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.G3, type: "major", duration: 3 },
      ],
    },
  ],
  melodyPatterns: [
    {
      name: "Cheerful Bounce",
      notes: [
        { pitch: NOTES.G5, duration: 1, startTime: 0, velocity: 0.4 },
        { pitch: NOTES.E5, duration: 1, startTime: 1, velocity: 0.38 },
        { pitch: NOTES.C5, duration: 1.5, startTime: 2, velocity: 0.35 },
        { pitch: NOTES.E5, duration: 1, startTime: 3.5, velocity: 0.38 },
        { pitch: NOTES.G5, duration: 2.5, startTime: 4.5, velocity: 0.4 },
      ],
      repeat: 2,
    },
    {
      name: "Happy Skip",
      notes: [
        { pitch: NOTES.C5, duration: 0.8, startTime: 0, velocity: 0.38 },
        { pitch: NOTES.E5, duration: 0.8, startTime: 0.8, velocity: 0.4 },
        { pitch: NOTES.G5, duration: 0.8, startTime: 1.6, velocity: 0.42 },
        { pitch: NOTES.E5, duration: 0.8, startTime: 2.4, velocity: 0.4 },
        { pitch: NOTES.C5, duration: 1.6, startTime: 3.2, velocity: 0.38 },
      ],
      repeat: 2,
    },
  ],
  bassPatterns: BASS_PATTERNS.filter(p => ["Root-Fifth", "Walking Bass"].includes(p.name)),
  arpeggioPatterns: ARPEGGIO_PATTERNS,
  durationRange: [30, 45],
};

/**
 * 4. ダーク（Dark）: 重厚で神秘的
 */
export const DARK_STYLE: MusicStyle = {
  type: "dark",
  name: "ダーク",
  description: "重厚で神秘的な暗い雰囲気",
  soundParams: {
    padVolume: 0.1,
    padAttack: 1.5,
    padRelease: 2.0,
    leadVolume: 0.38,
    leadAttack: 0.2,
    leadRelease: 0.8,
    oscillatorType: "sawtooth",
  },
  progressions: [
    // i-VI-III-VII (Natural minor progression)
    {
      name: "Dark Minor",
      tempo: 52,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 5 },
        { root: NOTES.F3, type: "major", duration: 5 },
        { root: NOTES.C4, type: "major", duration: 5 },
        { root: NOTES.G3, type: "major", duration: 5 },
      ],
    },
    // i-iv-VII-III (Dorian)
    {
      name: "Dorian Mystery",
      tempo: 48,
      chords: [
        { root: NOTES.D3, type: "minor", duration: 6 },
        { root: NOTES.G3, type: "minor", duration: 6 },
        { root: NOTES.C4, type: "major", duration: 6 },
        { root: NOTES.F3, type: "major", duration: 6 },
      ],
    },
    // i-bVII-bVI-bVII (Phrygian)
    {
      name: "Phrygian Dark",
      tempo: 50,
      chords: [
        { root: NOTES.E3, type: "minor", duration: 4 },
        { root: NOTES.D3, type: "major", duration: 4 },
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.D3, type: "major", duration: 4 },
      ],
    },
    // i-bVI-bVII-i (Aeolian循環)
    {
      name: "Aeolian Circle",
      tempo: 51,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 4 },
        { root: NOTES.F3, type: "major", duration: 4 },
        { root: NOTES.G3, type: "major", duration: 4 },
        { root: NOTES.A3, type: "minor", duration: 4 },
      ],
    },
    // i-iv-v-i (マイナー基本循環)
    {
      name: "Minor Circle",
      tempo: 49,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 5 },
        { root: NOTES.D3, type: "minor", duration: 5 },
        { root: NOTES.E3, type: "minor", duration: 5 },
        { root: NOTES.A3, type: "minor", duration: 5 },
      ],
    },
    // i-V-i-VII (ゴシック進行)
    {
      name: "Gothic",
      tempo: 47,
      chords: [
        { root: NOTES.E3, type: "minor", duration: 6 },
        { root: NOTES.B3, type: "major", duration: 6 },
        { root: NOTES.E3, type: "minor", duration: 6 },
        { root: NOTES.D3, type: "major", duration: 6 },
      ],
    },
    // vi-iii-IV-I (Sad Progression)
    {
      name: "Melancholic",
      tempo: 53,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 4 },
        { root: NOTES.E3, type: "minor", duration: 4 },
        { root: NOTES.F3, type: "major", duration: 4 },
        { root: NOTES.C4, type: "major", duration: 4 },
      ],
    },
  ],
  melodyPatterns: [
    {
      name: "Mysterious Descent",
      notes: [
        { pitch: NOTES.A4, duration: 4, startTime: 0, velocity: 0.32 },
        { pitch: NOTES.G4, duration: 4, startTime: 4, velocity: 0.3 },
        { pitch: NOTES.F4, duration: 4, startTime: 8, velocity: 0.28 },
        { pitch: NOTES.E4, duration: 4, startTime: 12, velocity: 0.26 },
      ],
      repeat: 1,
    },
    {
      name: "Haunting Echo",
      notes: [
        { pitch: NOTES.E5, duration: 3, startTime: 0, velocity: 0.3 },
        { pitch: NOTES.D5, duration: 2, startTime: 3, velocity: 0.28 },
        { pitch: NOTES.C5, duration: 2, startTime: 5, velocity: 0.26 },
        { pitch: NOTES.A4, duration: 5, startTime: 7, velocity: 0.24 },
      ],
      repeat: 1,
    },
  ],
  bassPatterns: BASS_PATTERNS.filter(p => ["Minimal", "Root-Fifth"].includes(p.name)),
  arpeggioPatterns: ARPEGGIO_PATTERNS.filter(p => ["Down", "Random"].includes(p.name)),
  durationRange: [40, 60],
};

/**
 * 5. アンビエント（Ambient）: 浮遊感のある空間
 */
export const AMBIENT_STYLE: MusicStyle = {
  type: "ambient",
  name: "アンビエント",
  description: "浮遊感のある広がる音空間",
  soundParams: {
    padVolume: 0.07,
    padAttack: 2.0,
    padRelease: 2.5,
    leadVolume: 0.32,
    leadAttack: 0.5,
    leadRelease: 1.0,
    oscillatorType: "sine",
  },
  progressions: [
    // Suspended chords
    {
      name: "Floating Suspended",
      tempo: 40,
      chords: [
        { root: NOTES.C4, type: "sus2", duration: 10 },
        { root: NOTES.G3, type: "sus2", duration: 10 },
        { root: NOTES.F3, type: "sus2", duration: 10 },
        { root: NOTES.C4, type: "sus2", duration: 10 },
      ],
    },
    // Modal interchange
    {
      name: "Modal Space",
      tempo: 38,
      chords: [
        { root: NOTES.A3, type: "sus4", duration: 12 },
        { root: NOTES.E3, type: "sus4", duration: 12 },
        { root: NOTES.D3, type: "sus2", duration: 12 },
        { root: NOTES.A3, type: "sus2", duration: 12 },
      ],
    },
    // Lydian mode for ethereal quality
    {
      name: "Lydian Dream",
      tempo: 42,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 11 },
        { root: NOTES.D4, type: "major", duration: 11 },
        { root: NOTES.E4, type: "minor", duration: 11 },
        { root: NOTES.C4, type: "maj7", duration: 11 },
      ],
    },
    // Major 7th progression for dreamy atmosphere
    {
      name: "Seventh Heaven",
      tempo: 36,
      chords: [
        { root: NOTES.F3, type: "maj7", duration: 13 },
        { root: NOTES.C4, type: "maj7", duration: 13 },
        { root: NOTES.G3, type: "maj7", duration: 13 },
      ],
    },
    // Minimal chord movement
    {
      name: "Breath of Air",
      tempo: 35,
      chords: [
        { root: NOTES.E3, type: "sus2", duration: 15 },
        { root: NOTES.A3, type: "sus2", duration: 15 },
        { root: NOTES.E3, type: "sus2", duration: 15 },
      ],
    },
    // Whole tone inspired movement
    {
      name: "Ethereal Drift",
      tempo: 39,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 12 },
        { root: NOTES.D4, type: "maj7", duration: 12 },
        { root: NOTES.B3, type: "maj7", duration: 12 },
        { root: NOTES.C4, type: "sus2", duration: 12 },
      ],
    },
    // Cosmic suspension
    {
      name: "Cosmic Suspension",
      tempo: 41,
      chords: [
        { root: NOTES.G3, type: "sus4", duration: 10 },
        { root: NOTES.D4, type: "maj7", duration: 10 },
        { root: NOTES.A3, type: "sus2", duration: 10 },
        { root: NOTES.E3, type: "maj7", duration: 10 },
      ],
    },
  ],
  melodyPatterns: [
    {
      name: "Sparse Stars",
      notes: [
        { pitch: NOTES.G5, duration: 8, startTime: 0, velocity: 0.25 },
        { pitch: NOTES.E5, duration: 8, startTime: 8, velocity: 0.25 },
        { pitch: NOTES.D5, duration: 8, startTime: 16, velocity: 0.23 },
      ],
      repeat: 1,
    },
  ],
  bassPatterns: BASS_PATTERNS.filter(p => p.name === "Minimal"),
  arpeggioPatterns: ARPEGGIO_PATTERNS.filter(p => p.name === "Up"),
  durationRange: [55, 90],
};

/**
 * すべての音楽スタイル
 */
export const ALL_MUSIC_STYLES: MusicStyle[] = [
  GRAND_STYLE,
  MONOTONOUS_STYLE,
  BRIGHT_STYLE,
  DARK_STYLE,
  AMBIENT_STYLE,
];

/**
 * ランダムにスタイルを選択（現在のスタイルと異なるものを選択）
 */
export function getRandomStyle(currentStyleType?: string): MusicStyle {
  const availableStyles = currentStyleType
    ? ALL_MUSIC_STYLES.filter((s) => s.type !== currentStyleType)
    : ALL_MUSIC_STYLES;

  return availableStyles[Math.floor(Math.random() * availableStyles.length)]!;
}

/**
 * スタイルタイプから取得
 */
export function getStyleByType(type: string): MusicStyle | undefined {
  return ALL_MUSIC_STYLES.find((s) => s.type === type);
}
