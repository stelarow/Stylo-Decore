import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PAPEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papel de Parede Artesania em Florianópolis",
  description: "Coleção Artesania - Texturas artesanais com acabamento natural e acolhedor. Aplicação profissional em Florianópolis e Região.",
  alternates: { canonical: "/papeis-de-parede/artesania" },
  openGraph: {
    title: "Papel de Parede Artesania | Stylo Decore",
    description: "Coleção Artesania - Texturas artesanais com acabamento natural em Florianópolis.",
    url: "/papeis-de-parede/artesania",
  },
};

export default function ArtesaniaPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Papéis de Parede", href: "/papeis-de-parede" },
        { name: "Artesania", href: "/papeis-de-parede/artesania" },
      ])} />
      <SubcategoryPage
        title="Artesania"
        category="Papéis de Parede"
        description="Texturas artesanais com acabamento natural e acolhedor. A coleção Artesania traz padrões feitos à mão que adicionam autenticidade e calor aos ambientes."
        products={PAPEL_PRODUCTS.artesania}
      />
    </>
  );
}
