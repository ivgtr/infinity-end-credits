import type { MusicStyle } from "@/types/music";
import { NOTES } from "../core/constants";
import { BASS_PATTERNS } from "../patterns/base/bass";
import { ARPEGGIO_PATTERNS } from "../patterns/base/arpeggio";
import { DRUM_PATTERNS } from "../patterns/base/drums";

/**
 * 5. アンビエント（Ambient）: 浮遊感のある空間
 */
export const AMBIENT_STYLE: MusicStyle = {
  type: "ambient",
  name: "アンビエント",
  description: "浮遊感のある広がる音空間",
  soundParams: {
    padVolume: 0.07,
    padAttack: 2.0,
    padRelease: 2.5,
    leadVolume: 0.32,
    leadAttack: 0.5,
    leadRelease: 1.0,
    oscillatorType: "sine",
  },
  progressions: [
    // Suspended chords
    {
      name: "Floating Suspended",
      tempo: 40,
      chords: [
        { root: NOTES.C4, type: "sus2", duration: 10 },
        { root: NOTES.G3, type: "sus2", duration: 10 },
        { root: NOTES.F3, type: "sus2", duration: 10 },
        { root: NOTES.C4, type: "sus2", duration: 10 },
      ],
    },
    // Modal interchange
    {
      name: "Modal Space",
      tempo: 38,
      chords: [
        { root: NOTES.A3, type: "sus4", duration: 12 },
        { root: NOTES.E3, type: "sus4", duration: 12 },
        { root: NOTES.D3, type: "sus2", duration: 12 },
        { root: NOTES.A3, type: "sus2", duration: 12 },
      ],
    },
    // Lydian mode for ethereal quality
    {
      name: "Lydian Dream",
      tempo: 42,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 11 },
        { root: NOTES.D4, type: "major", duration: 11 },
        { root: NOTES.E4, type: "minor", duration: 11 },
        { root: NOTES.C4, type: "maj7", duration: 11 },
      ],
    },
    // Major 7th progression for dreamy atmosphere
    {
      name: "Seventh Heaven",
      tempo: 36,
      chords: [
        { root: NOTES.F3, type: "maj7", duration: 13 },
        { root: NOTES.C4, type: "maj7", duration: 13 },
        { root: NOTES.G3, type: "maj7", duration: 13 },
      ],
    },
    // Minimal chord movement
    {
      name: "Breath of Air",
      tempo: 35,
      chords: [
        { root: NOTES.E3, type: "sus2", duration: 15 },
        { root: NOTES.A3, type: "sus2", duration: 15 },
        { root: NOTES.E3, type: "sus2", duration: 15 },
      ],
    },
    // Whole tone inspired movement
    {
      name: "Ethereal Drift",
      tempo: 39,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 12 },
        { root: NOTES.D4, type: "maj7", duration: 12 },
        { root: NOTES.B3, type: "maj7", duration: 12 },
        { root: NOTES.C4, type: "sus2", duration: 12 },
      ],
    },
    // Cosmic suspension
    {
      name: "Cosmic Suspension",
      tempo: 41,
      chords: [
        { root: NOTES.G3, type: "sus4", duration: 10 },
        { root: NOTES.D4, type: "maj7", duration: 10 },
        { root: NOTES.A3, type: "sus2", duration: 10 },
        { root: NOTES.E3, type: "maj7", duration: 10 },
      ],
    },
    // Meditative flow
    {
      name: "Meditative Flow",
      tempo: 37,
      chords: [
        { root: NOTES.D3, type: "sus2", duration: 14 },
        { root: NOTES.A3, type: "maj7", duration: 14 },
        { root: NOTES.G3, type: "sus4", duration: 14 },
      ],
    },
    // Infinite space
    {
      name: "Infinite Space",
      tempo: 39,
      chords: [
        { root: NOTES.E3, type: "maj7", duration: 13 },
        { root: NOTES.F3, type: "maj7", duration: 13 },
        { root: NOTES.G3, type: "maj7", duration: 13 },
        { root: NOTES.A3, type: "sus2", duration: 13 },
      ],
    },
    // Nebula drift
    {
      name: "Nebula Drift",
      tempo: 36,
      chords: [
        { root: NOTES.C4, type: "sus2", duration: 16 },
        { root: NOTES.D4, type: "sus2", duration: 16 },
        { root: NOTES.E4, type: "maj7", duration: 16 },
      ],
    },
  ],
  melodyPatterns: [
    {
      name: "Sparse Stars",
      notes: [
        { pitch: NOTES.G5, duration: 8, startTime: 0, velocity: 0.25 },
        { pitch: NOTES.E5, duration: 8, startTime: 8, velocity: 0.25 },
        { pitch: NOTES.D5, duration: 8, startTime: 16, velocity: 0.23 },
      ],
      repeat: 1,
    },
    {
      name: "Floating Dream",
      notes: [
        { pitch: NOTES.E5, duration: 10, startTime: 0, velocity: 0.24 },
        { pitch: NOTES.D5, duration: 10, startTime: 10, velocity: 0.23 },
        { pitch: NOTES.C5, duration: 10, startTime: 20, velocity: 0.22 },
      ],
      repeat: 1,
    },
    {
      name: "Ethereal Drift",
      notes: [
        { pitch: NOTES.A5, duration: 12, startTime: 0, velocity: 0.26 },
        { pitch: NOTES.G5, duration: 12, startTime: 12, velocity: 0.24 },
      ],
      repeat: 1,
    },
    {
      name: "Cosmic Wind",
      notes: [
        { pitch: NOTES.C5, duration: 15, startTime: 0, velocity: 0.23 },
        { pitch: NOTES.G5, duration: 15, startTime: 15, velocity: 0.24 },
      ],
      repeat: 1,
    },
    {
      name: "Silent Orbit",
      notes: [
        { pitch: NOTES.D5, duration: 18, startTime: 0, velocity: 0.22 },
        { pitch: NOTES.A4, duration: 18, startTime: 18, velocity: 0.21 },
      ],
      repeat: 1,
    },
    {
      name: "Distant Echo",
      notes: [
        { pitch: NOTES.E5, duration: 12, startTime: 0, velocity: 0.24 },
        { pitch: NOTES.C5, duration: 12, startTime: 12, velocity: 0.23 },
        { pitch: NOTES.A4, duration: 12, startTime: 24, velocity: 0.22 },
      ],
      repeat: 1,
    },
    {
      name: "Stellar Drift",
      notes: [
        { pitch: NOTES.G5, duration: 16, startTime: 0, velocity: 0.25 },
        { pitch: NOTES.D5, duration: 16, startTime: 16, velocity: 0.23 },
      ],
      repeat: 1,
    },
    {
      name: "Peaceful Float",
      notes: [
        { pitch: NOTES.F5, duration: 14, startTime: 0, velocity: 0.24 },
        { pitch: NOTES.E5, duration: 14, startTime: 14, velocity: 0.23 },
      ],
      repeat: 1,
    },
    {
      name: "Tranquil Waves",
      notes: [
        { pitch: NOTES.A5, duration: 10, startTime: 0, velocity: 0.26 },
        { pitch: NOTES.E5, duration: 10, startTime: 10, velocity: 0.24 },
        { pitch: NOTES.C5, duration: 10, startTime: 20, velocity: 0.22 },
      ],
      repeat: 1,
    },
    {
      name: "Void Whisper",
      notes: [
        { pitch: NOTES.C5, duration: 20, startTime: 0, velocity: 0.23 },
      ],
      repeat: 1,
    },
  ],
  bassPatterns: BASS_PATTERNS.filter(p => [
    "Minimal",
    "Sustained Pulse",
    "Floating Root",
    "Deep Harmonic",
    "Sparse Pulse",
    "Ethereal Drift",
    "Root-Fifth",
    "Deep Pulse"
  ].includes(p.name)),
  arpeggioPatterns: ARPEGGIO_PATTERNS.filter(p => [
    "Up",
    "Slow Wave",
    "Triplet",
    "Gentle Cascade",
    "Sparse Stars",
    "Meditation Wave",
    "Shimmer",
    "Cosmic Drift",
    "Down",
    "Broken Chord",
    "Bounce",
    "Random"
  ].includes(p.name)),
  drumPatterns: DRUM_PATTERNS.filter(p => [
    "Minimal Beat",
    "Epic Slow",
    "Breath",
    "Distant Echo",
    "Glacial Movement",
    "Sparse Texture",
    "Meditation Pulse",
    "Half-Time",
    "Pop Ballad",
    "Waltz 3/4"
  ].includes(p.name)),
  durationRange: [55, 90],
  scales: ["major", "minor", "dorian", "wholeTone"],
  famousPatterns: ["createEnoAmbientPad", "createShimmerReverb", "createTexturalDrone", "createGranularCloud", "createModularSequence"],
};
