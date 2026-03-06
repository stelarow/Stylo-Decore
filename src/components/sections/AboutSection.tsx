"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      className="py-24 px-4"
      style={{ background: "#F1EADA" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal animation="up">
          <div className="text-center mb-12">
            {/* Ornamento superior */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="block h-px w-14 bg-[#f1bf27]" />
              <span
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f1bf27]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                {t("about.eyebrow")}
              </span>
              <span className="block h-px w-14 bg-[#f1bf27]" />
            </div>

            <h2
              className="text-4xl md:text-5xl text-[#584738] mb-5"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
              }}
            >
              {t("about.title")}
            </h2>

            <p
              className="text-[#584738] text-base leading-relaxed max-w-lg mx-auto"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              {t("about.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        {/* Divisor ornamental */}
        <ScrollReveal animation="fade" delay={100}>
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className="block h-px w-20 bg-[#B59E7D]/40" />
            <span className="text-[#f1bf27] text-sm">◆</span>
            <span className="block h-px w-20 bg-[#B59E7D]/40" />
          </div>
        </ScrollReveal>

        {/* Cards das designers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-24">
          {/* Nilza */}
          <ScrollReveal animation="left" delay={150}>
            <div className="flex flex-col items-center text-center gap-6">
              {/* Anel dourado em gradiente */}
              <div
                className="w-48 h-48 rounded-full p-[3px] shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #f1bf27 0%, #B59E7D 50%, #f1bf27 100%)",
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-[#F1EADA]">
                  <Image
                    src="/images/sobre/nilza.jpeg"
                    alt="Nilza Duarte Bueno"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover object-top grayscale"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <h3
                  className="text-2xl text-[#584738]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Nilza Duarte Bueno
                </h3>
                <p
                  className="text-[#f1bf27] text-[10px] font-bold uppercase tracking-[0.25em]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {t("about.nilza.role")}
                </p>
                <p
                  className="text-[#584738] text-sm leading-relaxed max-w-xs mx-auto pt-1"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {t("about.nilza.bio")}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Clarice */}
          <ScrollReveal animation="right" delay={250}>
            <div className="flex flex-col items-center text-center gap-6">
              {/* Anel dourado em gradiente */}
              <div
                className="w-48 h-48 rounded-full p-[3px] shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #f1bf27 0%, #B59E7D 50%, #f1bf27 100%)",
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-[#F1EADA]">
                  <Image
                    src="/images/sobre/clarice.jpeg"
                    alt="Clarice Fontoura"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover object-top grayscale"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <h3
                  className="text-2xl text-[#584738]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Clarice Fontoura
                </h3>
                <p
                  className="text-[#f1bf27] text-[10px] font-bold uppercase tracking-[0.25em]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {t("about.clarice.role")}
                </p>
                <p
                  className="text-[#584738] text-sm leading-relaxed max-w-xs mx-auto pt-1"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {t("about.clarice.bio")}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
