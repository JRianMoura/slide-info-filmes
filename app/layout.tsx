import type { Metadata } from "next";
import { Righteous } from "next/font/google";
import "./globals.css";

const righteous = Righteous({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "ANTENADO | RIAN",
  description: "Criado por Judson Rian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={righteous.className}>{children}</body>
    </html>
  );
}
