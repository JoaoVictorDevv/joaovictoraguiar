"use client";
import { useEffect, useState } from "react";

// Hora atual (horário de Brasília), pequena, atualiza a cada 30s.
export function Clock() {
  const [hora, setHora] = useState("");
  useEffect(() => {
    const fmt = () => new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: "America/Sao_Paulo" });
    setHora(fmt());
    const t = setInterval(() => setHora(fmt()), 30000);
    return () => clearInterval(t);
  }, []);
  return <span className="text-[11px] tabular-nums tracking-[.12em] text-mute" suppressHydrationWarning>{hora}</span>;
}

// Faixa com texto correndo devagar (para com "reduzir movimento").
export function Marquee({ itens }: { itens: string[] }) {
  const linha = itens.map((t) => `${t}  •  `).join("");
  return (
    <div className="overflow-hidden border-y border-line py-3" aria-hidden="true">
      <div className="marquee flex w-max whitespace-pre text-[12px] uppercase tracking-[.2em] text-mute">
        <span>{linha.repeat(3)}</span>
        <span>{linha.repeat(3)}</span>
      </div>
    </div>
  );
}

// Conta de 0 até o número (ex.: "~200" -> 0…200). Texto sem número fica igual.
export function CountUp({ valor }: { valor: string }) {
  const m = valor.match(/^(\D*)(\d+)(.*)$/);
  const alvo = m ? Number(m[2]) : 0;
  const [n, setN] = useState(alvo > 1 ? 0 : alvo);
  useEffect(() => {
    if (!m || alvo <= 1 || matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(alvo); return; }
    let raf = 0; const t0 = performance.now(), dur = 1100;
    const passo = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      setN(Math.round(alvo * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(passo);
    };
    raf = requestAnimationFrame(passo);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valor]);
  if (!m) return <>{valor}</>;
  return <span className="tabular-nums">{m[1]}{n}{m[3]}</span>;
}
