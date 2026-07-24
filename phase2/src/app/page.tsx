import Link from "next/link";
import {
  componentsRegistry,
  categoryLabels,
  type ComponentStatus,
} from "@/lib/components-registry";
import type { Category } from "@/lib/design-tokens";

const statusLabel: Record<ComponentStatus, string> = {
  "not-started": "未着手",
  "in-progress": "着手中",
  done: "完成",
};

const categories: Category[] = ["realEstate", "school", "telecom"];

export default function Home() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-16">
      <header className="mb-12">
        <p className="text-xs tracking-[0.2em] uppercase opacity-50">
          ClaudeParts. — Phase 2
        </p>
        <h1 className="text-2xl font-bold mt-2">011 〜 020 コンポーネント一覧</h1>
        <p className="text-sm opacity-60 mt-2">
          Next.js (App Router) + Tailwind CSS。カテゴリごとに route group と
          デザイントークン（src/lib/design-tokens.ts）を分けています。
        </p>
      </header>

      {categories.map((category) => {
        const items = componentsRegistry.filter((c) => c.category === category);
        return (
          <section key={category} className="mb-10">
            <h2 className="text-sm font-semibold tracking-wide mb-3 opacity-70">
              {categoryLabels[category]}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/${item.id}`}
                    className="block rounded-xl border border-black/10 px-4 py-3 hover:border-black/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm">{item.id}</span>
                      <span className="text-xs opacity-50">
                        {statusLabel[item.status]}
                      </span>
                    </div>
                    <div className="text-sm mt-1 opacity-80">{item.title}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      <footer className="mt-16 text-xs opacity-40">
        リポジトリ: daisukehiguchi/claude-parts /phase2
      </footer>
    </main>
  );
}
