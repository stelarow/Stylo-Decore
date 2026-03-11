import type { NavItem, ContactInfo } from "@/types";

export const WHATSAPP_NUMBER = "554896733626";
export const WHATSAPP_NUMBER_2 = "554891074707";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Stylo Decore e gostaria de mais informações.";

export function getWhatsAppUrl(message?: string) {
  const msg = encodeURIComponent(message || WHATSAPP_DEFAULT_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

export function getWhatsAppUrl2(message?: string) {
  const msg = encodeURIComponent(message || WHATSAPP_DEFAULT_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER_2}?text=${msg}`;
}

export const CONTACT: ContactInfo = {
  phone: "(48) 9673-3626",
  phone2: "(48) 9107-4707",
  whatsapp: WHATSAPP_NUMBER,
  whatsapp2: WHATSAPP_NUMBER_2,
  email: "sstylodecore@gmail.com",
  address: "Servidão Nova Esperança, 173 B - Campeche",
  city: "Florianópolis",
  state: "SC",
  workingHours: "Seg a Sex: 8h às 18h | Sáb: 8h às 12h",
};

export const PRODUCT_CATEGORIES: NavItem[] = [
  { label: "Cortinas", href: "/cortinas" },
  { label: "Persianas", href: "/persianas" },
  { label: "Papel de Parede", href: "/papeis-de-parede" },
  { label: "Tapetes", href: "/tapetes" },
  { label: "Almofadas", href: "/almofadas" },
  { label: "Móveis Sob Medida", href: "/moveis-sob-medida" },
];

export const NAVIGATION: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Cortinas",
    href: "/cortinas",
    children: [
      { label: "Cortinas de Tecido", href: "/cortinas/tecido" },
      { label: "Prega Americana", href: "/cortinas/prega-americana" },
      { label: "Cortina com Ilhós", href: "/cortinas/ilhos" },
      { label: "Cortina Wave", href: "/cortinas/wave" },
      { label: "Blackout & Acústicas", href: "/cortinas/blackout-acusticas" },
    ],
  },
  {
    label: "Persianas",
    href: "/persianas",
    children: [
      { label: "Horizontais", href: "/persianas/horizontais" },
      { label: "Verticais", href: "/persianas/verticais" },
      { label: "Rolô & Double Vision", href: "/persianas/rolo-double-vision" },
    ],
  },
  {
    label: "Papel de Parede",
    href: "/papeis-de-parede",
    children: [
      { label: "Geométricos", href: "/papeis-de-parede/geometricos" },
      { label: "Infantil", href: "/papeis-de-parede/infantil" },
      { label: "Cozinha", href: "/papeis-de-parede/cozinha" },
    ],
  },
  {
    label: "Tapetes",
    href: "/tapetes",
    children: [
      { label: "Carving Organic", href: "/tapetes/carving-organic" },
      { label: "Nativa", href: "/tapetes/nativa" },
      { label: "Rede", href: "/tapetes/rede" },
    ],
  },
  {
    label: "Almofadas",
    href: "/almofadas",
    children: [
      { label: "Decorativas", href: "/almofadas/decorativas" },
    ],
  },
  {
    label: "Móveis Sob Medida",
    href: "/moveis-sob-medida",
    children: [
      { label: "Estantes", href: "/moveis-sob-medida/estantes" },
      { label: "Armários", href: "/moveis-sob-medida/armarios" },
      { label: "Mesa de Centro", href: "/moveis-sob-medida/mesa-de-centro" },
      { label: "Painel de TV", href: "/moveis-sob-medida/painel-de-tv" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export const CATEGORIES = [
  {
    name: "Cortinas",
    href: "/cortinas",
    description: "Tecidos nobres que transformam ambientes",
    tag: "TEXTURAS",
    image: "/images/cortinas-hero-room.jpeg",
    imageDesktop: "/images/cortinas-hero-room.jpeg",
    imagePosition: "75% center",
    imagePositionDesktop: "center center",
  },
  {
    name: "Persianas",
    href: "/persianas",
    description: "Controle de luz com elegância e praticidade",
    tag: "FUNCIONALIDADE",
    image: "/images/persianas-hero.jpeg",
    imagePosition: "center",
  },
  {
    name: "Papéis de Parede",
    href: "/papeis-de-parede",
    description: "Texturas e padrões que criam personalidade",
    tag: "DESIGN",
    image: "/images/papeis-hero.jpeg",
    imageDesktop: "/images/papeis-hero-desktop.jpeg",
    imagePosition: "center 25%",
  },
  {
    name: "Tapetes",
    href: "/tapetes",
    description: "Conforto e estilo para seus ambientes",
    tag: "CONFORTO",
    image: "/images/tapetes-hero.jpeg",
    imageDesktop: "/images/tapetes-hero-desktop.png",
    imagePosition: "center 65%",
  },
  {
    name: "Almofadas",
    href: "/almofadas",
    description: "Almofadas decorativas que completam o ambiente",
    tag: "EM BREVE",
    image: "/images/almofadas-hero.png",
    imagePosition: "center center",
  },
  {
    name: "Móveis Sob Medida",
    href: "/moveis-sob-medida",
    description: "Estantes, armários e home office planejados",
    tag: "PLANEJADO",
    image: "/images/cortinas-hero-room.jpeg", // TODO: imagem real
    imagePosition: "center center",
  },
] as const;
