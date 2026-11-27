"use client";
import { useEffect, useRef, useState } from "react";

// Easter egg: o ® do nome é um botão de play escondido que toca "Agua".
// Também dá pra ativar digitando "jva" em qualquer lugar da página.
export default function EasterEgg() {
  const audio = useRef<HTMLAudioElement | null>(null);
  const [tocando, setTocando] = useState(false);
  const [achou, setAchou] = useState(false);

  const alternar = () => {
    if (!audio.current) {
      audio.current = new Audio("/audio/agua.mp3");
      audio.current.addEventListener("ended", () => setTocando(false));
    }
    setAchou(true);
    if (audio.current.paused) { audio.current.play(); setTocando(true); }
    else { audio.current.pause(); setTocando(false); }
  };

  useEffect(() => {
    let buf = "";
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).closest("input, textarea")) return;
      buf = (buf + e.key.toLowerCase()).slice(-3);
      if (buf === "jva") alternar();
    };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); audio.current?.pause(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <button
        onClick={alternar}
        aria-label={tocando ? "Pausar música" : "Tocar uma faixa escondida"}
        title={achou ? undefined : "?"}
        className="align-super text-[0.22em] leading-none transition-transform hover:rotate-[20deg] hover:scale-110"
      >
        ®
      </button>
      {achou && (
        <div role="status" className="fixed bottom-20 right-4 z-50 flex items-center gap-3 border border-line bg-ink px-3 py-2 font-mono text-[12px] uppercase tracking-[.12em] md:bottom-6">
          {tocando ? <span className="eq" aria-hidden="true"><span /><span /><span /></span> : <span aria-hidden="true">■</span>}
          <span>{tocando ? "Tocando: Agua — JVA" : "Pausado: Agua"}</span>
          <button onClick={alternar} className="link-u">{tocando ? "Pausar" : "Play"}</button>
        </div>
      )}
    </>
  );
}
