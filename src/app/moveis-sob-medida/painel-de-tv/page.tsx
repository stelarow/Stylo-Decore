import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { MOVEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Painel de TV Sob Medida em Florianópolis | Stylo Decore",
  description:
    "Painéis de TV sob medida em Florianópolis e Região. Design sofisticado com ripas, nichos e iluminação indireta. Transforme sua sala de estar com um projeto exclusivo.",
  keywords: [
    "painel de TV sob medida Florianópolis",
    "painel sala de estar planejado",
    "ripado painel TV",
    "móveis sob medida sala TV",
    "painel TV design Florianópolis",
  ],
  alternates: { canonical: "/moveis-sob-medida/painel-de-tv" },
  openGraph: {
    title: "Painel de TV Sob Medida | Stylo Decore",
    description:
      "Painéis de TV sob medida em Florianópolis. Design sofisticado com ripas, nichos e iluminação indireta para sua sala de estar.",
    url: "/moveis-sob-medida/painel-de-tv",
    images: [
      {
        url: "/images/moveis-painel-tv.png",
        width: 1200,
        height: 630,
        alt: "Painel de TV Sob Medida - Stylo Decore",
      },
    ],
  },
};

export default function PainelDeTVPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Móveis Sob Medida", href: "/moveis-sob-medida" },
          { name: "Painel de TV", href: "/moveis-sob-medida/painel-de-tv" },
        ])}
      />
      <SubcategoryPage
        title="Painel de TV"
        category="Móveis Sob Medida"
        titleKey="/moveis-sob-medida/painel-de-tv"
        categoryKey="/moveis-sob-medida"
        description="Painéis sob medida que transformam a sala de estar em um ambiente sofisticado. Ripados, nichos e iluminação indireta integrados em um projeto exclusivo para o seu espaço."
        descriptionKey="page.moveis.paineltv.desc"
        products={MOVEL_PRODUCTS["painel-de-tv"]}
        desktopHeroImage="/images/moveis-painel-tv-desktop.png"
        mobileHeroImage="/images/moveis-painel-tv.png"
        heroImageStyle={{ objectPosition: "center center" }}
        mobileHeroImageStyle={{ objectPosition: "center 35%" }}
        specs={[
          {
            title: "Ripado & Textura",
            description:
              "Painéis ripados verticais ou horizontais em MDF, madeira ou PVC, com acabamentos laqueados ou naturais.",
          },
          {
            title: "Iluminação Integrada",
            description:
              "Fitas de LED embutidas nos nichos e sancas para criar atmosfera aconchegante e valorizar o ambiente.",
          },
          {
            title: "Nichos & Prateleiras",
            description:
              "Nichos abertos e fechados integrados ao painel para organizar equipamentos, livros e objetos decorativos.",
          },
          {
            title: "Suporte para TV",
            description:
              "Suporte oculto embutido no painel, sem aparafusar na parede — instalação limpa e segura para qualquer tamanho de TV.",
          },
        ]}
      />
    </>
  );
}
