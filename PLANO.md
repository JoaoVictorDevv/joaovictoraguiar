# Portfólio JVA — estado do projeto

Direção visual escolhida: **o mock do João** (`referencias/mock-joao.webp`) — preto e branco, foto P&B granulada com papel rasgado, Anton (títulos) + JetBrains Mono (resto), linhas finas `#2a2a2a`, sem cor de destaque. Refs de apoio: SNT2, Emil Ruder, AB/GD, Valcarcel, pôster diagonal. Brief original: `BRIEF-site-portfolio.md`.

## Como rodar
```
npm install
npm run dev      # http://localhost:3000
npm run build    # gera o site estático em /out
```

## Onde editar
- **Textos, projetos, experiência, habilidades, contato:** `content/pt.ts`
- **Foto do hero:** coloque em `public/fotos/` e preencha `fotoHero` em `content/pt.ts`
- **Currículos:** `public/curriculo/`
- **Música do easter egg:** `public/audio/agua.mp3`

## Feito
- Seções: Início, Projetos, Sobre (com Lado B), Experiência, Habilidades, Contato + rodapé
- Menu flutuante (aparece depois do hero; embaixo no celular) com seção ativa
- Cards de projeto que expandem em modal (Esc fecha, link direto `#projeto-<id>`)
- Revelação suave no scroll, hovers, globo girando, botão `[ ]` liga o grid
- Easter egg: clicar no **®** do nome (ou digitar `jva`) toca "Agua"
- `prefers-reduced-motion` respeitado

## Pendências
- [ ] Foto do hero (sua ou com licença livre)
- [ ] Prints/mockups dos projetos (hoje são capas tipográficas geradas)
- [ ] Imagem Open Graph
- [ ] YouTube / Instagram / X: mandar links se quiser no contato
- [x] Subir pro GitHub: https://github.com/JoaoVictorDevv/joaovictoraguiar
- [ ] Deploy na Vercel (importar o repo em vercel.com/new, nome do projeto `joaovictoraguiar`)
- [ ] Rodar Lighthouse (meta ≥ 90) e testar no celular
- [ ] Versão em inglês (`content/en.ts`) — depois
