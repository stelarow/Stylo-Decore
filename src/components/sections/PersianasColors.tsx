"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const swatches = [
  {
    name: "Mel",
    subtitle: "Caramelo",
    style: {
      backgroundColor: "#C4893A",
      backgroundImage: `
        repeating-linear-gradient(
          168deg,
          rgba(160,100,20,0.18) 0px,
          rgba(210,150,60,0.08) 2px,
          transparent 2px,
          transparent 9px
        ),
        repeating-linear-gradient(
          172deg,
          rgba(100,55,10,0.12) 0px,
          transparent 1px,
          transparent 14px
        )
      `,
    },
  },
  {
    name: "Rosê",
    subtitle: "Amadeirado",
    style: {
      backgroundColor: "#C08078",
      backgroundImage: `
        repeating-linear-gradient(
          168deg,
          rgba(160,90,80,0.18) 0px,
          rgba(220,160,150,0.08) 2px,
          transparent 2px,
          transparent 9px
        ),
        repeating-linear-gradient(
          172deg,
          rgba(120,60,55,0.12) 0px,
          transparent 1px,
          transparent 14px
        )
      `,
    },
  },
  {
    name: "Wengê",
    subtitle: "Escuro",
    style: {
      backgroundColor: "#1C0A06",
      backgroundImage: `
        repeating-linear-gradient(
          168deg,
          rgba(80,20,10,0.5) 0px,
          rgba(60,15,8,0.2) 2px,
          transparent 2px,
          transparent 9px
        ),
        repeating-linear-gradient(
          172deg,
          rgba(40,10,5,0.35) 0px,
          transparent 1px,
          transparent 14px
        )
      `,
    },
  },
  {
    name: "Alumínio",
    subtitle: "Metálico",
    style: {
      background:
        "linear-gradient(160deg, #c8c8c8 0%, #e2e2e2 25%, #b8b8b8 50%, #d4d4d4 75%, #c0c0c0 100%)",
    },
  },
  {
    name: "Pérola",
    subtitle: "Cinza Claro",
    style: {
      background:
        "linear-gradient(160deg, #e0e0e0 0%, #ebebeb 40%, #d8d8d8 100%)",
    },
  },
  {
    name: "Branco",
    subtitle: "Off-White",
    style: {
      background:
        "linear-gradient(160deg, #f5f5f5 0%, #fafafa 40%, #efefef 100%)",
    },
  },
];

export default function PersianasColors() {
  return (
    <ScrollReveal animation="up">
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-bold text-mahogany md:text-4xl">
            Acabamentos e Cores disponíveis
          </h2>
          <p className="mt-3 text-base text-mahogany/60 md:text-lg">
            Conheça nossa ampla gama de cores, estampas e acabamentos.
          </p>
        </div>

        {/* Swatches card */}
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
            {swatches.map((swatch) => (
              <div key={swatch.name} className="group flex flex-col items-center gap-3">
                <div
                  className="relative w-full overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                  style={{ aspectRatio: "1 / 1" }}
                >
                  <div
                    className="absolute inset-0"
                    style={swatch.style as React.CSSProperties}
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-mahogany">{swatch.name}</p>
                  <p className="text-xs text-mahogany/50">{swatch.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
