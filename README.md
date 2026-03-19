# LGTM Web App 🐱🖼️

「Looks Good To Me!」画像を作成・共有できる、React + TypeScript + Vite 製のWebアプリ

---

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript
- **Bundler**: Vite
- **Styling**: CSS Modules
- **State Management**: useState
- **Lint / Format**: ESLint

---

## ✨ 主な機能(仮)

- 画像アップロードまたはURL入力からLGTM画像を作成  
- 「LGTM」テキストのフォント・色・サイズ・位置をカスタマイズ  
- 生成画像をSNSシェア / ダウンロード可能  
- ローカル保存による作成履歴の表示

---

## 🚀 Getting Started

### 1. リポジトリをクローン

```bash
git clone https://github.com/pwpwcat/pj-lgtm.git
cd pj-lgtm
```

### 2. パッケージをインストール

```bash
npm i
```

### 3. 開発サーバーを起動

```bash
npm run dev
```

➡️ アプリは `http://localhost:5173` で確認できます

---

## 🧪 利用可能なスクリプト

| コマンド         | 内容                         |
|------------------|------------------------------|
| `dev`            | 開発サーバー起動             |
| `build`          | 本番ビルド                   |
| `preview`        | ビルド済みアプリの確認       |
| `lint`           | ESLint による構文チェック     |

---

## 💡 VSCode 拡張機能

- [Sass (.sass only)](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented)
  Sassファイルのシンタックスハイライト
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
  AIによるコーディング支援

---

## 📦 ディレクトリ構成
FSD：https://feature-sliced.design/
参考：https://zenn.dev/kyuki/articles/d736b0957e6336

```
├── src/                                 # アプリケーションのソースコード
│   ├── index.tsx                        # Reactアプリのエントリポイント（createRoot）
│   ├── vite-env.d.ts                    # Vite用の型定義

│   ├── app/                             # アプリの本体ロジックを集約
│   │   ├── App.tsx                      # ルーティング・レイアウト含むアプリ本体
│   │   ├── AppRoutes.tsx                # React Router のルート定義
│   │   └── global.sass                  # グローバルスタイル

│   ├── layout/                          # アプリ全体の構造を担うUI
│   │   ├── Header/                      # ヘッダー（全ページ共通）
│   │   │   ├── Header.tsx
│   │   │   ├── Header.module.sass
│   │   │   └── index.ts
│   │   ├── Footer/                      # フッター（全ページ共通）
│   │   │   ├── Footer.tsx
│   │   │   ├── Footer.module.sass
│   │   │   └── index.ts
│   │   └── RootLayout.tsx               # 共通レイアウト（Header/Footerなどをラップ）

│   ├── pages/                           # 各ページ（ルーティング単位）
│   │   ├── home/                        # `/`：トップページ
│   │   │   ├── index.tsx
│   │   │   └── index.module.sass
│   │   ├── about/                       # `/about`：概要ページなど
│   │   │   ├── index.tsx
│   │   │   └── index.module.sass

│   └── shared/                          # 再利用可能なUI群
│       ├── index.ts                     # UIコンポーネントのエクスポートまとめ
│       └── ui/
│           ├── Button/                  # 汎用ボタンコンポーネント
│           │   ├── Button.tsx
│           │   ├── Button.module.sass
│           │   └── index.ts
│           └── index.ts                 # UIコンポーネントの集約エントリ

│
├── assets/                              # 静的アセット（主にスタイル）
│   └── stylesheets/
│       ├── _index.sass                  # Sassのエントリポイント（@use用）
│       ├── _mixins.sass                 # 共通mixin
│       └── _variables.sass              # カラーパレットや余白など変数定義

├── index.html                           # ViteのエントリHTML（Reactアプリの起点）
├── vite.config.ts                       # Viteの設定ファイル
├── tsconfig.json                        # TypeScriptの共通設定
├── tsconfig.app.json                    # アプリ用の個別設定
├── tsconfig.node.json                   # Nodeスクリプト用の設定（Vite用など）
├── eslint.config.js                     # ESLint 設定
├── package.json                         # npm パッケージ設定
├── package-lock.json                    # npm パッケージのバージョンロック
└── README.md                            # プロジェクト説明ファイル
```
### 🚩 判断フロー

- ✅ ヘッダー/フッターなどの外枠？ → `layout/`
- ✅ ページそのもの？ → `pages/`
- ✅ 汎用UI？ → `shared/ui/`
- ✅ 状態管理や操作を含む？ → `features/`
- ❗ どれにも当てはまらない or 一時的なUI → ページ配下に仮置き or `widgets/`

---

## 📝 TODO / 今後の展望

- [ ] 何か書く

---

## 📄 ライセンス

MIT License

---