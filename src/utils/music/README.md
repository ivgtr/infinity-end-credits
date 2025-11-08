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
│   ├── progressions/    # コード進行
│   └── famous/          # 有名な音楽パターン（ジャンル別）
│
└── styles/              # 音楽スタイル定義
    ├── index.ts         # スタイルモジュールの公開API
    ├── grand.ts         # 各スタイルファイル（11種類）
    ├── ambient.ts
    └── ...
```

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
- **progressions/**: コード進行定義
- **famous/**: 有名な音楽パターン（ジャンル別に分割）

**Index Aggregation**:
```typescript
// patterns/index.ts
export { CHORD_PROGRESSIONS } from "./progressions/common";
export { generateMusicalMelody } from "./melodies/generators";
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
export function getRandomStyle(): MusicStyle { ... }
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
