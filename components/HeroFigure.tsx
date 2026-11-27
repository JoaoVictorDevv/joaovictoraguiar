import MaskArt from "@/components/MaskArt";

// Imagem do hero: a máscara de metal, centralizada no quadro.
export default function HeroFigure() {
  return (
    <figure className="group torn relative mx-auto aspect-[2/3] w-full max-w-md overflow-hidden bg-panel lg:aspect-auto lg:max-w-none">
      <div className="photo swap-in absolute inset-0 transition-transform duration-700 group-hover:-rotate-2">
        <MaskArt />
      </div>
      <figcaption className="label pointer-events-none absolute bottom-3 left-3 bg-ink/80 px-1 text-mute">Metal face</figcaption>
    </figure>
  );
}
