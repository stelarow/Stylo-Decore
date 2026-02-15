import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd, getArticleJsonLd } from "@/lib/seo";

const POSTS: Record<
  string,
  { title: string; content: string; date: string; image: string }
> = {
  "como-escolher-tecido-cortina": {
    title: "Como Escolher o Tecido Ideal para sua Cortina",
    date: "2026-02-01",
    image: "/images/blog/tecidos-cortina.jpg",
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
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = POSTS[slug];

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="mb-4 font-serif text-3xl font-bold text-foreground">
          Post não encontrado
        </h1>
        <Link href="/blog" className="text-primary hover:underline">
          Voltar ao Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="pt-20">
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog" },
        { name: post.title, href: `/blog/${slug}` },
      ])} />
      <JsonLd data={getArticleJsonLd({
        title: post.title,
        description: post.content.slice(0, 160),
        date: post.date,
        image: post.image,
        slug,
      })} />
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-mahogany-light transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar ao Blog
        </Link>

        <div className="mb-8 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>

        <time className="text-sm text-muted">
          {new Date(post.date).toLocaleDateString("pt-BR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>

        <h1 className="mt-2 mb-8 font-serif text-3xl font-bold text-foreground md:text-4xl">
          {post.title}
        </h1>

        <div className="prose prose-lg max-w-none">
          {post.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="mt-8 mb-4 font-serif text-2xl font-bold text-foreground"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("---")) {
              return <hr key={i} className="my-8 border-tobacco-light" />;
            }
            if (paragraph.startsWith("- ")) {
              return (
                <ul key={i} className="my-4 list-disc space-y-2 pl-6">
                  {paragraph.split("\n").map((item, j) => (
                    <li key={j} className="text-mahogany-light">
                      {item.replace("- ", "")}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="mb-4 leading-relaxed text-mahogany-light">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-white p-8 text-center shadow-sm">
          <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
            Gostou deste artigo?
          </h3>
          <p className="mb-6 text-mahogany-light">
            Fale com nossa especialista e descubra as melhores soluções para o seu
            ambiente.
          </p>
          <a
            href={getWhatsAppUrl(
              `Olá! Li o artigo "${post.title}" no blog e gostaria de mais informações.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-foreground px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-mahogany-light"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </article>
  );
}
