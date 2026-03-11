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
    name: "Cortinas de Tecido",
    href: "/cortinas/tecido",
    image: "/images/cortinas-tecido.jpg",
    desktopImage: "/images/cortinas-hero-room.jpeg",
    cardImage: "/images/cortinas-tecido-card.jpg",
    description: "Elegância e sofisticação com tecidos nobres sob medida",
    descriptionKey: "card.cortinas.tecido",
  },
  {
    name: "Prega Americana",
    href: "/cortinas/prega-americana",
    image: "/images/cortinas-prega-americana.jpg",
    description: "Estilo clássico com pregas elegantes e bem definidas",
    descriptionKey: "card.cortinas.prega-americana",
  },
  {
    name: "Cortina com Ilhós",
    href: "/cortinas/ilhos",
    image: "/images/cortinas-ilhos.jpg",
    description: "Visual moderno com argolas metálicas e deslizamento suave",
    descriptionKey: "card.cortinas.ilhos",
  },
  {
    name: "Cortina Wave",
    href: "/cortinas/wave",
    image: "/images/cortinas-wave.jpg",
    description: "Caimento suave em ondas uniformes para um visual contemporâneo",
    descriptionKey: "card.cortinas.wave",
  },
  {
    name: "Blackout & Acústicas",
    href: "/cortinas/blackout-acusticas",
    image: "/images/cortinas/blackout-03.jpg",
    description: "Bloqueio total de luz e isolamento acústico para conforto máximo",
    descriptionKey: "card.cortinas.blackout-acusticas",
  },
];

