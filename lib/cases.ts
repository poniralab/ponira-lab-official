export type Lab = "studio" | "creative" | "systems";

export interface CaseStudy {
  slug: string;
  lab: Lab;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  cover: string | null;
  images: string[];
  context: string;
  process: string;
  result: string;
  tools: string[];
  externalUrl: string | null;
  externalLabel: string | null;
  featured: boolean;
}

export const cases: CaseStudy[] = [
  // ─── STUDIO ───────────────────────────────────────────────────────────────

  {
    slug: "premier-coffee-shop",
    lab: "studio",
    title: "Premier",
    subtitle: "Do solo à xícara.",
    category: "Identidade Visual & Branding",
    year: "2023",
    cover: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f74dec179685751.64fe5843769d5.png",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f74dec179685751.64fe5843769d5.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/e5ec83179685751.64fe58437781d.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/e135f4179685751.64fe584378514.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/5d9b48179685751.64fe58437a0d8.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/02c4f1179685751.64fe58437afef.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/bc05d9179685751.64fe58437bb38.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/09b891179685751.64fe58437c751.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/3a86b2179685751.64fe584379463.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/d0341b179685751.64fe58437d446.png",
    ],
    context:
      "O Premier nasce em Tapiramutá, centro-norte da Bahia. Mais do que uma cafeteria, é um ato de memória afetiva: cultivado por quem ama o grão, servido por quem entende o ritual. O fundador tinha uma exigência simples e profunda — a marca precisava carregar afeto, acolhimento e a presença de quem torna o café possível antes de chegar à xícara.",
    process:
      "A frase 'do solo à xícara' emergiu como âncora criativa — uma declaração de origem que posiciona o Premier acima do produto e ao lado das pessoas. O sistema visual foi construído para envolver sentimentos genuínos: tons terrosos que evocam o cultivo, tipografia que remete ao artesanal, e uma composição que transita entre o rústico e o refinado sem perder a elegância.",
    result:
      "Uma identidade que vai além da estética: é um manifesto visual de respeito à cadeia do café. A marca comunica origem, cuidado e pertencimento — atributos que constroem fidelidade antes mesmo de a primeira xícara ser servida.",
    tools: ["Adobe Illustrator", "Branding", "Logo Design"],
    externalUrl: "https://www.behance.net/gallery/179685751/Premier-%28Coffee-Shop%29-Case-de-estudo",
    externalLabel: "Ver no Behance",
    featured: true,
  },

  {
    slug: "colegio-joao-pedro-identidade",
    lab: "studio",
    title: "Colégio João Pedro",
    subtitle: "Aprender é uma experiência.",
    category: "Identidade Visual",
    year: "2025",
    cover: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/68d5a3220066835.67bccc0899cac.jpg",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/68d5a3220066835.67bccc0899cac.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/5bdd49220066835.67bccc0897fc7.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/bbd648220066835.67bccc0898711.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/82c1e8220066835.67bccc0898c42.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0a70e2220066835.67bccc0899453.jpg",
    ],
    context:
      "O Colégio João Pedro tem uma metodologia rara: o sociointeracionismo, que entende aprendizado como troca, não transmissão. A escola precisava de uma identidade que comunicasse acolhimento sem infantilizar, e autoridade pedagógica sem frieza institucional.",
    process:
      "O desafio era encontrar o equilíbrio entre afeto e credibilidade. O sistema visual foi construído com formas orgânicas que remetem ao crescimento, paleta que transmite confiança e calor simultaneamente, e tipografia que funciona tanto para comunicação com pais quanto com crianças. Cada elemento foi pensado para reforçar que este é um espaço de crescimento, diálogo e aprendizado.",
    result:
      "Uma identidade que a escola usa com orgulho — presente em materiais institucionais, comunicação com famílias e presença digital. O projeto estabeleceu as bases visuais que mais tarde guiaram também o desenvolvimento do site institucional.",
    tools: ["Adobe Illustrator", "Brand System", "Logo Design"],
    externalUrl: "https://www.behance.net/gallery/220066835/Colgio-Joao-Pedro-%28Identidade-Visual%29",
    externalLabel: "Ver no Behance",
    featured: true,
  },

  {
    slug: "identidade-visual-fotografa",
    lab: "studio",
    title: "Identidade Visual",
    subtitle: "Fotógrafa — A memória como marca.",
    category: "Personal Branding",
    year: "2025",
    cover: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/479e98236976675.68f7743509965.png",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/479e98236976675.68f7743509965.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/0bd1c1236976675.68f774350917d.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/9b77e0236976675.68f774350a68c.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/e1850e236976675.68f7743509eec.png",
    ],
    context:
      "Num mercado saturado de logos com câmeras e lentes, a fotógrafa queria uma marca que representasse o que a fotografia significa de verdade para ela: lembrança. O desafio era fugir do óbvio e encontrar um símbolo com alma.",
    process:
      "O cartão-postal surgiu como metáfora central — um objeto que existe para guardar memórias, colecionar momentos e enviar sentimentos. Cada foto é uma pequena postal do tempo: fragmentos que guardam histórias, afetos e aromas que talvez não voltem. O sistema visual traduz essa delicadeza com a mesma ternura de quem escreve à mão um pedaço da própria história.",
    result:
      "Uma identidade que se diferencia no mercado sem precisar gritar. A marca comunica sensibilidade, intenção e afeto — exatamente o que a fotógrafa entrega em cada ensaio.",
    tools: ["Adobe Illustrator", "Personal Branding", "Visual Identity"],
    externalUrl: "https://www.behance.net/gallery/236976675/Identidade-Visual-Fotografa",
    externalLabel: "Ver no Behance",
    featured: false,
  },

  {
    slug: "thais-mazeliah",
    lab: "studio",
    title: "Thais Mazeliah",
    subtitle: "Autoridade antes da primeira reunião.",
    category: "Personal Branding — Jurídico",
    year: "2023",
    cover: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0fa91d162028635.63cf16b2e109c.png",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0fa91d162028635.63cf16b2e109c.png",
    ],
    context:
      "Advogadas constroem autoridade pela trajetória — mas a marca pessoal precisa comunicar essa autoridade antes mesmo do primeiro contato. Thais precisava de uma identidade que transmitisse credibilidade, elegância e presença sem cair nos clichês do setor jurídico.",
    process:
      "O projeto partiu de um princípio claro: a marca de uma advogada precisa ser tão precisa quanto seus argumentos. Cada decisão visual foi tomada com essa lógica — tipografia que projeta seriedade, paleta que comunica sofisticação, e composição que posiciona sem intimidar.",
    result:
      "Uma identidade pessoal que funciona como um primeiro aperto de mão: firme, elegante e memorável. A marca acompanha a Thais em sua comunicação profissional e reforça o posicionamento premium que ela construiu na carreira.",
    tools: ["Adobe Illustrator", "Personal Branding", "Logo Design"],
    externalUrl: "https://www.behance.net/gallery/162028635/Thais-Mazeliah-Lawyer",
    externalLabel: "Ver no Behance",
    featured: false,
  },

  // ─── CREATIVE ─────────────────────────────────────────────────────────────

  {
    slug: "social-media-arquitetura",
    lab: "creative",
    title: "Social Media",
    subtitle: "Arquitetura — Espaços que comunicam.",
    category: "Social Media Design",
    year: "2025",
    cover: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/4c4fb8224700495.680fe53b638e4.png",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/4c4fb8224700495.680fe53b638e4.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/165167224700495.680fe53b64a95.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/49c678224700495.680fe53b64350.png",
    ],
    context:
      "Escritórios de arquitetura têm um desafio específico de comunicação: o produto é técnico, o processo é longo, mas a audiência no Instagram quer ser impactada em segundos. A linguagem visual precisa traduzir a sofisticação do projeto sem perder o apelo imediato.",
    process:
      "A estratégia de conteúdo foi construída para criar pontes entre o técnico e o sensorial: posts que mostram o projeto e o processo, que educam sobre o espaço e despertam o desejo de habitá-lo. O sistema visual garante coerência entre as publicações sem uniformidade que mata o interesse.",
    result:
      "Uma presença digital que faz o escritório ser reconhecido pelo que cria — não apenas pelo que publica. O conteúdo posiciona a marca como referência estética e técnica no nicho de arquitetura.",
    tools: ["Adobe Illustrator", "Social Media", "Content Strategy"],
    externalUrl: "https://www.behance.net/gallery/224700495/Social-Media-Arquitetura",
    externalLabel: "Ver no Behance",
    featured: false,
  },

  {
    slug: "personal-branding-carol",
    lab: "studio",
    title: "Personal Branding",
    subtitle: "Ana Carolina — A própria marca.",
    category: "Personal Branding",
    year: "2023",
    cover: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/20aa21180316595.6508e21a621ae.png",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/20aa21180316595.6508e21a621ae.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/94778d180316595.6508e21a656cd.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/ad2a33180316595.6508e21a6476a.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/cfb1d7180316595.6508e21a670d6.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/101483180316595.6508e21a63a5e.png",
    ],
    context:
      "Criar a própria marca é o projeto mais honesto e mais difícil. É impossível mentir sobre quem você é quando você é o cliente. A Carol precisava de uma identidade que comunicasse tudo ao mesmo tempo: fotógrafa afetiva, diretora de arte, criadora de experiências visuais.",
    process:
      "O processo foi de dentro para fora. Antes de qualquer forma ou cor, veio a pergunta: o que a Carol comunica antes de falar? A resposta guiou cada decisão — uma identidade que projeta sensibilidade, intenção e profissionalismo sem abrir mão da personalidade.",
    result:
      "Uma marca pessoal que serve de âncora para toda a presença digital da Carol — do Instagram ao portfólio no Behance. É o ponto de partida visual de tudo que veio depois.",
    tools: ["Adobe Illustrator", "Personal Branding", "Visual Identity"],
    externalUrl: "https://www.behance.net/gallery/180316595/Personal-Branding",
    externalLabel: "Ver no Behance",
    featured: false,
  },

  // ─── SYSTEMS ──────────────────────────────────────────────────────────────
  // cover aponta para /public/covers/<slug>.png
  // Gere os arquivos rodando: node scripts/generate-covers.mjs

  {
    slug: "colegio-joao-pedro-website",
    lab: "systems",
    title: "Colégio João Pedro",
    subtitle: "Da identidade visual ao site — as duas sócias, um cliente.",
    category: "Website Institucional & Colaboração",
    year: "2025",
    cover: "/covers/colegio-joao-pedro-website.png",
    images: ["/covers/colegio-joao-pedro-website.png"],
    context:
      "O Colégio João Pedro é o projeto que mais representa o que a Ponira é: a Carol criou a identidade visual completa da escola, e a Maria usou esse sistema como base para construir o site institucional. Dois produtos distintos, uma única linguagem, criados pelas duas frentes da agência para o mesmo cliente.",
    process:
      "A identidade visual da Carol funcionou como especificação de design para o desenvolvimento. Paleta, tipografia, tom de comunicação — tudo já estava definido e com intenção. A Maria construiu em Next.js com rotas dedicadas para cada frente da escola: proposta pedagógica, diferenciais, estrutura física e FAQ interativo. O formulário de matrícula foi pensado para reduzir fricção — UX que respeita que pais tomam decisões importantes e emocionais.",
    result:
      "Um ecossistema digital completo: identidade e site criados com a mesma coerência, pelo mesmo time. O resultado é uma presença online que a escola usa com orgulho — e que demonstra na prática o que acontece quando Studio e Systems trabalham juntos desde o início.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Brand System"],
    externalUrl: "https://colegio-joao-pedro.vercel.app",
    externalLabel: "Ver Projeto",
    featured: true,
  },

  {
    slug: "netflix-genre-analysis",
    lab: "systems",
    title: "Netflix Genre Analysis",
    subtitle: "Dados que revelam padrões invisíveis.",
    category: "Dashboard & Data Analytics",
    year: "2024",
    cover: "/covers/netflix-genre-analysis.png",
    images: ["/covers/netflix-genre-analysis.png"],
    context:
      "O catálogo da Netflix tem milhares de títulos com dezenas de variáveis. A pergunta era simples: o que os dados revelam sobre o que as pessoas consomem, por onde e quando? O desafio era transformar um dataset bruto em inteligência visual e acionável.",
    process:
      "O pipeline foi construído em Python com Pandas para limpeza e tratamento dos dados, e Streamlit para a interface interativa. Os filtros foram projetados para permitir exploração não-linear — o usuário descobre os padrões no próprio ritmo, sem precisar saber de antemão o que procura.",
    result:
      "Um dashboard que transforma dados públicos em perspectiva estratégica. Útil tanto para análise de mercado quanto como demonstração de capacidade técnica em data analytics aplicada.",
    tools: ["Python", "Pandas", "Streamlit", "Data Visualization"],
    externalUrl: "https://analysis-genre-netflix.streamlit.app",
    externalLabel: "Ver Dashboard",
    featured: false,
  },

  {
    slug: "extrator-pdf-aero",
    lab: "systems",
    title: "Extrator PDF Aero",
    subtitle: "Automação que elimina trabalho repetitivo.",
    category: "Automação & Processamento",
    year: "2024",
    cover: "/covers/extrator-pdf-aero.png",
    images: ["/covers/extrator-pdf-aero.png"],
    context:
      "Documentos aeronáuticos em PDF são densos, padronizados e massivos. Extrair dados específicos manualmente é um trabalho que consome horas por semana — e que pede precisão absoluta, já que erros em dados aeronáuticos têm consequências reais.",
    process:
      "A ferramenta foi construída com foco em confiabilidade antes de velocidade. O parser foi calibrado para os padrões específicos dos documentos do setor, e a interface Streamlit foi desenhada para minimizar erros do operador — fluxo claro, feedback imediato, exportação em formatos utilizáveis.",
    result:
      "Uma automação que transforma horas de trabalho manual em minutos. A ferramenta demonstra como engenharia de software aplicada a contextos específicos gera valor real e mensurável.",
    tools: ["Python", "Streamlit", "PDF Processing", "Automação"],
    externalUrl: "https://extrator-pdf-aero.streamlit.app",
    externalLabel: "Ver Ferramenta",
    featured: false,
  },

  {
    slug: "logofolio",
    lab: "studio",
    title: "Logofolio",
    subtitle: "Marcas que existem antes das palavras.",
    category: "Logo Design",
    year: "2026",
    cover: "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/af5b90242555667.696f8e4e0718d.png",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/af5b90242555667.696f8e4e0718d.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/faaba8242555667.696f8e4e08098.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/7c155d242555667.696f8e4e07984.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/88d967242555667.696f8e4e08ff6.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/2eee4e242555667.696f8e4e0860c.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/a58633242555667.696f8e4e08ac3.png",
    ],
    context:
      "Um logofolio é uma radiografia de quem cria. Cada logotipo sintetiza um universo — um negócio, uma pessoa, um propósito — em forma pura. Esta coleção reúne identidades construídas para contextos distintos, provando que a linguagem visual da Carol não tem estilo único: tem método.",
    process:
      "Cada símbolo desta coleção nasceu de um briefing diferente, com restrições diferentes, para públicos diferentes. O que os une não é a estética — é o processo: escuta ativa, conceituação antes de forma, e a disciplina de reduzir até restar apenas o essencial. Logo design é subtração com intenção.",
    result:
      "Uma coleção que demonstra amplitude criativa e consistência metodológica. Cada marca aqui já está ativa no mundo — posicionando negócios, identificando pessoas, comunicando valores antes que qualquer palavra seja dita.",
    tools: ["Adobe Illustrator", "Logo Design", "Visual Identity"],
    externalUrl: "https://www.behance.net/gallery/242555667/Logofolio",
    externalLabel: "Ver no Behance",
    featured: true,
  },

  {
    slug: "design-de-post-fauna",
    lab: "creative",
    title: "Design de Post — Fauna",
    subtitle: "Ilustração e identidade em movimento nas redes.",
    category: "Social Media Design & Ilustração",
    year: "2025",
    cover: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/552ec1227845527.68483a024d669.png",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/552ec1227845527.68483a024d669.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/3ca30c227845527.68483a024dbb8.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/2efe0a227845527.68483a024e35e.png",
    ],
    context:
      "A Fauna é uma agência com linguagem visual própria e forte. Trabalhar para ela significava não apenas criar posts — significava entrar em um universo estético já estabelecido e contribuir com ele sem apagar a identidade que já existia.",
    process:
      "O desafio era equilibrar a personalidade da Fauna com a intenção de cada peça. O processo envolveu ilustração digital com character design, composição que respeita a grade da identidade original, e decisões cromáticas que amplificam sem sobrescrever. Cada post é autoral dentro de um sistema.",
    result:
      "Peças que se integram à identidade da Fauna com naturalidade — como se sempre tivessem pertencido a ela. Um trabalho que demonstra a capacidade de criar dentro de um sistema de outra marca com o mesmo cuidado que se dá à própria.",
    tools: ["Adobe Illustrator", "Ilustração Digital", "Social Media", "Character Design"],
    externalUrl: "https://www.behance.net/gallery/227845527/Design-de-Post",
    externalLabel: "Ver no Behance",
    featured: false,
  },

  {
    slug: "social-media-wiki-escolar",
    lab: "creative",
    title: "Social Media — Wiki Escolar",
    subtitle: "Conteúdo educativo que não parece obrigação.",
    category: "Social Media Design",
    year: "2024",
    cover: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/7a8a32195804827.6615498f21000.png",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/7a8a32195804827.6615498f21000.png",
    ],
    context:
      "Conteúdo educacional nas redes sociais enfrenta um paradoxo: precisa ser informativo o suficiente para ser útil e visual o suficiente para ser parado no scroll. A Wiki Escolar precisava de posts que ensinassem sem entediar — e que tivessem identidade visual própria reconhecível.",
    process:
      "A estratégia foi tratar cada post como uma micro-experiência de aprendizado: hierarquia visual clara, tipografia que guia a leitura, e elementos gráficos que reforçam o conteúdo em vez de decorar. O design serve ao entendimento, não ao contrário.",
    result:
      "Posts que param o scroll e entregam o conteúdo com clareza. Uma identidade visual que posiciona a Wiki Escolar como referência no nicho educacional — séria sem ser sisuda, acessível sem ser simplória.",
    tools: ["Adobe Illustrator", "Social Media", "Graphic Design"],
    externalUrl: "https://www.behance.net/gallery/195804827/Social-Media-%28Post%29-Wiki-Escolar",
    externalLabel: "Ver no Behance",
    featured: false,
  },

  {
    slug: "linktree-carol",
    lab: "systems",
    title: "Hub Digital — Carol Sant'Anna",
    subtitle: "A identidade da Carol, do Illustrator para o código.",
    category: "Desenvolvimento & Identidade Digital",
    year: "2025",
    cover: "/covers/linktree-carol.png",
    images: ["/covers/linktree-carol.png"],
    context:
      "A Carol já tinha uma identidade visual sólida — construída por ela mesma, com intenção e história. O desafio era pegar esse sistema visual nascido no Illustrator e traduzi-lo fielmente para uma experiência digital interativa. Não um linktree genérico: um produto com a cara dela.",
    process:
      "A Maria usou o brand system da Carol como especificação técnica. Cada decisão de código — tipografia, espaçamento, hierarquia, micro-animações — foi tomada para honrar o que já existia em papel. O resultado é uma das raras vezes em que design e desenvolvimento foram feitos pelas mãos certas: quem criou a marca e quem construiu o produto têm o mesmo nível de cuidado com o detalhe.",
    result:
      "Um hub digital que a Carol usa como ponto central de toda a sua presença online. Mais do que funcional: é uma extensão da sua identidade, provando que código bem escrito é também um ato de design.",
    tools: ["Next.js", "Framer Motion", "Tailwind CSS", "Branding"],
    externalUrl: "https://linktree-carol.vercel.app",
    externalLabel: "Ver Projeto",
    featured: true,
  },

  {
    slug: "linktree-agatha",
    lab: "systems",
    title: "Hub Digital — Ágatha",
    subtitle: "Design e código feitos pela mesma mão.",
    category: "Desenvolvimento & Design Autoral",
    year: "2025",
    cover: "/covers/linktree-agatha.png",
    images: ["/covers/linktree-agatha.png"],
    context:
      "Para a Ágatha, não havia identidade visual preexistente. A Maria partiu do zero — criando o conceito visual, definindo a paleta, escolhendo a tipografia, e desenvolvendo o produto em seguida. Um exercício completo de criação: do conceito ao código, sem intermediários.",
    process:
      "O processo foi diferente do habitual: sem briefing de design separado, sem handoff entre áreas. As decisões estéticas e técnicas foram tomadas em conjunto, no mesmo fluxo criativo. Isso gerou uma coerência entre intenção visual e execução técnica que projetos compartimentados raramente alcançam.",
    result:
      "Um produto que demonstra que a Systems não é apenas engenharia — é criação. A capacidade de ir do conceito ao produto entregue, sem depender de uma terceira ferramenta ou de uma segunda pessoa, é um diferencial real que poucos desenvolvedores têm.",
    tools: ["Next.js", "Framer Motion", "Tailwind CSS", "UI Design"],
    externalUrl: "https://linktree-agatha.vercel.app",
    externalLabel: "Ver Projeto",
    featured: false,
  },

  {
    slug: "lbem-ufrj",
    lab: "systems",
    title: "LBEM — UFRJ",
    subtitle: "Pesquisa científica com presença digital.",
    category: "Plataforma Científica",
    year: "2024",
    cover: "/covers/lbem-ufrj.png",
    images: ["/covers/lbem-ufrj.png"],
    context:
      "O Laboratório de Bioinformática Evolutiva e Molecular da UFRJ realiza pesquisa de alto nível mas tinha presença digital aquém da qualidade científica produzida. A plataforma precisava comunicar rigor, credibilidade e acessibilidade — para outros pesquisadores e para o público interessado.",
    process:
      "A arquitetura foi pensada para escalar junto com a produção científica do laboratório. Organização de publicações, perfis de pesquisadores e projetos em andamento — tudo estruturado para ser atualizado sem depender de conhecimento técnico.",
    result:
      "Uma presença digital que coloca o laboratório em pé de igualdade com instituições internacionais. A plataforma serve como cartão de visitas científico e repositório de conhecimento produzido na UFRJ.",
    tools: ["Next.js", "Data Science", "Vercel", "Research"],
    externalUrl: "https://lbem-vercel.app",
    externalLabel: "Ver Projeto",
    featured: false,
  },
  {
    slug: "landing-page-cjp",
    lab: "systems",
    title: "CJP — Landing Page",
    subtitle: "Design e desenvolvimento de landing page.",
    category: "Landing Page",
    year: "2024",
    cover: "/covers/landing-page-cjp.png",
    images: ["/covers/landing-page-cjp.png"],
    context: "O Colégio João Pedro chegou em 2025 com um desafio específico: abrir matrículas para 2026 num ciclo onde a decisão de família começa cedo e o digital é o primeiro contato. A escola tinha metodologia sólida — sociointeracionismo, cultura maker, bilinguismo real — mas precisava de uma página que convertesse essa proposta em confiança antes mesmo da visita presencial.",

    process: "A landing page foi construída para guiar uma decisão emocional com lógica clara. Cada seção responde a uma objeção silenciosa de quem está escolhendo onde colocar o filho: segurança do ambiente, transparência pedagógica, infraestrutura, história da escola. O formulário de captação foi simplificado ao máximo — nome, WhatsApp e série de interesse — para reduzir fricção no momento mais crítico do funil. O design seguiu o sistema visual já criado pela Carol, garantindo que LP e identidade da escola falassem a mesma língua.",

    result: "Uma página de captação que transforma a curiosidade de um pai ou mãe em agendamento de visita. Construída em Next.js e hospedada na Vercel, carrega em menos de 2 segundos em mobile — onde a maior parte das pesquisas por escola acontece. A LP ficou ativa para o ciclo de matrículas 2026 e representa a primeira entrega onde identidade visual, site institucional e estratégia de conversão foram pensados juntos pela mesma agência.",
    tools: ["Next.js", "React", "Vercel"],
    externalUrl: "https://colegio-joao-pedro.vercel.app/lp",
    externalLabel: "Ver Projeto",
    featured: true,
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getCasesByLab(lab: Lab): CaseStudy[] {
  return cases.filter((c) => c.lab === lab);
}

export const labMeta: Record<Lab, { label: string; description: string }> = {
  studio: {
    label: "Studio / Alma",
    description: "Identidade visual, branding e design estratégico.",
  },
  creative: {
    label: "Creative / Sopro",
    description: "Social media, estratégia de conteúdo e marketing.",
  },
  systems: {
    label: "Systems / Corpo",
    description: "Desenvolvimento, automação e arquitetura de dados.",
  },
};