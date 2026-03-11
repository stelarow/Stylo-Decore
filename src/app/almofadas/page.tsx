import type { Metadata } from "next";
import CategoryPage from "@/components/sections/CategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd, getFaqJsonLd, ALMOFADAS_FAQ, ALMOFADAS_FAQ_KEYS } from "@/lib/seo";
import { ALMOFADAS_SUBCATEGORIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Almofadas Decorativas em Florianópolis | Stylo Decore",
  description:
    "Almofadas decorativas sob medida em Florianópolis e Região. Conforto e charme para completar seus ambientes. Atendimento consultivo e personalizado.",
  keywords: ["almofadas decorativas Florianópolis", "almofadas sob medida", "almofadas decorativas personalizadas", "almofadas Florianópolis"],
  alternates: { canonical: "/almofadas" },
  openGraph: {
    title: "Almofadas Decorativas em Florianópolis | Stylo Decore",
    description: "Almofadas decorativas sob medida. Conforto e charme para seus ambientes em Florianópolis e Região.",
    url: "/almofadas",
    images: [{ url: "/images/almofadas-hero.png", width: 1200, height: 630, alt: "Almofadas Decorativas - Stylo Decore" }],
  },
};

export default function AlmofadasPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Almofadas", href: "/almofadas" },
      ])} />
      <JsonLd data={getFaqJsonLd(ALMOFADAS_FAQ)} />
      <CategoryPage
        title="Almofadas"
        titleKey="/almofadas"
        headline="Conforto & Charme"
        description="Almofadas decorativas que completam e elevam qualquer ambiente. Descubra nossas coleções sob medida."
        intro="Almofadas são detalhes que fazem toda a diferença na composição de ambientes — trazendo cor, textura e conforto. Trabalhamos com formatos, tamanhos e tecidos sob medida para cada projeto."
        headlineKey="cat.almofadas.headline"
        descriptionKey="cat.almofadas.description"
        introKey="cat.almofadas.intro"
        subcategories={ALMOFADAS_SUBCATEGORIES}
        faqItems={ALMOFADAS_FAQ_KEYS}
      />
    </>
  );
}
