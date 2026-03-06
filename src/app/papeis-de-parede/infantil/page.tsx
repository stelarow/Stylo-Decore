import type { Metadata } from "next";
import InfantilContent from "./InfantilContent";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Papel de Parede Infantil em Florianópolis",
  description: "Coleção Infantil - Estampas e padrões encantadores para o quarto dos pequenos. Aplicação profissional em Florianópolis e Região.",
  alternates: { canonical: "/papeis-de-parede/infantil" },
  openGraph: {
    title: "Papel de Parede Infantil | Stylo Decore",
    description: "Coleção Infantil - Estampas encantadoras para o quarto dos pequenos em Florianópolis.",
    url: "/papeis-de-parede/infantil",
  },
};

export default function InfantilPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Papéis de Parede", href: "/papeis-de-parede" },
        { name: "Infantil", href: "/papeis-de-parede/infantil" },
      ])} />
      <InfantilContent />
    </>
  );
}
