import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { MOVEL_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Home Office Planejado em Florianópolis | Stylo Decore",
  description: "Escritórios e espaços de trabalho sob medida em Florianópolis e Região. Ambientes funcionais e inspiradores para trabalhar em casa. Atendimento consultivo.",
  alternates: { canonical: "/moveis-sob-medida/home-office" },
  openGraph: {
    title: "Home Office Planejado | Stylo Decore",
    description: "Escritórios e espaços de trabalho sob medida em Florianópolis.",
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
        titleKey="/moveis-sob-medida/home-office"
        categoryKey="/moveis-sob-medida"
        description="Escritórios e espaços de trabalho sob medida. Ambientes funcionais e inspiradores para trabalhar em casa."
        descriptionKey="page.moveis.home-office.desc"
        products={MOVEL_PRODUCTS["home-office"]}
        desktopHeroImage="https://images.unsplash.com/photo-1593642632632-d4c5d4cc5a34?w=1200&h=800&fit=crop"
        mobileHeroImage="https://images.unsplash.com/photo-1593642632632-d4c5d4cc5a34?w=800&h=600&fit=crop"
        heroImageStyle={{ objectPosition: "center center" }}
      />
    </>
  );
}
