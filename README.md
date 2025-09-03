# サブスクLP - BtoB向けLP制作サービス

BtoB企業向けサブスクリプション型ランディングページ制作サービス「サブスクLP」の公式ランディングページです。

## 🚀 Live Demo

**本番サイト**: [https://subsclp.vercel.app](https://subsclp.vercel.app)

## 📋 プロジェクト概要

月額1万円から始められる、BtoB企業のためのLP制作サービスを紹介するランディングページです。企画から制作、運用・改善まで、すべてコミコミのサブスクリプション型サービスの魅力を伝えます。

### 🎯 主要機能

- **レスポンシブデザイン**: PC・タブレット・スマートフォン完全対応
- **BtoB向け王道デザイン**: 信頼感と分かりやすさを重視
- **法的コンプライアンス**: 利用規約、プライバシーポリシー、特定商取引法対応
- **お問い合わせフォーム**: プライバシーポリシー同意機能付き

## 🛠 技術スタック

- **React 19** + **TypeScript**
- **Vite** (ビルドツール)
- **Tailwind CSS** (スタイリング)
- **Vercel** (デプロイ・ホスティング)

## 🚀 クイックスタート

### 前提条件
- Node.js (最新LTS版推奨)

### インストールと起動

```bash
# リポジトリをクローン
git clone https://github.com/mokayamo/subsclp.git
cd subsclp

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで `http://localhost:5173` を開いてください。

### ビルドとプレビュー

```bash
# 本番用ビルド
npm run build

# ビルドをプレビュー
npm run preview
```

## 📁 プロジェクト構造

```
├── components/           # Reactコンポーネント
│   ├── Header.tsx       # ヘッダー（ロゴ + CTA）
│   ├── Hero.tsx         # ヒーローセクション
│   ├── Empathy.tsx      # 共感パート（お悩み）
│   ├── Features.tsx     # サービス特徴
│   ├── Benefits.tsx     # 導入メリット
│   ├── Conditions.tsx   # 契約条件
│   ├── Process.tsx      # 導入の流れ
│   ├── Trust.tsx        # 信頼・安心パート
│   ├── Closing.tsx      # クロージング（お問い合わせフォーム）
│   └── Footer.tsx       # フッター
├── public/              # 静的ファイル
│   ├── terms.html       # 利用規約
│   ├── privacy.html     # プライバシーポリシー
│   └── law.html         # 特定商取引法に基づく表示
├── App.tsx              # メインアプリケーション
├── index.html           # HTMLテンプレート
└── package.json         # パッケージ設定
```

## 🎨 デザイン仕様

### カラーパレット
- **メインカラー**: 青系統（#1e40af, #3b82f6）
- **サブカラー**: 白・グレー系統
- **アクセント**: オレンジ系統（CTAボタン）

### フォント
- **Noto Sans JP**: 日本語対応の可読性重視

## 📝 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🤝 貢献

プロジェクトへの貢献を歓迎します。Issue報告やPull Requestをお気軽にお送りください。

## 📞 お問い合わせ

プロジェクトに関するご質問は、[GitHub Issues](https://github.com/mokayamo/subsclp/issues)でお願いします。

---

**🤖 Generated with [Claude Code](https://claude.ai/code)**