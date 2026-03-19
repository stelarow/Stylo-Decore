import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { TAPETE_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tapetes Naturais em Florianópolis | Stylo Decore",
  description: "Tapetes naturais com fibras orgânicas e tons terrosos que conectam com a natureza em Florianópolis e Região. Atendimento consultivo personalizado.",
  alternates: { canonical: "/tapetes/natural" },
  openGraph: {
    title: "Tapetes Naturais | Stylo Decore",
    description: "Fibras naturais e tons terrosos que conectam com a natureza em Florianópolis.",
    url: "/tapetes/natural",
  },
};

export default function TapeteNaturalPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Tapetes", href: "/tapetes" },
        { name: "Natural", href: "/tapetes/natural" },
      ])} />
      <SubcategoryPage
        title="Natural"
        category="Tapetes"
        titleKey="/tapetes/natural"
        categoryKey="/tapetes"
        descriptionKey="page.tapetes.natural.desc"
        products={TAPETE_PRODUCTS["natural"]}
        desktopHeroImage="/images/tapetes/tapete-nativa-hero.png"
        mobileHeroImage="/images/tapetes/tapete-decorativo-hero-mobile.png"
      />
    </>
  );
}
