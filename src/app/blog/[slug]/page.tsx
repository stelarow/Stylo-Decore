import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd, getArticleJsonLd } from "@/lib/seo";

const POSTS: Record<
  string,
  {
    title: string;
    content: string;
    date: string;
    image: string;
    tags: string[];
    readingTime: number;
  }
> = {
  "como-escolher-tecido-cortina": {
    title: "Como Escolher o Tecido Ideal para sua Cortina",
    date: "2026-02-01",
    image: "/images/blog/tecidos-cortina.jpg",
    tags: ["Cortinas", "Tecidos", "Dicas"],
    readingTime: 4,
    content: `A escolha do tecido é um dos passos mais importantes na hora de definir a cortina perfeita para o seu ambiente. Cada tecido tem características únicas que influenciam diretamente na luminosidade, privacidade e estética do espaço.

## Voil

O voil é um tecido leve e translúcido, perfeito para quem deseja manter a luminosidade natural do ambiente. Ideal para salas de estar e ambientes sociais onde a luz natural é bem-vinda.

## Linho

O linho traz um visual sofisticado e natural. Sua textura orgânica combina perfeitamente com ambientes que buscam elegância sem ostentação. Disponível em versões mais ou menos translúcidas.

## Blackout

Para quem precisa de escurecimento total, o blackout é a escolha certa. Ideal para quartos e home theaters, bloqueia até 99% da luz externa, além de proporcionar isolamento térmico e acústico.

## Seda

A seda é sinônimo de luxo e requinte. Com caimento impecável e brilho natural, é perfeita para ambientes nobres como salas de jantar e suítes master.

---

Não sabe qual tecido escolher? Nossa especialista pode ajudar você a encontrar a opção perfeita para o seu ambiente.`,
  },
  "motorizacao-persianas-vale-a-pena": {
    title: "Motorização de Persianas: Vale a Pena?",
    date: "2026-01-20",
    image: "/images/blog/persianas-motorizacao.jpg",
    tags: ["Persianas", "Motorização", "Automação"],
    readingTime: 3,
    content: `A motorização de persianas é uma tendência que vem crescendo no mercado de decoração. Mas será que vale a pena investir nessa tecnologia? Vamos analisar.

## Vantagens da Motorização

- **Praticidade**: Controle suas persianas com um toque no controle remoto ou pelo celular
- **Segurança**: Simule presença em casa programando horários de abertura e fechamento
- **Acessibilidade**: Ideal para janelas altas ou de difícil acesso
- **Integração**: Compatível com Alexa, Google Home e outros assistentes virtuais

## Quando Investir

A motorização é especialmente recomendada para:
- Janelas grandes ou em locais altos
- Pessoas com mobilidade reduzida
- Quem busca automação residencial completa
- Ambientes comerciais que precisam de controle centralizado

## Custo-Benefício

O investimento inicial é maior, mas a durabilidade do motor e a economia no dia a dia compensam. Além disso, valoriza o imóvel.

---

Quer saber mais sobre motorização? Fale com nossa especialista para um orçamento personalizado.`,
  },
  "tendencias-decoracao-2026": {
    title: "Tendências de Decoração 2026: O que Esperar",
    date: "2026-01-10",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=600&fit=crop",
    tags: ["Tendências", "Decoração", "2026"],
    readingTime: 5,
    content: `2026 chega com tendências que valorizam o conforto, a sustentabilidade e as texturas naturais. Veja como aplicar essas novidades na sua casa.

## Cores Terrosas

Tons de terracota, areia e verde oliva dominam a paleta do ano. Essas cores trazem aconchego e conexão com a natureza, perfeitas para cortinas e papéis de parede.

## Materiais Naturais

Fibras naturais como linho, algodão orgânico e juta ganham destaque. Cortinas de linho e tecidos orgânicos são protagonistas nessa tendência.

## Texturas Táteis

Papéis de parede 3D e tecidos com textura criam ambientes sensoriais que convidam ao toque.

## Minimalismo Aconchegante

Menos é mais, mas com conforto. Ambientes com poucos elementos, porém cada peça escolhida com cuidado. Persianas limpas e cortinas em tons neutros completam o visual.

---

Quer aplicar essas tendências na sua casa? Nossa especialista pode criar um projeto sob medida para você.`,
  },
};

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) {
    return { title: "Post não encontrado | Stylo Decore" };
  }
  return {
    title: `${post.title} | Blog Stylo Decore`,
    description: post.content.slice(0, 160),
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.content.slice(0, 160),
      url: `/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
  };
}

// Renderiza **negrito** inline
function parseBold(text: string): React.ReactNode[] {
  const parts = text.split(/\*\*([^*]+)\*\*/);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-[#584738]">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function renderContent(content: string) {
  return content.split("\n\n").map((paragraph, i) => {
    if (paragraph.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="mb-4 mt-10 font-serif text-2xl font-bold text-[#584738] md:text-3xl"
        >
          {paragraph.replace("## ", "")}
        </h2>
      );
    }

    if (paragraph === "---") {
      return (
        <hr key={i} className="my-10 border-[#B59E7D]/30" />
      );
    }

    if (paragraph.startsWith("- ")) {
      const items = paragraph.split("\n");
      return (
        <ul key={i} className="my-6 space-y-3">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span className="leading-relaxed text-[#584738]/80">
                {parseBold(item.replace(/^- /, ""))}
              </span>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={i} className="mb-5 text-base leading-8 text-[#584738]/80">
        {parseBold(paragraph)}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = POSTS[slug];

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="mb-4 font-serif text-3xl font-bold text-[#584738]">
          Post não encontrado
        </h1>
        <Link href="/blog" className="text-primary hover:underline">
          Voltar ao Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = Object.entries(POSTS)
    .filter(([s]) => s !== slug)
    .slice(0, 2)
    .map(([s, p]) => ({ slug: s, ...p }));

  return (
    <article className="min-h-screen bg-[#F1EADA]">
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${slug}` },
        ])}
      />
      <JsonLd
        data={getArticleJsonLd({
          title: post.title,
          description: post.content.slice(0, 160),
          date: post.date,
          image: post.image,
          slug,
        })}
      />

      {/* Hero com imagem + overlay + título */}
      <div className="relative pt-20">
        <div className="relative h-[420px] overflow-hidden md:h-[520px]">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#221e10]/85 via-[#221e10]/35 to-transparent" />

          {/* Título sobre a imagem */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="mx-auto max-w-3xl">
              <div className="mb-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#221e10]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="font-serif text-2xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-white/65">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(post.date).toLocaleDateString("pt-BR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readingTime} min de leitura
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="mx-auto max-w-3xl px-6 py-10">

        {/* Navegação + Autor */}
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#584738]/60 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao Blog
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#584738] text-xs font-bold text-white">
              N
            </div>
            <div>
              <p className="text-sm font-semibold text-[#584738]">Nilza</p>
              <p className="text-xs text-[#584738]/50">Especialista em Design</p>
            </div>
          </div>
        </div>

        {/* Artigo */}
        <div>{renderContent(post.content)}</div>

        {/* CTA */}
        <div className="mt-14 bg-[#584738] px-8 py-10 text-center">
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Consultoria gratuita
          </p>
          <h3 className="mb-3 font-serif text-2xl font-bold text-white">
            Gostou deste artigo?
          </h3>
          <p className="mx-auto mb-8 max-w-sm text-sm leading-relaxed text-white/65">
            Fale com Nilza diretamente pelo WhatsApp e receba orientação
            personalizada para o seu ambiente.
          </p>
          <a
            href={getWhatsAppUrl(
              `Olá! Li o artigo "${post.title}" no blog e gostaria de mais informações.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="brushed-gold inline-flex items-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-wide text-[#221e10]"
          >
            Falar com Nilza
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Posts relacionados */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-primary">
              Continue lendo
            </p>
            <h3 className="mb-8 font-serif text-2xl font-bold text-[#584738]">
              Outros Artigos
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group overflow-hidden bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-2 flex flex-wrap gap-1.5">
                      {rel.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#B59E7D]/15 px-2.5 py-0.5 text-xs text-[#584738]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="font-serif text-base font-bold leading-snug text-[#584738] transition-colors group-hover:text-primary">
                      {rel.title}
                    </h4>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-[#584738]/50">
                      <Clock className="h-3 w-3" />
                      {rel.readingTime} min de leitura
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
