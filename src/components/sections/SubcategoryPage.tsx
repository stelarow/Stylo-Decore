"use client";

import { Check, ClipboardList, ArrowRight, Ruler, Scissors, Wind, Shirt } from "lucide-react";
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
  videoCaption?: string;
  videoTitle?: string;
  videoFeatures?: { icon: "ruler" | "scissors" | "wind" | "shirt"; label: string }[];
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
  videoCaption,
  videoTitle,
  videoFeatures,
}: SubcategoryPageProps) {
  const { t } = useLanguage();
  const [longPressActive, setLongPressActive] = useState<string | null>(null);
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [videoIsPortrait, setVideoIsPortrait] = useState<boolean | null>(true);

  const videoIconMap = {
    ruler: <Ruler size={28} strokeWidth={1.5} />,
    scissors: <Scissors size={28} strokeWidth={1.5} />,
    wind: <Wind size={28} strokeWidth={1.5} />,
    shirt: <Shirt size={28} strokeWidth={1.5} />,
  };

  const handleVideoLoaded = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const v = e.currentTarget;
    setVideoIsPortrait(v.videoHeight > v.videoWidth);
  };

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
        <section className="mt-16 mb-4">
          {/* Separador visual */}
          <ScrollReveal animation="fade">
            <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
              <div className="flex items-center gap-4 mb-10">
                <div className="flex-1 h-px bg-tobacco/30" />
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span
                    className="text-xs font-semibold tracking-[0.2em] uppercase"
                    style={{ color: "var(--color-tobacco)" }}
                  >
                    {t("video.processo.label")}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <div className="flex-1 h-px bg-tobacco/30" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade">
            <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
              {/* Layout dinâmico:
                  portrait  → vídeo à esquerda (lg+), conteúdo à direita; mobile: vídeo em cima
                  landscape → legenda em cima, vídeo abaixo */}
              <div
                className={
                  videoIsPortrait
                    ? "flex flex-col md:flex-row gap-8 items-center"
                    : "flex flex-col gap-6"
                }
              >
                {/* Legenda em cima (landscape / null) */}
                {!videoIsPortrait && videoCaption && (
                  <div className="flex items-start gap-3 px-1">
                    <div
                      className="mt-1 w-0.5 self-stretch rounded-full flex-shrink-0"
                      style={{ background: "var(--color-primary)", minHeight: "1.5rem" }}
                    />
                    <p
                      className="text-sm font-medium leading-relaxed italic"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      {t(videoCaption)}
                    </p>
                  </div>
                )}

                {/* Vídeo */}
                <div
                  className={
                    videoIsPortrait
                      ? "relative overflow-hidden rounded-2xl shadow-lg flex-shrink-0 w-full md:w-auto"
                      : "relative overflow-hidden rounded-2xl shadow-xl"
                  }
                >
                  <video
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    onLoadedMetadata={handleVideoLoaded}
                    className={
                      videoIsPortrait
                        ? "w-full h-full object-cover rounded-2xl"
                        : "w-full aspect-video object-cover"
                    }
                    style={videoIsPortrait ? { maxHeight: "460px", minHeight: "280px" } : undefined}
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-tobacco/20" />
                </div>

                {/* Conteúdo ao lado (portrait) */}
                {videoIsPortrait && (
                  <div className="flex flex-col justify-center gap-5 flex-1 w-full md:pl-2">
                    {/* Barra dourada vertical + título */}
                    {videoTitle && (
                      <div className="flex items-stretch gap-5">
                        <div
                          className="w-[3px] rounded-full flex-shrink-0 self-stretch"
                          style={{ background: "var(--color-primary)" }}
                        />
                        <h3
                          className="font-serif text-3xl sm:text-4xl font-bold leading-tight"
                          style={{ color: "var(--color-foreground)" }}
                        >
                          {t(videoTitle)}
                        </h3>
                      </div>
                    )}

                    {/* Caption */}
                    {videoCaption && (
                      <p
                        className="text-sm sm:text-base leading-relaxed"
                        style={{ color: "var(--color-mahogany-light, var(--color-foreground))" }}
                      >
                        {t(videoCaption)}
                      </p>
                    )}

                    {/* Features — ícone + label, sem bordas */}
                    {videoFeatures && videoFeatures.length > 0 && (
                      <div className="flex flex-wrap gap-8 pt-2">
                        {videoFeatures.map((f, i) => (
                          <div key={i} className="flex flex-col items-center gap-2 text-center min-w-[72px]">
                            <div
                              className="flex items-center justify-center"
                              style={{ color: "var(--color-primary)" }}
                            >
                              {videoIconMap[f.icon]}
                            </div>
                            <span
                              className="text-xs font-semibold leading-tight"
                              style={{ color: "var(--color-foreground)" }}
                            >
                              {t(f.label)}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </section>
      )}


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
