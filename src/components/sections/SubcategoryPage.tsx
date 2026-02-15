"use client";

import { Check, MapPin, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

interface ProductItem {
  name: string;
  image: string;
  category: string;
}

interface SubcategoryPageProps {
  title: string;
  description: string;
  category: string;
  products: ProductItem[];
  headline?: string;
  heroImage?: string;
  collectionTag?: string;
  specs?: { title: string; description: string }[];
}

export default function SubcategoryPage({
  title,
  description,
  category,
  products,
  headline,
  heroImage,
  collectionTag,
  specs,
}: SubcategoryPageProps) {
  const defaultSpecs = [
    {
      title: "Confecção Artesanal",
      description:
        "Cada peça é costurada e finalizada por nossos artesãos experientes.",
    },
    {
      title: "Barra Dupla de 20cm",
      description:
        "Garante o caimento pesado e elegante típico de hotéis de luxo.",
    },
    {
      title: "Forro Blackout Opcional",
      description:
        "Tecnologia soft-touch que não compromete a estética da cortina.",
    },
  ];

  const finalSpecs = specs || defaultSpecs;
  const tag = collectionTag || category;

  return (
    <div>
      {/* Hero - Imagem principal grande */}
      <div className="relative w-full min-h-[70vh] md:min-h-[80vh]">
        <img
          src={
            heroImage ||
            products[0]?.image ||
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
          }
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* Glass panel overlay */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-xl lg:max-w-2xl">
          <div className="glass-panel rounded-2xl px-8 py-6 text-center">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-mahogany-light">
              {tag}
            </p>
            <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl leading-tight">
              {title}
            </h1>
            <p className="mt-1.5 text-xs text-mahogany-light">
              Design Autoral
            </p>
          </div>
        </div>
      </div>

      {/* Headline + Descrição */}
      <div className="mx-auto max-w-2xl lg:max-w-3xl px-6 py-12 md:py-16 text-center">
        {headline && (
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl mb-5 leading-snug">
            {headline}
          </h2>
        )}
        <p className="text-base leading-relaxed text-mahogany-light md:text-lg">
          {description}
        </p>
      </div>

      {/* Galeria de imagens empilhadas */}
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {products.map((product) => (
            <a
              key={product.name}
              href={getWhatsAppUrl(
                `Olá! Tenho interesse neste modelo de ${category}: ${product.name}. Gostaria de mais informações.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              {/* Overlay com info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-semibold text-white mb-2">{product.name}</p>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 text-xs font-semibold text-foreground backdrop-blur-sm transition-colors group-hover:bg-white">
                  Tenho interesse neste modelo
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CTA Dourado */}
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6 py-8">
        <div className="text-center">
          <a
            href={getWhatsAppUrl(
              `Olá! Estou interessado(a) em ${title} e gostaria de solicitar um projeto sob medida.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="brushed-gold inline-flex items-center rounded-full px-10 py-4 text-sm font-semibold uppercase tracking-wider transition-all hover:shadow-lg"
          >
            Solicite Seu Projeto Sob Medida
          </a>
        </div>
      </div>

      {/* Especificações Premium */}
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6 py-10">
        <div className="rounded-2xl border border-tobacco-light bg-white p-8">
          <h3 className="mb-6 font-serif text-xl font-bold text-foreground">
            Especificações Premium
          </h3>
          <ul className="space-y-5 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
            {finalSpecs.map((spec) => (
              <li key={spec.title} className="flex items-start gap-4">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {spec.title}
                  </p>
                  <p className="mt-0.5 text-sm text-mahogany-light">
                    {spec.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Showroom */}
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6 pb-16">
        <div className="rounded-2xl bg-foreground p-8 text-center text-white">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
            <MapPin className="h-7 w-7 text-primary" />
          </div>
          <h3 className="mb-2 font-serif text-xl font-bold">
            Visite Nosso Showroom
          </h3>
          <p className="mx-auto mb-6 max-w-sm text-sm text-white/70">
            Venha conhecer nossos produtos pessoalmente. Nosso showroom conta com
            amostras e ambientações para você visualizar o resultado final.
          </p>
          <a
            href={getWhatsAppUrl(
              `Olá! Gostaria de agendar uma visita ao showroom para conhecer ${title}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 inline-flex items-center rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider text-background-dark transition-colors hover:bg-primary-dark"
          >
            Agendar Visita
          </a>
          <div className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              20 anos de excelência
            </span>
          </div>
        </div>
      </div>

      {/* Rodapé da página */}
      <div className="border-t border-tobacco-light/40 py-6 text-center">
        <p className="text-xs tracking-wide text-mahogany-light">
          Design de Interiores &bull; Tecidos Nobres &bull; Acabamentos
        </p>
      </div>
    </div>
  );
}
