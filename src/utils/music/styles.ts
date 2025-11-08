import type { MusicStyle, ArpeggioPattern, BassPattern, DrumPattern } from "@/types/music";
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
  {
    name: "Jazzy Walk",
    pattern: [0, 2, 4, 5, 7, 5, 4, 2], // ジャズウォーキング
    durations: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
    rhythm: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5],
  },
  {
    name: "Syncopated Funk",
    pattern: [0, 0, 7, 5], // シンコペーション
    durations: [0.5, 1.5, 1, 1],
    rhythm: [0, 0.5, 2, 3],
  },
  {
    name: "Rock Steady",
    pattern: [0, 0, 7, 7], // ロックベース
    durations: [1, 1, 1, 1],
    rhythm: [0, 1, 2, 3],
  },
  {
    name: "Bouncy Pop",
    pattern: [0, 7, 5, 7], // ポップベース
    durations: [1, 0.5, 0.5, 1],
    rhythm: [0, 1, 1.5, 2],
  },
  {
    name: "Driving Eighth",
    pattern: [0, 0, 7, 7, 5, 5, 7, 7], // 8分音符ドライブ
    durations: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
    rhythm: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5],
  },
  {
    name: "Deep Pulse",
    pattern: [0, 0, 0, 7], // ディープハウス風
    durations: [1, 1, 1, 1],
    rhythm: [0, 1, 2, 3],
  },
  {
    name: "Rhythmic Groove",
    pattern: [0, 7, 5, 3], // グルーブベース
    durations: [1.5, 0.5, 1, 1],
    rhythm: [0, 1.5, 2, 3],
  },
  {
    name: "Classic Arpeggio Bass",
    pattern: [0, 4, 7, 12], // アルペジオ風ベース
    durations: [1, 1, 1, 1],
    rhythm: [0, 1, 2, 3],
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
  {
    name: "Fast Cascade",
    pattern: [0, 1, 2, 2, 1, 0], // 速いカスケード
    noteDuration: 0.2,
    speed: 1.8,
  },
  {
    name: "Triplet",
    pattern: [0, 1, 2], // 3連符
    noteDuration: 0.33,
    speed: 1.3,
  },
  {
    name: "Slow Wave",
    pattern: [0, 2, 1, 0], // ゆったりした波
    noteDuration: 0.7,
    speed: 0.8,
  },
  {
    name: "Bounce",
    pattern: [0, 2, 0, 1, 0, 2], // バウンス
    noteDuration: 0.35,
    speed: 1.1,
  },
  {
    name: "Broken Chord",
    pattern: [0, 2, 1, 2, 0, 1], // 分散和音
    noteDuration: 0.4,
    speed: 1.0,
  },
  {
    name: "Syncopated",
    pattern: [0, 1, 0, 2, 1, 0, 2, 0], // シンコペーション
    noteDuration: 0.28,
    speed: 1.4,
  },
  {
    name: "Octave Up",
    pattern: [0, 1, 2, 0, 1, 2], // オクターブ上昇パターン
    noteDuration: 0.35,
    speed: 1.3,
  },
  {
    name: "Octave Down",
    pattern: [2, 1, 0, 2, 1, 0], // オクターブ下降パターン
    noteDuration: 0.35,
    speed: 1.3,
  },
  {
    name: "Alternating",
    pattern: [0, 2, 0, 2, 1, 2, 1, 2], // 交互パターン
    noteDuration: 0.3,
    speed: 1.2,
  },
  {
    name: "Reverse Cascade",
    pattern: [2, 2, 1, 0, 1, 2], // 逆カスケード
    noteDuration: 0.25,
    speed: 1.6,
  },
  {
    name: "Stutter",
    pattern: [0, 0, 1, 1, 2, 2, 1, 1], // スタッター
    noteDuration: 0.2,
    speed: 1.7,
  },
  {
    name: "Melodic Pattern",
    pattern: [0, 2, 1, 0, 1, 2, 0, 1], // メロディック
    noteDuration: 0.4,
    speed: 1.1,
  },
  {
    name: "Rhythmic Pulse",
    pattern: [0, 1, 2, 0, 1, 2, 0, 2], // リズミック
    noteDuration: 0.3,
    speed: 1.4,
  },
  {
    name: "Sweep Up",
    pattern: [0, 0, 1, 1, 2, 2], // スイープアップ
    noteDuration: 0.25,
    speed: 1.5,
  },
  {
    name: "Sweep Down",
    pattern: [2, 2, 1, 1, 0, 0], // スイープダウン
    noteDuration: 0.25,
    speed: 1.5,
  },
  {
    name: "Complex Weave",
    pattern: [0, 2, 1, 0, 2, 0, 1, 2, 1, 0], // 複雑なパターン
    noteDuration: 0.22,
    speed: 1.6,
  },
];

/**
 * 共通ドラムパターン
 */
