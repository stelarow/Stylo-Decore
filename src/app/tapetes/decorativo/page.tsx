import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import { TAPETE_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tapete Decorativo | Stylo Decore - Florianópolis e Região",
  description:
    "Tapetes decorativos que agregam estilo e personalidade ao ambiente. Peças exclusivas em Florianópolis.",
};

export default function TapeteDecorativoPage() {
  return (
    <SubcategoryPage
      title="Tapete Decorativo"
      category="Tapetes"
      description="Peças que agregam estilo e personalidade ao ambiente. Tapetes decorativos em diversas texturas, cores e padrões para compor o seu espaço."
      products={TAPETE_PRODUCTS["decorativo"]}
    />
  );
}
