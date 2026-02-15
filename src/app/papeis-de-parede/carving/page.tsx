import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PAPEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papel de Parede Carving em Florianópolis",
  description: "Coleção Carving - Relevos tridimensionais que criam profundidade e textura. Aplicação profissional em Florianópolis e Região.",
  alternates: { canonical: "/papeis-de-parede/carving" },
  openGraph: {
    title: "Papel de Parede Carving | Stylo Decore",
    description: "Coleção Carving - Relevos tridimensionais com profundidade e textura em Florianópolis.",
    url: "/papeis-de-parede/carving",
  },
};

export default function CarvingPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Papéis de Parede", href: "/papeis-de-parede" },
        { name: "Carving", href: "/papeis-de-parede/carving" },
      ])} />
      <SubcategoryPage
        title="Carving"
        category="Papéis de Parede"
        description="Relevos tridimensionais que criam profundidade e textura. A coleção Carving utiliza técnicas de alto-relevo para paredes com personalidade e movimento."
        products={PAPEL_PRODUCTS.carving}
      />
    </>
  );
}
