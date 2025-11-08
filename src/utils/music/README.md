# Music Generation Module

このディレクトリは、Web Audio APIを使用したプロシージャル音楽生成システムです。

## 設計思想

### モジュール分割の原則

1. **関心の分離**: 音楽の各要素（スタイル、パターン、コア機能）を独立したモジュールに分離
2. **スケーラビリティ**: 新しいスタイルやパターンを既存コードに影響を与えずに追加可能
3. **発見可能性**: 各ファイルは200-300行に制限し、特定の機能を素早く発見できる
4. **Index Aggregation Pattern**: 各ディレクトリの`index.ts`で公開APIを集約し、内部実装を隠蔽

## ディレクトリ構造

```
src/utils/music/
├── composer.ts          # 音楽セクション生成のメインロジック
├── engine.ts            # Web Audio API実装（音声再生エンジン）
│
├── core/                # 共通定義・ヘルパー
│   ├── constants.ts     # 音階、コード定義
│   └── helpers.ts       # 汎用ヘルパー関数
│
├── patterns/            # 音楽パターン定義
│   ├── index.ts         # パターンモジュールの公開API
│   ├── base/            # 基本パターン（ベース、アルペジオ、ドラム）
│   ├── melodies/        # メロディパターン・生成関数
│   │   ├── common.ts    # 基本メロディパターン
│   │   ├── generators.ts # メロディ生成関数
│   │   ├── humanize.ts  # マイクロバリエーション（ヒューマナイゼーション）
│   │   └── variations.ts # メロディ変奏技法（転調、反行形など）
│   ├── progressions/    # コード進行
│   └── famous/          # 有名な音楽パターン（ジャンル別）
│
└── styles/              # 音楽スタイル定義
    ├── index.ts         # スタイルモジュールの公開API（遷移マトリックス含む）
    ├── grand.ts         # 各スタイルファイル（11種類）
    ├── ambient.ts
    └── ...
```

## アルゴリズムの多様性機能

このシステムは、ワンパターンな音楽生成を防ぐため、複数の多様性向上アルゴリズムを実装しています。

### 1. 重み付きランダム選択（Weighted Random Selection）

**実装箇所**: `composer.ts`の`getMelodyGenerationWeights()`

メロディー生成方法（スケールベース、定型パターン、コードベース、既存パターン）の選択確率を動的に調整：
- **時間経過による変化**: 0-2分は定型パターン40%、10分以上はスケールベース35%
- **前回の選択回避**: 前回と同じ方法の確率を50%に削減
- **スタイル特性考慮**: クラシック系は定型パターン1.3倍、ジャズ系はコードベース1.4倍

### 2. スタイル遷移マトリックス（Style Transition Matrix）

**実装箇所**: `styles/index.ts`の`STYLE_TRANSITION_MATRIX`

11種類のスタイル間の遷移相性を110パターン定義し、音楽的に自然な流れを実現：
- **相性の良い遷移**: 壮大→オーケストラ（3.0）、アンビエント→ローファイ（2.5）
- **避けるべき遷移**: 壮大→退屈（0.3）、明るい→ダーク（0.5）

### 3. ダイナミックなスケール選択

**実装箇所**: `composer.ts`の`getAvailableScales()`

時間経過に応じてスケールを段階的に解禁：
- **0-5分**: 推奨スケール80% + ランダム1つ20%
- **5-15分**: 推奨スケール60% + 全16種類40%
- **15分以上**: 全スケールから自由に選択

### 4. マイクロバリエーション（Micro Variations）

**実装箇所**: `patterns/melodies/humanize.ts`

人間的な揺らぎとダイナミクスを追加：
- **ヒューマナイゼーション**:
  - 音高の微妙な変化（15%の確率で±1-2半音）
  - タイミングの揺らぎ（±5%）
  - 音長の揺らぎ（±10%）
  - ベロシティの揺らぎ（±15%）
- **ダイナミクス**: crescendo、decrescendo、swell、accentの4種類

### 5. メロディー動的変奏（Melody Variations）

**実装箇所**: `patterns/melodies/variations.ts`

6種類の音楽的変換技法を実装：
- **転調（Transpose）**: ±3半音の移調
- **リズム変奏（Rhythmic Variation）**: 0.75倍または1.5倍
- **オクターブ転位（Octave Displacement）**: ±12半音
- **反行形（Inversion）**: 音程の方向を反転
- **逆行形（Retrograde）**: 時間を逆転
- **逆行反行形（Retrograde Inversion）**: 組み合わせ

## モジュール設計パターン

### 1. Core Module（基盤レイヤー）

**責務**: 音楽理論の基本定義と汎用ヘルパー

```typescript
// constants.ts
export const NOTES = { C3: 48, ... };
export const SCALES = { major: [0, 2, 4, ...], ... };
export const CHORD_INTERVALS = { major: [0, 4, 7], ... };

// helpers.ts
export function getChordNotes(chord: Chord): number[] { ... }
export function getScaleNotes(root: number, scale: string): number[] { ... }
```

### 2. Patterns Module（パターンレイヤー）

**責務**: 再利用可能な音楽パターンの定義と生成

