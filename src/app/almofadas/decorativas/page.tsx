import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { ALMOFADA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Almofadas Decorativas em Florianópolis | Stylo Decore",
  description: "Almofadas decorativas sob medida para todos os ambientes em Florianópolis e Região. Tecidos nobres, formatos exclusivos e acabamento artesanal.",
  alternates: { canonical: "/almofadas/decorativas" },
  openGraph: {
    title: "Almofadas Decorativas | Stylo Decore",
    description: "Almofadas decorativas sob medida em Florianópolis. Tecidos nobres e acabamento artesanal.",
    url: "/almofadas/decorativas",
  },
};

export default function AlmofadasDecorativasPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Almofadas", href: "/almofadas" },
        { name: "Decorativas", href: "/almofadas/decorativas" },
      ])} />
      <SubcategoryPage
        title="Almofadas Decorativas"
        category="Almofadas"
        titleKey="/almofadas/decorativas"
        categoryKey="/almofadas"
        description="Almofadas decorativas sob medida que completam e elevam qualquer ambiente com estilo e conforto."
        descriptionKey="page.almofadas.decorativas.desc"
        products={ALMOFADA_PRODUCTS["decorativas"]}
        desktopHeroImage="/images/almofadas/almofadas-hero.png"
        mobileHeroImage="/images/almofadas/almofadas-hero.png"
      />
    </>
  );
}
