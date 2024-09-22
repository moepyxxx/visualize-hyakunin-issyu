import type { Metadata } from "next";
import "./globals.css";
import { NotoSerifJP } from "./fonts/NotoSerifJP";

export const metadata: Metadata = {
  title: "ビジュアル百人一首",
  description:
    "ビジュアル百人一首。大切にしていること・スキル・これまでの取り組みをまとめます。",
  robots: "noindex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${NotoSerifJP.className}`}>{children}</body>
    </html>
  );
}
