"use client";
import { useEffect, useRef, useState } from "react";
import { projetos, type Projeto } from "@/content/pt";
import Collage from "@/components/Collage";

export default function Projects() {
  const [aberto, setAberto] = useState<Projeto | null>(null);
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const fromHash = () => {
      const p = projetos.find((x) => `#projeto-${x.id}` === window.location.hash);
      if (p) setAberto(p);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (aberto && !d.open) d.showModal();
    if (!aberto && d.open) d.close();
  }, [aberto]);

  const fechar = () => {
    setAberto(null);
    if (window.location.hash.startsWith("#projeto-")) history.replaceState(null, "", "#projetos");
  };

  return (
    <>
      <ul className="grid gap-px bg-line sm:grid-cols-2">
        {projetos.map((p, i) => (
          <li key={p.id} className="bg-ink" data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
            <button
              onClick={() => { setAberto(p); history.replaceState(null, "", `#projeto-${p.id}`); }}
              className="group block w-full p-5 text-left md:p-8"
              aria-haspopup="dialog"
            >
              <Collage p={p} i={i} />
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium">{p.nome}</p>
                  <p className="mt-1 text-xs text-mute">{p.resumo}</p>
                </div>
                <span className="arrow text-mute group-hover:text-paper" aria-hidden="true">↘</span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={ref}
        onClose={fechar}
        onClick={(e) => e.target === ref.current && fechar()}
        aria-labelledby="projeto-titulo"
        className="m-auto max-h-[90vh] w-[min(960px,calc(100vw-2rem))] overflow-y-auto border border-line bg-ink p-0 text-paper"
      >
        {aberto && (
          <article className="p-6 md:p-10">
            <div className="flex items-start justify-between gap-6 border-b border-line pb-6">
              <div>
                <p className="label text-mute">{aberto.ano} · {aberto.papel}</p>
                <h3 id="projeto-titulo" className="display mt-3 text-[clamp(2.5rem,7vw,5rem)]">{aberto.nome}</h3>
                <p className="mt-3 text-sm text-mute">{aberto.resumo}</p>
              </div>
              <button onClick={fechar} className="label border border-line px-3 py-2 hover:border-paper" aria-label="Fechar">Esc ×</button>
            </div>

            {aberto.numeros && (
              <dl className="grid grid-cols-2 gap-px bg-line md:grid-cols-4">
                {aberto.numeros.map((n) => (
                  <div key={n.rotulo} className="bg-ink py-6 pr-4">
                    <dt className="label order-2 text-mute">{n.rotulo}</dt>
                    <dd className="display text-5xl">{n.valor}</dd>
                  </div>
                ))}
              </dl>
            )}

            {aberto.etapas && (
              <ol className="grid gap-px border-y border-line bg-line md:grid-cols-4">
                {aberto.etapas.map((e, i) => (
                  <li key={e.titulo} className="bg-ink py-6 pr-5">
                    <p className="label">0{i + 1}. {e.titulo} →</p>
                    <p className="mt-3 text-sm leading-relaxed text-mute">{e.texto}</p>
                  </li>
                ))}
              </ol>
            )}

            {aberto.detalhes.length > 0 && (
              <ul className="mt-6 space-y-2 text-sm leading-relaxed">
                {aberto.detalhes.map((d) => <li key={d}>— {d}</li>)}
              </ul>
            )}

            <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
              <ul className="flex flex-wrap gap-2">
                {aberto.stack.map((s) => <li key={s} className="label border border-line px-2 py-1 text-mute">{s}</li>)}
              </ul>
              <div className="flex gap-6">
                {aberto.repo && <a href={aberto.repo} target="_blank" rel="noreferrer" className="label link-u">Repositório <span className="arrow">↗</span></a>}
                {aberto.demo && <a href={aberto.demo} target="_blank" rel="noreferrer" className="label link-u">Demo <span className="arrow">↗</span></a>}
              </div>
            </div>
          </article>
        )}
      </dialog>
    </>
  );
}
