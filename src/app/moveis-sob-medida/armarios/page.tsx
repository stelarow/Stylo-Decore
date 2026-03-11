import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { MOVEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Armários Sob Medida em Florianópolis | Stylo Decore",
  description: "Armários planejados sob medida para quarto, sala e closet em Florianópolis e Região. Design elegante e aproveitamento máximo do espaço.",
  alternates: { canonical: "/moveis-sob-medida/armarios" },
  openGraph: {
    title: "Armários Sob Medida | Stylo Decore",
    description: "Armários planejados sob medida em Florianópolis. Design elegante para quarto, sala e closet.",
    url: "/moveis-sob-medida/armarios",
  },
};

export default function ArmariosPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Móveis Sob Medida", href: "/moveis-sob-medida" },
        { name: "Armários", href: "/moveis-sob-medida/armarios" },
      ])} />
      <SubcategoryPage
        title="Armários"
        category="Móveis Sob Medida"
        titleKey="/moveis-sob-medida/armarios"
        categoryKey="/moveis-sob-medida"
        description="Armários sob medida para quarto, sala e closet. Design elegante com aproveitamento máximo do seu espaço."
        descriptionKey="page.moveis.armarios.desc"
        products={MOVEL_PRODUCTS["armarios"]}
        desktopHeroImage="/images/persianas-hero.jpeg"
        mobileHeroImage="/images/persianas-hero.jpeg"
      />
    </>
  );
}
