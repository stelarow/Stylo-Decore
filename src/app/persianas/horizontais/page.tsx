import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import { PERSIANA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Persianas Horizontais sob Medida | Stylo Decore",
  description: "Persianas horizontais sob medida em alumínio ou madeira. Versatilidade e durabilidade.",
};

export default function PersianasHorizontaisPage() {
  return (
    <SubcategoryPage
      title="Persianas Horizontais"
      category="Persianas"
      heroImage="/images/persianas/persiana-02.jpg"
      description="Versatilidade e durabilidade em alumínio ou madeira. As persianas horizontais oferecem controle preciso de luz e privacidade, adaptando-se a qualquer estilo de decoração."
      products={PERSIANA_PRODUCTS.horizontais}
    />
  );
}
