import type { MelodyPattern } from "@/types/music";
import { NOTES } from "@/utils/music/core/constants";

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
 * ランダムにメロディーパターンを選択
 */
export function getRandomMelodyPattern(): MelodyPattern {
  return MELODY_PATTERNS[
    Math.floor(Math.random() * MELODY_PATTERNS.length)
  ]!;
}
