import type { Metadata } from "next";
import CategoryPage from "@/components/sections/CategoryPage";
import { PAPEIS_SUBCATEGORIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papéis de Parede | Stylo Decore - Florianópolis e Região",
  description:
    "Coleções exclusivas de papéis de parede: Artesania, Breeze, Carving, Dali, Ecletic e Elegant. Texturas e padrões que criam personalidade.",
};

export default function PapeisDeParedePage() {
  return (
    <CategoryPage
      title="Papéis de Parede"
      headline="Arte nas Paredes"
      description="Texturas e padrões que criam personalidade. Explore nossas coleções exclusivas de papéis de parede."
      intro="Papéis de parede são uma forma sofisticada de personalizar ambientes. Trabalhamos com coleções exclusivas que vão do artesanal ao contemporâneo, sempre com aplicação profissional."
      subcategories={PAPEIS_SUBCATEGORIES}
    />
  );
}
