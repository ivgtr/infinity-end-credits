import type { MelodyPattern, Note } from "@/types/music";

/**
 * ポップス/ロックの定番パターン
 */

/**
 * オクターブジャンプ（主音→オクターブ上→5度）
 * キャッチーなフックラインの定番
 */
export function createOctaveJump(root: number, duration: number): MelodyPattern {
  return {
    name: "Octave Jump",
    notes: [
      { pitch: root + 24, duration: duration * 0.25, startTime: 0, velocity: 0.35 },
      { pitch: root + 36, duration: duration * 0.4, startTime: duration * 0.25, velocity: 0.38 },
      { pitch: root + 31, duration: duration * 0.35, startTime: duration * 0.65, velocity: 0.33 },
    ],
    repeat: 1,
  };
}

/**
 * ペンタトニック・ロック（典型的なロックリフ）
 * マイナーペンタトニックスケールの順次進行
 */
export function createPentatonicRock(root: number, duration: number): MelodyPattern {
  const noteDur = duration / 5;
  // マイナーペンタトニック: 1度→♭3度→4度→5度→♭7度
  const intervals = [0, 3, 5, 7, 10];
  const notes: Note[] = [];

  intervals.forEach((interval, i) => {
    notes.push({
      pitch: root + interval + 24,
      duration: noteDur * 0.85,
      startTime: noteDur * i,
      velocity: 0.32 + (Math.random() * 0.06),
    });
  });

  return { name: "Pentatonic Rock", notes, repeat: 1 };
}

/**
 * シンコペーション8ビート（裏拍強調）
 * ファンク/ディスコの典型的なリズムパターン
 */
export function createSyncopated8Beat(root: number, duration: number): MelodyPattern {
  const noteDur = duration / 8;
  const notes: Note[] = [];

  // リズムパターン: 裏拍を強調
  const pattern = [
    { interval: 0, velocity: 0.25 },
    { interval: 2, velocity: 0.35 }, // 裏拍強調
    { interval: 4, velocity: 0.28 },
    { interval: 2, velocity: 0.36 }, // 裏拍強調
    { interval: 0, velocity: 0.26 },
    { interval: 4, velocity: 0.34 }, // 裏拍強調
    { interval: 7, velocity: 0.3 },
    { interval: 4, velocity: 0.32 },
  ];

  pattern.forEach(({ interval, velocity }, i) => {
    notes.push({
      pitch: root + interval + 24,
      duration: noteDur * 0.7,
      startTime: noteDur * i,
      velocity,
    });
  });

  return { name: "Syncopated 8-Beat", notes, repeat: 1 };
}
