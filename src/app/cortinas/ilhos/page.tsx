import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina com Ilhós sob Medida | Stylo Decore",
  description: "Cortinas com ilhós sob medida. Argolas metálicas com visual moderno e deslizamento suave.",
};

export default function CortinaIlhosPage() {
  return (
    <SubcategoryPage
      title="Cortina com Ilhós"
      category="Cortinas"
      description="Argolas metálicas que proporcionam um visual moderno e deslizamento suave. Fácil de instalar e prática no dia a dia, ideal para quem busca praticidade com estilo."
      products={CORTINA_PRODUCTS["ilhos"]}
    />
  );
}
