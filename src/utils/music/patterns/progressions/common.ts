import type { ChordProgression } from "@/types/music";
import { NOTES } from "@/utils/music/core/constants";

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
 * ランダムにコード進行を選択
 */
export function getRandomChordProgression(): ChordProgression {
  return CHORD_PROGRESSIONS[
    Math.floor(Math.random() * CHORD_PROGRESSIONS.length)
  ]!;
}
