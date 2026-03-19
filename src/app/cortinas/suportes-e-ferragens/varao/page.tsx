import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Varão para Cortinas sob Medida em Florianópolis | Stylo Decore",
  description:
    "Varão para cortinas sob medida em Florianópolis. Varão simples, com ponteira decorativa ou duplo — em diferentes materiais e acabamentos para cada estilo.",
  alternates: { canonical: "/cortinas/suportes-e-ferragens/varao" },
  openGraph: {
    title: "Varão para Cortinas | Stylo Decore",
    description: "Varão simples, decorativo e duplo para cortinas sob medida em Florianópolis.",
    url: "/cortinas/suportes-e-ferragens/varao",
  },
};

export default function VaraoPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Suportes e Ferragens", href: "/cortinas/suportes-e-ferragens" },
        { name: "Varão", href: "/cortinas/suportes-e-ferragens/varao" },
      ])} />
      <SubcategoryPage
        title="Varão"
        category="Cortinas"
        titleKey="/cortinas/suportes-e-ferragens/varao"
        categoryKey="/cortinas"
        descriptionKey="page.cortinas.suportes.varao.desc"
        heroImage="/images/cortinas/varao-hero-desktop.png"
        heroDesktopClass="object-center"
        heroImageStyle={{ objectPosition: "center 30%" }}
        products={CORTINA_PRODUCTS["varao"]}
        videoSrc="/videos/processo-cortinas.mp4"
        videoTitle="video.processo.title"
        videoCaption="video.processo.caption"
        videoFeatures={[
          { icon: "ruler", label: "video.processo.feat.medicao" },
          { icon: "layers", label: "video.processo.feat.pontos" },
          { icon: "shirt", label: "video.processo.feat.caimento" },
        ]}
        specs={[
          { title: "Varão Simples", description: "Perfil liso em aço, alumínio ou madeira — discreto e versátil para qualquer estilo." },
          { title: "Varão com Ponteira Decorativa", description: "Ponteiras em finais ornamentados: esfera, folha, flor ou cristal. Detalhe que valoriza o ambiente." },
          { title: "Varão Duplo", description: "Suporte dois trilhos sobrepostos para cortina dupla — voil + blackout ou dois tecidos complementares." },
        ]}
      />
    </>
  );
}
