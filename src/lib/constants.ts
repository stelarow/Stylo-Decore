import type { NavItem, ContactInfo } from "@/types";

export const WHATSAPP_NUMBER = "5548988070882";
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
  phone: "(48) 98807-0882",
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
      { label: "Rolô Duo", href: "/persianas/rolo-duo" },
      { label: "Rolô", href: "/persianas/rolo" },
      { label: "Romana", href: "/persianas/romana" },
      { label: "Miragem", href: "/persianas/miragem" },
      { label: "VF Romana de Teto", href: "/persianas/vf-romana-de-teto" },
      { label: "Painel", href: "/persianas/painel" },
    ],
  },
  {
    label: "Papel de Parede",
    href: "/papeis-de-parede",
    children: [
      { label: "Breeze", href: "/papeis-de-parede/breeze" },
      { label: "Geométricos", href: "/papeis-de-parede/geometricos" },
      { label: "Infantil", href: "/papeis-de-parede/infantil" },
      { label: "Floral", href: "/papeis-de-parede/floral" },
      { label: "Texturas", href: "/papeis-de-parede/texturas" },
      { label: "Clássico", href: "/papeis-de-parede/classico" },
      { label: "Moderno", href: "/papeis-de-parede/moderno" },
      { label: "Natural & Botânico", href: "/papeis-de-parede/natural-botanico" },
      { label: "Minimalista", href: "/papeis-de-parede/minimalista" },
    ],
  },
  {
    label: "Tapetes",
    href: "/tapetes",
    children: [
      { label: "Moderno", href: "/tapetes/moderno" },
      { label: "Clássico", href: "/tapetes/classico" },
      { label: "Minimalista", href: "/tapetes/minimalista" },
      { label: "Boho", href: "/tapetes/boho" },
      { label: "Natural", href: "/tapetes/natural" },
    ],
  },
  { label: "Almofadas", href: "/almofadas" },
  {
    label: "Móveis Sob Medida",
    href: "/moveis-sob-medida",
    children: [
      { label: "Sala", href: "/moveis-sob-medida/sala" },
      { label: "Quarto", href: "/moveis-sob-medida/quarto" },
      { label: "Cozinha", href: "/moveis-sob-medida/cozinha" },
      { label: "Home Office", href: "/moveis-sob-medida/home-office" },
      { label: "Closet", href: "/moveis-sob-medida/closet" },
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
    image: "/images/moveis-sala-hero.jpg",
    imagePosition: "right center",
  },
] as const;
