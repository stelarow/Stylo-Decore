import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import { PAPEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papel de Parede Elegant | Stylo Decore",
  description: "Coleção Elegant - Sofisticação e requinte para ambientes clássicos e atemporais.",
};

export default function ElegantPage() {
  return (
    <SubcategoryPage
      title="Elegant"
      category="Papéis de Parede"
      description="Sofisticação e requinte para ambientes clássicos e atemporais. A coleção Elegant traz padrões tradicionais com acabamento impecável."
      products={PAPEL_PRODUCTS.elegant}
    />
  );
}
