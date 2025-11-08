import type { MelodyPattern, Note } from "@/types/music";

/**
 * クラシック音楽の定型パターン
 */

/**
 * モーツァルト・ロケット（急速上昇アルペジオ）
 * 1度→3度→5度→8度（オクターブ）の典型的な上昇パターン
 */
export function createMozartRocket(root: number, duration: number): MelodyPattern {
  const noteCount = 8;
  const noteDuration = duration / noteCount;
  const notes: Note[] = [];

  // 1度→3度→5度→8度（オクターブ）の上昇
  const intervals = [0, 4, 7, 12, 0, 4, 7, 12];

  for (let i = 0; i < noteCount; i++) {
    notes.push({
      pitch: root + intervals[i]! + 12,
      duration: noteDuration * 0.9,
      startTime: noteDuration * i,
      velocity: 0.3 + (i * 0.02),
    });
  }

  return { name: "Mozart Rocket", notes, repeat: 1 };
}

/**
 * 運命の動機（短短短長リズム）
 * ベートーヴェン交響曲第5番の有名なリズムパターン
 */
export function createFateMotif(root: number, duration: number): MelodyPattern {
  const shortDur = duration / 8;
  const longDur = duration / 2;

  return {
    name: "Fate Motif",
    notes: [
      { pitch: root + 7 + 12, duration: shortDur, startTime: 0, velocity: 0.35 },
      { pitch: root + 7 + 12, duration: shortDur, startTime: shortDur, velocity: 0.35 },
      { pitch: root + 7 + 12, duration: shortDur, startTime: shortDur * 2, velocity: 0.35 },
      { pitch: root + 4 + 12, duration: longDur, startTime: shortDur * 3, velocity: 0.38 },
    ],
    repeat: 1,
  };
}

/**
 * アルベルティバス（分散和音：低-高-中-高）
 * クラシック時代のピアノ伴奏の典型パターン
 */
export function createAlbertiBass(root: number, duration: number): MelodyPattern {
  const noteDuration = duration / 8;
  const notes: Note[] = [];

  // パターン: 1度-5度-3度-5度を繰り返す
  const pattern = [0, 7, 4, 7];

  for (let rep = 0; rep < 2; rep++) {
    pattern.forEach((interval, i) => {
      notes.push({
        pitch: root + interval + 24,
        duration: noteDuration * 0.9,
        startTime: noteDuration * (i + rep * 4),
        velocity: 0.28,
      });
    });
  }

  return { name: "Alberti Bass", notes, repeat: 1 };
}

/**
 * バロック・セクエンス（音型の反復移動）
 * 同じパターンを異なる音程で繰り返す
 */
export function createBaroqueSequence(root: number, duration: number): MelodyPattern {
  const noteDur = duration / 12;
  const notes: Note[] = [];

  // 基本パターン: 上昇3音
  const basePattern = [0, 2, 4];

  // パターンを3回、異なる開始音で繰り返す
  const startNotes = [0, 2, 4, 7];

  startNotes.forEach((start, groupIndex) => {
    basePattern.forEach((interval, i) => {
      notes.push({
        pitch: root + start + interval + 24,
        duration: noteDur * 0.9,
        startTime: noteDur * (i + groupIndex * 3),
        velocity: 0.3,
      });
    });
  });

  return { name: "Baroque Sequence", notes, repeat: 1 };
}
