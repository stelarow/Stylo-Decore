import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PAPEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papel de Parede para Cozinha em Florianópolis",
  description: "Papéis de parede para cozinha: azulejos, mármores, ladrilhos e mais. Revestimentos sofisticados com aplicação profissional em Florianópolis e Região.",
  alternates: { canonical: "/papeis-de-parede/cozinha" },
  openGraph: {
    title: "Papel de Parede para Cozinha | Stylo Decore",
    description: "Revestimentos e estampas exclusivas para cozinhas sofisticadas em Florianópolis.",
    url: "/papeis-de-parede/cozinha",
  },
};

export default function CozinhaPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Papéis de Parede", href: "/papeis-de-parede" },
        { name: "Cozinha", href: "/papeis-de-parede/cozinha" },
      ])} />
      <SubcategoryPage
        title="Cozinha"
        category="Papéis de Parede"
        description="Revestimentos e estampas exclusivas para cozinhas sofisticadas. De azulejos portugueses a mármores calacata, transforme sua cozinha em um ambiente de design único."
        descriptionKey="page.cozinha.desc"
        products={PAPEL_PRODUCTS.cozinha}
        desktopHeroImage="/images/papel/cozinha/cozinha-marmore-calacata-dourado.jpg"
      />
    </>
  );
}
