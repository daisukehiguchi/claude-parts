import { categoryLabels, type ComponentMeta } from "@/lib/components-registry";

export function PlaceholderPage({ meta }: { meta: ComponentMeta }) {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div
        className="max-w-md text-center space-y-4 rounded-2xl border p-10"
        style={{
          borderColor: "var(--color-secondary)",
          background: "var(--color-surface)",
          color: "var(--color-text)",
        }}
      >
        <p
          className="text-xs tracking-[0.2em] uppercase opacity-60"
          style={{ color: "var(--color-accent)" }}
        >
          {categoryLabels[meta.category]} ・ {meta.id}
        </p>
        <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
          {meta.title}
        </h1>
        <p className="text-sm opacity-60" style={{ fontFamily: "var(--font-body)" }}>
          このコンポーネントは未着手です。design-tokens.ts で{categoryLabels[meta.category]}
          カテゴリのデザインを確定し、このページを本実装に差し替えてください。
        </p>
      </div>
    </main>
  );
}
