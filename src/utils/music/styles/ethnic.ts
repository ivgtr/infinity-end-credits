import type { MusicStyle } from "@/types/music";
import { NOTES } from "../core/constants";
import { BASS_PATTERNS } from "../patterns/base/bass";
import { ARPEGGIO_PATTERNS } from "../patterns/base/arpeggio";
import { DRUM_PATTERNS } from "../patterns/base/drums";

/**
 * 10. エスニック（Ethnic）: ワールドミュージック・エキゾチック
 */
export const ETHNIC_STYLE: MusicStyle = {
  type: "ethnic",
  name: "エスニック",
  description: "世界各地の民族音楽風サウンド",
  soundParams: {
    padVolume: 0.08,
    padAttack: 0.4,
    padRelease: 0.8,
    leadVolume: 0.46,
    leadAttack: 0.05,
    leadRelease: 0.3,
    oscillatorType: "triangle",
  },
  progressions: [
    {
      name: "Pentatonic Asian",
      tempo: 68,
      chords: [
        { root: NOTES.D3, type: "sus2", duration: 4 },
        { root: NOTES.A3, type: "sus2", duration: 4 },
        { root: NOTES.G3, type: "sus2", duration: 4 },
        { root: NOTES.D3, type: "sus2", duration: 4 },
      ],
    },
    {
      name: "Middle Eastern",
      tempo: 72,
      chords: [
        { root: NOTES.E3, type: "minor", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.E3, type: "minor", duration: 3 },
        { root: NOTES.D3, type: "major", duration: 3 },
      ],
    },
    {
      name: "Japanese Pentatonic",
      tempo: 65,
      chords: [
        { root: NOTES.A3, type: "sus2", duration: 5 },
        { root: NOTES.D4, type: "sus2", duration: 5 },
        { root: NOTES.E3, type: "sus2", duration: 5 },
        { root: NOTES.A3, type: "sus2", duration: 5 },
      ],
    },
    {
      name: "Indian Raga",
      tempo: 70,
      chords: [
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.D3 + 8, type: "major", duration: 4 }, // Eb
        { root: NOTES.F3, type: "major", duration: 4 },
        { root: NOTES.G3, type: "major", duration: 4 },
      ],
    },
    {
      name: "Celtic Modal",
      tempo: 66,
      chords: [
        { root: NOTES.D3, type: "minor", duration: 4 },
        { root: NOTES.C4, type: "major", duration: 4 },
        { root: NOTES.A3 + 10, type: "major", duration: 4 }, // Bb
        { root: NOTES.D3, type: "minor", duration: 4 },
      ],
    },
    {
      name: "African Groove",
      tempo: 75,
      chords: [
        { root: NOTES.E3, type: "minor", duration: 3 },
        { root: NOTES.G3, type: "major", duration: 3 },
        { root: NOTES.D3, type: "major", duration: 3 },
        { root: NOTES.E3, type: "minor", duration: 3 },
      ],
    },
    {
      name: "Balkan Asymmetric",
      tempo: 78,
      chords: [
        { root: NOTES.A3, type: "minor", duration: 2.5 },
        { root: NOTES.G3, type: "major", duration: 2.5 },
        { root: NOTES.F3, type: "major", duration: 2.5 },
        { root: NOTES.E3, type: "major", duration: 2.5 },
      ],
    },
    {
      name: "Flamenco Phrygian",
      tempo: 73,
      chords: [
        { root: NOTES.E3, type: "minor", duration: 3 },
        { root: NOTES.F3, type: "major", duration: 3 },
        { root: NOTES.G3, type: "major", duration: 3 },
        { root: NOTES.A3, type: "minor", duration: 3 },
      ],
    },
    {
      name: "Chinese Pentatonic",
      tempo: 64,
      chords: [
        { root: NOTES.C4, type: "sus2", duration: 5 },
        { root: NOTES.G3, type: "sus2", duration: 5 },
        { root: NOTES.D4, type: "sus2", duration: 5 },
        { root: NOTES.A3, type: "sus2", duration: 5 },
      ],
    },
    {
      name: "Klezmer Mode",
      tempo: 69,
      chords: [
        { root: NOTES.D3, type: "minor", duration: 3 },
        { root: NOTES.G3, type: "minor", duration: 3 },
        { root: NOTES.A3, type: "dom7", duration: 3 },
        { root: NOTES.D3, type: "minor", duration: 3 },
      ],
    },
  ],
  melodyPatterns: [
    {
      name: "Shakuhachi Breath",
      notes: [
        { pitch: NOTES.D5, duration: 3, startTime: 0, velocity: 0.38 },
        { pitch: NOTES.E5, duration: 2, startTime: 3, velocity: 0.37 },
        { pitch: NOTES.A5, duration: 3, startTime: 5, velocity: 0.4 },
        { pitch: NOTES.G5, duration: 4, startTime: 8, velocity: 0.38 },
      ],
      repeat: 1,
    },
    {
      name: "Sitar Slide",
      notes: [
        { pitch: NOTES.C5, duration: 1.5, startTime: 0, velocity: 0.39 },
        { pitch: NOTES.D5, duration: 1, startTime: 1.5, velocity: 0.4 },
        { pitch: NOTES.E5, duration: 2, startTime: 2.5, velocity: 0.42 },
        { pitch: NOTES.C5, duration: 2, startTime: 4.5, velocity: 0.38 },
      ],
      repeat: 2,
    },
    {
      name: "Duduk Lament",
      notes: [
        { pitch: NOTES.E5, duration: 3.5, startTime: 0, velocity: 0.37 },
        { pitch: NOTES.F5, duration: 2, startTime: 3.5, velocity: 0.38 },
        { pitch: NOTES.E5, duration: 3, startTime: 5.5, velocity: 0.36 },
      ],
      repeat: 1,
    },
    {
      name: "Bamboo Flute",
      notes: [
        { pitch: NOTES.A5, duration: 2, startTime: 0, velocity: 0.4 },
        { pitch: NOTES.G5, duration: 2, startTime: 2, velocity: 0.39 },
        { pitch: NOTES.E5, duration: 2.5, startTime: 4, velocity: 0.38 },
        { pitch: NOTES.D5, duration: 3.5, startTime: 6.5, velocity: 0.37 },
      ],
      repeat: 1,
    },
    {
      name: "Celtic Whistle",
      notes: [
        { pitch: NOTES.D5, duration: 1, startTime: 0, velocity: 0.39 },
        { pitch: NOTES.E5, duration: 1, startTime: 1, velocity: 0.4 },
        { pitch: NOTES.D5, duration: 1, startTime: 2, velocity: 0.38 },
        { pitch: NOTES.A4, duration: 1.5, startTime: 3, velocity: 0.37 },
        { pitch: NOTES.D5, duration: 2, startTime: 4.5, velocity: 0.39 },
      ],
      repeat: 2,
    },
    {
      name: "Oud Ornament",
      notes: [
        { pitch: NOTES.E5, duration: 1.2, startTime: 0, velocity: 0.41 },
        { pitch: NOTES.F5, duration: 0.8, startTime: 1.2, velocity: 0.42 },
        { pitch: NOTES.E5, duration: 1.5, startTime: 2, velocity: 0.4 },
        { pitch: NOTES.D5, duration: 2, startTime: 3.5, velocity: 0.39 },
      ],
      repeat: 2,
    },
    {
      name: "Koto Cascade",
      notes: [
        { pitch: NOTES.C5 + 12, duration: 1, startTime: 0, velocity: 0.41 },
        { pitch: NOTES.A5, duration: 1, startTime: 1, velocity: 0.4 },
        { pitch: NOTES.G5, duration: 1.5, startTime: 2, velocity: 0.39 },
        { pitch: NOTES.E5, duration: 2, startTime: 3.5, velocity: 0.38 },
        { pitch: NOTES.D5, duration: 2.5, startTime: 5.5, velocity: 0.37 },
      ],
      repeat: 1,
    },
    {
      name: "Tabla Dance",
      notes: [
        { pitch: NOTES.G5, duration: 1, startTime: 0, velocity: 0.4 },
        { pitch: NOTES.E5, duration: 1, startTime: 1, velocity: 0.39 },
        { pitch: NOTES.G5, duration: 1, startTime: 2, velocity: 0.41 },
        { pitch: NOTES.A5, duration: 1.5, startTime: 3, velocity: 0.42 },
        { pitch: NOTES.G5, duration: 2, startTime: 4.5, velocity: 0.39 },
      ],
      repeat: 2,
    },
    {
      name: "Erhu Glide",
      notes: [
        { pitch: NOTES.A5, duration: 3, startTime: 0, velocity: 0.39 },
        { pitch: NOTES.G5, duration: 2.5, startTime: 3, velocity: 0.38 },
        { pitch: NOTES.E5, duration: 3.5, startTime: 5.5, velocity: 0.37 },
      ],
      repeat: 1,
    },
    {
      name: "Pan Flute Echo",
      notes: [
        { pitch: NOTES.C5, duration: 2.5, startTime: 0, velocity: 0.38 },
        { pitch: NOTES.D5, duration: 2, startTime: 2.5, velocity: 0.39 },
        { pitch: NOTES.E5, duration: 2, startTime: 4.5, velocity: 0.4 },
        { pitch: NOTES.G5, duration: 3, startTime: 6.5, velocity: 0.41 },
      ],
      repeat: 1,
    },
  ],
  bassPatterns: BASS_PATTERNS.filter(p => ["Root-Fifth", "Minimal", "Rhythmic Groove", "Walking Bass", "Octave Jump", "Bouncy Pop"].includes(p.name)),
  arpeggioPatterns: ARPEGGIO_PATTERNS.filter(p => ["Up", "Down", "Slow Wave", "Triplet", "Random", "Broken Chord", "Melodic Pattern", "Alternating"].includes(p.name)),
  drumPatterns: DRUM_PATTERNS.filter(p => ["Complex 7/8", "Progressive 5/4", "Minimal Beat", "Folk 6/8", "Waltz 3/4", "Basic 4/4", "Shuffle Beat"].includes(p.name)),
  durationRange: [35, 55],
  scales: ["hirajoshi", "inSen", "phrygianDominant", "hungarianMinor", "pentatonic"],
  famousPatterns: ["createInsenDescend", "createCelticRoll", "createHijazMaqam", "createRagaOrnament"],
};
