// Todo o texto do site fica aqui. Edite este arquivo sem mexer no layout.
// Para uma versão em inglês no futuro: copie para content/en.ts e traduza.

export const site = {
  nome: "João Victor Aguiar",
  sigla: "JV.",
  papel: ["Desenvolvedor full stack", "Dados e automação", "Música"],
  frase: "Construo sistemas que rodam no mundo real.",
  cidade: "Petrópolis – RJ, BR",
  coords: ["22.5050° S", "43.1789° W"],
  interesses: ["Dev", "Dados", "Música", "Games", "Arte"],
  // Troque pelo caminho da sua foto em /public (ex.: "/fotos/hero.jpg"). Vazio = placeholder.
  fotoHero: "",
  curriculo: "/curriculo/curriculo-joao-victor-aguiar.pdf",
  resumeEn: "/curriculo/resume-joao-victor-aguiar-en.pdf",
};

export const contato = {
  email: "joaovictoraguiardev@gmail.com",
  whatsapp: { label: "(24) 98836-5868", url: "https://wa.me/5524988365868" },
  linkedin: "https://linkedin.com/in/joaovictoraguiardev",
  github: "https://github.com/JoaoVictorDevv",
};

export type Projeto = {
  id: string;
  nome: string;
  resumo: string;
  ano: string;
  stack: string[];
  papel: string;
  repo?: string;
  demo?: string;
  numeros?: { valor: string; rotulo: string }[];
  etapas?: { titulo: string; texto: string }[];
  detalhes: string[];
};

export const projetos: Projeto[] = [
  {
    id: "cooperativa",
    nome: "Cooperativa PNAE",
    resumo: "Sistema de gestão da merenda escolar para produtores rurais",
    ano: "2026",
    stack: ["Next.js", "React", "TypeScript", "Node.js", "ExcelJS", "Zod", "Vitest"],
    papel: "Idealização, desenvolvimento e operação",
    repo: "https://github.com/JoaoVictorDevv/Cooperativa-dos-Produtores-Rurais",
    numeros: [
      { valor: "~200", rotulo: "escolas e creches / semana" },
      { valor: "22", rotulo: "produtores" },
      { valor: "4", rotulo: "caminhões em 2 dias" },
      { valor: "R$ 0,01", rotulo: "precisão do cálculo" },
    ],
    etapas: [
      { titulo: "Problema", texto: "Pedido semanal da Prefeitura para ~200 escolas, dividido à mão entre 22 produtores, com limite anual de R$ 40 mil por agricultor (CAF)." },
      { titulo: "Planilha", texto: "Criei em Excel o sistema de pedido, divisão, mapa de montagem, romaneios, cobrança e pagamento, validado centavo a centavo." },
      { titulo: "App", texto: "Transformei a planilha em app web: importa o Excel da Prefeitura, divide, gera mensagens de WhatsApp, mapas, romaneios e o fechamento." },
      { titulo: "Resultado", texto: "Usado toda semana na operação, no computador e no celular do galpão. Motor de cálculo conferido célula a célula com testes." },
    ],
    detalhes: [],
  },
  {
    id: "pettracker",
    nome: "Pet Care Tracker",
    resumo: "Web app mobile para remédios, lembretes e vacinas de pets",
    ano: "2026",
    stack: ["HTML", "CSS", "JavaScript", "PWA", "localStorage"],
    papel: "Ideia, design e desenvolvimento",
    etapas: [
      { titulo: "Problema", texto: "Uma veterinária com 7 animais em casa (4 cães e 3 gatos, alguns com remédio diário) guardando horários e vacinas de cabeça." },
      { titulo: "Ideia", texto: "Um presente: carta interativa que abre um gerenciador de cuidados feito sob medida para a rotina dela." },
      { titulo: "App", texto: "Doses do dia, lembretes, carteirinha de vacinas e peso, com status em dia / vence em breve / atrasado." },
      { titulo: "Resultado", texto: "Instalado na tela inicial do celular e usado todo dia. Funciona offline, sem nenhuma dependência." },
    ],
    detalhes: [
      "HTML, CSS e JavaScript puros em um único arquivo — sem framework e sem build.",
      "Pensado para iPhone: safe-area, navegação inferior e instalável via Web App Manifest.",
      "Dados no localStorage, com backup e restauração em JSON.",
      "Lógica de datas: próxima dose e vacina, status e reset diário.",
      "Pergunta secreta conferida por hash SHA-256 (crypto.subtle).",
      "Microinterações: envelope animado, scroll reveal e “shake” no erro.",
      "Versão pública com dados e imagens fictícios, por privacidade.",
    ],
  },
  {
    id: "catalogo",
    nome: "Catálogo + WhatsApp",
    resumo: "Site-catálogo com carrinho que envia o pedido pelo WhatsApp",
    ano: "2026",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vitest"],
    papel: "Requisitos, proposta e anúncios (projeto em dupla)",
    repo: "https://github.com/JoaoVictorDevv/loja-perucas",
    detalhes: [
      "Catálogo com filtros, página de produto e carrinho que monta o orçamento.",
      "O pedido sai pronto direto no WhatsApp da vendedora.",
      "Campanhas no Google Ads e Meta Ads para o cliente.",
    ],
  },
  {
    id: "thaixskill",
    nome: "ThaixSkill",
    resumo: "App de treino de calistenia e CrossFit",
    ano: "2026",
    stack: ["React Native", "Expo", "TypeScript", "Supabase"],
    papel: "Produto e cliente — código: Vitor Lopes",
    repo: "https://github.com/vitorOliveiraLopes/thaix",
    detalhes: [
      "Encontrei e trouxe a cliente (uma coach) e participei das reuniões com ela.",
      "Ajudei a definir a ideia e as funcionalidades do app, usando IA no processo.",
      "Desenvolvido em parceria com Vitor Lopes.",
    ],
  },
  {
    id: "portfolio",
    nome: "Este site",
    resumo: "Portfólio pessoal e identidade visual",
    ano: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    papel: "Design e desenvolvimento",
    detalhes: ["Conteúdo separado do layout, exportado como site estático.", "Tem um segredo escondido. Procure."],
  },
];

