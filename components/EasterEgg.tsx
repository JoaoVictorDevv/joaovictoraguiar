"use client";
import { useEffect, useRef, useState } from "react";

// Easter egg "Beat Tape": o ® do nome (ou digitar "jva") abre um toca-discos
// em tela que toca "Agua". Fechando, a música segue num mini player no canto.
export default function EasterEgg() {
  const audio = useRef<HTMLAudioElement | null>(null);
  const dlg = useRef<HTMLDialogElement>(null);
  const [tocando, setTocando] = useState(false);
  const [achou, setAchou] = useState(false);

  const getAudio = () => {
    if (!audio.current) {
      audio.current = new Audio("/audio/agua.mp3");
      audio.current.addEventListener("ended", () => setTocando(false));
    }
    return audio.current;
  };
  const play = () => { getAudio().play(); setTocando(true); };
  const pause = () => { audio.current?.pause(); setTocando(false); };
  const alternar = () => (tocando ? pause() : play());

  const abrir = () => {
    setAchou(true);
    if (!dlg.current?.open) dlg.current?.showModal();
    play();
  };

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
        onClick={abrir}
        aria-label="Abrir a Beat Tape escondida"
        className="align-super text-[0.22em] leading-none transition-transform hover:rotate-[20deg] hover:scale-110"
      >
        ®
      </button>

      <dialog
        ref={dlg}
        aria-label="Beat Tape — toca-discos"
        onClick={(e) => e.target === dlg.current && dlg.current?.close()}
        className="m-auto w-[min(560px,calc(100vw-2rem))] border border-line bg-ink p-0 font-mono text-paper"
      >
        <div className="p-5 md:p-8">
          <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
            <div>
              <p className="text-[12px] uppercase tracking-[.12em] text-mute">Lado B · faixa escondida</p>
              <p className="display mt-2 text-5xl">Beat Tape</p>
            </div>
            <button onClick={() => dlg.current?.close()} className="border border-line px-3 py-2 text-[12px] uppercase tracking-[.12em] hover:border-paper">Esc ×</button>
          </div>

          <svg viewBox="0 0 300 220" className="mt-6 w-full" aria-hidden="true">
            <rect x="4" y="4" width="292" height="212" fill="#141414" stroke="#2a2a2a" />
            <circle cx="125" cy="112" r="92" fill="#0b0b0b" stroke="#2a2a2a" />
            <g className={`vinyl ${tocando ? "is-on" : ""}`}>
              <circle cx="125" cy="112" r="86" fill="#0e0e0e" />
              {[78, 70, 62, 54, 46].map((r) => <circle key={r} cx="125" cy="112" r={r} fill="none" stroke="#1f1f1f" />)}
              <circle cx="125" cy="112" r="28" fill="#e9e6df" />
              <text x="125" y="108" textAnchor="middle" fill="#0b0b0b" fontFamily="var(--font-anton)" fontSize="11">AGUA</text>
              <text x="125" y="122" textAnchor="middle" fill="#0b0b0b" fontFamily="var(--font-jbm)" fontSize="6">JVA · 90 BPM</text>
              <circle cx="125" cy="112" r="2.5" fill="#0b0b0b" />
            </g>
            <g className={`tonearm ${tocando ? "is-on" : ""}`}>
              <circle cx="262" cy="40" r="12" fill="#2a2a2a" stroke="#8a8780" />
              <path d="M262 40 L262 140 L222 168" stroke="#e9e6df" strokeWidth="3" fill="none" strokeLinecap="round" />
              <rect x="212" y="162" width="16" height="10" fill="#8a8780" transform="rotate(-35 220 167)" />
            </g>
            <text x="280" y="205" textAnchor="end" fill="#8a8780" fontFamily="var(--font-jbm)" fontSize="8">33⅓ RPM</text>
          </svg>

          <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-4 text-[12px] uppercase tracking-[.12em]">
            <span>01. Agua — JVA</span>
            <button onClick={alternar} className="link-u">{tocando ? "Pausar ■" : "Tocar ▶"}</button>
          </div>
        </div>
      </dialog>

      {achou && (
        <div role="status" className="fixed bottom-20 right-4 z-50 flex items-center gap-3 border border-line bg-ink px-3 py-2 font-mono text-[12px] uppercase tracking-[.12em] md:bottom-6">
          {tocando ? <span className="eq" aria-hidden="true"><span /><span /><span /></span> : <span aria-hidden="true">■</span>}
          <button onClick={() => dlg.current?.showModal()} className="link-u">{tocando ? "Tocando: Agua" : "Pausado: Agua"}</button>
          <button onClick={alternar} aria-label={tocando ? "Pausar" : "Tocar"}>{tocando ? "❚❚" : "▶"}</button>
        </div>
      )}
    </>
  );
}
