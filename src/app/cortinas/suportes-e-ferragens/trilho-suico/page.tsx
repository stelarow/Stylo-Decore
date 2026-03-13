import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Trilho Suíço para Cortinas em Florianópolis | Stylo Decore",
  description:
    "Trilho suíço para cortinas sob medida em Florianópolis. Sistema embutido discreto, silencioso e durável — ideal para cortinas de tecido com visual clean e contemporâneo.",
  alternates: { canonical: "/cortinas/suportes-e-ferragens/trilho-suico" },
  openGraph: {
    title: "Trilho Suíço para Cortinas | Stylo Decore",
    description: "Trilho suíço embutido para cortinas sob medida em Florianópolis.",
    url: "/cortinas/suportes-e-ferragens/trilho-suico",
  },
};

export default function TrilhoSuicoPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Suportes e Ferragens", href: "/cortinas/suportes-e-ferragens" },
        { name: "Trilho Suíço", href: "/cortinas/suportes-e-ferragens/trilho-suico" },
      ])} />
      <SubcategoryPage
        title="Trilho Suíço"
        category="Cortinas"
        titleKey="/cortinas/suportes-e-ferragens/trilho-suico"
        categoryKey="/cortinas"
        description="O trilho suíço é o sistema de suporte mais elegante e discreto para cortinas de tecido. Embutido no teto ou sancado, ele desaparece visualmente e dá protagonismo ao tecido e ao ambiente."
        heroImage="/images/cortinas/prega-americana-desktop-04.jpg"
        products={CORTINA_PRODUCTS["trilho-suico"]}
        videoSrc="/videos/processo-cortinas.mp4"
        videoTitle="video.processo.title"
        videoCaption="video.processo.caption"
        videoFeatures={[
          { icon: "ruler", label: "video.processo.feat.medicao" },
          { icon: "layers", label: "video.processo.feat.pontos" },
          { icon: "shirt", label: "video.processo.feat.caimento" },
        ]}
        specs={[
          { title: "Instalação embutida", description: "Fixado no teto ou dentro de sancado, fica completamente oculto — visual limpo e sofisticado." },
          { title: "Deslizamento silencioso", description: "Rolamentos internos garantem abertura e fechamento suave e sem barulho." },
          { title: "Alta durabilidade", description: "Alumínio de alta resistência com capacidade de carga para tecidos pesados." },
        ]}
      />
    </>
  );
}
