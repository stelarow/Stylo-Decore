import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina Franzida sob Medida em Florianópolis | Stylo Decore",
  description:
    "Cortina Franzida sob medida em Florianópolis e Região. Franzido clássico com volume, leveza e texturas ricas que encantam qualquer ambiente.",
  alternates: { canonical: "/cortinas/tipos-de-pregas/cortina-franzida" },
  openGraph: {
    title: "Cortina Franzida sob Medida | Stylo Decore",
    description: "Cortina Franzida com volume e leveza. Técnica clássica que cria texturas ricas em Florianópolis.",
    url: "/cortinas/tipos-de-pregas/cortina-franzida",
  },
};

export default function CortinaFranzidaPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Tipos de Pregas", href: "/cortinas/tipos-de-pregas" },
        { name: "Cortina Franzida", href: "/cortinas/tipos-de-pregas/cortina-franzida" },
      ])} />
      <SubcategoryPage
        title="Cortina Franzida"
        category="Cortinas"
        titleKey="/cortinas/tipos-de-pregas/cortina-franzida"
        categoryKey="/cortinas"
        description="Franzido clássico com volume e leveza. Uma das técnicas mais tradicionais da costura de cortinas — cria texturas ricas e cheias de personalidade que transformam qualquer ambiente."
        heroImage="/images/cortinas/ilhos-01.jpg"
        products={CORTINA_PRODUCTS["cortina-franzida"]}
        videoSrc="/videos/processo-cortinas.mp4"
        videoTitle="video.processo.title"
        videoCaption="video.processo.caption"
        videoFeatures={[
          { icon: "ruler", label: "video.processo.feat.medicao" },
          { icon: "scissors", label: "video.processo.feat.pontos" },
          { icon: "shirt", label: "video.processo.feat.caimento" },
        ]}
        specs={[
          { title: "Volume generoso", description: "Franzido amplo que preenche o ambiente com presença e charme." },
          { title: "Textura rica", description: "Dobras naturais criam padrões de luz e sombra únicos." },
          { title: "Densidade ajustável", description: "Grau de franzimento adaptado ao tecido e à preferência do cliente." },
        ]}
      />
    </>
  );
}
