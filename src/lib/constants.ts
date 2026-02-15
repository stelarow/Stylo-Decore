import type { NavItem, ContactInfo } from "@/types";

export const WHATSAPP_NUMBER = "554896733626";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Stylo Decore e gostaria de mais informações.";

export function getWhatsAppUrl(message?: string) {
  const msg = encodeURIComponent(message || WHATSAPP_DEFAULT_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

export const CONTACT: ContactInfo = {
  phone: "(48) 9673-3626",
  whatsapp: WHATSAPP_NUMBER,
  email: "contato@stylodecore.com.br",
  address: "Rua Example, 123 - Centro",
  city: "Florianópolis",
  state: "SC",
  workingHours: "Seg a Sex: 9h às 18h | Sáb: 9h às 13h",
};

export const PRODUCT_CATEGORIES: NavItem[] = [
  { label: "Cortinas", href: "/cortinas" },
  { label: "Persianas", href: "/persianas" },
  { label: "Papel de Parede", href: "/papeis-de-parede" },
  { label: "Tapetes", href: "/tapetes" },
];

export const NAVIGATION: NavItem[] = [
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
      { label: "Artesania", href: "/papeis-de-parede/artesania" },
      { label: "Breeze", href: "/papeis-de-parede/breeze" },
      { label: "Carving", href: "/papeis-de-parede/carving" },
      { label: "Dali", href: "/papeis-de-parede/dali" },
      { label: "Ecletic", href: "/papeis-de-parede/ecletic" },
      { label: "Elegant", href: "/papeis-de-parede/elegant" },
    ],
  },
  {
    label: "Tapetes",
    href: "/tapetes",
    children: [
      { label: "Sob Medida", href: "/tapetes/sob-medida" },
      { label: "Decorativo", href: "/tapetes/decorativo" },
      { label: "Passadeira", href: "/tapetes/passadeira" },
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
    image: "/images/cortinas-hero.jpeg",
    imageDesktop: "/images/cortinas-hero-desktop.png",
    imagePosition: "center 30%",
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
] as const;
