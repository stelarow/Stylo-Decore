"use client";

import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.getBoundingClientRect().height);
      }
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div className="w-full" ref={containerRef}>
      <div ref={ref} className="relative max-w-2xl mx-auto">
        {data.map((item, index) => (
          <div key={index} className="flex gap-5 md:gap-8 pt-8 md:pt-10">
            {/* Coluna do ponto */}
            <div className="relative flex flex-col items-center flex-shrink-0 w-9">
              <div className="h-9 w-9 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 shadow-md">
                <div className="h-3 w-3 rounded-full bg-primary" />
              </div>
            </div>

            {/* Conteúdo */}
            <div className="flex-1 pb-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-1">
                Etapa {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3 leading-snug">
                {item.title}
              </h3>
              <div className="text-tobacco text-sm md:text-base leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Linha vertical animada */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-[16px] top-0 w-[2px] bg-tobacco-light overflow-hidden"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-primary via-primary-dark to-primary rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
