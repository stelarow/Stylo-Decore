import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina Wave sob Medida em Florianópolis | Stylo Decore",
  description:
    "Cortina Wave sob medida com caimento suave em ondas uniformes. Design contemporâneo e minimalista em Florianópolis e Região.",
  alternates: { canonical: "/cortinas/tipos-de-pregas/prega-wave" },
  openGraph: {
    title: "Cortina Wave sob Medida | Stylo Decore",
    description: "Cortina Wave com ondas suaves e uniformes. Design contemporâneo em Florianópolis.",
    url: "/cortinas/tipos-de-pregas/prega-wave",
  },
};

export default function PregaWavePage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Tipos de Pregas", href: "/cortinas/tipos-de-pregas" },
        { name: "Prega Wave", href: "/cortinas/tipos-de-pregas/prega-wave" },
      ])} />
      <SubcategoryPage
        title="Prega Wave"
        category="Cortinas"
        titleKey="/cortinas/tipos-de-pregas/prega-wave"
        categoryKey="/cortinas"
        description="Caimento suave em ondas uniformes e contínuas. A prega wave é o estilo contemporâneo por excelência — linhas fluidas que trazem leveza e modernidade a qualquer ambiente."
        heroImage="/images/cortinas/wave-01.jpg"
        products={CORTINA_PRODUCTS["prega-wave"]}
        videoSrc="/videos/processo-cortinas.mp4"
        videoTitle="video.processo.title"
        videoCaption="video.processo.caption"
        videoFeatures={[
          { icon: "ruler", label: "video.processo.feat.medicao" },
          { icon: "wind", label: "video.processo.feat.caimento" },
          { icon: "shirt", label: "video.processo.feat.pontos" },
        ]}
        specs={[
          { title: "Ondas uniformes", description: "Trilho especial wave garante curvas perfeitas e regulares." },
          { title: "Design minimalista", description: "Visual limpo e contemporâneo, sem pregas excessivas." },
          { title: "Trilho dedicado", description: "Requer trilho wave específico incluído no projeto." },
        ]}
      />
    </>
  );
}