// Produtos de Cortinas por subcategoria
export const CORTINA_PRODUCTS: Record<string, { name: string; image: string; desktopImage?: string; category: string }[]> = {
  tecido: [
    { name: "Cortina de Tecido - Modelo 1", image: "/images/cortinas/cortina-01.jpg", desktopImage: "/images/cortinas/cortina-tecido-hero-desktop.png", category: "Cortinas" },
    { name: "Cortina de Tecido - Modelo 2", image: "/images/cortinas/cortina-02.jpg", category: "Cortinas" },
    { name: "Cortina de Tecido - Modelo 3", image: "/images/cortinas/cortina-03.jpg", category: "Cortinas" },
    { name: "Cortina de Tecido - Modelo 4", image: "/images/cortinas/cortina-04.jpg", category: "Cortinas" },
    { name: "Cortina de Tecido - Modelo 5", image: "/images/cortinas/cortina-05.jpg", category: "Cortinas" },
    { name: "Cortina de Tecido - Modelo 6", image: "/images/cortinas/cortina-06.jpg", category: "Cortinas" },
  ],
  "prega-americana": [
    { name: "Prega Americana - Modelo 1", image: "/images/cortinas/prega-americana-desktop-01.jpg", desktopImage: "/images/cortinas/prega-americana-desktop-01.jpg", category: "Cortinas" },
    { name: "Prega Americana - Modelo 2", image: "/images/cortinas/prega-americana-desktop-02.jpg", desktopImage: "/images/cortinas/prega-americana-desktop-02.jpg", category: "Cortinas" },
    { name: "Prega Americana - Modelo 3", image: "/images/cortinas/prega-americana-desktop-03.jpg", desktopImage: "/images/cortinas/prega-americana-desktop-03.jpg", category: "Cortinas" },
    { name: "Prega Americana - Modelo 4", image: "/images/cortinas/prega-americana-desktop-04.jpg", desktopImage: "/images/cortinas/prega-americana-desktop-04.jpg", category: "Cortinas" },
    { name: "Prega Americana - Modelo 5", image: "/images/cortinas/prega-americana-desktop-05.jpg", desktopImage: "/images/cortinas/prega-americana-desktop-05.jpg", category: "Cortinas" },
    { name: "Prega Americana - Modelo 6", image: "/images/cortinas/prega-americana-desktop-06.jpg", desktopImage: "/images/cortinas/prega-americana-desktop-06.jpg", category: "Cortinas" },
  ],
  ilhos: [
    { name: "Cortina com Ilhós - Modelo 1", image: "/images/cortinas/ilhos-01.jpg", category: "Cortinas" },
    { name: "Cortina com Ilhós - Modelo 2", image: "/images/cortinas/ilhos-02.jpg", category: "Cortinas" },
    { name: "Cortina com Ilhós - Modelo 3", image: "/images/cortinas/ilhos-03.jpg", category: "Cortinas" },
    { name: "Cortina com Ilhós - Modelo 4", image: "/images/cortinas/ilhos-04.jpg", category: "Cortinas" },
    { name: "Cortina com Ilhós - Modelo 5", image: "/images/cortinas/ilhos-05.jpg", category: "Cortinas" },
    { name: "Cortina com Ilhós - Modelo 6", image: "/images/cortinas/ilhos-06.jpg", category: "Cortinas" },
  ],
  wave: [
    { name: "Cortina Wave - Modelo 1", image: "/images/cortinas/cortina-19.jpg", desktopImage: "/images/cortinas/cortina-wave-hero-desktop.png", category: "Cortinas" },
    { name: "Cortina Wave - Modelo 2", image: "/images/cortinas/wave-01.jpg", category: "Cortinas" },
    { name: "Cortina Wave - Modelo 3", image: "/images/cortinas/wave-02.jpg", category: "Cortinas" },
    { name: "Cortina Wave - Modelo 4", image: "/images/cortinas/wave-03.jpg", category: "Cortinas" },
    { name: "Cortina Wave - Modelo 5", image: "/images/cortinas/wave-04.jpg", category: "Cortinas" },
    { name: "Cortina Wave - Modelo 6", image: "/images/cortinas/wave-05.jpg", category: "Cortinas" },
    { name: "Cortina Wave - Modelo 7", image: "/images/cortinas/wave-06.jpg", category: "Cortinas" },
    { name: "Cortina Wave - Modelo 8", image: "/images/cortinas/wave-07.jpg", category: "Cortinas" },
  ],
  "blackout-acusticas": [
    { name: "Blackout & Acústica - Modelo 1", image: "/images/cortinas/cortina-25.jpg", desktopImage: "/images/cortinas/cortina-blackout-hero-desktop.png", category: "Cortinas" },
    { name: "Blackout & Acústica - Modelo 2", image: "/images/cortinas/blackout-01.jpg", category: "Cortinas" },
    { name: "Blackout & Acústica - Modelo 3", image: "/images/cortinas/blackout-02.jpg", category: "Cortinas" },
    { name: "Blackout & Acústica - Modelo 4", image: "/images/cortinas/blackout-03.jpg", category: "Cortinas" },
    { name: "Blackout & Acústica - Modelo 5", image: "/images/cortinas/blackout-04.jpg", category: "Cortinas" },
    { name: "Blackout & Acústica - Modelo 6", image: "/images/cortinas/blackout-05.jpg", category: "Cortinas" },
    { name: "Blackout & Acústica - Modelo 7", image: "/images/cortinas/blackout-06.jpg", category: "Cortinas" },
  ],
};

export const PERSIANAS_SUBCATEGORIES = [
  {
    name: "Horizontais",
    href: "/persianas/horizontais",
    image: "/images/persianas/persiana-02.jpg",
    desktopImage: "/images/persianas/persiana-hero-desktop.jpeg",
    description: "Versatilidade e durabilidade em alumínio ou madeira",
    descriptionKey: "card.persianas.horizontais",
  },
  {
    name: "Verticais",
    href: "/persianas/verticais",
    image: "/images/persianas/persiana-13.jpg",
    description: "Ideal para grandes janelas e portas de vidro",
    descriptionKey: "card.persianas.verticais",
  },
  {
    name: "Rolô & Double Vision",
    href: "/persianas/rolo-double-vision",
    image: "/images/persianas/persiana-15.jpg",
    description: "Controle preciso de luminosidade com design moderno",
    descriptionKey: "card.persianas.rolo-double-vision",
  },
];