export const DRUM_PATTERNS: DrumPattern[] = [
  {
    name: "Basic 4/4",
    kick: [0, 2],
    snare: [1, 3],
    hihat: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5],
    duration: 4,
  },
  {
    name: "Epic Slow",
    kick: [0, 2.5],
    snare: [2],
    hihat: [0, 1, 2, 3, 4, 5],
    duration: 6,
  },
  {
    name: "Energetic",
    kick: [0, 1, 2, 3],
    snare: [1, 3],
    hihat: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5],
    duration: 4,
  },
  {
    name: "Heavy Rock",
    kick: [0, 0.5, 2, 2.5],
    snare: [1, 3],
    hihat: [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75],
    duration: 4,
  },
  {
    name: "Minimal Beat",
    kick: [0, 3],
    snare: [2],
    hihat: [0, 1, 2, 3],
    duration: 4,
  },
  {
    name: "Syncopated Funk",
    kick: [0, 0.75, 2, 2.5, 3.5],
    snare: [1, 3],
    hihat: [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75],
    duration: 4,
  },
  {
    name: "Breakbeat",
    kick: [0, 1.5, 2.75],
    snare: [1, 2.5],
    hihat: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5],
    duration: 4,
  },
  {
    name: "Half-Time",
    kick: [0, 4],
    snare: [2],
    hihat: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5],
    duration: 8,
  },
  {
    name: "Double-Time",
    kick: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5],
    snare: [0.5, 1.5, 2.5, 3.5],
    hihat: [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75],
    duration: 4,
  },
  {
    name: "Shuffle Beat",
    kick: [0, 2],
    snare: [1, 3],
    hihat: [0, 0.66, 1, 1.66, 2, 2.66, 3, 3.66],
    duration: 4,
  },
  {
    name: "House Beat",
    kick: [0, 1, 2, 3],
    snare: [1, 3],
    hihat: [0.5, 1.5, 2.5, 3.5],
    duration: 4,
  },
  {
    name: "Pop Ballad",
    kick: [0, 2.5],
    snare: [1, 3],
    hihat: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5],
    duration: 4,
  },
  {
    name: "Waltz 3/4",
    kick: [0],
    snare: [2],
    hihat: [0, 1, 2],
    duration: 3,
  },
  {
    name: "Progressive 5/4",
    kick: [0, 3],
    snare: [2, 4],
    hihat: [0, 1, 2, 3, 4],
    duration: 5,
  },
  {
    name: "Complex 7/8",
    kick: [0, 3],
    snare: [2, 5],
    hihat: [0, 0.875, 1.75, 2.625, 3.5, 4.375, 5.25, 6.125],
    duration: 3.5,
  },
  {
    name: "Folk 6/8",
    kick: [0, 3],
    snare: [2, 5],
    hihat: [0, 1, 2, 3, 4, 5],
    duration: 6,
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
    // I-IV-vi-iii-IV-V-I (Extended progression)
    {
      name: "Epic Extended",
      tempo: 58,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.A3, type: "minor", duration: 3 },
        { root: NOTES.E3, type: "minor", duration: 3 },
        { root: NOTES.F3, type: "maj7", duration: 4 },
        { root: NOTES.G3, type: "major", duration: 4 },
        { root: NOTES.C4, type: "maj7", duration: 4 },
      ],
    },
    // I-iii-vi-IV (Smooth descent)
    {
      name: "Smooth Descent",
      tempo: 62,
      chords: [
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.E3, type: "minor", duration: 4 },
        { root: NOTES.A3, type: "minor", duration: 4 },
        { root: NOTES.F3, type: "maj7", duration: 4 },
      ],
    },
    // IV-I-V-vi (Plagal to authentic)
    {
      name: "Plagal Epic",
      tempo: 59,
      chords: [
        { root: NOTES.F3, type: "major", duration: 5 },
        { root: NOTES.C4, type: "major", duration: 5 },
        { root: NOTES.G3, type: "sus4", duration: 3 },
        { root: NOTES.G3, type: "major", duration: 2 },
        { root: NOTES.A3, type: "minor", duration: 5 },
      ],
    },
    // I-V-IV-bVII (Mixolydian epic)
    {
      name: "Mixolydian Epic",
      tempo: 63,
      chords: [
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.G3, type: "major", duration: 4 },
        { root: NOTES.F3, type: "major", duration: 4 },
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
    {
      name: "Majestic Ascent",
      notes: [
        { pitch: NOTES.E5, duration: 2.5, startTime: 0, velocity: 0.31 },
        { pitch: NOTES.G5, duration: 2.5, startTime: 2.5, velocity: 0.33 },
        { pitch: NOTES.A5, duration: 2, startTime: 5, velocity: 0.35 },
        { pitch: NOTES.G5, duration: 3, startTime: 7, velocity: 0.32 },
        { pitch: NOTES.E5, duration: 4, startTime: 10, velocity: 0.3 },
      ],
      repeat: 1,
    },
    {
      name: "Triumphant Arc",
      notes: [
        { pitch: NOTES.C5, duration: 2, startTime: 0, velocity: 0.32 },
        { pitch: NOTES.G5, duration: 3, startTime: 2, velocity: 0.36 },
        { pitch: NOTES.E5, duration: 2, startTime: 5, velocity: 0.34 },
        { pitch: NOTES.G5, duration: 4, startTime: 7, velocity: 0.35 },
      ],
      repeat: 1,
    },
    {
      name: "Noble Journey",
      notes: [
        { pitch: NOTES.G5, duration: 3, startTime: 0, velocity: 0.33 },
        { pitch: NOTES.A5, duration: 2, startTime: 3, velocity: 0.35 },
        { pitch: NOTES.C5 + 12, duration: 3, startTime: 5, velocity: 0.37 },
        { pitch: NOTES.A5, duration: 2, startTime: 8, velocity: 0.34 },
        { pitch: NOTES.G5, duration: 3, startTime: 10, velocity: 0.31 },
      ],
      repeat: 1,
    },
    {
      name: "Epic Resolution",
      notes: [
        { pitch: NOTES.E5, duration: 3, startTime: 0, velocity: 0.32 },
        { pitch: NOTES.D5, duration: 2, startTime: 3, velocity: 0.3 },
        { pitch: NOTES.C5, duration: 2, startTime: 5, velocity: 0.31 },
        { pitch: NOTES.G5, duration: 5, startTime: 7, velocity: 0.36 },
      ],
      repeat: 1,
    },
    {
      name: "Soaring Flight",
      notes: [
        { pitch: NOTES.C5, duration: 2, startTime: 0, velocity: 0.3 },
        { pitch: NOTES.D5, duration: 2, startTime: 2, velocity: 0.31 },
        { pitch: NOTES.E5, duration: 2, startTime: 4, velocity: 0.33 },
        { pitch: NOTES.G5, duration: 2, startTime: 6, velocity: 0.35 },
        { pitch: NOTES.A5, duration: 3, startTime: 8, velocity: 0.37 },
      ],
      repeat: 1,
    },
    {
      name: "Grand Fanfare",
      notes: [
        { pitch: NOTES.G5, duration: 2, startTime: 0, velocity: 0.35 },
        { pitch: NOTES.C5 + 12, duration: 3, startTime: 2, velocity: 0.38 },
        { pitch: NOTES.G5, duration: 2, startTime: 5, velocity: 0.34 },
        { pitch: NOTES.E5, duration: 4, startTime: 7, velocity: 0.32 },
      ],
      repeat: 1,
    },
    {
      name: "Triumphant Call",
      notes: [
        { pitch: NOTES.E5, duration: 1.5, startTime: 0, velocity: 0.33 },
        { pitch: NOTES.G5, duration: 1.5, startTime: 1.5, velocity: 0.35 },
        { pitch: NOTES.C5 + 12, duration: 2, startTime: 3, velocity: 0.37 },
        { pitch: NOTES.A5, duration: 2, startTime: 5, velocity: 0.36 },
        { pitch: NOTES.G5, duration: 3, startTime: 7, velocity: 0.34 },
      ],
      repeat: 1,
    },
    {
      name: "Majestic Wave",
      notes: [
        { pitch: NOTES.D5, duration: 2.5, startTime: 0, velocity: 0.31 },
        { pitch: NOTES.G5, duration: 2.5, startTime: 2.5, velocity: 0.35 },
        { pitch: NOTES.E5, duration: 2, startTime: 5, velocity: 0.33 },
        { pitch: NOTES.C5, duration: 4, startTime: 7, velocity: 0.3 },
      ],
      repeat: 1,
    },
    {
      name: "Victorious Climb",
      notes: [
        { pitch: NOTES.C5, duration: 2, startTime: 0, velocity: 0.32 },
        { pitch: NOTES.E5, duration: 2, startTime: 2, velocity: 0.34 },
        { pitch: NOTES.A5, duration: 3, startTime: 4, velocity: 0.37 },
        { pitch: NOTES.C5 + 12, duration: 4, startTime: 7, velocity: 0.38 },
      ],
      repeat: 1,
    },
    {
      name: "Epic Horizon",
      notes: [
        { pitch: NOTES.G5, duration: 3, startTime: 0, velocity: 0.34 },
        { pitch: NOTES.E5, duration: 2, startTime: 3, velocity: 0.32 },
        { pitch: NOTES.G5, duration: 2, startTime: 5, velocity: 0.35 },
        { pitch: NOTES.C5 + 12, duration: 5, startTime: 7, velocity: 0.37 },
      ],
      repeat: 1,
    },
  ],
  bassPatterns: BASS_PATTERNS.filter(p => ["Root-Fifth", "Octave Jump", "Classic Arpeggio Bass", "Rhythmic Groove"].includes(p.name)),
  arpeggioPatterns: ARPEGGIO_PATTERNS.filter(p => ["Up", "Up-Down", "Slow Wave", "Broken Chord"].includes(p.name)),
  drumPatterns: DRUM_PATTERNS.filter(p => ["Epic Slow", "Minimal Beat"].includes(p.name)),
  durationRange: [35, 55],
  scales: ["major", "minor", "harmonicMinor"],
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
    // I (Pure drone - single chord)
    {
      name: "Pure Drone",
      tempo: 38,
      chords: [
        { root: NOTES.C4, type: "sus2", duration: 20 },
      ],
    },
    // I-vi (Minimal shift)
    {
      name: "Minimal Shift",
      tempo: 44,
      chords: [
        { root: NOTES.C4, type: "major", duration: 16 },
        { root: NOTES.A3, type: "minor", duration: 16 },
      ],
    },
    // vi-i (Dark minimal)
    {
      name: "Dark Minimal",
      tempo: 39,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 18 },
        { root: NOTES.E3, type: "minor", duration: 18 },
      ],
    },
    // I-II (Whole tone minimal)
    {
      name: "Whole Tone Minimal",
      tempo: 42,
      chords: [
        { root: NOTES.C4, type: "sus2", duration: 15 },
        { root: NOTES.D4, type: "sus2", duration: 15 },
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
    {
      name: "Minimal Drone",
      notes: [
        { pitch: NOTES.G5, duration: 12, startTime: 0, velocity: 0.18 },
        { pitch: NOTES.E5, duration: 12, startTime: 12, velocity: 0.18 },
      ],
      repeat: 1,
    },
    {
      name: "Sparse Echo",
      notes: [
        { pitch: NOTES.D5, duration: 10, startTime: 0, velocity: 0.19 },
        { pitch: NOTES.A4, duration: 10, startTime: 10, velocity: 0.19 },
      ],
      repeat: 1,
    },
    {
      name: "Empty Space",
      notes: [
        { pitch: NOTES.C5, duration: 14, startTime: 0, velocity: 0.17 },
        { pitch: NOTES.G4, duration: 14, startTime: 14, velocity: 0.17 },
      ],
      repeat: 1,
    },
    {
      name: "Long Breath",
      notes: [
        { pitch: NOTES.E5, duration: 16, startTime: 0, velocity: 0.18 },
      ],
      repeat: 1,
    },
    {
      name: "Slow Drift",
      notes: [
        { pitch: NOTES.C5, duration: 18, startTime: 0, velocity: 0.17 },
        { pitch: NOTES.D5, duration: 18, startTime: 18, velocity: 0.17 },
      ],
      repeat: 1,
    },
    {
      name: "Endless Tone",
      notes: [
        { pitch: NOTES.G4, duration: 20, startTime: 0, velocity: 0.16 },
      ],
      repeat: 1,
    },
    {
      name: "Minimal Pulse",
      notes: [
        { pitch: NOTES.A4, duration: 12, startTime: 0, velocity: 0.19 },
        { pitch: NOTES.E5, duration: 12, startTime: 12, velocity: 0.18 },
      ],
      repeat: 1,
    },
    {
      name: "Frozen Time",
      notes: [
        { pitch: NOTES.D5, duration: 22, startTime: 0, velocity: 0.16 },
      ],
      repeat: 1,
    },
    {
      name: "Silent Pause",
      notes: [
        { pitch: NOTES.F5, duration: 15, startTime: 0, velocity: 0.17 },
        { pitch: NOTES.C5, duration: 15, startTime: 15, velocity: 0.17 },
      ],
      repeat: 1,
    },
  ],
  bassPatterns: BASS_PATTERNS.filter(p => p.name === "Minimal"),
  arpeggioPatterns: [],
  drumPatterns: [], // 退屈な雰囲気を保つためドラムなし
  durationRange: [50, 80],
  scales: ["major", "minor"],
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
    // I-II-IV-V (Secondary dominant approach)
    {
      name: "Happy Ascent",
      tempo: 73,
      chords: [
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.D4, type: "major", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.G3, type: "major", duration: 3 },
      ],
    },
    // I-iii-vi-IV-I-V (Extended joy)
    {
      name: "Extended Joy",
      tempo: 71,
      chords: [
        { root: NOTES.C4, type: "major", duration: 2 },
        { root: NOTES.E3, type: "minor", duration: 2 },
        { root: NOTES.A3, type: "minor", duration: 2 },
        { root: NOTES.F3, type: "major", duration: 2 },
        { root: NOTES.C4, type: "major", duration: 2 },
        { root: NOTES.G3, type: "major", duration: 2 },
      ],
    },
    // IV-V-iii-vi-ii-V-I (Sunny circle)
    {
      name: "Sunny Circle",
      tempo: 74,
      chords: [
        { root: NOTES.F3, type: "major", duration: 2 },
        { root: NOTES.G3, type: "major", duration: 2 },
        { root: NOTES.E3, type: "minor", duration: 2 },
        { root: NOTES.A3, type: "minor", duration: 2 },
        { root: NOTES.D4, type: "minor", duration: 2 },
        { root: NOTES.G3, type: "major", duration: 2 },
        { root: NOTES.C4, type: "major", duration: 2 },
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
    {
      name: "Joyful Leap",
      notes: [
        { pitch: NOTES.E5, duration: 1, startTime: 0, velocity: 0.39 },
        { pitch: NOTES.G5, duration: 1, startTime: 1, velocity: 0.41 },
        { pitch: NOTES.A5, duration: 1.5, startTime: 2, velocity: 0.43 },
        { pitch: NOTES.G5, duration: 1, startTime: 3.5, velocity: 0.41 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 4.5, velocity: 0.38 },
      ],
      repeat: 2,
    },
    {
      name: "Sunny Day",
      notes: [
        { pitch: NOTES.C5, duration: 1.5, startTime: 0, velocity: 0.37 },
        { pitch: NOTES.D5, duration: 1, startTime: 1.5, velocity: 0.38 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 2.5, velocity: 0.4 },
        { pitch: NOTES.G5, duration: 2, startTime: 4, velocity: 0.42 },
      ],
      repeat: 2,
    },
    {
      name: "Upbeat Jump",
      notes: [
        { pitch: NOTES.G5, duration: 0.7, startTime: 0, velocity: 0.41 },
        { pitch: NOTES.G5, duration: 0.7, startTime: 0.7, velocity: 0.4 },
        { pitch: NOTES.A5, duration: 1, startTime: 1.4, velocity: 0.43 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 2.4, velocity: 0.39 },
        { pitch: NOTES.C5, duration: 2, startTime: 3.9, velocity: 0.37 },
      ],
      repeat: 1,
    },
    {
      name: "Playful Dance",
      notes: [
        { pitch: NOTES.E5, duration: 0.8, startTime: 0, velocity: 0.39 },
        { pitch: NOTES.D5, duration: 0.8, startTime: 0.8, velocity: 0.37 },
        { pitch: NOTES.E5, duration: 0.8, startTime: 1.6, velocity: 0.39 },
        { pitch: NOTES.G5, duration: 1.2, startTime: 2.4, velocity: 0.42 },
        { pitch: NOTES.E5, duration: 1.6, startTime: 3.6, velocity: 0.38 },
      ],
      repeat: 2,
    },
    {
      name: "Bright Spark",
      notes: [
        { pitch: NOTES.D5, duration: 0.9, startTime: 0, velocity: 0.38 },
        { pitch: NOTES.E5, duration: 0.9, startTime: 0.9, velocity: 0.4 },
        { pitch: NOTES.G5, duration: 1.2, startTime: 1.8, velocity: 0.42 },
        { pitch: NOTES.A5, duration: 1.5, startTime: 3, velocity: 0.43 },
      ],
      repeat: 2,
    },
    {
      name: "Energetic Hop",
      notes: [
        { pitch: NOTES.C5, duration: 0.7, startTime: 0, velocity: 0.39 },
        { pitch: NOTES.D5, duration: 0.7, startTime: 0.7, velocity: 0.4 },
        { pitch: NOTES.E5, duration: 0.7, startTime: 1.4, velocity: 0.41 },
        { pitch: NOTES.G5, duration: 1, startTime: 2.1, velocity: 0.43 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 3.1, velocity: 0.4 },
      ],
      repeat: 2,
    },
    {
      name: "Shining Melody",
      notes: [
        { pitch: NOTES.G5, duration: 1.2, startTime: 0, velocity: 0.42 },
        { pitch: NOTES.E5, duration: 1, startTime: 1.2, velocity: 0.4 },
        { pitch: NOTES.D5, duration: 0.8, startTime: 2.2, velocity: 0.38 },
        { pitch: NOTES.C5, duration: 1.5, startTime: 3, velocity: 0.37 },
        { pitch: NOTES.G5, duration: 2, startTime: 4.5, velocity: 0.41 },
      ],
      repeat: 1,
    },
    {
      name: "Happy Whistle",
      notes: [
        { pitch: NOTES.E5, duration: 1, startTime: 0, velocity: 0.4 },
        { pitch: NOTES.E5, duration: 0.5, startTime: 1, velocity: 0.39 },
        { pitch: NOTES.G5, duration: 1.5, startTime: 1.5, velocity: 0.42 },
        { pitch: NOTES.C5, duration: 2, startTime: 3, velocity: 0.38 },
      ],
      repeat: 2,
    },
    {
      name: "Peppy Step",
      notes: [
        { pitch: NOTES.C5, duration: 0.8, startTime: 0, velocity: 0.38 },
        { pitch: NOTES.E5, duration: 0.8, startTime: 0.8, velocity: 0.4 },
        { pitch: NOTES.D5, duration: 0.8, startTime: 1.6, velocity: 0.39 },
        { pitch: NOTES.G5, duration: 1.5, startTime: 2.4, velocity: 0.43 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 3.9, velocity: 0.4 },
      ],
      repeat: 2,
    },
  ],
  bassPatterns: BASS_PATTERNS.filter(p => ["Root-Fifth", "Walking Bass", "Bouncy Pop", "Driving Eighth", "Rhythmic Groove"].includes(p.name)),
  arpeggioPatterns: ARPEGGIO_PATTERNS.filter(p => !["Slow Wave"].includes(p.name)), // ゆったり以外全て
  drumPatterns: DRUM_PATTERNS.filter(p => ["Energetic", "Basic 4/4"].includes(p.name)),
  durationRange: [30, 45],
  scales: ["major", "lydian", "pentatonic"],
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
    // i-bVI-bIII-bVII (Phrygian dominant)
    {
      name: "Phrygian Dominant",
      tempo: 50,
      chords: [
        { root: NOTES.E3, type: "minor", duration: 5 },
        { root: NOTES.C4, type: "major", duration: 5 },
        { root: NOTES.G3, type: "major", duration: 5 },
        { root: NOTES.D3, type: "major", duration: 5 },
      ],
    },
    // i-VII-VI-V (Descending minor)
    {
      name: "Descending Minor",
      tempo: 48,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 4 },
        { root: NOTES.G3, type: "major", duration: 4 },
        { root: NOTES.F3, type: "major", duration: 4 },
        { root: NOTES.E3, type: "major", duration: 4 },
      ],
    },
    // i-iv-i-v (Pure minor progression)
    {
      name: "Pure Minor",
      tempo: 51,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 5 },
        { root: NOTES.D3, type: "minor", duration: 5 },
        { root: NOTES.A3, type: "minor", duration: 5 },
        { root: NOTES.E3, type: "minor", duration: 5 },
      ],
    },
    // vi-iv-i-V (Dark suspension)
    {
      name: "Dark Suspension",
      tempo: 49,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 5 },
        { root: NOTES.D3, type: "minor", duration: 5 },
        { root: NOTES.A3, type: "minor", duration: 4 },
        { root: NOTES.E3, type: "dom7", duration: 6 },
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
    {
      name: "Shadow Walk",
      notes: [
        { pitch: NOTES.D5, duration: 3, startTime: 0, velocity: 0.29 },
        { pitch: NOTES.C5, duration: 3, startTime: 3, velocity: 0.28 },
        { pitch: NOTES.A4, duration: 3, startTime: 6, velocity: 0.27 },
        { pitch: NOTES.G4, duration: 4, startTime: 9, velocity: 0.25 },
      ],
      repeat: 1,
    },
    {
      name: "Gothic Lament",
      notes: [
        { pitch: NOTES.E5, duration: 4, startTime: 0, velocity: 0.31 },
        { pitch: NOTES.D5, duration: 3, startTime: 4, velocity: 0.29 },
        { pitch: NOTES.C5, duration: 3, startTime: 7, velocity: 0.28 },
        { pitch: NOTES.D5, duration: 5, startTime: 10, velocity: 0.27 },
      ],
      repeat: 1,
    },
    {
      name: "Doom March",
      notes: [
        { pitch: NOTES.A4, duration: 3, startTime: 0, velocity: 0.3 },
        { pitch: NOTES.A4, duration: 2, startTime: 3, velocity: 0.29 },
        { pitch: NOTES.G4, duration: 3, startTime: 5, velocity: 0.28 },
        { pitch: NOTES.E4, duration: 4, startTime: 8, velocity: 0.26 },
      ],
      repeat: 1,
    },
    {
      name: "Ominous Whisper",
      notes: [
        { pitch: NOTES.C5, duration: 5, startTime: 0, velocity: 0.27 },
        { pitch: NOTES.A4, duration: 4, startTime: 5, velocity: 0.26 },
        { pitch: NOTES.G4, duration: 5, startTime: 9, velocity: 0.25 },
      ],
      repeat: 1,
    },
    {
      name: "Dark Ritual",
      notes: [
        { pitch: NOTES.E5, duration: 3, startTime: 0, velocity: 0.3 },
        { pitch: NOTES.C5, duration: 3, startTime: 3, velocity: 0.28 },
        { pitch: NOTES.A4, duration: 3, startTime: 6, velocity: 0.27 },
        { pitch: NOTES.E4, duration: 5, startTime: 9, velocity: 0.25 },
      ],
      repeat: 1,
    },
    {
      name: "Foreboding",
      notes: [
        { pitch: NOTES.D5, duration: 4, startTime: 0, velocity: 0.29 },
        { pitch: NOTES.A4, duration: 4, startTime: 4, velocity: 0.27 },
        { pitch: NOTES.F4, duration: 5, startTime: 8, velocity: 0.26 },
      ],
      repeat: 1,
    },
    {
      name: "Sinister Pulse",
      notes: [
        { pitch: NOTES.G4, duration: 3, startTime: 0, velocity: 0.28 },
        { pitch: NOTES.A4, duration: 3, startTime: 3, velocity: 0.29 },
        { pitch: NOTES.C5, duration: 3, startTime: 6, velocity: 0.3 },
        { pitch: NOTES.A4, duration: 4, startTime: 9, velocity: 0.27 },
      ],
      repeat: 1,
    },
    {
      name: "Mournful Cry",
      notes: [
        { pitch: NOTES.A4, duration: 5, startTime: 0, velocity: 0.29 },
        { pitch: NOTES.G4, duration: 4, startTime: 5, velocity: 0.27 },
        { pitch: NOTES.E4, duration: 6, startTime: 9, velocity: 0.25 },
      ],
      repeat: 1,
    },
    {
      name: "Creeping Dread",
      notes: [
        { pitch: NOTES.C5, duration: 3, startTime: 0, velocity: 0.28 },
        { pitch: NOTES.A4, duration: 2, startTime: 3, velocity: 0.27 },
        { pitch: NOTES.G4, duration: 3, startTime: 5, velocity: 0.26 },
        { pitch: NOTES.F4, duration: 3, startTime: 8, velocity: 0.25 },
        { pitch: NOTES.E4, duration: 4, startTime: 11, velocity: 0.24 },
      ],
      repeat: 1,
    },
    {
      name: "Nocturnal Hunt",
      notes: [
        { pitch: NOTES.E5, duration: 4, startTime: 0, velocity: 0.3 },
        { pitch: NOTES.D5, duration: 3, startTime: 4, velocity: 0.29 },
        { pitch: NOTES.A4, duration: 5, startTime: 7, velocity: 0.27 },
      ],
      repeat: 1,
    },
  ],
  bassPatterns: BASS_PATTERNS.filter(p => ["Minimal", "Root-Fifth", "Rock Steady", "Deep Pulse"].includes(p.name)),
  arpeggioPatterns: ARPEGGIO_PATTERNS.filter(p => ["Down", "Random", "Slow Wave", "Broken Chord"].includes(p.name)),
  drumPatterns: DRUM_PATTERNS.filter(p => ["Heavy Rock", "Basic 4/4"].includes(p.name)),
  durationRange: [40, 60],
  scales: ["minor", "phrygian", "locrian", "harmonicMinor"],
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
    // Meditative flow
    {
      name: "Meditative Flow",
      tempo: 37,
      chords: [
        { root: NOTES.D3, type: "sus2", duration: 14 },
        { root: NOTES.A3, type: "maj7", duration: 14 },
        { root: NOTES.G3, type: "sus4", duration: 14 },
      ],
    },
    // Infinite space
    {
      name: "Infinite Space",
      tempo: 39,
      chords: [
        { root: NOTES.E3, type: "maj7", duration: 13 },
        { root: NOTES.F3, type: "maj7", duration: 13 },
        { root: NOTES.G3, type: "maj7", duration: 13 },
        { root: NOTES.A3, type: "sus2", duration: 13 },
      ],
    },
    // Nebula drift
    {
      name: "Nebula Drift",
      tempo: 36,
      chords: [
        { root: NOTES.C4, type: "sus2", duration: 16 },
        { root: NOTES.D4, type: "sus2", duration: 16 },
        { root: NOTES.E4, type: "maj7", duration: 16 },
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
    {
      name: "Floating Dream",
      notes: [
        { pitch: NOTES.E5, duration: 10, startTime: 0, velocity: 0.24 },
        { pitch: NOTES.D5, duration: 10, startTime: 10, velocity: 0.23 },
        { pitch: NOTES.C5, duration: 10, startTime: 20, velocity: 0.22 },
      ],
      repeat: 1,
    },
    {
      name: "Ethereal Drift",
      notes: [
        { pitch: NOTES.A5, duration: 12, startTime: 0, velocity: 0.26 },
        { pitch: NOTES.G5, duration: 12, startTime: 12, velocity: 0.24 },
      ],
      repeat: 1,
    },
    {
      name: "Cosmic Wind",
      notes: [
        { pitch: NOTES.C5, duration: 15, startTime: 0, velocity: 0.23 },
        { pitch: NOTES.G5, duration: 15, startTime: 15, velocity: 0.24 },
      ],
      repeat: 1,
    },
    {
      name: "Silent Orbit",
      notes: [
        { pitch: NOTES.D5, duration: 18, startTime: 0, velocity: 0.22 },
        { pitch: NOTES.A4, duration: 18, startTime: 18, velocity: 0.21 },
      ],
      repeat: 1,
    },
    {
      name: "Distant Echo",
      notes: [
        { pitch: NOTES.E5, duration: 12, startTime: 0, velocity: 0.24 },
        { pitch: NOTES.C5, duration: 12, startTime: 12, velocity: 0.23 },
        { pitch: NOTES.A4, duration: 12, startTime: 24, velocity: 0.22 },
      ],
      repeat: 1,
    },
    {
      name: "Stellar Drift",
      notes: [
        { pitch: NOTES.G5, duration: 16, startTime: 0, velocity: 0.25 },
        { pitch: NOTES.D5, duration: 16, startTime: 16, velocity: 0.23 },
      ],
      repeat: 1,
    },
    {
      name: "Peaceful Float",
      notes: [
        { pitch: NOTES.F5, duration: 14, startTime: 0, velocity: 0.24 },
        { pitch: NOTES.E5, duration: 14, startTime: 14, velocity: 0.23 },
      ],
      repeat: 1,
    },
    {
      name: "Tranquil Waves",
      notes: [
        { pitch: NOTES.A5, duration: 10, startTime: 0, velocity: 0.26 },
        { pitch: NOTES.E5, duration: 10, startTime: 10, velocity: 0.24 },
        { pitch: NOTES.C5, duration: 10, startTime: 20, velocity: 0.22 },
      ],
      repeat: 1,
    },
    {
      name: "Void Whisper",
      notes: [
        { pitch: NOTES.C5, duration: 20, startTime: 0, velocity: 0.23 },
      ],
      repeat: 1,
    },
  ],
  bassPatterns: BASS_PATTERNS.filter(p => p.name === "Minimal"),
  arpeggioPatterns: ARPEGGIO_PATTERNS.filter(p => ["Up", "Slow Wave", "Triplet"].includes(p.name)),
  drumPatterns: [], // 浮遊感を保つためドラムなし
  durationRange: [55, 90],
  scales: ["major", "minor", "dorian", "wholeTone"],
};

