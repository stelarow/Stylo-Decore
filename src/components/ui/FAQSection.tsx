"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Vocês atendem em quais cidades?",
    answer:
      "Atendemos Florianópolis e toda a Grande Florianópolis, incluindo São José, Palhoça, Biguaçu, Governador Celso Ramos e regiões próximas. Entre em contato para confirmar disponibilidade na sua localidade.",
  },
  {
    question: "Como funciona a medição gratuita?",
    answer:
      "Após o contato inicial, agendamos uma visita técnica no seu endereço. Nossa consultora vai até você com o mostruário completo, realiza a medição com precisão milimétrica e apresenta as melhores opções para o seu projeto — tudo sem custo adicional.",
  },
  {
    question: "Qual é o prazo de entrega e instalação?",
    answer:
      "O prazo médio é de 15 a 25 dias úteis após a aprovação do orçamento e confirmação do pedido. Projetos maiores ou produtos especiais podem ter prazos diferentes, sempre informados com antecedência.",
  },
  {
    question: "A instalação está inclusa no preço?",
    answer:
      "Sim! A instalação profissional está inclusa em todos os projetos sob medida. Nossa equipe cuida de todo o processo, do início ao acabamento final, sem nenhum custo extra para você.",
  },
  {
    question: "Posso solicitar um orçamento sem compromisso?",
    answer:
      "Com certeza. Tanto o orçamento online (via WhatsApp) quanto a consultoria presencial são sem compromisso. Você recebe todas as informações e decide com calma, no seu tempo.",
  },
  {
    question: "Vocês trabalham com produtos totalmente sob medida?",
    answer:
      "Sim, todos os nossos produtos são confeccionados sob medida para o seu ambiente específico. Isso garante caimento perfeito, acabamento impecável e um resultado muito mais sofisticado do que produtos prontos.",
  },
  {
    question: "Como escolho o tecido certo para cada cômodo?",
    answer:
      "Nossa consultora orienta você em cada escolha levando em conta a entrada de luz desejada, a privacidade necessária, a decoração existente e o estilo que você quer alcançar. Levamos amostras físicas para que você veja as opções no ambiente real antes de decidir.",
  },
  {
    question: "As cortinas blackout realmente bloqueiam toda a luz?",
    answer:
      "As cortinas blackout de alta qualidade bloqueiam entre 95% e 100% da luminosidade, dependendo do tecido e da forma de instalação. Para bloqueio total, recomendamos a instalação com sobreposição nas laterais — detalhe que nossa equipe já considera no projeto.",
  },
  {
    question: "Qual a diferença entre persiana e cortina?",
    answer:
      "As persianas são estruturas rígidas (lâminas, tecido enrolável, etc.) que oferecem controle preciso da luz e são ideais para ambientes funcionais como escritórios e cozinhas. As cortinas são em tecido, conferem leveza e sofisticação, sendo muito versáteis em salas e quartos. O ideal para cada espaço depende do estilo e das necessidades — nossa consultora te ajuda nessa escolha.",
  },
  {
    question: "Como faço a manutenção das cortinas e persianas?",
    answer:
      "Cortinas de tecido geralmente podem ser lavadas à máquina em ciclo delicado ou à mão — orientamos conforme o material. Persianas devem ser limpas com pano úmido ou aspirador, sem uso de produtos abrasivos. Ao receber seu produto, fornecemos todas as instruções de cuidado específicas para o material escolhido.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Dúvidas Frequentes
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Perguntas Frequentes
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-foreground/55">
            Reunimos as dúvidas mais comuns dos nossos clientes. Não encontrou o
            que precisa?{" "}
            <a
              href="https://wa.me/5548999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline underline-offset-2 transition-opacity hover:opacity-75"
            >
              Fale conosco pelo WhatsApp
            </a>
            .
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="divide-y divide-[#B59E7D]/25">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.04,
                }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="group flex w-full items-start gap-5 py-6 text-left transition-colors hover:text-primary"
                  aria-expanded={isOpen}
                >
                  {/* Number */}
                  <span className="mt-0.5 shrink-0 font-serif text-sm font-bold text-primary/50 tabular-nums transition-colors group-hover:text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span className="flex-1 text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary md:text-[17px]">
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <span
                    className={`mt-0.5 shrink-0 flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-primary bg-primary text-[#221e10]"
                        : "border-[#B59E7D]/40 text-foreground/40 group-hover:border-primary group-hover:text-primary"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-3 w-3" />
                    ) : (
                      <Plus className="h-3 w-3" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="pb-6 pl-11 pr-8 text-sm leading-relaxed text-foreground/65 md:text-[15px]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
