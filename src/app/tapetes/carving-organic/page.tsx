import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { TAPETE_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Carving Organic - Tapetes em Florianópolis",
  description: "Coleção Carving Organic de tapetes com design autoral e formas orgânicas em Florianópolis e Região. Peças exclusivas para o seu espaço.",
  alternates: { canonical: "/tapetes/carving-organic" },
  openGraph: {
    title: "Carving Organic | Stylo Decore",
    description: "Coleção Carving Organic de tapetes com design autoral em Florianópolis.",
    url: "/tapetes/carving-organic",
  },
};

export default function TapeteCarvingOrganicPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Tapetes", href: "/tapetes" },
        { name: "Carving Organic", href: "/tapetes/carving-organic" },
      ])} />
      <SubcategoryPage
        title="Carving Organic"
        category="Tapetes"
        description="Design autoral com formas orgânicas e acabamento artesanal. Tapetes exclusivos que transformam qualquer ambiente."
        products={TAPETE_PRODUCTS["carving-organic"]}
        desktopHeroImage="/images/tapetes/tapete-sob-medida-hero-desktop.png"
        mobileHeroImage="/images/tapetes/tapete-sob-medida-hero-mobile.png"
      />
    </>
  );
}
