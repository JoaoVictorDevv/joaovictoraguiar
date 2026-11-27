"use client";
import { useState } from "react";

// Easter egg do mago (desenho do João): clicar no globo faz o mago surgir
// no canto inferior esquerdo. Clicar nele some.
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/arte/mago.png" alt="" className="w-full invert mix-blend-screen" width={446} height={417} />
          <span className="mt-2 flex items-end justify-end gap-2 border-t border-line pt-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/arte/assinatura.svg" alt="Assinatura de João Victor Aguiar" className="h-10 w-auto" width={95} height={50} />
          </span>
        </button>
      )}
    </>
  );
}
