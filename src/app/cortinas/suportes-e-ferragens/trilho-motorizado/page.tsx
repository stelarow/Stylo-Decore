import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Trilho Motorizado para Cortinas em Florianópolis | Stylo Decore",
  description:
    "Trilho motorizado para cortinas sob medida em Florianópolis. Automação com controle remoto, app ou integração com Alexa e Google Home. Praticidade e modernidade.",
  alternates: { canonical: "/cortinas/suportes-e-ferragens/trilho-motorizado" },
  openGraph: {
    title: "Trilho Motorizado para Cortinas | Stylo Decore",
    description: "Cortinas motorizadas com controle remoto e smart home em Florianópolis.",
    url: "/cortinas/suportes-e-ferragens/trilho-motorizado",
  },
};

export default function TrilhoMotorizadoPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Suportes e Ferragens", href: "/cortinas/suportes-e-ferragens" },
        { name: "Trilho Motorizado", href: "/cortinas/suportes-e-ferragens/trilho-motorizado" },
      ])} />
      <SubcategoryPage
        title="Trilho Motorizado"
        category="Cortinas"
        titleKey="/cortinas/suportes-e-ferragens/trilho-motorizado"
        categoryKey="/cortinas"
        description="A automação chega às cortinas com o trilho motorizado. Abra e feche suas cortinas com um toque — pelo controle remoto, pelo celular ou por voz. Ideal para janelas grandes ou de difícil acesso."
        heroImage="/images/cortinas/wave-04.jpg"
        products={CORTINA_PRODUCTS["trilho-motorizado"]}
        videoSrc="/videos/processo-cortinas.mp4"
        videoTitle="video.processo.title"
        videoCaption="video.processo.caption"
        videoFeatures={[
          { icon: "shield", label: "video.processo.feat.medicao" },
          { icon: "layers", label: "video.processo.feat.pontos" },
          { icon: "ruler", label: "video.processo.feat.caimento" },
        ]}
        specs={[
          { title: "Controle remoto e app", description: "Operação por controle remoto ou aplicativo no celular — sem necessidade de fio." },
          { title: "Integração smart home", description: "Compatível com Alexa, Google Home e sistemas de automação residencial." },
          { title: "Motor silencioso", description: "Operação praticamente silenciosa, sem vibração — ideal para ambientes de descanso." },
        ]}
      />
    </>
  );
}
