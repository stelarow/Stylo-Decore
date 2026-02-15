import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { TAPETE_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tapete Decorativo em Florianópolis",
  description: "Tapetes decorativos que agregam estilo e personalidade ao ambiente em Florianópolis e Região. Peças exclusivas.",
  alternates: { canonical: "/tapetes/decorativo" },
  openGraph: {
    title: "Tapete Decorativo | Stylo Decore",
    description: "Tapetes decorativos com estilo e personalidade em Florianópolis.",
    url: "/tapetes/decorativo",
  },
};

export default function TapeteDecorativoPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Tapetes", href: "/tapetes" },
        { name: "Tapete Decorativo", href: "/tapetes/decorativo" },
      ])} />
      <SubcategoryPage
        title="Tapete Decorativo"
        category="Tapetes"
        description="Peças que agregam estilo e personalidade ao ambiente. Tapetes decorativos em diversas texturas, cores e padrões para compor o seu espaço."
        products={TAPETE_PRODUCTS["decorativo"]}
      />
    </>
  );
}
