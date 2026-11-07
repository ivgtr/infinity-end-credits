# 無限エンドクレジット (Infinity End Credits)

🎬 無限にエンドクレジットを生成します
https://infinity-end-credits.vercel.app/

## セットアップ

### 必要要件

- Node.js 24推奨（20.19以降の20系、22.13以降の22系にも対応）
- npm 10以上

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/ivgtr/infinity-end-credits.git
cd infinity-end-credits

# 依存関係をインストール
npm ci
```

開発依存の minimatch 脆弱性への暫定対応として、ESLint関連の一部依存だけを互換アダプター経由で修正版に置き換えています。依存更新時は `npm run test:compat` と `npm audit` を実行し、上流が対応したらアダプターと個別 overrides を取り除いてください。`.npmrc` の `install-links` はこの構成の `npm ci` に必要です。

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

## ライセンス

MIT

## 作者

[@ivgtr](https://github.com/ivgtr)
