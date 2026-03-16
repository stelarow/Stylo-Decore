import type { Metadata } from "next";
import InspireSe from "./InspireSe";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Inspire-se | Móveis Sob Medida em Florianópolis | Stylo Decore",
  description:
    "Galeria de ambientes projetados sob medida: sala, quarto, cozinha, home office, closet e casas com crianças. Inspire-se para o seu próximo projeto.",
  alternates: { canonical: "/moveis-sob-medida/inspire-se" },
  openGraph: {
    title: "Inspire-se | Móveis Sob Medida | Stylo Decore",
    description: "Ambientes projetados com design e personalidade. Inspire-se para transformar a sua casa.",
    url: "/moveis-sob-medida/inspire-se",
  },
};

export default function InspireSePage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Móveis Sob Medida", href: "/moveis-sob-medida" },
          { name: "Inspire-se", href: "/moveis-sob-medida/inspire-se" },
        ])}
      />
      <InspireSe />
    </>
  );
}
