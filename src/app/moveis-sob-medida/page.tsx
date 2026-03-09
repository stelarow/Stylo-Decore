import type { Metadata } from "next";
import CategoryPage from "@/components/sections/CategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd, getFaqJsonLd, MOVEIS_FAQ, MOVEIS_FAQ_KEYS } from "@/lib/seo";
import { MOVEIS_SUBCATEGORIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Móveis Sob Medida em Florianópolis | Stylo Decore",
  description:
    "Móveis planejados sob medida em Florianópolis e Região. Estantes, armários e home office com design e funcionalidade. Atendimento consultivo e personalizado.",
  keywords: ["móveis sob medida Florianópolis", "móveis planejados Florianópolis", "estantes sob medida", "armários planejados Florianópolis", "home office sob medida"],
  alternates: { canonical: "/moveis-sob-medida" },
  openGraph: {
    title: "Móveis Sob Medida em Florianópolis | Stylo Decore",
    description: "Estantes, armários e home office planejados sob medida em Florianópolis e Região.",
    url: "/moveis-sob-medida",
    images: [{ url: "/images/cortinas-hero-room.jpeg", width: 1200, height: 630, alt: "Móveis Sob Medida - Stylo Decore" }],
  },
};

export default function MoveisSobMedidaPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Móveis Sob Medida", href: "/moveis-sob-medida" },
      ])} />
      <JsonLd data={getFaqJsonLd(MOVEIS_FAQ)} />
      <CategoryPage
        title="Móveis Sob Medida"
        headline="Design & Funcionalidade"
        description="Estantes, armários e home office planejados que unem design sofisticado e máxima funcionalidade. Cada projeto pensado para o seu espaço."
        intro="Móveis planejados transformam qualquer ambiente — aproveitando cada centímetro com inteligência e elegância. Desenvolvemos projetos completos de estantes, armários e home office sob medida para a sua casa."
        headlineKey="cat.moveis.headline"
        descriptionKey="cat.moveis.description"
        introKey="cat.moveis.intro"
        subcategories={MOVEIS_SUBCATEGORIES}
        faqItems={MOVEIS_FAQ_KEYS}
      />
    </>
  );
}
