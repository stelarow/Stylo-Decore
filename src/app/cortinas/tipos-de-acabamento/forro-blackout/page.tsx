import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Forro e Blackout para Cortinas em Florianópolis | Stylo Decore",
  description:
    "Forro e blackout para cortinas sob medida em Florianópolis. Diferentes porcentagens de bloqueio de luz: 80%, 95% e 100%. Conforto, privacidade e economia de energia.",
  alternates: { canonical: "/cortinas/tipos-de-acabamento/forro-blackout" },
  openGraph: {
    title: "Forro e Blackout para Cortinas | Stylo Decore",
    description: "Blackout 80%, 95% e 100% para cortinas sob medida em Florianópolis.",
    url: "/cortinas/tipos-de-acabamento/forro-blackout",
  },
};

export default function ForroBlackoutPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Tipos de Acabamento", href: "/cortinas/tipos-de-acabamento" },
        { name: "Forro & Blackout", href: "/cortinas/tipos-de-acabamento/forro-blackout" },
      ])} />
      <SubcategoryPage
        title="Forro & Blackout"
        category="Cortinas"
        titleKey="/cortinas/tipos-de-acabamento/forro-blackout"
        categoryKey="/cortinas"
        description="O forro blackout é aplicado na face interna da cortina para controlar a entrada de luz. Disponível em três porcentagens de bloqueio — escolha conforme o seu ambiente e necessidade de privacidade."
        heroImage="/images/cortinas/cortina-blackout-hero-desktop.png"
        products={CORTINA_PRODUCTS["forro-blackout"]}
        videoSrc="/videos/processo-cortinas.mp4"
        videoTitle="video.processo.title"
        videoCaption="video.processo.caption"
        videoFeatures={[
          { icon: "shield", label: "video.processo.feat.medicao" },
          { icon: "layers", label: "video.processo.feat.pontos" },
          { icon: "shirt", label: "video.processo.feat.caimento" },
        ]}
        specs={[
          { title: "Blackout 80% — Meia Sombra", description: "Filtra 80% da luz solar. Ideal para salas de estar e escritórios que precisam de claridade com privacidade." },
          { title: "Blackout 95% — Alta Privacidade", description: "Bloqueia 95% da luz. Recomendado para quartos e ambientes onde se deseja descanso sem escurecimento total." },
          { title: "Blackout 100% — Escurecimento Total", description: "Bloqueia 100% da luz. Perfeito para quartos de bebês, home theater e dormitórios que exigem total escuridão." },
        ]}
      />
    </>
  );
}
