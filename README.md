# 無限エンドロール (Infinity End Credits)

エヴァンゲリオン風の無限にスクロールするエンドクレジットを生成するWebアプリケーションです。

## 特徴

- **無限スクロール**: 終わりのないエンドクレジットを自動生成
- **2つの表示モード**:
  - 自動スクロールモード (`/`) - アニメーションで自動的にスクロール
  - 手動スクロールモード (`/manual`) - ブラウザのネイティブスクロールを使用
- **インタラクティブな速度調整**: マウスホイールやタッチスワイプで速度を変更可能
- **本格的な制作スタッフ表記**: エヴァンゲリオンのエンドロールを参考にした役職テンプレート
- **日本語の架空の名前を自動生成**: faker-jsを使用した自然な日本語名

## 技術スタック

- **Next.js 14** (Pages Router)
- **TypeScript 5**
- **React 18**
- **Tailwind CSS 3**
- **@faker-js/faker** - 日本語名の生成

## セットアップ

### 必要要件

- Node.js 18.17以上

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/ivgtr/infinity-end-credits.git
cd infinity-end-credits

# 依存関係をインストール
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

### 本番ビルド

```bash
# ビルド
npm run build

# 本番サーバー起動
npm start
```

## 使い方

### 自動スクロールモード (`/`)

- エンドクレジットが自動的に上にスクロールします
- **マウスホイール**: 上に回すと速度アップ、下に回すと速度ダウン
- **タッチスワイプ**: 上にスワイプで速度アップ、下にスワイプで速度ダウン
- **クリック/タップ**: スクロール位置をリセット

### 手動スクロールモード (`/manual`)

- ブラウザのネイティブスクロールを使用
- 下にスクロールすると自動的に新しいコンテンツが読み込まれます

## プロジェクト構造

```
src/
├── pages/           # Next.js Pages Router
│   ├── index.tsx   # 自動スクロールモード
│   └── manual.tsx  # 手動スクロールモード
├── components/      # Reactコンポーネント
│   ├── CreaditsCanvas.tsx          # 自動モードのメインコンテナ
│   ├── ManualCreaditsCanvas.tsx    # 手動モードのメインコンテナ
│   ├── CreditsList.tsx             # 自動モードのリスト
│   ├── ManualCreaditsList.tsx      # 手動モードのリスト
│   ├── CreditsItem.tsx             # クレジット項目
│   ├── MouseActionObserver.tsx     # マウス操作の監視
│   └── SwipeActionObserver.tsx     # タッチ操作の監視
├── hooks/           # カスタムフック
│   ├── useCredits.ts  # クレジットの状態管理
│   └── useResize.ts   # ウィンドウリサイズ処理
├── utils/           # ユーティリティ関数
│   ├── generate.ts  # 架空の名前・IDの生成
│   ├── role.ts      # 役職テンプレート
│   └── object.ts    # オブジェクト操作ヘルパー
└── types/           # TypeScript型定義
    ├── credits.d.ts
    ├── role.d.ts
    └── staff.d.ts
```

## 開発

### コマンド

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動
npm start

# リンター実行
npm run lint
```

### アーキテクチャ

#### 無限スクロールの実装

両モードとも以下の仕組みで無限スクロールを実現しています:

1. スクロール位置を監視（`requestAnimationFrame`または`onScroll`）
2. コンテンツの底から1000px以内に達したら`addRandomWork()`をトリガー
3. 新しいクレジットをDOMに動的追加

#### アニメーションシステム（自動スクロールモード）

- `requestAnimationFrame`ループを使用
- パフォーマンスのため`transform: translateY()`でアニメーション
- マウス/タッチ操作で速度を動的調整

## ライセンス

MIT

## 作者

[@ivgtr](https://github.com/ivgtr)
