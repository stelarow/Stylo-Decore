import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { MOVEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Móveis Planejados para Sala em Florianópolis | Stylo Decore",
  description: "Painéis de TV, estantes e racks sob medida para sala de estar em Florianópolis e Região. Design sofisticado que une função e elegância. Atendimento consultivo.",
  alternates: { canonical: "/moveis-sob-medida/sala" },
  openGraph: {
    title: "Móveis Planejados para Sala | Stylo Decore",
    description: "Painéis de TV, estantes e racks sob medida para sala de estar em Florianópolis.",
    url: "/moveis-sob-medida/sala",
  },
};

export default function SalaPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Móveis Sob Medida", href: "/moveis-sob-medida" },
        { name: "Sala", href: "/moveis-sob-medida/sala" },
      ])} />
      <SubcategoryPage
        title="Sala"
        category="Móveis Sob Medida"
        titleKey="/moveis-sob-medida/sala"
        categoryKey="/moveis-sob-medida"
        description="Painéis, estantes e racks planejados para sala de estar. Design sofisticado que une função e elegância."
        descriptionKey="page.moveis.sala.desc"
        products={MOVEL_PRODUCTS["sala"]}
        desktopHeroImage="/images/moveis-painel-tv-desktop.png"
        mobileHeroImage="/images/moveis-painel-tv.png"
        heroImageStyle={{ objectPosition: "center center" }}
      />
    </>
  );
}
