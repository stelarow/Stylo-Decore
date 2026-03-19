"use client";

import { useState } from "react";
import { getWhatsAppUrl } from "@/lib/constants";
import { ALMOFADAS_FAQ_KEYS } from "@/lib/seo";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImageLightbox from "@/components/ui/ImageLightbox";

const KITS = [
  { name: "Kit Sala Clássico",  image: "/images/almofadas/decorativa-1.jpeg" },
  { name: "Kit Sala Moderno",   image: "/images/almofadas/decorativa-2.jpeg" },
  { name: "Kit Sala Boho",      image: "/images/almofadas/decorativa-3.jpeg" },
  { name: "Kit Sala Natural",   image: "/images/almofadas/decorativa-4.jpeg" },
];

const SOFA = [
  { name: "Combinação para Sofá", image: "/images/almofadas/kit-sala-boho.png" },
];

const CAMA = [
  { name: "Combinação para Cama", image: "/images/almofadas/combinacao-cama.png" },
];

function PhotoCard({ name, image, onClick }: { name: string; image: string; onClick: () => void }) {
  return (
    <button
      className="group relative overflow-hidden rounded-xl cursor-zoom-in w-full text-left"
      onClick={onClick}
      aria-label={`Ver imagem de ${name}`}
    >
      <div className="aspect-[3/4]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </button>
  );
}

export default function AlmofadasGalleryPage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div>
      {/* Hero */}
      <div className="relative w-full min-h-[50vh] md:min-h-[65vh] lg:min-h-[70vh] overflow-hidden">
        {/* TODO: replace with separate desktop/mobile images when real assets are delivered */}
        <img
          src="/images/almofadas/almofadas-hero.png"
          alt="Almofadas Personalizadas"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative flex h-full min-h-[50vh] md:min-h-[65vh] lg:min-h-[70vh] items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-12 md:pb-16 lg:pb-20">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              100% Personalizáveis
            </p>
            <h1 className="mb-3 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Almofadas Personalizadas
            </h1>
            <p className="max-w-xl text-lg text-white/80 lg:text-2xl">
              Combinações sob medida para cada ambiente da sua casa.
            </p>
          </div>
        </div>
      </div>

      {/* Intro */}
      <ScrollReveal animation="up">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-mahogany-light md:text-2xl">
            Almofadas são detalhes que transformam qualquer ambiente, adicionando cor, textura e personalidade. Criamos combinações exclusivas com tecidos selecionados e acabamentos artesanais, adaptados ao estilo de cada cliente.
          </p>
        </div>
      </ScrollReveal>

      {/* Kits de Almofadas */}
      <ScrollReveal animation="up" threshold={0.05}>
        <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
          <h2 className="mb-8 font-serif text-3xl font-bold text-mahogany md:text-4xl">
            Kits de Almofadas
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 md:gap-4">
            {KITS.map((item) => (
              <PhotoCard key={item.name} {...item} onClick={() => setLightbox({ src: item.image, alt: item.name })} />
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Combinação para Sofá */}
      <ScrollReveal animation="up" threshold={0.05}>
        <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
          <h2 className="mb-8 font-serif text-3xl font-bold text-mahogany md:text-4xl">
            Combinação para Sofá
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 md:gap-4">
            {SOFA.map((item) => (
              <PhotoCard key={item.name} {...item} onClick={() => setLightbox({ src: item.image, alt: item.name })} />
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Combinação para Cama */}
      <ScrollReveal animation="up" threshold={0.05}>
        <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
          <h2 className="mb-8 font-serif text-3xl font-bold text-mahogany md:text-4xl">
            Combinação para Cama
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 md:gap-4">
            {CAMA.map((item) => (
              <PhotoCard key={item.name} {...item} onClick={() => setLightbox({ src: item.image, alt: item.name })} />
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
              Monte a combinação perfeita para o seu ambiente
            </h3>
            <p className="mx-auto mb-8 max-w-md text-white/70">
              Nossa especialista ajuda a escolher tecidos, estampas e tamanhos ideais para compor seus ambientes com personalidade.
            </p>
            <a
              href={getWhatsAppUrl("Olá! Tenho interesse em almofadas personalizadas e gostaria de um orçamento.")}
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
          <FAQAccordion items={ALMOFADAS_FAQ_KEYS} />
        </div>
      </ScrollReveal>

      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}
