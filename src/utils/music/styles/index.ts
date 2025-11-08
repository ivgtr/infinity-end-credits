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
 * スタイル遷移マトリックス
 * 各スタイルから別のスタイルへの遷移相性を数値で定義
 * 値が大きいほど相性が良く、そのスタイルへ遷移しやすい
 * 1.0 = 普通、2.0 = 相性が良い、3.0 = 非常に相性が良い、0.3-0.5 = 相性が悪い（避ける）
 */
const STYLE_TRANSITION_MATRIX: Record<string, Record<string, number>> = {
  grand: {
    orchestral: 3.0,  // 壮大 → オーケストラ（非常に相性良い）
    bright: 2.0,      // 壮大 → 明るい（盛り上がり継続）
    dark: 1.5,        // 壮大 → ダーク（ドラマチックな展開）
    ethnic: 1.2,      // 壮大 → エスニック（異国情緒）
    ambient: 1.0,     // 壮大 → アンビエント（落ち着く）
    jazzy: 0.8,       // 壮大 → ジャジー（やや合わない）
    electronic: 0.8,  // 壮大 → エレクトロニック（やや合わない）
    retro: 1.0,       // 壮大 → レトロ（普通）
    lofi: 0.7,        // 壮大 → ローファイ（落差が大きい）
    monotonous: 0.3,  // 壮大 → 退屈（最も合わない）
  },
  monotonous: {
    ambient: 2.5,     // 退屈 → アンビエント（静寂を保つ）
    lofi: 2.0,        // 退屈 → ローファイ（落ち着いた展開）
    dark: 1.5,        // 退屈 → ダーク（徐々に変化）
    jazzy: 1.0,       // 退屈 → ジャジー（ゆったり）
    ethnic: 1.2,      // 退屈 → エスニック（民族音楽の静けさ）
    orchestral: 0.8,  // 退屈 → オーケストラ（やや合わない）
    bright: 0.5,      // 退屈 → 明るい（落差大）
    electronic: 0.5,  // 退屈 → エレクトロニック（落差大）
    retro: 0.7,       // 退屈 → レトロ（やや合わない）
    grand: 0.3,       // 退屈 → 壮大（最も合わない）
  },
  bright: {
    retro: 2.5,       // 明るい → レトロ（80年代ポップ的相性）
    electronic: 2.0,  // 明るい → エレクトロニック（明るいEDM）
    jazzy: 1.8,       // 明るい → ジャジー（明るいジャズ）
    grand: 1.5,       // 明るい → 壮大（盛り上がり）
    orchestral: 1.3,  // 明るい → オーケストラ（華やか）
    lofi: 1.2,        // 明るい → ローファイ（落ち着く）
    ethnic: 1.0,      // 明るい → エスニック（普通）
    ambient: 0.8,     // 明るい → アンビエント（やや合わない）
    dark: 0.5,        // 明るい → ダーク（対照的）
    monotonous: 0.3,  // 明るい → 退屈（合わない）
  },
  dark: {
    ambient: 2.5,     // ダーク → アンビエント（暗い雰囲気継続）
    electronic: 2.0,  // ダーク → エレクトロニック（ダークEDM）
    grand: 1.8,       // ダーク → 壮大（ドラマチック）
    ethnic: 1.5,      // ダーク → エスニック（ミステリアス）
    lofi: 1.3,        // ダーク → ローファイ（落ち着いた暗さ）
    orchestral: 1.2,  // ダーク → オーケストラ（重厚）
    jazzy: 1.0,       // ダーク → ジャジー（ダークジャズ）
    retro: 0.8,       // ダーク → レトロ（やや合わない）
    monotonous: 0.7,  // ダーク → 退屈（やや合わない）
    bright: 0.4,      // ダーク → 明るい（対照的、避ける）
  },
  ambient: {
    lofi: 2.5,        // アンビエント → ローファイ（非常に相性良い）
    dark: 2.0,        // アンビエント → ダーク（静かで暗い）
    ethnic: 1.8,      // アンビエント → エスニック（瞑想的）
    electronic: 1.5,  // アンビエント → エレクトロニック（アンビエントテクノ）
    monotonous: 1.3,  // アンビエント → 退屈（静寂継続）
    orchestral: 1.0,  // アンビエント → オーケストラ（普通）
    jazzy: 0.9,       // アンビエント → ジャジー（やや合わない）
    grand: 0.8,       // アンビエント → 壮大（やや合わない）
    retro: 0.7,       // アンビエント → レトロ（やや合わない）
    bright: 0.5,      // アンビエント → 明るい（対照的）
  },
  jazzy: {
    lofi: 2.5,        // ジャジー → ローファイ（ジャズホップ的相性）
    retro: 2.0,       // ジャジー → レトロ（ジャズファンク）
    bright: 1.8,      // ジャジー → 明るい（明るいジャズ）
    orchestral: 1.5,  // ジャジー → オーケストラ（ビッグバンド）
    ethnic: 1.3,      // ジャジー → エスニック（ワールドジャズ）
    dark: 1.2,        // ジャジー → ダーク（ダークジャズ）
    electronic: 1.0,  // ジャジー → エレクトロニック（エレクトロスウィング）
    ambient: 0.9,     // ジャジー → アンビエント（やや合わない）
    grand: 0.8,       // ジャジー → 壮大（やや合わない）
    monotonous: 0.5,  // ジャジー → 退屈（合わない）
  },
  retro: {
    electronic: 2.5,  // レトロ → エレクトロニック（シンセウェーブ的相性）
    bright: 2.0,      // レトロ → 明るい（80年代ポップ）
    jazzy: 1.8,       // レトロ → ジャジー（80年代ジャズファンク）
    lofi: 1.5,        // レトロ → ローファイ（ヴィンテージ）
    grand: 1.2,       // レトロ → 壮大（80年代ロック）
    orchestral: 1.0,  // レトロ → オーケストラ（普通）
    dark: 0.9,        // レトロ → ダーク（やや合わない）
    ethnic: 0.8,      // レトロ → エスニック（やや合わない）
    ambient: 0.7,     // レトロ → アンビエント（やや合わない）
    monotonous: 0.4,  // レトロ → 退屈（合わない）
  },
  electronic: {
    retro: 2.5,       // エレクトロニック → レトロ（シンセウェーブ）
    bright: 2.0,      // エレクトロニック → 明るい（明るいEDM）
    ambient: 1.8,     // エレクトロニック → アンビエント（アンビエントテクノ）
    lofi: 1.5,        // エレクトロニック → ローファイ（チルステップ）
    dark: 1.3,        // エレクトロニック → ダーク（ダークEDM）
    jazzy: 1.0,       // エレクトロニック → ジャジー（エレクトロスウィング）
    grand: 0.9,       // エレクトロニック → 壮大（やや合わない）
    ethnic: 0.8,      // エレクトロニック → エスニック（やや合わない）
    orchestral: 0.7,  // エレクトロニック → オーケストラ（やや合わない）
    monotonous: 0.5,  // エレクトロニック → 退屈（合わない）
  },
  orchestral: {
    grand: 3.0,       // オーケストラ → 壮大（非常に相性良い）
    dark: 2.0,        // オーケストラ → ダーク（重厚な展開）
    bright: 1.8,      // オーケストラ → 明るい（華やかな展開）
    jazzy: 1.5,       // オーケストラ → ジャジー（ビッグバンド）
    ethnic: 1.3,      // オーケストラ → エスニック（民族楽器との融合）
    ambient: 1.0,     // オーケストラ → アンビエント（普通）
    retro: 0.9,       // オーケストラ → レトロ（やや合わない）
    lofi: 0.8,        // オーケストラ → ローファイ（やや合わない）
    electronic: 0.7,  // オーケストラ → エレクトロニック（やや合わない）
    monotonous: 0.4,  // オーケストラ → 退屈（合わない）
  },
  ethnic: {
    ambient: 2.5,     // エスニック → アンビエント（瞑想的相性）
    jazzy: 2.0,       // エスニック → ジャジー（ワールドジャズ）
    lofi: 1.8,        // エスニック → ローファイ（チル）
    dark: 1.5,        // エスニック → ダーク（ミステリアス）
    orchestral: 1.3,  // エスニック → オーケストラ（民族楽器との融合）
    grand: 1.2,       // エスニック → 壮大（異国情緒）
    electronic: 1.0,  // エスニック → エレクトロニック（エスニックEDM）
    bright: 0.9,      // エスニック → 明るい（やや合わない）
    retro: 0.7,       // エスニック → レトロ（やや合わない）
    monotonous: 0.6,  // エスニック → 退屈（やや合わない）
  },
  lofi: {
    ambient: 2.5,     // ローファイ → アンビエント（非常に相性良い）
    jazzy: 2.0,       // ローファイ → ジャジー（ジャズホップ）
    ethnic: 1.8,      // ローファイ → エスニック（チル）
    dark: 1.5,        // ローファイ → ダーク（落ち着いた暗さ）
    electronic: 1.3,  // ローファイ → エレクトロニック（チルステップ）
    retro: 1.2,       // ローファイ → レトロ（ヴィンテージ）
    monotonous: 1.0,  // ローファイ → 退屈（普通）
    bright: 0.8,      // ローファイ → 明るい（やや合わない）
    orchestral: 0.7,  // ローファイ → オーケストラ（やや合わない）
    grand: 0.5,       // ローファイ → 壮大（合わない）
  },
};

