import type { Metadata } from "next";
import CategoryPage from "@/components/sections/CategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd, getFaqJsonLd, CORTINAS_FAQ, CORTINAS_FAQ_KEYS } from "@/lib/seo";
import { CORTINAS_SUPORTES_FERRAGENS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Suportes e Ferragens para Cortinas em Florianópolis | Stylo Decore",
  description:
    "Varão, trilho suíço e trilho motorizado para cortinas sob medida em Florianópolis. Ferragens de qualidade que garantem instalação perfeita e durabilidade.",
  keywords: ["varão cortina", "trilho suíço cortina", "trilho motorizado cortina", "ferragens cortina Florianópolis"],
  alternates: { canonical: "/cortinas/suportes-e-ferragens" },
  openGraph: {
    title: "Suportes e Ferragens para Cortinas | Stylo Decore",
    description: "Varão, trilho suíço e trilho motorizado. Cortinas sob medida em Florianópolis.",
    url: "/cortinas/suportes-e-ferragens",
  },
};

export default function SuportesEFerragensPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Suportes e Ferragens", href: "/cortinas/suportes-e-ferragens" },
      ])} />
      <JsonLd data={getFaqJsonLd(CORTINAS_FAQ)} />
      <CategoryPage
        title="Suportes e Ferragens"
        titleKey="/cortinas/suportes-e-ferragens"
        headline="A Base de Tudo"
        description="O suporte certo garante instalação perfeita, durabilidade e funcionalidade à sua cortina."
        intro="Varão, trilho suíço ou trilho motorizado — cada sistema tem suas vantagens e se adapta a diferentes tipos de cortina, ambiente e estilo de vida."
        subcategories={CORTINAS_SUPORTES_FERRAGENS}
        faqItems={CORTINAS_FAQ_KEYS}
      />
    </>
  );
}
