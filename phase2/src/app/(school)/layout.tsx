import { designSystems, tokensToCssVars } from "@/lib/design-tokens";

const tokens = designSystems.school;

export default function SchoolLayout({
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
