"use client";
import { useEffect, useState } from "react";
import { site } from "@/content/pt";

const secoes = [
  { id: "inicio", label: "Início" },
  { id: "projetos", label: "Projetos" },
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "habilidades", label: "Habilidades" },
  { id: "contato", label: "Contato" },
];

export default function Nav() {
  const [ativa, setAtiva] = useState("inicio");
  const [flutua, setFlutua] = useState(false);
  const [grid, setGrid] = useState(false);

  useEffect(() => {
    const onScroll = () => setFlutua(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setAtiva(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    secoes.forEach((s) => { const el = document.getElementById(s.id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  useEffect(() => { document.documentElement.dataset.grid = grid ? "on" : "off"; }, [grid]);

  return (
    <>
      <div className="grid-overlay" aria-hidden="true" />
      <header className="relative z-40 border-b border-line">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 md:px-10">
          <a href="#inicio" className="flex items-baseline gap-4">
            <span className="display text-2xl">{site.sigla}</span>
            <span className="label hidden text-mute sm:inline">/ Portfólio</span>
          </a>
          <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
            {secoes.slice(1, 4).concat(secoes[5]).map((s) => (
              <a key={s.id} href={`#${s.id}`} className={`label link-u ${ativa === s.id ? "text-paper" : "text-mute hover:text-paper"}`}>{s.label}</a>
            ))}
          </nav>
          <button
            onClick={() => setGrid((g) => !g)}
            aria-pressed={grid}
            aria-label="Mostrar grid de colunas"
            className="label border border-line px-2 py-1 text-mute hover:border-paper hover:text-paper"
          >
            [ {grid ? "×" : " "} ]
          </button>
        </div>
      </header>

      {/* menu flutuante: aparece depois do hero; embaixo no celular */}
      <nav
        aria-label="Seções"
        className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 md:bottom-auto md:top-4 ${flutua ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0 md:-translate-y-4"}`}
      >
        <ul className="flex gap-1 border border-line bg-ink/90 p-1 backdrop-blur-sm">
          {secoes.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={ativa === s.id ? "true" : undefined}
                className={`label block px-2.5 py-2 transition-colors ${ativa === s.id ? "bg-paper text-ink" : "text-mute hover:text-paper"}`}
              >
                <span className="md:hidden">0{i + 1}</span>
                <span className="hidden md:inline">{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
