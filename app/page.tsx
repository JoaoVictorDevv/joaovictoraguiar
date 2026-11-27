import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Projects from "@/components/Projects";
import EasterEgg from "@/components/EasterEgg";
import HeroFigure from "@/components/HeroFigure";
import Wizard from "@/components/Wizard";
import { Marquee } from "@/components/Small";
import { site, contato, sobre, experiencia, habilidades } from "@/content/pt";

function Titulo({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4" data-reveal>
      <span className="label">{n}.</span>
      <h2 className="label text-mute">{children}</h2>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

const wrap = "mx-auto max-w-[1440px] px-5 md:px-10";

export default function Home() {
  return (
    <>
      <Nav />
      <Reveal />
      <main>
        {/* 01 · INÍCIO */}
        <section id="inicio" className={`${wrap} grid min-h-[calc(100svh-73px)] gap-10 py-10 lg:grid-cols-[1.6fr_1fr_.55fr] lg:gap-0 lg:py-16`}>
          <div className="flex flex-col justify-center lg:pr-10">
            <div className="flex items-center gap-4">
              <span className="label">01.</span>
              <span className="label text-mute">{site.nome}</span>
              <span className="h-px max-w-xs flex-1 bg-line" />
            </div>
            <h1 className="display mt-8 pt-[.14em] text-[clamp(3.6rem,10.5vw,10rem)] !leading-[.92]">
              João Victor<br />Aguiar<EasterEgg />
            </h1>
            <p className="label mt-8 text-sm font-light md:text-base">
              {site.papel.join("  •  ")}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-mute">{site.frase}</p>
            <div className="mt-10 flex flex-wrap gap-8">
              <a href="#projetos" className="label link-u pb-1"><span className="arrow">↘</span> Ver projetos</a>
              <a href={site.curriculo} download className="label link-u pb-1 text-mute hover:text-paper"><span className="arrow">↓</span> Currículo.pdf</a>
              <a href={site.resumeEn} download className="label link-u pb-1 text-mute hover:text-paper">Resume (EN)</a>
            </div>
          </div>

          <HeroFigure />

          <aside className="flex flex-row flex-wrap items-start justify-between gap-6 border-line text-sm lg:ml-8 lg:flex-col lg:justify-start lg:gap-12 lg:border-l lg:pl-8">
            <div className="label leading-relaxed">
              <p><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#34d399] align-middle" aria-hidden="true" />Disponível</p>
              <p className="mt-2 text-mute">Estágio · Júnior</p>
            </div>
            <Wizard />
            <ul className="label space-y-3 text-mute">
              {site.interesses.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </aside>
        </section>

        <Marquee itens={["React", "Next.js", "TypeScript", "Node.js", "SQL", "Dados", "Automação", "Excel"]} />

        {/* 02 · PROJETOS */}
        <section id="projetos" className="border-t border-line">
          <div className={`${wrap} py-16 md:py-24`}>
            <Titulo n="02">Projetos em destaque</Titulo>
            <p className="mt-6 max-w-lg text-sm text-mute" data-reveal>Clique num projeto para abrir o case completo.</p>
          </div>
          <div className="border-t border-line"><div className={wrap}><Projects /></div></div>
        </section>

        {/* 03 · SOBRE */}
        <section id="sobre" className="border-t border-line">
          <div className={`${wrap} grid gap-12 py-16 md:py-24 lg:grid-cols-[1fr_2fr]`}>
            <Titulo n="03">Sobre mim</Titulo>
            <div className="space-y-10">
              <p className="text-[clamp(1.25rem,2.4vw,2rem)] leading-snug" data-reveal>{sobre.texto}</p>
              <div className="grid gap-6 border-t border-line pt-8 md:grid-cols-[auto_1fr]" data-reveal>
                <p className="display text-5xl">Lado B</p>
                <p className="max-w-md text-sm leading-relaxed text-mute">{sobre.ladoB}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 04 · EXPERIÊNCIA */}
        <section id="experiencia" className="border-t border-line">
          <div className={`${wrap} py-16 md:py-24`}>
            <Titulo n="04">Experiência e formação</Titulo>
            <ol className="mt-12">
              {experiencia.map((x) => (
                <li key={x.cargo} className="grid gap-4 border-t border-line py-8 md:grid-cols-[180px_1fr_1.2fr] md:gap-10" data-reveal>
                  <p className="label text-mute">{x.periodo}</p>
                  <div>
                    <h3 className="text-base font-medium">{x.cargo}</h3>
                    <p className="mt-1 text-xs text-mute">{x.local}</p>
                  </div>
                  <ul className="space-y-2 text-sm leading-relaxed text-mute">
                    {x.itens.map((i) => <li key={i}>— {i}</li>)}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 05 · HABILIDADES */}
        <section id="habilidades" className="border-t border-line">
          <div className={`${wrap} py-16 md:py-24`}>
            <Titulo n="05">Habilidades</Titulo>
            <div className="mt-12 grid grid-cols-2 gap-px bg-line md:grid-cols-5">
              {habilidades.map((h) => (
                <div key={h.grupo} className="bg-ink py-6 pr-4 md:px-5" data-reveal>
                  <h3 className="label">{h.grupo}</h3>
                  <ul className="mt-5 space-y-2 text-sm text-mute">
                    {h.itens.map((i) => <li key={i} className="transition-colors hover:text-paper">{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 06 · CONTATO */}
        <Marquee itens={["Disponível para estágio e júnior", "Vamos conversar", "Full stack", "Dados e automação"]} />

        <section id="contato" className="border-t border-line">
          <div className={`${wrap} py-16 md:py-28`}>
            <Titulo n="06">Contato</Titulo>
            <a href={`mailto:${contato.email}`} className="display mt-10 block text-[clamp(3rem,9vw,8.5rem)] transition-opacity hover:opacity-70" data-reveal>
              Vamos trocar<br />uma ideia? <span className="arrow">↘</span>
            </a>
            <ul className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4" data-reveal>
              {[
                { l: "E-mail", v: contato.email, h: `mailto:${contato.email}` },
                { l: "WhatsApp", v: contato.whatsapp.label, h: contato.whatsapp.url },
                { l: "LinkedIn", v: "/in/joaovictoraguiardev", h: contato.linkedin },
                { l: "GitHub", v: "/JoaoVictorDevv", h: contato.github },
              ].map((c) => (
                <li key={c.l} className="bg-ink">
                  <a href={c.h} target={c.h.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group block py-6 pr-4 md:px-5">
                    <span className="label text-mute">{c.l}</span>
                    <span className="mt-2 block break-all text-sm group-hover:underline">{c.v} <span className="arrow">↗</span></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className={`${wrap} flex flex-col justify-between gap-2 py-8 pb-24 text-[11px] text-mute md:flex-row md:pb-8`}>
          <p>© 2026 — {site.nome}. Feito com Next.js.</p>
          <p>Psst: tem uma faixa escondida no site.</p>
        </div>
      </footer>
    </>
  );
}
