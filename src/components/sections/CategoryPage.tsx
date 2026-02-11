import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";
import FAQAccordion from "@/components/ui/FAQAccordion";

interface SubcategoryItem {
  name: string;
  href: string;
  image: string;
  description: string;
}

interface CategoryPageProps {
  title: string;
  description: string;
  headline?: string;
  intro?: string;
  subcategories: SubcategoryItem[];
  faqItems?: { question: string; answer: string }[];
}

const DEFAULT_FAQ = [
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

export default function CategoryPage({
  title,
  description,
  headline,
  intro,
  subcategories,
  faqItems,
}: CategoryPageProps) {
  const faq = faqItems || DEFAULT_FAQ;

  return (
    <div>
      {/* Hero */}
      {subcategories[0] && (
        <div className="relative w-full min-h-[50vh] md:min-h-[65vh] lg:min-h-[70vh]">
          <img
            src={subcategories[0].image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="relative flex h-full min-h-[50vh] md:min-h-[65vh] lg:min-h-[70vh] items-end">
            <div className="mx-auto w-full max-w-7xl px-6 pb-12 md:pb-16 lg:pb-20">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                {headline || title}
              </p>
              <h1 className="mb-3 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="max-w-xl text-lg text-white/80 lg:text-2xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Texto introdutório */}
      {intro && (
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-mahogany-light md:text-2xl">
            {intro}
          </p>
        </div>
      )}

      {/* Grid masonry-style */}
      {subcategories.length > 0 && (
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card grande - primeiro item */}
            <Link
              href={subcategories[0].href}
              className="group relative overflow-hidden rounded-2xl sm:row-span-2"
            >
              {/* Spacer: dá altura no mobile via aspect-ratio, no desktop o grid row-span define */}
              <div className="aspect-[4/5] lg:aspect-auto" />
              <img
                src={subcategories[0].image}
                alt={subcategories[0].name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <span className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-background-dark">
                  Premium
                </span>
                <h3 className="mb-1 text-2xl font-bold text-white">
                  {subcategories[0].name}
                </h3>
                <p className="text-sm text-white/70">{subcategories[0].description}</p>
                <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-background-dark opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </Link>

            {/* Cards menores */}
            {subcategories.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[3/4]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="mb-1 text-xl font-bold text-white">
                    {item.name}
                  </h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                  <div className="mt-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-background-dark opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}

            {/* Card CTA - Consultoria */}
            <div className="flex flex-col items-center justify-center rounded-2xl bg-foreground p-8 text-center shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                <Check className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold text-white">
                Consultoria Personalizada
              </h3>
              <p className="mb-6 text-sm text-white/70">
                Nossa especialista vai até você para medição e consultoria gratuita.
              </p>
              <a
                href={getWhatsAppUrl(
                  `Olá! Gostaria de agendar uma consultoria para ${title.toLowerCase()}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="brushed-gold inline-flex items-center rounded-full px-6 py-2.5 text-sm font-semibold text-background-dark transition-all hover:shadow-lg active:scale-95"
              >
                Agendar Agora
              </a>
            </div>

          </div>
        </div>
      )}

      {/* FAQ Accordion */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <FAQAccordion items={faq} />
      </div>
    </div>
  );
}
