import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PAPEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papel de Parede Moderno em Florianópolis",
  description: "Coleção Moderno - Design contemporâneo e arrojado para ambientes únicos e marcantes. Aplicação profissional em Florianópolis e Região.",
  alternates: { canonical: "/papeis-de-parede/moderno" },
  openGraph: {
    title: "Papel de Parede Moderno | Stylo Decore",
    description: "Coleção Moderno - Design contemporâneo para ambientes arrojados em Florianópolis.",
    url: "/papeis-de-parede/moderno",
  },
};

export default function ModernoPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Papéis de Parede", href: "/papeis-de-parede" },
        { name: "Moderno", href: "/papeis-de-parede/moderno" },
      ])} />
      <SubcategoryPage
        title="Moderno"
        category="Papéis de Parede"
        titleKey="/papeis-de-parede/moderno"
        categoryKey="/papeis-de-parede"
        description="Design contemporâneo para quem busca ambientes arrojados, únicos e marcantes. A coleção Moderno reúne padrões urbanos, grafismos expressivos e composições que definem tendências."
        descriptionKey="page.moderno.desc"
        products={PAPEL_PRODUCTS.moderno}
        desktopHeroImage="/images/papel/papel-11.jpg"
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
