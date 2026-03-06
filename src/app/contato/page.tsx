import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { ContactClient } from "@/components/sections/ContactClient";

export const metadata: Metadata = {
  title: "Contato | Stylo Decore - Florianópolis e Região",
  description:
    "Entre em contato com a Stylo Decore. Solicite um orçamento gratuito para cortinas, persianas, papéis de parede e tapetes em Florianópolis e Região.",
  alternates: { canonical: "/contato" },
  openGraph: {
    title: "Contato | Stylo Decore - Florianópolis e Região",
    description: "Solicite um orçamento gratuito para cortinas, persianas, papéis de parede e tapetes em Florianópolis.",
    url: "/contato",
  },
};

export default function ContatoPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Contato", href: "/contato" },
        ])}
      />
      <ContactClient />
    </>
  );
}
