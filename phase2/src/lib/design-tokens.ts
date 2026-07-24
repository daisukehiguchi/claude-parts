/**
 * カテゴリ別デザインシステム定義
 *
 * ClaudeParts. の設計原則:「業種カテゴリが変わったらデザインシステムを全刷新する」
 * Phase1 (001〜010) では index.html + style.css で業種ごとに配色/フォント/モチーフを
 * 総入れ替えしていた。Phase2 では同じ考え方を Next.js の route group + CSS変数で再現する。
 *
 * - 1カテゴリ = 1 route group ( 例: src/app/(real-estate)/ )
 * - 1 route group の layout.tsx がこのファイルからトークンを読み込み、
 *   CSS変数として子要素に渡す
 * - 各 page.tsx は var(--color-primary) 等の CSS変数越しにスタイルを参照する
 *
 * 現時点では値は未確定（デザインは各カテゴリ着手時に決定する）。
 * ここを更新するだけで、そのカテゴリ配下の全ページに反映される。
 */

export type DesignTokens = {
  /** カテゴリ表示名（日本語） */
  label: string;
  colorPrimary: string;
  colorSecondary: string;
  colorAccent: string;
  colorSurface: string;
  colorText: string;
  /** 見出し用フォント（next/font で読み込んだ変数名 or フォールバック） */
  fontHeading: string;
  /** 本文用フォント */
  fontBody: string;
  /** デザインの方向性メモ（Phase1でいう「クラフトペーパー×設計図風」のようなコンセプト） */
  concept: string;
};

export type Category = "realEstate" | "school" | "telecom";

// TODO: 各カテゴリ着手時に、実際のデザイン検討を経て値を更新すること。
// 現状はニュートラルな仮値（プレースホルダー）。
export const designSystems: Record<Category, DesignTokens> = {
  realEstate: {
    label: "不動産",
    // モノクローム・エディトリアル。色で装飾せず、罫線と余白と明朝体の大きさで魅せる。
    colorPrimary: "#111111", // 見出し・強い罫線
    colorSecondary: "#dddddd", // 弱い罫線・補助線
    colorAccent: "#888888", // ラベル・キャプション
    colorSurface: "#ffffff",
    colorText: "#333333", // 本文
    fontHeading: "var(--font-zen-old-mincho)",
    fontBody: "var(--font-noto-sans-jp)",
    concept:
      "モノクローム・エディトリアル。装飾色を排し、1pxの罫線・余白・明朝体の大小で高級感を作る。ラベルは（011）不動産のようにナンバリング＋英字トラッキングで表示する。",
  },
  school: {
    label: "学校",
    colorPrimary: "#1a1a1a",
    colorSecondary: "#f5f5f4",
    colorAccent: "#4a6572",
    colorSurface: "#ffffff",
    colorText: "#171717",
    fontHeading: "inherit",
    fontBody: "inherit",
    concept: "TODO: 学校カテゴリのデザインコンセプト未確定",
  },
  telecom: {
    label: "通信業",
    colorPrimary: "#1a1a1a",
    colorSecondary: "#f5f5f4",
    colorAccent: "#2f6690",
    colorSurface: "#ffffff",
    colorText: "#171717",
    fontHeading: "inherit",
    fontBody: "inherit",
    concept: "TODO: 通信業カテゴリのデザインコンセプト未確定（018〜020、021はPhase3）",
  },
};

/** DesignTokens を CSSプロパティ(CSS変数)のオブジェクトに変換する */
export function tokensToCssVars(tokens: DesignTokens): Record<string, string> {
  return {
    "--color-primary": tokens.colorPrimary,
    "--color-secondary": tokens.colorSecondary,
    "--color-accent": tokens.colorAccent,
    "--color-surface": tokens.colorSurface,
    "--color-text": tokens.colorText,
    "--font-heading": tokens.fontHeading,
    "--font-body": tokens.fontBody,
  };
}
