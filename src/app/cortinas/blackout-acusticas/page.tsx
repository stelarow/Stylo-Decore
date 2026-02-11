import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortinas Blackout & Acústicas | Stylo Decore",
  description: "Cortinas blackout e acústicas sob medida. Bloqueio total de luz e isolamento acústico.",
};

export default function BlackoutAcusticasPage() {
  return (
    <SubcategoryPage
      title="Blackout & Acústicas"
      category="Cortinas"
      description="Bloqueio total de luz e isolamento acústico para conforto máximo. Ideais para quartos, home theaters e ambientes que exigem privacidade e silêncio."
      products={CORTINA_PRODUCTS["blackout-acusticas"]}
    />
  );
}
