import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { CONTACT, getWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contato | Stylo Decore - Florianópolis e Região",
  description:
    "Entre em contato com a Stylo Decore. Solicite um orçamento gratuito para cortinas, persianas, papéis de parede e tapetes em Florianópolis e Região.",
};

export default function ContatoPage() {
  return (
    <div className="pt-20">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Fale Conosco
          </p>
          <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Entre em Contato
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-mahogany-light">
            Estamos prontos para ajudar você a transformar seus ambientes. O atendimento
            é feito diretamente pelo WhatsApp para mais agilidade.
          </p>
        </div>

        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="space-y-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
            {/* WhatsApp - Destaque */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl bg-[#25D366]/10 p-6 transition-colors hover:bg-[#25D366]/20 lg:col-span-2"
            >
              <MessageCircle className="mt-0.5 h-6 w-6 shrink-0 text-[#25D366]" />
              <div>
                <h3 className="mb-1 font-semibold text-foreground">WhatsApp</h3>
                <p className="text-mahogany-light">{CONTACT.phone}</p>
                <p className="mt-1 text-sm font-medium text-primary">
                  Atendimento rápido e personalizado &rarr;
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm">
              <Phone className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 font-semibold text-foreground">Telefone</h3>
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
                <h3 className="mb-1 font-semibold text-foreground">Endereço</h3>
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
                  Horário de Atendimento
                </h3>
                <p className="text-mahogany-light">{CONTACT.workingHours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