/**
 * 6. ジャジー（Jazzy）: ジャズ風の洗練された雰囲気
 */
export const JAZZY_STYLE: MusicStyle = {
  type: "jazzy",
  name: "ジャジー",
  description: "ジャズ風の洗練されたスウィング感",
  soundParams: {
    padVolume: 0.07,
    padAttack: 0.4,
    padRelease: 0.8,
    leadVolume: 0.42,
    leadAttack: 0.08,
    leadRelease: 0.3,
    oscillatorType: "triangle",
  },
  progressions: [
    // ii-V-I (ジャズの王道進行)
    {
      name: "Jazz Standard",
      tempo: 95,
      chords: [
        { root: NOTES.D4, type: "min7", duration: 3 },
        { root: NOTES.G3, type: "dom7", duration: 3 },
        { root: NOTES.C4, type: "maj7", duration: 6 },
      ],
    },
    // I-vi-ii-V (Rhythm changes A section)
    {
      name: "Rhythm Changes",
      tempo: 92,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 2 },
        { root: NOTES.A3, type: "min7", duration: 2 },
        { root: NOTES.D4, type: "min7", duration: 2 },
        { root: NOTES.G3, type: "dom7", duration: 2 },
      ],
    },
    // iii-vi-ii-V (Turnaround)
    {
      name: "Turnaround",
      tempo: 88,
      chords: [
        { root: NOTES.E3, type: "min7", duration: 2.5 },
        { root: NOTES.A3, type: "min7", duration: 2.5 },
        { root: NOTES.D4, type: "min7", duration: 2.5 },
        { root: NOTES.G3, type: "dom7", duration: 2.5 },
      ],
    },
    // I-IV-iii-vi (Simplified jazz)
    {
      name: "Cool Jazz",
      tempo: 85,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 3 },
        { root: NOTES.F3, type: "maj7", duration: 3 },
        { root: NOTES.E3, type: "min7", duration: 3 },
        { root: NOTES.A3, type: "min7", duration: 3 },
      ],
    },
    // I-bIII-bVI-bII (Modal jazz)
    {
      name: "Modal Jazz",
      tempo: 90,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 4 },
        { root: NOTES.D3 + 8, type: "maj7", duration: 4 }, // Eb
        { root: NOTES.G3 + 8, type: "maj7", duration: 4 }, // Ab
        { root: NOTES.C4 + 1, type: "maj7", duration: 4 }, // Db
      ],
    },
    // vi-ii-V-I (Minor jazz)
    {
      name: "Minor Jazz",
      tempo: 87,
      chords: [
        { root: NOTES.A3, type: "min7", duration: 3 },
        { root: NOTES.D4, type: "min7", duration: 3 },
        { root: NOTES.G3, type: "dom7", duration: 3 },
        { root: NOTES.C4, type: "maj7", duration: 3 },
      ],
    },
    // I-vi-ii-V-iii-vi-ii-V (Extended turnaround)
    {
      name: "Extended Turnaround",
      tempo: 90,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 1.5 },
        { root: NOTES.A3, type: "min7", duration: 1.5 },
        { root: NOTES.D4, type: "min7", duration: 1.5 },
        { root: NOTES.G3, type: "dom7", duration: 1.5 },
        { root: NOTES.E3, type: "min7", duration: 1.5 },
        { root: NOTES.A3, type: "dom7", duration: 1.5 },
        { root: NOTES.D4, type: "min7", duration: 1.5 },
        { root: NOTES.G3, type: "dom7", duration: 1.5 },
      ],
    },
    // I-III7-vi-II7-ii-V (Coltrane changes inspired)
    {
      name: "Coltrane Inspired",
      tempo: 93,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 3 },
        { root: NOTES.E3, type: "dom7", duration: 3 },
        { root: NOTES.A3, type: "min7", duration: 3 },
        { root: NOTES.D4, type: "dom7", duration: 3 },
        { root: NOTES.D4, type: "min7", duration: 2 },
        { root: NOTES.G3, type: "dom7", duration: 2 },
      ],
    },
    // vi-V-IV-III (Descending jazz)
    {
      name: "Descending Jazz",
      tempo: 86,
      chords: [
        { root: NOTES.A3, type: "min7", duration: 3 },
        { root: NOTES.G3, type: "dom7", duration: 3 },
        { root: NOTES.F3, type: "maj7", duration: 3 },
        { root: NOTES.E3, type: "min7", duration: 3 },
      ],
    },
    // I-IV-bVII-IV (Bluesy jazz)
    {
      name: "Bluesy Jazz",
      tempo: 84,
      chords: [
        { root: NOTES.C4, type: "dom7", duration: 4 },
        { root: NOTES.F3, type: "dom7", duration: 4 },
        { root: NOTES.A3 + 10, type: "dom7", duration: 4 }, // Bb7
        { root: NOTES.F3, type: "dom7", duration: 4 },
      ],
    },
  ],
  melodyPatterns: [
    {
      name: "Jazzy Walk",
      notes: [
        { pitch: NOTES.G5, duration: 1.5, startTime: 0, velocity: 0.38 },
        { pitch: NOTES.F5, duration: 1, startTime: 1.5, velocity: 0.36 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 2.5, velocity: 0.37 },
        { pitch: NOTES.D5, duration: 1, startTime: 4, velocity: 0.35 },
        { pitch: NOTES.C5, duration: 2, startTime: 5, velocity: 0.38 },
      ],
      repeat: 1,
    },
    {
      name: "Swing Phrase",
      notes: [
        { pitch: NOTES.C5, duration: 1, startTime: 0, velocity: 0.36 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 1, velocity: 0.38 },
        { pitch: NOTES.G5, duration: 1, startTime: 2.5, velocity: 0.4 },
        { pitch: NOTES.A5, duration: 2, startTime: 3.5, velocity: 0.37 },
        { pitch: NOTES.G5, duration: 1.5, startTime: 5.5, velocity: 0.35 },
      ],
      repeat: 1,
    },
    {
      name: "Blue Note Run",
      notes: [
        { pitch: NOTES.E5, duration: 1, startTime: 0, velocity: 0.37 },
        { pitch: NOTES.D5, duration: 1.2, startTime: 1, velocity: 0.36 },
        { pitch: NOTES.C5, duration: 1, startTime: 2.2, velocity: 0.38 },
        { pitch: NOTES.A4, duration: 1.5, startTime: 3.2, velocity: 0.35 },
        { pitch: NOTES.G4, duration: 2, startTime: 4.7, velocity: 0.34 },
      ],
      repeat: 1,
    },
    {
      name: "Bebop Lick",
      notes: [
        { pitch: NOTES.C5, duration: 0.8, startTime: 0, velocity: 0.37 },
        { pitch: NOTES.D5, duration: 0.8, startTime: 0.8, velocity: 0.38 },
        { pitch: NOTES.E5, duration: 1, startTime: 1.6, velocity: 0.39 },
        { pitch: NOTES.G5, duration: 1.2, startTime: 2.6, velocity: 0.4 },
        { pitch: NOTES.E5, duration: 1, startTime: 3.8, velocity: 0.37 },
        { pitch: NOTES.C5, duration: 1.5, startTime: 4.8, velocity: 0.36 },
      ],
      repeat: 1,
    },
    {
      name: "Cool Stride",
      notes: [
        { pitch: NOTES.A5, duration: 1.2, startTime: 0, velocity: 0.38 },
        { pitch: NOTES.G5, duration: 1, startTime: 1.2, velocity: 0.37 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 2.2, velocity: 0.36 },
        { pitch: NOTES.D5, duration: 2, startTime: 3.7, velocity: 0.35 },
      ],
      repeat: 1,
    },
    {
      name: "Smooth Glide",
      notes: [
        { pitch: NOTES.D5, duration: 1.5, startTime: 0, velocity: 0.36 },
        { pitch: NOTES.E5, duration: 1, startTime: 1.5, velocity: 0.37 },
        { pitch: NOTES.G5, duration: 1.5, startTime: 2.5, velocity: 0.39 },
        { pitch: NOTES.A5, duration: 1.5, startTime: 4, velocity: 0.38 },
        { pitch: NOTES.G5, duration: 2, startTime: 5.5, velocity: 0.36 },
      ],
      repeat: 1,
    },
    {
      name: "Scat Melody",
      notes: [
        { pitch: NOTES.C5, duration: 0.9, startTime: 0, velocity: 0.37 },
        { pitch: NOTES.D5, duration: 0.9, startTime: 0.9, velocity: 0.38 },
        { pitch: NOTES.F5, duration: 1.2, startTime: 1.8, velocity: 0.39 },
        { pitch: NOTES.E5, duration: 1, startTime: 3, velocity: 0.38 },
        { pitch: NOTES.C5, duration: 1.5, startTime: 4, velocity: 0.36 },
      ],
      repeat: 1,
    },
    {
      name: "Chromatic Walk",
      notes: [
        { pitch: NOTES.E5, duration: 1, startTime: 0, velocity: 0.37 },
        { pitch: NOTES.D5 + 1, duration: 0.8, startTime: 1, velocity: 0.36 },
        { pitch: NOTES.D5, duration: 1, startTime: 1.8, velocity: 0.37 },
        { pitch: NOTES.C5 + 1, duration: 0.8, startTime: 2.8, velocity: 0.36 },
        { pitch: NOTES.C5, duration: 2, startTime: 3.6, velocity: 0.38 },
      ],
      repeat: 1,
    },
    {
      name: "Laid Back Groove",
      notes: [
        { pitch: NOTES.G5, duration: 1.8, startTime: 0, velocity: 0.38 },
        { pitch: NOTES.E5, duration: 1.2, startTime: 1.8, velocity: 0.36 },
        { pitch: NOTES.D5, duration: 1, startTime: 3, velocity: 0.35 },
        { pitch: NOTES.C5, duration: 2, startTime: 4, velocity: 0.37 },
      ],
      repeat: 1,
    },
    {
      name: "Jazz Ornament",
      notes: [
        { pitch: NOTES.A5, duration: 1, startTime: 0, velocity: 0.38 },
        { pitch: NOTES.G5, duration: 1.3, startTime: 1, velocity: 0.37 },
        { pitch: NOTES.F5, duration: 1, startTime: 2.3, velocity: 0.36 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 3.3, velocity: 0.37 },
      ],
      repeat: 1,
    },
    {
      name: "Sophisticated Line",
      notes: [
        { pitch: NOTES.D5, duration: 1.2, startTime: 0, velocity: 0.36 },
        { pitch: NOTES.F5, duration: 1.2, startTime: 1.2, velocity: 0.38 },
        { pitch: NOTES.A5, duration: 1.5, startTime: 2.4, velocity: 0.39 },
        { pitch: NOTES.G5, duration: 1.8, startTime: 3.9, velocity: 0.37 },
      ],
      repeat: 1,
    },
  ],
  bassPatterns: BASS_PATTERNS.filter(p => ["Walking Bass", "Root-Fifth", "Jazzy Walk", "Syncopated Funk"].includes(p.name)),
  arpeggioPatterns: ARPEGGIO_PATTERNS.filter(p => ["Random", "Up-Down", "Syncopated", "Broken Chord"].includes(p.name)),
  drumPatterns: DRUM_PATTERNS.filter(p => ["Basic 4/4", "Energetic"].includes(p.name)),
  durationRange: [35, 50],
  scales: ["dorian", "mixolydian", "blues", "melodicMinor"],
};

