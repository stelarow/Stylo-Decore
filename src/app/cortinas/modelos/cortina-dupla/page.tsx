import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina Dupla sob Medida em Florianópolis | Stylo Decore",
  description:
    "Cortina Dupla sob medida em Florianópolis. Voil + blackout ou dois tecidos sobrepostos para controle total de luz, privacidade e decoração em um único sistema.",
  alternates: { canonical: "/cortinas/modelos/cortina-dupla" },
  openGraph: {
    title: "Cortina Dupla sob Medida | Stylo Decore",
    description: "Cortina Dupla voil + blackout sob medida em Florianópolis.",
    url: "/cortinas/modelos/cortina-dupla",
  },
};

export default function CortinaDuplaPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Modelos", href: "/cortinas/modelos" },
        { name: "Cortina Dupla", href: "/cortinas/modelos/cortina-dupla" },
      ])} />
      <SubcategoryPage
        title="Cortina Dupla"
        category="Cortinas"
        titleKey="/cortinas/modelos/cortina-dupla"
        categoryKey="/cortinas"
        descriptionKey="page.cortinas.cortina-dupla.desc"
        heroImage="/images/cortinas/cortina-07-desktop.jpg"
        products={CORTINA_PRODUCTS["cortina-dupla"]}
        videoSrc="/videos/processo-cortinas.mp4"
        videoTitle="video.processo.title"
        videoCaption="video.processo.caption"
        videoFeatures={[
          { icon: "layers", label: "video.processo.feat.medicao" },
          { icon: "ruler", label: "video.processo.feat.pontos" },
          { icon: "shirt", label: "video.processo.feat.caimento" },
        ]}
        specs={[
          { title: "Voil + Blackout", description: "A combinação mais popular: voil filtra e difunde a luz do dia; blackout fecha a noite com privacidade total." },
          { title: "Tecido + Tecido", description: "Dois tecidos complementares para efeito visual rico, sem necessidade de blackout." },
          { title: "Trilho duplo incluso", description: "O projeto inclui o trilho duplo adequado para suportar as duas camadas com deslizamento suave." },
        ]}
      />
    </>
  );
}
