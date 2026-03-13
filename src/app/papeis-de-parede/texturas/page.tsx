import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PAPEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papel de Parede Textura em Florianópolis",
  description: "Coleção Texturas - Efeitos táteis e visuais que adicionam profundidade e sofisticação ao espaço. Aplicação profissional em Florianópolis e Região.",
  alternates: { canonical: "/papeis-de-parede/texturas" },
  openGraph: {
    title: "Papel de Parede Textura | Stylo Decore",
    description: "Coleção Texturas - Efeitos táteis e visuais para ambientes sofisticados em Florianópolis.",
    url: "/papeis-de-parede/texturas",
  },
};

export default function TexturasPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Papéis de Parede", href: "/papeis-de-parede" },
        { name: "Texturas", href: "/papeis-de-parede/texturas" },
      ])} />
      <SubcategoryPage
        title="Texturas"
        category="Papéis de Parede"
        titleKey="/papeis-de-parede/texturas"
        categoryKey="/papeis-de-parede"
        description="Efeitos táteis e visuais que adicionam profundidade e caráter a qualquer ambiente. Da sofisticação do cimento queimado à naturalidade do linho, nossa coleção Texturas eleva o design de interiores."
        descriptionKey="page.texturas.desc"
        products={PAPEL_PRODUCTS.texturas}
        desktopHeroImage="/images/papel/papel-04.jpg"
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
