import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PAPEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papel de Parede Breeze em Florianópolis",
  description: "Coleção Breeze - Leveza e frescor para ambientes contemporâneos. Aplicação profissional em Florianópolis e Região.",
  alternates: { canonical: "/papeis-de-parede/breeze" },
  openGraph: {
    title: "Papel de Parede Breeze | Stylo Decore",
    description: "Coleção Breeze - Leveza e frescor para ambientes contemporâneos em Florianópolis.",
    url: "/papeis-de-parede/breeze",
  },
};

export default function BreezePage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Papéis de Parede", href: "/papeis-de-parede" },
        { name: "Breeze", href: "/papeis-de-parede/breeze" },
      ])} />
      <SubcategoryPage
        title="Breeze"
        category="Papéis de Parede"
        description="Leveza e frescor para ambientes contemporâneos. A coleção Breeze traz tons suaves e padrões delicados que criam uma atmosfera leve e arejada."
        products={PAPEL_PRODUCTS.breeze}
      />
    </>
  );
}
