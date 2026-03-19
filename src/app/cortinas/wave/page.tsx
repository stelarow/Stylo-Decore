import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina Wave sob Medida em Florianópolis",
  description: "Cortinas Wave sob medida em Florianópolis e Região. Caimento suave em ondas uniformes com visual moderno e elegante.",
  alternates: { canonical: "/cortinas/wave" },
  openGraph: {
    title: "Cortina Wave sob Medida | Stylo Decore",
    description: "Cortinas Wave sob medida com caimento em ondas perfeitas em Florianópolis.",
    url: "/cortinas/wave",
  },
};

export default function CortinaWavePage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Cortina Wave", href: "/cortinas/wave" },
      ])} />
      <SubcategoryPage
        title="Cortina Wave"
        category="Cortinas"
        titleKey="/cortinas/wave"
        categoryKey="/cortinas"
        descriptionKey="page.cortinas.wave.desc"
        products={CORTINA_PRODUCTS["wave"]}
        videoSrc="/videos/processo-cortinas.mp4"
        videoTitle="video.processo.title"
        videoCaption="video.processo.caption"
        videoFeatures={[
          { icon: "ruler", label: "video.processo.feat.medicao" },
          { icon: "scissors", label: "video.processo.feat.pontos" },
          { icon: "shirt", label: "video.processo.feat.caimento" },
        ]}
      />
    </>
  );
}
