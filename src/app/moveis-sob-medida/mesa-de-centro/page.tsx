import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { MOVEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mesa de Centro Sob Medida em Florianópolis | Stylo Decore",
  description: "Mesas de centro sob medida para sala de estar em Florianópolis e Região. Design exclusivo e acabamento refinado para o centro da sua sala.",
  alternates: { canonical: "/moveis-sob-medida/mesa-de-centro" },
  openGraph: {
    title: "Mesa de Centro Sob Medida | Stylo Decore",
    description: "Mesas de centro sob medida em Florianópolis. Design exclusivo e acabamento refinado para sala de estar.",
    url: "/moveis-sob-medida/mesa-de-centro",
  },
};

export default function MesaDeCentroPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Móveis Sob Medida", href: "/moveis-sob-medida" },
        { name: "Mesa de Centro", href: "/moveis-sob-medida/mesa-de-centro" },
      ])} />
      <SubcategoryPage
        title="Mesa de Centro"
        category="Móveis Sob Medida"
        titleKey="/moveis-sob-medida/mesa-de-centro"
        categoryKey="/moveis-sob-medida"
        description="Mesas de centro sob medida para sala de estar. Design exclusivo com acabamento refinado para valorizar o ambiente."
        descriptionKey="page.moveis.mesa-de-centro.desc"
        products={MOVEL_PRODUCTS["mesa-de-centro"]}
        desktopHeroImage="/images/moveis-mesa-centro.png"
        mobileHeroImage="/images/moveis-mesa-centro-mobile.png"
        heroImageStyle={{ objectPosition: "center 65%" }}
        mobileHeroImageStyle={{ objectPosition: "center 60%" }}
      />
    </>
  );
}
