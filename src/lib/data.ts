// Dados centralizados de subcategorias para cada categoria

export const CORTINAS_SUBCATEGORIES = [
  {
    name: "Cortinas de Tecido",
    href: "/cortinas/tecido",
    image: "/images/cortinas-tecido.jpg",
    desktopImage: "/images/cortinas-hero-desktop.png",
    cardImage: "/images/cortinas-tecido-card.jpg",
    description: "Elegância e sofisticação com tecidos nobres sob medida",
  },
  {
    name: "Prega Americana",
    href: "/cortinas/prega-americana",
    image: "/images/cortinas-prega-americana.jpg",
    description: "Estilo clássico com pregas elegantes e bem definidas",
  },
  {
    name: "Cortina com Ilhós",
    href: "/cortinas/ilhos",
    image: "/images/cortinas-ilhos.jpg",
    description: "Visual moderno com argolas metálicas e deslizamento suave",
  },
  {
    name: "Cortina Wave",
    href: "/cortinas/wave",
    image: "/images/cortinas-wave.jpg",
    description: "Caimento suave em ondas uniformes para um visual contemporâneo",
  },
  {
    name: "Blackout & Acústicas",
    href: "/cortinas/blackout-acusticas",
    image: "/images/cortinas-blackout.png",
    description: "Bloqueio total de luz e isolamento acústico para conforto máximo",
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
    { name: "Prega Americana - Modelo 1", image: "/images/cortinas/cortina-07.jpg", desktopImage: "/images/cortinas/cortina-prega-hero-desktop.png", category: "Cortinas" },
    { name: "Prega Americana - Modelo 2", image: "/images/cortinas/cortina-08.jpg", category: "Cortinas" },
    { name: "Prega Americana - Modelo 3", image: "/images/cortinas/cortina-09.jpg", category: "Cortinas" },
    { name: "Prega Americana - Modelo 4", image: "/images/cortinas/cortina-10.jpg", category: "Cortinas" },
    { name: "Prega Americana - Modelo 5", image: "/images/cortinas/cortina-11.jpg", category: "Cortinas" },
    { name: "Prega Americana - Modelo 6", image: "/images/cortinas/cortina-12.jpg", category: "Cortinas" },
  ],
  ilhos: [
    { name: "Cortina com Ilhós - Modelo 1", image: "/images/cortinas/cortina-13.jpg", desktopImage: "/images/cortinas/cortina-ilhos-hero-desktop.png", category: "Cortinas" },
    { name: "Cortina com Ilhós - Modelo 2", image: "/images/cortinas/cortina-14.jpg", category: "Cortinas" },
    { name: "Cortina com Ilhós - Modelo 3", image: "/images/cortinas/cortina-15.jpg", category: "Cortinas" },
    { name: "Cortina com Ilhós - Modelo 4", image: "/images/cortinas/cortina-16.jpg", category: "Cortinas" },
    { name: "Cortina com Ilhós - Modelo 5", image: "/images/cortinas/cortina-17.jpg", category: "Cortinas" },
    { name: "Cortina com Ilhós - Modelo 6", image: "/images/cortinas/cortina-18.jpg", category: "Cortinas" },
  ],
  wave: [
    { name: "Cortina Wave - Modelo 1", image: "/images/cortinas/cortina-19.jpg", desktopImage: "/images/cortinas/cortina-wave-hero-desktop.png", category: "Cortinas" },
    { name: "Cortina Wave - Modelo 2", image: "/images/cortinas/cortina-20.jpg", category: "Cortinas" },
    { name: "Cortina Wave - Modelo 3", image: "/images/cortinas/cortina-21.jpg", category: "Cortinas" },
    { name: "Cortina Wave - Modelo 4", image: "/images/cortinas/cortina-22.jpg", category: "Cortinas" },
    { name: "Cortina Wave - Modelo 5", image: "/images/cortinas/cortina-23.jpg", category: "Cortinas" },
    { name: "Cortina Wave - Modelo 6", image: "/images/cortinas/cortina-24.jpg", category: "Cortinas" },
  ],
  "blackout-acusticas": [
    { name: "Blackout & Acústica - Modelo 1", image: "/images/cortinas/cortina-25.jpg", desktopImage: "/images/cortinas/cortina-blackout-hero-desktop.png", category: "Cortinas" },
    { name: "Blackout & Acústica - Modelo 2", image: "/images/cortinas/cortina-26.jpg", category: "Cortinas" },
    { name: "Blackout & Acústica - Modelo 3", image: "/images/cortinas/cortina-27.jpg", category: "Cortinas" },
    { name: "Blackout & Acústica - Modelo 4", image: "/images/cortinas/cortina-28.jpg", category: "Cortinas" },
    { name: "Blackout & Acústica - Modelo 5", image: "/images/cortinas/cortina-29.jpg", category: "Cortinas" },
  ],
};

