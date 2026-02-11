import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import { TAPETE_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tapete Passadeira | Stylo Decore - Florianópolis e Região",
  description:
    "Passadeiras para corredores, halls e áreas de circulação. Soluções sob medida em Florianópolis.",
};

export default function TapetePassadeiraPage() {
  return (
    <SubcategoryPage
      title="Tapete Passadeira"
      category="Tapetes"
      description="Ideal para corredores, halls e áreas de circulação. Passadeiras que unem funcionalidade e beleza, disponíveis em diversos tamanhos e acabamentos."
      products={TAPETE_PRODUCTS["passadeira"]}
    />
  );
}
