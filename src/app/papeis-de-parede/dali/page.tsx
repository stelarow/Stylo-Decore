import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import { PAPEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papel de Parede Dali | Stylo Decore",
  description: "Coleção Dali - Padrões artísticos inspirados em grandes mestres.",
};

export default function DaliPage() {
  return (
    <SubcategoryPage
      title="Dali"
      category="Papéis de Parede"
      description="Padrões artísticos inspirados em grandes mestres. A coleção Dali é para quem aprecia arte e quer transformar paredes em verdadeiras obras de arte."
      products={PAPEL_PRODUCTS.dali}
    />
  );
}
