import type { MusicStyle } from "@/types/music";
import { NOTES } from "../core/constants";
import { BASS_PATTERNS } from "../patterns/base/bass";
import { ARPEGGIO_PATTERNS } from "../patterns/base/arpeggio";
import { DRUM_PATTERNS } from "../patterns/base/drums";
import { STRING_PATTERNS } from "../patterns/base/strings";

/**
 * 4. ダーク（Dark）: 重厚で神秘的
 */
export const DARK_STYLE: MusicStyle = {
  type: "dark",
  name: "ダーク",
  description: "重厚で神秘的な暗い雰囲気",
  soundParams: {
    padVolume: 0.1,
    padAttack: 1.5,
    padRelease: 2.0,
    leadVolume: 0.38,
    leadAttack: 0.2,
    leadRelease: 0.8,
    oscillatorType: "sawtooth",
  },
  progressions: [
    // i-VI-III-VII (Natural minor progression)
    {
      name: "Dark Minor",
      tempo: 52,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 5 },
        { root: NOTES.F3, type: "major", duration: 5 },
        { root: NOTES.C4, type: "major", duration: 5 },
        { root: NOTES.G3, type: "major", duration: 5 },
      ],
    },
    // i-iv-VII-III (Dorian)
    {
      name: "Dorian Mystery",
      tempo: 48,
      chords: [
        { root: NOTES.D3, type: "minor", duration: 6 },
        { root: NOTES.G3, type: "minor", duration: 6 },
        { root: NOTES.C4, type: "major", duration: 6 },
        { root: NOTES.F3, type: "major", duration: 6 },
      ],
    },
    // i-bVII-bVI-bVII (Phrygian)
    {
      name: "Phrygian Dark",
      tempo: 50,
      chords: [
        { root: NOTES.E3, type: "minor", duration: 4 },
        { root: NOTES.D3, type: "major", duration: 4 },
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.D3, type: "major", duration: 4 },
      ],
    },
    // i-bVI-bVII-i (Aeolian循環)
    {
      name: "Aeolian Circle",
      tempo: 51,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 4 },
        { root: NOTES.F3, type: "major", duration: 4 },
        { root: NOTES.G3, type: "major", duration: 4 },
        { root: NOTES.A3, type: "minor", duration: 4 },
      ],
    },
    // i-iv-v-i (マイナー基本循環)
    {
      name: "Minor Circle",
      tempo: 49,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 5 },
        { root: NOTES.D3, type: "minor", duration: 5 },
        { root: NOTES.E3, type: "minor", duration: 5 },
        { root: NOTES.A3, type: "minor", duration: 5 },
      ],
    },
    // i-V-i-VII (ゴシック進行)
    {
      name: "Gothic",
      tempo: 47,
      chords: [
        { root: NOTES.E3, type: "minor", duration: 6 },
        { root: NOTES.B3, type: "major", duration: 6 },
        { root: NOTES.E3, type: "minor", duration: 6 },
        { root: NOTES.D3, type: "major", duration: 6 },
      ],
    },
    // vi-iii-IV-I (Sad Progression)
    {
      name: "Melancholic",
      tempo: 53,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 4 },
        { root: NOTES.E3, type: "minor", duration: 4 },
        { root: NOTES.F3, type: "major", duration: 4 },
        { root: NOTES.C4, type: "major", duration: 4 },
      ],
    },
    // i-bVI-bIII-bVII (Phrygian dominant)
    {
      name: "Phrygian Dominant",
      tempo: 50,
      chords: [
        { root: NOTES.E3, type: "minor", duration: 5 },
        { root: NOTES.C4, type: "major", duration: 5 },
        { root: NOTES.G3, type: "major", duration: 5 },
        { root: NOTES.D3, type: "major", duration: 5 },
      ],
    },
    // i-VII-VI-V (Descending minor)
    {
      name: "Descending Minor",
      tempo: 48,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 4 },
        { root: NOTES.G3, type: "major", duration: 4 },
        { root: NOTES.F3, type: "major", duration: 4 },
        { root: NOTES.E3, type: "major", duration: 4 },
      ],
    },
    // i-iv-i-v (Pure minor progression)
    {
      name: "Pure Minor",
      tempo: 51,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 5 },
        { root: NOTES.D3, type: "minor", duration: 5 },
        { root: NOTES.A3, type: "minor", duration: 5 },
        { root: NOTES.E3, type: "minor", duration: 5 },
      ],
    },
    // vi-iv-i-V (Dark suspension)
    {
      name: "Dark Suspension",
      tempo: 49,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 5 },
        { root: NOTES.D3, type: "minor", duration: 5 },
        { root: NOTES.A3, type: "minor", duration: 4 },
        { root: NOTES.E3, type: "dom7", duration: 6 },
      ],
    },
    // i-dim7-i-bVI (減和音使用)
    {
      name: "Diminished Tension",
      tempo: 50,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 4 },
        { root: NOTES.B3, type: "dim7", duration: 4 },
        { root: NOTES.A3, type: "minor", duration: 4 },
        { root: NOTES.F3, type: "major", duration: 4 },
      ],
    },
    // i-iv7-VII-III (拡張マイナー)
    {
      name: "Extended Minor",
      tempo: 52,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 4 },
        { root: NOTES.D3, type: "min7", duration: 4 },
        { root: NOTES.G3, type: "major", duration: 4 },
        { root: NOTES.C4, type: "major", duration: 4 },
      ],
    },
    // i-V7#9-i-bVI (オルタードダーク)
    {
      name: "Altered Dark",
      tempo: 50,
      chords: [
        { root: NOTES.E3, type: "minor", duration: 5 },
        { root: NOTES.B3, type: "dom7#9", duration: 5 },
        { root: NOTES.E3, type: "minor", duration: 5 },
        { root: NOTES.C4, type: "major", duration: 5 },
      ],
    },
    // i-bVII7b9-bVI-V7#9 (ブラックアダーダーク)
    {
      name: "Blackadder Dark",
      tempo: 48,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 4 },
        { root: NOTES.G3, type: "dom7b9", duration: 4 },
        { root: NOTES.F3, type: "major", duration: 4 },
        { root: NOTES.E3, type: "dom7#9", duration: 4 },
      ],
    },
  ],
  melodyPatterns: [
    {
      name: "Mysterious Descent",
      notes: [
        { pitch: NOTES.A4, duration: 4, startTime: 0, velocity: 0.32 },
        { pitch: NOTES.G4, duration: 4, startTime: 4, velocity: 0.3 },
        { pitch: NOTES.F4, duration: 4, startTime: 8, velocity: 0.28 },
        { pitch: NOTES.E4, duration: 4, startTime: 12, velocity: 0.26 },
      ],
      repeat: 1,
    },
    {
      name: "Haunting Echo",
      notes: [
        { pitch: NOTES.E5, duration: 3, startTime: 0, velocity: 0.3 },
        { pitch: NOTES.D5, duration: 2, startTime: 3, velocity: 0.28 },
        { pitch: NOTES.C5, duration: 2, startTime: 5, velocity: 0.26 },
        { pitch: NOTES.A4, duration: 5, startTime: 7, velocity: 0.24 },
      ],
      repeat: 1,
    },
    {
      name: "Shadow Walk",
      notes: [
        { pitch: NOTES.D5, duration: 3, startTime: 0, velocity: 0.29 },
        { pitch: NOTES.C5, duration: 3, startTime: 3, velocity: 0.28 },
        { pitch: NOTES.A4, duration: 3, startTime: 6, velocity: 0.27 },
        { pitch: NOTES.G4, duration: 4, startTime: 9, velocity: 0.25 },
      ],
      repeat: 1,
    },
    {
      name: "Gothic Lament",
      notes: [
        { pitch: NOTES.E5, duration: 4, startTime: 0, velocity: 0.31 },
        { pitch: NOTES.D5, duration: 3, startTime: 4, velocity: 0.29 },
        { pitch: NOTES.C5, duration: 3, startTime: 7, velocity: 0.28 },
        { pitch: NOTES.D5, duration: 5, startTime: 10, velocity: 0.27 },
      ],
      repeat: 1,
    },
    {
      name: "Doom March",
      notes: [
        { pitch: NOTES.A4, duration: 3, startTime: 0, velocity: 0.3 },
        { pitch: NOTES.A4, duration: 2, startTime: 3, velocity: 0.29 },
        { pitch: NOTES.G4, duration: 3, startTime: 5, velocity: 0.28 },
        { pitch: NOTES.E4, duration: 4, startTime: 8, velocity: 0.26 },
      ],
      repeat: 1,
    },
    {
      name: "Ominous Whisper",
      notes: [
        { pitch: NOTES.C5, duration: 5, startTime: 0, velocity: 0.27 },
        { pitch: NOTES.A4, duration: 4, startTime: 5, velocity: 0.26 },
        { pitch: NOTES.G4, duration: 5, startTime: 9, velocity: 0.25 },
      ],
      repeat: 1,
    },
    {
      name: "Dark Ritual",
      notes: [
        { pitch: NOTES.E5, duration: 3, startTime: 0, velocity: 0.3 },
        { pitch: NOTES.C5, duration: 3, startTime: 3, velocity: 0.28 },
        { pitch: NOTES.A4, duration: 3, startTime: 6, velocity: 0.27 },
        { pitch: NOTES.E4, duration: 5, startTime: 9, velocity: 0.25 },
      ],
      repeat: 1,
    },
    {
      name: "Foreboding",
      notes: [
        { pitch: NOTES.D5, duration: 4, startTime: 0, velocity: 0.29 },
        { pitch: NOTES.A4, duration: 4, startTime: 4, velocity: 0.27 },
        { pitch: NOTES.F4, duration: 5, startTime: 8, velocity: 0.26 },
      ],
      repeat: 1,
    },
    {
      name: "Sinister Pulse",
      notes: [
        { pitch: NOTES.G4, duration: 3, startTime: 0, velocity: 0.28 },
        { pitch: NOTES.A4, duration: 3, startTime: 3, velocity: 0.29 },
        { pitch: NOTES.C5, duration: 3, startTime: 6, velocity: 0.3 },
        { pitch: NOTES.A4, duration: 4, startTime: 9, velocity: 0.27 },
      ],
      repeat: 1,
    },
    {
      name: "Mournful Cry",
      notes: [
        { pitch: NOTES.A4, duration: 5, startTime: 0, velocity: 0.29 },
        { pitch: NOTES.G4, duration: 4, startTime: 5, velocity: 0.27 },
        { pitch: NOTES.E4, duration: 6, startTime: 9, velocity: 0.25 },
      ],
      repeat: 1,
    },
    {
      name: "Creeping Dread",
      notes: [
        { pitch: NOTES.C5, duration: 3, startTime: 0, velocity: 0.28 },
        { pitch: NOTES.A4, duration: 2, startTime: 3, velocity: 0.27 },
        { pitch: NOTES.G4, duration: 3, startTime: 5, velocity: 0.26 },
        { pitch: NOTES.F4, duration: 3, startTime: 8, velocity: 0.25 },
        { pitch: NOTES.E4, duration: 4, startTime: 11, velocity: 0.24 },
      ],
      repeat: 1,
    },
    {
      name: "Nocturnal Hunt",
      notes: [
        { pitch: NOTES.E5, duration: 4, startTime: 0, velocity: 0.3 },
        { pitch: NOTES.D5, duration: 3, startTime: 4, velocity: 0.29 },
        { pitch: NOTES.A4, duration: 5, startTime: 7, velocity: 0.27 },
      ],
      repeat: 1,
    },
  ],
  bassPatterns: BASS_PATTERNS.filter(p => ["Minimal", "Root-Fifth", "Rock Steady", "Deep Pulse", "Octave Jump", "Rhythmic Groove", "Driving Eighth"].includes(p.name)),
  arpeggioPatterns: ARPEGGIO_PATTERNS.filter(p => ["Down", "Random", "Slow Wave", "Broken Chord", "Reverse Cascade", "Octave Down", "Stutter", "Complex Weave"].includes(p.name)),
  drumPatterns: DRUM_PATTERNS.filter(p => ["Heavy Rock", "Basic 4/4", "Energetic", "Half-Time", "Breakbeat", "Double-Time"].includes(p.name)),
  stringsPatterns: STRING_PATTERNS.filter(p => ["Ominous Descent", "Sinister Tremolo", "Gothic Melancholy", "Brooding Tension", "Simple Triad", "Sustained Harmony"].includes(p.name)),
  durationRange: [40, 60],
  scales: ["minor", "phrygian", "locrian", "harmonicMinor"],
};
