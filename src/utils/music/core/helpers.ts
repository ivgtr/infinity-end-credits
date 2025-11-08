import type { Chord } from "@/types/music";
import { CHORD_INTERVALS, SCALES } from "./constants";

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
