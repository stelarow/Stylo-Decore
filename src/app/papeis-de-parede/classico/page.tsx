import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PAPEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papel de Parede Clássico em Florianópolis",
  description: "Coleção Clássico - Padrões atemporais com elegância e sofisticação para ambientes refinados. Aplicação profissional em Florianópolis e Região.",
  alternates: { canonical: "/papeis-de-parede/classico" },
  openGraph: {
    title: "Papel de Parede Clássico | Stylo Decore",
    description: "Coleção Clássico - Padrões atemporais para ambientes refinados em Florianópolis.",
    url: "/papeis-de-parede/classico",
  },
};

export default function ClassicoPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Papéis de Parede", href: "/papeis-de-parede" },
        { name: "Clássico", href: "/papeis-de-parede/classico" },
      ])} />
      <SubcategoryPage
        title="Clássico"
        category="Papéis de Parede"
        titleKey="/papeis-de-parede/classico"
        categoryKey="/papeis-de-parede"
        description="Padrões atemporais que atravessam gerações sem perder elegância. Arabescos, damascos e listras refinadas compõem a coleção Clássico, perfeita para ambientes que valorizam tradição e sofisticação."
        descriptionKey="page.classico.desc"
        products={PAPEL_PRODUCTS.classico}
        desktopHeroImage="/images/papel/papel-08.jpg"
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
