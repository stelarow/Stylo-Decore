import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina Prega Macho sob Medida em Florianópolis | Stylo Decore",
  description:
    "Cortina Prega Macho sob medida em Florianópolis e Região. Pregas triplas estruturadas que criam volume e sofisticação atemporal.",
  alternates: { canonical: "/cortinas/tipos-de-pregas/prega-macho" },
  openGraph: {
    title: "Cortina Prega Macho sob Medida | Stylo Decore",
    description: "Cortina Prega Macho com pregas triplas. Elegância robusta e atemporal em Florianópolis.",
    url: "/cortinas/tipos-de-pregas/prega-macho",
  },
};

export default function PregaMachoPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Tipos de Pregas", href: "/cortinas/tipos-de-pregas" },
        { name: "Prega Macho", href: "/cortinas/tipos-de-pregas/prega-macho" },
      ])} />
      <SubcategoryPage
        title="Prega Macho"
        category="Cortinas"
        titleKey="/cortinas/tipos-de-pregas/prega-macho"
        categoryKey="/cortinas"
        description="Pregas triplas estruturadas que criam volume e sofisticação. A prega macho transmite elegância robusta e atemporal, ideal para ambientes formais e salas de destaque."
        heroImage="/images/cortinas/prega-macho-hero-desktop.jpg"
        products={CORTINA_PRODUCTS["prega-macho"]}
        videoSrc="/videos/processo-cortinas.mp4"
        videoTitle="video.processo.title"
        videoCaption="video.processo.caption"
        videoFeatures={[
          { icon: "ruler", label: "video.processo.feat.medicao" },
          { icon: "scissors", label: "video.processo.feat.pontos" },
          { icon: "shirt", label: "video.processo.feat.caimento" },
        ]}
        specs={[
          { title: "Estrutura tríplice", description: "Três camadas de tecido por prega, criando volume e definição únicos." },
          { title: "Volume controlado", description: "Caimento estruturado que mantém a forma mesmo com tecidos mais pesados." },
          { title: "Ambientes formais", description: "Visual imponente ideal para salas de jantar, escritórios e suítes master." },
        ]}
      />
    </>
  );
}
