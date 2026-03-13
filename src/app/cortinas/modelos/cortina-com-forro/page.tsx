import type { Metadata } from "next";
import SubcategoryPage from "@/components/sections/SubcategoryPage";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { CORTINA_PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cortina com Forro sob Medida em Florianópolis | Stylo Decore",
  description:
    "Cortina com forro sob medida em Florianópolis. Maior privacidade, conforto térmico e proteção do tecido principal — ideal para quartos e ambientes que exigem mais privacidade.",
  alternates: { canonical: "/cortinas/modelos/cortina-com-forro" },
  openGraph: {
    title: "Cortina com Forro sob Medida | Stylo Decore",
    description: "Cortina com forro para mais privacidade e conforto sob medida em Florianópolis.",
    url: "/cortinas/modelos/cortina-com-forro",
  },
};

export default function CortinaComForroPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Cortinas", href: "/cortinas" },
        { name: "Modelos", href: "/cortinas/modelos" },
        { name: "Cortina com Forro", href: "/cortinas/modelos/cortina-com-forro" },
      ])} />
      <SubcategoryPage
        title="Cortina com Forro"
        category="Cortinas"
        titleKey="/cortinas/modelos/cortina-com-forro"
        categoryKey="/cortinas"
        description="A cortina com forro tem uma camada adicional na face interna que amplia a privacidade, melhora o isolamento térmico e protege o tecido principal da exposição solar. Uma solução mais completa para quartos e salas."
        heroImage="/images/cortinas/cortina-ilhos-hero-desktop.png"
        products={CORTINA_PRODUCTS["cortina-com-forro"]}
        videoSrc="/videos/processo-cortinas.mp4"
        videoTitle="video.processo.title"
        videoCaption="video.processo.caption"
        videoFeatures={[
          { icon: "shield", label: "video.processo.feat.medicao" },
          { icon: "layers", label: "video.processo.feat.pontos" },
          { icon: "shirt", label: "video.processo.feat.caimento" },
        ]}
        specs={[
          { title: "Privacidade ampliada", description: "O forro interno bloqueia a visibilidade do exterior sem perder o charme do tecido principal." },
          { title: "Conforto térmico", description: "A camada adicional reduz a transferência de calor, tornando o ambiente mais agradável." },
          { title: "Proteção do tecido", description: "Protege o tecido principal do desbotamento causado pela exposição direta ao sol." },
        ]}
      />
    </>
  );
}
