import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PERSIANA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina Rolô Duo em Florianópolis | Stylo Decore",
  description: "Cortina Rolô Duo sob medida em Florianópolis e Região. Duas camadas de tecido para controle total de luz e privacidade com design moderno.",
  alternates: { canonical: "/persianas/rolo-duo" },
  openGraph: {
    title: "Cortina Rolô Duo | Stylo Decore",
    description: "Cortina Rolô Duo sob medida com controle total de luz e privacidade em Florianópolis.",
    url: "/persianas/rolo-duo",
  },
};

export default function RoloDuoPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Persianas", href: "/persianas" },
        { name: "Cortina Rolô Duo", href: "/persianas/rolo-duo" },
      ])} />
      <SubcategoryPage
        title="Rolô Duo"
        category="Persianas"
        titleKey="/persianas/rolo-duo"
        categoryKey="/persianas"
        heroImage="/images/persianas/rolo-duo-hero.png"
        desktopHeroImage="/images/persianas/rolo-duo-hero.png"
        mobileHeroImage="/images/persianas/rolo-duo-hero-mobile.png"
        description="Duas camadas de tecido em perfeita harmonia. A Cortina Rolô Duo combina uma camada filtrante e uma opaca, permitindo controle total da luminosidade e privacidade sem abrir mão do estilo."
        products={PERSIANA_PRODUCTS["rolo-duo"]}
      />
    </>
  );
}
