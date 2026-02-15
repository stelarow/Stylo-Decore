import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { PERSIANA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Persiana Rolô & Double Vision em Florianópolis",
  description: "Persianas Rolô e Double Vision sob medida em Florianópolis e Região. Controle preciso de luminosidade com design moderno.",
  alternates: { canonical: "/persianas/rolo-double-vision" },
  openGraph: {
    title: "Persiana Rolô & Double Vision | Stylo Decore",
    description: "Persianas Rolô e Double Vision sob medida com design moderno em Florianópolis.",
    url: "/persianas/rolo-double-vision",
  },
};

export default function RoloDoubleVisionPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Persianas", href: "/persianas" },
        { name: "Rolô & Double Vision", href: "/persianas/rolo-double-vision" },
      ])} />
      <SubcategoryPage
        title="Rolô & Double Vision"
        category="Persianas"
        heroImage="/images/persianas/persiana-15.jpg"
        description="Controle preciso de luminosidade com design moderno. As persianas rolô e double vision oferecem versatilidade única, alternando entre privacidade total e entrada de luz natural."
        products={PERSIANA_PRODUCTS["rolo-double-vision"]}
      />
    </>
  );
}
