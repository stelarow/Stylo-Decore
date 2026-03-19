import type { Metadata } from "next";
import CategoryPage from "@/components/sections/CategoryPage";
import PersianasColors from "@/components/sections/PersianasColors";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd, getFaqJsonLd, PERSIANAS_FAQ, PERSIANAS_FAQ_KEYS } from "@/lib/seo";
import { PERSIANAS_SUBCATEGORIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Persianas sob Medida em Florianópolis | Stylo Decore",
  description:
    "Persianas Horizontais, Verticais, Rolô e Double Vision sob medida em Florianópolis e Região. Controle de luz com elegância e praticidade. Medição e instalação grátis.",
  keywords: ["persianas sob medida Florianópolis", "persiana horizontal", "persiana vertical", "persiana rolô", "persiana Double Vision Florianópolis"],
  alternates: { canonical: "/persianas" },
  openGraph: {
    title: "Persianas sob Medida em Florianópolis | Stylo Decore",
    description: "Persianas sob medida com controle de luz e elegância. Medição e instalação grátis em Florianópolis e Região.",
    url: "/persianas",
    images: [{ url: "/images/persianas-hero.jpeg", width: 1200, height: 630, alt: "Persianas sob Medida - Stylo Decore" }],
  },
};

export default function PersianasPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Persianas", href: "/persianas" },
      ])} />
      <JsonLd data={getFaqJsonLd(PERSIANAS_FAQ)} />
      <CategoryPage
        title="Persianas"
        titleKey="/persianas"
        headlineKey="cat.persianas.headline"
        descriptionKey="cat.persianas.description"
        introKey="cat.persianas.intro"
        heroImage="/images/persianas/persianas-hero.png"
        heroMobileImage="/images/persianas/persianas-hero-mobile.png"
        subcategories={PERSIANAS_SUBCATEGORIES}
        faqItems={PERSIANAS_FAQ_KEYS}
        midContent={<PersianasColors />}
      />
    </>
  );
}
