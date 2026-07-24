import { designSystems, tokensToCssVars } from "@/lib/design-tokens";

const tokens = designSystems.realEstate;

export default function RealEstateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={tokensToCssVars(tokens) as React.CSSProperties} className="min-h-screen">
      {children}
    </div>
  );
}
