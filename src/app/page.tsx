import Link from "next/link";
import { ArrowRight, Sparkles, Ruler, Award, Wrench } from "lucide-react";
import { CATEGORIES, getWhatsAppUrl } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] items-center justify-center">
        {/* Mobile: imagem atual */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
          style={{
            backgroundImage: "url('/images/hero-home.jpg')",
          }}
        />
        {/* Desktop: nova imagem */}
        <div
          className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
          style={{
            backgroundImage: "url('/images/hero-home-desktop.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Stylo Decore
          </p>
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
            20 anos de experiência transformando ambientes
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80 md:text-xl xl:text-2xl">
            Sofisticação e conforto em cada detalhe da sua casa.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={getWhatsAppUrl("Olá! Gostaria de solicitar um orçamento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="brushed-gold inline-flex items-center rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-background-dark transition-opacity hover:opacity-90"
            >
              Solicitar Orçamento
            </a>
            <a
              href="#colecoes"
              className="inline-flex items-center rounded-full border-2 border-white/70 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Ver Coleções
            </a>
          </div>
        </div>
      </section>

      {/* Nossas Coleções */}
      <section id="colecoes" className="relative -mt-10 rounded-t-[2.5rem] bg-background pt-20 md:pt-28">
        <div className="mx-auto max-w-7xl px-6 mb-12">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Nossas Coleções
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-1">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group relative overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105${"imageDesktop" in cat ? " md:hidden" : ""}`}
                  style={{ objectPosition: cat.imagePosition }}
                />
                {"imageDesktop" in cat && (
                  <img
                    src={cat.imageDesktop}
                    alt={cat.name}
                    className="absolute inset-0 hidden h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 md:block"
                    style={{ objectPosition: cat.imagePosition }}
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-2xl font-bold uppercase tracking-wide text-white md:text-3xl lg:text-4xl">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              icon: Ruler,
              title: "Medição Gratuita",
              text: "Nossos consultores vão até você sem custo para garantir medidas perfeitas.",
            },
            {
              icon: Award,
              title: "20 Anos de Experiência",
              text: "Duas décadas transformando ambientes com qualidade e sofisticação.",
            },
            {
              icon: Wrench,
              title: "Instalação Inclusa",
              text: "Instalação profissional inclusa em todos os projetos sob medida.",
            },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-sm text-mahogany-light">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projeto Personalizado */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
        <div className="rounded-2xl bg-white p-10 text-center shadow-sm md:p-16 lg:flex lg:items-center lg:gap-12 lg:p-20 lg:text-left">
          <div className="lg:flex-1">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 lg:mx-0">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-4 font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              Projeto Personalizado
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-mahogany-light lg:mx-0 lg:mb-0 lg:max-w-none">
              Nossos especialistas vão até você. Realizamos medição, consultoria de
              design e instalação completa para garantir o resultado perfeito.
            </p>
          </div>
          <div className="lg:shrink-0">
            <a
              href={getWhatsAppUrl("Olá! Gostaria de solicitar um orçamento personalizado.")}
              target="_blank"
              rel="noopener noreferrer"
              className="brushed-gold inline-flex items-center rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-background-dark transition-all hover:shadow-lg active:scale-95 lg:px-10 lg:py-4 lg:text-base"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
