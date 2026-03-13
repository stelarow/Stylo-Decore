import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { MOVEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Móveis Planejados para Quarto em Florianópolis | Stylo Decore",
  description: "Guarda-roupas e cabeceiras sob medida para quarto em Florianópolis e Região. Design exclusivo com máximo aproveitamento do espaço. Atendimento consultivo.",
  alternates: { canonical: "/moveis-sob-medida/quarto" },
  openGraph: {
    title: "Móveis Planejados para Quarto | Stylo Decore",
    description: "Guarda-roupas e cabeceiras sob medida para quarto em Florianópolis.",
    url: "/moveis-sob-medida/quarto",
  },
};

export default function QuartoPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Móveis Sob Medida", href: "/moveis-sob-medida" },
        { name: "Quarto", href: "/moveis-sob-medida/quarto" },
      ])} />
      <SubcategoryPage
        title="Quarto"
        category="Móveis Sob Medida"
        titleKey="/moveis-sob-medida/quarto"
        categoryKey="/moveis-sob-medida"
        description="Guarda-roupas e cabeceiras sob medida com design exclusivo. Máximo aproveitamento do espaço e conforto para o seu quarto."
        descriptionKey="page.moveis.quarto.desc"
        products={MOVEL_PRODUCTS["quarto"]}
        desktopHeroImage="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&h=800&fit=crop"
        mobileHeroImage="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&h=600&fit=crop"
        heroImageStyle={{ objectPosition: "center center" }}
      />
    </>
  );
}
