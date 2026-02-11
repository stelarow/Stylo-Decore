import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import { PAPEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papel de Parede Carving | Stylo Decore",
  description: "Coleção Carving - Relevos tridimensionais que criam profundidade e textura.",
};

export default function CarvingPage() {
  return (
    <SubcategoryPage
      title="Carving"
      category="Papéis de Parede"
      description="Relevos tridimensionais que criam profundidade e textura. A coleção Carving utiliza técnicas de alto-relevo para paredes com personalidade e movimento."
      products={PAPEL_PRODUCTS.carving}
    />
  );
}
