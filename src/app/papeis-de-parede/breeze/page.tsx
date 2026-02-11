import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import { PAPEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papel de Parede Breeze | Stylo Decore",
  description: "Coleção Breeze - Leveza e frescor para ambientes contemporâneos.",
};

export default function BreezePage() {
  return (
    <SubcategoryPage
      title="Breeze"
      category="Papéis de Parede"
      description="Leveza e frescor para ambientes contemporâneos. A coleção Breeze traz tons suaves e padrões delicados que criam uma atmosfera leve e arejada."
      products={PAPEL_PRODUCTS.breeze}
    />
  );
}
