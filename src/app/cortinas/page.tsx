import type { Metadata } from "next";
import CategoryPage from "@/components/sections/CategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd, getFaqJsonLd, CORTINAS_FAQ } from "@/lib/seo";
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
        headline="Elegância Natural"
        description="Tecidos nobres que transformam ambientes. Descubra nossos modelos de cortinas sob medida para o seu espaço."
        intro="Cortinas são sinônimo de elegância e sofisticação, com grande influência no resultado estético e no aconchego dos ambientes. Trabalhamos com tecidos nobres e soluções sob medida para transformar cada espaço com exclusividade."
        subcategories={CORTINAS_SUBCATEGORIES}
        faqItems={CORTINAS_FAQ}
      />
    </>
  );
}
