import type { MelodyPattern, Note } from "@/types/music";

/**
 * ジャズの定型リック
 */

/**
 * ブルーノート下降（♭7→♭6→5→♭3）
 * ブルース感を出す定番の下降フレーズ
 */
export function createBlueNoteDescend(root: number, duration: number): MelodyPattern {
  const noteDur = duration / 4;
  const intervals = [10, 8, 7, 3]; // ♭7, ♭6, 5, ♭3
  const notes: Note[] = [];

  intervals.forEach((interval, i) => {
    notes.push({
      pitch: root + interval + 24,
      duration: noteDur * 0.9,
      startTime: noteDur * i,
      velocity: 0.31 - (i * 0.02),
    });
  });

  return { name: "Blue Note Descend", notes, repeat: 1 };
}

/**
 * ビバップ・クロマチック（スケール音 + 半音階）
 * ジャズのスムーズな音の連結
 */
export function createBebopChromatic(root: number, duration: number): MelodyPattern {
  const noteDur = duration / 8;
  // 1→2→♯2→3→4→♯4→5→6の半音階的上昇
  const intervals = [0, 2, 3, 4, 5, 6, 7, 9];
  const notes: Note[] = [];

  intervals.forEach((interval, i) => {
    notes.push({
      pitch: root + interval + 24,
      duration: noteDur * 0.85,
      startTime: noteDur * i,
      velocity: 0.29 + (i * 0.01),
    });
  });

  return { name: "Bebop Chromatic", notes, repeat: 1 };
}

/**
 * ii-V-I ターンアラウンド
 * ジャズで最も一般的なコード進行に合わせたフレーズ
 */
export function createIIVITurnaround(root: number, duration: number): MelodyPattern {
  const noteDur = duration / 6;
  // ドリアン→ミクソリディアン→メジャーの順次進行
  const intervals = [2, 4, 5, 7, 9, 11];
  const notes: Note[] = [];

  intervals.forEach((interval, i) => {
    notes.push({
      pitch: root + interval + 24,
      duration: noteDur * 0.95,
      startTime: noteDur * i,
      velocity: 0.31,
    });
  });

  return { name: "ii-V-I Turnaround", notes, repeat: 1 };
}