export const PAPEIS_SUBCATEGORIES = [
  {
    name: "Geométricos",
    href: "/papeis-de-parede/geometricos",
    image: "/images/papel-geometricos.jpg",
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
    name: "Cozinha",
    href: "/papeis-de-parede/cozinha",
    image: "/images/papel/cozinha/cozinha-marmore-calacata-dourado.jpg",
    description: "Revestimentos e estampas exclusivas para cozinhas sofisticadas",
    descriptionKey: "card.papeis.cozinha",
  },
];

export const TAPETES_SUBCATEGORIES = [
  {
    name: "Carving Organic",
    href: "/tapetes/carving-organic",
    image: "/images/tapetes/tapete-sob-medida-01.png",
    desktopImage: "/images/tapetes-hero-desktop.png",
    description: "Design autoral com formas orgânicas e acabamento artesanal",
    descriptionKey: "card.tapetes.carving-organic",
  },
  {
    name: "Nativa",
    href: "/tapetes/nativa",
    image: "/images/tapetes/tapete-nativa-hero.png",
    description: "Peças que agregam estilo e personalidade ao ambiente",
    descriptionKey: "card.tapetes.nativa",
  },
  {
    name: "Tapete Rede",
    href: "/tapetes/rede",
    image: "/images/tapetes/tapete-14.jpg",
    description: "Tapetes em rede com textura natural e design exclusivo",
    descriptionKey: "card.tapetes.rede",
  },
];

// Produtos de Tapetes por subcategoria
export const TAPETE_PRODUCTS: Record<string, { name: string; image: string; category: string }[]> = {
  "carving-organic": [
    { name: "Carving Organic - Modelo 1", image: "/images/tapetes/carving-organic-card-1.png", category: "Tapetes" },
    { name: "Carving Organic - Modelo 2", image: "/images/tapetes/carving-organic-card-2.png", category: "Tapetes" },
    { name: "Carving Organic - Modelo 3", image: "/images/tapetes/carving-organic-card-3.png", category: "Tapetes" },
  ],
  nativa: [
    { name: "Nativa - Modelo 1", image: "/images/tapetes/tapete-decorativo-01.png", category: "Tapetes" },
    { name: "Nativa - Modelo 2", image: "/images/tapetes/tapete-decorativo-02.png", category: "Tapetes" },
    { name: "Nativa - Modelo 3", image: "/images/tapetes/tapete-decorativo-03.png", category: "Tapetes" },
  ],
  rede: [
    { name: "Tapete Rede - Modelo 1", image: "/images/tapetes/tapete-14.jpg", category: "Tapetes" },
    { name: "Tapete Rede - Modelo 2", image: "/images/tapetes/tapete-12.jpg", category: "Tapetes" },
    { name: "Tapete Rede - Modelo 3", image: "/images/tapetes/tapete-13.jpg", category: "Tapetes" },
    { name: "Tapete Rede - Modelo 4", image: "/images/tapetes/tapete-04.jpg", category: "Tapetes" },
    { name: "Tapete Rede - Modelo 5", image: "/images/tapetes/tapete-05.jpg", category: "Tapetes" },
  ],
};

