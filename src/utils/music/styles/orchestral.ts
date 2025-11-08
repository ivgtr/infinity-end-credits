import type { MusicStyle } from "@/types/music";
import { NOTES } from "../core/constants";
import { BASS_PATTERNS } from "../patterns/base/bass";
import { ARPEGGIO_PATTERNS } from "../patterns/base/arpeggio";
import { DRUM_PATTERNS } from "../patterns/base/drums";
import { STRING_PATTERNS } from "../patterns/base/strings";

/**
 * 9. オーケストラ（Orchestral）: クラシカルな弦楽器風
 */
export const ORCHESTRAL_STYLE: MusicStyle = {
  type: "orchestral",
  name: "オーケストラ",
  description: "クラシカルで優雅な弦楽器風サウンド",
  soundParams: {
    padVolume: 0.1,
    padAttack: 0.6,
    padRelease: 1.2,
    leadVolume: 0.43,
    leadAttack: 0.1,
    leadRelease: 0.6,
    oscillatorType: "sine",
  },
  progressions: [
    {
      name: "Classical Basic",
      tempo: 58,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 4 },
        { root: NOTES.F3, type: "maj7", duration: 4 },
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.G3, type: "dom7", duration: 4 },
      ],
    },
    {
      name: "Classical Turnaround",
      tempo: 56,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 3 },
        { root: NOTES.D4, type: "minor", duration: 3 },
        { root: NOTES.G3, type: "dom7", duration: 3 },
        { root: NOTES.C4, type: "maj7", duration: 3 },
      ],
    },
    {
      name: "Romantic Waltz",
      tempo: 52,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 6 },
        { root: NOTES.A3, type: "min7", duration: 6 },
        { root: NOTES.F3, type: "maj7", duration: 6 },
        { root: NOTES.G3, type: "dom7", duration: 6 },
      ],
    },
    {
      name: "Extended Classical",
      tempo: 54,
      chords: [
        { root: NOTES.C4, type: "major", duration: 2.5 },
        { root: NOTES.G3, type: "major", duration: 2.5 },
        { root: NOTES.A3, type: "minor", duration: 2.5 },
        { root: NOTES.E3, type: "minor", duration: 2.5 },
        { root: NOTES.F3, type: "major", duration: 2.5 },
        { root: NOTES.C4, type: "major", duration: 2.5 },
        { root: NOTES.D4, type: "minor", duration: 2.5 },
        { root: NOTES.G3, type: "dom7", duration: 2.5 },
      ],
    },
    {
      name: "Plagal Resolution",
      tempo: 53,
      chords: [
        { root: NOTES.F3, type: "maj7", duration: 4 },
        { root: NOTES.C4, type: "maj7", duration: 4 },
        { root: NOTES.G3, type: "dom7", duration: 4 },
        { root: NOTES.A3, type: "min7", duration: 4 },
      ],
    },
    {
      name: "Descending Bass",
      tempo: 55,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 3 },
        { root: NOTES.E3, type: "min7", duration: 3 },
        { root: NOTES.A3, type: "min7", duration: 3 },
        { root: NOTES.D4, type: "min7", duration: 3 },
        { root: NOTES.G3, type: "dom7", duration: 3 },
      ],
    },
    {
      name: "Baroque Sequence",
      tempo: 60,
      chords: [
        { root: NOTES.C4, type: "major", duration: 2 },
        { root: NOTES.F3, type: "major", duration: 2 },
        { root: NOTES.E3, type: "minor", duration: 2 },
        { root: NOTES.A3, type: "minor", duration: 2 },
        { root: NOTES.D4, type: "minor", duration: 2 },
        { root: NOTES.G3, type: "dom7", duration: 2 },
        { root: NOTES.C4, type: "maj7", duration: 2 },
      ],
    },
    {
      name: "Neapolitan",
      tempo: 57,
      chords: [
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.G3 + 8, type: "major", duration: 4 }, // Ab
        { root: NOTES.F3, type: "major", duration: 4 },
        { root: NOTES.G3, type: "dom7", duration: 4 },
      ],
    },
    {
      name: "Deceptive Cadence",
      tempo: 51,
      chords: [
        { root: NOTES.A3, type: "min7", duration: 5 },
        { root: NOTES.F3, type: "maj7", duration: 5 },
        { root: NOTES.C4, type: "maj7", duration: 5 },
        { root: NOTES.G3, type: "dom7", duration: 5 },
      ],
    },
    {
      name: "Full Diatonic Circle",
      tempo: 59,
      chords: [
        { root: NOTES.C4, type: "major", duration: 2 },
        { root: NOTES.D4, type: "minor", duration: 2 },
        { root: NOTES.E3, type: "minor", duration: 2 },
        { root: NOTES.F3, type: "major", duration: 2 },
        { root: NOTES.G3, type: "major", duration: 2 },
        { root: NOTES.A3, type: "minor", duration: 2 },
        { root: NOTES.C4, type: "maj7", duration: 2 },
      ],
    },
    // Imaj9-IVmaj7-ii-V (モダンクラシカル)
    {
      name: "Modern Classical",
      tempo: 56,
      chords: [
        { root: NOTES.C4, type: "maj9", duration: 4 },
        { root: NOTES.F3, type: "maj7", duration: 4 },
        { root: NOTES.D4, type: "min7", duration: 3 },
        { root: NOTES.G3, type: "dom7", duration: 3 },
      ],
    },
    // I-aug-IV-I (増和音使用)
    {
      name: "Augmented Drama",
      tempo: 54,
      chords: [
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.C4, type: "aug", duration: 4 },
        { root: NOTES.F3, type: "major", duration: 4 },
        { root: NOTES.C4, type: "maj7", duration: 4 },
      ],
    },
  ],
  melodyPatterns: [
    {
      name: "Violin Lead",
      notes: [
        { pitch: NOTES.E5, duration: 2.5, startTime: 0, velocity: 0.35 },
        { pitch: NOTES.D5, duration: 1.5, startTime: 2.5, velocity: 0.33 },
        { pitch: NOTES.C5, duration: 2, startTime: 4, velocity: 0.32 },
        { pitch: NOTES.G5, duration: 4, startTime: 6, velocity: 0.37 },
      ],
      repeat: 1,
    },
    {
      name: "Lyrical Line",
      notes: [
        { pitch: NOTES.C5, duration: 3, startTime: 0, velocity: 0.34 },
        { pitch: NOTES.E5, duration: 2, startTime: 3, velocity: 0.36 },
        { pitch: NOTES.G5, duration: 2.5, startTime: 5, velocity: 0.38 },
        { pitch: NOTES.A5, duration: 2.5, startTime: 7.5, velocity: 0.36 },
      ],
      repeat: 1,
    },
    {
      name: "Baroque Ornament",
      notes: [
        { pitch: NOTES.G5, duration: 1, startTime: 0, velocity: 0.36 },
        { pitch: NOTES.F5, duration: 1, startTime: 1, velocity: 0.35 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 2, velocity: 0.34 },
        { pitch: NOTES.D5, duration: 1.5, startTime: 3.5, velocity: 0.33 },
        { pitch: NOTES.C5, duration: 3, startTime: 5, velocity: 0.35 },
      ],
      repeat: 1,
    },
    {
      name: "Cello Voice",
      notes: [
        { pitch: NOTES.C5, duration: 4, startTime: 0, velocity: 0.33 },
        { pitch: NOTES.G4, duration: 3, startTime: 4, velocity: 0.31 },
        { pitch: NOTES.E5, duration: 4, startTime: 7, velocity: 0.34 },
      ],
      repeat: 1,
    },
    {
      name: "String Swell",
      notes: [
        { pitch: NOTES.E5, duration: 3.5, startTime: 0, velocity: 0.32 },
        { pitch: NOTES.G5, duration: 3, startTime: 3.5, velocity: 0.36 },
        { pitch: NOTES.C5 + 12, duration: 4.5, startTime: 6.5, velocity: 0.38 },
      ],
      repeat: 1,
    },
    {
      name: "Chamber Music",
      notes: [
        { pitch: NOTES.A5, duration: 2, startTime: 0, velocity: 0.35 },
        { pitch: NOTES.G5, duration: 2, startTime: 2, velocity: 0.34 },
        { pitch: NOTES.F5, duration: 2.5, startTime: 4, velocity: 0.33 },
        { pitch: NOTES.E5, duration: 3.5, startTime: 6.5, velocity: 0.36 },
      ],
      repeat: 1,
    },
    {
      name: "Symphonic Arc",
      notes: [
        { pitch: NOTES.D5, duration: 2.5, startTime: 0, velocity: 0.33 },
        { pitch: NOTES.F5, duration: 2.5, startTime: 2.5, velocity: 0.35 },
        { pitch: NOTES.A5, duration: 3, startTime: 5, velocity: 0.38 },
        { pitch: NOTES.G5, duration: 3, startTime: 8, velocity: 0.36 },
      ],
      repeat: 1,
    },
    {
      name: "Classical Theme",
      notes: [
        { pitch: NOTES.C5, duration: 2, startTime: 0, velocity: 0.34 },
        { pitch: NOTES.D5, duration: 2, startTime: 2, velocity: 0.35 },
        { pitch: NOTES.E5, duration: 2, startTime: 4, velocity: 0.36 },
        { pitch: NOTES.C5, duration: 2, startTime: 6, velocity: 0.33 },
        { pitch: NOTES.G5, duration: 4, startTime: 8, velocity: 0.37 },
      ],
      repeat: 1,
    },
    {
      name: "Adagio Cantabile",
      notes: [
        { pitch: NOTES.G5, duration: 4, startTime: 0, velocity: 0.37 },
        { pitch: NOTES.E5, duration: 3, startTime: 4, velocity: 0.35 },
        { pitch: NOTES.C5, duration: 4, startTime: 7, velocity: 0.33 },
      ],
      repeat: 1,
    },
    {
      name: "Minuet Flow",
      notes: [
        { pitch: NOTES.E5, duration: 2, startTime: 0, velocity: 0.35 },
        { pitch: NOTES.D5, duration: 2, startTime: 2, velocity: 0.34 },
        { pitch: NOTES.E5, duration: 2, startTime: 4, velocity: 0.35 },
        { pitch: NOTES.G5, duration: 3, startTime: 6, velocity: 0.37 },
        { pitch: NOTES.C5, duration: 3, startTime: 9, velocity: 0.33 },
      ],
      repeat: 1,
    },
  ],
  bassPatterns: BASS_PATTERNS.filter(p => ["Root-Fifth", "Walking Bass", "Classic Arpeggio Bass", "Octave Jump", "Minimal", "Rhythmic Groove"].includes(p.name)),
  arpeggioPatterns: ARPEGGIO_PATTERNS.filter(p => ["Up", "Broken Chord", "Slow Wave", "Triplet", "Up-Down", "Melodic Pattern", "Sweep Up", "Octave Up"].includes(p.name)),
  drumPatterns: DRUM_PATTERNS.filter(p => ["Waltz 3/4", "Minimal Beat", "Epic Slow", "Pop Ballad", "Half-Time", "Basic 4/4"].includes(p.name)),
  stringsPatterns: STRING_PATTERNS.filter(p => ["Soaring Strings", "Epic Swell", "Triumphant Rise", "Celestial Harmony", "Majestic Chord", "Simple Triad", "Open Voicing", "Gentle Swell", "Warm Embrace", "Sustained Harmony"].includes(p.name)),
  durationRange: [40, 65],
  scales: ["major", "minor", "harmonicMinor", "melodicMinor"],
  famousPatterns: ["createMozartRocket", "createAlbertiBass", "createBaroqueSequence", "createFateMotif"],
};
