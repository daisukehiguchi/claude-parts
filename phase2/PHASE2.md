# ClaudeParts. Phase2 — 土台構成メモ

対象: 011〜020（ロードマップの Phase2 = Next.js + Vercel フェーズ）

## ディレクトリ構成

```
src/
  app/
    layout.tsx            # ルートレイアウト（html/body、フォント読込の器のみ）
    page.tsx               # トップページ：011〜020の一覧（カテゴリ別）
    globals.css             # Tailwind v4 の @import と共通リセット
    (real-estate)/          # 不動産カテゴリの route group
      layout.tsx            # design-tokens.ts の realEstate を CSS変数として適用
      011/page.tsx
      012/page.tsx
    (school)/                # 学校カテゴリ
      layout.tsx
      013/page.tsx 〜 017/page.tsx
    (telecom)/                # 通信業カテゴリ（018〜020。021はPhase3）
      layout.tsx
      018/page.tsx 〜 020/page.tsx
  components/
    shared/
      PlaceholderPage.tsx    # 未着手コンポーネントの共通プレースホルダー
  lib/
    design-tokens.ts          # カテゴリ別デザイントークン（色・フォント・コンセプト）
    components-registry.ts    # 011〜020のメタデータ（カテゴリ/タイトル/ステータス）
```

## 設計原則（Phase1からの引き継ぎ）

Phase1 の「業種カテゴリが変わったらデザインシステムを全刷新する」というルールを、
Next.js では **route group + CSS変数** で再現しています。

- 1カテゴリ = 1 route group（`(real-estate)` 等。URLには現れない）
- カテゴリの `layout.tsx` が `design-tokens.ts` からトークンを読み込み、
  `--color-primary` などの CSS変数として子要素に渡す
- 各ページは Tailwind のアービトラリ値（`style={{ color: "var(--color-accent)" }}` や
  `bg-[var(--color-surface)]`）でトークンを参照する
- **カテゴリを跨ぐ共通コンポーネントは極力作らない**（Phase1同様、業種ごとに再構築する前提）

## コンポーネント追加・着手の手順

1. `src/lib/design-tokens.ts` の該当カテゴリのトークン（色・フォント・concept）を確定させる
2. 必要であれば `next/font` でカテゴリ専用フォントを読み込み、layout.tsx に反映
3. `src/lib/components-registry.ts` の該当IDの `title` / `status` / `description` を更新
4. `src/app/(カテゴリ)/xxx/page.tsx` を `PlaceholderPage` から実装に差し替える
5. コンポーネント単位で `components/` サブフォルダを作り、Phase1の
   `index.html/style.css/script.js/README` に相当する構成（`page.tsx` + 個別コンポーネント +
   任意でそのカテゴリ内 README）を保つ

## 現在の割り当て（Phase1ロードマップより）

- 011, 012: 不動産（009〜010はPhase1で対応済み、011〜012がPhase2分）
- 013〜017: 学校
- 018〜020: 通信業（021はPhase3）

## デプロイ

Vercel想定。`npm run build` で確認後、GitHubリポジトリ `daisukehiguchi/claude-parts` の
`phase2/` ディレクトリとしてマージし、Vercelでそのディレクトリをルートに指定してデプロイする。

## 未確定・TODO

- 各カテゴリのデザイントークン（色・フォント・コンセプト）は仮値。着手時に決定する
- コンポーネント個別のREADME運用（Phase1同様にするか、カテゴリ単位にまとめるか）
- Phase1同様のGitHub投稿ハッシュタグ運用を続けるかどうか
