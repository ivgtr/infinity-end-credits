import type { MusicStyle } from "@/types/music";
import { NOTES } from "../core/constants";
import { BASS_PATTERNS } from "../patterns/base/bass";
import { ARPEGGIO_PATTERNS } from "../patterns/base/arpeggio";
import { DRUM_PATTERNS } from "../patterns/base/drums";

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
  bassPatterns: BASS_PATTERNS.filter(p => ["Root-Fifth", "Walking Bass", "Bouncy Pop", "Driving Eighth", "Rhythmic Groove", "Syncopated Funk", "Octave Jump"].includes(p.name)),
  arpeggioPatterns: ARPEGGIO_PATTERNS.filter(p => !["Slow Wave", "Gentle Cascade", "Sparse Stars", "Meditation Wave", "Cosmic Drift"].includes(p.name)), // ゆったり系以外全て
  drumPatterns: DRUM_PATTERNS.filter(p => ["Energetic", "Basic 4/4", "House Beat", "Breakbeat", "Double-Time", "Shuffle Beat", "Syncopated Funk"].includes(p.name)),
  durationRange: [30, 45],
  scales: ["major", "lydian", "pentatonic"],
  famousPatterns: ["createOctaveJump", "createPentatonicRock", "createSyncopated8Beat"],
};
