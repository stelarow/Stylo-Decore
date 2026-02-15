import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina Wave sob Medida em Florianópolis",
  description: "Cortinas Wave sob medida em Florianópolis e Região. Caimento suave em ondas uniformes com visual moderno e elegante.",
  alternates: { canonical: "/cortinas/wave" },
  openGraph: {
    title: "Cortina Wave sob Medida | Stylo Decore",
    description: "Cortinas Wave sob medida com caimento em ondas perfeitas em Florianópolis.",
    url: "/cortinas/wave",
  },
};

export default function CortinaWavePage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Cortina Wave", href: "/cortinas/wave" },
      ])} />
      <SubcategoryPage
        title="Cortina Wave"
        category="Cortinas"
        description="Caimento suave em ondas uniformes, criando um visual leve e contemporâneo. O trilho especial Wave garante ondas perfeitas e regulares para um acabamento impecável."
        products={CORTINA_PRODUCTS["wave"]}
      />
    </>
  );
}
