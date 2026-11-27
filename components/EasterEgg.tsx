"use client";
import { useEffect, useRef, useState } from "react";

// Easter egg "Beat Tape": o ® do nome (ou digitar "jva") toca "Agua"
// num mini toca-discos no canto da tela, com o vinil girando.
export default function EasterEgg() {
  const audio = useRef<HTMLAudioElement | null>(null);
  const [tocando, setTocando] = useState(false);
  const [aberto, setAberto] = useState(false);

  const getAudio = () => {
    if (!audio.current) {
      audio.current = new Audio("/audio/agua.mp3");
      audio.current.addEventListener("ended", () => setTocando(false));
    }
    return audio.current;
  };
  const play = () => { getAudio().play(); setTocando(true); };
  const pause = () => { audio.current?.pause(); setTocando(false); };
  // Só dá play ao abrir; se já está aberto não mexe. Evita a música voltar
  // sozinha quando o ® fica com foco e a pessoa aperta Espaço pra rolar.
  const abertoRef = useRef(false);
  const abrir = () => {
    if (abertoRef.current) return;
    abertoRef.current = true;
    setAberto(true);
    play();
  };
  const fechar = () => { pause(); abertoRef.current = false; setAberto(false); };

  useEffect(() => {
    let buf = "";
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).closest("input, textarea")) return;
      buf = (buf + e.key.toLowerCase()).slice(-3);
      if (buf === "jva") abrir();
    };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); audio.current?.pause(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <button
        onClick={(e) => { e.currentTarget.blur(); abrir(); }}
        aria-label="Tocar a Beat Tape escondida"
        className="align-super text-[0.22em] leading-none transition-transform hover:rotate-[20deg] hover:scale-110"
      >
        ®
      </button>

      {aberto && (
        <div
          role="region"
          aria-label="Beat Tape tocando"
          className="beat-in fixed bottom-20 right-4 z-50 flex items-center gap-3 border border-line bg-ink py-2 pl-2 pr-3 font-mono text-[12px] uppercase tracking-[.12em] text-paper md:bottom-6"
        >
          <svg viewBox="0 0 60 60" className="h-14 w-14 shrink-0" aria-hidden="true">
            <g className={`mini-vinyl ${tocando ? "is-on" : ""}`}>
              <circle cx="30" cy="30" r="29" fill="#0e0e0e" stroke="#2a2a2a" />
              {[25, 21, 17].map((r) => <circle key={r} cx="30" cy="30" r={r} fill="none" stroke="#1f1f1f" />)}
              <circle cx="30" cy="30" r="10" fill="#e9e6df" />
              <rect x="25" y="27" width="10" height="2" fill="#0b0b0b" />
              <circle cx="30" cy="30" r="1.5" fill="#0b0b0b" />
            </g>
          </svg>
          <div className="leading-relaxed">
            <p className="text-mute">Beat Tape · Lado B</p>
            <p>01. Agua — JVA</p>
          </div>
          <button onClick={(e) => { e.currentTarget.blur(); if (tocando) pause(); else play(); }} aria-label={tocando ? "Pausar" : "Tocar"} className="ml-2 border border-line px-2 py-1 hover:border-paper">
            {tocando ? "❚❚" : "▶"}
          </button>
          <button onClick={fechar} aria-label="Fechar e parar a música" className="px-1 text-mute hover:text-paper">×</button>
        </div>
      )}
    </>
  );
}
