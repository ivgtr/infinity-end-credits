import type { MusicStyle } from "@/types/music";
import { NOTES } from "../core/constants";
import { BASS_PATTERNS } from "../patterns/base/bass";
import { ARPEGGIO_PATTERNS } from "../patterns/base/arpeggio";
import { DRUM_PATTERNS } from "../patterns/base/drums";

/**
 * 6. ジャジー（Jazzy）: ジャズ風の洗練された雰囲気
 */
export const JAZZY_STYLE: MusicStyle = {
  type: "jazzy",
  name: "ジャジー",
  description: "ジャズ風の洗練されたスウィング感",
  soundParams: {
    padVolume: 0.07,
    padAttack: 0.4,
    padRelease: 0.8,
    leadVolume: 0.42,
    leadAttack: 0.08,
    leadRelease: 0.3,
    oscillatorType: "triangle",
  },
  progressions: [
    // ii-V-I (ジャズの王道進行)
    {
      name: "Jazz Standard",
      tempo: 95,
      chords: [
        { root: NOTES.D4, type: "min7", duration: 3 },
        { root: NOTES.G3, type: "dom7", duration: 3 },
        { root: NOTES.C4, type: "maj7", duration: 6 },
      ],
    },
    // I-vi-ii-V (Rhythm changes A section)
    {
      name: "Rhythm Changes",
      tempo: 92,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 2 },
        { root: NOTES.A3, type: "min7", duration: 2 },
        { root: NOTES.D4, type: "min7", duration: 2 },
        { root: NOTES.G3, type: "dom7", duration: 2 },
      ],
    },
    // iii-vi-ii-V (Turnaround)
    {
      name: "Turnaround",
      tempo: 88,
      chords: [
        { root: NOTES.E3, type: "min7", duration: 2.5 },
        { root: NOTES.A3, type: "min7", duration: 2.5 },
        { root: NOTES.D4, type: "min7", duration: 2.5 },
        { root: NOTES.G3, type: "dom7", duration: 2.5 },
      ],
    },
    // I-IV-iii-vi (Simplified jazz)
    {
      name: "Cool Jazz",
      tempo: 85,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 3 },
        { root: NOTES.F3, type: "maj7", duration: 3 },
        { root: NOTES.E3, type: "min7", duration: 3 },
        { root: NOTES.A3, type: "min7", duration: 3 },
      ],
    },
    // I-bIII-bVI-bII (Modal jazz)
    {
      name: "Modal Jazz",
      tempo: 90,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 4 },
        { root: NOTES.D3 + 8, type: "maj7", duration: 4 }, // Eb
        { root: NOTES.G3 + 8, type: "maj7", duration: 4 }, // Ab
        { root: NOTES.C4 + 1, type: "maj7", duration: 4 }, // Db
      ],
    },
    // vi-ii-V-I (Minor jazz)
    {
      name: "Minor Jazz",
      tempo: 87,
      chords: [
        { root: NOTES.A3, type: "min7", duration: 3 },
        { root: NOTES.D4, type: "min7", duration: 3 },
        { root: NOTES.G3, type: "dom7", duration: 3 },
        { root: NOTES.C4, type: "maj7", duration: 3 },
      ],
    },
    // I-vi-ii-V-iii-vi-ii-V (Extended turnaround)
    {
      name: "Extended Turnaround",
      tempo: 90,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 1.5 },
        { root: NOTES.A3, type: "min7", duration: 1.5 },
        { root: NOTES.D4, type: "min7", duration: 1.5 },
        { root: NOTES.G3, type: "dom7", duration: 1.5 },
        { root: NOTES.E3, type: "min7", duration: 1.5 },
        { root: NOTES.A3, type: "dom7", duration: 1.5 },
        { root: NOTES.D4, type: "min7", duration: 1.5 },
        { root: NOTES.G3, type: "dom7", duration: 1.5 },
      ],
    },
    // I-III7-vi-II7-ii-V (Coltrane changes inspired)
    {
      name: "Coltrane Inspired",
      tempo: 93,
      chords: [
        { root: NOTES.C4, type: "maj7", duration: 3 },
        { root: NOTES.E3, type: "dom7", duration: 3 },
        { root: NOTES.A3, type: "min7", duration: 3 },
        { root: NOTES.D4, type: "dom7", duration: 3 },
        { root: NOTES.D4, type: "min7", duration: 2 },
        { root: NOTES.G3, type: "dom7", duration: 2 },
      ],
    },
    // vi-V-IV-III (Descending jazz)
    {
      name: "Descending Jazz",
      tempo: 86,
      chords: [
        { root: NOTES.A3, type: "min7", duration: 3 },
        { root: NOTES.G3, type: "dom7", duration: 3 },
        { root: NOTES.F3, type: "maj7", duration: 3 },
        { root: NOTES.E3, type: "min7", duration: 3 },
      ],
    },
    // I-IV-bVII-IV (Bluesy jazz)
    {
      name: "Bluesy Jazz",
      tempo: 84,
      chords: [
        { root: NOTES.C4, type: "dom7", duration: 4 },
        { root: NOTES.F3, type: "dom7", duration: 4 },
        { root: NOTES.A3 + 10, type: "dom7", duration: 4 }, // Bb7
        { root: NOTES.F3, type: "dom7", duration: 4 },
      ],
    },
  ],
  melodyPatterns: [
    {
      name: "Jazzy Walk",
      notes: [
        { pitch: NOTES.G5, duration: 1.5, startTime: 0, velocity: 0.38 },
        { pitch: NOTES.F5, duration: 1, startTime: 1.5, velocity: 0.36 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 2.5, velocity: 0.37 },
        { pitch: NOTES.D5, duration: 1, startTime: 4, velocity: 0.35 },
        { pitch: NOTES.C5, duration: 2, startTime: 5, velocity: 0.38 },
      ],
      repeat: 1,
    },
    {
      name: "Swing Phrase",
      notes: [
        { pitch: NOTES.C5, duration: 1, startTime: 0, velocity: 0.36 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 1, velocity: 0.38 },
        { pitch: NOTES.G5, duration: 1, startTime: 2.5, velocity: 0.4 },
        { pitch: NOTES.A5, duration: 2, startTime: 3.5, velocity: 0.37 },
        { pitch: NOTES.G5, duration: 1.5, startTime: 5.5, velocity: 0.35 },
      ],
      repeat: 1,
    },
    {
      name: "Blue Note Run",
      notes: [
        { pitch: NOTES.E5, duration: 1, startTime: 0, velocity: 0.37 },
        { pitch: NOTES.D5, duration: 1.2, startTime: 1, velocity: 0.36 },
        { pitch: NOTES.C5, duration: 1, startTime: 2.2, velocity: 0.38 },
        { pitch: NOTES.A4, duration: 1.5, startTime: 3.2, velocity: 0.35 },
        { pitch: NOTES.G4, duration: 2, startTime: 4.7, velocity: 0.34 },
      ],
      repeat: 1,
    },
    {
      name: "Bebop Lick",
      notes: [
        { pitch: NOTES.C5, duration: 0.8, startTime: 0, velocity: 0.37 },
        { pitch: NOTES.D5, duration: 0.8, startTime: 0.8, velocity: 0.38 },
        { pitch: NOTES.E5, duration: 1, startTime: 1.6, velocity: 0.39 },
        { pitch: NOTES.G5, duration: 1.2, startTime: 2.6, velocity: 0.4 },
        { pitch: NOTES.E5, duration: 1, startTime: 3.8, velocity: 0.37 },
        { pitch: NOTES.C5, duration: 1.5, startTime: 4.8, velocity: 0.36 },
      ],
      repeat: 1,
    },
    {
      name: "Cool Stride",
      notes: [
        { pitch: NOTES.A5, duration: 1.2, startTime: 0, velocity: 0.38 },
        { pitch: NOTES.G5, duration: 1, startTime: 1.2, velocity: 0.37 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 2.2, velocity: 0.36 },
        { pitch: NOTES.D5, duration: 2, startTime: 3.7, velocity: 0.35 },
      ],
      repeat: 1,
    },
    {
      name: "Smooth Glide",
      notes: [
        { pitch: NOTES.D5, duration: 1.5, startTime: 0, velocity: 0.36 },
        { pitch: NOTES.E5, duration: 1, startTime: 1.5, velocity: 0.37 },
        { pitch: NOTES.G5, duration: 1.5, startTime: 2.5, velocity: 0.39 },
        { pitch: NOTES.A5, duration: 1.5, startTime: 4, velocity: 0.38 },
        { pitch: NOTES.G5, duration: 2, startTime: 5.5, velocity: 0.36 },
      ],
      repeat: 1,
    },
    {
      name: "Scat Melody",
      notes: [
        { pitch: NOTES.C5, duration: 0.9, startTime: 0, velocity: 0.37 },
        { pitch: NOTES.D5, duration: 0.9, startTime: 0.9, velocity: 0.38 },
        { pitch: NOTES.F5, duration: 1.2, startTime: 1.8, velocity: 0.39 },
        { pitch: NOTES.E5, duration: 1, startTime: 3, velocity: 0.38 },
        { pitch: NOTES.C5, duration: 1.5, startTime: 4, velocity: 0.36 },
      ],
      repeat: 1,
    },
    {
      name: "Chromatic Walk",
      notes: [
        { pitch: NOTES.E5, duration: 1, startTime: 0, velocity: 0.37 },
        { pitch: NOTES.D5 + 1, duration: 0.8, startTime: 1, velocity: 0.36 },
        { pitch: NOTES.D5, duration: 1, startTime: 1.8, velocity: 0.37 },
        { pitch: NOTES.C5 + 1, duration: 0.8, startTime: 2.8, velocity: 0.36 },
        { pitch: NOTES.C5, duration: 2, startTime: 3.6, velocity: 0.38 },
      ],
      repeat: 1,
    },
    {
      name: "Laid Back Groove",
      notes: [
        { pitch: NOTES.G5, duration: 1.8, startTime: 0, velocity: 0.38 },
        { pitch: NOTES.E5, duration: 1.2, startTime: 1.8, velocity: 0.36 },
        { pitch: NOTES.D5, duration: 1, startTime: 3, velocity: 0.35 },
        { pitch: NOTES.C5, duration: 2, startTime: 4, velocity: 0.37 },
      ],
      repeat: 1,
    },
    {
      name: "Jazz Ornament",
      notes: [
        { pitch: NOTES.A5, duration: 1, startTime: 0, velocity: 0.38 },
        { pitch: NOTES.G5, duration: 1.3, startTime: 1, velocity: 0.37 },
        { pitch: NOTES.F5, duration: 1, startTime: 2.3, velocity: 0.36 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 3.3, velocity: 0.37 },
      ],
      repeat: 1,
    },
    {
      name: "Sophisticated Line",
      notes: [
        { pitch: NOTES.D5, duration: 1.2, startTime: 0, velocity: 0.36 },
        { pitch: NOTES.F5, duration: 1.2, startTime: 1.2, velocity: 0.38 },
        { pitch: NOTES.A5, duration: 1.5, startTime: 2.4, velocity: 0.39 },
        { pitch: NOTES.G5, duration: 1.8, startTime: 3.9, velocity: 0.37 },
      ],
      repeat: 1,
    },
  ],
  bassPatterns: BASS_PATTERNS.filter(p => ["Walking Bass", "Root-Fifth", "Jazzy Walk", "Syncopated Funk", "Rhythmic Groove", "Bouncy Pop"].includes(p.name)),
  arpeggioPatterns: ARPEGGIO_PATTERNS.filter(p => ["Random", "Up-Down", "Syncopated", "Broken Chord", "Triplet", "Alternating", "Melodic Pattern", "Complex Weave"].includes(p.name)),
  drumPatterns: DRUM_PATTERNS.filter(p => ["Basic 4/4", "Energetic", "Shuffle Beat", "Syncopated Funk", "Breakbeat", "Pop Ballad"].includes(p.name)),
  durationRange: [35, 50],
  scales: ["dorian", "mixolydian", "blues", "melodicMinor"],
  famousPatterns: ["createBlueNoteDescend", "createBebopChromatic", "createIIVITurnaround"],
};
