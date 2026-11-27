// Capas em colagem lambe-lambe: tela de exemplo (dados inventados) recortada,
// papel com o nome por cima e fita adesiva. Tudo em SVG, P&B.
import type { Projeto } from "@/content/pt";

const P = "#e9e6df", M = "#8a8780", L = "#2a2a2a", D = "#1f1f1f";

function Tela({ id }: { id: string }) {
  if (id === "cooperativa")
    return (
      <g>
        <rect width="220" height="140" fill={D} />
        <rect width="220" height="14" fill={L} />
        <rect x="6" y="5" width="40" height="4" fill={M} />
        <rect x="6" y="22" width="44" height="110" fill="#181818" />
        {[30, 42, 54, 66].map((y) => <rect key={y} x="10" y={y} width="34" height="4" fill={y === 30 ? P : L} />)}
        {[0, 1, 2].map((i) => <rect key={i} x={58 + i * 52} y="22" width="46" height="22" fill="#181818" stroke={L} />)}
        <text x="62" y="38" fill={P} fontFamily="var(--font-anton)" fontSize="11">198</text>
        <text x="114" y="38" fill={P} fontFamily="var(--font-anton)" fontSize="11">22</text>
        <text x="166" y="38" fill={P} fontFamily="var(--font-anton)" fontSize="11">R$</text>
        {[52, 62, 72, 82, 92, 102, 112, 122].map((y, i) => (
          <g key={y}>
            <rect x="58" y={y} width="154" height="1" fill={L} />
            <rect x="60" y={y + 3} width={30 + ((i * 17) % 40)} height="3" fill={M} />
            <rect x="180" y={y + 3} width="28" height="3" fill={i % 3 ? L : P} />
          </g>
        ))}
      </g>
    );
  if (id === "catalogo")
    return (
      <g>
        <rect width="220" height="140" fill={D} />
        <rect width="220" height="14" fill={L} />
        <rect x="180" y="3" width="34" height="8" fill={P} />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i} transform={`translate(${8 + (i % 3) * 70} ${22 + Math.floor(i / 3) * 58})`}>
            <rect width="62" height="38" fill="#181818" stroke={L} />
            <circle cx="31" cy="19" r="10" fill={L} />
            <rect y="42" width="40" height="3" fill={M} />
            <rect y="48" width="22" height="3" fill={P} />
          </g>
        ))}
      </g>
    );
  if (id === "thaixskill")
    return (
      <g>
        <rect width="220" height="140" fill="#141414" />
        {[30, 120].map((x, k) => (
          <g key={x} transform={`translate(${x} 6)`}>
            <rect width="70" height="128" rx="8" fill={D} stroke={L} />
            <rect x="8" y="12" width="36" height="5" fill={P} />
            {[28, 50, 72, 94].map((y, i) => (
              <g key={y}>
                <rect x="8" y={y} width="54" height="16" fill="#181818" stroke={L} />
                <rect x="12" y={y + 5} width={k ? 20 + i * 6 : 34 - i * 4} height="3" fill={M} />
              </g>
            ))}
            <circle cx="35" cy="120" r="5" fill={P} />
          </g>
        ))}
      </g>
    );
  return (
    <g>
      <rect width="220" height="140" fill="#0b0b0b" />
      <rect width="220" height="12" fill="#0b0b0b" stroke={L} />
      <text x="8" y="50" fill={P} fontFamily="var(--font-anton)" fontSize="30">JOÃO VICTOR</text>
      <text x="8" y="80" fill={P} fontFamily="var(--font-anton)" fontSize="30">AGUIAR</text>
      <rect x="150" y="20" width="62" height="110" fill="#181818" stroke={L} />
      <path d="M181 30 L185 80 H177Z" fill={M} />
      <rect x="8" y="96" width="90" height="3" fill={M} />
    </g>
  );
}

export default function Collage({ p, i }: { p: Projeto; i: number }) {
  const rot = [-3, 2.5, -2, 3][i % 4];
  return (
    <div className="relative aspect-[4/3] overflow-hidden border border-line bg-panel">
      <svg viewBox="0 0 300 225" className="photo absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern id={`g${i}`} width="3" height="3" patternUnits="userSpaceOnUse"><rect width="3" height="1" fill="#1a1a1a" /></pattern>
        </defs>
        <rect width="300" height="225" fill={`url(#g${i})`} />
        {/* tela recortada */}
        <g transform={`translate(30 22) rotate(${rot} 110 70)`}>
          <rect x="-4" y="-4" width="228" height="148" fill={P} />
          <Tela id={p.id} />
        </g>
        {/* papel com o nome */}
        <g transform={`translate(${i % 2 ? 24 : 120} 150) rotate(${-rot * 1.6})`}>
          <path d="M0 2 L8 0 L20 3 L40 0 L60 2 L80 0 L100 3 L130 1 L156 3 L156 56 L130 58 L90 55 L50 58 L20 55 L0 57Z" fill={P} />
          <text x="10" y="44" fill="#0b0b0b" fontFamily="var(--font-anton)" fontSize="34">{({ cooperativa: "PNAE", catalogo: "CATÁLOGO", thaixskill: "THAIX", portfolio: "JVA." } as Record<string, string>)[p.id] ?? p.nome.toUpperCase()}</text>
        </g>
        {/* fita adesiva */}
        <rect x="118" y="10" width="60" height="16" fill={P} opacity=".55" transform="rotate(-6 148 18)" />
        <rect x="246" y="150" width="44" height="14" fill={P} opacity=".45" transform="rotate(38 268 157)" />
      </svg>
      <span className="label absolute right-3 top-3 bg-ink px-1 text-mute">{String(i + 1).padStart(3, "0")}</span>
    </div>
  );
}
