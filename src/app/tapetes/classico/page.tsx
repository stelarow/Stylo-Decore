import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { TAPETE_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tapetes ClássicoS em Florianópolis | Stylo Decore",
  description: "Tapetes clássicos com elegância atemporal e padrões tradicionais refinados em Florianópolis e Região. Atendimento consultivo personalizado.",
  alternates: { canonical: "/tapetes/classico" },
  openGraph: {
    title: "Tapetes ClássicoS | Stylo Decore",
    description: "Elegância atemporal com padrões tradicionais e refinados em Florianópolis.",
    url: "/tapetes/classico",
  },
};

export default function TapeteClassicoPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Tapetes", href: "/tapetes" },
        { name: "ClássicoS", href: "/tapetes/classico" },
      ])} />
      <SubcategoryPage
        title="ClássicoS"
        category="Tapetes"
        titleKey="/tapetes/classico"
        categoryKey="/tapetes"
        descriptionKey="page.tapetes.classico.desc"
        products={TAPETE_PRODUCTS["classico"]}
        desktopHeroImage="/images/tapetes/tapete-decorativo-hero-desktop.png"
        mobileHeroImage="/images/tapetes/tapete-decorativo-hero-mobile.png"
      />
    </>
  );
}
