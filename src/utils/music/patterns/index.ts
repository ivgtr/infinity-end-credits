/**
 * Music Pattern Module
 *
 * This module contains all melody patterns, chord progressions,
 * and pattern generation functions organized by category.
 */

// Chord progressions
export {
  CHORD_PROGRESSIONS,
  getRandomChordProgression,
} from "./progressions/common";

// Melody patterns
export {
  MELODY_PATTERNS,
  getRandomMelodyPattern,
} from "./melodies/common";

// Melody generators
export {
  generateScaleMelody,
  generateMusicalMelody,
  generateChordBasedMelody,
  generateSmoothChordMelody,
} from "./melodies/generators";

// Famous patterns - Classical
export {
  createMozartRocket,
  createFateMotif,
  createAlbertiBass,
  createBaroqueSequence,
} from "./famous/classical";

// Famous patterns - Popular
export {
  createOctaveJump,
  createPentatonicRock,
  createSyncopated8Beat,
} from "./famous/popular";

// Famous patterns - Jazz
export {
  createBlueNoteDescend,
  createBebopChromatic,
  createIIVITurnaround,
} from "./famous/jazz";

// Famous patterns - Ethnic
export {
  createInsenDescend,
  createCelticRoll,
  createHijazMaqam,
  createRagaOrnament,
} from "./famous/ethnic";

// Famous patterns - Electronic
export {
  createArpeggiatorSeq,
  createDropBuild,
  createSidechainRhythm,
} from "./famous/electronic";

// Famous patterns - Ambient
export {
  createEnoAmbientPad,
  createShimmerReverb,
  createTexturalDrone,
  createGranularCloud,
  createModularSequence,
} from "./famous/ambient";
