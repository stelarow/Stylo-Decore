import type { Metadata } from "next";
import TapetesGalleryPage from "@/components/sections/TapetesGalleryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd, getFaqJsonLd, TAPETES_FAQ } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tapetes sob Medida em Florianópolis | Stylo Decore",
  description:
    "Tapetes sob medida, decorativos e passadeiras em Florianópolis e Região. Conforto e estilo para seus ambientes. Atendimento consultivo e personalizado.",
  keywords: ["tapetes sob medida Florianópolis", "tapete decorativo", "passadeira sob medida", "tapete personalizado Florianópolis"],
  alternates: { canonical: "/tapetes" },
  openGraph: {
    title: "Tapetes sob Medida em Florianópolis | Stylo Decore",
    description: "Tapetes sob medida, decorativos e passadeiras. Conforto e estilo em Florianópolis e Região.",
    url: "/tapetes",
    images: [{ url: "/images/tapetes/tapete-sob-medida-hero-desktop.png", width: 1200, height: 630, alt: "Tapetes sob Medida - Stylo Decore" }],
  },
};

export default function TapetesPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Tapetes", href: "/tapetes" },
      ])} />
      <JsonLd data={getFaqJsonLd(TAPETES_FAQ)} />
      <TapetesGalleryPage />
    </>
  );
}
