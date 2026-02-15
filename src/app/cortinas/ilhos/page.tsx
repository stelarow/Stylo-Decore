import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina com Ilhós sob Medida em Florianópolis",
  description: "Cortinas com ilhós sob medida em Florianópolis e Região. Argolas metálicas com visual moderno e deslizamento suave.",
  alternates: { canonical: "/cortinas/ilhos" },
  openGraph: {
    title: "Cortina com Ilhós sob Medida | Stylo Decore",
    description: "Cortinas com ilhós sob medida. Visual moderno e prático em Florianópolis.",
    url: "/cortinas/ilhos",
  },
};

export default function CortinaIlhosPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Cortina com Ilhós", href: "/cortinas/ilhos" },
      ])} />
      <SubcategoryPage
        title="Cortina com Ilhós"
        category="Cortinas"
        description="Argolas metálicas que proporcionam um visual moderno e deslizamento suave. Fácil de instalar e prática no dia a dia, ideal para quem busca praticidade com estilo."
        products={CORTINA_PRODUCTS["ilhos"]}
      />
    </>
  );
}
