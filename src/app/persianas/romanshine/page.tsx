import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PERSIANA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina Romanshine em Florianópolis | Stylo Decore",
  description: "Cortina Romanshine sob medida em Florianópolis e Região. Acabamento acetinado e visual sofisticado para ambientes que exigem o melhor.",
  alternates: { canonical: "/persianas/romanshine" },
  openGraph: {
    title: "Cortina Romanshine | Stylo Decore",
    description: "Cortina Romanshine sob medida com acabamento acetinado premium em Florianópolis.",
    url: "/persianas/romanshine",
  },
};

export default function RomanshinePage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Persianas", href: "/persianas" },
        { name: "Cortina Romanshine", href: "/persianas/romanshine" },
      ])} />
      <SubcategoryPage
        title="Romanshine"
        category="Persianas"
        titleKey="/persianas/romanshine"
        categoryKey="/persianas"
        heroImage="/images/persianas/persiana-04.jpg"
        desktopHeroImage="/images/persianas/persiana-hero-desktop.jpeg"
        description="A Romana elevada ao máximo refinamento. A Cortina Romanshine traz o mesmo charme das dobras clássicas com um toque acetinado exclusivo, criando reflexos sutis que enriquecem o ambiente."
        products={PERSIANA_PRODUCTS["romanshine"]}
      />
    </>
  );
}
