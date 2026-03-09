import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { MOVEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Home Office Planejado em Florianópolis | Stylo Decore",
  description: "Móveis planejados para home office em Florianópolis e Região. Mesas, armários e estantes projetados para produtividade e elegância no seu escritório em casa.",
  alternates: { canonical: "/moveis-sob-medida/home-office" },
  openGraph: {
    title: "Home Office Planejado | Stylo Decore",
    description: "Móveis planejados para home office em Florianópolis. Produtividade e elegância para seu escritório em casa.",
    url: "/moveis-sob-medida/home-office",
  },
};

export default function HomeOfficePage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Móveis Sob Medida", href: "/moveis-sob-medida" },
        { name: "Home Office", href: "/moveis-sob-medida/home-office" },
      ])} />
      <SubcategoryPage
        title="Home Office"
        category="Móveis Sob Medida"
        description="Móveis planejados para seu escritório em casa. Ambientes funcionais e elegantes que elevam a sua produtividade."
        descriptionKey="page.moveis.homeoffice.desc"
        products={MOVEL_PRODUCTS["home-office"]}
        desktopHeroImage="/images/papeis-hero.jpeg"
        mobileHeroImage="/images/papeis-hero.jpeg"
      />
    </>
  );
}
