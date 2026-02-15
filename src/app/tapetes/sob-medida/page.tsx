import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { TAPETE_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tapete Sob Medida em Florianópolis",
  description: "Tapetes sob medida com tamanho e formato personalizados em Florianópolis e Região. Soluções exclusivas para o seu espaço.",
  alternates: { canonical: "/tapetes/sob-medida" },
  openGraph: {
    title: "Tapete Sob Medida | Stylo Decore",
    description: "Tapetes sob medida com tamanho e formato personalizados em Florianópolis.",
    url: "/tapetes/sob-medida",
  },
};

export default function TapeteSobMedidaPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Tapetes", href: "/tapetes" },
        { name: "Tapete Sob Medida", href: "/tapetes/sob-medida" },
      ])} />
      <SubcategoryPage
        title="Tapete Sob Medida"
        category="Tapetes"
        description="Tamanho e formato personalizados para o seu espaço. Tapetes sob medida que se encaixam perfeitamente em qualquer ambiente."
        products={TAPETE_PRODUCTS["sob-medida"]}
      />
    </>
  );
}
