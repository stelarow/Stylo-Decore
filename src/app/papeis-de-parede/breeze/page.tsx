import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PAPEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papel de Parede Breeze em Florianópolis",
  description: "Coleção Breeze - Leveza e frescor para ambientes contemporâneos. Aplicação profissional em Florianópolis e Região.",
  alternates: { canonical: "/papeis-de-parede/breeze" },
  openGraph: {
    title: "Papel de Parede Breeze | Stylo Decore",
    description: "Coleção Breeze - Leveza e frescor para ambientes contemporâneos em Florianópolis.",
    url: "/papeis-de-parede/breeze",
  },
};

export default function BreezePage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Papéis de Parede", href: "/papeis-de-parede" },
        { name: "Breeze", href: "/papeis-de-parede/breeze" },
      ])} />
      <SubcategoryPage
        title="Breeze"
        category="Papéis de Parede"
        titleKey="/papeis-de-parede/breeze"
        categoryKey="/papeis-de-parede"
        descriptionKey="page.papeis.breeze.desc"
        products={PAPEL_PRODUCTS.breeze}
        showCatalogNote
        desktopHeroImage="/images/papel/breeze-hero-desktop.png"
        mobileHeroImage="/images/papel/breeze-hero-mobile.png"
        videoSrc="/videos/non-woven-demo.mp4"
        videoTitle="video.papel.title"
        videoCaption="video.papel.caption"
        videoFeatures={[
          { icon: "droplets", label: "video.papel.feat.higienizacao" },
          { icon: "shield", label: "video.papel.feat.durabilidade" },
          { icon: "layers", label: "video.papel.feat.resistencia" },
        ]}
      />
    </>
  );
}