// Produtos de Papel de Parede por subcategoria
export const PAPEL_PRODUCTS: Record<string, { name: string; image: string; category: string; descriptionKey?: string }[]> = {
  breeze: [
    { name: "Breeze - Modelo 1", image: "/images/papel/papel-17.jpg", category: "Papéis de Parede" },
    { name: "Breeze - Modelo 2", image: "/images/papel/papel-20.jpg", category: "Papéis de Parede" },
    { name: "Breeze - Modelo 3", image: "/images/papel/papel-07.jpg", category: "Papéis de Parede" },
    { name: "Breeze - Modelo 4", image: "/images/papel/papel-11.jpg", category: "Papéis de Parede" },
    { name: "Breeze - Modelo 5", image: "/images/papel/papel-26.jpg", category: "Papéis de Parede" },
    { name: "Breeze - Modelo 6", image: "/images/papel/papel-33.jpg", category: "Papéis de Parede" },
    { name: "Breeze - Modelo 7", image: "/images/papel/papel-14.jpg", category: "Papéis de Parede" },
    { name: "Breeze - Modelo 8", image: "/images/papel/papel-18.jpg", category: "Papéis de Parede" },
    { name: "Breeze - Modelo 9", image: "/images/papel/papel-15.jpg", category: "Papéis de Parede" },
    { name: "Breeze - Modelo 10", image: "/images/papel/papel-22.jpg", category: "Papéis de Parede" },
    { name: "Breeze - Modelo 11", image: "/images/papel/papel-04.jpg", category: "Papéis de Parede" },
    { name: "Breeze - Modelo 12", image: "/images/papel/papel-05.jpg", category: "Papéis de Parede" },
  ],
  geometricos: [
    { name: "Abstrato Cinza e Rose", image: "/images/papel/geometrico-01.jpg", category: "Papéis de Parede" },
    { name: "Abstrato Folhagem Areia", image: "/images/papel/geometrico-02.jpg", category: "Papéis de Parede" },
    { name: "Abstrato Maze Areia", image: "/images/papel/geometrico-03.jpg", category: "Papéis de Parede" },
    { name: "City Areia", image: "/images/papel/geometrico-04.jpg", category: "Papéis de Parede" },
    { name: "Escandinavo Leaves Areia", image: "/images/papel/geometrico-05.jpg", category: "Papéis de Parede" },
    { name: "Etternity Cinza", image: "/images/papel/geometrico-06.jpg", category: "Papéis de Parede" },
    { name: "Etternity Marrom", image: "/images/papel/geometrico-07.jpg", category: "Papéis de Parede" },
    { name: "Geométrico Maya Azul", image: "/images/papel/geometrico-08.jpg", category: "Papéis de Parede" },
    { name: "Linen Folhas Verde", image: "/images/papel/geometrico-09.jpg", category: "Papéis de Parede" },
    { name: "Mix Folhagem Grayscale Camurça", image: "/images/papel/geometrico-10.jpg", category: "Papéis de Parede" },
    { name: "Mix Folhagem Grayscale Mocha", image: "/images/papel/geometrico-11.jpg", category: "Papéis de Parede" },
    { name: "Toras Abstratas Camurça", image: "/images/papel/geometrico-12.jpg", category: "Papéis de Parede" },
  ],
  infantil: [
    { name: "Aquarela Pendente", image: "/images/papel/papel-infantil-aquarela-pendente.jpg", category: "Papéis de Parede" },
    { name: "Arco-Íris e Bolinhas Aquarela", image: "/images/papel/papel-infantil-arco-iris-bolinhas.jpg", category: "Papéis de Parede" },
    { name: "Boiserie Verde Água", image: "/images/papel/papel-infantil-boiserie-verde-agua.jpg", category: "Papéis de Parede" },
    { name: "Motocross", image: "/images/papel/papel-infantil-motocross.jpg", category: "Papéis de Parede", descriptionKey: "product.motocross.description" },
    { name: "Jardim Floral Bebê", image: "/images/papel/papel-infantil-jardim-floral-bebe.jpg", category: "Papéis de Parede", descriptionKey: "product.jardimFloralBebe.description" },
    { name: "Mapa Mundi Rosa", image: "/images/papel/papel-infantil-mapa-mundi-rosa.jpg", category: "Papéis de Parede", descriptionKey: "product.mapaMundiRosa.description" },
    { name: "Fundo do Mar", image: "/images/papel/papel-infantil-fundo-do-mar.jpg", category: "Papéis de Parede" },
    { name: "Cute Arco-Íris e Corações", image: "/images/papel/papel-infantil-cute-arco-iris-coracoes.jpg", category: "Papéis de Parede" },
    { name: "Dinos Areia", image: "/images/papel/papel-infantil-dinos-areia.jpg", category: "Papéis de Parede" },
    { name: "Dinossauros", image: "/images/papel/papel-infantil-dinossauros.jpg", category: "Papéis de Parede" },
    { name: "Infantil Bolas e Estrelas", image: "/images/papel/papel-infantil-bolas-estrelas.jpg", category: "Papéis de Parede" },
    { name: "Planetas e Naves Cinza", image: "/images/papel/papel-infantil-planetas-naves.jpg", category: "Papéis de Parede" },
  ],
  cozinha: [
    { name: "Azulejos Portugueses Azul", image: "/images/papel/cozinha/cozinha-azulejos-portugueses-azul.jpg", category: "Papéis de Parede" },
    { name: "3D Cubic Azul", image: "/images/papel/cozinha/cozinha-3d-cubic-azul.jpg", category: "Papéis de Parede" },
    { name: "Cozinhando com Palavras", image: "/images/papel/cozinha/cozinha-cozinhando-palavras.jpg", category: "Papéis de Parede" },
    { name: "Hora do Churrasco Latte", image: "/images/papel/cozinha/cozinha-hora-churrasco-latte.jpg", category: "Papéis de Parede" },
    { name: "Ladrilhos Chevron Cinza Escuro", image: "/images/papel/cozinha/cozinha-ladrilhos-chevron-cinza.jpg", category: "Papéis de Parede" },
    { name: "Ladrilhos Chevron Verde Escuro", image: "/images/papel/cozinha/cozinha-ladrilhos-chevron-verde.jpg", category: "Papéis de Parede" },
    { name: "Mármore Carrara", image: "/images/papel/cozinha/cozinha-marmore-carrara.jpg", category: "Papéis de Parede" },
    { name: "Mata Monocromática", image: "/images/papel/cozinha/cozinha-mata-monocromatica.jpg", category: "Papéis de Parede" },
    { name: "Mata Oriental", image: "/images/papel/cozinha/cozinha-mata-oriental.jpg", category: "Papéis de Parede" },
    { name: "Mármore Calacata Dourado", image: "/images/papel/cozinha/cozinha-marmore-calacata-dourado.jpg", category: "Papéis de Parede" },
    { name: "Parede Verde", image: "/images/papel/cozinha/cozinha-parede-verde.jpg", category: "Papéis de Parede" },
    { name: "Pedra Canjiquinha", image: "/images/papel/cozinha/cozinha-pedra-canjiquinha.jpg", category: "Papéis de Parede" },
  ],
};