/**
 * 7. レトロ（Retro）: 80年代シンセポップ風のノスタルジック
 */
export const RETRO_STYLE: MusicStyle = {
  type: "retro",
  name: "レトロ",
  description: "80年代シンセポップ風のノスタルジック",
  soundParams: {
    padVolume: 0.09,
    padAttack: 0.2,
    padRelease: 0.5,
    leadVolume: 0.48,
    leadAttack: 0.03,
    leadRelease: 0.25,
    oscillatorType: "square",
  },
  progressions: [
    // I-V-vi-IV (80s Pop standard)
    {
      name: "80s Pop",
      tempo: 82,
      chords: [
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.G3, type: "major", duration: 3 },
        { root: NOTES.A3, type: "minor", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
      ],
    },
    // I-IV-V-IV (Rock ballad)
    {
      name: "Retro Rock",
      tempo: 78,
      chords: [
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.G3, type: "major", duration: 2 },
        { root: NOTES.F3, type: "major", duration: 4 },
      ],
    },
    // vi-IV-I-V (Synthwave)
    {
      name: "Synthwave",
      tempo: 85,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.G3, type: "sus4", duration: 3 },
      ],
    },
    // I-vi-IV-V (Doo-wop progression)
    {
      name: "Nostalgic Doo-wop",
      tempo: 80,
      chords: [
        { root: NOTES.C4, type: "major", duration: 2.5 },
        { root: NOTES.A3, type: "minor", duration: 2.5 },
        { root: NOTES.F3, type: "major", duration: 2.5 },
        { root: NOTES.G3, type: "major", duration: 2.5 },
      ],
    },
    // I-bVII-IV-I (Mixolydian retro)
    {
      name: "Retro Mixolydian",
      tempo: 76,
      chords: [
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.A3 + 10, type: "major", duration: 4 }, // Bb
        { root: NOTES.F3, type: "major", duration: 4 },
        { root: NOTES.C4, type: "major", duration: 4 },
      ],
    },
    // I-V-IV-IV (New Wave)
    {
      name: "New Wave",
      tempo: 88,
      chords: [
        { root: NOTES.C4, type: "major", duration: 2 },
        { root: NOTES.G3, type: "major", duration: 2 },
        { root: NOTES.F3, type: "sus4", duration: 2 },
        { root: NOTES.F3, type: "major", duration: 2 },
      ],
    },
    // I-bVII-bVI-V (80s movie soundtrack)
    {
      name: "80s Soundtrack",
      tempo: 79,
      chords: [
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.A3 + 10, type: "major", duration: 3 }, // Bb
        { root: NOTES.G3 + 8, type: "major", duration: 3 }, // Ab
        { root: NOTES.G3, type: "major", duration: 3 },
      ],
    },
    // vi-bVII-I-bIII (Synthwave dark)
    {
      name: "Dark Synthwave",
      tempo: 83,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 3 },
        { root: NOTES.A3 + 10, type: "major", duration: 3 }, // Bb
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.D3 + 8, type: "major", duration: 3 }, // Eb
      ],
    },
    // I-II-IV-V (Borrowed second)
    {
      name: "Borrowed Second",
      tempo: 81,
      chords: [
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.D4, type: "major", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.G3, type: "sus4", duration: 3 },
      ],
    },
    // I-vi-bVII-IV (Retro melancholic)
    {
      name: "Retro Melancholic",
      tempo: 77,
      chords: [
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.A3, type: "minor", duration: 3 },
        { root: NOTES.A3 + 10, type: "major", duration: 3 }, // Bb
        { root: NOTES.F3, type: "major", duration: 3 },
      ],
    },
  ],
  melodyPatterns: [
    {
      name: "Synth Lead",
      notes: [
        { pitch: NOTES.C5, duration: 1.5, startTime: 0, velocity: 0.42 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 1.5, velocity: 0.44 },
        { pitch: NOTES.G5, duration: 2, startTime: 3, velocity: 0.46 },
        { pitch: NOTES.E5, duration: 1, startTime: 5, velocity: 0.42 },
      ],
      repeat: 2,
    },
    {
      name: "Nostalgic Riff",
      notes: [
        { pitch: NOTES.G5, duration: 1, startTime: 0, velocity: 0.44 },
        { pitch: NOTES.G5, duration: 1, startTime: 1, velocity: 0.42 },
        { pitch: NOTES.A5, duration: 1, startTime: 2, velocity: 0.45 },
        { pitch: NOTES.G5, duration: 1, startTime: 3, velocity: 0.43 },
        { pitch: NOTES.E5, duration: 2, startTime: 4, velocity: 0.41 },
      ],
      repeat: 1,
    },
    {
      name: "80s Hook",
      notes: [
        { pitch: NOTES.E5, duration: 1, startTime: 0, velocity: 0.43 },
        { pitch: NOTES.G5, duration: 1, startTime: 1, velocity: 0.45 },
        { pitch: NOTES.A5, duration: 1.5, startTime: 2, velocity: 0.47 },
        { pitch: NOTES.G5, duration: 1.5, startTime: 3.5, velocity: 0.44 },
        { pitch: NOTES.E5, duration: 2, startTime: 5, velocity: 0.42 },
      ],
      repeat: 1,
    },
    {
      name: "Retro Pop",
      notes: [
        { pitch: NOTES.C5, duration: 1.2, startTime: 0, velocity: 0.42 },
        { pitch: NOTES.D5, duration: 1.2, startTime: 1.2, velocity: 0.43 },
        { pitch: NOTES.E5, duration: 1, startTime: 2.4, velocity: 0.45 },
        { pitch: NOTES.G5, duration: 1.5, startTime: 3.4, velocity: 0.46 },
        { pitch: NOTES.E5, duration: 2, startTime: 4.9, velocity: 0.43 },
      ],
      repeat: 1,
    },
    {
      name: "Neon Nights",
      notes: [
        { pitch: NOTES.A5, duration: 1.5, startTime: 0, velocity: 0.45 },
        { pitch: NOTES.G5, duration: 1, startTime: 1.5, velocity: 0.43 },
        { pitch: NOTES.E5, duration: 1, startTime: 2.5, velocity: 0.42 },
        { pitch: NOTES.G5, duration: 2, startTime: 3.5, velocity: 0.44 },
      ],
      repeat: 2,
    },
    {
      name: "Synth Cascade",
      notes: [
        { pitch: NOTES.G5, duration: 1, startTime: 0, velocity: 0.44 },
        { pitch: NOTES.E5, duration: 1, startTime: 1, velocity: 0.43 },
        { pitch: NOTES.D5, duration: 1, startTime: 2, velocity: 0.42 },
        { pitch: NOTES.C5, duration: 1.5, startTime: 3, velocity: 0.41 },
        { pitch: NOTES.E5, duration: 2, startTime: 4.5, velocity: 0.43 },
      ],
      repeat: 1,
    },
    {
      name: "Vintage Pulse",
      notes: [
        { pitch: NOTES.C5, duration: 1.2, startTime: 0, velocity: 0.43 },
        { pitch: NOTES.G5, duration: 1.2, startTime: 1.2, velocity: 0.46 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 2.4, velocity: 0.44 },
        { pitch: NOTES.C5, duration: 2, startTime: 3.9, velocity: 0.42 },
      ],
      repeat: 2,
    },
    {
      name: "Memory Lane",
      notes: [
        { pitch: NOTES.E5, duration: 1.5, startTime: 0, velocity: 0.44 },
        { pitch: NOTES.D5, duration: 1, startTime: 1.5, velocity: 0.42 },
        { pitch: NOTES.C5, duration: 1, startTime: 2.5, velocity: 0.41 },
        { pitch: NOTES.G4, duration: 1.5, startTime: 3.5, velocity: 0.4 },
        { pitch: NOTES.C5, duration: 2, startTime: 5, velocity: 0.43 },
      ],
      repeat: 1,
    },
    {
      name: "Arcade Dream",
      notes: [
        { pitch: NOTES.G5, duration: 1, startTime: 0, velocity: 0.45 },
        { pitch: NOTES.A5, duration: 1, startTime: 1, velocity: 0.46 },
        { pitch: NOTES.C5 + 12, duration: 1.5, startTime: 2, velocity: 0.47 },
        { pitch: NOTES.G5, duration: 2, startTime: 3.5, velocity: 0.44 },
      ],
      repeat: 2,
    },
    {
      name: "VHS Nostalgia",
      notes: [
        { pitch: NOTES.D5, duration: 1.3, startTime: 0, velocity: 0.42 },
        { pitch: NOTES.E5, duration: 1.3, startTime: 1.3, velocity: 0.44 },
        { pitch: NOTES.G5, duration: 1, startTime: 2.6, velocity: 0.45 },
        { pitch: NOTES.A5, duration: 1.5, startTime: 3.6, velocity: 0.46 },
      ],
      repeat: 1,
    },
    {
      name: "Cassette Rewind",
      notes: [
        { pitch: NOTES.A5, duration: 1, startTime: 0, velocity: 0.46 },
        { pitch: NOTES.E5, duration: 1, startTime: 1, velocity: 0.44 },
        { pitch: NOTES.C5, duration: 1, startTime: 2, velocity: 0.42 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 3, velocity: 0.43 },
        { pitch: NOTES.G5, duration: 2, startTime: 4.5, velocity: 0.45 },
      ],
      repeat: 1,
    },
  ],
  bassPatterns: BASS_PATTERNS.filter(p => ["Root-Fifth", "Octave Jump", "Bouncy Pop", "Rock Steady"].includes(p.name)),
  arpeggioPatterns: ARPEGGIO_PATTERNS.filter(p => ["Up-Down", "Up", "Fast Cascade", "Bounce"].includes(p.name)),
  drumPatterns: DRUM_PATTERNS.filter(p => ["Basic 4/4", "Energetic"].includes(p.name)),
  durationRange: [32, 48],
  scales: ["major", "minor", "pentatonic", "mixolydian"],
};

