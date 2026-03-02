"use client";

import { useEffect, useRef } from "react";
import { getWhatsAppUrl } from "@/lib/constants";
import { useParallax } from "@/hooks/useParallax";

export default function HeroSection() {
  const videoContainerRef = useParallax<HTMLDivElement>(0.4);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = desktopVideoRef.current;
    if (!video) return;

    let reversing = false;
    let animId: number;
    let lastTimestamp = 0;

    const reverseFrame = (timestamp: number) => {
      const delta = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      if (delta > 0.1) {
        animId = requestAnimationFrame(reverseFrame);
        return;
      }

      const next = video.currentTime - delta;
      if (next <= 0) {
        video.currentTime = 0;
        reversing = false;
        video.play();
      } else {
        video.currentTime = next;
        animId = requestAnimationFrame(reverseFrame);
      }
    };

    const handleTimeUpdate = () => {
      if (!reversing && video.duration && video.currentTime >= video.duration - 0.05) {
        reversing = true;
        video.pause();
        lastTimestamp = performance.now();
        animId = requestAnimationFrame(reverseFrame);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      {/* Video container — parallax target */}
      <div
        ref={videoContainerRef}
        className="absolute inset-0 will-change-transform"
      >
        {/* Mobile video */}
        <video
          className="absolute inset-0 h-full w-full object-cover md:hidden"
          src="/videos/Curtain_sways_sea_moves_wind_delpmaspu_.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Desktop video — ping-pong loop */}
        <video
          ref={desktopVideoRef}
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
          src="/videos/Whisk_gto5i2y0cdolrgm30sojfgotcdn4qtlkrdn40iz.mp4"
          autoPlay
          muted
          playsInline
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary drop-shadow-md">
          Stylo Decore
        </p>
        <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] md:text-5xl lg:text-6xl xl:text-7xl">
          20 anos de experiência transformando ambientes
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)] md:text-xl xl:text-2xl">
          Sofisticação e conforto em cada detalhe da sua casa.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={getWhatsAppUrl("Olá! Gostaria de solicitar um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="brushed-gold inline-flex items-center rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-background-dark transition-opacity hover:opacity-90"
          >
            Solicitar Orçamento
          </a>
          <a
            href="#colecoes"
            className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-background-dark transition-all hover:bg-background"
          >
            Ver Coleções
          </a>
        </div>
      </div>
    </section>
  );
}
