import type { Metadata } from "next";
import CategoryPage from "@/components/sections/CategoryPage";
import { CORTINAS_SUBCATEGORIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortinas sob Medida | Stylo Decore - Florianópolis e Região",
  description:
    "Cortinas de Tecido, Prega Americana, Teto, Motorizadas e Blackout sob medida. Tecidos nobres que transformam ambientes. Atendimento consultivo em Florianópolis e Região.",
};

export default function CortinasPage() {
  return (
    <CategoryPage
      title="Cortinas"
      headline="Elegância Natural"
      description="Tecidos nobres que transformam ambientes. Descubra nossos modelos de cortinas sob medida para o seu espaço."
      intro="Cortinas são sinônimo de elegância e sofisticação, com grande influência no resultado estético e no aconchego dos ambientes. Trabalhamos com tecidos nobres e soluções sob medida para transformar cada espaço com exclusividade."
      subcategories={CORTINAS_SUBCATEGORIES}
    />
  );
}