/**
 * 8. エレクトロニック（Electronic）: モダンなエレクトロニックサウンド
 */
export const ELECTRONIC_STYLE: MusicStyle = {
  type: "electronic",
  name: "エレクトロニック",
  description: "モダンなエレクトロニックサウンド、アルペジオ重視",
  soundParams: {
    padVolume: 0.08,
    padAttack: 0.15,
    padRelease: 0.4,
    leadVolume: 0.46,
    leadAttack: 0.02,
    leadRelease: 0.2,
    oscillatorType: "sawtooth",
  },
  progressions: [
    // i-VI-III-VII (EDM progression)
    {
      name: "EDM Standard",
      tempo: 100,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.G3, type: "major", duration: 3 },
      ],
    },
    // I-V-vi-iii (Progressive house)
    {
      name: "Progressive House",
      tempo: 105,
      chords: [
        { root: NOTES.C4, type: "major", duration: 2.5 },
        { root: NOTES.G3, type: "major", duration: 2.5 },
        { root: NOTES.A3, type: "minor", duration: 2.5 },
        { root: NOTES.E3, type: "minor", duration: 2.5 },
      ],
    },
    // vi-IV-I-V (Melodic electronic)
    {
      name: "Melodic Electronic",
      tempo: 95,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.G3, type: "sus4", duration: 3 },
      ],
    },
    // I-vi-IV-V (Electro pop)
    {
      name: "Electro Pop",
      tempo: 110,
      chords: [
        { root: NOTES.C4, type: "major", duration: 2 },
        { root: NOTES.A3, type: "minor", duration: 2 },
        { root: NOTES.F3, type: "major", duration: 2 },
        { root: NOTES.G3, type: "major", duration: 2 },
      ],
    },
    // I-IV-vi-V (Future bass)
    {
      name: "Future Bass",
      tempo: 98,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 3 },
        { root: NOTES.F3, type: "maj7", duration: 3 },
        { root: NOTES.A3, type: "min7", duration: 3 },
        { root: NOTES.G3, type: "sus4", duration: 3 },
      ],
    },
    // vi-I-V-IV (Chill electronic)
    {
      name: "Chill Electronic",
      tempo: 92,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 3.5 },
        { root: NOTES.C4, type: "major", duration: 3.5 },
        { root: NOTES.G3, type: "sus2", duration: 3.5 },
        { root: NOTES.F3, type: "major", duration: 3.5 },
      ],
    },
    // I-bVII-bVI-bVII (EDM epic)
    {
      name: "EDM Epic",
      tempo: 102,
      chords: [
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.A3 + 10, type: "major", duration: 3 }, // Bb
        { root: NOTES.G3 + 8, type: "major", duration: 3 }, // Ab
        { root: NOTES.A3 + 10, type: "major", duration: 3 }, // Bb
      ],
    },
    // i-bIII-bVII-IV (Melodic dubstep)
    {
      name: "Melodic Dubstep",
      tempo: 70,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 4 },
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.G3, type: "major", duration: 4 },
        { root: NOTES.F3, type: "maj7", duration: 4 },
      ],
    },
    // I-iii-IV-vi (Uplifting trance)
    {
      name: "Uplifting Trance",
      tempo: 108,
      chords: [
        { root: NOTES.C4, type: "major", duration: 2.5 },
        { root: NOTES.E3, type: "minor", duration: 2.5 },
        { root: NOTES.F3, type: "major", duration: 2.5 },
        { root: NOTES.A3, type: "minor", duration: 2.5 },
      ],
    },
    // vi-IV-I-III (Festival anthem)
    {
      name: "Festival Anthem",
      tempo: 104,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.E3, type: "major", duration: 3 },
      ],
    },
  ],
  melodyPatterns: [
    {
      name: "Digital Pulse",
      notes: [
        { pitch: NOTES.C5, duration: 0.8, startTime: 0, velocity: 0.44 },
        { pitch: NOTES.E5, duration: 0.8, startTime: 0.8, velocity: 0.46 },
        { pitch: NOTES.G5, duration: 0.8, startTime: 1.6, velocity: 0.48 },
        { pitch: NOTES.E5, duration: 0.8, startTime: 2.4, velocity: 0.45 },
        { pitch: NOTES.C5, duration: 1.6, startTime: 3.2, velocity: 0.42 },
      ],
      repeat: 2,
    },
    {
      name: "Synth Sequence",
      notes: [
        { pitch: NOTES.G5, duration: 1, startTime: 0, velocity: 0.46 },
        { pitch: NOTES.A5, duration: 1, startTime: 1, velocity: 0.47 },
        { pitch: NOTES.C5 + 12, duration: 1.5, startTime: 2, velocity: 0.48 },
        { pitch: NOTES.A5, duration: 1, startTime: 3.5, velocity: 0.45 },
        { pitch: NOTES.G5, duration: 1.5, startTime: 4.5, velocity: 0.43 },
      ],
      repeat: 1,
    },
    {
      name: "EDM Drop",
      notes: [
        { pitch: NOTES.E5, duration: 0.7, startTime: 0, velocity: 0.47 },
        { pitch: NOTES.G5, duration: 0.7, startTime: 0.7, velocity: 0.48 },
        { pitch: NOTES.A5, duration: 1, startTime: 1.4, velocity: 0.49 },
        { pitch: NOTES.C5 + 12, duration: 1.2, startTime: 2.4, velocity: 0.48 },
        { pitch: NOTES.A5, duration: 1, startTime: 3.6, velocity: 0.46 },
      ],
      repeat: 2,
    },
    {
      name: "Electro Rise",
      notes: [
        { pitch: NOTES.C5, duration: 0.9, startTime: 0, velocity: 0.44 },
        { pitch: NOTES.D5, duration: 0.9, startTime: 0.9, velocity: 0.45 },
        { pitch: NOTES.E5, duration: 0.9, startTime: 1.8, velocity: 0.46 },
        { pitch: NOTES.G5, duration: 0.9, startTime: 2.7, velocity: 0.48 },
        { pitch: NOTES.A5, duration: 1.5, startTime: 3.6, velocity: 0.49 },
      ],
      repeat: 1,
    },
    {
      name: "Future Bass Lead",
      notes: [
        { pitch: NOTES.G5, duration: 1.2, startTime: 0, velocity: 0.47 },
        { pitch: NOTES.A5, duration: 1, startTime: 1.2, velocity: 0.48 },
        { pitch: NOTES.E5, duration: 1, startTime: 2.2, velocity: 0.45 },
        { pitch: NOTES.G5, duration: 1.5, startTime: 3.2, velocity: 0.46 },
      ],
      repeat: 2,
    },
    {
      name: "Progressive Build",
      notes: [
        { pitch: NOTES.A5, duration: 0.8, startTime: 0, velocity: 0.47 },
        { pitch: NOTES.G5, duration: 0.8, startTime: 0.8, velocity: 0.46 },
        { pitch: NOTES.E5, duration: 0.8, startTime: 1.6, velocity: 0.45 },
        { pitch: NOTES.C5, duration: 1, startTime: 2.4, velocity: 0.44 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 3.4, velocity: 0.46 },
      ],
      repeat: 1,
    },
    {
      name: "Cyber Wave",
      notes: [
        { pitch: NOTES.E5, duration: 0.9, startTime: 0, velocity: 0.46 },
        { pitch: NOTES.G5, duration: 0.9, startTime: 0.9, velocity: 0.48 },
        { pitch: NOTES.C5 + 12, duration: 1.2, startTime: 1.8, velocity: 0.49 },
        { pitch: NOTES.A5, duration: 1.5, startTime: 3, velocity: 0.47 },
      ],
      repeat: 2,
    },
    {
      name: "Techno Climb",
      notes: [
        { pitch: NOTES.C5, duration: 0.7, startTime: 0, velocity: 0.45 },
        { pitch: NOTES.E5, duration: 0.7, startTime: 0.7, velocity: 0.47 },
        { pitch: NOTES.G5, duration: 0.7, startTime: 1.4, velocity: 0.48 },
        { pitch: NOTES.C5 + 12, duration: 1, startTime: 2.1, velocity: 0.49 },
        { pitch: NOTES.G5, duration: 1.5, startTime: 3.1, velocity: 0.46 },
      ],
      repeat: 1,
    },
    {
      name: "Bass Drop Lead",
      notes: [
        { pitch: NOTES.G5, duration: 1, startTime: 0, velocity: 0.48 },
        { pitch: NOTES.C5 + 12, duration: 1.5, startTime: 1, velocity: 0.49 },
        { pitch: NOTES.A5, duration: 1, startTime: 2.5, velocity: 0.47 },
        { pitch: NOTES.E5, duration: 2, startTime: 3.5, velocity: 0.45 },
      ],
      repeat: 2,
    },
    {
      name: "Trance Arpeggio",
      notes: [
        { pitch: NOTES.C5, duration: 0.8, startTime: 0, velocity: 0.45 },
        { pitch: NOTES.G5, duration: 0.8, startTime: 0.8, velocity: 0.48 },
        { pitch: NOTES.E5, duration: 0.8, startTime: 1.6, velocity: 0.46 },
        { pitch: NOTES.A5, duration: 1, startTime: 2.4, velocity: 0.49 },
        { pitch: NOTES.G5, duration: 1.5, startTime: 3.4, velocity: 0.47 },
      ],
      repeat: 2,
    },
    {
      name: "Glitch Melody",
      notes: [
        { pitch: NOTES.E5, duration: 0.6, startTime: 0, velocity: 0.46 },
        { pitch: NOTES.D5, duration: 0.6, startTime: 0.6, velocity: 0.45 },
        { pitch: NOTES.E5, duration: 0.6, startTime: 1.2, velocity: 0.47 },
        { pitch: NOTES.G5, duration: 1, startTime: 1.8, velocity: 0.48 },
        { pitch: NOTES.A5, duration: 1.2, startTime: 2.8, velocity: 0.49 },
      ],
      repeat: 2,
    },
  ],
  bassPatterns: BASS_PATTERNS.filter(p => ["Walking Bass", "Octave Jump", "Deep Pulse", "Driving Eighth", "Syncopated Funk"].includes(p.name)),
  arpeggioPatterns: ARPEGGIO_PATTERNS, // すべてのアルペジオパターンを使用（アルペジオ重視）
  drumPatterns: DRUM_PATTERNS.filter(p => ["Energetic", "Heavy Rock"].includes(p.name)),
  durationRange: [28, 42],
  scales: ["minor", "phrygian", "wholeTone", "diminished"],
};

