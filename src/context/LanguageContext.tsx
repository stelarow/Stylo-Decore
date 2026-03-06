"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Language } from "@/lib/translations";
import { NAV_TRANSLATIONS } from "@/lib/translations";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    const stored = localStorage.getItem("stylo-lang") as Language | null;
    if (stored && ["pt", "en", "es"].includes(stored)) {
      setLanguageState(stored);
    }
  }, []);

  function setLanguage(lang: Language) {
    setLanguageState(lang);
    localStorage.setItem("stylo-lang", lang);
  }

  function t(key: string): string {
    return NAV_TRANSLATIONS[language][key] ?? key;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
