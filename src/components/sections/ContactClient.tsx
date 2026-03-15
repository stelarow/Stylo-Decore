"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { CONTACT, getWhatsAppUrl, getWhatsAppUrl2 } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";
import dynamic from "next/dynamic";

const TestimonialsSection = dynamic(() => import("@/components/ui/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })), { ssr: false });
const MapSection = dynamic(() => import("@/components/sections/MapSection").then(m => ({ default: m.MapSection })), { ssr: false });
const FAQSection = dynamic(() => import("@/components/ui/FAQSection").then(m => ({ default: m.FAQSection })), { ssr: false });

export function ContactClient() {
  const { t } = useLanguage();

  return (
    <>
      <div className="pt-20">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              {t("contact.eyebrow")}
            </p>
            <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
              {t("contact.title")}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-mahogany-light">
              {t("contact.desc")}
            </p>
          </div>

          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
              {/* WhatsApp - Destaque */}
              <div className="flex items-start gap-4 rounded-2xl bg-[#25D366]/10 p-6 lg:col-span-2">
                <MessageCircle className="mt-0.5 h-6 w-6 shrink-0 text-[#25D366]" />
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">WhatsApp</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mahogany-light transition-colors hover:text-[#25D366]"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {t("contact.whatsappPrompt")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm">
                <Phone className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">{t("contact.telephone")}</h3>
                  <p className="text-mahogany-light">{CONTACT.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm">
                <Mail className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">E-mail</h3>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-mahogany-light transition-colors hover:text-primary"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm">
                <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">{t("contact.addressLabel")}</h3>
                  <p className="text-mahogany-light">
                    {CONTACT.address}
                    <br />
                    {CONTACT.city} - {CONTACT.state}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm">
                <Clock className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">
                    {t("contact.hoursLabel")}
                  </h3>
                  <p className="text-mahogany-light">{CONTACT.workingHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TestimonialsSection />
      <MapSection />
      <FAQSection />
    </>
  );
}
