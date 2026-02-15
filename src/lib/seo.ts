import { CONTACT } from "./constants";

export const SITE_URL = "https://stylodecore.com.br";
export const SITE_NAME = "Stylo Decore";

export const DEFAULT_FAQ = [
  {
    question: "Como funciona a medição?",
    answer:
      "Nossa especialista vai até o seu endereço para realizar a medição técnica sem custo. Garantimos precisão milimétrica para que o resultado fique perfeito.",
  },
  {
    question: "Qual o prazo de entrega e instalação?",
    answer:
      "O prazo varia conforme o produto e a complexidade do projeto. Em geral, de 15 a 30 dias úteis após a aprovação do orçamento. A instalação é inclusa.",
  },
  {
    question: "Vocês atendem toda Florianópolis e região?",
    answer:
      "Sim! Atendemos Florianópolis, São José, Palhoça, Biguaçu e toda a Grande Florianópolis.",
  },
  {
    question: "Posso solicitar amostras de tecido ou material?",
    answer:
      "Claro! Durante a consultoria, levamos amostras para você visualizar cores, texturas e caimento diretamente no seu ambiente.",
  },
];

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+55${CONTACT.whatsapp}`,
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
    sameAs: [],
  };
}

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/images/logo.png`,
    telephone: `+55${CONTACT.whatsapp}`,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressLocality: CONTACT.city,
      addressRegion: CONTACT.state,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -27.5954,
      longitude: -48.548,
    },
    openingHours: "Mo-Fr 09:00-18:00, Sa 09:00-13:00",
    priceRange: "$$",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -27.5954,
        longitude: -48.548,
      },
      geoRadius: "50000",
    },
    description:
      "Showroom digital de cortinas, persianas, papéis de parede e tapetes sob medida. Mais de 20 anos de experiência em Florianópolis e Região.",
  };
}

export function getBreadcrumbJsonLd(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function getFaqJsonLd(
  faqItems: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getArticleJsonLd(article: {
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: article.image.startsWith("http")
      ? article.image
      : `${SITE_URL}${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: "Nilza",
      jobTitle: "Especialista em Design de Interiores",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${article.slug}`,
    },
  };
}
