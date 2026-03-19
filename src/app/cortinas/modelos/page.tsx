import type { Metadata } from "next";
import CategoryPage from "@/components/sections/CategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd, getFaqJsonLd, CORTINAS_FAQ, CORTINAS_FAQ_KEYS } from "@/lib/seo";
import { CORTINAS_MODELOS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Modelos de Cortinas sob Medida em Florianópolis | Stylo Decore",
  description:
    "Modelos de cortinas sob medida em Florianópolis: Tradicional, com Forro, Dupla e Piso-Teto. Encontre o modelo ideal para transformar seu ambiente.",
  keywords: ["modelos cortina", "cortina tradicional", "cortina dupla", "cortina piso-teto Florianópolis"],
  alternates: { canonical: "/cortinas/modelos" },
  openGraph: {
    title: "Modelos de Cortinas sob Medida | Stylo Decore",
    description: "Cortina Tradicional, com Forro, Dupla e Piso-Teto. Sob medida em Florianópolis.",
    url: "/cortinas/modelos",
  },
};

export default function ModelosPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Modelos", href: "/cortinas/modelos" },
      ])} />
      <JsonLd data={getFaqJsonLd(CORTINAS_FAQ)} />
      <CategoryPage
        title="Modelos"
        titleKey="/cortinas/modelos"
        headlineKey="cat.cortinas.modelos.headline"
        descriptionKey="cat.cortinas.modelos.description"
        introKey="cat.cortinas.modelos.intro"
        subcategories={CORTINAS_MODELOS}
        faqItems={CORTINAS_FAQ_KEYS}
      />
    </>
  );
}
