import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PERSIANA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Persianas Horizontais sob Medida em Florianópolis",
  description: "Persianas horizontais sob medida em alumínio ou madeira em Florianópolis e Região. Versatilidade e durabilidade.",
  alternates: { canonical: "/persianas/horizontais" },
  openGraph: {
    title: "Persianas Horizontais sob Medida | Stylo Decore",
    description: "Persianas horizontais sob medida em alumínio ou madeira em Florianópolis.",
    url: "/persianas/horizontais",
  },
};

export default function PersianasHorizontaisPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Persianas", href: "/persianas" },
        { name: "Persianas Horizontais", href: "/persianas/horizontais" },
      ])} />
      <SubcategoryPage
        title="Persianas Horizontais"
        category="Persianas"
        heroImage="/images/persianas/persiana-02.jpg"
        description="Versatilidade e durabilidade em alumínio ou madeira. As persianas horizontais oferecem controle preciso de luz e privacidade, adaptando-se a qualquer estilo de decoração."
        products={PERSIANA_PRODUCTS.horizontais}
      />
    </>
  );
}
