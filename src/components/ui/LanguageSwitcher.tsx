"use client";

import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { LANGUAGES } from "@/lib/translations";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === language)!;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Selecionar idioma"
        className={cn(
          "flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-widest transition-all duration-200",
          "border-tobacco/40 bg-background text-mahogany hover:border-primary hover:text-primary",
          open && "border-primary text-primary"
        )}
      >
        <Globe className="h-3.5 w-3.5" />
        <span>{current.label}</span>
      </button>

      {/* Dropdown */}
      <div
        className={cn(
          "absolute right-0 top-full mt-2 w-40 overflow-hidden rounded-xl border border-tobacco/20 bg-background shadow-lg transition-all duration-200",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        )}
      >
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            onClick={() => {
              setLanguage(lang.code);
              setOpen(false);
            }}
            className={cn(
              "flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors",
              language === lang.code
                ? "bg-primary/10 font-semibold text-mahogany"
                : "text-mahogany-light hover:bg-tobacco/10 hover:text-mahogany"
            )}
          >
            <span className="text-base leading-none">{lang.flag}</span>
            <span className="flex-1 text-left">{lang.name}</span>
            {language === lang.code && (
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
