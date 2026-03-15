// Dados centralizados de subcategorias para cada categoria

export const BLOG_POSTS = [
  {
    slug: "como-escolher-tecido-cortina",
    title: "Como Escolher o Tecido Ideal para sua Cortina",
    excerpt:
      "Linho, voil, blackout ou seda? Descubra qual tecido é ideal para cada ambiente da sua casa e como cada um influencia a iluminação e privacidade.",
    date: "2026-02-01",
    image: "/images/blog/tecidos-cortina.jpg",
    tags: ["Cortinas", "Tecidos", "Dicas"],
    readingTime: 4,
    i18n: {
      en: {
        title: "How to Choose the Ideal Fabric for Your Curtain",
        excerpt:
          "Linen, voile, blackout or silk? Discover which fabric is ideal for each room and how each one influences lighting and privacy.",
      },
      es: {
        title: "Cómo Elegir la Tela Ideal para su Cortina",
        excerpt:
          "¿Lino, voile, blackout o seda? Descubra qué tela es ideal para cada ambiente y cómo cada una influye en la iluminación y privacidad.",
      },
    },
  },
  {
    slug: "motorizacao-persianas-vale-a-pena",
    title: "Motorização de Persianas: Vale a Pena?",
    excerpt:
      "Entenda as vantagens da motorização, como funciona a integração com assistentes virtuais e quando investir em automação para suas persianas.",
    date: "2026-01-20",
    image: "/images/persianas/persiana-hero-desktop.jpeg",
    tags: ["Persianas", "Motorização", "Automação"],
    readingTime: 3,
    i18n: {
      en: {
        title: "Motorized Blinds: Is It Worth It?",
        excerpt:
          "Understand the advantages of motorization, how virtual assistant integration works and when to invest in automation for your blinds.",
      },
      es: {
        title: "Persianas Motorizadas: ¿Vale la Pena?",
        excerpt:
          "Comprenda las ventajas de la motorización, cómo funciona la integración con asistentes virtuales y cuándo invertir en automatización.",
      },
    },
  },
  {
    slug: "tendencias-decoracao-2026",
    title: "Tendências de Decoração 2026: O que Esperar",
    excerpt:
      "Cores terrosas, materiais naturais e texturas táteis dominam as tendências. Veja como aplicar essas novidades na sua casa.",
    date: "2026-01-10",
    image: "/images/blog/tendencias-2026-mobile.jpg",
    tags: ["Tendências", "Decoração", "2026"],
    readingTime: 5,
    i18n: {
      en: {
        title: "2026 Décor Trends: What to Expect",
        excerpt:
          "Earthy tones, natural materials and tactile textures dominate the trends. See how to apply these novelties in your home.",
      },
      es: {
        title: "Tendencias de Decoración 2026: Qué Esperar",
        excerpt:
          "Tonos terrosos, materiales naturales y texturas táctiles dominan las tendencias. Vea cómo aplicar estas novedades en su hogar.",
      },
    },
  },
];

export const CORTINAS_SUBCATEGORIES = [
  {
    name: "Tipos de Pregas",
    href: "/cortinas/tipos-de-pregas",
    image: "/images/cortinas/cortina-prega-hero-desktop.png",
    description: "Prega Americana, Prega Macho, Wave e Franzida",
    descriptionKey: "card.cortinas.tipos-de-pregas",
  },
  {
    name: "Tipos de Acabamento",
    href: "/cortinas/tipos-de-acabamento",
    image: "/images/cortinas/blackout-01.jpg",
    description: "Barra larga, forro e blackout em diversas porcentagens",
    descriptionKey: "card.cortinas.tipos-de-acabamento",
  },
  {
    name: "Suportes e Ferragens",
    href: "/cortinas/suportes-e-ferragens",
    image: "/images/cortinas/cortina-26.jpg",
    description: "Varão, trilho suíço e trilho motorizado",
    descriptionKey: "card.cortinas.suportes-e-ferragens",
  },
  {
    name: "Modelos",
    href: "/cortinas/modelos",
    image: "/images/cortinas/wave-01.jpg",
    description: "Tradicional, com forro, dupla e piso-teto",
    descriptionKey: "card.cortinas.modelos",
  },
];

