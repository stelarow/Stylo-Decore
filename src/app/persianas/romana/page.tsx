import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PERSIANA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina Romana em Florianópolis | Stylo Decore",
  description: "Cortina Romana sob medida em Florianópolis e Região. Dobras horizontais elegantes que valorizam qualquer ambiente com sofisticação.",
  alternates: { canonical: "/persianas/romana" },
  openGraph: {
    title: "Cortina Romana | Stylo Decore",
    description: "Cortina Romana sob medida com dobras elegantes e tecidos sofisticados em Florianópolis.",
    url: "/persianas/romana",
  },
};

export default function RomanaPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Persianas", href: "/persianas" },
        { name: "Cortina Romana", href: "/persianas/romana" },
      ])} />
      <SubcategoryPage
        title="Romana"
        category="Persianas"
        titleKey="/persianas/romana"
        categoryKey="/persianas"
        heroImage="/images/persianas/romana-hero-mobile.jpg"
        desktopHeroImage="/images/persianas/romana-hero-desktop.png"
        descriptionKey="page.persianas.romana.desc"
        products={PERSIANA_PRODUCTS["romana"]}
      />
    </>
  );
}
