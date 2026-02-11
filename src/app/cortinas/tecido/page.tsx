import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortinas de Tecido sob Medida | Stylo Decore",
  description: "Cortinas de tecido sob medida com elegância e sofisticação. Tecidos nobres para transformar seus ambientes.",
};

export default function CortinaTecidoPage() {
  return (
    <SubcategoryPage
      title="Cortinas de Tecido"
      category="Cortinas"
      description="Elegância e sofisticação com tecidos nobres sob medida. Cada cortina é confeccionada com materiais selecionados para garantir caimento perfeito e durabilidade."
      products={CORTINA_PRODUCTS["tecido"]}
    />
  );
}
