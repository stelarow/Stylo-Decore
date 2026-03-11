import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { MOVEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Estantes Planejadas em Florianópolis | Stylo Decore",
  description: "Estantes planejadas sob medida em Florianópolis e Região. Combine função e sofisticação com projetos exclusivos para sala, escritório e home office.",
  alternates: { canonical: "/moveis-sob-medida/estantes" },
  openGraph: {
    title: "Estantes Planejadas | Stylo Decore",
    description: "Estantes planejadas sob medida em Florianópolis. Função e sofisticação em cada projeto.",
    url: "/moveis-sob-medida/estantes",
  },
};

export default function EstantesPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Móveis Sob Medida", href: "/moveis-sob-medida" },
        { name: "Estantes", href: "/moveis-sob-medida/estantes" },
      ])} />
      <SubcategoryPage
        title="Estantes"
        category="Móveis Sob Medida"
        titleKey="/moveis-sob-medida/estantes"
        categoryKey="/moveis-sob-medida"
        description="Estantes planejadas que combinam função e sofisticação. Projetos exclusivos desenvolvidos para cada ambiente."
        descriptionKey="page.moveis.estantes.desc"
        products={MOVEL_PRODUCTS["estantes"]}
        desktopHeroImage="/images/moveis-estantes-desktop.png"
        mobileHeroImage="/images/moveis-estantes.png"
        heroImageStyle={{ objectPosition: "center center" }}
      />
    </>
  );
}
