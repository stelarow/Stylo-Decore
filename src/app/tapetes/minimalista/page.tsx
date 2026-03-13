import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { TAPETE_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tapetes Minimalistas em Florianópolis | Stylo Decore",
  description: "Tapetes minimalistas com simplicidade e sofisticação em harmonia perfeita em Florianópolis e Região. Atendimento consultivo personalizado.",
  alternates: { canonical: "/tapetes/minimalista" },
  openGraph: {
    title: "Tapetes Minimalistas | Stylo Decore",
    description: "Simplicidade e sofisticação em harmonia perfeita para ambientes em Florianópolis.",
    url: "/tapetes/minimalista",
  },
};

export default function TapeteMinimalistaPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Tapetes", href: "/tapetes" },
        { name: "Minimalista", href: "/tapetes/minimalista" },
      ])} />
      <SubcategoryPage
        title="Minimalista"
        category="Tapetes"
        titleKey="/tapetes/minimalista"
        categoryKey="/tapetes"
        description="Simplicidade e sofisticação em harmonia perfeita. Tapetes com design clean que valorizam o espaço sem poluir visualmente."
        products={TAPETE_PRODUCTS["minimalista"]}
        desktopHeroImage="/images/tapetes/tapete-passadeira-hero-desktop.png"
        mobileHeroImage="/images/tapetes/tapete-passadeira-hero-mobile.png"
      />
    </>
  );
}
