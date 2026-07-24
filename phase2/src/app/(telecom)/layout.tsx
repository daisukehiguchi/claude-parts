import { designSystems, tokensToCssVars } from "@/lib/design-tokens";

const tokens = designSystems.telecom;

export default function TelecomLayout({
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
