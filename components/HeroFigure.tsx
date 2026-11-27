"use client";
import { useState } from "react";
import MaskArt from "@/components/MaskArt";
import HeroArt from "@/components/HeroArt";

// Imagem do hero: começa na máscara; clicar troca pela catedral (e volta).
export default function HeroFigure() {
  const [qual, setQual] = useState<"mascara" | "catedral">("mascara");
  const troca = () => setQual((q) => (q === "mascara" ? "catedral" : "mascara"));
  return (
    <figure className="group torn relative min-h-[320px] overflow-hidden bg-panel lg:min-h-0">
      <button onClick={troca} aria-label="Trocar a imagem" className="absolute inset-0 block cursor-pointer">
        <div key={qual} className="photo swap-in absolute inset-0">
          {qual === "mascara" ? <MaskArt /> : <HeroArt />}
        </div>
      </button>
      <figcaption className="label pointer-events-none absolute bottom-3 left-3 bg-ink/80 px-1 text-mute">
        {qual === "mascara" ? "Metal face" : "Catedral"} · clique ↻
      </figcaption>
    </figure>
  );
}
