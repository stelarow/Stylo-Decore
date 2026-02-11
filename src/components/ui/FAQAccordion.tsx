"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQAccordion({ items, title = "Perguntas Frequentes" }: FAQAccordionProps) {
  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-8 font-serif text-2xl font-bold text-foreground md:text-3xl">
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div className="rounded-xl border border-tobacco-light bg-white">
                <DisclosureButton className="flex w-full items-center justify-between px-6 py-4 text-left">
                  <span className="pr-4 font-medium text-foreground">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-muted transition-transform",
                      open && "rotate-180"
                    )}
                  />
                </DisclosureButton>
                <DisclosurePanel className="px-6 pb-4 text-sm leading-relaxed text-mahogany-light">
                  {item.answer}
                </DisclosurePanel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
