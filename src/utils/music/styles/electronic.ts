import type { MusicStyle } from "@/types/music";
import { NOTES } from "../core/constants";
import { BASS_PATTERNS } from "../patterns/base/bass";
import { ARPEGGIO_PATTERNS } from "../patterns/base/arpeggio";
import { DRUM_PATTERNS } from "../patterns/base/drums";

/**
 * 8. エレクトロニック（Electronic）: モダンなエレクトロニックサウンド
 */
export const ELECTRONIC_STYLE: MusicStyle = {
  type: "electronic",
  name: "エレクトロニック",
  description: "モダンなエレクトロニックサウンド、アルペジオ重視",
  soundParams: {
    padVolume: 0.08,
    padAttack: 0.15,
    padRelease: 0.4,
    leadVolume: 0.46,
    leadAttack: 0.02,
    leadRelease: 0.2,
    oscillatorType: "sawtooth",
  },
  progressions: [
    // i-VI-III-VII (EDM progression)
    {
      name: "EDM Standard",
      tempo: 100,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.G3, type: "major", duration: 3 },
      ],
    },
    // I-V-vi-iii (Progressive house)
    {
      name: "Progressive House",
      tempo: 105,
      chords: [
        { root: NOTES.C4, type: "major", duration: 2.5 },
        { root: NOTES.G3, type: "major", duration: 2.5 },
        { root: NOTES.A3, type: "minor", duration: 2.5 },
        { root: NOTES.E3, type: "minor", duration: 2.5 },
      ],
    },
    // vi-IV-I-V (Melodic electronic)
    {
      name: "Melodic Electronic",
      tempo: 95,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.G3, type: "sus4", duration: 3 },
      ],
    },
    // I-vi-IV-V (Electro pop)
    {
      name: "Electro Pop",
      tempo: 110,
      chords: [
        { root: NOTES.C4, type: "major", duration: 2 },
        { root: NOTES.A3, type: "minor", duration: 2 },
        { root: NOTES.F3, type: "major", duration: 2 },
        { root: NOTES.G3, type: "major", duration: 2 },
      ],
    },
    // I-IV-vi-V (Future bass)
    {
      name: "Future Bass",
      tempo: 98,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 3 },
        { root: NOTES.F3, type: "maj7", duration: 3 },
        { root: NOTES.A3, type: "min7", duration: 3 },
        { root: NOTES.G3, type: "sus4", duration: 3 },
      ],
    },
    // vi-I-V-IV (Chill electronic)
    {
      name: "Chill Electronic",
      tempo: 92,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 3.5 },
        { root: NOTES.C4, type: "major", duration: 3.5 },
        { root: NOTES.G3, type: "sus2", duration: 3.5 },
        { root: NOTES.F3, type: "major", duration: 3.5 },
      ],
    },
    // I-bVII-bVI-bVII (EDM epic)
    {
      name: "EDM Epic",
      tempo: 102,
      chords: [
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.A3 + 10, type: "major", duration: 3 }, // Bb
        { root: NOTES.G3 + 8, type: "major", duration: 3 }, // Ab
        { root: NOTES.A3 + 10, type: "major", duration: 3 }, // Bb
      ],
    },
    // i-bIII-bVII-IV (Melodic dubstep)
    {
      name: "Melodic Dubstep",
      tempo: 70,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 4 },
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.G3, type: "major", duration: 4 },
        { root: NOTES.F3, type: "maj7", duration: 4 },
      ],
    },
    // I-iii-IV-vi (Uplifting trance)
    {
      name: "Uplifting Trance",
      tempo: 108,
      chords: [
        { root: NOTES.C4, type: "major", duration: 2.5 },
        { root: NOTES.E3, type: "minor", duration: 2.5 },
        { root: NOTES.F3, type: "major", duration: 2.5 },
        { root: NOTES.A3, type: "minor", duration: 2.5 },
      ],
    },
    // vi-IV-I-III (Festival anthem)
    {
      name: "Festival Anthem",
      tempo: 104,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.E3, type: "major", duration: 3 },
      ],
    },
  ],
  melodyPatterns: [
    {
      name: "Digital Pulse",
      notes: [
        { pitch: NOTES.C5, duration: 0.8, startTime: 0, velocity: 0.44 },
        { pitch: NOTES.E5, duration: 0.8, startTime: 0.8, velocity: 0.46 },
        { pitch: NOTES.G5, duration: 0.8, startTime: 1.6, velocity: 0.48 },
        { pitch: NOTES.E5, duration: 0.8, startTime: 2.4, velocity: 0.45 },
        { pitch: NOTES.C5, duration: 1.6, startTime: 3.2, velocity: 0.42 },
      ],
      repeat: 2,
    },
    {
      name: "Synth Sequence",
      notes: [
        { pitch: NOTES.G5, duration: 1, startTime: 0, velocity: 0.46 },
        { pitch: NOTES.A5, duration: 1, startTime: 1, velocity: 0.47 },
        { pitch: NOTES.C5 + 12, duration: 1.5, startTime: 2, velocity: 0.48 },
        { pitch: NOTES.A5, duration: 1, startTime: 3.5, velocity: 0.45 },
        { pitch: NOTES.G5, duration: 1.5, startTime: 4.5, velocity: 0.43 },
      ],
      repeat: 1,
    },
    {
      name: "EDM Drop",
      notes: [
        { pitch: NOTES.E5, duration: 0.7, startTime: 0, velocity: 0.47 },
        { pitch: NOTES.G5, duration: 0.7, startTime: 0.7, velocity: 0.48 },
        { pitch: NOTES.A5, duration: 1, startTime: 1.4, velocity: 0.49 },
        { pitch: NOTES.C5 + 12, duration: 1.2, startTime: 2.4, velocity: 0.48 },
        { pitch: NOTES.A5, duration: 1, startTime: 3.6, velocity: 0.46 },
      ],
      repeat: 2,
    },
    {
      name: "Electro Rise",
      notes: [
        { pitch: NOTES.C5, duration: 0.9, startTime: 0, velocity: 0.44 },
        { pitch: NOTES.D5, duration: 0.9, startTime: 0.9, velocity: 0.45 },
        { pitch: NOTES.E5, duration: 0.9, startTime: 1.8, velocity: 0.46 },
        { pitch: NOTES.G5, duration: 0.9, startTime: 2.7, velocity: 0.48 },
        { pitch: NOTES.A5, duration: 1.5, startTime: 3.6, velocity: 0.49 },
      ],
      repeat: 1,
    },
    {
      name: "Future Bass Lead",
      notes: [
        { pitch: NOTES.G5, duration: 1.2, startTime: 0, velocity: 0.47 },
        { pitch: NOTES.A5, duration: 1, startTime: 1.2, velocity: 0.48 },
        { pitch: NOTES.E5, duration: 1, startTime: 2.2, velocity: 0.45 },
        { pitch: NOTES.G5, duration: 1.5, startTime: 3.2, velocity: 0.46 },
      ],
      repeat: 2,
    },
    {
      name: "Progressive Build",
      notes: [
        { pitch: NOTES.A5, duration: 0.8, startTime: 0, velocity: 0.47 },
        { pitch: NOTES.G5, duration: 0.8, startTime: 0.8, velocity: 0.46 },
        { pitch: NOTES.E5, duration: 0.8, startTime: 1.6, velocity: 0.45 },
        { pitch: NOTES.C5, duration: 1, startTime: 2.4, velocity: 0.44 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 3.4, velocity: 0.46 },
      ],
      repeat: 1,
    },
    {
      name: "Cyber Wave",
      notes: [
        { pitch: NOTES.E5, duration: 0.9, startTime: 0, velocity: 0.46 },
        { pitch: NOTES.G5, duration: 0.9, startTime: 0.9, velocity: 0.48 },
        { pitch: NOTES.C5 + 12, duration: 1.2, startTime: 1.8, velocity: 0.49 },
        { pitch: NOTES.A5, duration: 1.5, startTime: 3, velocity: 0.47 },
      ],
      repeat: 2,
    },
    {
      name: "Techno Climb",
      notes: [
        { pitch: NOTES.C5, duration: 0.7, startTime: 0, velocity: 0.45 },
        { pitch: NOTES.E5, duration: 0.7, startTime: 0.7, velocity: 0.47 },
        { pitch: NOTES.G5, duration: 0.7, startTime: 1.4, velocity: 0.48 },
        { pitch: NOTES.C5 + 12, duration: 1, startTime: 2.1, velocity: 0.49 },
        { pitch: NOTES.G5, duration: 1.5, startTime: 3.1, velocity: 0.46 },
      ],
      repeat: 1,
    },
    {
      name: "Bass Drop Lead",
      notes: [
        { pitch: NOTES.G5, duration: 1, startTime: 0, velocity: 0.48 },
        { pitch: NOTES.C5 + 12, duration: 1.5, startTime: 1, velocity: 0.49 },
        { pitch: NOTES.A5, duration: 1, startTime: 2.5, velocity: 0.47 },
        { pitch: NOTES.E5, duration: 2, startTime: 3.5, velocity: 0.45 },
      ],
      repeat: 2,
    },
    {
      name: "Trance Arpeggio",
      notes: [
        { pitch: NOTES.C5, duration: 0.8, startTime: 0, velocity: 0.45 },
        { pitch: NOTES.G5, duration: 0.8, startTime: 0.8, velocity: 0.48 },
        { pitch: NOTES.E5, duration: 0.8, startTime: 1.6, velocity: 0.46 },
        { pitch: NOTES.A5, duration: 1, startTime: 2.4, velocity: 0.49 },
        { pitch: NOTES.G5, duration: 1.5, startTime: 3.4, velocity: 0.47 },
      ],
      repeat: 2,
    },
    {
      name: "Glitch Melody",
      notes: [
        { pitch: NOTES.E5, duration: 0.6, startTime: 0, velocity: 0.46 },
        { pitch: NOTES.D5, duration: 0.6, startTime: 0.6, velocity: 0.45 },
        { pitch: NOTES.E5, duration: 0.6, startTime: 1.2, velocity: 0.47 },
        { pitch: NOTES.G5, duration: 1, startTime: 1.8, velocity: 0.48 },
        { pitch: NOTES.A5, duration: 1.2, startTime: 2.8, velocity: 0.49 },
      ],
      repeat: 2,
    },
  ],
  bassPatterns: BASS_PATTERNS.filter(p => ["Walking Bass", "Octave Jump", "Deep Pulse", "Driving Eighth", "Syncopated Funk", "Rhythmic Groove", "Rock Steady"].includes(p.name)),
  arpeggioPatterns: ARPEGGIO_PATTERNS.filter(p => !["Gentle Cascade", "Sparse Stars", "Meditation Wave", "Cosmic Drift"].includes(p.name)), // Ambient専用を除く全て
  drumPatterns: DRUM_PATTERNS.filter(p => ["Energetic", "Heavy Rock", "House Beat", "Double-Time", "Breakbeat", "Syncopated Funk", "Basic 4/4"].includes(p.name)),
  durationRange: [28, 42],
  scales: ["minor", "phrygian", "wholeTone", "diminished"],
  famousPatterns: ["createArpeggiatorSeq", "createDropBuild", "createSidechainRhythm"],
};
