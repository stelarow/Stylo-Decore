import type { Metadata } from "next";
import CategoryPage from "@/components/sections/CategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd, getFaqJsonLd, CORTINAS_FAQ, CORTINAS_FAQ_KEYS } from "@/lib/seo";
import { CORTINAS_TIPOS_ACABAMENTO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tipos de Acabamento para Cortinas em Florianópolis | Stylo Decore",
  description:
    "Conheça os tipos de acabamento para cortinas: Barra Larga e Forro Blackout em diferentes porcentagens. Cortinas sob medida em Florianópolis e Região.",
  keywords: ["acabamento cortina", "barra larga cortina", "forro blackout", "cortina blackout Florianópolis"],
  alternates: { canonical: "/cortinas/tipos-de-acabamento" },
  openGraph: {
    title: "Tipos de Acabamento para Cortinas | Stylo Decore",
    description: "Barra Larga e Forro Blackout em diferentes porcentagens. Cortinas sob medida em Florianópolis.",
    url: "/cortinas/tipos-de-acabamento",
  },
};

export default function TiposDeAcabamentoPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Tipos de Acabamento", href: "/cortinas/tipos-de-acabamento" },
      ])} />
      <JsonLd data={getFaqJsonLd(CORTINAS_FAQ)} />
      <CategoryPage
        title="Tipos de Acabamento"
        titleKey="/cortinas/tipos-de-acabamento"
        headline="Detalhes que Fazem a Diferença"
        description="O acabamento define a funcionalidade e o refinamento final da sua cortina."
        intro="Barra larga ou forro blackout — cada acabamento tem um propósito e uma estética própria. Escolha o que melhor combina com o seu espaço e necessidade de luz."
        subcategories={CORTINAS_TIPOS_ACABAMENTO}
        faqItems={CORTINAS_FAQ_KEYS}
      />
    </>
  );
}
