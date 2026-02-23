import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog - Dicas de Decoração em Florianópolis",
  description:
    "Dicas de decoração, tendências e inspirações para cortinas, persianas, papéis de parede e tapetes em Florianópolis. Blog da Stylo Decore.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog - Dicas da Especialista | Stylo Decore",
    description:
      "Dicas de decoração, tendências e inspirações para transformar seus ambientes em Florianópolis.",
    url: "/blog",
  },
};

const BLOG_POSTS = [
  {
    slug: "como-escolher-tecido-cortina",
    title: "Como Escolher o Tecido Ideal para sua Cortina",
    excerpt:
      "Linho, voil, blackout ou seda? Descubra qual tecido é ideal para cada ambiente da sua casa e como cada um influencia a iluminação e privacidade.",
    date: "2026-02-01",
    image: "/images/blog/tecidos-cortina.jpg",
    tags: ["Cortinas", "Tecidos", "Dicas"],
    readingTime: 4,
  },
  {
    slug: "motorizacao-persianas-vale-a-pena",
    title: "Motorização de Persianas: Vale a Pena?",
    excerpt:
      "Entenda as vantagens da motorização, como funciona a integração com assistentes virtuais e quando investir em automação para suas persianas.",
    date: "2026-01-20",
    image: "/images/blog/persianas-motorizacao.jpg",
    tags: ["Persianas", "Motorização", "Automação"],
    readingTime: 3,
  },
  {
    slug: "tendencias-decoracao-2026",
    title: "Tendências de Decoração 2026: O que Esperar",
    excerpt:
      "Cores terrosas, materiais naturais e texturas táteis dominam as tendências. Veja como aplicar essas novidades na sua casa.",
    date: "2026-01-10",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&h=600&fit=crop",
    tags: ["Tendências", "Decoração", "2026"],
    readingTime: 5,
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <div className="min-h-screen bg-[#F1EADA] pt-20">
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ])}
      />

      {/* Header Editorial */}
      <section className="border-b border-[#B59E7D]/20 py-16 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Blog
          </p>
          <h1 className="mb-5 font-serif text-5xl font-bold text-[#584738] md:text-6xl lg:text-7xl">
            Dicas da Especialista
          </h1>
          <div className="mx-auto mb-6 h-px w-16 bg-primary" />
          <p className="mx-auto max-w-xl text-base leading-relaxed text-[#584738]/70">
            Inspirações, tendências e orientações práticas para transformar seus
            ambientes com personalidade e elegância.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Post em destaque — card horizontal */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group mb-12 grid overflow-hidden bg-white shadow-sm transition-all hover:shadow-lg md:grid-cols-5"
        >
          {/* Imagem — 3 colunas */}
          <div className="relative overflow-hidden aspect-[4/3] md:col-span-3 md:aspect-auto">
            <img
              src={featured.image}
              alt={featured.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute left-4 top-4 bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#221e10]">
              Destaque
            </span>
          </div>

          {/* Conteúdo — 2 colunas */}
          <div className="flex flex-col justify-between p-8 md:col-span-2">
            <div>
              <div className="mb-4 flex flex-wrap gap-3">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold uppercase tracking-wider text-[#B59E7D]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mb-4 font-serif text-2xl font-bold leading-snug text-[#584738] transition-colors group-hover:text-primary md:text-3xl">
                {featured.title}
              </h2>
              <p className="text-sm leading-relaxed text-[#584738]/70">
                {featured.excerpt}
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-[#B59E7D]/20 pt-6">
              <div className="flex items-center gap-3 text-xs text-[#584738]/50">
                <time>{formatDate(featured.date)}</time>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {featured.readingTime} min
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-sm font-bold text-primary transition-transform group-hover:translate-x-1">
                Ler artigo
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </Link>

        {/* Grid dos demais posts */}
        <div className="grid gap-8 sm:grid-cols-2">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#B59E7D]/15 px-3 py-1 text-xs font-medium text-[#584738]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mb-2 font-serif text-xl font-bold leading-snug text-[#584738] transition-colors group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="mb-5 text-sm leading-relaxed text-[#584738]/70">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-[#B59E7D]/15 pt-4">
                  <div className="flex items-center gap-2 text-xs text-[#584738]/50">
                    <time>{formatDate(post.date)}</time>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readingTime} min
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-xs font-bold text-primary opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100">
                    Ler <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA consultoria */}
        <div className="mt-16 bg-[#584738] px-8 py-12 text-center md:px-16">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Consultoria gratuita
          </p>
          <h3 className="mb-4 font-serif text-2xl font-bold text-white md:text-3xl">
            Tem dúvidas sobre decoração?
          </h3>
          <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-white/65">
            Nilza tem mais de 20 anos de experiência em design de interiores.
            Converse diretamente com ela pelo WhatsApp.
          </p>
          <a
            href="https://wa.me/5548999999999?text=Olá! Vi o blog da Stylo Decore e gostaria de tirar uma dúvida."
            target="_blank"
            rel="noopener noreferrer"
            className="brushed-gold inline-flex items-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-wide text-[#221e10]"
          >
            Falar com Nilza
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
