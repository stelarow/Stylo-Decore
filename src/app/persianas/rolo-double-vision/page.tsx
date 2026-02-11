import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import { PERSIANA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Persiana Rolô & Double Vision | Stylo Decore",
  description: "Persianas Rolô e Double Vision sob medida. Controle preciso de luminosidade com design moderno.",
};

export default function RoloDoubleVisionPage() {
  return (
    <SubcategoryPage
      title="Rolô & Double Vision"
      category="Persianas"
      heroImage="/images/persianas/persiana-15.jpg"
      description="Controle preciso de luminosidade com design moderno. As persianas rolô e double vision oferecem versatilidade única, alternando entre privacidade total e entrada de luz natural."
      products={PERSIANA_PRODUCTS["rolo-double-vision"]}
    />
  );
}
