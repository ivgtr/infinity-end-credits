# Music Generation Module

このディレクトリは、Web Audio APIを使用したプロシージャル音楽生成システムです。

## 設計思想

### 基本原則

1. **関心の分離**: 音楽の各要素（スタイル、パターン、コア機能）を独立したモジュールに分離
2. **スケーラビリティ**: 新しいスタイルやパターンを既存コードに影響を与えずに追加可能
3. **発見可能性**: 各ファイルは200-300行に制限し、特定の機能を素早く発見できる
4. **Index Aggregation Pattern**: 各ディレクトリの`index.ts`で公開APIを集約し、内部実装を隠蔽

### 多様性向上の設計

ワンパターンな音楽を防ぐため、以下の手法を組み合わせています：

- **重み付き選択**: 時間経過・文脈・スタイル特性に応じて確率を動的調整
- **スタイル遷移マトリックス**: 音楽的に自然な流れを実現する相性定義
- **段階的解禁**: 再生時間に応じてスケールやパターンを拡張
- **マイクロバリエーション**: 人間的な揺らぎ（タイミング、音長、強弱）の付与
- **音楽的変奏**: 転調、反行形、逆行形などの作曲技法の適用

## アーキテクチャ

### ディレクトリ構造

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
│   ├── melodies/        # メロディパターン・生成・変奏
│   ├── progressions/    # コード進行
│   └── famous/          # 有名な音楽パターン（ジャンル別）
│
└── styles/              # 音楽スタイル定義
    ├── index.ts         # スタイルモジュールの公開API
    └── *.ts             # 各スタイルファイル
```

### 3層レイヤー構造

#### 1. Core Module（基盤レイヤー）

**責務**: 音楽理論の基本定義と汎用ヘルパー（音階定義、コード定義、計算関数）

#### 2. Patterns Module（パターンレイヤー）

**責務**: 再利用可能な音楽パターンの定義と生成（基本パターン、メロディ生成、変奏技法、有名パターン）

各ディレクトリの`index.ts`で公開APIを集約し、内部実装を隠蔽します。

#### 3. Styles Module（スタイルレイヤー）

**責務**: 音楽スタイルの特性定義（各スタイル1ファイル）

各スタイルは`MusicStyle`オブジェクトとして定義され、必要なパターンを組み合わせます。`styles/index.ts`は全スタイルを集約し、スタイル遷移マトリックスにより音楽的に自然な流れを実現します。

## 拡張ガイドライン

### 新しいパターンを追加

該当する`patterns/`サブディレクトリに追加し、`index.ts`でエクスポート。スタイル定義から参照します。

### 新しいスタイルを追加

`styles/`に新ファイルを作成し、`MusicStyle`オブジェクトを定義。`styles/index.ts`で集約し、`STYLE_TRANSITION_MATRIX`に遷移重みを定義します（相性値の目安: 3.0=非常に良い、2.0=良い、1.0=普通、0.5以下=避ける）。

### 新しい変奏・ジャンルパターンを追加

`patterns/melodies/variations.ts`または`patterns/famous/`に関数を追加し、必要に応じて`patterns/index.ts`でエクスポートします。

## 技術詳細

### インポートパターン

```typescript
// 外部から使用
import { getRandomStyle } from "@/utils/music/styles";
import { SCALES } from "@/utils/music/core/constants";
import { generateMusicalMelody } from "@/utils/music/patterns";

// 内部で使用（相対パス）
import { BASS_PATTERNS } from "../patterns/base/bass";
import { NOTES } from "../../core/constants";
```

### 型定義

音楽関連の型は`@/types/music`で定義：`MusicStyle`, `MusicSection`, `Chord`, `Note`, `MelodyPattern`など

### パフォーマンス

パターン配列は起動時に一度評価され、`index.ts`によるTree Shakingで最適化されます。
