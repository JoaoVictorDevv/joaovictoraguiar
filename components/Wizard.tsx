"use client";
import { useState } from "react";

// Easter egg do mago: clicar no globo faz um mago (desenho original, traço
// grosso) surgir no canto inferior esquerdo. Clicar nele some.
export default function Wizard() {
  const [on, setOn] = useState(false);
  return (
    <>
      <button onClick={(e) => { e.currentTarget.blur(); setOn((v) => !v); }} aria-label="Globo (tem um segredo)" className="text-paper">
        <svg viewBox="0 0 120 70" className="globe w-28" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth=".6">
          <g>
            {[0, 1, 2, 3].map((i) => <ellipse key={i} className="m" cx="60" cy="35" rx="58" ry="33" />)}
          </g>
          <ellipse cx="60" cy="35" rx="58" ry="33" />
          {[12, 23, 35, 47, 58].map((y) => <line key={y} x1="4" x2="116" y1={y} y2={y} />)}
        </svg>
      </button>

      {on && (
        <button onClick={() => setOn(false)} aria-label="Fechar o mago" className="wizard-in fixed bottom-20 left-4 z-50 w-36 border border-line bg-ink p-3 md:bottom-6 md:w-44">
          <svg viewBox="0 0 220 220" className="w-full" aria-hidden="true" fill="none" stroke="#e9e6df" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="0" y="0" width="220" height="220" fill="#0b0b0b" stroke="none" opacity=".001" />
            {/* chapéu */}
            <path d="M58 92 L104 28 L146 16 L168 30 L168 42" />
            <path d="M126 22 L118 58 L138 96" />
            <path d="M44 98 L176 116" />
            {/* rosto */}
            <path d="M76 112 L96 172 M154 122 L142 176" />
            <path d="M82 120 L104 126 M126 128 L146 124" />
            <path d="M90 134 L104 136 M126 138 L138 136" />
            <path d="M114 132 L110 150 L124 148" />
            <path d="M70 156 L160 162" />
            {/* barba */}
            <path d="M96 172 L102 196 L108 180 L114 208 L120 182 L128 200 L134 178 L142 176" />
            {/* cajado */}
            <circle cx="26" cy="72" r="13" />
            <path d="M26 86 L28 210" />
            <path d="M14 140 L38 138 L40 166 L16 168Z M16 150 L38 149 M16 158 L39 157" />
            {/* brilho */}
            <path className="twinkle" d="M190 150 L190 182 M174 166 L206 166 M180 156 L200 176 M200 156 L180 176" />
            <path className="twinkle" d="M186 60 L190 74 M196 84 L210 80" />
          </svg>
        </button>
      )}
    </>
  );
}