/**
 * 9. オーケストラ（Orchestral）: クラシカルな弦楽器風
 */
export const ORCHESTRAL_STYLE: MusicStyle = {
  type: "orchestral",
  name: "オーケストラ",
  description: "クラシカルで優雅な弦楽器風サウンド",
  soundParams: {
    padVolume: 0.1,
    padAttack: 0.6,
    padRelease: 1.2,
    leadVolume: 0.43,
    leadAttack: 0.1,
    leadRelease: 0.6,
    oscillatorType: "sine",
  },
  progressions: [
    {
      name: "Classical Basic",
      tempo: 58,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 4 },
        { root: NOTES.F3, type: "maj7", duration: 4 },
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.G3, type: "dom7", duration: 4 },
      ],
    },
    {
      name: "Classical Turnaround",
      tempo: 56,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 3 },
        { root: NOTES.D4, type: "minor", duration: 3 },
        { root: NOTES.G3, type: "dom7", duration: 3 },
        { root: NOTES.C4, type: "maj7", duration: 3 },
      ],
    },
    {
      name: "Romantic Waltz",
      tempo: 52,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 6 },
        { root: NOTES.A3, type: "min7", duration: 6 },
        { root: NOTES.F3, type: "maj7", duration: 6 },
        { root: NOTES.G3, type: "dom7", duration: 6 },
      ],
    },
    {
      name: "Extended Classical",
      tempo: 54,
      chords: [
        { root: NOTES.C4, type: "major", duration: 2.5 },
        { root: NOTES.G3, type: "major", duration: 2.5 },
        { root: NOTES.A3, type: "minor", duration: 2.5 },
        { root: NOTES.E3, type: "minor", duration: 2.5 },
        { root: NOTES.F3, type: "major", duration: 2.5 },
        { root: NOTES.C4, type: "major", duration: 2.5 },
        { root: NOTES.D4, type: "minor", duration: 2.5 },
        { root: NOTES.G3, type: "dom7", duration: 2.5 },
      ],
    },
    {
      name: "Plagal Resolution",
      tempo: 53,
      chords: [
        { root: NOTES.F3, type: "maj7", duration: 4 },
        { root: NOTES.C4, type: "maj7", duration: 4 },
        { root: NOTES.G3, type: "dom7", duration: 4 },
        { root: NOTES.A3, type: "min7", duration: 4 },
      ],
    },
    {
      name: "Descending Bass",
      tempo: 55,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 3 },
        { root: NOTES.E3, type: "min7", duration: 3 },
        { root: NOTES.A3, type: "min7", duration: 3 },
        { root: NOTES.D4, type: "min7", duration: 3 },
        { root: NOTES.G3, type: "dom7", duration: 3 },
      ],
    },
    {
      name: "Baroque Sequence",
      tempo: 60,
      chords: [
        { root: NOTES.C4, type: "major", duration: 2 },
        { root: NOTES.F3, type: "major", duration: 2 },
        { root: NOTES.E3, type: "minor", duration: 2 },
        { root: NOTES.A3, type: "minor", duration: 2 },
        { root: NOTES.D4, type: "minor", duration: 2 },
        { root: NOTES.G3, type: "dom7", duration: 2 },
        { root: NOTES.C4, type: "maj7", duration: 2 },
      ],
    },
    {
      name: "Neapolitan",
      tempo: 57,
      chords: [
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.G3 + 8, type: "major", duration: 4 }, // Ab
        { root: NOTES.F3, type: "major", duration: 4 },
        { root: NOTES.G3, type: "dom7", duration: 4 },
      ],
    },
    {
      name: "Deceptive Cadence",
      tempo: 51,
      chords: [
        { root: NOTES.A3, type: "min7", duration: 5 },
        { root: NOTES.F3, type: "maj7", duration: 5 },
        { root: NOTES.C4, type: "maj7", duration: 5 },
        { root: NOTES.G3, type: "dom7", duration: 5 },
      ],
    },
    {
      name: "Full Diatonic Circle",
      tempo: 59,
      chords: [
        { root: NOTES.C4, type: "major", duration: 2 },
        { root: NOTES.D4, type: "minor", duration: 2 },
        { root: NOTES.E3, type: "minor", duration: 2 },
        { root: NOTES.F3, type: "major", duration: 2 },
        { root: NOTES.G3, type: "major", duration: 2 },
        { root: NOTES.A3, type: "minor", duration: 2 },
        { root: NOTES.C4, type: "maj7", duration: 2 },
      ],
    },
  ],
  melodyPatterns: [
    {
      name: "Violin Lead",
      notes: [
        { pitch: NOTES.E5, duration: 2.5, startTime: 0, velocity: 0.35 },
        { pitch: NOTES.D5, duration: 1.5, startTime: 2.5, velocity: 0.33 },
        { pitch: NOTES.C5, duration: 2, startTime: 4, velocity: 0.32 },
        { pitch: NOTES.G5, duration: 4, startTime: 6, velocity: 0.37 },
      ],
      repeat: 1,
    },
    {
      name: "Lyrical Line",
      notes: [
        { pitch: NOTES.C5, duration: 3, startTime: 0, velocity: 0.34 },
        { pitch: NOTES.E5, duration: 2, startTime: 3, velocity: 0.36 },
        { pitch: NOTES.G5, duration: 2.5, startTime: 5, velocity: 0.38 },
        { pitch: NOTES.A5, duration: 2.5, startTime: 7.5, velocity: 0.36 },
      ],
      repeat: 1,
    },
    {
      name: "Baroque Ornament",
      notes: [
        { pitch: NOTES.G5, duration: 1, startTime: 0, velocity: 0.36 },
        { pitch: NOTES.F5, duration: 1, startTime: 1, velocity: 0.35 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 2, velocity: 0.34 },
        { pitch: NOTES.D5, duration: 1.5, startTime: 3.5, velocity: 0.33 },
        { pitch: NOTES.C5, duration: 3, startTime: 5, velocity: 0.35 },
      ],
      repeat: 1,
    },
    {
      name: "Cello Voice",
      notes: [
        { pitch: NOTES.C5, duration: 4, startTime: 0, velocity: 0.33 },
        { pitch: NOTES.G4, duration: 3, startTime: 4, velocity: 0.31 },
        { pitch: NOTES.E5, duration: 4, startTime: 7, velocity: 0.34 },
      ],
      repeat: 1,
    },
    {
      name: "String Swell",
      notes: [
        { pitch: NOTES.E5, duration: 3.5, startTime: 0, velocity: 0.32 },
        { pitch: NOTES.G5, duration: 3, startTime: 3.5, velocity: 0.36 },
        { pitch: NOTES.C5 + 12, duration: 4.5, startTime: 6.5, velocity: 0.38 },
      ],
      repeat: 1,
    },
    {
      name: "Chamber Music",
      notes: [
        { pitch: NOTES.A5, duration: 2, startTime: 0, velocity: 0.35 },
        { pitch: NOTES.G5, duration: 2, startTime: 2, velocity: 0.34 },
        { pitch: NOTES.F5, duration: 2.5, startTime: 4, velocity: 0.33 },
        { pitch: NOTES.E5, duration: 3.5, startTime: 6.5, velocity: 0.36 },
      ],
      repeat: 1,
    },
    {
      name: "Symphonic Arc",
      notes: [
        { pitch: NOTES.D5, duration: 2.5, startTime: 0, velocity: 0.33 },
        { pitch: NOTES.F5, duration: 2.5, startTime: 2.5, velocity: 0.35 },
        { pitch: NOTES.A5, duration: 3, startTime: 5, velocity: 0.38 },
        { pitch: NOTES.G5, duration: 3, startTime: 8, velocity: 0.36 },
      ],
      repeat: 1,
    },
    {
      name: "Classical Theme",
      notes: [
        { pitch: NOTES.C5, duration: 2, startTime: 0, velocity: 0.34 },
        { pitch: NOTES.D5, duration: 2, startTime: 2, velocity: 0.35 },
        { pitch: NOTES.E5, duration: 2, startTime: 4, velocity: 0.36 },
        { pitch: NOTES.C5, duration: 2, startTime: 6, velocity: 0.33 },
        { pitch: NOTES.G5, duration: 4, startTime: 8, velocity: 0.37 },
      ],
      repeat: 1,
    },
    {
      name: "Adagio Cantabile",
      notes: [
        { pitch: NOTES.G5, duration: 4, startTime: 0, velocity: 0.37 },
        { pitch: NOTES.E5, duration: 3, startTime: 4, velocity: 0.35 },
        { pitch: NOTES.C5, duration: 4, startTime: 7, velocity: 0.33 },
      ],
      repeat: 1,
    },
    {
      name: "Minuet Flow",
      notes: [
        { pitch: NOTES.E5, duration: 2, startTime: 0, velocity: 0.35 },
        { pitch: NOTES.D5, duration: 2, startTime: 2, velocity: 0.34 },
        { pitch: NOTES.E5, duration: 2, startTime: 4, velocity: 0.35 },
        { pitch: NOTES.G5, duration: 3, startTime: 6, velocity: 0.37 },
        { pitch: NOTES.C5, duration: 3, startTime: 9, velocity: 0.33 },
      ],
      repeat: 1,
    },
  ],
  bassPatterns: BASS_PATTERNS.filter(p => ["Root-Fifth", "Walking Bass", "Classic Arpeggio Bass"].includes(p.name)),
  arpeggioPatterns: ARPEGGIO_PATTERNS.filter(p => ["Up", "Broken Chord", "Slow Wave", "Triplet"].includes(p.name)),
  drumPatterns: DRUM_PATTERNS.filter(p => ["Waltz 3/4", "Minimal Beat", "Epic Slow"].includes(p.name)),
  durationRange: [40, 65],
  scales: ["major", "minor", "harmonicMinor", "melodicMinor"],
};

