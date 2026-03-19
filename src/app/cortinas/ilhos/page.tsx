import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina com Ilhós sob Medida em Florianópolis",
  description: "Cortinas com ilhós sob medida em Florianópolis e Região. Argolas metálicas com visual moderno e deslizamento suave.",
  alternates: { canonical: "/cortinas/ilhos" },
  openGraph: {
    title: "Cortina com Ilhós sob Medida | Stylo Decore",
    description: "Cortinas com ilhós sob medida. Visual moderno e prático em Florianópolis.",
    url: "/cortinas/ilhos",
  },
};

export default function CortinaIlhosPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Cortina com Ilhós", href: "/cortinas/ilhos" },
      ])} />
      <SubcategoryPage
        title="Cortina com Ilhós"
        category="Cortinas"
        titleKey="/cortinas/ilhos"
        categoryKey="/cortinas"
        descriptionKey="page.cortinas.ilhos.desc"
        heroImage="/images/cortinas/cortina-ilhos-hero-desktop.png"
        heroDesktopClass="object-center"
        heroImageStyle={{ objectPosition: "center center" }}
        mobileHeroImage="/images/cortinas/cortina-ilhos-hero-mobile.png"
        products={CORTINA_PRODUCTS["ilhos"]}
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
