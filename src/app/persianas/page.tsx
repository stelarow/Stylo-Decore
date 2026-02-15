import type { Metadata } from "next";
import CategoryPage from "@/components/sections/CategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd, getFaqJsonLd, DEFAULT_FAQ } from "@/lib/seo";
import { PERSIANAS_SUBCATEGORIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Persianas sob Medida em Florianópolis | Stylo Decore",
  description:
    "Persianas Horizontais, Verticais, Rolô e Double Vision sob medida em Florianópolis e Região. Controle de luz com elegância e praticidade. Medição e instalação grátis.",
  keywords: ["persianas sob medida Florianópolis", "persiana horizontal", "persiana vertical", "persiana rolô", "persiana Double Vision Florianópolis"],
  alternates: { canonical: "/persianas" },
  openGraph: {
    title: "Persianas sob Medida em Florianópolis | Stylo Decore",
    description: "Persianas sob medida com controle de luz e elegância. Medição e instalação grátis em Florianópolis e Região.",
    url: "/persianas",
    images: [{ url: "/images/persianas-hero.jpeg", width: 1200, height: 630, alt: "Persianas sob Medida - Stylo Decore" }],
  },
};

export default function PersianasPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Persianas", href: "/persianas" },
      ])} />
      <JsonLd data={getFaqJsonLd(DEFAULT_FAQ)} />
      <CategoryPage
        title="Persianas"
        headline="Controle de Luz"
        description="Controle de luz com elegância e praticidade. Descubra nossas persianas sob medida para cada ambiente."
        intro="Persianas são a solução ideal para quem busca controle de luminosidade com design sofisticado. Oferecemos modelos em diversos materiais e acabamentos, sempre com medição e instalação profissional."
        subcategories={PERSIANAS_SUBCATEGORIES}
      />
    </>
  );
}
