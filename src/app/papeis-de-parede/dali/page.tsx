import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PAPEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papel de Parede Dali em Florianópolis",
  description: "Coleção Dali - Padrões artísticos inspirados em grandes mestres. Aplicação profissional em Florianópolis e Região.",
  alternates: { canonical: "/papeis-de-parede/dali" },
  openGraph: {
    title: "Papel de Parede Dali | Stylo Decore",
    description: "Coleção Dali - Padrões artísticos inspirados em grandes mestres em Florianópolis.",
    url: "/papeis-de-parede/dali",
  },
};

export default function DaliPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Papéis de Parede", href: "/papeis-de-parede" },
        { name: "Dali", href: "/papeis-de-parede/dali" },
      ])} />
      <SubcategoryPage
        title="Dali"
        category="Papéis de Parede"
        description="Padrões artísticos inspirados em grandes mestres. A coleção Dali é para quem aprecia arte e quer transformar paredes em verdadeiras obras de arte."
        products={PAPEL_PRODUCTS.dali}
      />
    </>
  );
}
