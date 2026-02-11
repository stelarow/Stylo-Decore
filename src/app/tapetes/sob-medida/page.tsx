import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import { TAPETE_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tapete Sob Medida | Stylo Decore - Florianópolis e Região",
  description:
    "Tapetes sob medida com tamanho e formato personalizados. Soluções exclusivas para o seu espaço em Florianópolis.",
};

export default function TapeteSobMedidaPage() {
  return (
    <SubcategoryPage
      title="Tapete Sob Medida"
      category="Tapetes"
      description="Tamanho e formato personalizados para o seu espaço. Tapetes sob medida que se encaixam perfeitamente em qualquer ambiente."
      products={TAPETE_PRODUCTS["sob-medida"]}
    />
  );
}
