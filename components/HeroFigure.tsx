"use client";
import { useState } from "react";
import MaskArt from "@/components/MaskArt";
import { resumo } from "@/content/pt";

// Imagem do hero: a máscara. Clicar vira o quadro como uma carta e mostra
// um resumo profissional; clicar de novo volta.
export default function HeroFigure() {
  const [virado, setVirado] = useState(false);
  return (
    <figure className="relative mx-auto aspect-[2/3] w-full max-w-md [perspective:1400px] lg:aspect-auto lg:max-w-none">
      <button
        onClick={(e) => { e.currentTarget.blur(); setVirado((v) => !v); }}
        aria-pressed={virado}
        aria-label={virado ? "Voltar para a máscara" : "Ver resumo"}
        className="group absolute inset-0 block cursor-pointer text-left"
      >
        <div className={`flip absolute inset-0 ${virado ? "is-flipped" : ""}`}>
          {/* frente */}
          <div className="face torn absolute inset-0 overflow-hidden bg-panel">
            <div className="photo swap-in absolute inset-0 transition-transform duration-700 group-hover:-rotate-2">
              <MaskArt />
            </div>
            <span className="label absolute bottom-3 left-3 bg-ink/80 px-1 text-mute">Metal face · clique</span>
          </div>
          {/* verso */}
          <div className="face face-back absolute inset-0 flex flex-col justify-between border border-line bg-ink p-6 md:p-8">
            <p className="label text-mute">Em resumo</p>
            <dl className="space-y-6">
              {resumo.map((r) => (
                <div key={r.rotulo} className="border-t border-line pt-4">
                  <dt className="display text-3xl md:text-4xl">{r.rotulo}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-mute">{r.texto}</dd>
                </div>
              ))}
            </dl>
            <span className="label text-mute">Clique para voltar ↻</span>
          </div>
        </div>
      </button>
    </figure>
  );
}
