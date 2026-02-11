import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT, PRODUCT_CATEGORIES, getWhatsAppUrl } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-background-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-serif text-2xl font-bold">
              Stylo <span className="text-primary">Decore</span>
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-white/60">
              Há mais de 20 anos transformando ambientes com cortinas, persianas,
              papéis de parede e tapetes sob medida.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                20 anos de excelência
              </span>
            </div>
          </div>

          {/* Produtos */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Produtos
            </h4>
            <ul className="space-y-2">
              {PRODUCT_CATEGORIES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Institucional
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contato"
                  className="text-sm text-white/60 transition-colors hover:text-primary"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-white/60 transition-colors hover:text-primary"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-primary"
                >
                  {CONTACT.phone}
                </a>
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
            &copy; {new Date().getFullYear()} Stylo Decore. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
