import type { MusicStyle } from "@/types/music";
import { GRAND_STYLE } from "./grand";
import { MONOTONOUS_STYLE } from "./monotonous";
import { BRIGHT_STYLE } from "./bright";
import { DARK_STYLE } from "./dark";
import { AMBIENT_STYLE } from "./ambient";
import { JAZZY_STYLE } from "./jazzy";
import { RETRO_STYLE } from "./retro";
import { ELECTRONIC_STYLE } from "./electronic";
import { ORCHESTRAL_STYLE } from "./orchestral";
import { ETHNIC_STYLE } from "./ethnic";
import { LOFI_STYLE } from "./lofi";

/**
 * Export all individual styles
 */
export {
  GRAND_STYLE,
  MONOTONOUS_STYLE,
  BRIGHT_STYLE,
  DARK_STYLE,
  AMBIENT_STYLE,
  JAZZY_STYLE,
  RETRO_STYLE,
  ELECTRONIC_STYLE,
  ORCHESTRAL_STYLE,
  ETHNIC_STYLE,
  LOFI_STYLE,
};

/**
 * すべての音楽スタイル
 */
export const ALL_MUSIC_STYLES: MusicStyle[] = [
  GRAND_STYLE,
  MONOTONOUS_STYLE,
  BRIGHT_STYLE,
  DARK_STYLE,
  AMBIENT_STYLE,
  JAZZY_STYLE,
  RETRO_STYLE,
  ELECTRONIC_STYLE,
  ORCHESTRAL_STYLE,
  ETHNIC_STYLE,
  LOFI_STYLE,
];

/**
 * ランダムにスタイルを選択（現在のスタイルと異なるものを選択）
 */
export function getRandomStyle(currentStyleType?: string): MusicStyle {
  const availableStyles = currentStyleType
    ? ALL_MUSIC_STYLES.filter((s) => s.type !== currentStyleType)
    : ALL_MUSIC_STYLES;

  return availableStyles[Math.floor(Math.random() * availableStyles.length)]!;
}

/**
 * スタイルタイプから取得
 */
export function getStyleByType(type: string): MusicStyle | undefined {
  return ALL_MUSIC_STYLES.find((s) => s.type === type);
}
