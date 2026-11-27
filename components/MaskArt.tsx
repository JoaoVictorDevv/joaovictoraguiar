// Máscara de metal em 3/4, estilo quadrinho P&B (desenho original).
// O desenho fica em public/arte/mascara.svg — também usado na imagem de preview.
export default function MaskArt() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/arte/mascara.svg" alt="Ilustração de uma máscara de metal em estilo quadrinho" className="absolute inset-0 h-full w-full object-cover" />
  );
}