export const CORTINAS_TIPOS_PREGAS = [
  {
    name: "Prega Americana",
    href: "/cortinas/tipos-de-pregas/prega-americana",
    image: "/images/cortinas/prega-americana-desktop-01.jpg",
    description: "Estilo clássico com pregas elegantes e bem definidas",
    descriptionKey: "card.cortinas.prega-americana",
  },
  {
    name: "Prega Macho",
    href: "/cortinas/tipos-de-pregas/prega-macho",
    image: "/images/cortinas/prega-americana-desktop-02.jpg",
    description: "Pregas triplas estruturadas para um visual sofisticado",
    descriptionKey: "card.cortinas.prega-macho",
  },
  {
    name: "Prega Wave",
    href: "/cortinas/tipos-de-pregas/prega-wave",
    image: "/images/cortinas/wave-01.jpg",
    description: "Caimento suave em ondas uniformes e contemporâneas",
    descriptionKey: "card.cortinas.prega-wave",
  },
  {
    name: "Cortina Franzida",
    href: "/cortinas/tipos-de-pregas/cortina-franzida",
    image: "/images/cortinas/wave-02.jpg",
    description: "Franzido clássico com volume e leveza",
    descriptionKey: "card.cortinas.cortina-franzida",
  },
];

// Produtos de Cortinas por subcategoria
export const CORTINA_PRODUCTS: Record<string, { name: string; image: string; desktopImage?: string; category: string }[]> = {
  "prega-americana": [
    { name: "Prega Americana - Modelo 1", image: "/images/cortinas/prega-americana-desktop-01.jpg", desktopImage: "/images/cortinas/prega-americana-desktop-01.jpg", category: "Cortinas" },
    { name: "Prega Americana - Modelo 2", image: "/images/cortinas/prega-americana-desktop-02.jpg", desktopImage: "/images/cortinas/prega-americana-desktop-02.jpg", category: "Cortinas" },
    { name: "Prega Americana - Modelo 3", image: "/images/cortinas/prega-americana-desktop-03.jpg", desktopImage: "/images/cortinas/prega-americana-desktop-03.jpg", category: "Cortinas" },
  ],
  ilhos: [
    { name: "Cortina com Ilhós - Modelo 1", image: "/images/cortinas/ilhos-01.jpg", category: "Cortinas" },
    { name: "Cortina com Ilhós - Modelo 2", image: "/images/cortinas/ilhos-02.jpg", category: "Cortinas" },
    { name: "Cortina com Ilhós - Modelo 3", image: "/images/cortinas/ilhos-03.jpg", category: "Cortinas" },
  ],
  wave: [
    { name: "Cortina Wave - Modelo 1", image: "/images/cortinas/wave-01.jpg", category: "Cortinas" },
    { name: "Cortina Wave - Modelo 2", image: "/images/cortinas/wave-02.jpg", category: "Cortinas" },
    { name: "Cortina Wave - Modelo 3", image: "/images/cortinas/wave-03.jpg", category: "Cortinas" },
  ],
  varao: [
    { name: "Varão Simples", image: "/images/cortinas/cortina-26.jpg", desktopImage: "/images/cortinas/cortina-26.jpg", category: "Cortinas" },
    { name: "Varão com Ponteira Decorativa", image: "/images/cortinas/cortina-27.jpg", desktopImage: "/images/cortinas/cortina-27.jpg", category: "Cortinas" },
    { name: "Varão Duplo", image: "/images/cortinas/cortina-28.jpg", desktopImage: "/images/cortinas/cortina-28.jpg", category: "Cortinas" },
  ],
  "blackout-acusticas": [
    { name: "Blackout & Acústica - Modelo 1", image: "/images/cortinas/blackout-01.jpg", category: "Cortinas" },
    { name: "Blackout & Acústica - Modelo 2", image: "/images/cortinas/blackout-02.jpg", category: "Cortinas" },
    { name: "Blackout & Acústica - Modelo 3", image: "/images/cortinas/blackout-03.jpg", category: "Cortinas" },
  ],
  "prega-macho": [
    { name: "Prega Macho - Modelo 1", image: "/images/cortinas/wave-01.jpg", desktopImage: "/images/cortinas/wave-01.jpg", category: "Cortinas" },
    { name: "Prega Macho - Modelo 2", image: "/images/cortinas/wave-02.jpg", desktopImage: "/images/cortinas/wave-02.jpg", category: "Cortinas" },
    { name: "Prega Macho - Modelo 3", image: "/images/cortinas/wave-03.jpg", desktopImage: "/images/cortinas/wave-03.jpg", category: "Cortinas" },
  ],
  "prega-wave": [
    { name: "Prega Wave - Modelo 1", image: "/images/cortinas/wave-01.jpg", desktopImage: "/images/cortinas/wave-01.jpg", category: "Cortinas" },
    { name: "Prega Wave - Modelo 2", image: "/images/cortinas/wave-02.jpg", desktopImage: "/images/cortinas/wave-02.jpg", category: "Cortinas" },
    { name: "Prega Wave - Modelo 3", image: "/images/cortinas/wave-03.jpg", desktopImage: "/images/cortinas/wave-03.jpg", category: "Cortinas" },
  ],
  "cortina-franzida": [
    { name: "Cortina Franzida - Modelo 1", image: "/images/cortinas/ilhos-01.jpg", desktopImage: "/images/cortinas/ilhos-01.jpg", category: "Cortinas" },
    { name: "Cortina Franzida - Modelo 2", image: "/images/cortinas/ilhos-02.jpg", desktopImage: "/images/cortinas/ilhos-02.jpg", category: "Cortinas" },
    { name: "Cortina Franzida - Modelo 3", image: "/images/cortinas/ilhos-03.jpg", desktopImage: "/images/cortinas/ilhos-03.jpg", category: "Cortinas" },
  ],
  // Tipos de Acabamento
  "barra-larga": [
    { name: "Barra Larga - Modelo 1", image: "/images/cortinas/cortina-01.jpg", desktopImage: "/images/cortinas/cortina-01-desktop.jpg", category: "Cortinas" },
    { name: "Barra Larga - Modelo 2", image: "/images/cortinas/cortina-03.jpg", desktopImage: "/images/cortinas/cortina-01-desktop.jpg", category: "Cortinas" },
    { name: "Barra Larga - Modelo 3", image: "/images/cortinas/cortina-04.jpg", desktopImage: "/images/cortinas/cortina-07-desktop.jpg", category: "Cortinas" },
  ],
  "forro-blackout": [
    { name: "Blackout 80% — Meia Sombra", image: "/images/cortinas/blackout-01.jpg", desktopImage: "/images/cortinas/blackout-01.jpg", category: "Cortinas" },
    { name: "Blackout 95% — Alta Privacidade", image: "/images/cortinas/blackout-02.jpg", desktopImage: "/images/cortinas/blackout-02.jpg", category: "Cortinas" },
    { name: "Blackout 100% — Escurecimento Total", image: "/images/cortinas/blackout-03.jpg", desktopImage: "/images/cortinas/blackout-03.jpg", category: "Cortinas" },
  ],
  // Suportes e Ferragens
  "trilho-suico": [
    { name: "Trilho Suíço - Modelo 1", image: "/images/cortinas/prega-americana-desktop-04.jpg", desktopImage: "/images/cortinas/prega-americana-desktop-04.jpg", category: "Cortinas" },
    { name: "Trilho Suíço - Modelo 2", image: "/images/cortinas/prega-americana-desktop-05.jpg", desktopImage: "/images/cortinas/prega-americana-desktop-05.jpg", category: "Cortinas" },
    { name: "Trilho Suíço - Modelo 3", image: "/images/cortinas/prega-americana-desktop-06.jpg", desktopImage: "/images/cortinas/prega-americana-desktop-06.jpg", category: "Cortinas" },
  ],
  "trilho-motorizado": [
    { name: "Trilho Motorizado - Modelo 1", image: "/images/cortinas/wave-04.jpg", desktopImage: "/images/cortinas/wave-04.jpg", category: "Cortinas" },
    { name: "Trilho Motorizado - Modelo 2", image: "/images/cortinas/wave-05.jpg", desktopImage: "/images/cortinas/wave-05.jpg", category: "Cortinas" },
    { name: "Trilho Motorizado - Modelo 3", image: "/images/cortinas/wave-06.jpg", desktopImage: "/images/cortinas/wave-06.jpg", category: "Cortinas" },
  ],
  // Modelos
  "cortina-tradicional": [
    { name: "Cortina Tradicional - Modelo 1", image: "/images/cortinas/prega-americana-desktop-01.jpg", desktopImage: "/images/cortinas/prega-americana-desktop-01.jpg", category: "Cortinas" },
    { name: "Cortina Tradicional - Modelo 2", image: "/images/cortinas/prega-americana-desktop-02.jpg", desktopImage: "/images/cortinas/prega-americana-desktop-02.jpg", category: "Cortinas" },
    { name: "Cortina Tradicional - Modelo 3", image: "/images/cortinas/prega-americana-desktop-03.jpg", desktopImage: "/images/cortinas/prega-americana-desktop-03.jpg", category: "Cortinas" },
  ],
  "cortina-com-forro": [
    { name: "Cortina com Forro - Modelo 1", image: "/images/cortinas/ilhos-04.jpg", desktopImage: "/images/cortinas/ilhos-04.jpg", category: "Cortinas" },
    { name: "Cortina com Forro - Modelo 2", image: "/images/cortinas/ilhos-05.jpg", desktopImage: "/images/cortinas/ilhos-05.jpg", category: "Cortinas" },
    { name: "Cortina com Forro - Modelo 3", image: "/images/cortinas/ilhos-06.jpg", desktopImage: "/images/cortinas/ilhos-06.jpg", category: "Cortinas" },
  ],
  "cortina-dupla": [
    { name: "Cortina Dupla - Modelo 1", image: "/images/cortinas/cortina-07.jpg", desktopImage: "/images/cortinas/cortina-07-desktop.jpg", category: "Cortinas" },
    { name: "Cortina Dupla - Modelo 2", image: "/images/cortinas/cortina-13.jpg", desktopImage: "/images/cortinas/cortina-13-desktop.jpg", category: "Cortinas" },
    { name: "Cortina Dupla - Modelo 3", image: "/images/cortinas/cortina-19.jpg", desktopImage: "/images/cortinas/cortina-19-desktop.jpg", category: "Cortinas" },
  ],
  "cortina-piso-teto": [
    { name: "Cortina Piso-Teto - Modelo 1", image: "/images/cortinas/blackout-04.jpg", desktopImage: "/images/cortinas/blackout-04.jpg", category: "Cortinas" },
    { name: "Cortina Piso-Teto - Modelo 2", image: "/images/cortinas/blackout-05.jpg", desktopImage: "/images/cortinas/blackout-05.jpg", category: "Cortinas" },
    { name: "Cortina Piso-Teto - Modelo 3", image: "/images/cortinas/blackout-06.jpg", desktopImage: "/images/cortinas/blackout-06.jpg", category: "Cortinas" },
  ],
};

