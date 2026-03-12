import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PERSIANA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina Miragem em Florianópolis | Stylo Decore",
  description: "Cortina Miragem sob medida em Florianópolis e Região. Efeito visual único com transparência e privacidade simultâneas para ambientes modernos.",
  alternates: { canonical: "/persianas/miragem" },
  openGraph: {
    title: "Cortina Miragem | Stylo Decore",
    description: "Cortina Miragem sob medida com efeito visual único de transparência e privacidade em Florianópolis.",
    url: "/persianas/miragem",
  },
};

export default function MiragemPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Persianas", href: "/persianas" },
        { name: "Cortina Miragem", href: "/persianas/miragem" },
      ])} />
      <SubcategoryPage
        title="Miragem"
        category="Persianas"
        titleKey="/persianas/miragem"
        categoryKey="/persianas"
        heroImage="/images/persianas/persiana-11.jpg"
        desktopHeroImage="/images/persianas/persiana-hero-desktop.jpeg"
        description="Uma ilusão de óptica em forma de cortina. A Miragem cria um jogo fascinante entre transparência e privacidade, filtrando a luz de forma única enquanto mantém o ambiente protegido de olhares externos."
        products={PERSIANA_PRODUCTS["miragem"]}
      />
    </>
  );
}
