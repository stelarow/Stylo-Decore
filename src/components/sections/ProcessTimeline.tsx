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
    title: "Consulta Inicial",
    content: (
      <MediaBlock media={<VideoCard src="/videos/processo-01.mp4" />}>
        <p className="text-foreground font-medium text-sm md:text-base leading-relaxed">
          Nosso time vai até o seu espaço para entender cada detalhe.
        </p>
        <p className="text-tobacco text-sm leading-relaxed">
          Medimos, escutamos e anotamos tudo o que você imagina — estilo,
          funcionalidade e orçamento. É o ponto de partida para um projeto
          que é só seu.
        </p>
        <Bullets
          items={[
            "Visita ao seu espaço",
            "Levantamento de medidas",
            "Entendimento do seu estilo",
          ]}
        />
      </MediaBlock>
    ),
  },
  {
    title: "Projeto 3D Personalizado",
    content: (
      <MediaBlock media={<VideoCard src="/videos/processo-02.mp4" />}>
        <p className="text-foreground font-medium text-sm md:text-base leading-relaxed">
          Você visualiza o resultado antes de qualquer peça ser fabricada.
        </p>
        <p className="text-tobacco text-sm leading-relaxed">
          Desenvolvemos o projeto 3D completo com todos os detalhes.
          Aprovar ou ajustar fica fácil — sem surpresas no final.
        </p>
        <Bullets
          items={[
            "Renderização 3D completa",
            "Escolha de materiais e cores",
            "Aprovação antes da produção",
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
    title: "Embalagem e Logística",
    content: (
      <MediaBlock media={<VideoCard src="/videos/processo-04.mp4" />}>
        <p className="text-foreground font-medium text-sm md:text-base leading-relaxed">
          Cada peça protegida e identificada para chegar perfeita até você.
        </p>
        <p className="text-tobacco text-sm leading-relaxed">
          Após aprovação final, os móveis são embalados individualmente com
          proteção especial. Cada volume é etiquetado por projeto e ambiente,
          garantindo uma montagem organizada e sem perdas.
        </p>
        <Bullets
          items={[
            "Embalagem individual por peça",
            "Identificação por ambiente",
            "Transporte com veículo próprio",
          ]}
        />
      </MediaBlock>
    ),
  },
  {
    title: "Pronto para Instalar",
    content: (
      <MediaBlock
        media={
          <ImageCard
            src="/images/processo-entrega.jpg"
            alt="Móveis embalados prontos para entrega"
          />
        }
      >
        <p className="text-foreground font-medium text-sm md:text-base leading-relaxed">
          Instalação completa pela nossa equipe especializada.
        </p>
        <p className="text-tobacco text-sm leading-relaxed">
          Tudo nivelado, ajustado e alinhado com precisão milimétrica no
          seu espaço. Você só precisa se apaixonar pelo resultado.
        </p>
        <Bullets
          items={[
            "Entrega no prazo combinado",
            "Montagem por equipe própria",
            "Acabamento final perfeito",
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
            alt="Móveis finalizados no showroom"
          />
        }
      >
        <p className="text-foreground font-medium text-sm md:text-base leading-relaxed">
          Do chão de fábrica ao ambiente dos seus sonhos.
        </p>
        <p className="text-tobacco text-sm leading-relaxed">
          Cada peça entregue reflete horas de dedicação, tecnologia e
          cuidado artesanal. Móveis que combinam design, funcionalidade e
          durabilidade — feitos exclusivamente para você.
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