// Subcategorias de Tipos de Acabamento
export const CORTINAS_TIPOS_ACABAMENTO = [
  {
    name: "Barra Larga",
    href: "/cortinas/tipos-de-acabamento/barra-larga",
    image: "/images/cortinas/cortina-01.jpg",
    desktopImage: "/images/cortinas/cortina-01-desktop.jpg",
    description: "Acabamento elegante na bainha da cortina com barra de peso",
    descriptionKey: "card.cortinas.barra-larga",
  },
  {
    name: "Forro & Blackout",
    href: "/cortinas/tipos-de-acabamento/forro-blackout",
    image: "/images/cortinas/blackout-01.jpg",
    description: "Forro com diferentes porcentagens de bloqueio de luz",
    descriptionKey: "card.cortinas.forro-blackout",
  },
];

// Subcategorias de Suportes e Ferragens
export const CORTINAS_SUPORTES_FERRAGENS = [
  {
    name: "Varão",
    href: "/cortinas/suportes-e-ferragens/varao",
    image: "/images/cortinas/cortina-26.jpg",
    description: "Varão simples, com ponteira decorativa ou duplo",
    descriptionKey: "card.cortinas.varao",
  },
  {
    name: "Trilho Suíço",
    href: "/cortinas/suportes-e-ferragens/trilho-suico",
    image: "/images/cortinas/prega-americana-desktop-04.jpg",
    description: "Trilho embutido discreto, ideal para cortinas de tecido",
    descriptionKey: "card.cortinas.trilho-suico",
  },
  {
    name: "Trilho Motorizado",
    href: "/cortinas/suportes-e-ferragens/trilho-motorizado",
    image: "/images/cortinas/wave-04.jpg",
    description: "Automação com controle remoto ou integração com smart home",
    descriptionKey: "card.cortinas.trilho-motorizado",
  },
];

