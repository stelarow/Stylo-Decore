import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { MOVEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Closet Planejado em Florianópolis | Stylo Decore",
  description: "Closets planejados sob medida em Florianópolis e Região. Organização inteligente e acabamento refinado com elegância e praticidade. Atendimento consultivo.",
  alternates: { canonical: "/moveis-sob-medida/closet" },
  openGraph: {
    title: "Closet Planejado | Stylo Decore",
    description: "Closets planejados sob medida em Florianópolis.",
    url: "/moveis-sob-medida/closet",
  },
};

export default function ClosetPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Móveis Sob Medida", href: "/moveis-sob-medida" },
        { name: "Closet", href: "/moveis-sob-medida/closet" },
      ])} />
      <SubcategoryPage
        title="Closet"
        category="Móveis Sob Medida"
        titleKey="/moveis-sob-medida/closet"
        categoryKey="/moveis-sob-medida"
        description="Closets planejados com organização inteligente e acabamento refinado. Elegância e praticidade em cada detalhe."
        descriptionKey="page.moveis.closet.desc"
        products={MOVEL_PRODUCTS["closet"]}
        desktopHeroImage="https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=1200&h=800&fit=crop"
        mobileHeroImage="https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=600&fit=crop"
        heroImageStyle={{ objectPosition: "center center" }}
      />
    </>
  );
}
