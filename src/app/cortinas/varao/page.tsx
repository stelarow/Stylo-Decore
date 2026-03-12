import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortinas com Varão sob Medida em Florianópolis",
  description: "Cortinas com Varão sob medida em Florianópolis e Região. Visual clássico e elegante com varões decorativos em madeira ou metal para qualquer ambiente.",
  alternates: { canonical: "/cortinas/varao" },
  openGraph: {
    title: "Cortinas com Varão sob Medida | Stylo Decore",
    description: "Cortinas com Varão sob medida com varões decorativos em madeira ou metal em Florianópolis.",
    url: "/cortinas/varao",
  },
};

export default function CortinaVaraoPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Cortinas com Varão", href: "/cortinas/varao" },
      ])} />
      <SubcategoryPage
        title="Cortinas com Varão"
        category="Cortinas"
        titleKey="/cortinas/varao"
        categoryKey="/cortinas"
        description="Clássico e atemporal, o varão é um elemento decorativo que valoriza a cortina e compõe o ambiente. Trabalhamos com varões em madeira, metal e acabamentos exclusivos para criar conjuntos únicos."
        products={CORTINA_PRODUCTS["varao"]}
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
