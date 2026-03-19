import type { Metadata } from "next";
import CategoryPage from "@/components/sections/CategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd, getFaqJsonLd, CORTINAS_FAQ, CORTINAS_FAQ_KEYS } from "@/lib/seo";
import { CORTINAS_SUBCATEGORIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortinas sob Medida em Florianópolis | Stylo Decore",
  description:
    "Cortinas de Tecido, Prega Americana, Ilhós, Wave e Blackout sob medida em Florianópolis e Região. Tecidos nobres que transformam ambientes. Medição e instalação grátis.",
  keywords: ["cortinas sob medida Florianópolis", "cortina de tecido", "cortina prega americana", "cortina wave", "cortina blackout Florianópolis"],
  alternates: { canonical: "/cortinas" },
  openGraph: {
    title: "Cortinas sob Medida em Florianópolis | Stylo Decore",
    description: "Cortinas sob medida com tecidos nobres. Medição e instalação grátis em Florianópolis e Região.",
    url: "/cortinas",
    images: [{ url: "/images/cortinas-hero.jpeg", width: 1200, height: 630, alt: "Cortinas sob Medida - Stylo Decore" }],
  },
};

export default function CortinasPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
      ])} />
      <JsonLd data={getFaqJsonLd(CORTINAS_FAQ)} />
      <CategoryPage
        title="Cortinas"
        titleKey="/cortinas"
        headlineKey="cat.cortinas.headline"
        descriptionKey="cat.cortinas.description"
        introKey="cat.cortinas.intro"
        heroImage="/images/cortinas-category-hero.png"
        heroMobileImage="/images/cortinas-category-hero-mobile.png"
        heroNaturalHeight
        heroMobileImageStyle={{ objectPosition: "center 20%" }}
        subcategories={CORTINAS_SUBCATEGORIES}
        faqItems={CORTINAS_FAQ_KEYS}
      />
    </>
  );
}