// Subcategorias de Modelos
export const CORTINAS_MODELOS = [
  {
    name: "Cortina Tradicional",
    href: "/cortinas/modelos/cortina-tradicional",
    image: "/images/cortinas/prega-americana-desktop-01.jpg",
    description: "Cortina clássica em camada única, versátil e atemporal",
    descriptionKey: "card.cortinas.cortina-tradicional",
  },
  {
    name: "Cortina com Forro",
    href: "/cortinas/modelos/cortina-com-forro",
    image: "/images/cortinas/ilhos-04.jpg",
    description: "Cortina com forro interno para privacidade e conforto térmico",
    descriptionKey: "card.cortinas.cortina-com-forro",
  },
  {
    name: "Cortina Dupla",
    href: "/cortinas/modelos/cortina-dupla",
    image: "/images/cortinas/cortina-07.jpg",
    desktopImage: "/images/cortinas/cortina-07-desktop.jpg",
    description: "Duas camadas sobrepostas: voil + blackout ou tecido + tecido",
    descriptionKey: "card.cortinas.cortina-dupla",
  },
  {
    name: "Cortina Piso-Teto",
    href: "/cortinas/modelos/cortina-piso-teto",
    image: "/images/cortinas/blackout-04.jpg",
    description: "Do teto ao chão para efeito dramático e sofisticado",
    descriptionKey: "card.cortinas.cortina-piso-teto",
  },
];

