"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { usePathname } from "next/navigation";
import { CONTACT, PRODUCT_CATEGORIES, getWhatsAppUrl, getWhatsAppUrl2 } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const pathname = usePathname();
  const { t } = useLanguage();

  if (pathname.startsWith("/questionario")) return null;

  return (
    <footer className="bg-background-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-4 inline-block font-serif text-2xl font-bold hover:opacity-80 transition-opacity">
              Stylo <span className="text-primary">Decore</span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-white/60">
              {t("footer.desc")}
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {t("footer.excellence")}
              </span>
            </div>
          </div>

          {/* Produtos */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {t("footer.products")}
            </h4>
            <ul className="space-y-2">
              {PRODUCT_CATEGORIES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-primary"
                  >
                    {t(item.href)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {t("footer.institutional")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/60 transition-colors hover:text-primary"
                >
                  {t("footer.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-sm text-white/60 transition-colors hover:text-primary"
                >
                  {t("/contato")}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-white/60 transition-colors hover:text-primary"
                >
                  {t("/blog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {t("/contato")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className="flex flex-col gap-0.5">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 transition-colors hover:text-primary"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-white/60 transition-colors hover:text-primary"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-white/60">
                  {CONTACT.address}
                  <br />
                  {CONTACT.city} - {CONTACT.state}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-white/60">{CONTACT.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Stylo Decore. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
