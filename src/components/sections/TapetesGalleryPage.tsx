"use client";

import { getWhatsAppUrl } from "@/lib/constants";
import { TAPETES_FAQ_KEYS } from "@/lib/seo";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const ESTILOS = [
  { name: "Moderno",      image: "/images/tapetes/tapete-01.jpg" },
  { name: "Clássico",     image: "/images/tapetes/tapete-04.jpg" },
  { name: "Minimalista",  image: "/images/tapetes/tapete-07.jpg" },
  { name: "Boho",         image: "/images/tapetes/tapete-10.jpg" },
  { name: "Natural",      image: "/images/tapetes/tapete-13.jpg" },
];

const FORMATOS = [
  { name: "Retangular",  image: "/images/tapetes/tapete-08.jpg" },
  { name: "Redondo",     image: "/images/tapetes/tapete-09.jpg" },
  { name: "Orgânico",    image: "/images/tapetes/carving-organic-card-1.png" },
  { name: "Passadeira",  image: "/images/tapetes/tapete-passadeira-hero-desktop.png" },
];

function PhotoCard({ name, image }: { name: string; image: string }) {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <div className="aspect-[3/4]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      {/* gradient for label readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
      {/* name label */}
      <span className="absolute bottom-3 left-3 rounded-full bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
        {name}
      </span>
    </div>
  );
}

export default function TapetesGalleryPage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative w-full min-h-[50vh] md:min-h-[65vh] lg:min-h-[70vh] overflow-hidden">
        <img
          src="/images/tapetes/tapete-sob-medida-hero-desktop.png"
          alt="Tapetes"
          className="absolute inset-0 hidden h-full w-full object-cover lg:block"
        />
        <img
          src="/images/tapetes/tapete-sob-medida-hero-mobile.png"
          alt="Tapetes"
          className="absolute inset-0 h-full w-full object-cover lg:hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative flex h-full min-h-[50vh] md:min-h-[65vh] lg:min-h-[70vh] items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-12 md:pb-16 lg:pb-20">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Conforto & Estilo
            </p>
            <h1 className="mb-3 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Tapetes
            </h1>
            <p className="max-w-xl text-lg text-white/80 lg:text-2xl">
              Conforto e estilo para seus ambientes. Descubra nossa coleção de tapetes.
            </p>
          </div>
        </div>
      </div>

      {/* Intro */}
      <ScrollReveal animation="up">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-mahogany-light md:text-2xl">
            Tapetes são peças fundamentais na composição de ambientes, trazendo conforto, delimitação de espaços e personalidade. Trabalhamos com formatos, tamanhos e materiais sob medida para cada projeto.
          </p>
        </div>
      </ScrollReveal>

      {/* Estilos */}
      <ScrollReveal animation="up" threshold={0.05}>
        <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
          <h2 className="mb-8 font-serif text-3xl font-bold text-mahogany md:text-4xl">
            Estilos
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 md:gap-4">
            {ESTILOS.map((item) => (
              <PhotoCard key={item.name} {...item} />
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Formatos */}
      <ScrollReveal animation="up" threshold={0.05}>
        <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
          <h2 className="mb-8 font-serif text-3xl font-bold text-mahogany md:text-4xl">
            Formatos
          </h2>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 md:gap-4">
            {FORMATOS.map((item) => (
              <PhotoCard key={item.name} {...item} />
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* CTA WhatsApp */}
      <ScrollReveal animation="up">
        <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
          <div className="rounded-2xl bg-foreground p-10 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Atendimento Personalizado
            </p>
            <h3 className="mb-4 font-serif text-2xl font-bold text-white md:text-3xl">
              Encontre o tapete ideal para o seu espaço
            </h3>
            <p className="mx-auto mb-8 max-w-md text-white/70">
              Nossa especialista ajuda a escolher o estilo, formato e medida perfeitos para o seu ambiente.
            </p>
            <a
              href={getWhatsAppUrl("Olá! Tenho interesse em tapetes e gostaria de um orçamento personalizado.")}
              target="_blank"
              rel="noopener noreferrer"
              className="brushed-gold inline-flex items-center rounded-full px-8 py-3 text-sm font-semibold text-background-dark transition-all hover:shadow-lg active:scale-95"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal animation="up">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <FAQAccordion items={TAPETES_FAQ_KEYS} />
        </div>
      </ScrollReveal>
    </div>
  );
}
