import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { TAPETE_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tapetes Modernos em Florianópolis | Stylo Decore",
  description: "Tapetes modernos com linhas contemporâneas e design arrojado para ambientes modernos em Florianópolis e Região. Atendimento consultivo personalizado.",
  alternates: { canonical: "/tapetes/moderno" },
  openGraph: {
    title: "Tapetes Modernos | Stylo Decore",
    description: "Linhas contemporâneas e design arrojado para ambientes modernos em Florianópolis.",
    url: "/tapetes/moderno",
  },
};

export default function TapeteModernoPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Tapetes", href: "/tapetes" },
        { name: "Moderno", href: "/tapetes/moderno" },
      ])} />
      <SubcategoryPage
        title="Moderno"
        category="Tapetes"
        titleKey="/tapetes/moderno"
        categoryKey="/tapetes"
        description="Linhas contemporâneas e design arrojado para ambientes modernos. Tapetes que combinam estética atual com qualidade e conforto."
        products={TAPETE_PRODUCTS["moderno"]}
        desktopHeroImage="/images/tapetes/tapete-sob-medida-hero-desktop.png"
        mobileHeroImage="/images/tapetes/tapete-sob-medida-hero-mobile.png"
      />
    </>
  );
}
