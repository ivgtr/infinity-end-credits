import type { MusicStyle } from "@/types/music";
import { NOTES } from "../core/constants";
import { BASS_PATTERNS } from "../patterns/base/bass";

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
