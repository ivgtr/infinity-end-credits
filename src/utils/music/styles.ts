import type { MusicStyle } from "@/types/music";
import { NOTES } from "./patterns";

/**
 * 5つの音楽スタイル定義
 */

// 1. 壮大（Grand）: ゆったりとしたテンポ、長い音符、スケール感
export const GRAND_STYLE: MusicStyle = {
  type: "grand",
  name: "壮大",
  description: "ゆったりとしたテンポと長い音符でスケール感を演出",
  soundParams: {
    padVolume: 0.08,
    padAttack: 0.8,
    padRelease: 1.2,
    leadVolume: 0.4,
    leadAttack: 0.1,
    leadRelease: 0.3,
    oscillatorType: "sine",
  },
  progressions: [
    {
      name: "Grand Epic",
      tempo: 65,
      chords: [
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.G3, type: "major", duration: 4 },
        { root: NOTES.A3, type: "minor", duration: 4 },
        { root: NOTES.F3, type: "major", duration: 4 },
      ],
    },
    {
      name: "Grand Emotional",
      tempo: 60,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 6 },
        { root: NOTES.F3, type: "maj7", duration: 6 },
        { root: NOTES.A3, type: "min7", duration: 6 },
        { root: NOTES.G3, type: "sus4", duration: 6 },
      ],
    },
  ],
  melodyPatterns: [
    {
      name: "Grand Ascending",
      notes: [
        { pitch: NOTES.C5, duration: 2, startTime: 0, velocity: 0.3 },
        { pitch: NOTES.D5, duration: 2, startTime: 2, velocity: 0.3 },
        { pitch: NOTES.E5, duration: 2, startTime: 4, velocity: 0.3 },
        { pitch: NOTES.G5, duration: 2, startTime: 6, velocity: 0.3 },
        { pitch: NOTES.E5, duration: 4, startTime: 8, velocity: 0.25 },
      ],
      repeat: 2,
    },
  ],
  durationRange: [40, 60],
};

// 2. 退屈（Monotonous）: 非常に単調で反復的、ミニマル
export const MONOTONOUS_STYLE: MusicStyle = {
  type: "monotonous",
  name: "退屈",
  description: "単調で反復的な極限のミニマリズム",
  soundParams: {
    padVolume: 0.06,
    padAttack: 1.0,
    padRelease: 1.5,
    leadVolume: 0.25,
    leadAttack: 0.2,
    leadRelease: 0.5,
    oscillatorType: "sine",
  },
  progressions: [
    {
      name: "Monotonous Simple",
      tempo: 50,
      chords: [
        { root: NOTES.C4, type: "major", duration: 8 },
        { root: NOTES.F3, type: "major", duration: 8 },
      ],
    },
    {
      name: "Monotonous Minimal",
      tempo: 48,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 8 },
        { root: NOTES.C4, type: "major", duration: 8 },
      ],
    },
  ],
  melodyPatterns: [
    {
      name: "Monotonous Repetitive",
      notes: [
        { pitch: NOTES.E5, duration: 4, startTime: 0, velocity: 0.2 },
        { pitch: NOTES.E5, duration: 4, startTime: 4, velocity: 0.2 },
        { pitch: NOTES.C5, duration: 4, startTime: 8, velocity: 0.2 },
        { pitch: NOTES.C5, duration: 4, startTime: 12, velocity: 0.2 },
      ],
      repeat: 2,
    },
  ],
  durationRange: [45, 70],
};

// 3. 明るい（Bright）: 少し明るめ、メジャーコード中心
export const BRIGHT_STYLE: MusicStyle = {
  type: "bright",
  name: "明るい",
  description: "やや明るめで穏やかな雰囲気",
  soundParams: {
    padVolume: 0.09,
    padAttack: 0.5,
    padRelease: 0.8,
    leadVolume: 0.45,
    leadAttack: 0.05,
    leadRelease: 0.2,
    oscillatorType: "triangle",
  },
  progressions: [
    {
      name: "Bright Happy",
      tempo: 70,
      chords: [
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.G3, type: "major", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.C4, type: "major", duration: 3 },
      ],
    },
    {
      name: "Bright Gentle",
      tempo: 68,
      chords: [
        { root: NOTES.F3, type: "maj7", duration: 4 },
        { root: NOTES.C4, type: "maj7", duration: 4 },
        { root: NOTES.G3, type: "maj7", duration: 4 },
        { root: NOTES.C4, type: "maj7", duration: 4 },
      ],
    },
  ],
  melodyPatterns: [
    {
      name: "Bright Cheerful",
      notes: [
        { pitch: NOTES.G5, duration: 1.5, startTime: 0, velocity: 0.35 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 1.5, velocity: 0.35 },
        { pitch: NOTES.C5, duration: 2, startTime: 3, velocity: 0.3 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 5, velocity: 0.35 },
        { pitch: NOTES.G5, duration: 1.5, startTime: 6.5, velocity: 0.35 },
      ],
      repeat: 2,
    },
  ],
  durationRange: [35, 50],
};

