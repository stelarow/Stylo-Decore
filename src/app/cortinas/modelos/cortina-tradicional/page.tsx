import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina Tradicional sob Medida em Florianópolis | Stylo Decore",
  description:
    "Cortina Tradicional sob medida em Florianópolis. Modelo clássico em camada única, versátil e atemporal, que se adapta a qualquer ambiente e estilo decorativo.",
  alternates: { canonical: "/cortinas/modelos/cortina-tradicional" },
  openGraph: {
    title: "Cortina Tradicional sob Medida | Stylo Decore",
    description: "Cortina Tradicional clássica e versátil sob medida em Florianópolis.",
    url: "/cortinas/modelos/cortina-tradicional",
  },
};

export default function CortinaTradicionalPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Modelos", href: "/cortinas/modelos" },
        { name: "Cortina Tradicional", href: "/cortinas/modelos/cortina-tradicional" },
      ])} />
      <SubcategoryPage
        title="Cortina Tradicional"
        category="Cortinas"
        titleKey="/cortinas/modelos/cortina-tradicional"
        categoryKey="/cortinas"
        description="O modelo mais clássico e versátil. A cortina tradicional em camada única adapta-se a qualquer ambiente, estilo e tipo de tecido — do voil transparente ao linho encorpado."
        heroImage="/images/cortinas/cortina-prega-hero-desktop.png"
        products={CORTINA_PRODUCTS["cortina-tradicional"]}
        videoSrc="/videos/processo-cortinas.mp4"
        videoTitle="video.processo.title"
        videoCaption="video.processo.caption"
        videoFeatures={[
          { icon: "ruler", label: "video.processo.feat.medicao" },
          { icon: "scissors", label: "video.processo.feat.pontos" },
          { icon: "shirt", label: "video.processo.feat.caimento" },
        ]}
        specs={[
          { title: "Versatilidade total", description: "Funciona com qualquer tipo de tecido, prega e suporte." },
          { title: "Fácil manutenção", description: "Camada única simplifica lavagem e manutenção da cortina." },
          { title: "Custo-benefício", description: "Solução completa com menos material sem abrir mão da elegância." },
        ]}
      />
    </>
  );
}
