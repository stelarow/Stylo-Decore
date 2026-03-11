import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { TAPETE_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tapete Rede em Florianópolis",
  description: "Tapetes Rede com textura natural e design exclusivo em Florianópolis e Região. Soluções sob medida.",
  alternates: { canonical: "/tapetes/rede" },
  openGraph: {
    title: "Tapete Rede | Stylo Decore",
    description: "Tapetes Rede sob medida com textura natural em Florianópolis.",
    url: "/tapetes/rede",
  },
};

export default function TapeteRedePage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Tapetes", href: "/tapetes" },
        { name: "Tapete Rede", href: "/tapetes/rede" },
      ])} />
      <SubcategoryPage
        title="Tapete Rede"
        category="Tapetes"
        titleKey="/tapetes/rede"
        categoryKey="/tapetes"
        descriptionKey="page.tapetes.rede.desc"
        products={TAPETE_PRODUCTS["rede"]}
        desktopHeroImage="/images/tapetes/tapete-passadeira-hero-desktop.png"
        mobileHeroImage="/images/tapetes/tapete-passadeira-hero-mobile.png"
        heroImageStyle={{ objectPosition: "center 70%" }}
      />
    </>
  );
}
