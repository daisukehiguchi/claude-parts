export default function Component011Page() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16">
      <article
        className="w-full max-w-2xl border p-10 sm:p-14"
        style={{
          borderColor: "var(--color-primary)",
          background: "var(--color-surface)",
          color: "var(--color-text)",
        }}
      >
        {/* header */}
        <div
          className="flex items-baseline justify-between border-b pb-5 mb-9"
          style={{ borderColor: "var(--color-primary)" }}
        >
          <span
            className="text-[11px] tracking-[0.25em]"
            style={{ color: "var(--color-primary)" }}
          >
            （ 011 ）不動産
          </span>
          <span
            className="text-[11px] tracking-[0.15em]"
            style={{ color: "var(--color-accent)" }}
          >
            PROPERTY
          </span>
        </div>

        {/* headline */}
        <h1
          className="text-3xl sm:text-4xl leading-[1.5] tracking-wide mb-2"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
        >
          住まいの、
          <br />
          設計思想。
        </h1>
        <p
          className="text-[13px] leading-[1.9] max-w-md mt-5 mb-10 tracking-wide"
          style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)" }}
        >
          土地の強さと暮らしのやわらかさが重なる、長く愛される住まい。
          <br />
          駅近の利便性と明るい採光を備え、静かな環境が日常を支える。
        </p>

        {/* price / layout */}
        <div
          className="flex items-end justify-between border-t pt-7 mb-7"
          style={{ borderColor: "var(--color-secondary)" }}
        >
          <div>
            <p
              className="text-[10px] tracking-[0.2em] mb-1.5"
              style={{ color: "var(--color-accent)" }}
            >
              PRICE
            </p>
            <p
              className="text-3xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              8,200<span className="text-sm">万円</span>
            </p>
          </div>
          <div className="text-right">
            <p
              className="text-[10px] tracking-[0.2em] mb-1.5"
              style={{ color: "var(--color-accent)" }}
            >
              LAYOUT
            </p>
            <p className="text-lg" style={{ fontFamily: "var(--font-body)" }}>
              3LDK / 84.5㎡
            </p>
          </div>
        </div>

        {/* spec grid */}
        <div
          className="grid grid-cols-3 border-t"
          style={{ borderColor: "var(--color-primary)" }}
        >
          {[
            { label: "ACCESS", value: "駅徒歩2分" },
            { label: "DIRECTION", value: "南東向き" },
            { label: "STATUS", value: "内見予約受付中" },
          ].map((spec, i) => (
            <div
              key={spec.label}
              className={`py-4 ${i < 2 ? "border-r" : ""} ${i > 0 ? "pl-5" : ""}`}
              style={{ borderColor: "var(--color-secondary)" }}
            >
              <p
                className="text-[10px] tracking-[0.15em] mb-1.5"
                style={{ color: "var(--color-accent)" }}
              >
                {spec.label}
              </p>
              <p className="text-sm" style={{ fontFamily: "var(--font-body)" }}>
                {spec.value}
              </p>
            </div>
          ))}
        </div>

        {/* features */}
        <div
          className="mt-10 pt-6 border-t"
          style={{ borderColor: "var(--color-primary)" }}
        >
          <p
            className="text-[10px] tracking-[0.2em] mb-3.5"
            style={{ color: "var(--color-accent)" }}
          >
            FEATURES
          </p>
          <p
            className="text-[13px] leading-[2.1]"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}
          >
            駅徒歩2分の好立地で、朝夕の移動が快適。
            <br />
            明るい南側の窓から自然光を十分に取り込む設計。
            <br />
            収納は生活動線に合わせて計画し、日常の使い勝手を重視。
          </p>
        </div>
      </article>
    </main>
  );
}
