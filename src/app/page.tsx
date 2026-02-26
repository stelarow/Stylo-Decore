import Link from "next/link";
import { ArrowRight, Sparkles, Ruler, Award, Wrench, Clock, Check, Smartphone } from "lucide-react";
import { CATEGORIES, getWhatsAppUrl } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/data";
import ContactSection from "@/components/sections/ContactSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] items-center justify-center">
        {/* Mobile: vídeo de fundo */}
        <video
          className="absolute inset-0 h-full w-full object-cover md:hidden"
          src="/videos/hero-mobile.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Desktop: vídeo de fundo */}
        <video
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
          src="/videos/hero-desktop.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary drop-shadow-md">
            Stylo Decore
          </p>
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] md:text-5xl lg:text-6xl xl:text-7xl">
            20 anos de experiência transformando ambientes
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)] md:text-xl xl:text-2xl">
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
              className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-background-dark transition-all hover:bg-background"
            >
              Ver Coleções
            </a>
          </div>
        </div>
      </section>

      {/* Nossas Coleções */}
      <section id="colecoes" className="relative -mt-10 rounded-t-[2.5rem] bg-background pt-20 md:pt-28">
        <ScrollReveal animation="up">
          <div className="mx-auto max-w-7xl px-6 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Nossas Coleções
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-primary" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {CATEGORIES.map((cat, i) => (
            <ScrollReveal key={cat.href} animation="fade" delay={i * 80}>
              <Link
                href={cat.href}
                className="group relative block overflow-hidden"
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
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Como Atendemos */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <ScrollReveal animation="up">
            <div className="mb-14 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-primary">
                Formas de Atendimento
              </p>
              <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
                Escolha como começar
              </h2>
              <div className="mx-auto mt-4 h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-foreground/60">
                Duas opções pensadas para se adaptar ao seu momento — da praticidade
                do digital ao atendimento exclusivo em casa.
              </p>
            </div>
          </ScrollReveal>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2 md:items-stretch">

            {/* Card 1 — Orçamento Online */}
            <ScrollReveal animation="left" className="flex flex-col">
              <div className="group flex h-full flex-col rounded-2xl border border-[#B59E7D]/25 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                {/* Top row */}
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <span className="rounded-full border border-[#B59E7D]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground/40">
                    Online · Gratuito
                  </span>
                </div>

                <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">
                  Orçamento Online Gratuito
                </h3>
                <p className="mb-7 text-sm leading-relaxed text-foreground/60">
                  Envie fotos e medidas do seu ambiente pelo WhatsApp e receba uma
                  estimativa rápida, sem sair de casa e sem compromisso.
                </p>

                {/* Steps */}
                <ol className="mb-8 flex-1 space-y-4">
                  {[
                    "Tire fotos do ambiente e anote as medidas",
                    "Envie pelo WhatsApp com suas preferências de estilo",
                    "Receba uma estimativa detalhada rapidamente",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-foreground/65">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>

                <a
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de solicitar um orçamento online. Vou enviar as fotos e medidas do ambiente.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-foreground/20 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  Quero uma estimativa agora
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </a>
              </div>
            </ScrollReveal>

            {/* Card 2 — Consultoria Premium */}
            <ScrollReveal animation="right" delay={100} className="flex flex-col">
              <div className="group relative flex h-full flex-col rounded-2xl border-2 border-primary/40 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Linha dourada no topo */}
                <div className="absolute left-0 right-0 top-0 h-[3px] rounded-t-2xl bg-primary" />

                {/* Badge centralizado acima */}
                <div className="absolute -top-[18px] left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-primary px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#221e10] shadow-lg">
                    <Sparkles className="h-3 w-3" />
                    Mais Recomendado
                  </span>
                </div>

                {/* Top row */}
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <span className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary/70">
                    Premium · Presencial
                  </span>
                </div>

                <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">
                  Consultoria Presencial Premium
                </h3>
                <p className="mb-7 text-sm leading-relaxed text-foreground/60">
                  Nossa especialista vai até você com mostruário exclusivo,
                  orienta na escolha de cores e tecidos, e realiza a medição com
                  precisão milimétrica.
                </p>

                {/* Features */}
                <ul className="mb-8 flex-1 space-y-3">
                  {[
                    "Visita técnica no seu ambiente",
                    "Mostruário exclusivo levado até você",
                    "Orientação profissional de cores e tecidos",
                    "Medição precisa garantida",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-foreground/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de agendar uma Consultoria Presencial Premium da Stylo Decore.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brushed-gold inline-flex h-12 w-full items-center justify-center gap-2 rounded-full text-sm font-semibold text-[#221e10] transition-all hover:opacity-90 hover:shadow-lg active:scale-95"
                >
                  Agendar Consultoria Profissional
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* CTA Questionário */}
      <section className="bg-background py-12 md:py-16">
        <ScrollReveal animation="up">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-primary lg:text-sm">
              Atendimento Personalizado
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Qual é o seu projeto?
            </h2>
            <div className="mx-auto mt-4 h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-foreground/60">
              Responda algumas perguntas rápidas e montamos uma mensagem personalizada para o WhatsApp.
            </p>
            <div className="mt-7">
              <Link
                href="/questionario"
                className="brushed-gold inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-[#221e10] transition-all hover:opacity-90 hover:shadow-lg active:scale-95"
              >
                Começar questionário
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Diferenciais */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
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
          ].map((item, i) => (
            <ScrollReveal key={item.title} animation="up" delay={i * 110}>
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-mahogany-light">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Projeto Personalizado */}
      <section className="mx-auto max-w-7xl px-6 pb-10 md:pb-14">
        <ScrollReveal animation="scale">
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
        </ScrollReveal>
      </section>

      {/* Blog Preview */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
        {/* Cabeçalho editorial */}
        <ScrollReveal animation="up">
          <div className="mb-10 flex items-end justify-between border-b border-[#B59E7D]/30 pb-6">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-primary">
                Blog
              </p>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Dicas & Inspirações
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden items-center gap-2 text-sm font-semibold text-foreground/60 transition-colors hover:text-primary md:flex"
            >
              Ver todos os artigos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Grid de cards — 3 colunas iguais */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <ScrollReveal key={post.slug} animation="up" delay={i * 100}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col"
              >
                {/* Imagem com número decorativo */}
                <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Número decorativo */}
                  <span className="absolute left-4 top-3 font-serif text-5xl font-bold leading-none text-white/20 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Tag */}
                  <span className="absolute bottom-4 left-4 bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#221e10]">
                    {post.tags[0]}
                  </span>
                </div>

                {/* Conteúdo */}
                <div className="flex flex-1 flex-col pt-5">
                  <h3 className="mb-2 font-serif text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-foreground/60 line-clamp-2">
                    {post.excerpt}
                  </p>
                  {/* Footer do card */}
                  <div className="flex items-center justify-between border-t border-[#B59E7D]/20 pt-4">
                    <span className="flex items-center gap-1.5 text-xs text-foreground/40">
                      <Clock className="h-3 w-3" />
                      {post.readingTime} min de leitura
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                      Ler artigo <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile CTA */}
        <ScrollReveal animation="fade" delay={300}>
          <div className="mt-10 flex justify-center md:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/60"
            >
              Ver todos os artigos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Entre em Contato */}
      <ContactSection />
    </>
  );
}
