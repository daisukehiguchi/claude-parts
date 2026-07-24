import { Zen_Old_Mincho, Noto_Sans_JP } from "next/font/google";
import { designSystems, tokensToCssVars } from "@/lib/design-tokens";

const zenOldMincho = Zen_Old_Mincho({
  variable: "--font-zen-old-mincho",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

const tokens = designSystems.realEstate;

export default function RealEstateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={tokensToCssVars(tokens) as React.CSSProperties}
      className={`${zenOldMincho.variable} ${notoSansJP.variable} min-h-screen`}
    >
      {children}
    </div>
  );
}
