import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina Wave sob Medida | Stylo Decore",
  description: "Cortinas Wave sob medida com caimento suave em ondas uniformes. Visual moderno e elegante.",
};

export default function CortinaWavePage() {
  return (
    <SubcategoryPage
      title="Cortina Wave"
      category="Cortinas"
      description="Caimento suave em ondas uniformes, criando um visual leve e contemporâneo. O trilho especial Wave garante ondas perfeitas e regulares para um acabamento impecável."
      products={CORTINA_PRODUCTS["wave"]}
    />
  );
}