- **base/**: 楽器ごとの基本パターン配列（`BASS_PATTERNS`, `ARPEGGIO_PATTERNS`, `DRUM_PATTERNS`）
- **melodies/**: メロディパターン配列と動的生成関数
  - `common.ts`: 基本メロディパターンの定義
  - `generators.ts`: スケールベース、コードベースのメロディ生成関数
  - `humanize.ts`: ヒューマナイゼーションとダイナミクス適用関数
  - `variations.ts`: メロディ変奏技法（転調、反行形、逆行形など）
- **progressions/**: コード進行定義
- **famous/**: 有名な音楽パターン（ジャンル別に分割）
  - `classical.ts`: クラシック音楽パターン（モーツァルト・ロケット等）
  - `popular.ts`: ポピュラー音楽パターン
  - `jazz.ts`: ジャズパターン
  - `ethnic.ts`: 民族音楽パターン
  - `electronic.ts`: エレクトロニックパターン
  - `ambient.ts`: アンビエントパターン

**Index Aggregation**:
```typescript
// patterns/index.ts
export { CHORD_PROGRESSIONS } from "./progressions/common";
export { generateMusicalMelody } from "./melodies/generators";
export { addMicroVariations } from "./melodies/humanize";
export { applyRandomVariation } from "./melodies/variations";
export { createMozartRocket } from "./famous/classical";
// ...すべての公開APIを集約
```

### 3. Styles Module（スタイルレイヤー）

**責務**: 音楽スタイルの特性定義（各スタイル1ファイル）

各スタイルファイルの構造:
```typescript
import type { MusicStyle } from "@/types/music";
import { NOTES } from "../core/constants";
import { BASS_PATTERNS } from "../patterns/base/bass";
// ...必要なパターンをインポート

export const AMBIENT_STYLE: MusicStyle = {
  type: "ambient",
  name: "Ambient",
  progressions: [...],        // スタイル固有のコード進行
  melodyPatterns: [...],      // スタイル固有のメロディパターン
  bassPatterns: BASS_PATTERNS.filter(p => [...]), // 共通パターンから選択
  // ...
};
```

**Index Aggregation**:
```typescript
// styles/index.ts
export { GRAND_STYLE } from "./grand";
export { AMBIENT_STYLE } from "./ambient";
// ...

export const ALL_MUSIC_STYLES = [GRAND_STYLE, AMBIENT_STYLE, ...];

// スタイル遷移マトリックス（110パターン）
const STYLE_TRANSITION_MATRIX: Record<string, Record<string, number>> = {
  grand: { orchestral: 3.0, bright: 2.0, ... },
  ambient: { lofi: 2.5, dark: 2.0, ... },
  // ...
};

// 重み付きランダム選択でスタイル遷移
export function getRandomStyle(currentStyleType?: string): MusicStyle { ... }
```

## 拡張ガイドライン

### 新しいパターンを追加する場合

1. 該当する`patterns/`サブディレクトリのファイルに追加
2. 必要に応じて`patterns/index.ts`でエクスポート
3. スタイル定義から参照（`styles/`内のファイル）

### 新しいスタイルを追加する場合

1. `styles/`に新しいファイルを作成（例: `styles/trap.ts`）
2. 既存スタイルファイルを参考に`MusicStyle`オブジェクトを定義
3. `styles/index.ts`にインポート・エクスポートを追加
4. `ALL_MUSIC_STYLES`配列に追加

### 新しい有名パターンカテゴリを追加する場合

1. `patterns/famous/`に新しいファイルを作成（例: `hiphop.ts`）
2. パターン生成関数を定義
3. `patterns/index.ts`でエクスポート
4. `composer.ts`で必要に応じてインポート・使用

### スタイル遷移マトリックスを調整する場合

1. `styles/index.ts`の`STYLE_TRANSITION_MATRIX`を編集
2. 新しいスタイルを追加した場合、全スタイルからの遷移重みを定義
3. 相性値の目安: 3.0=非常に良い、2.0=良い、1.0=普通、0.5以下=避ける

### 新しい変奏技法を追加する場合

1. `patterns/melodies/variations.ts`に新しい関数を定義
2. `applyRandomVariation()`の選択肢に追加
3. 必要に応じて`patterns/index.ts`でエクスポート

## インポートパターン

### 外部からの使用

```typescript
// 他のファイルから使用する場合
import { getRandomStyle } from "@/utils/music/styles";
import { SCALES } from "@/utils/music/core/constants";
import { generateMusicalMelody } from "@/utils/music/patterns";
```

### 内部での使用

```typescript
// styles/ambient.ts から patterns を使用
import { BASS_PATTERNS } from "../patterns/base/bass";

// patterns/famous/classical.ts から core を使用
import { NOTES } from "../../core/constants";
```

## 型定義

すべての音楽関連の型は`@/types/music`で定義されています：
- `MusicStyle`, `MusicSection`
- `Chord`, `Note`, `Scale`
- `BassPattern`, `ArpeggioPattern`, `DrumPattern`
- `MelodyPattern`, `ChordProgression`

## パフォーマンス考慮事項

- パターン配列は起動時に一度だけ評価される
- `index.ts`によるTree Shakingの最適化
- 各スタイルは遅延評価されない（全てメモリに保持）
