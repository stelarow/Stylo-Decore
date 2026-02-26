"use client";

import { useState } from "react";
import {
  User,
  Phone,
  Layers,
  MessageSquare,
  MapPin,
  Clock,
  Mail,
  AtSign,
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { getWhatsAppUrl, CONTACT } from "@/lib/constants";

const INTERESTS = [
  "Cortinas",
  "Persianas",
  "Papéis de Parede",
  "Tapetes",
  "Projeto completo",
];

const inputClass =
  "w-full rounded-lg border border-[#B59E7D]/40 bg-background px-4 py-3 text-sm text-foreground placeholder-foreground/45 outline-none transition-all duration-200 focus:border-primary/60 focus:ring-2 focus:ring-primary/20";

const labelClass =
  "mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-foreground/70";

function formatPhone(raw: string) {
  const d = raw.replace(/\D/g, "").slice(0, 11);
  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 3)} ${d.slice(3, 7)}-${d.slice(7)}`;
}

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interests: [] as string[],
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  function toggleInterest(opt: string) {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(opt)
        ? prev.interests.filter((i) => i !== opt)
        : [...prev.interests, opt],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          interests: form.interests,
          message: form.message,
        }),
      });

      if (!res.ok) throw new Error("Falha no envio");

      setStatus("success");

      // Reset form após 4 segundos
      setTimeout(() => {
        setForm({ name: "", phone: "", email: "", interests: [], message: "" });
        setStatus("idle");
      }, 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <section className="bg-background pt-6 pb-20 md:pt-8 md:pb-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Cabeçalho */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Fale Conosco
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Entre em Contato
          </h2>
          <div className="mx-auto mt-4 h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-foreground/75">
            Preencha o formulário e iniciamos o atendimento pelo WhatsApp — sem
            compromisso, com total atenção ao seu projeto.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:items-start lg:gap-16">

          {/* Coluna esquerda — informações */}
          <div className="space-y-10">
            <ul className="space-y-6">
              {[
                { Icon: Phone, label: "WhatsApp", value: CONTACT.phone },
                { Icon: Mail, label: "E-mail", value: CONTACT.email },
                {
                  Icon: MapPin,
                  label: "Localização",
                  value: `${CONTACT.city}, ${CONTACT.state}`,
                },
                { Icon: Clock, label: "Atendimento", value: CONTACT.workingHours },
              ].map(({ Icon, label, value }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/55">
                      {label}
                    </p>
                    <p className="mt-0.5 text-sm text-foreground">{value}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Citação decorativa */}
            <blockquote className="border-l-2 border-primary/40 pl-5">
              <p className="font-serif text-base italic leading-relaxed text-foreground/65">
                "Cada detalhe conta — do tecido escolhido à instalação final.
                Nosso compromisso é transformar o seu espaço com sofisticação."
              </p>
            </blockquote>

            {/* CTA direto WhatsApp */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-70"
            >
              Ir direto ao WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Coluna direita — formulário */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[#B59E7D]/25 bg-white p-8 shadow-sm md:p-10"
          >
            {/* Feedback de sucesso */}
            {status === "success" && (
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                <div>
                  <p className="text-sm font-semibold text-green-800">Mensagem enviada!</p>
                  <p className="mt-0.5 text-xs text-green-700">
                    Recebemos seu contato. O WhatsApp foi aberto para continuar o atendimento.
                  </p>
                </div>
              </div>
            )}

            {/* Feedback de erro */}
            {status === "error" && (
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                <div>
                  <p className="text-sm font-semibold text-red-800">Erro ao enviar</p>
                  <p className="mt-0.5 text-xs text-red-700">
                    Não foi possível enviar sua mensagem. Por favor, fale conosco diretamente pelo WhatsApp.
                  </p>
                </div>
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">

              {/* Nome */}
              <div>
                <label className={labelClass}>
                  <User className="h-3 w-3" />
                  Nome completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  disabled={status === "loading" || status === "success"}
                />
              </div>

              {/* Telefone com máscara */}
              <div>
                <label className={labelClass}>
                  <Phone className="h-3 w-3" />
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(48) 9 9999-9999"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: formatPhone(e.target.value) })}
                  className={inputClass}
                  disabled={status === "loading" || status === "success"}
                />
              </div>

              {/* E-mail */}
              <div className="sm:col-span-2">
                <label className={labelClass}>
                  <AtSign className="h-3 w-3" />
                  E-mail (opcional)
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  disabled={status === "loading" || status === "success"}
                />
              </div>

              {/* Produtos — multi-seleção por pills */}
              <div className="sm:col-span-2">
                <label className={labelClass}>
                  <Layers className="h-3 w-3" />
                  Produto de interesse
                  {form.interests.length > 0 && (
                    <span className="ml-1 rounded-full bg-primary/15 px-2 py-0.5 text-[9px] font-bold text-primary">
                      {form.interests.length} selecionado{form.interests.length > 1 ? "s" : ""}
                    </span>
                  )}
                </label>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map((opt) => {
                    const selected = form.interests.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleInterest(opt)}
                        disabled={status === "loading" || status === "success"}
                        className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-150 disabled:opacity-60 ${
                          selected
                            ? "border-primary bg-primary text-[#221e10]"
                            : "border-[#B59E7D]/40 bg-background text-foreground/70 hover:border-primary/60 hover:text-foreground"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mensagem */}
              <div className="sm:col-span-2">
                <label className={labelClass}>
                  <MessageSquare className="h-3 w-3" />
                  Mensagem (opcional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Conte um pouco sobre o seu projeto, ambiente ou dúvidas..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                  disabled={status === "loading" || status === "success"}
                />
              </div>
            </div>

            {/* Botão */}
            <div className="mt-7">
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="brushed-gold flex w-full items-center justify-center gap-2.5 rounded-full py-4 text-sm font-semibold uppercase tracking-wider text-[#221e10] transition-all hover:opacity-90 hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Enviado!
                  </>
                ) : (
                  <>
                    <Mail className="h-4 w-4" />
                    Enviar mensagem
                  </>
                )}
              </button>
            </div>

            <p className="mt-5 text-center text-[11px] text-foreground/50">
              Seus dados são tratados com total confidencialidade.
            </p>
          </form>

        </div>
      </div>
    </section>
  );
}
