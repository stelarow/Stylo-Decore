import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina com Barra Larga sob Medida em Florianópolis | Stylo Decore",
  description:
    "Cortinas com barra larga sob medida em Florianópolis. Acabamento elegante que valoriza o caimento e dá peso visual à bainha da cortina.",
  alternates: { canonical: "/cortinas/tipos-de-acabamento/barra-larga" },
  openGraph: {
    title: "Cortina com Barra Larga sob Medida | Stylo Decore",
    description: "Acabamento com barra larga para cortinas sob medida em Florianópolis.",
    url: "/cortinas/tipos-de-acabamento/barra-larga",
  },
};

export default function BarraLargaPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Tipos de Acabamento", href: "/cortinas/tipos-de-acabamento" },
        { name: "Barra Larga", href: "/cortinas/tipos-de-acabamento/barra-larga" },
      ])} />
      <SubcategoryPage
        title="Barra Larga"
        category="Cortinas"
        titleKey="/cortinas/tipos-de-acabamento/barra-larga"
        categoryKey="/cortinas"
        descriptionKey="page.cortinas.barra-larga.desc"
        desktopHeroImage="/images/cortinas/barra-larga-hero-desktop.png"
        mobileHeroImage="/images/cortinas/barra-larga-hero-mobile.png"
        heroImageStyle={{ objectPosition: "center center" }}
        products={CORTINA_PRODUCTS["barra-larga"]}
        videoSrc="/videos/processo-cortinas.mp4"
        videoTitle="video.processo.title"
        videoCaption="video.processo.caption"
        videoFeatures={[
          { icon: "ruler", label: "video.processo.feat.medicao" },
          { icon: "scissors", label: "video.processo.feat.pontos" },
          { icon: "shirt", label: "video.processo.feat.caimento" },
        ]}
        specs={[
          { title: "Caimento perfeito", description: "O peso da barra faz a cortina cair em linha reta e uniforme." },
          { title: "Larguras disponíveis", description: "Barras de 5 cm, 8 cm ou 12 cm conforme o tecido e a altura do ambiente." },
          { title: "Acabamento exclusivo", description: "Costura feita à mão que garante alinhamento e durabilidade." },
        ]}
      />
    </>
  );
}