/**
 * 10. エスニック（Ethnic）: ワールドミュージック・エキゾチック
 */
export const ETHNIC_STYLE: MusicStyle = {
  type: "ethnic",
  name: "エスニック",
  description: "世界各地の民族音楽風サウンド",
  soundParams: {
    padVolume: 0.08,
    padAttack: 0.4,
    padRelease: 0.8,
    leadVolume: 0.46,
    leadAttack: 0.05,
    leadRelease: 0.3,
    oscillatorType: "triangle",
  },
  progressions: [
    {
      name: "Pentatonic Asian",
      tempo: 68,
      chords: [
        { root: NOTES.D3, type: "sus2", duration: 4 },
        { root: NOTES.A3, type: "sus2", duration: 4 },
        { root: NOTES.G3, type: "sus2", duration: 4 },
        { root: NOTES.D3, type: "sus2", duration: 4 },
      ],
    },
    {
      name: "Middle Eastern",
      tempo: 72,
      chords: [
        { root: NOTES.E3, type: "minor", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.E3, type: "minor", duration: 3 },
        { root: NOTES.D3, type: "major", duration: 3 },
      ],
    },
    {
      name: "Japanese Pentatonic",
      tempo: 65,
      chords: [
        { root: NOTES.A3, type: "sus2", duration: 5 },
        { root: NOTES.D4, type: "sus2", duration: 5 },
        { root: NOTES.E3, type: "sus2", duration: 5 },
        { root: NOTES.A3, type: "sus2", duration: 5 },
      ],
    },
    {
      name: "Indian Raga",
      tempo: 70,
      chords: [
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.D3 + 8, type: "major", duration: 4 }, // Eb
        { root: NOTES.F3, type: "major", duration: 4 },
        { root: NOTES.G3, type: "major", duration: 4 },
      ],
    },
    {
      name: "Celtic Modal",
      tempo: 66,
      chords: [
        { root: NOTES.D3, type: "minor", duration: 4 },
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.A3 + 10, type: "major", duration: 4 }, // Bb
        { root: NOTES.D3, type: "minor", duration: 4 },
      ],
    },
    {
      name: "African Groove",
      tempo: 75,
      chords: [
        { root: NOTES.E3, type: "minor", duration: 3 },
        { root: NOTES.G3, type: "major", duration: 3 },
        { root: NOTES.D3, type: "major", duration: 3 },
        { root: NOTES.E3, type: "minor", duration: 3 },
      ],
    },
    {
      name: "Balkan Asymmetric",
      tempo: 78,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 2.5 },
        { root: NOTES.G3, type: "major", duration: 2.5 },
        { root: NOTES.F3, type: "major", duration: 2.5 },
        { root: NOTES.E3, type: "major", duration: 2.5 },
      ],
    },
    {
      name: "Flamenco Phrygian",
      tempo: 73,
      chords: [
        { root: NOTES.E3, type: "minor", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.G3, type: "major", duration: 3 },
        { root: NOTES.A3, type: "minor", duration: 3 },
      ],
    },
    {
      name: "Chinese Pentatonic",
      tempo: 64,
      chords: [
        { root: NOTES.C4, type: "sus2", duration: 5 },
        { root: NOTES.G3, type: "sus2", duration: 5 },
        { root: NOTES.D4, type: "sus2", duration: 5 },
        { root: NOTES.A3, type: "sus2", duration: 5 },
      ],
    },
    {
      name: "Klezmer Mode",
      tempo: 69,
      chords: [
        { root: NOTES.D3, type: "minor", duration: 3 },
        { root: NOTES.G3, type: "minor", duration: 3 },
        { root: NOTES.A3, type: "dom7", duration: 3 },
        { root: NOTES.D3, type: "minor", duration: 3 },
      ],
    },
  ],
  melodyPatterns: [
    {
      name: "Shakuhachi Breath",
      notes: [
        { pitch: NOTES.D5, duration: 3, startTime: 0, velocity: 0.38 },
        { pitch: NOTES.E5, duration: 2, startTime: 3, velocity: 0.37 },
        { pitch: NOTES.A5, duration: 3, startTime: 5, velocity: 0.4 },
        { pitch: NOTES.G5, duration: 4, startTime: 8, velocity: 0.38 },
      ],
      repeat: 1,
    },
    {
      name: "Sitar Slide",
      notes: [
        { pitch: NOTES.C5, duration: 1.5, startTime: 0, velocity: 0.39 },
        { pitch: NOTES.D5, duration: 1, startTime: 1.5, velocity: 0.4 },
        { pitch: NOTES.E5, duration: 2, startTime: 2.5, velocity: 0.42 },
        { pitch: NOTES.C5, duration: 2, startTime: 4.5, velocity: 0.38 },
      ],
      repeat: 2,
    },
    {
      name: "Duduk Lament",
      notes: [
        { pitch: NOTES.E5, duration: 3.5, startTime: 0, velocity: 0.37 },
        { pitch: NOTES.F5, duration: 2, startTime: 3.5, velocity: 0.38 },
        { pitch: NOTES.E5, duration: 3, startTime: 5.5, velocity: 0.36 },
      ],
      repeat: 1,
    },
    {
      name: "Bamboo Flute",
      notes: [
        { pitch: NOTES.A5, duration: 2, startTime: 0, velocity: 0.4 },
        { pitch: NOTES.G5, duration: 2, startTime: 2, velocity: 0.39 },
        { pitch: NOTES.E5, duration: 2.5, startTime: 4, velocity: 0.38 },
        { pitch: NOTES.D5, duration: 3.5, startTime: 6.5, velocity: 0.37 },
      ],
      repeat: 1,
    },
    {
      name: "Celtic Whistle",
      notes: [
        { pitch: NOTES.D5, duration: 1, startTime: 0, velocity: 0.39 },
        { pitch: NOTES.E5, duration: 1, startTime: 1, velocity: 0.4 },
        { pitch: NOTES.D5, duration: 1, startTime: 2, velocity: 0.38 },
        { pitch: NOTES.A4, duration: 1.5, startTime: 3, velocity: 0.37 },
        { pitch: NOTES.D5, duration: 2, startTime: 4.5, velocity: 0.39 },
      ],
      repeat: 2,
    },
    {
      name: "Oud Ornament",
      notes: [
        { pitch: NOTES.E5, duration: 1.2, startTime: 0, velocity: 0.41 },
        { pitch: NOTES.F5, duration: 0.8, startTime: 1.2, velocity: 0.42 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 2, velocity: 0.4 },
        { pitch: NOTES.D5, duration: 2, startTime: 3.5, velocity: 0.39 },
      ],
      repeat: 2,
    },
    {
      name: "Koto Cascade",
      notes: [
        { pitch: NOTES.C5 + 12, duration: 1, startTime: 0, velocity: 0.41 },
        { pitch: NOTES.A5, duration: 1, startTime: 1, velocity: 0.4 },
        { pitch: NOTES.G5, duration: 1.5, startTime: 2, velocity: 0.39 },
        { pitch: NOTES.E5, duration: 2, startTime: 3.5, velocity: 0.38 },
        { pitch: NOTES.D5, duration: 2.5, startTime: 5.5, velocity: 0.37 },
      ],
      repeat: 1,
    },
    {
      name: "Tabla Dance",
      notes: [
        { pitch: NOTES.G5, duration: 1, startTime: 0, velocity: 0.4 },
        { pitch: NOTES.E5, duration: 1, startTime: 1, velocity: 0.39 },
        { pitch: NOTES.G5, duration: 1, startTime: 2, velocity: 0.41 },
        { pitch: NOTES.A5, duration: 1.5, startTime: 3, velocity: 0.42 },
        { pitch: NOTES.G5, duration: 2, startTime: 4.5, velocity: 0.39 },
      ],
      repeat: 2,
    },
    {
      name: "Erhu Glide",
      notes: [
        { pitch: NOTES.A5, duration: 3, startTime: 0, velocity: 0.39 },
        { pitch: NOTES.G5, duration: 2.5, startTime: 3, velocity: 0.38 },
        { pitch: NOTES.E5, duration: 3.5, startTime: 5.5, velocity: 0.37 },
      ],
      repeat: 1,
    },
    {
      name: "Pan Flute Echo",
      notes: [
        { pitch: NOTES.C5, duration: 2.5, startTime: 0, velocity: 0.38 },
        { pitch: NOTES.D5, duration: 2, startTime: 2.5, velocity: 0.39 },
        { pitch: NOTES.E5, duration: 2, startTime: 4.5, velocity: 0.4 },
        { pitch: NOTES.G5, duration: 3, startTime: 6.5, velocity: 0.41 },
      ],
      repeat: 1,
    },
  ],
  bassPatterns: BASS_PATTERNS.filter(p => ["Root-Fifth", "Minimal", "Rhythmic Groove"].includes(p.name)),
  arpeggioPatterns: ARPEGGIO_PATTERNS.filter(p => ["Up", "Down", "Slow Wave", "Triplet"].includes(p.name)),
  drumPatterns: DRUM_PATTERNS.filter(p => ["Complex 7/8", "Progressive 5/4", "Minimal Beat", "Folk 6/8"].includes(p.name)),
  durationRange: [35, 55],
  scales: ["hirajoshi", "inSen", "phrygianDominant", "hungarianMinor", "pentatonic"],
};

