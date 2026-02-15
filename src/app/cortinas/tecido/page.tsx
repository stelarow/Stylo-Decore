import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortinas de Tecido sob Medida em Florianópolis",
  description: "Cortinas de tecido sob medida com elegância e sofisticação. Tecidos nobres para transformar seus ambientes em Florianópolis e Região.",
  alternates: { canonical: "/cortinas/tecido" },
  openGraph: {
    title: "Cortinas de Tecido sob Medida em Florianópolis | Stylo Decore",
    description: "Cortinas de tecido sob medida com tecidos nobres. Atendimento consultivo em Florianópolis.",
    url: "/cortinas/tecido",
  },
};

export default function CortinaTecidoPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Cortinas de Tecido", href: "/cortinas/tecido" },
      ])} />
      <SubcategoryPage
        title="Cortinas de Tecido"
        category="Cortinas"
        description="Elegância e sofisticação com tecidos nobres sob medida. Cada cortina é confeccionada com materiais selecionados para garantir caimento perfeito e durabilidade."
        products={CORTINA_PRODUCTS["tecido"]}
      />
    </>
  );
}
