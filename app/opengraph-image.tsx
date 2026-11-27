import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// Imagem que aparece quando o link é compartilhado (WhatsApp, LinkedIn...).
// Gerada no build: nome em Anton + a máscara do hero, tudo P&B.
export const dynamic = "force-static";
export const alt = "João Victor Aguiar — Desenvolvedor full stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function fonte(familia: string, peso = 400): Promise<ArrayBuffer | null> {
  try {
    const css = await (await fetch(`https://fonts.googleapis.com/css2?family=${familia}:wght@${peso}`)).text();
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OgImage() {
  const [anton, mono] = await Promise.all([fonte("Anton"), fonte("JetBrains+Mono")]);
  const mascara = readFileSync(join(process.cwd(), "public/arte/mascara.svg")).toString("base64");
  const fonts = [
    ...(anton ? [{ name: "Anton", data: anton, weight: 400 as const }] : []),
    ...(mono ? [{ name: "Mono", data: mono, weight: 400 as const }] : []),
  ];

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0b0b0b", color: "#e9e6df" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "56px 0 56px 64px" }}>
          <div style={{ display: "flex", fontFamily: "Mono", fontSize: 22, letterSpacing: 4, color: "#8a8780" }}>01. PORTFÓLIO</div>
          <div style={{ display: "flex", flexDirection: "column", fontFamily: "Anton", fontSize: 150, lineHeight: 0.9, textTransform: "uppercase" }}>
            <span>João Victor</span>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <span>Aguiar</span>
              <span style={{ fontSize: 40, marginTop: 14, marginLeft: 6 }}>®</span>
            </div>
          </div>
          <div style={{ display: "flex", fontFamily: "Mono", fontSize: 20, letterSpacing: 2 }}>FULL STACK • DADOS E AUTOMAÇÃO</div>
        </div>
        <div style={{ width: 420, display: "flex", borderLeft: "2px solid #2a2a2a" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`data:image/svg+xml;base64,${mascara}`} width={420} height={630} style={{ objectFit: "cover" }} alt="" />
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