export const PERSIANAS_SUBCATEGORIES = [
  {
    name: "Rolô Duo",
    href: "/persianas/rolo-duo",
    image: "/images/persianas/rolo-duo-card.png",
    description: "Duas camadas de tecido para controle total de luz e privacidade",
    descriptionKey: "card.persianas.rolo-duo",
  },
  {
    name: "Rolô",
    href: "/persianas/rolo",
    image: "/images/persianas/rolo-01.jpg",
    description: "Simplicidade e funcionalidade em tecidos de alta qualidade",
    descriptionKey: "card.persianas.rolo",
  },
  {
    name: "Romana",
    href: "/persianas/romana",
    image: "/images/persianas/persiana-07.jpg",
    description: "Dobras horizontais elegantes que valorizam qualquer ambiente",
    descriptionKey: "card.persianas.romana",
  },
  {
    name: "Miragem",
    href: "/persianas/miragem",
    image: "/images/persianas/miragem-01.png",
    description: "Efeito visual único com transparência e privacidade simultâneas",
    descriptionKey: "card.persianas.miragem",
  },
  {
    name: "VF Romana de Teto",
    href: "/persianas/vf-romana-de-teto",
    image: "/images/persianas/vf-romana-teto-01.png",
    description: "Instalação em teto para ambientes contemporâneos e arrojados",
    descriptionKey: "card.persianas.vf-romana-de-teto",
  },
  {
    name: "Painel",
    href: "/persianas/painel",
    image: "/images/persianas/painel-02.png",
    description: "Painéis deslizantes modernos para grandes aberturas e divisórias",
    descriptionKey: "card.persianas.painel",
  },
];

export const PAPEIS_SUBCATEGORIES = [
  {
    name: "Geométricos",
    href: "/papeis-de-parede/geometricos",
    image: "/images/papeis-hero.jpg",
    description: "Padrões geométricos e abstratos para ambientes modernos",
    descriptionKey: "card.papeis.geometricos",
  },
  {
    name: "Infantil",
    href: "/papeis-de-parede/infantil",
    image: "/images/papel-infantil.jpg",
    description: "Estampas encantadoras para o quarto dos pequenos",
    descriptionKey: "card.papeis.infantil",
  },
  {
    name: "Floral",
    href: "/papeis-de-parede/floral",
    image: "/images/papel/papel-01.jpg",
    description: "Estampas florais para ambientes elegantes e cheios de vida",
    descriptionKey: "card.papeis.floral",
  },
  {
    name: "Texturas",
    href: "/papeis-de-parede/texturas",
    image: "/images/papel/papel-04.jpg",
    description: "Efeitos táteis e visuais que adicionam profundidade ao espaço",
    descriptionKey: "card.papeis.texturas",
  },
  {
    name: "Clássico",
    href: "/papeis-de-parede/classico",
    image: "/images/papel/papel-08.jpg",
    description: "Padrões atemporais com elegância e sofisticação",
    descriptionKey: "card.papeis.classico",
  },
  {
    name: "Moderno",
    href: "/papeis-de-parede/moderno",
    image: "/images/papel/papel-11.jpg",
    description: "Design contemporâneo para ambientes arrojados e únicos",
    descriptionKey: "card.papeis.moderno",
  },
  {
    name: "Natural & Botânico",
    href: "/papeis-de-parede/natural-botanico",
    image: "/images/papel/papel-14.jpg",
    description: "Folhagens e elementos naturais que trazem o jardim para dentro",
    descriptionKey: "card.papeis.natural-botanico",
  },
  {
    name: "Minimalista",
    href: "/papeis-de-parede/minimalista",
    image: "/images/papel/papel-18.jpg",
    description: "Leveza e clareza para espaços serenos e equilibrados",
    descriptionKey: "card.papeis.minimalista",
  },
];

