"use client";

import SubcategoryPage from "@/components/sections/SubcategoryPage";
import { useLanguage } from "@/context/LanguageContext";
import { PAPEL_PRODUCTS } from "@/lib/data";

const INFANTIL_DATA = {
  pt: {
    description:
      "Estampas e padrões encantadores para transformar o quarto dos pequenos em um espaço mágico e cheio de personalidade.",
    specs: [
      {
        title: "Impressão Digital HD",
        description:
          "Cores vibrantes e nítidas que preservam a alegria das estampas por muitos anos.",
      },
      {
        title: "Material Lavável",
        description:
          "Superfície de fácil limpeza — ideal para o dia a dia agitado do quarto infantil.",
      },
      {
        title: "Aplicação Profissional",
        description:
          "Instalação especializada com cola específica para garantia de durabilidade.",
      },
    ],
  },
  en: {
    description:
      "Enchanting prints and patterns to transform your little one's room into a magical, personality-filled space.",
    specs: [
      {
        title: "HD Digital Printing",
        description:
          "Vibrant, sharp colors that preserve the joy and vividness of the prints for years.",
      },
      {
        title: "Washable Material",
        description:
          "Easy-to-clean surface — perfect for the busy daily life of a children's room.",
      },
      {
        title: "Professional Application",
        description:
          "Specialized installation with specific adhesive for guaranteed durability.",
      },
    ],
  },
  es: {
    description:
      "Estampas y patrones encantadores para transformar el cuarto de los pequeños en un espacio mágico lleno de personalidad.",
    specs: [
      {
        title: "Impresión Digital HD",
        description:
          "Colores vibrantes y nítidos que preservan la alegría de las estampas durante años.",
      },
      {
        title: "Material Lavable",
        description:
          "Superficie de fácil limpieza — ideal para el día a día del cuarto infantil.",
      },
      {
        title: "Aplicación Profesional",
        description:
          "Instalación especializada con adhesivo específico para garantía de durabilidad.",
      },
    ],
  },
};

export default function InfantilContent() {
  const { language } = useLanguage();
  const data = INFANTIL_DATA[language] ?? INFANTIL_DATA.pt;

  return (
    <SubcategoryPage
      title="Infantil"
      category="Papéis de Parede"
      description={data.description}
      specs={data.specs}
      products={PAPEL_PRODUCTS.infantil}
      desktopHeroImage="/images/papel/infantil-hero-desktop.jpg"
    />
  );
}
