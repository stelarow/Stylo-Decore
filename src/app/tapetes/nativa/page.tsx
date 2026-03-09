import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { TAPETE_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nativa - Tapetes Decorativos em Florianópolis",
  description: "Coleção Nativa de tapetes decorativos que agregam estilo e personalidade ao ambiente em Florianópolis e Região. Peças exclusivas.",
  alternates: { canonical: "/tapetes/nativa" },
  openGraph: {
    title: "Nativa | Stylo Decore",
    description: "Coleção Nativa de tapetes decorativos com estilo e personalidade em Florianópolis.",
    url: "/tapetes/nativa",
  },
};

export default function TapeteNativaPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Tapetes", href: "/tapetes" },
        { name: "Nativa", href: "/tapetes/nativa" },
      ])} />
      <SubcategoryPage
        title="Nativa"
        category="Tapetes"
        description="Peças que agregam estilo e personalidade ao ambiente. Tapetes decorativos em diversas texturas, cores e padrões para compor o seu espaço."
        products={TAPETE_PRODUCTS["nativa"]}
        desktopHeroImage="/images/tapetes/tapete-decorativo-hero-desktop.png"
        mobileHeroImage="/images/tapetes/tapete-decorativo-hero-mobile.png"
        heroImageStyle={{ objectPosition: "center bottom" }}
      />
    </>
  );
}
