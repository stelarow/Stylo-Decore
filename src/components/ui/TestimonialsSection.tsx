"use client";
import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "As cortinas blackout do meu quarto transformaram completamente o ambiente. O atendimento foi incrível — me ajudaram a escolher o tecido e a cor ideais para o meu projeto.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Ana Clara Mendes",
    role: "Florianópolis, SC",
  },
  {
    text: "Instalei persianas em todo o escritório e o resultado ficou impecável. Profissionais pontuais, cuidadosos e o acabamento foi perfeito. Recomendo sem hesitar!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Ricardo Fontes",
    role: "Arquiteto",
  },
  {
    text: "O papel de parede da sala de jantar ficou ainda mais lindo do que eu imaginava. A equipe foi super atenciosa e me ajudou a visualizar o resultado antes de decidir.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Fernanda Costa",
    role: "São José, SC",
  },
  {
    text: "Os tapetes escolhidos para o meu apartamento deram um toque sofisticado que eu não esperava. Qualidade impecável, entrega no prazo e instalação cuidadosa.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "Marcos Oliveira",
    role: "Palhoça, SC",
  },
  {
    text: "Fiz um projeto completo com a Stylo Decore — cortinas, tapete e papel de parede. O resultado superou todas as expectativas. Cada detalhe foi pensado com muito cuidado.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Juliana Santos",
    role: "Florianópolis, SC",
  },
  {
    text: "As persianas double vision ficaram lindas na varanda. A consultora me orientou muito bem sobre qual modelo combinaria com a decoração e o estilo da nossa casa.",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    name: "Paulo Henrique",
    role: "Biguaçu, SC",
  },
  {
    text: "As cortinas do meu studio ficaram uma obra de arte! Atendimento totalmente personalizado, com atenção a cada detalhe. Com certeza voltarei para o próximo projeto.",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    name: "Camila Ramos",
    role: "Florianópolis, SC",
  },
  {
    text: "A reforma do escritório ficou incrível com o papel de parede recomendado pela equipe. O ambiente ganhou personalidade e todos os clientes comentam. Excelente trabalho!",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
    name: "Eduardo Lima",
    role: "São José, SC",
  },
  {
    text: "Escolhi persianas romanas para a sala e superou qualquer expectativa. O tecido e o caimento são de altíssima qualidade. O serviço de instalação foi rápido e sem sujeira.",
    image: "https://randomuser.me/api/portraits/women/39.jpg",
    name: "Beatriz Figueiredo",
    role: "Florianópolis, SC",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
      ))}
    </div>
  );
}

function TestimonialsColumn({
  className,
  testimonials: items,
  duration = 15,
}: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) {
  return (
    <div className={className} style={{ overflow: "hidden" }}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-5 pb-5"
      >
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {items.map(({ text, image, name, role }, i) => (
              <div
                key={i}
                className="rounded-2xl border border-tobacco-light bg-white p-6 shadow-sm max-w-xs w-full"
              >
                <Stars />
                <p className="text-sm leading-relaxed text-mahogany-light">
                  "{text}"
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground leading-tight">
                      {name}
                    </p>
                    <p className="text-xs text-muted leading-tight mt-0.5">
                      {role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Depoimentos
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-mahogany-light">
            Cada projeto é uma história de transformação. Veja o que quem já
            confiou na Stylo Decore tem a dizer.
          </p>
        </motion.div>

        {/* Columns */}
        <div className="flex justify-center gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[680px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={22}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={20}
          />
        </div>
      </div>
    </section>
  );
}
