"use client";

import { Check, ClipboardList, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";
import { useRef, useState } from "react";

interface ProductItem {
  name: string;
  image: string;
  desktopImage?: string;
  category: string;
  descriptionKey?: string;
}

interface SubcategoryPageProps {
  title: string;
  description?: string;
  category: string;
  products: ProductItem[];
  headline?: string;
  heroImage?: string;
  desktopHeroImage?: string;
  mobileHeroImage?: string;
  collectionTag?: string;
  specs?: { title: string; description: string }[];
  descriptionKey?: string;
  desktopImageClass?: string;
  mobileImageClass?: string;
  heroImageStyle?: React.CSSProperties;
  mobileHeroImageStyle?: React.CSSProperties;
  titleKey?: string;
  categoryKey?: string;
  videoSrc?: string;
}

export default function SubcategoryPage({
  title,
  description,
  category,
  products,
  headline,
  heroImage,
  desktopHeroImage,
  mobileHeroImage,
  collectionTag,
  specs,
  descriptionKey,
  desktopImageClass,
  mobileImageClass,
  heroImageStyle,
  mobileHeroImageStyle,
  titleKey,
  categoryKey,
  videoSrc,
}: SubcategoryPageProps) {
  const { t } = useLanguage();
  const [longPressActive, setLongPressActive] = useState<string | null>(null);
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTouchStart = (name: string) => {
    longPressTimer.current = setTimeout(() => setLongPressActive(name), 500);
  };

  const handleTouchEnd = () => {
    if (longPressTimer.current) clearTimeout(longPressTimer.current);
    setTimeout(() => setLongPressActive(null), 1500);
  };

  const defaultSpecs = [
    {
      title: t("sub.specs.spec1.title"),
      description: t("sub.specs.spec1.desc"),
    },
    {
      title: t("sub.specs.spec2.title"),
      description: t("sub.specs.spec2.desc"),
    },
    {
      title: t("sub.specs.spec3.title"),
      description: t("sub.specs.spec3.desc"),
    },
  ];

  const finalSpecs = specs || defaultSpecs;
  const tag = collectionTag || category;

  return (
    <div>
      {/* Hero - Imagem principal grande */}
      <div className="relative w-full min-h-[70vh] md:min-h-[80vh]">
        {desktopHeroImage ? (
          <>
            <img
              src={desktopHeroImage}
              alt={title}
              className="absolute inset-0 hidden h-full w-full object-cover object-top lg:block"
              style={heroImageStyle}
            />
            <img
              src={
                mobileHeroImage ||
                heroImage ||
                products[0]?.image ||
                "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
              }
              alt={title}
              className="absolute inset-0 h-full w-full object-cover object-top lg:hidden"
              style={mobileHeroImageStyle}
            />
          </>
        ) : products[0]?.desktopImage ? (
          <>
            <img
              src={heroImage || products[0]?.desktopImage}
              alt={title}
              className="absolute inset-0 hidden h-full w-full object-cover object-top lg:block"
            />
            <img
              src={
                heroImage ||
                products[0]?.image ||
                "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
              }
              alt={title}
              className="absolute inset-0 h-full w-full object-cover object-top lg:hidden"
            />
          </>
        ) : (
          <img
            src={
              heroImage ||
              products[0]?.image ||
              "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
            }
            alt={title}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* Glass panel overlay */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-xl lg:max-w-2xl">
          <div className="glass-panel rounded-2xl px-8 py-6 text-center">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-mahogany-light">
              {categoryKey ? t(categoryKey) : tag}
            </p>
            <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl leading-tight">
              {titleKey ? t(titleKey) : title}
            </h1>
            <p className="mt-1.5 text-xs text-mahogany-light">
              {t("sub.designAutoral")}
            </p>
          </div>
        </div>
      </div>

      {/* Headline + Descrição */}
      <ScrollReveal animation="up">
        <div className="mx-auto max-w-2xl lg:max-w-3xl px-6 py-12 md:py-16 text-center">
          {headline && (
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl mb-5 leading-snug">
              {headline}
            </h2>
          )}
          <p className="text-base leading-relaxed text-mahogany-light md:text-lg">
            {descriptionKey ? t(descriptionKey) : description}
          </p>
        </div>
      </ScrollReveal>

      {/* Galeria de imagens empilhadas */}
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {products.map((product, i) => (
            <ScrollReveal key={product.name} animation="up" delay={i * 90}>
              <a
                href={getWhatsAppUrl(
                  `${t("sub.whatsapp.interest")} ${category}: ${product.name}. ${t("sub.whatsapp.info")}`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                onTouchStart={() => product.descriptionKey && handleTouchStart(product.name)}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchEnd}
              >
                <div className="relative overflow-hidden">
                  {product.desktopImage ? (
                    <>
                      <img
                        src={product.desktopImage}
                        alt={product.name}
                        className={desktopImageClass ?? "hidden lg:block w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.02]"}
                      />
                      <img
                        src={product.image}
                        alt={product.name}
                        className={mobileImageClass ?? "lg:hidden w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.02]"}
                      />
                    </>
                  ) : (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  )}
                  {/* Overlay com info no hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className={`absolute left-0 right-0 p-5 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ${product.descriptionKey ? "bottom-[72px]" : "bottom-0"}`}>
                    <p className="text-sm font-semibold text-white mb-2">{product.name}</p>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 text-xs font-semibold text-foreground backdrop-blur-sm transition-colors group-hover:bg-white">
                      {t("sub.interest")}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  {/* Faixa glass — aparece no hover (desktop) ou long-press (mobile) */}
                  {product.descriptionKey && (
                    <div
                      className={`absolute bottom-0 left-0 right-0 px-4 py-3 backdrop-blur-md transition-opacity duration-300 ${
                        longPressActive === product.name ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                      style={{ background: "rgba(241,234,218,0.82)" }}
                    >
                      <p className="text-xs leading-snug text-mahogany italic">
                        {t(product.descriptionKey)}
                      </p>
                    </div>
                  )}
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Vídeo opcional */}
      {videoSrc && (
        <ScrollReveal animation="fade">
          <div className="mx-auto max-w-3xl lg:max-w-5xl px-6 pb-10">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-tobacco-light/30" />
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* CTA Dourado */}
      <ScrollReveal animation="up">
        <div className="mx-auto max-w-3xl lg:max-w-5xl px-6 py-8">
          <div className="text-center">
            <a
              href={getWhatsAppUrl(
                `${t("sub.whatsapp.project")} ${title} ${t("sub.whatsapp.projectEnd")}`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="brushed-gold inline-flex items-center rounded-full px-10 py-4 text-sm font-semibold uppercase tracking-wider transition-all hover:shadow-lg"
            >
              {t("sub.customProject")}
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* Especificações Premium */}
      <ScrollReveal animation="up">
        <div className="mx-auto max-w-3xl lg:max-w-5xl px-6 py-10">
          <div className="rounded-2xl border border-tobacco-light bg-white p-8">
            <h3 className="mb-6 font-serif text-xl font-bold text-foreground">
              {t("sub.specs.title")}
            </h3>
            <ul className="space-y-5 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
              {finalSpecs.map((spec) => (
                <li key={spec.title} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {spec.title}
                    </p>
                    <p className="mt-0.5 text-sm text-mahogany-light">
                      {spec.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>

      {/* Showroom */}
      <ScrollReveal animation="scale">
        <div className="mx-auto max-w-3xl lg:max-w-5xl px-6 pb-16">
          <div className="rounded-2xl bg-foreground p-8 text-center text-white">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
              <ClipboardList className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-2 font-serif text-xl font-bold">
              {t("sub.showroom.title")}
            </h3>
            <p className="mx-auto mb-6 max-w-sm text-sm text-white/70">
              {t("sub.showroom.desc")}
            </p>
            <a
              href={getWhatsAppUrl(
                `${t("sub.whatsapp.showroom")} ${title}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-6 inline-flex items-center rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider text-background-dark transition-colors hover:bg-primary-dark"
            >
              {t("sub.showroom.cta")}
            </a>
            <div className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {t("sub.excellence")}
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Rodapé da página */}
      <ScrollReveal animation="fade">
        <div className="border-t border-tobacco-light/40 py-6 text-center">
          <p className="text-xs tracking-wide text-mahogany-light">
            {t("sub.footer")}
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}