/**
 * 11. ローファイ（Lofi）: チルアウト・ヒップホップ
 */
export const LOFI_STYLE: MusicStyle = {
  type: "lofi",
  name: "ローファイ",
  description: "チルでリラックスしたローファイヒップホップ",
  soundParams: {
    padVolume: 0.07,
    padAttack: 0.8,
    padRelease: 1.0,
    leadVolume: 0.35,
    leadAttack: 0.15,
    leadRelease: 0.5,
    oscillatorType: "triangle",
  },
  progressions: [
    {
      name: "Lofi Classic",
      tempo: 75,
      chords: [
        { root: NOTES.A3, type: "min7", duration: 4 },
        { root: NOTES.D4, type: "min7", duration: 4 },
        { root: NOTES.G3, type: "maj7", duration: 4 },
        { root: NOTES.C4, type: "maj7", duration: 4 },
      ],
    },
    {
      name: "Chill Jazzy",
      tempo: 72,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 4 },
        { root: NOTES.A3, type: "min7", duration: 4 },
        { root: NOTES.F3, type: "maj7", duration: 4 },
        { root: NOTES.G3, type: "dom7", duration: 4 },
      ],
    },
    {
      name: "Melancholic Study",
      tempo: 68,
      chords: [
        { root: NOTES.E3, type: "min7", duration: 5 },
        { root: NOTES.A3, type: "min7", duration: 5 },
        { root: NOTES.D4, type: "maj7", duration: 5 },
        { root: NOTES.G3, type: "maj7", duration: 5 },
      ],
    },
    {
      name: "Rainy Day",
      tempo: 70,
      chords: [
        { root: NOTES.D4, type: "min7", duration: 4 },
        { root: NOTES.G3, type: "maj7", duration: 4 },
        { root: NOTES.C4, type: "maj7", duration: 4 },
        { root: NOTES.F3, type: "maj7", duration: 4 },
      ],
    },
    {
      name: "Coffee Shop",
      tempo: 76,
      chords: [
        { root: NOTES.A3, type: "min7", duration: 3 },
        { root: NOTES.F3, type: "maj7", duration: 3 },
        { root: NOTES.C4, type: "maj7", duration: 3 },
        { root: NOTES.E3, type: "min7", duration: 3 },
      ],
    },
    {
      name: "Sunset Lofi",
      tempo: 73,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 4 },
        { root: NOTES.E3, type: "min7", duration: 4 },
        { root: NOTES.A3, type: "min7", duration: 4 },
        { root: NOTES.D4, type: "min7", duration: 4 },
      ],
    },
    {
      name: "Bedroom Beats",
      tempo: 78,
      chords: [
        { root: NOTES.G3, type: "maj7", duration: 3 },
        { root: NOTES.E3, type: "min7", duration: 3 },
        { root: NOTES.C4, type: "maj7", duration: 3 },
        { root: NOTES.D4, type: "dom7", duration: 3 },
      ],
    },
    {
      name: "Late Night Study",
      tempo: 69,
      chords: [
        { root: NOTES.A3, type: "min7", duration: 5 },
        { root: NOTES.D4, type: "maj7", duration: 5 },
        { root: NOTES.F3, type: "maj7", duration: 5 },
        { root: NOTES.E3, type: "min7", duration: 5 },
      ],
    },
    {
      name: "Lazy Sunday",
      tempo: 71,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 4 },
        { root: NOTES.A3, type: "min7", duration: 4 },
        { root: NOTES.D4, type: "min7", duration: 4 },
        { root: NOTES.G3, type: "dom7", duration: 4 },
      ],
    },
    {
      name: "Nostalgic Memories",
      tempo: 74,
      chords: [
        { root: NOTES.F3, type: "maj7", duration: 4 },
        { root: NOTES.G3, type: "maj7", duration: 4 },
        { root: NOTES.E3, type: "min7", duration: 4 },
        { root: NOTES.A3, type: "min7", duration: 4 },
      ],
    },
  ],
  melodyPatterns: [
    {
      name: "Mellow Keys",
      notes: [
        { pitch: NOTES.E5, duration: 2, startTime: 0, velocity: 0.32 },
        { pitch: NOTES.D5, duration: 2, startTime: 2, velocity: 0.3 },
        { pitch: NOTES.C5, duration: 3, startTime: 4, velocity: 0.31 },
        { pitch: NOTES.A4, duration: 3, startTime: 7, velocity: 0.29 },
      ],
      repeat: 1,
    },
    {
      name: "Dusty Rhodes",
      notes: [
        { pitch: NOTES.C5, duration: 1.5, startTime: 0, velocity: 0.31 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 1.5, velocity: 0.33 },
        { pitch: NOTES.D5, duration: 2, startTime: 3, velocity: 0.32 },
        { pitch: NOTES.A4, duration: 2.5, startTime: 5, velocity: 0.3 },
      ],
      repeat: 2,
    },
    {
      name: "Vinyl Crackle",
      notes: [
        { pitch: NOTES.G5, duration: 2.5, startTime: 0, velocity: 0.3 },
        { pitch: NOTES.E5, duration: 2, startTime: 2.5, velocity: 0.31 },
        { pitch: NOTES.C5, duration: 3, startTime: 4.5, velocity: 0.29 },
      ],
      repeat: 1,
    },
    {
      name: "Warm Piano",
      notes: [
        { pitch: NOTES.A5, duration: 1.8, startTime: 0, velocity: 0.33 },
        { pitch: NOTES.G5, duration: 1.8, startTime: 1.8, velocity: 0.32 },
        { pitch: NOTES.E5, duration: 2, startTime: 3.6, velocity: 0.31 },
        { pitch: NOTES.C5, duration: 2.5, startTime: 5.6, velocity: 0.3 },
      ],
      repeat: 1,
    },
    {
      name: "Dreamy Bells",
      notes: [
        { pitch: NOTES.D5, duration: 3, startTime: 0, velocity: 0.31 },
        { pitch: NOTES.E5, duration: 2, startTime: 3, velocity: 0.32 },
        { pitch: NOTES.G5, duration: 3.5, startTime: 5, velocity: 0.33 },
      ],
      repeat: 1,
    },
    {
      name: "Sleepy Chords",
      notes: [
        { pitch: NOTES.C5, duration: 2.5, startTime: 0, velocity: 0.3 },
        { pitch: NOTES.A4, duration: 2, startTime: 2.5, velocity: 0.29 },
        { pitch: NOTES.E5, duration: 3, startTime: 4.5, velocity: 0.31 },
      ],
      repeat: 1,
    },
    {
      name: "Raindrop Melody",
      notes: [
        { pitch: NOTES.E5, duration: 1, startTime: 0, velocity: 0.3 },
        { pitch: NOTES.D5, duration: 1, startTime: 1, velocity: 0.29 },
        { pitch: NOTES.C5, duration: 1.5, startTime: 2, velocity: 0.3 },
        { pitch: NOTES.A4, duration: 1.5, startTime: 3.5, velocity: 0.28 },
        { pitch: NOTES.G4, duration: 2.5, startTime: 5, velocity: 0.27 },
      ],
      repeat: 1,
    },
    {
      name: "Soft Lullaby",
      notes: [
        { pitch: NOTES.G5, duration: 3, startTime: 0, velocity: 0.31 },
        { pitch: NOTES.E5, duration: 2.5, startTime: 3, velocity: 0.3 },
        { pitch: NOTES.D5, duration: 3.5, startTime: 5.5, velocity: 0.29 },
      ],
      repeat: 1,
    },
    {
      name: "Cozy Evening",
      notes: [
        { pitch: NOTES.C5, duration: 2, startTime: 0, velocity: 0.31 },
        { pitch: NOTES.D5, duration: 2, startTime: 2, velocity: 0.32 },
        { pitch: NOTES.E5, duration: 2.5, startTime: 4, velocity: 0.33 },
        { pitch: NOTES.C5, duration: 3, startTime: 6.5, velocity: 0.3 },
      ],
      repeat: 1,
    },
    {
      name: "Ambient Pad",
      notes: [
        { pitch: NOTES.A5, duration: 4, startTime: 0, velocity: 0.3 },
        { pitch: NOTES.E5, duration: 3.5, startTime: 4, velocity: 0.29 },
        { pitch: NOTES.C5, duration: 4, startTime: 7.5, velocity: 0.28 },
      ],
      repeat: 1,
    },
  ],
  bassPatterns: BASS_PATTERNS.filter(p => ["Root-Fifth", "Minimal", "Deep Pulse"].includes(p.name)),
  arpeggioPatterns: ARPEGGIO_PATTERNS.filter(p => ["Slow Wave", "Up", "Triplet", "Melodic Pattern"].includes(p.name)),
  drumPatterns: DRUM_PATTERNS.filter(p => ["Half-Time", "Minimal Beat", "Pop Ballad"].includes(p.name)),
  durationRange: [45, 70],
  scales: ["pentatonic", "minorPentatonic", "dorian", "minor"],
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
  JAZZY_STYLE,
  RETRO_STYLE,
  ELECTRONIC_STYLE,
  ORCHESTRAL_STYLE,
  ETHNIC_STYLE,
  LOFI_STYLE,
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
