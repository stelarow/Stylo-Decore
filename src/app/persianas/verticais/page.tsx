import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import { PERSIANA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Persianas Verticais sob Medida | Stylo Decore",
  description: "Persianas verticais sob medida. Ideais para grandes janelas e portas de vidro.",
};

export default function PersianasVerticaisPage() {
  return (
    <SubcategoryPage
      title="Persianas Verticais"
      category="Persianas"
      heroImage="/images/persianas/persiana-13.jpg"
      description="Ideal para grandes janelas e portas de vidro. As persianas verticais combinam funcionalidade e elegância, permitindo controle de luminosidade com design clean."
      products={PERSIANA_PRODUCTS.verticais}
    />
  );
}
