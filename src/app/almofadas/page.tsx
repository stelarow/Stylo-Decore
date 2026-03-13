import type { Metadata } from "next";
import AlmofadasGalleryPage from "@/components/sections/AlmofadasGalleryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd, getFaqJsonLd, ALMOFADAS_FAQ } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Almofadas Personalizadas em Florianópolis | Stylo Decore",
  description:
    "Almofadas 100% personalizáveis em Florianópolis e Região. Kits para sofá e cama, combinações sob medida com tecidos nobres e acabamento artesanal.",
  keywords: ["almofadas personalizadas Florianópolis", "kits de almofadas", "almofadas sob medida", "almofadas decorativas Florianópolis"],
  alternates: { canonical: "/almofadas" },
  openGraph: {
    title: "Almofadas Personalizadas em Florianópolis | Stylo Decore",
    description: "Almofadas 100% personalizáveis. Kits para sofá e cama com tecidos nobres em Florianópolis e Região.",
    url: "/almofadas",
    images: [{ url: "/images/almofadas/almofadas-hero.png", width: 1200, height: 630, alt: "Almofadas Personalizadas - Stylo Decore" }],
  },
};

export default function AlmofadasPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Almofadas", href: "/almofadas" },
      ])} />
      <JsonLd data={getFaqJsonLd(ALMOFADAS_FAQ)} />
      <AlmofadasGalleryPage />
    </>
  );
}
