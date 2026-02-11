import type { Metadata } from "next";
import CategoryPage from "@/components/sections/CategoryPage";
import { TAPETES_SUBCATEGORIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tapetes sob Medida | Stylo Decore - Florianópolis e Região",
  description:
    "Tapetes sob medida, decorativos e passadeiras. Conforto e estilo para seus ambientes. Atendimento consultivo em Florianópolis e Região.",
};

export default function TapetesPage() {
  return (
    <CategoryPage
      title="Tapetes"
      headline="Conforto & Estilo"
      description="Conforto e estilo para seus ambientes. Descubra nossos tapetes sob medida, decorativos e passadeiras."
      intro="Tapetes são peças fundamentais na composição de ambientes, trazendo conforto, delimitação de espaços e personalidade. Trabalhamos com formatos, tamanhos e materiais sob medida para cada projeto."
      subcategories={TAPETES_SUBCATEGORIES}
    />
  );
}
