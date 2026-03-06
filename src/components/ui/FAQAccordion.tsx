"use client";

import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQAccordion({ items, title }: FAQAccordionProps) {
  const { t } = useLanguage();
  const resolvedTitle = title ?? t("faq.title");

  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-8 font-serif text-2xl font-bold text-foreground md:text-3xl">
        {resolvedTitle}
      </h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <details key={index} className="group rounded-xl border border-tobacco-light bg-white">
            <summary className="flex w-full cursor-pointer list-none items-center justify-between px-6 py-4 text-left font-medium text-foreground [&::-webkit-details-marker]:hidden">
              <span className="pr-4">{t(item.question)}</span>
              <ChevronDown className="h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-6 pb-4 text-sm leading-relaxed text-mahogany-light">
              {t(item.answer)}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
