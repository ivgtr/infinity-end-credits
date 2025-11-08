import type { BassPattern } from "@/types/music";

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
  // Ambient専用ベースパターン
  {
    name: "Sustained Pulse",
    pattern: [0], // ルート音のみ、長い持続
    durations: [8],
    rhythm: [0],
  },
  {
    name: "Floating Root",
    pattern: [0, 0], // ルート音のゆったりした繰り返し
    durations: [6, 6],
    rhythm: [0, 6],
  },
  {
    name: "Deep Harmonic",
    pattern: [0, 7], // ルートと5度、非常にゆっくり
    durations: [8, 8],
    rhythm: [0, 8],
  },
  {
    name: "Sparse Pulse",
    pattern: [0, 0, 7], // まばらなパルス
    durations: [5, 5, 5],
    rhythm: [0, 5, 10],
  },
  {
    name: "Ethereal Drift",
    pattern: [0, 4, 7], // 浮遊感のあるドリフト
    durations: [6, 6, 6],
    rhythm: [0, 6, 12],
  },
];
