import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import TrilhoMotorizadoClient from "./TrilhoMotorizadoClient";

export const metadata: Metadata = {
  title: "Trilho Motorizado para Cortinas em Florianópolis | Stylo Decore",
  description:
    "Trilho motorizado para cortinas sob medida em Florianópolis. Automação com controle remoto, app ou integração com Alexa e Google Home. Praticidade e modernidade.",
  alternates: { canonical: "/cortinas/suportes-e-ferragens/trilho-motorizado" },
  openGraph: {
    title: "Trilho Motorizado para Cortinas | Stylo Decore",
    description: "Cortinas motorizadas com controle remoto e smart home em Florianópolis.",
    url: "/cortinas/suportes-e-ferragens/trilho-motorizado",
  },
};

export default function TrilhoMotorizadoPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Suportes e Ferragens", href: "/cortinas/suportes-e-ferragens" },
        { name: "Trilho Motorizado", href: "/cortinas/suportes-e-ferragens/trilho-motorizado" },
      ])} />
      <TrilhoMotorizadoClient />
    </>
  );
}
