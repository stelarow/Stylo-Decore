import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortinas Blackout & Acústicas em Florianópolis",
  description: "Cortinas blackout e acústicas sob medida em Florianópolis e Região. Bloqueio total de luz e isolamento acústico para conforto máximo.",
  alternates: { canonical: "/cortinas/blackout-acusticas" },
  openGraph: {
    title: "Cortinas Blackout & Acústicas | Stylo Decore",
    description: "Cortinas blackout e acústicas sob medida. Bloqueio de luz e isolamento acústico em Florianópolis.",
    url: "/cortinas/blackout-acusticas",
  },
};

export default function BlackoutAcusticasPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Blackout & Acústicas", href: "/cortinas/blackout-acusticas" },
      ])} />
      <SubcategoryPage
        title="Blackout & Acústicas"
        category="Cortinas"
        description="Bloqueio total de luz e isolamento acústico para conforto máximo. Ideais para quartos, home theaters e ambientes que exigem privacidade e silêncio."
        products={CORTINA_PRODUCTS["blackout-acusticas"]}
      />
    </>
  );
}
