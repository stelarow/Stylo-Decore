import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PAPEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papel de Parede Geométrico em Florianópolis",
  description: "Coleção Geométricos - Padrões modernos e abstratos que criam dinamismo e sofisticação. Aplicação profissional em Florianópolis e Região.",
  alternates: { canonical: "/papeis-de-parede/geometricos" },
  openGraph: {
    title: "Papel de Parede Geométrico | Stylo Decore",
    description: "Coleção Geométricos - Padrões modernos e abstratos para ambientes contemporâneos em Florianópolis.",
    url: "/papeis-de-parede/geometricos",
  },
};

export default function GeometricosPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Papéis de Parede", href: "/papeis-de-parede" },
        { name: "Geométricos", href: "/papeis-de-parede/geometricos" },
      ])} />
      <SubcategoryPage
        title="Geométricos"
        category="Papéis de Parede"
        titleKey="/papeis-de-parede/geometricos"
        categoryKey="/papeis-de-parede"
        description="Padrões modernos e abstratos que criam dinamismo e sofisticação. A coleção Geométricos traz formas, linhas e texturas que transformam paredes em elementos de design."
        descriptionKey="page.geometricos.desc"
        products={PAPEL_PRODUCTS.geometricos}
        showCatalogNote
        desktopHeroImage="/images/papel-geometricos.jpg"
        mobileHeroImage="/images/papel-geometricos-mobile.png"
        heroImageStyle={{ objectPosition: "left center" }}
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
