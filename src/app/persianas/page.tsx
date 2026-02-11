import type { Metadata } from "next";
import CategoryPage from "@/components/sections/CategoryPage";
import { PERSIANAS_SUBCATEGORIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Persianas sob Medida | Stylo Decore - Florianópolis e Região",
  description:
    "Persianas Horizontais, Verticais, Rolô e Double Vision sob medida. Controle de luz com elegância e praticidade. Atendimento consultivo em Florianópolis e Região.",
};

export default function PersianasPage() {
  return (
    <CategoryPage
      title="Persianas"
      headline="Controle de Luz"
      description="Controle de luz com elegância e praticidade. Descubra nossas persianas sob medida para cada ambiente."
      intro="Persianas são a solução ideal para quem busca controle de luminosidade com design sofisticado. Oferecemos modelos em diversos materiais e acabamentos, sempre com medição e instalação profissional."
      subcategories={PERSIANAS_SUBCATEGORIES}
    />
  );
}
