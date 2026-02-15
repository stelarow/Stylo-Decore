import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { TAPETE_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tapete Passadeira em Florianópolis",
  description: "Passadeiras para corredores, halls e áreas de circulação em Florianópolis e Região. Soluções sob medida.",
  alternates: { canonical: "/tapetes/passadeira" },
  openGraph: {
    title: "Tapete Passadeira | Stylo Decore",
    description: "Passadeiras sob medida para corredores e halls em Florianópolis.",
    url: "/tapetes/passadeira",
  },
};

export default function TapetePassadeiraPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Tapetes", href: "/tapetes" },
        { name: "Tapete Passadeira", href: "/tapetes/passadeira" },
      ])} />
      <SubcategoryPage
        title="Tapete Passadeira"
        category="Tapetes"
        description="Ideal para corredores, halls e áreas de circulação. Passadeiras que unem funcionalidade e beleza, disponíveis em diversos tamanhos e acabamentos."
        products={TAPETE_PRODUCTS["passadeira"]}
      />
    </>
  );
}
