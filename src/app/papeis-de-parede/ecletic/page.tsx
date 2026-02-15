import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PAPEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papel de Parede Ecletic em Florianópolis",
  description: "Coleção Ecletic - Mix de estilos para composições únicas e ousadas. Aplicação profissional em Florianópolis e Região.",
  alternates: { canonical: "/papeis-de-parede/ecletic" },
  openGraph: {
    title: "Papel de Parede Ecletic | Stylo Decore",
    description: "Coleção Ecletic - Mix de estilos para composições únicas em Florianópolis.",
    url: "/papeis-de-parede/ecletic",
  },
};

export default function EcleticPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Papéis de Parede", href: "/papeis-de-parede" },
        { name: "Ecletic", href: "/papeis-de-parede/ecletic" },
      ])} />
      <SubcategoryPage
        title="Ecletic"
        category="Papéis de Parede"
        description="Mix de estilos para composições únicas e ousadas. A coleção Ecletic combina diferentes influências criando um visual surpreendente e cheio de caráter."
        products={PAPEL_PRODUCTS.ecletic}
      />
    </>
  );
}
