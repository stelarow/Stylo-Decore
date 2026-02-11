import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina Prega Americana sob Medida | Stylo Decore",
  description: "Cortina Prega Americana sob medida com pregas elegantes. Estilo clássico atemporal.",
};

export default function PregaAmericanaPage() {
  return (
    <SubcategoryPage
      title="Prega Americana"
      category="Cortinas"
      description="Estilo clássico com pregas elegantes e bem definidas. A cortina com prega americana é perfeita para quem busca requinte e tradição na decoração."
      products={CORTINA_PRODUCTS["prega-americana"]}
    />
  );
}