export const TAPETES_SUBCATEGORIES = [
  {
    name: "Moderno",
    href: "/tapetes/moderno",
    image: "/images/tapetes/tapete-01.jpg",
    desktopImage: "/images/tapetes/tapete-sob-medida-hero-desktop.png",
    description: "Linhas contemporâneas e design arrojado para ambientes modernos",
    descriptionKey: "card.tapetes.moderno",
  },
  {
    name: "Clássico",
    href: "/tapetes/classico",
    image: "/images/tapetes/tapete-04.jpg",
    desktopImage: "/images/tapetes/tapete-decorativo-hero-desktop.png",
    description: "Elegância atemporal com padrões tradicionais e refinados",
    descriptionKey: "card.tapetes.classico",
  },
  {
    name: "Minimalista",
    href: "/tapetes/minimalista",
    image: "/images/tapetes/tapete-07.jpg",
    desktopImage: "/images/tapetes/tapete-passadeira-hero-desktop.png",
    description: "Simplicidade e sofisticação em harmonia perfeita",
    descriptionKey: "card.tapetes.minimalista",
  },
  {
    name: "Boho",
    href: "/tapetes/boho",
    image: "/images/tapetes/tapete-10.jpg",
    desktopImage: "/images/tapetes/carving-organic-hero-desktop.png",
    description: "Estilo boêmio com texturas ricas e padrões únicos",
    descriptionKey: "card.tapetes.boho",
  },
  {
    name: "Natural",
    href: "/tapetes/natural",
    image: "/images/tapetes/tapete-13.jpg",
    desktopImage: "/images/tapetes/tapete-decorativo-hero-desktop.png",
    description: "Fibras naturais e tons terrosos que conectam com a natureza",
    descriptionKey: "card.tapetes.natural",
  },
];

// Produtos de Tapetes por subcategoria
export const TAPETE_PRODUCTS: Record<string, { name: string; image: string; category: string }[]> = {
  moderno: [
    { name: "Moderno - Modelo 1", image: "/images/tapetes/tapete-01.jpg", category: "Tapetes" },
    { name: "Moderno - Modelo 2", image: "/images/tapetes/tapete-02.jpg", category: "Tapetes" },
    { name: "Moderno - Modelo 3", image: "/images/tapetes/tapete-03.jpg", category: "Tapetes" },
  ],
  classico: [
    { name: "Clássico - Modelo 1", image: "/images/tapetes/tapete-04.jpg", category: "Tapetes" },
    { name: "Clássico - Modelo 2", image: "/images/tapetes/tapete-05.jpg", category: "Tapetes" },
    { name: "Clássico - Modelo 3", image: "/images/tapetes/tapete-06.jpg", category: "Tapetes" },
  ],
  minimalista: [
    { name: "Minimalista - Modelo 1", image: "/images/tapetes/tapete-07.jpg", category: "Tapetes" },
    { name: "Minimalista - Modelo 2", image: "/images/tapetes/tapete-08.jpg", category: "Tapetes" },
    { name: "Minimalista - Modelo 3", image: "/images/tapetes/tapete-09.jpg", category: "Tapetes" },
  ],
  boho: [
    { name: "Boho - Modelo 1", image: "/images/tapetes/tapete-10.jpg", category: "Tapetes" },
    { name: "Boho - Modelo 2", image: "/images/tapetes/tapete-11.jpg", category: "Tapetes" },
    { name: "Boho - Modelo 3", image: "/images/tapetes/tapete-12.jpg", category: "Tapetes" },
  ],
  natural: [
    { name: "Natural - Modelo 1", image: "/images/tapetes/tapete-13.jpg", category: "Tapetes" },
    { name: "Natural - Modelo 2", image: "/images/tapetes/tapete-14.jpg", category: "Tapetes" },
    { name: "Natural - Modelo 3", image: "/images/tapetes/tapete-15.jpg", category: "Tapetes" },
  ],
};

