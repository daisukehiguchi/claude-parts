import type { Category } from "./design-tokens";

export type ComponentStatus = "not-started" | "in-progress" | "done";

export type ComponentMeta = {
  id: string; // "011" 〜 "020"
  category: Category;
  /** コンポーネント名（着手時に確定） */
  title: string;
  status: ComponentStatus;
  /** 一覧ページでの短い説明（着手時に確定） */
  description?: string;
};

// Phase1 の割り当て（不動産009-012 / 学校013-017 / 通信業018-021）を踏襲。
// Phase2 の範囲は 011〜020。
export const componentsRegistry: ComponentMeta[] = [
  { id: "011", category: "realEstate", title: "(未着手)", status: "not-started" },
  { id: "012", category: "realEstate", title: "(未着手)", status: "not-started" },
  { id: "013", category: "school", title: "(未着手)", status: "not-started" },
  { id: "014", category: "school", title: "(未着手)", status: "not-started" },
  { id: "015", category: "school", title: "(未着手)", status: "not-started" },
  { id: "016", category: "school", title: "(未着手)", status: "not-started" },
  { id: "017", category: "school", title: "(未着手)", status: "not-started" },
  { id: "018", category: "telecom", title: "(未着手)", status: "not-started" },
  { id: "019", category: "telecom", title: "(未着手)", status: "not-started" },
  { id: "020", category: "telecom", title: "(未着手)", status: "not-started" },
];

export const categoryLabels: Record<Category, string> = {
  realEstate: "不動産",
  school: "学校",
  telecom: "通信業",
};

export const categoryPath: Record<Category, string> = {
  realEstate: "real-estate",
  school: "school",
  telecom: "telecom",
};