export const sobre = {
  texto:
    "De Petrópolis. Curioso por natureza, coordeno a logística e os dados de uma cooperativa rural e escrevo o software que ela usa. Aberto a oportunidades em desenvolvimento.",
  ladoB:
    "Fora do código: rap, boom bap dos anos 90, produção de beats sampleados, graffiti e cultura urbana.",
};

export const experiencia = [
  {
    periodo: "out/2026 — atual",
    cargo: "Coordenação Administrativa, Logística e Dados",
    local: "Cooperativa dos Produtores Rurais de Petrópolis",
    itens: [
      "Pedidos semanais do PNAE: ~200 escolas e creches, 22 produtores.",
      "Lidero a equipe do galpão e planejo rotas (4 caminhões em 2 dias).",
      "Controle de entregas, retornos, cobrança e fechamento financeiro.",
      "Criei o sistema em Excel e o app web usados na operação.",
    ],
  },
  {
    periodo: "2024 — 2026",
    cargo: "Estagiário em TI",
    local: "Câmara Municipal de Petrópolis",
    itens: [
      "Refiz toda a rede na reforma do prédio; mantive rede e Wi-Fi.",
      "Suporte a usuários, hardware, software e impressoras.",
      "Documentação técnica e apoio a bancos e análise de dados.",
    ],
  },
  {
    periodo: "2022 — atual",
    cargo: "Desenvolvedor Freelancer",
    local: "Projetos autônomos",
    itens: ["Sites e aplicações para pequenos negócios.", "Campanhas no Google Ads e Meta Ads."],
  },
  {
    periodo: "2022 — 2026",
    cargo: "Análise e Desenvolvimento de Sistemas",
    local: "Universidade Estácio de Sá",
    itens: ["OneBitCode (em andamento): JavaScript, Python, Ruby on Rails, React Native, IA para devs.", "Udemy: Algoritmos e Lógica, Java Completo."],
  },
];

export const habilidades = [
  { grupo: "Linguagens", itens: ["JavaScript", "TypeScript", "Java", "SQL", "HTML", "CSS"] },
  { grupo: "Frameworks", itens: ["React", "Next.js", "Node.js", "Tailwind CSS", "Vitest", "Git / GitHub"] },
  { grupo: "Dados", itens: ["Excel avançado", "Bancos de dados", "Análise de dados", "Automação"] },
  { grupo: "Infra e mais", itens: ["Redes e Wi-Fi", "Suporte de TI", "Google Ads", "Meta Ads", "Programação com IA"] },
  { grupo: "Idiomas", itens: ["Português — nativo", "Inglês — avançado"] },
];

// Verso da máscara do hero (aparece ao clicar nela).
export const resumo = [
  { rotulo: "Hoje", texto: "Coordeno a operação e os dados de uma cooperativa rural — e escrevo o sistema que ela usa." },
  { rotulo: "Faço", texto: "Aplicações web com Next.js, React e TypeScript, do Excel ao app em produção." },
  { rotulo: "Busco", texto: "Novas oportunidades em desenvolvimento." },
];