export const PERSIANAS_SUBCATEGORIES = [
  {
    name: "Horizontais",
    href: "/persianas/horizontais",
    image: "/images/persianas/persiana-02.jpg",
    description: "Versatilidade e durabilidade em alumínio ou madeira",
  },
  {
    name: "Verticais",
    href: "/persianas/verticais",
    image: "/images/persianas/persiana-13.jpg",
    description: "Ideal para grandes janelas e portas de vidro",
  },
  {
    name: "Rolô & Double Vision",
    href: "/persianas/rolo-double-vision",
    image: "/images/persianas/persiana-15.jpg",
    description: "Controle preciso de luminosidade com design moderno",
  },
];

export const PAPEIS_SUBCATEGORIES = [
  {
    name: "Artesania",
    href: "/papeis-de-parede/artesania",
    image: "/images/papel-artesania.jpg",
    description: "Texturas artesanais com acabamento natural",
  },
  {
    name: "Breeze",
    href: "/papeis-de-parede/breeze",
    image: "/images/papel-breeze.jpg",
    description: "Leveza e frescor para ambientes contemporâneos",
  },
  {
    name: "Carving",
    href: "/papeis-de-parede/carving",
    image: "/images/papel-carving.jpg",
    description: "Relevos tridimensionais que criam profundidade",
  },
  {
    name: "Dali",
    href: "/papeis-de-parede/dali",
    image: "/images/papel-dali.jpg",
    description: "Padrões artísticos inspirados em grandes mestres",
  },
  {
    name: "Ecletic",
    href: "/papeis-de-parede/ecletic",
    image: "/images/papel-ecletic.jpg",
    description: "Mix de estilos para composições únicas",
  },
  {
    name: "Elegant",
    href: "/papeis-de-parede/elegant",
    image: "/images/papel-elegant.jpg",
    description: "Sofisticação e requinte para ambientes clássicos",
  },
];

export const TAPETES_SUBCATEGORIES = [
  {
    name: "Tapete Sob Medida",
    href: "/tapetes/sob-medida",
    image: "/images/tapetes/tapete-10.jpg",
    description: "Tamanho e formato personalizados para o seu espaço",
  },
  {
    name: "Tapete Decorativo",
    href: "/tapetes/decorativo",
    image: "/images/tapetes/tapete-03.jpg",
    description: "Peças que agregam estilo e personalidade ao ambiente",
  },
  {
    name: "Tapete Passadeira",
    href: "/tapetes/passadeira",
    image: "/images/tapetes/tapete-14.jpg",
    description: "Ideal para corredores, halls e áreas de circulação",
  },
];

