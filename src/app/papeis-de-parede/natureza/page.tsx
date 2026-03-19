import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PAPEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papel de Parede Natural e Botânico em Florianópolis",
  description: "Coleção Natural & Botânico - Folhagens e elementos naturais que trazem o jardim para dentro de casa. Aplicação profissional em Florianópolis e Região.",
  alternates: { canonical: "/papeis-de-parede/natureza" },
  openGraph: {
    title: "Papel de Parede Natural & Botânico | Stylo Decore",
    description: "Coleção Natural & Botânico - Folhagens e elementos naturais para ambientes em Florianópolis.",
    url: "/papeis-de-parede/natureza",
  },
};

export default function NaturezaPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Papéis de Parede", href: "/papeis-de-parede" },
        { name: "Natureza", href: "/papeis-de-parede/natureza" },
      ])} />
      <SubcategoryPage
        title="Natureza"
        category="Papéis de Parede"
        titleKey="/papeis-de-parede/natureza"
        categoryKey="/papeis-de-parede"
        description="Folhagens exuberantes, bambus e elementos naturais que conectam o interior à natureza. A coleção Natural & Botânico transforma qualquer ambiente em um refúgio verde e acolhedor."
        descriptionKey="page.natureza.desc"
        products={PAPEL_PRODUCTS["natureza"]}
        showCatalogNote
        desktopHeroImage="/images/papel/natureza-hero-desktop.png"
        mobileHeroImage="/images/papel/natureza-hero-mobile.png"
        heroImageStyle={{ objectPosition: "center 55%" }}
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
