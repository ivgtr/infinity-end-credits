import type { MelodyPattern } from "@/types/music";

/**
 * ヒューマナイゼーション（人間的な揺らぎ）をメロディーに追加
 * 機械的な印象を減らし、より生き生きとした音楽にする
 *
 * @param pattern 元のメロディーパターン
 * @param intensity 揺らぎの強度（0.0-1.0、デフォルト: 0.5）
 * @returns ヒューマナイズされたメロディーパターン
 */
export function humanizeMelody(
  pattern: MelodyPattern,
  intensity: number = 0.5
): MelodyPattern {
  const newNotes = pattern.notes.map(note => {
    // 音高の微妙な変化（±2半音以内、確率15%）
    let pitch = note.pitch;
    if (Math.random() < 0.15 * intensity) {
      const shift = Math.random() > 0.5 ? 1 : -1;
      pitch = note.pitch + shift;
    }

    // タイミングの揺らぎ（±5%）
    const timingVariation = (Math.random() - 0.5) * 0.1 * intensity;
    const startTime = Math.max(0, note.startTime + (note.startTime * timingVariation));

    // 音長の揺らぎ（±10%）
    const durationVariation = 1 + ((Math.random() - 0.5) * 0.2 * intensity);
    const duration = note.duration * durationVariation;

    // ベロシティの揺らぎ（±15%）
    const baseVelocity = note.velocity ?? 0.5; // デフォルト値を設定
    const velocityVariation = 1 + ((Math.random() - 0.5) * 0.3 * intensity);
    const velocity = Math.max(0.1, Math.min(0.9, baseVelocity * velocityVariation));

    return {
      pitch,
      duration,
      startTime,
      velocity,
    };
  });

  return {
    ...pattern,
    notes: newNotes,
  };
}

/**
 * ダイナミクス（強弱）をメロディーに適用
 * クレッシェンド、デクレッシェンド、スウェルなどの表現を追加
 *
 * @param pattern 元のメロディーパターン
 * @param type ダイナミクスのタイプ
 * @returns ダイナミクスが適用されたメロディーパターン
 */
export function applyDynamics(
  pattern: MelodyPattern,
  type: 'crescendo' | 'decrescendo' | 'swell' | 'accent'
): MelodyPattern {
  const noteCount = pattern.notes.length;

  const newNotes = pattern.notes.map((note, index) => {
    let velocityMultiplier = 1.0;

    switch (type) {
      case 'crescendo':
        // クレッシェンド: 徐々に強く（0.7→1.3）
        velocityMultiplier = 0.7 + (index / noteCount) * 0.6;
        break;

      case 'decrescendo':
        // デクレッシェンド: 徐々に弱く（1.3→0.7）
        velocityMultiplier = 1.3 - (index / noteCount) * 0.6;
        break;

      case 'swell':
        // スウェル: 山型の強弱（0.7→1.3→0.7）
        const position = index / noteCount;
        velocityMultiplier = 0.7 + Math.sin(position * Math.PI) * 0.6;
        break;

      case 'accent':
        // アクセント: 最初と中間を強調
        if (index === 0 || index === Math.floor(noteCount / 2)) {
          velocityMultiplier = 1.4;
        } else {
          velocityMultiplier = 0.9;
        }
        break;
    }

    const baseVelocity = note.velocity ?? 0.5; // デフォルト値を設定
    return {
      ...note,
      velocity: Math.max(0.1, Math.min(0.9, baseVelocity * velocityMultiplier)),
    };
  });

  return {
    ...pattern,
    notes: newNotes,
  };
}

/**
 * メロディーに微妙なバリエーションを追加
 * ヒューマナイゼーションとダイナミクスの両方を適用
 *
 * @param pattern 元のメロディーパターン
 * @param options オプション設定
 * @returns バリエーションが追加されたメロディーパターン
 */
export function addMicroVariations(
  pattern: MelodyPattern,
  options: {
    humanize?: boolean;
    humanizeIntensity?: number;
    dynamics?: 'crescendo' | 'decrescendo' | 'swell' | 'accent' | null;
  } = {}
): MelodyPattern {
  const {
    humanize = true,
    humanizeIntensity = 0.5,
    dynamics = null,
  } = options;

  let result = pattern;

  // ヒューマナイゼーションを適用
  if (humanize) {
    result = humanizeMelody(result, humanizeIntensity);
  }

  // ダイナミクスを適用
  if (dynamics) {
    result = applyDynamics(result, dynamics);
  }

  return result;
}
