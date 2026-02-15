import type { Metadata } from "next";
import CategoryPage from "@/components/sections/CategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd, getFaqJsonLd, DEFAULT_FAQ } from "@/lib/seo";
import { TAPETES_SUBCATEGORIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tapetes sob Medida em Florianópolis | Stylo Decore",
  description:
    "Tapetes sob medida, decorativos e passadeiras em Florianópolis e Região. Conforto e estilo para seus ambientes. Atendimento consultivo e personalizado.",
  keywords: ["tapetes sob medida Florianópolis", "tapete decorativo", "passadeira sob medida", "tapete personalizado Florianópolis"],
  alternates: { canonical: "/tapetes" },
  openGraph: {
    title: "Tapetes sob Medida em Florianópolis | Stylo Decore",
    description: "Tapetes sob medida, decorativos e passadeiras. Conforto e estilo em Florianópolis e Região.",
    url: "/tapetes",
    images: [{ url: "/images/tapetes-hero.jpeg", width: 1200, height: 630, alt: "Tapetes sob Medida - Stylo Decore" }],
  },
};

export default function TapetesPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Tapetes", href: "/tapetes" },
      ])} />
      <JsonLd data={getFaqJsonLd(DEFAULT_FAQ)} />
      <CategoryPage
        title="Tapetes"
        headline="Conforto & Estilo"
        description="Conforto e estilo para seus ambientes. Descubra nossos tapetes sob medida, decorativos e passadeiras."
        intro="Tapetes são peças fundamentais na composição de ambientes, trazendo conforto, delimitação de espaços e personalidade. Trabalhamos com formatos, tamanhos e materiais sob medida para cada projeto."
        subcategories={TAPETES_SUBCATEGORIES}
      />
    </>
  );
}
