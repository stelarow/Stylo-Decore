import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { MOVEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Móveis Planejados para Cozinha em Florianópolis | Stylo Decore",
  description: "Armários e bancadas planejadas para cozinha em Florianópolis e Região. Projetos que unem praticidade, beleza e organização. Atendimento consultivo.",
  alternates: { canonical: "/moveis-sob-medida/cozinha" },
  openGraph: {
    title: "Móveis Planejados para Cozinha | Stylo Decore",
    description: "Armários e bancadas planejadas para cozinha em Florianópolis.",
    url: "/moveis-sob-medida/cozinha",
  },
};

export default function CozinhaPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Móveis Sob Medida", href: "/moveis-sob-medida" },
        { name: "Cozinha", href: "/moveis-sob-medida/cozinha" },
      ])} />
      <SubcategoryPage
        title="Cozinha"
        category="Móveis Sob Medida"
        titleKey="/moveis-sob-medida/cozinha"
        categoryKey="/moveis-sob-medida"
        description="Armários e bancadas planejadas para cozinha. Projetos que unem praticidade, beleza e organização."
        descriptionKey="page.moveis.cozinha.desc"
        products={MOVEL_PRODUCTS["cozinha"]}
        desktopHeroImage="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop"
        mobileHeroImage="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
        heroImageStyle={{ objectPosition: "center center" }}
      />
    </>
  );
}
