import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PAPEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papel de Parede Floral em Florianópolis",
  description: "Coleção Floral - Estampas florais elegantes para ambientes cheios de vida e personalidade. Aplicação profissional em Florianópolis e Região.",
  alternates: { canonical: "/papeis-de-parede/floral" },
  openGraph: {
    title: "Papel de Parede Floral | Stylo Decore",
    description: "Coleção Floral - Estampas florais para ambientes elegantes em Florianópolis.",
    url: "/papeis-de-parede/floral",
  },
};

export default function FloralPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Papéis de Parede", href: "/papeis-de-parede" },
        { name: "Floral", href: "/papeis-de-parede/floral" },
      ])} />
      <SubcategoryPage
        title="Floral"
        category="Papéis de Parede"
        titleKey="/papeis-de-parede/floral"
        categoryKey="/papeis-de-parede"
        description="Estampas florais que transformam qualquer ambiente em um espaço elegante e cheio de vida. Da delicadeza das rosas ao exotismo das flores tropicais, nossa coleção Floral oferece padrões para todos os estilos."
        descriptionKey="page.floral.desc"
        products={PAPEL_PRODUCTS.floral}
        desktopHeroImage="/images/papel/papel-01.jpg"
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
