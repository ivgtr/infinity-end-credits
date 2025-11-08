import type { ArpeggioPattern } from "@/types/music";

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
  // Ambient専用アルペジオパターン
  {
    name: "Gentle Cascade",
    pattern: [0, 1, 2, 1, 0], // 優しいカスケード
    noteDuration: 0.8,
    speed: 0.6,
  },
  {
    name: "Sparse Stars",
    pattern: [0, 2, 0, 1], // まばらな星のよう
    noteDuration: 1.0,
    speed: 0.5,
  },
  {
    name: "Meditation Wave",
    pattern: [0, 1, 0, 2, 0, 1], // 瞑想的な波
    noteDuration: 0.9,
    speed: 0.7,
  },
  {
    name: "Shimmer",
    pattern: [1, 2, 1, 2], // きらめき
    noteDuration: 0.7,
    speed: 0.8,
  },
  {
    name: "Cosmic Drift",
    pattern: [0, 2, 1], // 宇宙的なドリフト
    noteDuration: 1.2,
    speed: 0.5,
  },
];
