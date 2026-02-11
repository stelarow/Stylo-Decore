import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Dicas da Especialista | Stylo Decore",
  description:
    "Dicas de decoração, tendências e inspirações para cortinas, persianas, papéis de parede e tapetes. Blog da Stylo Decore.",
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
  },
  {
    slug: "motorizacao-persianas-vale-a-pena",
    title: "Motorização de Persianas: Vale a Pena?",
    excerpt:
      "Entenda as vantagens da motorização, como funciona a integração com assistentes virtuais e quando investir em automação para suas persianas.",
    date: "2026-01-20",
    image: "/images/blog/persianas-motorizacao.jpg",
    tags: ["Persianas", "Motorização", "Automação"],
  },
  {
    slug: "tendencias-decoracao-2026",
    title: "Tendências de Decoração 2026: O que Esperar",
    excerpt:
      "Cores terrosas, materiais naturais e texturas táteis dominam as tendências. Veja como aplicar essas novidades na sua casa com cortinas, persianas e papéis de parede.",
    date: "2026-01-10",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop",
    tags: ["Tendências", "Decoração", "2026"],
  },
];

export default function BlogPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Blog
          </p>
          <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Dicas da Especialista
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-mahogany-light">
            Inspirações, tendências e dicas práticas para transformar seus
            ambientes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-tobacco-light px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mb-2 text-lg font-bold text-foreground group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="mb-3 text-sm text-mahogany-light">{post.excerpt}</p>
                <time className="text-xs text-muted">
                  {new Date(post.date).toLocaleDateString("pt-BR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