// Produtos de Persianas por subcategoria
export const PERSIANA_PRODUCTS: Record<string, { name: string; image: string; category: string }[]> = {
  horizontais: [
    { name: "Horizontal - Modelo 1", image: "/images/persianas/persiana-02.jpg", category: "Persianas" },
    { name: "Horizontal - Modelo 2", image: "/images/persianas/persiana-14.jpg", category: "Persianas" },
    { name: "Horizontal - Modelo 3", image: "/images/persianas/persiana-h-sala.jpg", category: "Persianas" },
    { name: "Horizontal - Modelo 4", image: "/images/persianas/persiana-h-cinza.jpg", category: "Persianas" },
    { name: "Horizontal - Modelo 5", image: "/images/persianas/persiana-h-close.jpg", category: "Persianas" },
    { name: "Horizontal - Modelo 6", image: "/images/persianas/persiana-h-unilux.jpg", category: "Persianas" },
  ],
  verticais: [
    { name: "Vertical - Modelo 1", image: "/images/persianas/persiana-13.jpg", category: "Persianas" },
    { name: "Vertical - Modelo 2", image: "/images/persianas/persiana-07.jpg", category: "Persianas" },
    { name: "Vertical - Modelo 3", image: "/images/persianas/persiana-vertical.jpg", category: "Persianas" },
    { name: "Vertical - Modelo 4", image: "/images/persianas/persiana-17.jpg", category: "Persianas" },
    { name: "Vertical - Modelo 5", image: "/images/persianas/persiana-11.jpg", category: "Persianas" },
    { name: "Vertical - Modelo 6", image: "/images/persianas/persiana-04.jpg", category: "Persianas" },
  ],
  "rolo-double-vision": [
    { name: "Rolô - Modelo 1", image: "/images/persianas/rolo-01.jpg", category: "Persianas" },
    { name: "Rolô - Modelo 2", image: "/images/persianas/rolo-02.jpg", category: "Persianas" },
    { name: "Rolô - Modelo 3", image: "/images/persianas/rolo-03.jpg", category: "Persianas" },
    { name: "Double Vision - Modelo 1", image: "/images/persianas/rolo-04.jpg", category: "Persianas" },
    { name: "Double Vision - Modelo 2", image: "/images/persianas/rolo-05.jpg", category: "Persianas" },
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
    name: "Estantes",
    href: "/moveis-sob-medida/estantes",
    image: "/images/moveis-estantes.png",
    description: "Estantes planejadas que combinam função e sofisticação",
    descriptionKey: "card.moveis.estantes",
  },
  {
    name: "Mesa de Centro",
    href: "/moveis-sob-medida/mesa-de-centro",
    image: "/images/moveis-mesa-centro.png",
    description: "Mesas de centro sob medida para sala de estar",
    descriptionKey: "card.moveis.mesa-de-centro",
  },
  {
    name: "Painel de TV",
    href: "/moveis-sob-medida/painel-de-tv",
    image: "/images/moveis-painel-tv.png",
    description: "Painéis sob medida com design sofisticado para sala de estar",
    descriptionKey: "card.moveis.painel-de-tv",
  },
];

