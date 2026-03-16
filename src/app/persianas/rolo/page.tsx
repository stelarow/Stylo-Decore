import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PERSIANA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina Rolô em Florianópolis | Stylo Decore",
  description: "Cortina Rolô sob medida em Florianópolis e Região. Simplicidade, funcionalidade e elegância em tecidos de alta qualidade.",
  alternates: { canonical: "/persianas/rolo" },
  openGraph: {
    title: "Cortina Rolô | Stylo Decore",
    description: "Cortina Rolô sob medida com design clean e funcional em Florianópolis.",
    url: "/persianas/rolo",
  },
};

export default function RoloPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Persianas", href: "/persianas" },
        { name: "Cortina Rolô", href: "/persianas/rolo" },
      ])} />
      <SubcategoryPage
        title="Rolô"
        category="Persianas"
        titleKey="/persianas/rolo"
        categoryKey="/persianas"
        heroImage="/images/persianas/rolo-01.jpg"
        desktopHeroImage="/images/persianas/rolo-hero-desktop.png"
        description="Elegância na sua forma mais simples. A Cortina Rolô oferece design limpo e funcional, disponível em diversas cores e tecidos — do tule translúcido ao blackout total."
        products={PERSIANA_PRODUCTS["rolo"]}
      />
    </>
  );
}
