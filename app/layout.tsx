import type { Metadata } from "next";
import { Anton, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton", display: "swap" });
const jbm = JetBrains_Mono({ weight: ["300", "400", "500"], subsets: ["latin"], variable: "--font-jbm", display: "swap" });

export const metadata: Metadata = {
  title: "João Victor Aguiar — Desenvolvedor full stack",
  description: "Portfólio de João Victor Aguiar: desenvolvimento web, dados e automação. Petrópolis – RJ.",
  openGraph: {
    title: "João Victor Aguiar — Desenvolvedor full stack",
    description: "Desenvolvimento web, dados e automação. Petrópolis – RJ.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${jbm.variable}`}>
      <body>{children}</body>
    </html>
  );
}
