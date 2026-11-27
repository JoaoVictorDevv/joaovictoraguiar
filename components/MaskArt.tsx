// Ilustração original: máscara de metal (homenagem ao "metal face" do rap),
// desenhada do zero em estilo quadrinho P&B com retícula. Sem cópia de arte existente.
const INK = "#0b0b0b", METAL = "#d6d2c9";

export default function MaskArt() {
  const L = (d: string) => d;
  // metade esquerda; a direita é espelhada
  const partes = {
    testa: L("M122 215 C120 130 158 86 200 84 L200 215Z"),
    faixa: L("M104 205 L200 205 L200 248 L100 250Z"),
    bochecha: L("M100 250 L130 252 L134 294 L182 294 L180 332 L152 342 L114 324Z"),
    nariz: L("M184 248 L200 248 L200 334 L180 334Z"),
    barra: L("M152 342 L180 332 L178 472 Q166 494 153 472Z"),
    mandibula: L("M114 324 L152 342 L153 420 L126 384Z"),
  };
  const olho = "M130 252 L184 252 L182 294 L134 294Z";
  return (
    <svg viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" role="img" aria-label="Ilustração de uma máscara de metal em estilo quadrinho">
      <defs>
        <pattern id="mk-dots" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="2.5" cy="2.5" r="1.3" fill={INK} /></pattern>
        <pattern id="mk-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><rect width="6" height="1.6" fill="#8a8780" /></pattern>
        <radialGradient id="mk-bg" cx="50%" cy="40%" r="75%"><stop offset="0" stopColor="#262626" /><stop offset="1" stopColor={INK} /></radialGradient>
        <clipPath id="mk-dir"><rect x="200" y="0" width="200" height="600" /></clipPath>
        <g id="mk-meia">
          {Object.values(partes).map((d) => <path key={d} d={d} fill={METAL} stroke={INK} strokeWidth="3" strokeLinejoin="round" />)}
          <path d={olho} fill={INK} />
        </g>
      </defs>
      <rect width="400" height="600" fill="url(#mk-bg)" />
      {/* sombra hachurada */}
      <path d="M130 360 L300 330 L330 520 L170 540Z" fill="url(#mk-hatch)" opacity=".55" />
      <g transform="translate(0 20)">
        <use href="#mk-meia" />
        <use href="#mk-meia" transform="translate(400 0) scale(-1 1)" />
        {/* sombra em retícula no lado direito */}
        <g clipPath="url(#mk-dir)" opacity=".55">
          {Object.values(partes).map((d) => <path key={d} d={d} transform="translate(400 0) scale(-1 1)" fill="url(#mk-dots)" />)}
        </g>
        {/* brilhos de metal */}
        <path d="M150 150 C160 120 178 104 196 100" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M118 225 L176 223" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <path d="M160 360 L158 450" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <path d="M188 262 L190 320" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        {/* rebites */}
        {[[112, 228], [288, 228], [122, 300], [278, 300]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="3.5" fill={INK} />)}
      </g>
    </svg>
  );
}