// Produtos de Tapetes por subcategoria
export const TAPETE_PRODUCTS: Record<string, { name: string; image: string; category: string }[]> = {
  "sob-medida": [
    { name: "Sob Medida - Modelo 1", image: "/images/tapetes/tapete-10.jpg", category: "Tapetes" },
    { name: "Sob Medida - Modelo 2", image: "/images/tapetes/tapete-07.jpg", category: "Tapetes" },
    { name: "Sob Medida - Modelo 3", image: "/images/tapetes/tapete-09.jpg", category: "Tapetes" },
    { name: "Sob Medida - Modelo 4", image: "/images/tapetes/tapete-01.jpg", category: "Tapetes" },
    { name: "Sob Medida - Modelo 5", image: "/images/tapetes/tapete-08.jpg", category: "Tapetes" },
  ],
  decorativo: [
    { name: "Decorativo - Modelo 1", image: "/images/tapetes/tapete-03.jpg", category: "Tapetes" },
    { name: "Decorativo - Modelo 2", image: "/images/tapetes/tapete-02.jpg", category: "Tapetes" },
    { name: "Decorativo - Modelo 3", image: "/images/tapetes/tapete-06.jpg", category: "Tapetes" },
    { name: "Decorativo - Modelo 4", image: "/images/tapetes/tapete-15.jpg", category: "Tapetes" },
    { name: "Decorativo - Modelo 5", image: "/images/tapetes/tapete-11.jpg", category: "Tapetes" },
  ],
  passadeira: [
    { name: "Passadeira - Modelo 1", image: "/images/tapetes/tapete-14.jpg", category: "Tapetes" },
    { name: "Passadeira - Modelo 2", image: "/images/tapetes/tapete-12.jpg", category: "Tapetes" },
    { name: "Passadeira - Modelo 3", image: "/images/tapetes/tapete-13.jpg", category: "Tapetes" },
    { name: "Passadeira - Modelo 4", image: "/images/tapetes/tapete-04.jpg", category: "Tapetes" },
    { name: "Passadeira - Modelo 5", image: "/images/tapetes/tapete-05.jpg", category: "Tapetes" },
  ],
};

// Produtos de Papel de Parede por subcategoria (mix de imagens reais + placeholders)
const unsplash = {
  u1: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=450&fit=crop",
  u2: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=450&fit=crop",
  u3: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=450&fit=crop",
  u4: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=600&h=450&fit=crop",
  u5: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=450&fit=crop",
  u6: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&h=450&fit=crop",
};

export const PAPEL_PRODUCTS: Record<string, { name: string; image: string; category: string }[]> = {
  artesania: [
    { name: "Artesania - Modelo 1", image: "/images/papel/papel-14.jpg", category: "Papéis de Parede" },
    { name: "Artesania - Modelo 2", image: "/images/papel/papel-18.jpg", category: "Papéis de Parede" },
    { name: "Artesania - Modelo 3", image: "/images/papel/papel-01.jpg", category: "Papéis de Parede" },
    { name: "Artesania - Modelo 4", image: "/images/papel/papel-02.jpg", category: "Papéis de Parede" },
    { name: "Artesania - Modelo 5", image: "/images/papel/papel-30.jpg", category: "Papéis de Parede" },
    { name: "Artesania - Modelo 6", image: "/images/papel/papel-24.jpg", category: "Papéis de Parede" },
  ],
  breeze: [
    { name: "Breeze - Modelo 1", image: "/images/papel/papel-17.jpg", category: "Papéis de Parede" },
    { name: "Breeze - Modelo 2", image: "/images/papel/papel-20.jpg", category: "Papéis de Parede" },
    { name: "Breeze - Modelo 3", image: "/images/papel/papel-07.jpg", category: "Papéis de Parede" },
    { name: "Breeze - Modelo 4", image: "/images/papel/papel-11.jpg", category: "Papéis de Parede" },
    { name: "Breeze - Modelo 5", image: "/images/papel/papel-26.jpg", category: "Papéis de Parede" },
    { name: "Breeze - Modelo 6", image: "/images/papel/papel-33.jpg", category: "Papéis de Parede" },
  ],
  carving: [
    { name: "Carving - Modelo 1", image: "/images/papel/papel-16.jpg", category: "Papéis de Parede" },
    { name: "Carving - Modelo 2", image: "/images/papel/papel-21.jpg", category: "Papéis de Parede" },
    { name: "Carving - Modelo 3", image: "/images/papel/papel-12.jpg", category: "Papéis de Parede" },
    { name: "Carving - Modelo 4", image: "/images/papel/papel-03.jpg", category: "Papéis de Parede" },
    { name: "Carving - Modelo 5", image: "/images/papel/papel-27.jpg", category: "Papéis de Parede" },
    { name: "Carving - Modelo 6", image: "/images/papel/papel-32.jpg", category: "Papéis de Parede" },
  ],
  dali: [
    { name: "Dali - Modelo 1", image: "/images/papel/papel-15.jpg", category: "Papéis de Parede" },
    { name: "Dali - Modelo 2", image: "/images/papel/papel-22.jpg", category: "Papéis de Parede" },
    { name: "Dali - Modelo 3", image: "/images/papel/papel-09.jpg", category: "Papéis de Parede" },
    { name: "Dali - Modelo 4", image: "/images/papel/papel-10.jpg", category: "Papéis de Parede" },
    { name: "Dali - Modelo 5", image: "/images/papel/papel-28.jpg", category: "Papéis de Parede" },
    { name: "Dali - Modelo 6", image: "/images/papel/papel-31.jpg", category: "Papéis de Parede" },
  ],
  ecletic: [
    { name: "Ecletic - Modelo 1", image: "/images/papel/papel-04.jpg", category: "Papéis de Parede" },
    { name: "Ecletic - Modelo 2", image: "/images/papel/papel-05.jpg", category: "Papéis de Parede" },
    { name: "Ecletic - Modelo 3", image: "/images/papel/papel-13.jpg", category: "Papéis de Parede" },
    { name: "Ecletic - Modelo 4", image: "/images/papel/papel-25.jpg", category: "Papéis de Parede" },
    { name: "Ecletic - Modelo 5", image: "/images/papel/papel-29.jpg", category: "Papéis de Parede" },
    { name: "Ecletic - Modelo 6", image: "/images/papel/papel-34.jpg", category: "Papéis de Parede" },
  ],
  elegant: [
    { name: "Elegant - Modelo 1", image: "/images/papel/papel-19.jpg", category: "Papéis de Parede" },
    { name: "Elegant - Modelo 2", image: "/images/papel/papel-08.jpg", category: "Papéis de Parede" },
    { name: "Elegant - Modelo 3", image: "/images/papel/papel-06.jpg", category: "Papéis de Parede" },
    { name: "Elegant - Modelo 4", image: "/images/papel/papel-23.jpg", category: "Papéis de Parede" },
    { name: "Elegant - Modelo 5", image: "/images/papel/papel-35.jpg", category: "Papéis de Parede" },
    { name: "Elegant - Modelo 6", image: "/images/papel/papel-36.jpg", category: "Papéis de Parede" },
  ],
};

