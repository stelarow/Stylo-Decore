import type { Metadata } from "next";
import CategoryPage from "@/components/sections/CategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd, getFaqJsonLd, PAPEIS_FAQ, PAPEIS_FAQ_KEYS } from "@/lib/seo";
import { PAPEIS_SUBCATEGORIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papéis de Parede em Florianópolis | Stylo Decore",
  description:
    "Coleções exclusivas de papéis de parede: Breeze, Boho, Natural, Natureza, Geométricos e Infantil. Texturas e padrões que criam personalidade. Aplicação profissional em Florianópolis e Região.",
  keywords: ["papel de parede Florianópolis", "papel de parede texturizado", "papel de parede 3D", "decoração de parede Florianópolis"],
  alternates: { canonical: "/papeis-de-parede" },
  openGraph: {
    title: "Papéis de Parede em Florianópolis | Stylo Decore",
    description: "Coleções exclusivas de papéis de parede com aplicação profissional em Florianópolis e Região.",
    url: "/papeis-de-parede",
    images: [{ url: "/images/papeis-hero.jpeg", width: 1200, height: 630, alt: "Papéis de Parede - Stylo Decore" }],
  },
};

export default function PapeisDeParedePage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Papéis de Parede", href: "/papeis-de-parede" },
      ])} />
      <JsonLd data={getFaqJsonLd(PAPEIS_FAQ)} />
      <CategoryPage
        title="Papéis de Parede"
        titleKey="/papeis-de-parede"
        headlineKey="cat.papeis.headline"
        descriptionKey="cat.papeis.description"
        introKey="cat.papeis.intro"
        heroImage="/images/papeis-hero-desktop.jpeg"
        heroMobileImage="/images/papeis-hero.jpeg"
        subcategories={PAPEIS_SUBCATEGORIES}
        faqItems={PAPEIS_FAQ_KEYS}
      />
    </>
  );
}
