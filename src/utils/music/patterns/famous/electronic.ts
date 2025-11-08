import type { MelodyPattern, Note } from "@/types/music";

/**
 * 現代電子音楽パターン
 */

/**
 * アルペジエイター・シーケンス（16分音符の均等アルペジオ）
 * EDM/トランスの定番パターン
 */
export function createArpeggiatorSeq(root: number, duration: number): MelodyPattern {
  const noteDur = duration / 16;
  const notes: Note[] = [];

  // 1-3-5-8のアルペジオを4回繰り返す
  const pattern = [0, 4, 7, 12];

  for (let rep = 0; rep < 4; rep++) {
    pattern.forEach((interval, i) => {
      notes.push({
        pitch: root + interval + 24,
        duration: noteDur * 0.75,
        startTime: noteDur * (i + rep * 4),
        velocity: 0.28,
      });
    });
  }

  return { name: "Arpeggiator Sequence", notes, repeat: 1 };
}

/**
 * ドロップ・ビルド（徐々に上昇→急降下）
 * ダブステップ/トラップの定番テクニック
 */
export function createDropBuild(root: number, duration: number): MelodyPattern {
  const notes: Note[] = [];

  // ビルドアップ（徐々に上昇）
  for (let i = 0; i < 6; i++) {
    notes.push({
      pitch: root + (i * 2) + 24,
      duration: duration * 0.1,
      startTime: duration * 0.12 * i,
      velocity: 0.25 + (i * 0.02),
    });
  }

  // ドロップ（急降下）
  notes.push({
    pitch: root + 12,
    duration: duration * 0.3,
    startTime: duration * 0.72,
    velocity: 0.4,
  });

  return { name: "Drop Build", notes, repeat: 1 };
}

/**
 * サイドチェイン・リズム（キックに合わせた音量変動風）
 * ハウス/エレクトロの典型的なグルーヴ
 */
export function createSidechainRhythm(root: number, duration: number): MelodyPattern {
  const noteDur = duration / 4;
  const notes: Note[] = [];

  // キックのタイミングで音量が下がるイメージ
  const pattern = [
    { interval: 0, velocity: 0.2 },  // キック（小）
    { interval: 4, velocity: 0.35 }, // オフビート（大）
    { interval: 7, velocity: 0.22 }, // キック（小）
    { interval: 4, velocity: 0.36 }, // オフビート（大）
  ];

  pattern.forEach(({ interval, velocity }, i) => {
    notes.push({
      pitch: root + interval + 24,
      duration: noteDur * 0.9,
      startTime: noteDur * i,
      velocity,
    });
  });

  return { name: "Sidechain Rhythm", notes, repeat: 1 };
}