export const MOVEL_PRODUCTS: Record<string, { name: string; image: string; category: string }[]> = {
  estantes: [
    { name: "Estante - Modelo 1", image: "/images/moveis/estantes/estante-01.jpg", category: "Móveis Sob Medida" },
    { name: "Estante - Modelo 2", image: "/images/moveis/estantes/estante-02.jpg", category: "Móveis Sob Medida" },
    { name: "Estante - Modelo 3", image: "/images/moveis/estantes/estante-03.jpg", category: "Móveis Sob Medida" },
    { name: "Estante - Modelo 4", image: "/images/moveis/estantes/estante-04.jpg", category: "Móveis Sob Medida" },
    { name: "Estante - Modelo 5", image: "/images/moveis/estantes/estante-05.jpg", category: "Móveis Sob Medida" },
    { name: "Estante - Modelo 6", image: "/images/moveis/estantes/estante-06.jpg", category: "Móveis Sob Medida" },
  ],
  armarios: getPlaceholderProducts("Móveis Sob Medida", "Armário", 6),
  "painel-de-tv": [
    { name: "Painel de TV - Modelo 1", image: "/images/moveis/painel-de-tv/painel-01.jpg", category: "Móveis Sob Medida" },
    { name: "Painel de TV - Modelo 2", image: "/images/moveis/painel-de-tv/painel-02.jpg", category: "Móveis Sob Medida" },
    { name: "Painel de TV - Modelo 3", image: "/images/moveis/painel-de-tv/painel-03.jpg", category: "Móveis Sob Medida" },
    { name: "Painel de TV - Modelo 4", image: "/images/moveis/painel-de-tv/painel-04.jpg", category: "Móveis Sob Medida" },
    { name: "Painel de TV - Modelo 5", image: "/images/moveis/painel-de-tv/painel-05.jpg", category: "Móveis Sob Medida" },
    { name: "Painel de TV - Modelo 6", image: "/images/moveis/painel-de-tv/painel-06.jpg", category: "Móveis Sob Medida" },
  ],
  "mesa-de-centro": [
    { name: "Mesa de Centro - Modelo 1", image: "/images/moveis/mesa-de-centro/mesa-01.jpg", category: "Móveis Sob Medida" },
    { name: "Mesa de Centro - Modelo 2", image: "/images/moveis/mesa-de-centro/mesa-02.jpg", category: "Móveis Sob Medida" },
    { name: "Mesa de Centro - Modelo 3", image: "/images/moveis/mesa-de-centro/mesa-03.jpg", category: "Móveis Sob Medida" },
    { name: "Mesa de Centro - Modelo 4", image: "/images/moveis/mesa-de-centro/mesa-04.jpg", category: "Móveis Sob Medida" },
    { name: "Mesa de Centro - Modelo 5", image: "/images/moveis/mesa-de-centro/mesa-05.jpg", category: "Móveis Sob Medida" },
    { name: "Mesa de Centro - Modelo 6", image: "/images/moveis/mesa-de-centro/mesa-06.jpg", category: "Móveis Sob Medida" },
  ],
};