// Produtos de Persianas por subcategoria
export const PERSIANA_PRODUCTS: Record<string, { name: string; image: string; category: string }[]> = {
  horizontais: [
    { name: "Horizontal - Modelo 1", image: "/images/persianas/persiana-02.jpg", category: "Persianas" },
    { name: "Horizontal - Modelo 2", image: "/images/persianas/persiana-14.jpg", category: "Persianas" },
    { name: "Horizontal - Modelo 3", image: "/images/persianas/persiana-09.jpg", category: "Persianas" },
    { name: "Horizontal - Modelo 4", image: "/images/persianas/persiana-15.jpg", category: "Persianas" },
    { name: "Horizontal - Modelo 5", image: "/images/persianas/persiana-05.jpg", category: "Persianas" },
    { name: "Horizontal - Modelo 6", image: "/images/persianas/persiana-03.jpg", category: "Persianas" },
  ],
  verticais: [
    { name: "Vertical - Modelo 1", image: "/images/persianas/persiana-13.jpg", category: "Persianas" },
    { name: "Vertical - Modelo 2", image: "/images/persianas/persiana-07.jpg", category: "Persianas" },
    { name: "Vertical - Modelo 3", image: "/images/persianas/persiana-08.jpg", category: "Persianas" },
    { name: "Vertical - Modelo 4", image: "/images/persianas/persiana-17.jpg", category: "Persianas" },
    { name: "Vertical - Modelo 5", image: "/images/persianas/persiana-11.jpg", category: "Persianas" },
    { name: "Vertical - Modelo 6", image: "/images/persianas/persiana-04.jpg", category: "Persianas" },
  ],
  "rolo-double-vision": [
    { name: "Rolô - Modelo 1", image: "/images/persianas/persiana-16.jpg", category: "Persianas" },
    { name: "Rolô - Modelo 2", image: "/images/persianas/persiana-10.jpg", category: "Persianas" },
    { name: "Rolô - Modelo 3", image: "/images/persianas/persiana-01.jpg", category: "Persianas" },
    { name: "Double Vision - Modelo 1", image: "/images/persianas/persiana-06.jpg", category: "Persianas" },
    { name: "Double Vision - Modelo 2", image: "/images/persianas/persiana-12.jpg", category: "Persianas" },
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
