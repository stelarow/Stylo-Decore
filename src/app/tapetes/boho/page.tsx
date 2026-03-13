import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { TAPETE_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tapetes Boho em Florianópolis | Stylo Decore",
  description: "Tapetes boho com estilo boêmio, texturas ricas e padrões únicos em Florianópolis e Região. Atendimento consultivo personalizado.",
  alternates: { canonical: "/tapetes/boho" },
  openGraph: {
    title: "Tapetes Boho | Stylo Decore",
    description: "Estilo boêmio com texturas ricas e padrões únicos para ambientes em Florianópolis.",
    url: "/tapetes/boho",
  },
};

export default function TapeteBohoPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Tapetes", href: "/tapetes" },
        { name: "Boho", href: "/tapetes/boho" },
      ])} />
      <SubcategoryPage
        title="Boho"
        category="Tapetes"
        titleKey="/tapetes/boho"
        categoryKey="/tapetes"
        description="Estilo boêmio com texturas ricas e padrões únicos. Tapetes que trazem personalidade, cor e uma atmosfera acolhedora para o seu espaço."
        products={TAPETE_PRODUCTS["boho"]}
        desktopHeroImage="/images/tapetes/carving-organic-hero-desktop.png"
        mobileHeroImage="/images/tapetes/carving-organic-hero-mobile.png"
      />
    </>
  );
}
