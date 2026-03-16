import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { MOVEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Móveis Planejados para Banheiro em Florianópolis | Stylo Decore",
  description: "Gabinetes e armários sob medida para banheiro em Florianópolis e Região. Design exclusivo com sofisticação e funcionalidade. Atendimento consultivo.",
  alternates: { canonical: "/moveis-sob-medida/banheiro" },
  openGraph: {
    title: "Móveis Planejados para Banheiro | Stylo Decore",
    description: "Gabinetes e armários sob medida para banheiro em Florianópolis.",
    url: "/moveis-sob-medida/banheiro",
  },
};

const banheiroSpecs = [
  {
    title: "Materiais Resistentes à Umidade",
    description: "MDF naval e acabamentos especiais que protegem contra vapor e umidade do banheiro.",
  },
  {
    title: "Design Personalizado",
    description: "Gabinetes, armários e nichos projetados sob medida para o seu espaço e estilo.",
  },
  {
    title: "Acabamento Refinado",
    description: "Ferragens de qualidade, puxadores elegantes e superfícies fáceis de limpar.",
  },
];

export default function BanheiroPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Móveis Sob Medida", href: "/moveis-sob-medida" },
        { name: "Banheiro", href: "/moveis-sob-medida/banheiro" },
      ])} />
      <SubcategoryPage
        title="Banheiro"
        category="Móveis Sob Medida"
        titleKey="/moveis-sob-medida/banheiro"
        categoryKey="/moveis-sob-medida"
        description="Gabinetes e armários sob medida com design exclusivo. Projetos que unem sofisticação, funcionalidade e elegância para o seu banheiro."
        descriptionKey="page.moveis.banheiro.desc"
        products={MOVEL_PRODUCTS["banheiro"]}
        desktopHeroImage="/images/moveis-banheiro-card.jpg"
        mobileHeroImage="/images/moveis-banheiro-card.jpg"
        heroImageStyle={{ objectPosition: "center center" }}
        specs={banheiroSpecs}
      />
    </>
  );
}
