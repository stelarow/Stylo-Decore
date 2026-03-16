import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PERSIANA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina Painel em Florianópolis | Stylo Decore",
  description: "Cortina Painel sob medida em Florianópolis e Região. Painéis deslizantes modernos para grandes aberturas, divisórias e ambientes contemporâneos.",
  alternates: { canonical: "/persianas/painel" },
  openGraph: {
    title: "Cortina Painel | Stylo Decore",
    description: "Cortina Painel sob medida com painéis deslizantes para grandes aberturas em Florianópolis.",
    url: "/persianas/painel",
  },
};

export default function PainelPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Persianas", href: "/persianas" },
        { name: "Cortina Painel", href: "/persianas/painel" },
      ])} />
      <SubcategoryPage
        title="Painel"
        category="Persianas"
        titleKey="/persianas/painel"
        categoryKey="/persianas"
        heroImage="/images/persianas/painel-hero.png"
        desktopHeroImage="/images/persianas/painel-hero-desktop.png"
        mobileHeroImage="/images/persianas/painel-hero-mobile.png"
        description="Modernidade em movimento. A Cortina Painel apresenta placas deslizantes sobrepostas que criam divisões dinâmicas no espaço — perfeita para grandes janelas, varandas e ambientes open concept."
        products={PERSIANA_PRODUCTS["painel"]}
        heroImageStyle={{ objectPosition: "center 40%" }}
        mobileHeroImageStyle={{ objectPosition: "center 40%" }}
      />
    </>
  );
}