// Produtos de Papel de Parede por subcategoria
export const PAPEL_PRODUCTS: Record<string, { name: string; image: string; category: string; descriptionKey?: string }[]> = {
  breeze: [
    { name: "Breeze - Modelo 1", image: "/images/papel/papel-17.jpg", category: "Papéis de Parede" },
    { name: "Breeze - Modelo 2", image: "/images/papel/papel-20.jpg", category: "Papéis de Parede" },
    { name: "Breeze - Modelo 3", image: "/images/papel/papel-07.jpg", category: "Papéis de Parede" },
  ],
  geometricos: [
    { name: "Abstrato Cinza e Rose", image: "/images/papel/geometrico-01.jpg", category: "Papéis de Parede" },
    { name: "Abstrato Folhagem Areia", image: "/images/papel/geometrico-02.jpg", category: "Papéis de Parede" },
    { name: "Etternity Cinza", image: "/images/papel/geometrico-06.jpg", category: "Papéis de Parede" },
  ],
  infantil: [
    { name: "Motocross", image: "/images/papel/papel-infantil-motocross.jpg", category: "Papéis de Parede" },
    { name: "Jardim Floral Bebê", image: "/images/papel/papel-infantil-jardim-floral-bebe.jpg", category: "Papéis de Parede" },
    { name: "Mapa Mundi Rosa", image: "/images/papel/papel-infantil-mapa-mundi-rosa.jpg", category: "Papéis de Parede" },
  ],
  floral: [
    { name: "Rosa Inglesa", image: "/images/papel/papel-01.jpg", category: "Papéis de Parede" },
    { name: "Magnólia Branca", image: "/images/papel/papel-02.jpg", category: "Papéis de Parede" },
    { name: "Peônia Rosada", image: "/images/papel/papel-03.jpg", category: "Papéis de Parede" },
  ],
  texturas: [
    { name: "Cimento Queimado", image: "/images/papel/papel-04.jpg", category: "Papéis de Parede" },
    { name: "Fibra Natural", image: "/images/papel/papel-05.jpg", category: "Papéis de Parede" },
    { name: "Linho Bege", image: "/images/papel/papel-06.jpg", category: "Papéis de Parede" },
  ],
  classico: [
    { name: "Damasco Dourado", image: "/images/papel/papel-08.jpg", category: "Papéis de Parede" },
    { name: "Arabesco Real", image: "/images/papel/papel-09.jpg", category: "Papéis de Parede" },
    { name: "Listras Imperiais", image: "/images/papel/papel-10.jpg", category: "Papéis de Parede" },
  ],
  moderno: [
    { name: "Concreto Cinza", image: "/images/papel/papel-11.jpg", category: "Papéis de Parede" },
    { name: "Metal Escovado", image: "/images/papel/papel-12.jpg", category: "Papéis de Parede" },
    { name: "Grafite Urban", image: "/images/papel/papel-13.jpg", category: "Papéis de Parede" },
  ],
  "natural-botanico": [
    { name: "Folhagem Tropical", image: "/images/papel/papel-14.jpg", category: "Papéis de Parede" },
    { name: "Bambu Verde", image: "/images/papel/papel-15.jpg", category: "Papéis de Parede" },
    { name: "Samambaia Selvagem", image: "/images/papel/papel-16.jpg", category: "Papéis de Parede" },
  ],
  minimalista: [
    { name: "Off-White Liso", image: "/images/papel/papel-18.jpg", category: "Papéis de Parede" },
    { name: "Cinza Neblina", image: "/images/papel/papel-19.jpg", category: "Papéis de Parede" },
    { name: "Areia Fina", image: "/images/papel/papel-21.jpg", category: "Papéis de Parede" },
  ],
};

// Produtos de Persianas por subcategoria
export const PERSIANA_PRODUCTS: Record<string, { name: string; image: string; category: string }[]> = {
  "rolo-duo": [
    { name: "Rolô Duo - Modelo 1", image: "/images/persianas/rolo-duo-01.png", category: "Persianas" },
    { name: "Rolô Duo - Modelo 2", image: "/images/persianas/rolo-duo-02.png", category: "Persianas" },
  ],
  rolo: [
    { name: "Rolô - Modelo 1", image: "/images/persianas/rolo-new-01.png", category: "Persianas" },
    { name: "Rolô - Modelo 2", image: "/images/persianas/rolo-new-02.png", category: "Persianas" },
  ],
  romana: [
    { name: "Romana - Modelo 1", image: "/images/persianas/persiana-07.jpg", category: "Persianas" },
    { name: "Romana - Modelo 2", image: "/images/persianas/persiana-04.jpg", category: "Persianas" },
  ],
  miragem: [
    { name: "Miragem - Modelo 1", image: "/images/persianas/miragem-01.png", category: "Persianas" },
    { name: "Miragem - Modelo 2", image: "/images/persianas/miragem-02.png", category: "Persianas" },
  ],
  "vf-romana-de-teto": [
    { name: "VF Romana de Teto - Modelo 1", image: "/images/persianas/vf-romana-teto-01.png", category: "Persianas" },
    { name: "VF Romana de Teto - Modelo 2", image: "/images/persianas/vf-romana-teto-02.png", category: "Persianas" },
  ],
  painel: [
    { name: "Painel - Modelo 1", image: "/images/persianas/painel-01.png", category: "Persianas" },
    { name: "Painel - Modelo 2", image: "/images/persianas/painel-02.png", category: "Persianas" },
  ],
};

