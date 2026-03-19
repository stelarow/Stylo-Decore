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
        heroImage="/images/persianas/miragem-hero.png"
        desktopHeroImage="/images/persianas/miragem-hero.png"
        mobileHeroImage="/images/persianas/miragem-hero-mobile.png"
        descriptionKey="page.persianas.miragem.desc"
        products={PERSIANA_PRODUCTS["miragem"]}
        sectionImage="/images/persianas/miragem-detalhe.png"
        sectionLabel="Diferenciais"
        videoTitle="Design pensado para ambientes de alto padrão."
        videoCaption="Tecido translúcido que cria luz difusa sem UV direto. Lâminas com efeito flutuante — mais limpas e modernas que os modelos tradicionais. Ideal para salas de estar, home cinemas e dormitórios que pedem um toque extra de refinamento."
        videoFeatures={[
          { icon: "wind", label: "Controle de Luz" },
          { icon: "layers", label: "Efeito Flutuante" },
          { icon: "paintbrush", label: "Versatilidade" },
        ]}
      />
    </>
  );
}
