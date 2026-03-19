import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PAPEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Papel de Parede Natural em Florianópolis",
  description: "Coleção Natural - Texturas naturais e fibras orgânicas que conectam com a natureza para ambientes harmoniosos. Aplicação profissional em Florianópolis e Região.",
  alternates: { canonical: "/papeis-de-parede/natural" },
  openGraph: {
    title: "Papel de Parede Natural | Stylo Decore",
    description: "Coleção Natural - Texturas orgânicas para ambientes harmoniosos em Florianópolis.",
    url: "/papeis-de-parede/natural",
  },
};

export default function NaturalPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Papéis de Parede", href: "/papeis-de-parede" },
        { name: "Natural", href: "/papeis-de-parede/natural" },
      ])} />
      <SubcategoryPage
        title="Natural"
        category="Papéis de Parede"
        titleKey="/papeis-de-parede/natural"
        categoryKey="/papeis-de-parede"
        description="Texturas naturais que trazem a essência da natureza para dentro de casa. Madeira, pedra, linho e fibras orgânicas compõem a coleção Natural, perfeita para ambientes que valorizam equilíbrio e autenticidade."
        descriptionKey="page.natural.desc"
        products={PAPEL_PRODUCTS.natural}
        showCatalogNote
        desktopHeroImage="/images/papel/natural-hero-desktop.png"
        mobileHeroImage="/images/papel/natural-hero-mobile.png"
        heroImageStyle={{ objectPosition: "center 30%" }}
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
