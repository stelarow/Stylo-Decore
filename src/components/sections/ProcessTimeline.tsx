"use client";

import { Timeline } from "@/components/ui/timeline";

function VideoCard({ src }: { src: string }) {
  return (
    <div className="w-full rounded-xl overflow-hidden bg-tobacco-light" style={{ aspectRatio: "9/16", maxHeight: "420px" }}>
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full rounded-xl overflow-hidden bg-tobacco-light" style={{ aspectRatio: "9/16", maxHeight: "420px" }}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}

function MediaBlock({
  media,
  children,
}: {
  media: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 items-start">
      <div className="w-full sm:w-[38%] shrink-0">{media}</div>
      <div className="sm:w-[62%] space-y-3 pt-1">{children}</div>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 pt-1">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-xs text-tobacco">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

const steps = [
  {
    title: "Corte com Precisão",
    content: (
      <MediaBlock media={<VideoCard src="/videos/processo-01.mp4" />}>
        <p className="text-foreground font-medium text-sm md:text-base leading-relaxed">
          Cada painel cortado com exatidão milimétrica.
        </p>
        <p className="text-tobacco text-sm leading-relaxed">
          Utilizamos serras de alta precisão para garantir que cada peça
          saia com as dimensões exatas do projeto. Sem folgas, sem
          retrabalho.
        </p>
        <Bullets
          items={[
            "Serra de precisão industrial",
            "Cortes conforme projeto aprovado",
            "Tolerância milimétrica em cada peça",
          ]}
        />
      </MediaBlock>
    ),
  },
  {
    title: "Modelagem e Acabamento das Bordas",
    content: (
      <MediaBlock media={<VideoCard src="/videos/processo-02.mp4" />}>
        <p className="text-foreground font-medium text-sm md:text-base leading-relaxed">
          Bordas trabalhadas à mão para um toque impecável.
        </p>
        <p className="text-tobacco text-sm leading-relaxed">
          Após o corte, cada peça tem suas bordas modeladas e lixadas
          manualmente. É nesse detalhe que se sente a diferença entre
          um móvel comum e um móvel de alto padrão.
        </p>
        <Bullets
          items={[
            "Modelagem manual das bordas",
            "Lixamento progressivo",
            "Acabamento liso ao toque",
          ]}
        />
      </MediaBlock>
    ),
  },
  {
    title: "Pintura e Acabamento",
    content: (
      <MediaBlock media={<VideoCard src="/videos/processo-03.mp4" />}>
        <p className="text-foreground font-medium text-sm md:text-base leading-relaxed">
          Cada peça recebe camadas de laca com aplicação controlada.
        </p>
        <p className="text-tobacco text-sm leading-relaxed">
          A aplicação de laca garante superfície lisa, resistente e com
          cor uniforme. Um processo que exige precisão e ambiente controlado
          para um acabamento impecável.
        </p>
        <Bullets
          items={[
            "Aplicação de laca em cabine fechada",
            "Secagem e cura controladas",
            "Acabamento liso e uniforme",
          ]}
        />
      </MediaBlock>
    ),
  },
  {
    title: "Corte de Precisão",
    content: (
      <MediaBlock
        media={
          <ImageCard
            src="/images/processo-cnc.jpg"
            alt="Máquina CNC cortando painel"
          />
        }
      >
        <p className="text-foreground font-medium text-sm md:text-base leading-relaxed">
          Equipamentos de última geração para cortes com precisão absoluta.
        </p>
        <p className="text-tobacco text-sm leading-relaxed">
          Nossa fábrica conta com jato d&apos;água CNC de alta potência para
          cortes em painéis, pedras e materiais nobres. Tolerância milimétrica
          garantida em cada peça produzida.
        </p>
        <Bullets
          items={[
            "Jato d'água CNC DWJ4020",
            "Corte em pedra, MDF e vidro",
            "Tolerância de ±0,1 mm",
          ]}
        />
      </MediaBlock>
    ),
  },
  {
    title: "Polimento e Acabamento em Mármore",
    content: (
      <MediaBlock media={<VideoCard src="/videos/processo-04.mp4" />}>
        <p className="text-foreground font-medium text-sm md:text-base leading-relaxed">
          Superfície impecável, do bruto ao espelho.
        </p>
        <p className="text-tobacco text-sm leading-relaxed">
          Cada peça em mármore passa por etapas progressivas de polimento
          até atingir o brilho e a textura ideais. Um acabamento artesanal
          que realça as veias naturais da pedra.
        </p>
        <Bullets
          items={[
            "Polimento progressivo em múltiplas etapas",
            "Realce das veias naturais do mármore",
            "Acabamento brilhante ou acetinado",
          ]}
        />
      </MediaBlock>
    ),
  },
  {
    title: "Estoque e Expedição",
    content: (
      <MediaBlock
        media={
          <ImageCard
            src="/images/processo-entrega.jpg"
            alt="Estoque com produtos prontos para entrega"
          />
        }
      >
        <p className="text-foreground font-medium text-sm md:text-base leading-relaxed">
          Produtos finalizados, organizados e prontos para sair.
        </p>
        <p className="text-tobacco text-sm leading-relaxed">
          Cada móvel concluído vai direto para o estoque, separado por
          projeto e aguardando a data de entrega combinada. Tudo
          controlado para que nada se perca no caminho.
        </p>
        <Bullets
          items={[
            "Separação por projeto e ambiente",
            "Controle de estoque por entrega",
            "Transporte com veículo próprio",
          ]}
        />
      </MediaBlock>
    ),
  },
  {
    title: "Resultado Final",
    content: (
      <MediaBlock
        media={
          <ImageCard
            src="/images/processo-montagem.jpg"
            alt="Produto final instalado"
          />
        }
      >
        <p className="text-foreground font-medium text-sm md:text-base leading-relaxed">
          Do chão de fábrica ao ambiente dos seus sonhos.
        </p>
        <p className="text-tobacco text-sm leading-relaxed">
          O produto final instalado no seu espaço — exatamente como
          projetado. Cada detalhe entregue com o cuidado e a qualidade
          que você merece.
        </p>
        <Bullets
          items={[
            "Design exclusivo por projeto",
            "Acabamento de alto padrão",
            "Garantia de satisfação",
          ]}
        />
      </MediaBlock>
    ),
  },
];

export default function ProcessTimeline() {
  return (
    <section className="bg-background py-16 md:py-24 px-4 md:px-6 lg:px-10">
      <div className="max-w-2xl mx-auto mb-10 md:mb-14">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-2">
          Como Funciona
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3 leading-snug">
          Do projeto à realidade
        </h2>
        <p className="text-tobacco text-base md:text-lg leading-relaxed">
          Cada detalhe pensado para você. Acompanhe as etapas do processo de
          criação dos seus móveis sob medida.
        </p>
      </div>

      <Timeline data={steps} />
    </section>
  );
}
