import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina Prega Americana sob Medida em Florianópolis",
  description: "Cortina Prega Americana sob medida com pregas elegantes em Florianópolis e Região. Estilo clássico atemporal.",
  alternates: { canonical: "/cortinas/prega-americana" },
  openGraph: {
    title: "Cortina Prega Americana sob Medida | Stylo Decore",
    description: "Cortina Prega Americana sob medida. Estilo clássico e atemporal em Florianópolis.",
    url: "/cortinas/prega-americana",
  },
};

export default function PregaAmericanaPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Prega Americana", href: "/cortinas/prega-americana" },
      ])} />
      <SubcategoryPage
        title="Prega Americana"
        category="Cortinas"
        description="Estilo clássico com pregas elegantes e bem definidas. A cortina com prega americana é perfeita para quem busca requinte e tradição na decoração."
        heroImage="/images/cortinas/cortina-prega-hero-desktop.png"
        products={CORTINA_PRODUCTS["prega-americana"]}
        desktopImageClass="hidden lg:block w-full aspect-[3/4] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        mobileImageClass="lg:hidden w-full aspect-[3/4] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </>
  );
}
