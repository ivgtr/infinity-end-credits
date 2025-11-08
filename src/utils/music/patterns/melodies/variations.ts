import type { MelodyPattern } from "@/types/music";

/**
 * メロディーパターンに変奏を加える
 * 音楽的な変換技法を使用して、同じパターンでも異なる印象を与える
 */

/**
 * 転調（Transposition）
 * メロディーを半音単位で上下に移動
 *
 * @param pattern 元のメロディーパターン
 * @param semitones 移動する半音数（±1-3半音）
 * @returns 転調されたメロディーパターン
 */
export function transpose(pattern: MelodyPattern, semitones?: number): MelodyPattern {
  const shift = semitones ?? (Math.floor(Math.random() * 7) - 3); // -3 to +3

  const newNotes = pattern.notes.map(note => ({
    ...note,
    pitch: note.pitch + shift,
  }));

  return {
    ...pattern,
    name: `${pattern.name} (Transposed ${shift > 0 ? '+' : ''}${shift})`,
    notes: newNotes,
  };
}

/**
 * リズム変奏（Rhythmic Variation）
 * 音符の長さとタイミングを変更（augmentation/diminution）
 *
 * @param pattern 元のメロディーパターン
 * @param factor 変化の倍率（0.5=半分、1.5=1.5倍、2.0=2倍）
 * @returns リズム変奏されたメロディーパターン
 */
export function rhythmicVariation(pattern: MelodyPattern, factor?: number): MelodyPattern {
  const multiplier = factor ?? (Math.random() > 0.5 ? 1.5 : 0.75);

  const newNotes = pattern.notes.map(note => ({
    ...note,
    duration: note.duration * multiplier,
    startTime: note.startTime * multiplier,
  }));

  return {
    ...pattern,
    name: `${pattern.name} (Rhythm x${multiplier})`,
    notes: newNotes,
  };
}

/**
 * オクターブ転位（Octave Displacement）
 * メロディーを1オクターブ上下に移動
 *
 * @param pattern 元のメロディーパターン
 * @param direction 方向（'up' or 'down'）
 * @returns オクターブ転位されたメロディーパターン
 */
export function octaveDisplacement(
  pattern: MelodyPattern,
  direction?: 'up' | 'down'
): MelodyPattern {
  const dir = direction ?? (Math.random() > 0.5 ? 'up' : 'down');
  const octaveShift = dir === 'up' ? 12 : -12;

  const newNotes = pattern.notes.map(note => ({
    ...note,
    pitch: note.pitch + octaveShift,
  }));

  return {
    ...pattern,
    name: `${pattern.name} (Octave ${dir})`,
    notes: newNotes,
  };
}

/**
 * 反行形（Inversion）
 * 音程の方向を反転（上がる音程を下がる音程に、下がる音程を上がる音程に）
 *
 * @param pattern 元のメロディーパターン
 * @returns 反行形のメロディーパターン
 */
export function inversion(pattern: MelodyPattern): MelodyPattern {
  if (pattern.notes.length === 0) return pattern;

  const centerPitch = pattern.notes[0]!.pitch;

  const newNotes = pattern.notes.map(note => {
    const interval = note.pitch - centerPitch;
    return {
      ...note,
      pitch: centerPitch - interval,
    };
  });

  return {
    ...pattern,
    name: `${pattern.name} (Inversion)`,
    notes: newNotes,
  };
}

/**
 * 逆行形（Retrograde）
 * メロディーを時間的に逆転
 *
 * @param pattern 元のメロディーパターン
 * @returns 逆行形のメロディーパターン
 */
export function retrograde(pattern: MelodyPattern): MelodyPattern {
  if (pattern.notes.length === 0) return pattern;

  const totalDuration =
    pattern.notes[pattern.notes.length - 1]!.startTime +
    pattern.notes[pattern.notes.length - 1]!.duration;

  const newNotes = pattern.notes.map(note => ({
    ...note,
    startTime: totalDuration - note.startTime - note.duration,
  }));

  // 時間順にソート
  newNotes.sort((a, b) => a.startTime - b.startTime);

  return {
    ...pattern,
    name: `${pattern.name} (Retrograde)`,
    notes: newNotes,
  };
}

/**
 * 逆行反行形（Retrograde Inversion）
 * 逆行形と反行形の組み合わせ
 *
 * @param pattern 元のメロディーパターン
 * @returns 逆行反行形のメロディーパターン
 */
export function retrogradeInversion(pattern: MelodyPattern): MelodyPattern {
  return retrograde(inversion(pattern));
}

/**
 * ランダムに変奏を適用
 * 複数の変奏技法からランダムに選択して適用
 *
 * @param pattern 元のメロディーパターン
 * @returns 変奏されたメロディーパターン
 */
export function applyRandomVariation(pattern: MelodyPattern): MelodyPattern {
  const variations = [
    () => transpose(pattern),
    () => rhythmicVariation(pattern),
    () => octaveDisplacement(pattern),
    () => inversion(pattern),
    () => retrograde(pattern),
    () => retrogradeInversion(pattern),
  ];

  const selectedVariation = variations[Math.floor(Math.random() * variations.length)];
  return selectedVariation!();
}

/**
 * 複数の変奏を組み合わせる
 * 2つの変奏技法をランダムに組み合わせて適用
 *
 * @param pattern 元のメロディーパターン
 * @returns 複合変奏されたメロディーパターン
 */
export function applyCompoundVariation(pattern: MelodyPattern): MelodyPattern {
  // 1つ目の変奏
  let result = applyRandomVariation(pattern);

  // 30%の確率で2つ目の変奏を追加
  if (Math.random() < 0.3) {
    result = applyRandomVariation(result);
  }

  return result;
}
