import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClaudeParts. Phase2",
  description: "ClaudeParts. Phase2（011〜020）— Next.js + Tailwind CSS",
};

// フォントはカテゴリ（route group）ごとに next/font で決定する方針のため、
// ルートレイアウトでは汎用フォントスタックのみを指定する。
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
