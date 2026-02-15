import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PERSIANA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Persianas Verticais sob Medida em Florianópolis",
  description: "Persianas verticais sob medida em Florianópolis e Região. Ideais para grandes janelas e portas de vidro.",
  alternates: { canonical: "/persianas/verticais" },
  openGraph: {
    title: "Persianas Verticais sob Medida | Stylo Decore",
    description: "Persianas verticais sob medida. Ideais para grandes janelas em Florianópolis.",
    url: "/persianas/verticais",
  },
};

export default function PersianasVerticaisPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Persianas", href: "/persianas" },
        { name: "Persianas Verticais", href: "/persianas/verticais" },
      ])} />
      <SubcategoryPage
        title="Persianas Verticais"
        category="Persianas"
        heroImage="/images/persianas/persiana-13.jpg"
        description="Ideal para grandes janelas e portas de vidro. As persianas verticais combinam funcionalidade e elegância, permitindo controle de luminosidade com design clean."
        products={PERSIANA_PRODUCTS.verticais}
      />
    </>
  );
}
