import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PERSIANA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina VF Romana de Teto em Florianópolis | Stylo Decore",
  description: "Cortina VF Romana de Teto sob medida em Florianópolis e Região. Instalação no teto para ambientes contemporâneos com design arrojado.",
  alternates: { canonical: "/persianas/vf-romana-de-teto" },
  openGraph: {
    title: "Cortina VF Romana de Teto | Stylo Decore",
    description: "Cortina VF Romana de Teto sob medida com instalação em teto para espaços modernos em Florianópolis.",
    url: "/persianas/vf-romana-de-teto",
  },
};

export default function VFRomanaDeTetoPagem() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Persianas", href: "/persianas" },
        { name: "Cortina VF Romana de Teto", href: "/persianas/vf-romana-de-teto" },
      ])} />
      <SubcategoryPage
        title="VF Romana de Teto"
        category="Persianas"
        titleKey="/persianas/vf-romana-de-teto"
        categoryKey="/persianas"
        heroImage="/images/persianas/persiana-17.jpg"
        desktopHeroImage="/images/persianas/persiana-hero-desktop.jpeg"
        description="Design que nasce do teto. A Cortina VF Romana de Teto é instalada diretamente no forro, criando um acabamento impecável e contemporâneo — ideal para projetos arquitetônicos que valorizam cada detalhe."
        products={PERSIANA_PRODUCTS["vf-romana-de-teto"]}
      />
    </>
  );
}
