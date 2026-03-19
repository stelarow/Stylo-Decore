import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PAPEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papel de Parede Boho em Florianópolis",
  description: "Coleção Boho - Efeitos táteis e visuais que adicionam profundidade e sofisticação ao espaço. Aplicação profissional em Florianópolis e Região.",
  alternates: { canonical: "/papeis-de-parede/boho" },
  openGraph: {
    title: "Papel de Parede Boho | Stylo Decore",
    description: "Coleção Boho - Efeitos táteis e visuais para ambientes sofisticados em Florianópolis.",
    url: "/papeis-de-parede/boho",
  },
};

export default function BohoPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Papéis de Parede", href: "/papeis-de-parede" },
        { name: "Boho", href: "/papeis-de-parede/boho" },
      ])} />
      <SubcategoryPage
        title="Boho"
        category="Papéis de Parede"
        titleKey="/papeis-de-parede/boho"
        categoryKey="/papeis-de-parede"
        description="Efeitos táteis e visuais que adicionam profundidade e caráter a qualquer ambiente. Da sofisticação do cimento queimado à naturalidade do linho, nossa coleção Boho eleva o design de interiores."
        descriptionKey="page.boho.desc"
        products={PAPEL_PRODUCTS.texturas}
        showCatalogNote
        desktopHeroImage="/images/papel/boho-hero.png"
        mobileHeroImage="/images/papel/boho-hero-mobile.png"
        heroImageStyle={{ objectPosition: "center 60%" }}
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
