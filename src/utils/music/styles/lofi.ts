import type { MusicStyle } from "@/types/music";
import { NOTES } from "../core/constants";
import { BASS_PATTERNS } from "../patterns/base/bass";
import { ARPEGGIO_PATTERNS } from "../patterns/base/arpeggio";
import { DRUM_PATTERNS } from "../patterns/base/drums";

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
  bassPatterns: BASS_PATTERNS.filter(p => ["Root-Fifth", "Minimal", "Deep Pulse", "Walking Bass", "Bouncy Pop", "Rhythmic Groove"].includes(p.name)),
  arpeggioPatterns: ARPEGGIO_PATTERNS.filter(p => ["Slow Wave", "Up", "Triplet", "Melodic Pattern", "Broken Chord", "Down", "Bounce", "Random"].includes(p.name)),
  drumPatterns: DRUM_PATTERNS.filter(p => ["Half-Time", "Minimal Beat", "Pop Ballad", "Shuffle Beat", "Basic 4/4", "Breakbeat"].includes(p.name)),
  durationRange: [45, 70],
  scales: ["pentatonic", "minorPentatonic", "dorian", "minor"],
  famousPatterns: ["createPentatonicRock", "createOctaveJump"],
};
