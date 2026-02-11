import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import { PAPEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papel de Parede Artesania | Stylo Decore",
  description: "Coleção Artesania - Texturas artesanais com acabamento natural e acolhedor.",
};

export default function ArtesaniaPage() {
  return (
    <SubcategoryPage
      title="Artesania"
      category="Papéis de Parede"
      description="Texturas artesanais com acabamento natural e acolhedor. A coleção Artesania traz padrões feitos à mão que adicionam autenticidade e calor aos ambientes."
      products={PAPEL_PRODUCTS.artesania}
    />
  );
}