/**
 * ランダムにスタイルを選択（現在のスタイルと異なるものを選択）
 * スタイル遷移マトリックスを使用して、音楽的に自然な遷移を実現
 */
export function getRandomStyle(currentStyleType?: string): MusicStyle {
  // 現在のスタイルがない場合は完全ランダム
  if (!currentStyleType) {
    return ALL_MUSIC_STYLES[Math.floor(Math.random() * ALL_MUSIC_STYLES.length)]!;
  }

  // 現在のスタイルと異なるスタイルのみを対象
  const availableStyles = ALL_MUSIC_STYLES.filter((s) => s.type !== currentStyleType);

  // 遷移マトリックスから重みを取得
  const transitionWeights = STYLE_TRANSITION_MATRIX[currentStyleType] || {};

  // 各スタイルに重みを割り当て
  const weightedStyles = availableStyles.map(style => ({
    style,
    weight: transitionWeights[style.type] || 1.0, // デフォルトは1.0
  }));

  // 重み付きランダム選択
  const totalWeight = weightedStyles.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;

  for (const { style, weight } of weightedStyles) {
    random -= weight;
    if (random <= 0) {
      return style;
    }
  }

  // フォールバック（通常は到達しない）
  return availableStyles[0]!;
}

/**
 * スタイルタイプから取得
 */
export function getStyleByType(type: string): MusicStyle | undefined {
  return ALL_MUSIC_STYLES.find((s) => s.type === type);
}
