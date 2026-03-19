import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina Piso-Teto sob Medida em Florianópolis | Stylo Decore",
  description:
    "Cortina Piso-Teto sob medida em Florianópolis. Do teto ao chão para efeito dramático e sofisticado — valoriza o pé-direito e transforma completamente o ambiente.",
  alternates: { canonical: "/cortinas/modelos/cortina-piso-teto" },
  openGraph: {
    title: "Cortina Piso-Teto sob Medida | Stylo Decore",
    description: "Cortina Piso-Teto do teto ao chão sob medida em Florianópolis.",
    url: "/cortinas/modelos/cortina-piso-teto",
  },
};

export default function CortinaPisoTetoPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Modelos", href: "/cortinas/modelos" },
        { name: "Cortina Piso-Teto", href: "/cortinas/modelos/cortina-piso-teto" },
      ])} />
      <SubcategoryPage
        title="Cortina Piso-Teto"
        category="Cortinas"
        titleKey="/cortinas/modelos/cortina-piso-teto"
        categoryKey="/cortinas"
        descriptionKey="page.cortinas.cortina-piso-teto.desc"
        heroImage="/images/cortinas/cortina-wave-hero-desktop.png"
        products={CORTINA_PRODUCTS["cortina-piso-teto"]}
        videoSrc="/videos/processo-cortinas.mp4"
        videoTitle="video.processo.title"
        videoCaption="video.processo.caption"
        videoFeatures={[
          { icon: "ruler", label: "video.processo.feat.medicao" },
          { icon: "scissors", label: "video.processo.feat.pontos" },
          { icon: "shirt", label: "video.processo.feat.caimento" },
        ]}
        specs={[
          { title: "Efeito dramático", description: "A altura total valoriza o pé-direito e dá grandiosidade ao ambiente." },
          { title: "Medição precisa", description: "Medição sob medida para garantir que a cortina toque o chão perfeitamente." },
          { title: "Ambientes de alto padrão", description: "Favorito de arquitetos para salas de estar, suítes e áreas sociais sofisticadas." },
        ]}
      />
    </>
  );
}
