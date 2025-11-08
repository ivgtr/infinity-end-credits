import type { MelodyPattern, Note } from "@/types/music";

/**
 * 民族音楽の定型パターン
 */

/**
 * 陰旋下降（日本の演歌風）
 * 日本的な哀愁を帯びた下降メロディ
 */
export function createInsenDescend(root: number, duration: number): MelodyPattern {
  const noteDur = duration / 5;
  // レ→ド→ラ→ファ→ミ（相対音程）
  const intervals = [2, 0, -3, -5, -7];
  const notes: Note[] = [];

  intervals.forEach((interval, i) => {
    notes.push({
      pitch: root + interval + 24,
      duration: noteDur * 1.1,
      startTime: noteDur * i,
      velocity: 0.33 - (i * 0.015),
    });
  });

  return { name: "Insen Descend", notes, repeat: 1 };
}

/**
 * ケルト・ロール（装飾音の連続）
 * アイルランド/スコットランドの伝統音楽風
 */
export function createCelticRoll(root: number, duration: number): MelodyPattern {
  const noteDur = duration / 12;
  const notes: Note[] = [];

  // 主音周辺の細かい装飾
  const pattern = [0, 2, 0, -2, 0, 2, 4, 2, 0, 2, 4, 7];

  pattern.forEach((interval, i) => {
    notes.push({
      pitch: root + interval + 24,
      duration: noteDur * 0.8,
      startTime: noteDur * i,
      velocity: 0.27 + (Math.random() * 0.08),
    });
  });

  return { name: "Celtic Roll", notes, repeat: 1 };
}

/**
 * ヒジャーズ・マカーム（中東の音階）
 * 増2度を含むエキゾチックな音程
 */
export function createHijazMaqam(root: number, duration: number): MelodyPattern {
  const noteDur = duration / 6;
  // ヒジャーズ: 半音→増2度→半音の特徴的な音程
  const intervals = [0, 1, 5, 6, 7, 10];
  const notes: Note[] = [];

  intervals.forEach((interval, i) => {
    notes.push({
      pitch: root + interval + 24,
      duration: noteDur * 0.95,
      startTime: noteDur * i,
      velocity: 0.32,
    });
  });

  return { name: "Hijaz Maqam", notes, repeat: 1 };
}

/**
 * ラーガ・オーナメント（インド古典音楽）
 * 主音周辺の細かい装飾音
 */
export function createRagaOrnament(root: number, duration: number): MelodyPattern {
  const noteDur = duration / 10;
  const notes: Note[] = [];

  // 主音周辺の装飾: 上下の補助音を使った装飾
  const pattern = [0, 1, 0, -1, 0, 2, 1, 0, 2, 4];

  pattern.forEach((interval, i) => {
    notes.push({
      pitch: root + interval + 24,
      duration: noteDur * 0.7,
      startTime: noteDur * i,
      velocity: 0.28 + (Math.random() * 0.08),
    });
  });

  return { name: "Raga Ornament", notes, repeat: 1 };
}
