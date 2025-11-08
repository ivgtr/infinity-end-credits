import type { MelodyPattern, Note } from "@/types/music";

/**
 * アンビエント専用の定型パターン
 */

/**
 * ブライアン・イーノ風パッド（ゆっくりとした音色の変化）
 */
export function createEnoAmbientPad(root: number, duration: number): MelodyPattern {
  const notes: Note[] = [];

  // 非常に長いロングトーンを複数重ねる
  const chordNotes = [0, 4, 7, 11]; // maj7コード
  let currentTime = 0;
  const noteCount = Math.floor(duration / 6) + 1;

  for (let i = 0; i < noteCount; i++) {
    chordNotes.forEach((interval, idx) => {
      notes.push({
        pitch: root + interval + 24,
        duration: 6 + (Math.random() * 2),
        startTime: currentTime + (idx * 1.5),
        velocity: 0.25 + (Math.random() * 0.05),
      });
    });
    currentTime += 6;
  }

  return { name: "Eno Ambient Pad", notes, repeat: 1 };
}

/**
 * シマー・リバーブ風（高音域の煌めき）
 */
export function createShimmerReverb(root: number, duration: number): MelodyPattern {
  const notes: Note[] = [];
  const noteCount = Math.floor(duration / 2);

  for (let i = 0; i < noteCount; i++) {
    // 高音域でキラキラした音
    const intervals = [0, 4, 7, 12, 16, 19];
    const interval = intervals[Math.floor(Math.random() * intervals.length)]!;

    notes.push({
      pitch: root + interval + 36, // 3オクターブ上
      duration: 2 + (Math.random() * 2),
      startTime: i * 2,
      velocity: 0.2 + (Math.random() * 0.08),
    });
  }

  return { name: "Shimmer Reverb", notes, repeat: 1 };
}

/**
 * テクスチャル・ドローン（微妙に変化する持続音）
 */
export function createTexturalDrone(root: number, duration: number): MelodyPattern {
  const notes: Note[] = [];

  // ベース音を持続させつつ、微妙に変化する上声部
  notes.push({
    pitch: root + 12,
    duration: duration * 0.95,
    startTime: 0,
    velocity: 0.28,
  });

  // 微妙に変化する中音域
  const changePoints = Math.floor(duration / 4);
  for (let i = 0; i < changePoints; i++) {
    const intervals = [4, 7, 11, 14];
    const interval = intervals[i % intervals.length]!;

    notes.push({
      pitch: root + interval + 12,
      duration: 4,
      startTime: i * 4,
      velocity: 0.22 + (Math.random() * 0.06),
    });
  }

  return { name: "Textural Drone", notes, repeat: 1 };
}

/**
 * グラニュラー・クラウド（粒状の浮遊感）
 */
export function createGranularCloud(root: number, duration: number): MelodyPattern {
  const notes: Note[] = [];
  const grainCount = Math.floor(duration * 3); // 3粒/秒

  for (let i = 0; i < grainCount; i++) {
    // ランダムな音程（スケール内）
    const intervals = [0, 2, 4, 7, 9, 11];
    const interval = intervals[Math.floor(Math.random() * intervals.length)]!;
    const octaveShift = Math.floor(Math.random() * 3) * 12;

    notes.push({
      pitch: root + interval + 12 + octaveShift,
      duration: 0.3 + (Math.random() * 0.5),
      startTime: (duration / grainCount) * i + (Math.random() * 0.2),
      velocity: 0.18 + (Math.random() * 0.12),
    });
  }

  return { name: "Granular Cloud", notes, repeat: 1 };
}

/**
 * モジュラー・シーケンス（ゆっくりと変化するパターン）
 */
export function createModularSequence(root: number, duration: number): MelodyPattern {
  const notes: Note[] = [];
  const pattern = [0, 7, 4, 9, 2, 11, 7, 4]; // 不規則だが調和的
  const noteDur = duration / pattern.length;

  pattern.forEach((interval, i) => {
    notes.push({
      pitch: root + interval + 24,
      duration: noteDur * 0.95,
      startTime: noteDur * i,
      velocity: 0.26 + (Math.sin(i) * 0.08), // 波状に音量変化
    });
  });

  return { name: "Modular Sequence", notes, repeat: 1 };
}
