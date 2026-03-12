import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PERSIANA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina Clássica Supreme em Florianópolis | Stylo Decore",
  description: "Cortina Clássica Supreme e Supreme Plus sob medida em Florianópolis e Região. Tecidos exclusivos e acabamento premium para ambientes sofisticados.",
  alternates: { canonical: "/persianas/classica-supreme" },
  openGraph: {
    title: "Cortina Clássica Supreme | Stylo Decore",
    description: "Cortina Clássica Supreme e Supreme Plus sob medida com tecidos exclusivos e acabamento premium em Florianópolis.",
    url: "/persianas/classica-supreme",
  },
};

export default function ClassicaSupremePage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Persianas", href: "/persianas" },
        { name: "Cortina Clássica Supreme", href: "/persianas/classica-supreme" },
      ])} />
      <SubcategoryPage
        title="Clássica Supreme"
        category="Persianas"
        titleKey="/persianas/classica-supreme"
        categoryKey="/persianas"
        heroImage="/images/persianas/persiana-h-sala.jpg"
        desktopHeroImage="/images/persianas/persiana-hero-desktop.jpeg"
        description="O ápice do requinte clássico. A linha Supreme e Supreme Plus reúne os tecidos mais exclusivos em confecções sob medida de altíssimo padrão, para ambientes que não fazem concessões ao luxo."
        products={PERSIANA_PRODUCTS["classica-supreme"]}
      />
    </>
  );
}
