import { categoryLabels, type ComponentMeta } from "@/lib/components-registry";

function MetricPill({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="rounded-2xl border p-4"
      style={{
        borderColor: "color-mix(in srgb, var(--color-primary) 16%, transparent)",
        background: "color-mix(in srgb, var(--color-surface) 90%, var(--color-secondary) 10%)",
      }}
    >
      <p
        className="text-[0.65rem] uppercase tracking-[0.28em]"
        style={{ color: "var(--color-accent)" }}
      >
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold" style={{ fontFamily: "var(--font-body)" }}>
        {value}
      </p>
    </div>
  );
}

export function PropertyBlueprintCard({ meta }: { meta: ComponentMeta }) {
  return (
    <main
      className="min-h-screen px-4 py-6 md:px-8 md:py-10"
      style={{
        background: "linear-gradient(135deg, #f7f7f4 0%, #efefeb 100%)",
        color: "var(--color-text)",
      }}
    >
      <section
        className="mx-auto flex max-w-6xl flex-col gap-6 rounded-4xl border p-6 shadow-[0_24px_80px_rgba(25,50,60,0.12)] md:p-10"
        style={{
          borderColor: "color-mix(in srgb, var(--color-primary) 18%, transparent)",
          background: "var(--color-surface)",
        }}
      >
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <p
              className="text-[0.7rem] uppercase tracking-[0.35em]"
              style={{ color: "var(--color-accent)" }}
            >
              {categoryLabels[meta.category]}・{meta.id}
            </p>
            <h1
              className="text-3xl font-semibold leading-tight md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              住まいの設計図
            </h1>
            <p
              className="max-w-2xl text-sm leading-7 text-(--color-text)/80 md:text-base"
              style={{ fontFamily: "var(--font-body)" }}
            >
              土地の強さと暮らしのやわらかさが重なる、長く愛される住まい。
              駅近の利便性と明るい採光を備え、静かな環境のなかで快適な日常を支えます。
            </p>
          </div>

          <div
            className="rounded-3xl border px-4 py-3"
            style={{
              borderColor: "color-mix(in srgb, var(--color-accent) 45%, transparent)",
              background: "linear-gradient(135deg, #ffffff 0%, #f4f2eb 100%)",
            }}
          >
            <p className="text-[0.65rem] uppercase tracking-[0.3em]" style={{ color: "var(--color-accent)" }}>
              物件ポイント
            </p>
            <p className="mt-2 text-sm font-semibold" style={{ fontFamily: "var(--font-body)" }}>
              駅徒歩2分・3面採光・収納計画完備
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div
            className="rounded-[28px] border p-6"
            style={{ borderColor: "color-mix(in srgb, var(--color-primary) 18%, transparent)", background: "#f7f7f4" }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.35em]" style={{ color: "var(--color-accent)" }}>
                  物件概要
                </p>
                <h2
                  className="mt-1 text-xl font-semibold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  3LDK / 84.5㎡ / 2階建
                </h2>
              </div>
              <div
                className="rounded-full border px-3 py-1 text-[0.7rem] uppercase tracking-[0.28em]"
                style={{
                  borderColor: "color-mix(in srgb, var(--color-accent) 35%, transparent)",
                  color: "var(--color-accent)",
                }}
              >
                内見予約受付中
              </div>
            </div>

            <div
              className="relative mt-5 overflow-hidden rounded-3xl border p-4"
              style={{ borderColor: "color-mix(in srgb, var(--color-primary) 18%, transparent)", background: "#fdf8ef" }}
            >
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, color-mix(in srgb, var(--color-accent) 12%, transparent) 1px, transparent 1px), linear-gradient(0deg, color-mix(in srgb, var(--color-accent) 12%, transparent) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <svg viewBox="0 0 320 220" className="relative h-full w-full" role="img" aria-label="Property blueprint illustration">
                <rect x="28" y="28" width="264" height="164" rx="18" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="6 6" />
                <line x1="28" y1="96" x2="292" y2="96" stroke="var(--color-accent)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="88" y1="28" x2="88" y2="192" stroke="var(--color-accent)" strokeWidth="2" strokeDasharray="4 4" />
                <rect x="110" y="54" width="92" height="56" rx="8" fill="none" stroke="var(--color-primary)" strokeWidth="2" />
                <rect x="208" y="54" width="56" height="86" rx="8" fill="none" stroke="var(--color-primary)" strokeWidth="2" />
                <rect x="110" y="118" width="154" height="54" rx="8" fill="none" stroke="var(--color-primary)" strokeWidth="2" />
                <circle cx="76" cy="154" r="14" fill="none" stroke="var(--color-accent)" strokeWidth="2" />
                <path d="M64 154h24" stroke="var(--color-accent)" strokeWidth="2" />
              </svg>
            </div>
          </div>

          <div className="space-y-4">
            <div
              className="rounded-3xl border p-6"
              style={{ borderColor: "color-mix(in srgb, var(--color-primary) 18%, transparent)", background: "#fcfcfa" }}
            >
              <p className="text-[0.65rem] uppercase tracking-[0.35em]" style={{ color: "var(--color-accent)" }}>
                魅力ポイント
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <MetricPill label="価格" value="8,200万円" />
                <MetricPill label="アクセス" value="駅徒歩2分" />
                <MetricPill label="方角" value="南東向き" />
                <MetricPill label="間取り" value="3LDK" />
              </div>
            </div>

            <div
              className="rounded-3xl border p-6"
              style={{ borderColor: "color-mix(in srgb, var(--color-primary) 18%, transparent)", background: "#f4f2ec" }}
            >
              <p className="text-[0.65rem] uppercase tracking-[0.35em]" style={{ color: "var(--color-accent)" }}>
                住まいのこだわり
              </p>
              <ul
                className="mt-4 space-y-3 text-sm leading-7"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <li>・駅徒歩2分の好立地で、朝夕の移動が快適です。</li>
                <li>・明るい南側の窓から自然光を十分に取り込み、開放感を演出します。</li>
                <li>・収納は生活動線に合わせて計画し、日常の使い勝手を重視しています。</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