// 4. ダーク（Dark）: 暗めで重い雰囲気、マイナーコード中心
export const DARK_STYLE: MusicStyle = {
  type: "dark",
  name: "ダーク",
  description: "重厚で暗い雰囲気",
  soundParams: {
    padVolume: 0.1,
    padAttack: 1.2,
    padRelease: 1.8,
    leadVolume: 0.35,
    leadAttack: 0.15,
    leadRelease: 0.6,
    oscillatorType: "sawtooth",
  },
  progressions: [
    {
      name: "Dark Mysterious",
      tempo: 55,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 5 },
        { root: NOTES.F3, type: "minor", duration: 5 },
        { root: NOTES.C4, type: "minor", duration: 5 },
        { root: NOTES.G3, type: "minor", duration: 5 },
      ],
    },
    {
      name: "Dark Heavy",
      tempo: 52,
      chords: [
        { root: NOTES.D3, type: "min7", duration: 6 },
        { root: NOTES.A3, type: "min7", duration: 6 },
        { root: NOTES.E3, type: "min7", duration: 6 },
        { root: NOTES.D3, type: "min7", duration: 6 },
      ],
    },
  ],
  melodyPatterns: [
    {
      name: "Dark Descending",
      notes: [
        { pitch: NOTES.A4, duration: 3, startTime: 0, velocity: 0.3 },
        { pitch: NOTES.G4, duration: 3, startTime: 3, velocity: 0.28 },
        { pitch: NOTES.F4, duration: 3, startTime: 6, velocity: 0.26 },
        { pitch: NOTES.E4, duration: 3, startTime: 9, velocity: 0.24 },
      ],
      repeat: 2,
    },
  ],
  durationRange: [45, 65],
};

// 5. アンビエント（Ambient）: 非常にゆっくり、長い持続音
export const AMBIENT_STYLE: MusicStyle = {
  type: "ambient",
  name: "アンビエント",
  description: "浮遊感のある静かな音空間",
  soundParams: {
    padVolume: 0.07,
    padAttack: 1.5,
    padRelease: 2.0,
    leadVolume: 0.3,
    leadAttack: 0.3,
    leadRelease: 0.8,
    oscillatorType: "sine",
  },
  progressions: [
    {
      name: "Ambient Float",
      tempo: 45,
      chords: [
        { root: NOTES.C4, type: "sus2", duration: 8 },
        { root: NOTES.G3, type: "sus2", duration: 8 },
        { root: NOTES.F3, type: "sus2", duration: 8 },
        { root: NOTES.C4, type: "sus2", duration: 8 },
      ],
    },
    {
      name: "Ambient Space",
      tempo: 42,
      chords: [
        { root: NOTES.A3, type: "sus4", duration: 10 },
        { root: NOTES.E3, type: "sus4", duration: 10 },
        { root: NOTES.D3, type: "sus2", duration: 10 },
        { root: NOTES.A3, type: "sus2", duration: 10 },
      ],
    },
  ],
  melodyPatterns: [
    {
      name: "Ambient Sparse",
      notes: [
        { pitch: NOTES.G5, duration: 6, startTime: 0, velocity: 0.25 },
        { pitch: NOTES.E5, duration: 6, startTime: 6, velocity: 0.25 },
        { pitch: NOTES.D5, duration: 6, startTime: 12, velocity: 0.23 },
        { pitch: NOTES.C5, duration: 6, startTime: 18, velocity: 0.2 },
      ],
      repeat: 1,
    },
  ],
  durationRange: [50, 80],
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
