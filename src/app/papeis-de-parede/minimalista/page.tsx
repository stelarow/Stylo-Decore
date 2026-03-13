import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PAPEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papel de Parede Minimalista em Florianópolis",
  description: "Coleção Minimalista - Leveza e clareza para espaços serenos, equilibrados e sofisticados. Aplicação profissional em Florianópolis e Região.",
  alternates: { canonical: "/papeis-de-parede/minimalista" },
  openGraph: {
    title: "Papel de Parede Minimalista | Stylo Decore",
    description: "Coleção Minimalista - Leveza e clareza para espaços serenos em Florianópolis.",
    url: "/papeis-de-parede/minimalista",
  },
};

export default function MinimalistaPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Papéis de Parede", href: "/papeis-de-parede" },
        { name: "Minimalista", href: "/papeis-de-parede/minimalista" },
      ])} />
      <SubcategoryPage
        title="Minimalista"
        category="Papéis de Parede"
        titleKey="/papeis-de-parede/minimalista"
        categoryKey="/papeis-de-parede"
        description="Leveza, clareza e equilíbrio para quem valoriza o essencial. A coleção Minimalista reúne tons neutros, texturas sutis e padrões discretos que criam ambientes serenos e atemporais."
        descriptionKey="page.minimalista.desc"
        products={PAPEL_PRODUCTS.minimalista}
        desktopHeroImage="/images/papel/papel-18.jpg"
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
