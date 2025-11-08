import type { StringPattern } from "@/types/music";
import { NOTES } from "../../core/constants";

/**
 * 共通ストリングスパターン
 * 弦楽器（ヴァイオリン、ヴィオラ、チェロなど）のアンサンブルを模倣
 */
export const STRING_PATTERNS: StringPattern[] = [
  // ===== オーケストラル/グランド向けパターン =====
  {
    name: "Soaring Strings",
    notes: [
      { pitch: NOTES.C4, duration: 6, startTime: 0, velocity: 0.28 },
      { pitch: NOTES.E4, duration: 6, startTime: 0.1, velocity: 0.26 },
      { pitch: NOTES.G4, duration: 6, startTime: 0.2, velocity: 0.24 },
      { pitch: NOTES.C5, duration: 6, startTime: 6, velocity: 0.28 },
      { pitch: NOTES.E5, duration: 6, startTime: 6.1, velocity: 0.26 },
      { pitch: NOTES.G5, duration: 6, startTime: 6.2, velocity: 0.24 },
    ],
    repeat: 1,
    voicing: "open",
  },
  {
    name: "Epic Swell",
    notes: [
      { pitch: NOTES.G3, duration: 8, startTime: 0, velocity: 0.2 },
      { pitch: NOTES.D4, duration: 8, startTime: 0.1, velocity: 0.22 },
      { pitch: NOTES.G4, duration: 8, startTime: 0.2, velocity: 0.24 },
      { pitch: NOTES.B4, duration: 8, startTime: 0.3, velocity: 0.26 },
    ],
    repeat: 1,
    voicing: "wide",
  },
  {
    name: "Triumphant Rise",
    notes: [
      { pitch: NOTES.C4, duration: 4, startTime: 0, velocity: 0.26 },
      { pitch: NOTES.E4, duration: 4, startTime: 0.05, velocity: 0.24 },
      { pitch: NOTES.G4, duration: 4, startTime: 0.1, velocity: 0.22 },
      { pitch: NOTES.E4, duration: 4, startTime: 4, velocity: 0.27 },
      { pitch: NOTES.G4, duration: 4, startTime: 4.05, velocity: 0.25 },
      { pitch: NOTES.C5, duration: 4, startTime: 4.1, velocity: 0.23 },
    ],
    repeat: 1,
    voicing: "close",
  },
  {
    name: "Celestial Harmony",
    notes: [
      { pitch: NOTES.E4, duration: 10, startTime: 0, velocity: 0.25 },
      { pitch: NOTES.G4, duration: 10, startTime: 0.1, velocity: 0.24 },
      { pitch: NOTES.B4, duration: 10, startTime: 0.2, velocity: 0.23 },
      { pitch: NOTES.E5, duration: 10, startTime: 0.3, velocity: 0.22 },
    ],
    repeat: 1,
    voicing: "wide",
  },
  {
    name: "Majestic Chord",
    notes: [
      { pitch: NOTES.C4, duration: 12, startTime: 0, velocity: 0.27 },
      { pitch: NOTES.E4, duration: 12, startTime: 0.05, velocity: 0.26 },
      { pitch: NOTES.G4, duration: 12, startTime: 0.1, velocity: 0.25 },
      { pitch: NOTES.C5, duration: 12, startTime: 0.15, velocity: 0.24 },
    ],
    repeat: 1,
    voicing: "open",
  },

  // ===== アンビエント向けパターン =====
  {
    name: "Ethereal Pad",
    notes: [
      { pitch: NOTES.G4, duration: 15, startTime: 0, velocity: 0.18 },
      { pitch: NOTES.D5, duration: 15, startTime: 0.2, velocity: 0.17 },
      { pitch: NOTES.A5, duration: 15, startTime: 0.4, velocity: 0.16 },
    ],
    repeat: 1,
    voicing: "wide",
  },
  {
    name: "Floating Atmosphere",
    notes: [
      { pitch: NOTES.E4, duration: 18, startTime: 0, velocity: 0.16 },
      { pitch: NOTES.A4, duration: 18, startTime: 0.3, velocity: 0.15 },
      { pitch: NOTES.C5, duration: 18, startTime: 0.6, velocity: 0.14 },
    ],
    repeat: 1,
    voicing: "wide",
  },
  {
    name: "Cosmic Wash",
    notes: [
      { pitch: NOTES.C4, duration: 20, startTime: 0, velocity: 0.17 },
      { pitch: NOTES.G4, duration: 20, startTime: 0.5, velocity: 0.16 },
      { pitch: NOTES.E5, duration: 20, startTime: 1, velocity: 0.15 },
    ],
    repeat: 1,
    voicing: "wide",
  },
  {
    name: "Dreamy Haze",
    notes: [
      { pitch: NOTES.F4, duration: 16, startTime: 0, velocity: 0.18 },
      { pitch: NOTES.A4, duration: 16, startTime: 0.3, velocity: 0.17 },
      { pitch: NOTES.D5, duration: 16, startTime: 0.6, velocity: 0.16 },
    ],
    repeat: 1,
    voicing: "open",
  },

  // ===== ダーク向けパターン =====
  {
    name: "Ominous Descent",
    notes: [
      { pitch: NOTES.A4, duration: 5, startTime: 0, velocity: 0.24 },
      { pitch: NOTES.E4, duration: 5, startTime: 0.05, velocity: 0.23 },
      { pitch: NOTES.C4, duration: 5, startTime: 0.1, velocity: 0.22 },
      { pitch: NOTES.G4, duration: 5, startTime: 5, velocity: 0.23 },
      { pitch: NOTES.D4, duration: 5, startTime: 5.05, velocity: 0.22 },
      { pitch: NOTES.A3, duration: 5, startTime: 5.1, velocity: 0.21 },
    ],
    repeat: 1,
    voicing: "close",
  },
  {
    name: "Sinister Tremolo",
    notes: [
      { pitch: NOTES.E4, duration: 0.3, startTime: 0, velocity: 0.22 },
      { pitch: NOTES.E4, duration: 0.3, startTime: 0.3, velocity: 0.23 },
      { pitch: NOTES.E4, duration: 0.3, startTime: 0.6, velocity: 0.22 },
      { pitch: NOTES.E4, duration: 0.3, startTime: 0.9, velocity: 0.23 },
      { pitch: NOTES.E4, duration: 0.3, startTime: 1.2, velocity: 0.22 },
      { pitch: NOTES.E4, duration: 0.3, startTime: 1.5, velocity: 0.23 },
      { pitch: NOTES.E4, duration: 0.3, startTime: 1.8, velocity: 0.22 },
      { pitch: NOTES.E4, duration: 0.3, startTime: 2.1, velocity: 0.23 },
      { pitch: NOTES.C4, duration: 0.3, startTime: 0.05, velocity: 0.21 },
      { pitch: NOTES.C4, duration: 0.3, startTime: 0.35, velocity: 0.22 },
      { pitch: NOTES.C4, duration: 0.3, startTime: 0.65, velocity: 0.21 },
      { pitch: NOTES.C4, duration: 0.3, startTime: 0.95, velocity: 0.22 },
      { pitch: NOTES.C4, duration: 0.3, startTime: 1.25, velocity: 0.21 },
      { pitch: NOTES.C4, duration: 0.3, startTime: 1.55, velocity: 0.22 },
      { pitch: NOTES.C4, duration: 0.3, startTime: 1.85, velocity: 0.21 },
      { pitch: NOTES.C4, duration: 0.3, startTime: 2.15, velocity: 0.22 },
    ],
    repeat: 1,
    voicing: "close",
  },
  {
    name: "Gothic Melancholy",
    notes: [
      { pitch: NOTES.D4, duration: 6, startTime: 0, velocity: 0.25 },
      { pitch: NOTES.F4, duration: 6, startTime: 0.1, velocity: 0.24 },
      { pitch: NOTES.A4, duration: 6, startTime: 0.2, velocity: 0.23 },
      { pitch: NOTES.C5, duration: 6, startTime: 6, velocity: 0.24 },
      { pitch: NOTES.A4, duration: 6, startTime: 6.1, velocity: 0.23 },
      { pitch: NOTES.F4, duration: 6, startTime: 6.2, velocity: 0.22 },
    ],
    repeat: 1,
    voicing: "close",
  },
  {
    name: "Brooding Tension",
    notes: [
      { pitch: NOTES.A3, duration: 8, startTime: 0, velocity: 0.26 },
      { pitch: NOTES.C4, duration: 8, startTime: 0.05, velocity: 0.25 },
      { pitch: NOTES.E4, duration: 8, startTime: 0.1, velocity: 0.24 },
      { pitch: NOTES.G4, duration: 8, startTime: 0.15, velocity: 0.23 },
    ],
    repeat: 1,
    voicing: "close",
  },

  // ===== 汎用パターン =====
  {
    name: "Simple Triad",
    notes: [
      { pitch: NOTES.C4, duration: 4, startTime: 0, velocity: 0.24 },
      { pitch: NOTES.E4, duration: 4, startTime: 0.05, velocity: 0.23 },
      { pitch: NOTES.G4, duration: 4, startTime: 0.1, velocity: 0.22 },
    ],
    repeat: 1,
    voicing: "close",
  },
  {
    name: "Open Voicing",
    notes: [
      { pitch: NOTES.C4, duration: 6, startTime: 0, velocity: 0.25 },
      { pitch: NOTES.G4, duration: 6, startTime: 0.1, velocity: 0.24 },
      { pitch: NOTES.E5, duration: 6, startTime: 0.2, velocity: 0.23 },
    ],
    repeat: 1,
    voicing: "wide",
  },
  {
    name: "Gentle Swell",
    notes: [
      { pitch: NOTES.E4, duration: 7, startTime: 0, velocity: 0.22 },
      { pitch: NOTES.G4, duration: 7, startTime: 0.1, velocity: 0.23 },
      { pitch: NOTES.B4, duration: 7, startTime: 0.2, velocity: 0.24 },
    ],
    repeat: 1,
    voicing: "close",
  },
  {
    name: "Warm Embrace",
    notes: [
      { pitch: NOTES.F3, duration: 8, startTime: 0, velocity: 0.26 },
      { pitch: NOTES.A3, duration: 8, startTime: 0.05, velocity: 0.25 },
      { pitch: NOTES.C4, duration: 8, startTime: 0.1, velocity: 0.24 },
      { pitch: NOTES.F4, duration: 8, startTime: 0.15, velocity: 0.23 },
    ],
    repeat: 1,
    voicing: "open",
  },
  {
    name: "Sparse Accent",
    notes: [
      { pitch: NOTES.G4, duration: 3, startTime: 0, velocity: 0.24 },
      { pitch: NOTES.D5, duration: 3, startTime: 0.1, velocity: 0.23 },
    ],
    repeat: 1,
    voicing: "wide",
  },
  {
    name: "Sustained Harmony",
    notes: [
      { pitch: NOTES.D4, duration: 10, startTime: 0, velocity: 0.23 },
      { pitch: NOTES.F4, duration: 10, startTime: 0.1, velocity: 0.22 },
      { pitch: NOTES.A4, duration: 10, startTime: 0.2, velocity: 0.21 },
      { pitch: NOTES.D5, duration: 10, startTime: 0.3, velocity: 0.20 },
    ],
    repeat: 1,
    voicing: "open",
  },
];
