import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PAPEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papel de Parede Elegant em Florianópolis",
  description: "Coleção Elegant - Sofisticação e requinte para ambientes clássicos e atemporais. Aplicação profissional em Florianópolis e Região.",
  alternates: { canonical: "/papeis-de-parede/elegant" },
  openGraph: {
    title: "Papel de Parede Elegant | Stylo Decore",
    description: "Coleção Elegant - Sofisticação e requinte para ambientes clássicos em Florianópolis.",
    url: "/papeis-de-parede/elegant",
  },
};

export default function ElegantPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Papéis de Parede", href: "/papeis-de-parede" },
        { name: "Elegant", href: "/papeis-de-parede/elegant" },
      ])} />
      <SubcategoryPage
        title="Elegant"
        category="Papéis de Parede"
        description="Sofisticação e requinte para ambientes clássicos e atemporais. A coleção Elegant traz padrões tradicionais com acabamento impecável."
        products={PAPEL_PRODUCTS.elegant}
      />
    </>
  );
}
