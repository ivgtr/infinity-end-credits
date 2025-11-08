import type { MusicStyle } from "@/types/music";
import { NOTES } from "../core/constants";
import { BASS_PATTERNS } from "../patterns/base/bass";
import { ARPEGGIO_PATTERNS } from "../patterns/base/arpeggio";
import { DRUM_PATTERNS } from "../patterns/base/drums";
import { STRING_PATTERNS } from "../patterns/base/strings";

/**
 * 1. 壮大（Grand）: 映画のようなエピック感
 */
export const GRAND_STYLE: MusicStyle = {
  type: "grand",
  name: "壮大",
  description: "映画のような壮大でエピックな雰囲気",
  soundParams: {
    padVolume: 0.09,
    padAttack: 1.0,
    padRelease: 1.5,
    leadVolume: 0.45,
    leadAttack: 0.15,
    leadRelease: 0.4,
    oscillatorType: "sine",
  },
  progressions: [
    // I-V-vi-IV (王道進行 / カノン進行バリエーション)
    {
      name: "Canon Progression",
      tempo: 65,
      chords: [
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.G3, type: "major", duration: 4 },
        { root: NOTES.A3, type: "minor", duration: 4 },
        { root: NOTES.F3, type: "major", duration: 4 },
      ],
    },
    // I-vi-IV-V (50s progression)
    {
      name: "50s Progression",
      tempo: 60,
      chords: [
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.A3, type: "minor", duration: 4 },
        { root: NOTES.F3, type: "major", duration: 4 },
        { root: NOTES.G3, type: "major", duration: 4 },
      ],
    },
    // I-IV-vi-V (sensitive feminine chord progression)
    {
      name: "Sensitive Progression",
      tempo: 58,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 5 },
        { root: NOTES.F3, type: "maj7", duration: 5 },
        { root: NOTES.A3, type: "min7", duration: 5 },
        { root: NOTES.G3, type: "sus4", duration: 5 },
      ],
    },
    // vi-IV-I-V (Let It Be progression / Pachelbel変形)
    {
      name: "Let It Be",
      tempo: 62,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 4 },
        { root: NOTES.F3, type: "major", duration: 4 },
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.G3, type: "major", duration: 4 },
      ],
    },
    // I-III-IV-iv (クリシェ進行 / 映画的)
    {
      name: "Cliche Progression",
      tempo: 56,
      chords: [
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.E3, type: "major", duration: 4 },
        { root: NOTES.F3, type: "major", duration: 4 },
        { root: NOTES.F3, type: "minor", duration: 4 },
      ],
    },
    // IV-V-iii-vi (逆循環 / Axis progression)
    {
      name: "Axis Progression",
      tempo: 64,
      chords: [
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.G3, type: "major", duration: 3 },
        { root: NOTES.E3, type: "minor", duration: 3 },
        { root: NOTES.A3, type: "minor", duration: 3 },
      ],
    },
    // I-bVII-bVI-bVII (Royal Road変化形)
    {
      name: "Royal Road Variant",
      tempo: 60,
      chords: [
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.A3 + 10, type: "major", duration: 4 }, // Bb
        { root: NOTES.G3 + 8, type: "major", duration: 4 }, // Ab
        { root: NOTES.A3 + 10, type: "major", duration: 4 }, // Bb
      ],
    },
    // I-IV-vi-iii-IV-V-I (Extended progression)
    {
      name: "Epic Extended",
      tempo: 58,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.A3, type: "minor", duration: 3 },
        { root: NOTES.E3, type: "minor", duration: 3 },
        { root: NOTES.F3, type: "maj7", duration: 4 },
        { root: NOTES.G3, type: "major", duration: 4 },
        { root: NOTES.C4, type: "maj7", duration: 4 },
      ],
    },
    // I-iii-vi-IV (Smooth descent)
    {
      name: "Smooth Descent",
      tempo: 62,
      chords: [
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.E3, type: "minor", duration: 4 },
        { root: NOTES.A3, type: "minor", duration: 4 },
        { root: NOTES.F3, type: "maj7", duration: 4 },
      ],
    },
    // IV-I-V-vi (Plagal to authentic)
    {
      name: "Plagal Epic",
      tempo: 59,
      chords: [
        { root: NOTES.F3, type: "major", duration: 5 },
        { root: NOTES.C4, type: "major", duration: 5 },
        { root: NOTES.G3, type: "sus4", duration: 3 },
        { root: NOTES.G3, type: "major", duration: 2 },
        { root: NOTES.A3, type: "minor", duration: 5 },
      ],
    },
    // I-V-IV-bVII (Mixolydian epic)
    {
      name: "Mixolydian Epic",
      tempo: 63,
      chords: [
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.G3, type: "major", duration: 4 },
        { root: NOTES.F3, type: "major", duration: 4 },
        { root: NOTES.A3 + 10, type: "major", duration: 4 }, // Bb
      ],
    },
    // Imaj9-vi-IVmaj7-V (壮大テンション)
    {
      name: "Grand Tension",
      tempo: 61,
      chords: [
        { root: NOTES.C4, type: "maj9", duration: 4 },
        { root: NOTES.A3, type: "min7", duration: 4 },
        { root: NOTES.F3, type: "maj7", duration: 4 },
        { root: NOTES.G3, type: "dom7", duration: 4 },
      ],
    },
    // I-add9-V-vi (テンション使用)
    {
      name: "Epic Add9",
      tempo: 59,
      chords: [
        { root: NOTES.C4, type: "add9", duration: 4 },
        { root: NOTES.G3, type: "add11", duration: 4 },
        { root: NOTES.A3, type: "min9", duration: 4 },
        { root: NOTES.F3, type: "6", duration: 4 },
      ],
    },
  ],
  melodyPatterns: [
    {
      name: "Epic Rise",
      notes: [
        { pitch: NOTES.C5, duration: 3, startTime: 0, velocity: 0.3 },
        { pitch: NOTES.E5, duration: 3, startTime: 3, velocity: 0.32 },
        { pitch: NOTES.G5, duration: 3, startTime: 6, velocity: 0.35 },
        { pitch: NOTES.C5 + 12, duration: 3, startTime: 9, velocity: 0.38 },
      ],
      repeat: 1,
    },
    {
      name: "Heroic Theme",
      notes: [
        { pitch: NOTES.G5, duration: 2, startTime: 0, velocity: 0.35 },
        { pitch: NOTES.E5, duration: 2, startTime: 2, velocity: 0.33 },
        { pitch: NOTES.C5, duration: 2, startTime: 4, velocity: 0.3 },
        { pitch: NOTES.E5, duration: 2, startTime: 6, velocity: 0.32 },
        { pitch: NOTES.G5, duration: 4, startTime: 8, velocity: 0.35 },
      ],
      repeat: 1,
    },
    {
      name: "Majestic Ascent",
      notes: [
        { pitch: NOTES.E5, duration: 2.5, startTime: 0, velocity: 0.31 },
        { pitch: NOTES.G5, duration: 2.5, startTime: 2.5, velocity: 0.33 },
        { pitch: NOTES.A5, duration: 2, startTime: 5, velocity: 0.35 },
        { pitch: NOTES.G5, duration: 3, startTime: 7, velocity: 0.32 },
        { pitch: NOTES.E5, duration: 4, startTime: 10, velocity: 0.3 },
      ],
      repeat: 1,
    },
    {
      name: "Triumphant Arc",
      notes: [
        { pitch: NOTES.C5, duration: 2, startTime: 0, velocity: 0.32 },
        { pitch: NOTES.G5, duration: 3, startTime: 2, velocity: 0.36 },
        { pitch: NOTES.E5, duration: 2, startTime: 5, velocity: 0.34 },
        { pitch: NOTES.G5, duration: 4, startTime: 7, velocity: 0.35 },
      ],
      repeat: 1,
    },
    {
      name: "Noble Journey",
      notes: [
        { pitch: NOTES.G5, duration: 3, startTime: 0, velocity: 0.33 },
        { pitch: NOTES.A5, duration: 2, startTime: 3, velocity: 0.35 },
        { pitch: NOTES.C5 + 12, duration: 3, startTime: 5, velocity: 0.37 },
        { pitch: NOTES.A5, duration: 2, startTime: 8, velocity: 0.34 },
        { pitch: NOTES.G5, duration: 3, startTime: 10, velocity: 0.31 },
      ],
      repeat: 1,
    },
    {
      name: "Epic Resolution",
      notes: [
        { pitch: NOTES.E5, duration: 3, startTime: 0, velocity: 0.32 },
        { pitch: NOTES.D5, duration: 2, startTime: 3, velocity: 0.3 },
        { pitch: NOTES.C5, duration: 2, startTime: 5, velocity: 0.31 },
        { pitch: NOTES.G5, duration: 5, startTime: 7, velocity: 0.36 },
      ],
      repeat: 1,
    },
    {
      name: "Soaring Flight",
      notes: [
        { pitch: NOTES.C5, duration: 2, startTime: 0, velocity: 0.3 },
        { pitch: NOTES.D5, duration: 2, startTime: 2, velocity: 0.31 },
        { pitch: NOTES.E5, duration: 2, startTime: 4, velocity: 0.33 },
        { pitch: NOTES.G5, duration: 2, startTime: 6, velocity: 0.35 },
        { pitch: NOTES.A5, duration: 3, startTime: 8, velocity: 0.37 },
      ],
      repeat: 1,
    },
    {
      name: "Grand Fanfare",
      notes: [
        { pitch: NOTES.G5, duration: 2, startTime: 0, velocity: 0.35 },
        { pitch: NOTES.C5 + 12, duration: 3, startTime: 2, velocity: 0.38 },
        { pitch: NOTES.G5, duration: 2, startTime: 5, velocity: 0.34 },
        { pitch: NOTES.E5, duration: 4, startTime: 7, velocity: 0.32 },
      ],
      repeat: 1,
    },
    {
      name: "Triumphant Call",
      notes: [
        { pitch: NOTES.E5, duration: 1.5, startTime: 0, velocity: 0.33 },
        { pitch: NOTES.G5, duration: 1.5, startTime: 1.5, velocity: 0.35 },
        { pitch: NOTES.C5 + 12, duration: 2, startTime: 3, velocity: 0.37 },
        { pitch: NOTES.A5, duration: 2, startTime: 5, velocity: 0.36 },
        { pitch: NOTES.G5, duration: 3, startTime: 7, velocity: 0.34 },
      ],
      repeat: 1,
    },
    {
      name: "Majestic Wave",
      notes: [
        { pitch: NOTES.D5, duration: 2.5, startTime: 0, velocity: 0.31 },
        { pitch: NOTES.G5, duration: 2.5, startTime: 2.5, velocity: 0.35 },
        { pitch: NOTES.E5, duration: 2, startTime: 5, velocity: 0.33 },
        { pitch: NOTES.C5, duration: 4, startTime: 7, velocity: 0.3 },
      ],
      repeat: 1,
    },
    {
      name: "Victorious Climb",
      notes: [
        { pitch: NOTES.C5, duration: 2, startTime: 0, velocity: 0.32 },
        { pitch: NOTES.E5, duration: 2, startTime: 2, velocity: 0.34 },
        { pitch: NOTES.A5, duration: 3, startTime: 4, velocity: 0.37 },
        { pitch: NOTES.C5 + 12, duration: 4, startTime: 7, velocity: 0.38 },
      ],
      repeat: 1,
    },
    {
      name: "Epic Horizon",
      notes: [
        { pitch: NOTES.G5, duration: 3, startTime: 0, velocity: 0.34 },
        { pitch: NOTES.E5, duration: 2, startTime: 3, velocity: 0.32 },
        { pitch: NOTES.G5, duration: 2, startTime: 5, velocity: 0.35 },
        { pitch: NOTES.C5 + 12, duration: 5, startTime: 7, velocity: 0.37 },
      ],
      repeat: 1,
    },
  ],
  bassPatterns: BASS_PATTERNS.filter(p => ["Root-Fifth", "Octave Jump", "Classic Arpeggio Bass", "Rhythmic Groove", "Walking Bass", "Deep Pulse"].includes(p.name)),
  arpeggioPatterns: ARPEGGIO_PATTERNS.filter(p => ["Up", "Up-Down", "Slow Wave", "Broken Chord", "Triplet", "Melodic Pattern", "Sweep Up", "Octave Up"].includes(p.name)),
  drumPatterns: DRUM_PATTERNS.filter(p => ["Epic Slow", "Minimal Beat", "Pop Ballad", "Half-Time", "Waltz 3/4", "Basic 4/4"].includes(p.name)),
  stringsPatterns: STRING_PATTERNS.filter(p => ["Soaring Strings", "Epic Swell", "Triumphant Rise", "Celestial Harmony", "Majestic Chord", "Open Voicing", "Warm Embrace", "Sustained Harmony"].includes(p.name)),
  durationRange: [35, 55],
  scales: ["major", "minor", "harmonicMinor"],
  famousPatterns: ["createMozartRocket", "createFateMotif", "createBaroqueSequence"],
};
