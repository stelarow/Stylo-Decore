"use client";

import { useState } from "react";
import { ArrowRight, User, Phone, Layers, Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const PRODUTOS = [
  "Cortinas",
  "Persianas",
  "Papel de Parede",
  "Tapetes",
  "Mais de um produto",
];

type Status = "idle" | "loading" | "success" | "error";

export default function BlogContactForm() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    produto: "",
    mensagem: "",
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.nome,
          phone: form.telefone,
          interests: form.produto ? [form.produto] : [],
          message: form.mensagem,
        }),
      });

      if (!res.ok) throw new Error("Falha no envio");

      setStatus("success");
      setTimeout(() => {
        setForm({ nome: "", telefone: "", produto: "", mensagem: "" });
        setStatus("idle");
      }, 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputBase =
    "w-full bg-transparent border-b border-[#B59E7D]/30 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-primary";

  const isActive = (name: string) => focused === name || !!form[name as keyof typeof form];

  return (
    <section className="relative mt-16 overflow-hidden bg-[#221e10]">
      {/* Decorative grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      {/* Top gold rule */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-0 px-6 py-16 md:grid-cols-5 md:py-20 md:gap-16">

        {/* Left column — editorial */}
        <div className="mb-12 md:col-span-2 md:mb-0 md:pr-8 flex flex-col justify-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Fale com a especialista
          </p>
          <h2 className="mb-6 font-serif text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Transforme seu
            <br />
            <span className="text-primary">ambiente</span> com
            <br />a Stylo Decore
          </h2>

          <div className="mb-8 h-px w-12 bg-primary/40" />

          <p className="text-sm leading-relaxed text-white/50">
            Mais de 20 anos de experiência em design de
            interiores. Descreva o seu espaço e receba
            orientações personalizadas diretamente pelo
            WhatsApp.
          </p>

          {/* Trust badges */}
          <div className="mt-10 space-y-4">
            {[
              "Atendimento em Florianópolis e região",
              "Resposta em até 2 horas úteis",
              "Orçamento sem compromisso",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-xs text-white/45">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — form */}
        <div className="md:col-span-3">

          {/* Feedback de sucesso */}
          {status === "success" && (
            <div className="mb-8 flex items-start gap-3 rounded-xl border border-green-700/40 bg-green-900/30 px-4 py-3.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
              <div>
                <p className="text-sm font-semibold text-green-300">Mensagem enviada!</p>
                <p className="mt-0.5 text-xs text-green-400/70">
                  Recebemos seu contato e entraremos em breve pelo WhatsApp.
                </p>
              </div>
            </div>
          )}

          {/* Feedback de erro */}
          {status === "error" && (
            <div className="mb-8 flex items-start gap-3 rounded-xl border border-red-700/40 bg-red-900/30 px-4 py-3.5">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
              <div>
                <p className="text-sm font-semibold text-red-300">Erro ao enviar</p>
                <p className="mt-0.5 text-xs text-red-400/70">
                  Não foi possível enviar. Fale conosco diretamente pelo WhatsApp.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-0">

            {/* Row 1 */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Nome */}
              <div className="relative">
                <label
                  htmlFor="nome"
                  className={`absolute left-0 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                    isActive("nome") ? "-top-5 text-primary text-[10px]" : "top-3 text-white/30"
                  }`}
                >
                  <User className="h-3 w-3" />
                  Nome completo
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  value={form.nome}
                  onChange={handleChange}
                  onFocus={() => setFocused("nome")}
                  onBlur={() => setFocused(null)}
                  className={inputBase + " pt-6"}
                  placeholder={isActive("nome") ? "Seu nome" : ""}
                  disabled={status === "loading" || status === "success"}
                />
              </div>

              {/* Telefone */}
              <div className="relative">
                <label
                  htmlFor="telefone"
                  className={`absolute left-0 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                    isActive("telefone") ? "-top-5 text-primary text-[10px]" : "top-3 text-white/30"
                  }`}
                >
                  <Phone className="h-3 w-3" />
                  Telefone
                </label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  required
                  value={form.telefone}
                  onChange={handleChange}
                  onFocus={() => setFocused("telefone")}
                  onBlur={() => setFocused(null)}
                  className={inputBase + " pt-6"}
                  placeholder={isActive("telefone") ? "(48) 9 9999-9999" : ""}
                  disabled={status === "loading" || status === "success"}
                />
              </div>
            </div>

            {/* Produto */}
            <div className="relative pt-10">
              <label
                htmlFor="produto"
                className={`absolute left-0 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                  isActive("produto") ? "top-5 text-primary text-[10px]" : "top-[52px] text-white/30"
                }`}
              >
                <Layers className="h-3 w-3" />
                Produto de interesse
              </label>
              <select
                id="produto"
                name="produto"
                value={form.produto}
                onChange={handleChange}
                onFocus={() => setFocused("produto")}
                onBlur={() => setFocused(null)}
                disabled={status === "loading" || status === "success"}
                className={
                  inputBase +
                  " pt-6 appearance-none cursor-pointer " +
                  (form.produto ? "text-white" : "text-white/30")
                }
              >
                <option value="" disabled hidden>
                  Selecione uma categoria
                </option>
                {PRODUTOS.map((p) => (
                  <option key={p} value={p} className="bg-[#221e10] text-white">
                    {p}
                  </option>
                ))}
              </select>
            </div>

            {/* Mensagem */}
            <div className="relative pt-10">
              <label
                htmlFor="mensagem"
                className={`absolute left-0 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                  isActive("mensagem") ? "top-5 text-primary text-[10px]" : "top-[52px] text-white/30"
                }`}
              >
                Mensagem (opcional)
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                onFocus={() => setFocused("mensagem")}
                onBlur={() => setFocused(null)}
                rows={3}
                disabled={status === "loading" || status === "success"}
                className={inputBase + " resize-none pt-6"}
                placeholder={
                  isActive("mensagem") ? "Conte um pouco sobre seu ambiente..." : ""
                }
              />
            </div>

            {/* Button */}
            <div className="pt-10">
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="brushed-gold group flex w-full items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#221e10] transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
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
                    <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
                    Enviar mensagem
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>

            <p className="pt-5 text-center text-[11px] text-white/25">
              Seus dados são tratados com total confidencialidade.
            </p>
          </form>
        </div>
      </div>

      {/* Bottom gold rule */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
