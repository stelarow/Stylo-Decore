"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getWhatsAppUrl } from "@/lib/constants";

const SECTIONS = [
  {
    id: "sala",
    label: "Sala",
    images: [
      {
        src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&h=700&fit=crop",
        alt: "Sala de estar planejada com estante embutida",
        wide: false,
      },
      {
        src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&h=700&fit=crop",
        alt: "Sala com painel de TV sob medida",
        wide: false,
      },
      {
        src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&h=700&fit=crop",
        alt: "Sala moderna com mobiliário planejado",
        wide: false,
      },
    ],
  },
  {
    id: "quarto",
    label: "Quarto",
    images: [
      {
        src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900&h=700&fit=crop",
        alt: "Quarto com guarda-roupa planejado",
        wide: false,
      },
      {
        src: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=900&h=700&fit=crop",
        alt: "Quarto master com cabeceira e criado-mudo sob medida",
        wide: false,
      },
      {
        src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&h=700&fit=crop",
        alt: "Quarto com painel de cama e iluminação planejada",
        wide: false,
      },
    ],
  },
  {
    id: "cozinha",
    label: "Cozinha",
    images: [
      {
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&h=700&fit=crop",
        alt: "Cozinha planejada moderna",
        wide: false,
      },
      {
        src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=900&h=700&fit=crop",
        alt: "Armários de cozinha sob medida",
        wide: false,
      },
      {
        src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=900&h=700&fit=crop",
        alt: "Cozinha integrada com sala de jantar",
        wide: false,
      },
    ],
  },
  {
    id: "home-office",
    label: "Home Office",
    images: [
      {
        src: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900&h=700&fit=crop",
        alt: "Home office planejado com bancada ampla",
        wide: false,
      },
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=700&fit=crop",
        alt: "Escritório em casa com estantes embutidas",
        wide: false,
      },
      {
        src: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=900&h=700&fit=crop",
        alt: "Escritório planejado com parede de livros",
        wide: false,
      },
    ],
  },
  {
    id: "closet",
    label: "Closet",
    images: [
      {
        src: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=900&h=700&fit=crop",
        alt: "Closet planejado com iluminação",
        wide: false,
      },
      {
        src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&h=700&fit=crop",
        alt: "Closet completo com cabideiro e gavetas",
        wide: false,
      },
      {
        src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=900&h=700&fit=crop",
        alt: "Closet feminino com espelho e penteadeira",
        wide: false,
      },
    ],
  },
  {
    id: "casas-com-criancas",
    label: "Casas com Crianças",
    images: [
      {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=700&fit=crop",
        alt: "Quarto infantil planejado e funcional",
        wide: false,
      },
      {
        src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=900&h=700&fit=crop",
        alt: "Estante e mesa de estudo para crianças",
        wide: false,
      },
      {
        src: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=900&h=700&fit=crop",
        alt: "Quarto de bebê planejado",
        wide: false,
      },
    ],
  },
];

export default function InspireSe() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="relative w-full min-h-[45vh] md:min-h-[55vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&h=900&fit=crop"
          alt="Ambientes inspiradores"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
        <div className="relative flex h-full min-h-[45vh] md:min-h-[55vh] items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-12 md:pb-16">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Móveis Sob Medida
            </p>
            <h1 className="mb-3 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Inspire-se
            </h1>
            <p className="max-w-xl text-lg text-white/80 lg:text-xl">
              Ambientes projetados com design e personalidade — cada detalhe pensado para a sua casa.
            </p>
          </div>
        </div>
      </div>

      {/* Anchor nav */}
      <div className="sticky top-20 z-30 bg-background/95 backdrop-blur-md border-b border-tobacco-light shadow-sm">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="shrink-0 rounded-full px-4 py-1.5 text-sm font-medium text-mahogany-light transition-colors hover:bg-tobacco-light hover:text-foreground"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Sections */}
      <div className="mx-auto max-w-7xl px-6 py-16 space-y-24">
        {SECTIONS.map((section, sectionIdx) => (
          <section key={section.id} id={section.id}>
            <ScrollReveal animation="up">
              {/* Section header */}
              <div className="mb-8 flex items-center gap-4">
                <span className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  {section.label}
                </span>
                <div className="flex-1 h-px bg-tobacco-light" />
              </div>

              {/* Gallery grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[280px] md:auto-rows-[320px]">
                {section.images.map((img, i) => (
                  <div
                    key={i}
                    className={`relative overflow-hidden rounded-lg group ${
                      img.wide ? "col-span-2" : "col-span-1"
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading={sectionIdx === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </section>
        ))}
      </div>

      {/* CTA */}
      <ScrollReveal animation="up">
        <div className="mx-auto max-w-7xl px-6 pb-20">
          <div className="rounded-2xl bg-foreground px-8 py-12 md:px-16 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Pronto para transformar?
            </p>
            <h2 className="mb-4 font-serif text-2xl font-bold text-white md:text-3xl">
              Seu ambiente, do jeito que você imaginou
            </h2>
            <p className="mb-8 text-white/70 max-w-lg mx-auto">
              Fale com nossa equipe e receba um projeto personalizado para cada espaço da sua casa.
            </p>
            <a
              href={getWhatsAppUrl("Olá! Vi a galeria de inspiração e quero um projeto de móveis sob medida.")}
              target="_blank"
              rel="noopener noreferrer"
              className="brushed-gold inline-flex items-center rounded-full px-8 py-3 text-sm font-semibold text-background-dark transition-all hover:shadow-lg active:scale-95"
            >
              Quero meu projeto
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