// Dados placeholder de produtos para subcategorias
export function getPlaceholderProducts(category: string, subcategory: string, count: number = 6) {
  const images = [
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=450&fit=crop",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=450&fit=crop",
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=450&fit=crop",
    "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=600&h=450&fit=crop",
    "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=450&fit=crop",
    "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&h=450&fit=crop",
  ];

  return Array.from({ length: count }, (_, i) => ({
    name: `${subcategory} - Modelo ${i + 1}`,
    image: images[i % images.length],
    category,
  }));
}

export const ALMOFADAS_SUBCATEGORIES = [
  {
    name: "Almofadas Decorativas",
    href: "/almofadas/decorativas",
    image: "/images/almofadas-hero.png",
    desktopImage: "/images/almofadas-hero-desktop.png",
    description: "Almofadas decorativas sob medida para todos os ambientes",
    descriptionKey: "card.almofadas.decorativas",
  },
];

export const ALMOFADA_PRODUCTS: Record<string, { name: string; image: string; category: string }[]> = {
  decorativas: [
    { name: "Almofada Decorativa", image: "/images/almofadas/decorativa-1.jpeg", category: "Almofadas" },
    { name: "Almofada Decorativa", image: "/images/almofadas/decorativa-2.jpeg", category: "Almofadas" },
    { name: "Almofada Decorativa", image: "/images/almofadas/decorativa-4.jpeg", category: "Almofadas" },
  ],
};

export const MOVEIS_SUBCATEGORIES = [
  {
    name: "Sala",
    href: "/moveis-sob-medida/sala",
    image: "/images/moveis-painel-tv.png",
    desktopImage: "/images/moveis-painel-tv-desktop.png",
    description: "Painéis, estantes e racks planejados para sala de estar",
    descriptionKey: "card.moveis.sala",
  },
  {
    name: "Quarto",
    href: "/moveis-sob-medida/quarto",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=750&fit=crop",
    description: "Guarda-roupas e cabeceiras sob medida para o quarto",
    descriptionKey: "card.moveis.quarto",
  },
  {
    name: "Cozinha",
    href: "/moveis-sob-medida/cozinha",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=750&fit=crop",
    description: "Armários e bancadas planejadas para cozinha",
    descriptionKey: "card.moveis.cozinha",
  },
  {
    name: "Home Office",
    href: "/moveis-sob-medida/home-office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=750&fit=crop",
    description: "Escritórios e espaços de trabalho sob medida em casa",
    descriptionKey: "card.moveis.home-office",
  },
  {
    name: "Closet",
    href: "/moveis-sob-medida/closet",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&h=750&fit=crop",
    description: "Closets planejados com organização e elegância",
    descriptionKey: "card.moveis.closet",
  },
];

export const MOVEL_PRODUCTS: Record<string, { name: string; image: string; category: string }[]> = {
  sala: [
    { name: "Painel de TV - Modelo 1", image: "/images/moveis/painel-de-tv/painel-01.jpg", category: "Móveis Sob Medida" },
    { name: "Painel de TV - Modelo 2", image: "/images/moveis/painel-de-tv/painel-02.jpg", category: "Móveis Sob Medida" },
  ],
  quarto: getPlaceholderProducts("Móveis Sob Medida", "Quarto", 2),
  cozinha: getPlaceholderProducts("Móveis Sob Medida", "Cozinha", 2),
  "home-office": getPlaceholderProducts("Móveis Sob Medida", "Home Office", 2),
  closet: getPlaceholderProducts("Móveis Sob Medida", "Closet", 2),
};
