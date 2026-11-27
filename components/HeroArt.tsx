// Ilustração original: Catedral de Petrópolis + serra, em retícula P&B.
// Tudo vetorial (leve) — sem foto de terceiros.
export default function HeroArt() {
  const casas = [
    [20, 500, 34, 26], [58, 510, 28, 20], [92, 498, 30, 30], [300, 505, 36, 24], [340, 494, 30, 34],
    [8, 540, 40, 30], [52, 548, 36, 24], [310, 545, 44, 28], [358, 536, 34, 34],
  ];
  return (
    <svg viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" role="img" aria-label="Ilustração da Catedral de Petrópolis com a serra ao fundo">
      <defs>
        <pattern id="dots" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="2.5" cy="2.5" r="1.5" fill="#e9e6df" /></pattern>
        <pattern id="dotsS" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="2.5" cy="2.5" r=".9" fill="#e9e6df" /></pattern>
        <pattern id="lines" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="1.2" fill="#8a8780" /></pattern>
        <pattern id="linesF" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height=".8" fill="#5a5852" /></pattern>
        <radialGradient id="sky" cx="65%" cy="25%" r="80%"><stop offset="0" stopColor="#2a2a2a" /><stop offset="1" stopColor="#0b0b0b" /></radialGradient>
      </defs>
      <rect width="400" height="600" fill="url(#sky)" />
      {/* serra ao fundo */}
      <path d="M0 250 L40 205 L70 225 L110 160 L150 210 L190 175 L230 215 L275 150 L320 200 L360 175 L400 210 V600 H0Z" fill="url(#linesF)" />
      <path d="M0 320 L50 270 L95 300 L140 260 L180 300 L250 265 L300 300 L350 270 L400 300 V600 H0Z" fill="#0b0b0b" />
      <path d="M0 320 L50 270 L95 300 L140 260 L180 300 L250 265 L300 300 L350 270 L400 300 V600 H0Z" fill="url(#lines)" opacity=".7" />
      {/* nave lateral */}
      <path d="M70 450 L140 405 L140 520 L70 520Z" fill="url(#dotsS)" />
      <path d="M70 450 L140 405" stroke="#e9e6df" strokeWidth="1" />
      {/* fachada */}
      <path d="M140 400 L200 345 L260 400 V530 H140Z" fill="#0b0b0b" />
      <path d="M140 400 L200 345 L260 400 V530 H140Z" fill="url(#dots)" />
      {/* torre + flecha */}
      <rect x="180" y="250" width="40" height="110" fill="#0b0b0b" />
      <rect x="180" y="250" width="40" height="110" fill="url(#dots)" />
      <path d="M200 40 L214 252 H186Z" fill="url(#dots)" />
      <path d="M200 40 L214 252 H186Z" fill="none" stroke="#e9e6df" strokeWidth=".8" />
      <path d="M200 22 V44 M193 30 H207" stroke="#e9e6df" strokeWidth="1.5" />
      {/* pináculos */}
      {[176, 224, 136, 264].map((x, i) => (
        <path key={x} d={`M${x} ${i < 2 ? 262 : 400} l4 -${i < 2 ? 34 : 40} l4 ${i < 2 ? 34 : 40}Z`} transform={`translate(-4 0)`} fill="#e9e6df" />
      ))}
      {/* rosácea e portal */}
      <circle cx="200" cy="420" r="16" fill="#0b0b0b" stroke="#e9e6df" strokeWidth="1.2" />
      <circle cx="200" cy="420" r="7" fill="none" stroke="#e9e6df" strokeWidth=".8" />
      <path d="M186 530 V480 Q200 455 214 480 V530Z" fill="#0b0b0b" stroke="#e9e6df" strokeWidth="1" />
      <path d="M155 470 V445 Q162 432 169 445 V470Z M231 470 V445 Q238 432 245 445 V470Z" fill="#0b0b0b" stroke="#e9e6df" strokeWidth=".8" />
      {/* casario */}
      {casas.map(([x, y, w, h]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width={w} height={h} fill="#141414" stroke="#2a2a2a" />
          <path d={`M${x - 2} ${y} L${x + w / 2} ${y - 10} L${x + w + 2} ${y}Z`} fill="url(#dotsS)" />
        </g>
      ))}
      {/* rio */}
      <path d="M0 585 C120 570 260 600 400 580" stroke="#8a8780" strokeWidth="1" fill="none" />
      <path d="M0 595 C140 582 260 606 400 592" stroke="#2a2a2a" strokeWidth="1" fill="none" />
    </svg>
  );
}
