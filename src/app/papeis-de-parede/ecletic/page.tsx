import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import { PAPEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papel de Parede Ecletic | Stylo Decore",
  description: "Coleção Ecletic - Mix de estilos para composições únicas e ousadas.",
};

export default function EcleticPage() {
  return (
    <SubcategoryPage
      title="Ecletic"
      category="Papéis de Parede"
      description="Mix de estilos para composições únicas e ousadas. A coleção Ecletic combina diferentes influências criando um visual surpreendente e cheio de caráter."
      products={PAPEL_PRODUCTS.ecletic}
    />
  );
}
