import type { MusicStyle } from "@/types/music";
import { NOTES } from "../core/constants";
import { BASS_PATTERNS } from "../patterns/base/bass";
import { ARPEGGIO_PATTERNS } from "../patterns/base/arpeggio";
import { DRUM_PATTERNS } from "../patterns/base/drums";

/**
 * 7. レトロ（Retro）: 80年代シンセポップ風のノスタルジック
 */
export const RETRO_STYLE: MusicStyle = {
  type: "retro",
  name: "レトロ",
  description: "80年代シンセポップ風のノスタルジック",
  soundParams: {
    padVolume: 0.09,
    padAttack: 0.2,
    padRelease: 0.5,
    leadVolume: 0.48,
    leadAttack: 0.03,
    leadRelease: 0.25,
    oscillatorType: "square",
  },
  progressions: [
    // I-V-vi-IV (80s Pop standard)
    {
      name: "80s Pop",
      tempo: 82,
      chords: [
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.G3, type: "major", duration: 3 },
        { root: NOTES.A3, type: "minor", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
      ],
    },
    // I-IV-V-IV (Rock ballad)
    {
      name: "Retro Rock",
      tempo: 78,
      chords: [
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.G3, type: "major", duration: 2 },
        { root: NOTES.F3, type: "major", duration: 4 },
      ],
    },
    // vi-IV-I-V (Synthwave)
    {
      name: "Synthwave",
      tempo: 85,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.G3, type: "sus4", duration: 3 },
      ],
    },
    // I-vi-IV-V (Doo-wop progression)
    {
      name: "Nostalgic Doo-wop",
      tempo: 80,
      chords: [
        { root: NOTES.C4, type: "major", duration: 2.5 },
        { root: NOTES.A3, type: "minor", duration: 2.5 },
        { root: NOTES.F3, type: "major", duration: 2.5 },
        { root: NOTES.G3, type: "major", duration: 2.5 },
      ],
    },
    // I-bVII-IV-I (Mixolydian retro)
    {
      name: "Retro Mixolydian",
      tempo: 76,
      chords: [
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.A3 + 10, type: "major", duration: 4 }, // Bb
        { root: NOTES.F3, type: "major", duration: 4 },
        { root: NOTES.C4, type: "major", duration: 4 },
      ],
    },
    // I-V-IV-IV (New Wave)
    {
      name: "New Wave",
      tempo: 88,
      chords: [
        { root: NOTES.C4, type: "major", duration: 2 },
        { root: NOTES.G3, type: "major", duration: 2 },
        { root: NOTES.F3, type: "sus4", duration: 2 },
        { root: NOTES.F3, type: "major", duration: 2 },
      ],
    },
    // I-bVII-bVI-V (80s movie soundtrack)
    {
      name: "80s Soundtrack",
      tempo: 79,
      chords: [
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.A3 + 10, type: "major", duration: 3 }, // Bb
        { root: NOTES.G3 + 8, type: "major", duration: 3 }, // Ab
        { root: NOTES.G3, type: "major", duration: 3 },
      ],
    },
    // vi-bVII-I-bIII (Synthwave dark)
    {
      name: "Dark Synthwave",
      tempo: 83,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 3 },
        { root: NOTES.A3 + 10, type: "major", duration: 3 }, // Bb
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.D3 + 8, type: "major", duration: 3 }, // Eb
      ],
    },
    // I-II-IV-V (Borrowed second)
    {
      name: "Borrowed Second",
      tempo: 81,
      chords: [
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.D4, type: "major", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.G3, type: "sus4", duration: 3 },
      ],
    },
    // I-vi-bVII-IV (Retro melancholic)
    {
      name: "Retro Melancholic",
      tempo: 77,
      chords: [
        { root: NOTES.C4, type: "major", duration: 3 },
        { root: NOTES.A3, type: "minor", duration: 3 },
        { root: NOTES.A3 + 10, type: "major", duration: 3 }, // Bb
        { root: NOTES.F3, type: "major", duration: 3 },
      ],
    },
  ],
  melodyPatterns: [
    {
      name: "Synth Lead",
      notes: [
        { pitch: NOTES.C5, duration: 1.5, startTime: 0, velocity: 0.42 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 1.5, velocity: 0.44 },
        { pitch: NOTES.G5, duration: 2, startTime: 3, velocity: 0.46 },
        { pitch: NOTES.E5, duration: 1, startTime: 5, velocity: 0.42 },
      ],
      repeat: 2,
    },
    {
      name: "Nostalgic Riff",
      notes: [
        { pitch: NOTES.G5, duration: 1, startTime: 0, velocity: 0.44 },
        { pitch: NOTES.G5, duration: 1, startTime: 1, velocity: 0.42 },
        { pitch: NOTES.A5, duration: 1, startTime: 2, velocity: 0.45 },
        { pitch: NOTES.G5, duration: 1, startTime: 3, velocity: 0.43 },
        { pitch: NOTES.E5, duration: 2, startTime: 4, velocity: 0.41 },
      ],
      repeat: 1,
    },
    {
      name: "80s Hook",
      notes: [
        { pitch: NOTES.E5, duration: 1, startTime: 0, velocity: 0.43 },
        { pitch: NOTES.G5, duration: 1, startTime: 1, velocity: 0.45 },
        { pitch: NOTES.A5, duration: 1.5, startTime: 2, velocity: 0.47 },
        { pitch: NOTES.G5, duration: 1.5, startTime: 3.5, velocity: 0.44 },
        { pitch: NOTES.E5, duration: 2, startTime: 5, velocity: 0.42 },
      ],
      repeat: 1,
    },
    {
      name: "Retro Pop",
      notes: [
        { pitch: NOTES.C5, duration: 1.2, startTime: 0, velocity: 0.42 },
        { pitch: NOTES.D5, duration: 1.2, startTime: 1.2, velocity: 0.43 },
        { pitch: NOTES.E5, duration: 1, startTime: 2.4, velocity: 0.45 },
        { pitch: NOTES.G5, duration: 1.5, startTime: 3.4, velocity: 0.46 },
        { pitch: NOTES.E5, duration: 2, startTime: 4.9, velocity: 0.43 },
      ],
      repeat: 1,
    },
    {
      name: "Neon Nights",
      notes: [
        { pitch: NOTES.A5, duration: 1.5, startTime: 0, velocity: 0.45 },
        { pitch: NOTES.G5, duration: 1, startTime: 1.5, velocity: 0.43 },
        { pitch: NOTES.E5, duration: 1, startTime: 2.5, velocity: 0.42 },
        { pitch: NOTES.G5, duration: 2, startTime: 3.5, velocity: 0.44 },
      ],
      repeat: 2,
    },
    {
      name: "Synth Cascade",
      notes: [
        { pitch: NOTES.G5, duration: 1, startTime: 0, velocity: 0.44 },
        { pitch: NOTES.E5, duration: 1, startTime: 1, velocity: 0.43 },
        { pitch: NOTES.D5, duration: 1, startTime: 2, velocity: 0.42 },
        { pitch: NOTES.C5, duration: 1.5, startTime: 3, velocity: 0.41 },
        { pitch: NOTES.E5, duration: 2, startTime: 4.5, velocity: 0.43 },
      ],
      repeat: 1,
    },
    {
      name: "Vintage Pulse",
      notes: [
        { pitch: NOTES.C5, duration: 1.2, startTime: 0, velocity: 0.43 },
        { pitch: NOTES.G5, duration: 1.2, startTime: 1.2, velocity: 0.46 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 2.4, velocity: 0.44 },
        { pitch: NOTES.C5, duration: 2, startTime: 3.9, velocity: 0.42 },
      ],
      repeat: 2,
    },
    {
      name: "Memory Lane",
      notes: [
        { pitch: NOTES.E5, duration: 1.5, startTime: 0, velocity: 0.44 },
        { pitch: NOTES.D5, duration: 1, startTime: 1.5, velocity: 0.42 },
        { pitch: NOTES.C5, duration: 1, startTime: 2.5, velocity: 0.41 },
        { pitch: NOTES.G4, duration: 1.5, startTime: 3.5, velocity: 0.4 },
        { pitch: NOTES.C5, duration: 2, startTime: 5, velocity: 0.43 },
      ],
      repeat: 1,
    },
    {
      name: "Arcade Dream",
      notes: [
        { pitch: NOTES.G5, duration: 1, startTime: 0, velocity: 0.45 },
        { pitch: NOTES.A5, duration: 1, startTime: 1, velocity: 0.46 },
        { pitch: NOTES.C5 + 12, duration: 1.5, startTime: 2, velocity: 0.47 },
        { pitch: NOTES.G5, duration: 2, startTime: 3.5, velocity: 0.44 },
      ],
      repeat: 2,
    },
    {
      name: "VHS Nostalgia",
      notes: [
        { pitch: NOTES.D5, duration: 1.3, startTime: 0, velocity: 0.42 },
        { pitch: NOTES.E5, duration: 1.3, startTime: 1.3, velocity: 0.44 },
        { pitch: NOTES.G5, duration: 1, startTime: 2.6, velocity: 0.45 },
        { pitch: NOTES.A5, duration: 1.5, startTime: 3.6, velocity: 0.46 },
      ],
      repeat: 1,
    },
    {
      name: "Cassette Rewind",
      notes: [
        { pitch: NOTES.A5, duration: 1, startTime: 0, velocity: 0.46 },
        { pitch: NOTES.E5, duration: 1, startTime: 1, velocity: 0.44 },
        { pitch: NOTES.C5, duration: 1, startTime: 2, velocity: 0.42 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 3, velocity: 0.43 },
        { pitch: NOTES.G5, duration: 2, startTime: 4.5, velocity: 0.45 },
      ],
      repeat: 1,
    },
  ],
  bassPatterns: BASS_PATTERNS.filter(p => ["Root-Fifth", "Octave Jump", "Bouncy Pop", "Rock Steady", "Driving Eighth", "Syncopated Funk", "Rhythmic Groove"].includes(p.name)),
  arpeggioPatterns: ARPEGGIO_PATTERNS.filter(p => ["Up-Down", "Up", "Fast Cascade", "Bounce", "Syncopated", "Alternating", "Sweep Up", "Rhythmic Pulse"].includes(p.name)),
  drumPatterns: DRUM_PATTERNS.filter(p => ["Basic 4/4", "Energetic", "House Beat", "Syncopated Funk", "Pop Ballad", "Shuffle Beat"].includes(p.name)),
  durationRange: [32, 48],
  scales: ["major", "minor", "pentatonic", "mixolydian"],
  famousPatterns: ["createSyncopated8Beat", "createOctaveJump"],
};
