import type { ChordProgression } from "@/types/music";
import { NOTES } from "@/utils/music/core/constants";

/**
 * 多様なコード進行パターン
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
  // I-♭VII-♭VI-IV (モーダルインターチェンジ)
  {
    name: "Modal Interchange",
    tempo: 68,
    chords: [
      { root: NOTES.C4, type: "major", duration: 4 },
      { root: NOTES.B3, type: "major", duration: 4 }, // ♭VII
      { root: NOTES.A3, type: "major", duration: 4 }, // ♭VI
      { root: NOTES.F3, type: "major", duration: 4 },
    ],
  },
  // ii-V-I-vi (ジャズ循環)
  {
    name: "Jazz Circular",
    tempo: 72,
    chords: [
      { root: NOTES.D4, type: "min7", duration: 3 },
      { root: NOTES.G3, type: "dom7", duration: 3 },
      { root: NOTES.C4, type: "maj7", duration: 3 },
      { root: NOTES.A3, type: "min7", duration: 3 },
    ],
  },
  // i-♭VI-♭VII-i (マイナー循環)
  {
    name: "Minor Circular",
    tempo: 64,
    chords: [
      { root: NOTES.A3, type: "minor", duration: 4 },
      { root: NOTES.F3, type: "major", duration: 4 },
      { root: NOTES.G3, type: "major", duration: 4 },
      { root: NOTES.A3, type: "minor", duration: 4 },
    ],
  },
  // I-iii-vi-IV-I-V (拡張進行)
  {
    name: "Extended Flow",
    tempo: 66,
    chords: [
      { root: NOTES.C4, type: "maj7", duration: 3 },
      { root: NOTES.E3, type: "min7", duration: 3 },
      { root: NOTES.A3, type: "min7", duration: 3 },
      { root: NOTES.F3, type: "maj7", duration: 3 },
      { root: NOTES.C4, type: "maj7", duration: 2 },
      { root: NOTES.G3, type: "dom7", duration: 2 },
    ],
  },
  // I-IV-♭VII-I (ミクソリディアン・ロック)
  {
    name: "Mixolydian Rock",
    tempo: 75,
    chords: [
      { root: NOTES.C4, type: "major", duration: 3 },
      { root: NOTES.F3, type: "major", duration: 3 },
      { root: NOTES.B3, type: "major", duration: 3 }, // ♭VII
      { root: NOTES.C4, type: "major", duration: 3 },
    ],
  },
  // ii-V-iii-vi (ジャズ変化)
  {
    name: "Jazz Variation",
    tempo: 70,
    chords: [
      { root: NOTES.D4, type: "min9", duration: 3 },
      { root: NOTES.G3, type: "dom7", duration: 3 },
      { root: NOTES.E3, type: "min7", duration: 3 },
      { root: NOTES.A3, type: "min9", duration: 3 },
    ],
  },
  // vi-ii-V-I (逆循環)
  {
    name: "Reverse Circle",
    tempo: 68,
    chords: [
      { root: NOTES.A3, type: "min7", duration: 3 },
      { root: NOTES.D4, type: "min7", duration: 3 },
      { root: NOTES.G3, type: "dom7", duration: 3 },
      { root: NOTES.C4, type: "maj7", duration: 3 },
    ],
  },
  // i-iv-♭VII-♭III (ダーク・エモーショナル)
  {
    name: "Dark Emotional",
    tempo: 58,
    chords: [
      { root: NOTES.A3, type: "minor", duration: 4 },
      { root: NOTES.D4, type: "minor", duration: 4 },
      { root: NOTES.G3, type: "major", duration: 4 },
      { root: NOTES.C4, type: "major", duration: 4 }, // ♭III
    ],
  },
  // I-♭III-♭VII-IV (ドラマチック)
  {
    name: "Dramatic",
    tempo: 63,
    chords: [
      { root: NOTES.C4, type: "major", duration: 4 },
      { root: NOTES.E3, type: "major", duration: 4 }, // ♭III
      { root: NOTES.B3, type: "major", duration: 4 }, // ♭VII
      { root: NOTES.F3, type: "major", duration: 4 },
    ],
  },
  // I-IV6-V-iii (テンションコード使用)
  {
    name: "Tension Harmony",
    tempo: 69,
    chords: [
      { root: NOTES.C4, type: "add9", duration: 3 },
      { root: NOTES.F3, type: "6", duration: 3 },
      { root: NOTES.G3, type: "add11", duration: 3 },
      { root: NOTES.E3, type: "min9", duration: 3 },
    ],
  },
  // I-iii7-vi9-II-V (拡張ジャズ)
  {
    name: "Extended Jazz",
    tempo: 67,
    chords: [
      { root: NOTES.C4, type: "maj9", duration: 2.5 },
      { root: NOTES.E3, type: "min7", duration: 2.5 },
      { root: NOTES.A3, type: "min9", duration: 2.5 },
      { root: NOTES.D4, type: "dom7", duration: 2.5 },
      { root: NOTES.G3, type: "dom7", duration: 2.5 },
    ],
  },
  // I-sus4-V-vi-IV (サスペンション)
  {
    name: "Suspended Flow",
    tempo: 71,
    chords: [
      { root: NOTES.C4, type: "major", duration: 3 },
      { root: NOTES.F3, type: "sus4", duration: 3 },
      { root: NOTES.G3, type: "sus2", duration: 3 },
      { root: NOTES.A3, type: "minor", duration: 2 },
      { root: NOTES.F3, type: "major", duration: 2 },
    ],
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
