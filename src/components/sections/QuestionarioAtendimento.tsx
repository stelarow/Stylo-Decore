"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

// ─── Types ────────────────────────────────────────────────────────────────────

type ProductKey = "cortinas" | "persianas" | "papelDeParede" | "tapetes";
type Phase = "produtos" | "detalhes" | "resumo" | "contato";

interface QuizState {
  phase: Phase;
  selectedProducts: ProductKey[];
  currentProductIndex: number;
  currentQuestionIndex: number;
  answers: Partial<Record<ProductKey, Record<string, string>>>;
}

interface ContactData {
  nome: string;
  whatsapp: string;
  email: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PRODUCTS: { key: ProductKey; image: string; name: string; desc: string }[] = [
  { key: "cortinas",     image: "/images/cortinas/cortina-01.jpg",   name: "Cortinas",        desc: "Tecido, wave, blackout e mais" },
  { key: "persianas",    image: "/images/persianas/persiana-01.jpg", name: "Persianas",       desc: "Horizontal, vertical, rolô"   },
  { key: "papelDeParede",image: "/images/papel/papel-01.jpg",        name: "Papel de Parede", desc: "Breeze, Carving, Elegant"     },
  { key: "tapetes",      image: "/images/tapetes/tapete-01.jpg",     name: "Tapetes",         desc: "Sob medida, decorativo"       },
];

type Question = { label: string; key: string; options: string[]; isMeasurement?: boolean };

const QUESTIONS: Record<ProductKey, Question[]> = {
  cortinas: [
    { label: "Que tipo de cortina você busca?",          key: "tipo",      options: ["Tecido", "Prega Americana", "Ilhós", "Wave", "Blackout & Acústicas"] },
    { label: "Qual é o ambiente?",                        key: "ambiente",  options: ["Sala", "Quarto", "Escritório", "Varanda", "Outro"] },
    { label: "Qual é a prioridade principal?",            key: "prioridade",options: ["Privacidade", "Controle de luz", "Estética e decoração", "Isolamento acústico"] },
    { label: "Qual estilo combina com o seu espaço?",     key: "estilo",    options: ["Moderno / Contemporâneo", "Clássico / Tradicional", "Rústico / Natural", "Minimalista"] },
    { label: "Qual é o tamanho aproximado da janela?",    key: "tamanho",   options: ["Pequena (até 2m)", "Média (2–4m)", "Grande (acima de 4m)", "Não sei ainda"], isMeasurement: true },
    { label: "Qual é o seu prazo para este projeto?",     key: "prazo",     options: ["Urgente (menos de 1 mês)", "1 a 3 meses", "Mais de 3 meses", "Ainda não definido"] },
  ],
  persianas: [
    { label: "Que tipo de persiana você prefere?",        key: "tipo",        options: ["Horizontal", "Vertical", "Rolô", "Double Vision"] },
    { label: "Qual é o ambiente?",                        key: "ambiente",    options: ["Sala", "Quarto", "Escritório", "Banheiro", "Outro"] },
    { label: "Como prefere o controle de luz?",           key: "luz",         options: ["Bloqueio total (blackout)", "Meia-luz suave", "Difusão clara", "Depende do horário"] },
    { label: "Qual acionamento prefere?",                 key: "acionamento", options: ["Manual", "Motorizado", "Tanto faz", "Não sei ainda"] },
    { label: "Qual é o tamanho aproximado?",              key: "tamanho",     options: ["Pequena (até 1,5m)", "Média (1,5–3m)", "Grande (acima de 3m)", "Não sei ainda"], isMeasurement: true },
    { label: "Qual é o seu prazo para este projeto?",     key: "prazo",       options: ["Urgente (menos de 1 mês)", "1 a 3 meses", "Mais de 3 meses", "Ainda não definido"] },
  ],
  papelDeParede: [
    { label: "Qual coleção te interessa?",                key: "colecao",     options: ["Breeze", "Carving", "Elegant", "Ainda não sei"] },
    { label: "Qual é o ambiente?",                        key: "ambiente",    options: ["Sala", "Quarto", "Escritório", "Corredor", "Outro"] },
    { label: "Que visual você busca?",                    key: "visual",      options: ["Texturizado / Relevo", "Liso e sofisticado", "Estampado / Padrão", "Geométrico"] },
    { label: "A parede já possui papel de parede?",       key: "estadoParede",options: ["Sim, precisa remover", "Não, parede limpa", "Não sei", "Preciso de orientação"] },
    { label: "Qual é a área aproximada?",                 key: "area",        options: ["Até 10m²", "10–25m²", "Acima de 25m²", "Não sei ainda"], isMeasurement: true },
    { label: "Qual é o seu prazo para este projeto?",     key: "prazo",       options: ["Urgente (menos de 1 mês)", "1 a 3 meses", "Mais de 3 meses", "Ainda não definido"] },
  ],
  tapetes: [
    { label: "Que tipo de tapete você procura?",          key: "tipo",     options: ["Sob Medida", "Decorativo", "Passadeira"] },
    { label: "Qual é o ambiente?",                        key: "ambiente", options: ["Sala", "Quarto", "Corredor", "Área Externa", "Outro"] },
    { label: "Qual é o uso principal?",                   key: "uso",      options: ["Decorativo / Estético", "Conforto térmico", "Proteção do piso", "Delimitação do ambiente"] },
    { label: "Material preferido?",                       key: "material", options: ["Lã / Natural", "Sintético / Fácil limpeza", "Sisal / Fibra", "Sem preferência"] },
    { label: "Qual é o tamanho aproximado?",              key: "tamanho",  options: ["Pequeno (até 2m²)", "Médio (2–6m²)", "Grande (acima de 6m²)", "Não sei ainda"], isMeasurement: true },
    { label: "Qual é o seu prazo para este projeto?",     key: "prazo",    options: ["Urgente (menos de 1 mês)", "1 a 3 meses", "Mais de 3 meses", "Ainda não definido"] },
  ],
};

const PRODUCT_META: Record<ProductKey, { name: string; image: string }> = {
  cortinas:     { name: "Cortinas",        image: "/images/cortinas/cortina-01.jpg"   },
  persianas:    { name: "Persianas",       image: "/images/persianas/persiana-01.jpg" },
  papelDeParede:{ name: "Papel de Parede", image: "/images/papel/papel-01.jpg"        },
  tapetes:      { name: "Tapetes",         image: "/images/tapetes/tapete-01.jpg"     },
};

const ANSWER_LABELS: Record<string, string> = {
  tipo: "Tipo", ambiente: "Ambiente", tamanho: "Tamanho", colecao: "Coleção",
  area: "Área", prioridade: "Prioridade", estilo: "Estilo", prazo: "Prazo",
  luz: "Controle de luz", acionamento: "Acionamento", visual: "Visual desejado",
  estadoParede: "Estado da parede", uso: "Uso principal", material: "Material",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function buildWhatsAppMessage(
  answers: Partial<Record<ProductKey, Record<string, string>>>,
  selectedProducts: ProductKey[]
): string {
  let msg = "Olá! Vim pelo site da Stylo Decore e tenho interesse em:\n\n";
  for (const key of selectedProducts) {
    const productAnswers = answers[key];
    if (!productAnswers) continue;
    const { name } = PRODUCT_META[key];
    msg += `*${name}*\n`;
    for (const q of QUESTIONS[key]) {
      const answer = productAnswers[q.key];
      if (answer) msg += `- ${ANSWER_LABELS[q.key] ?? q.key}: ${answer}\n`;
    }
    msg += "\n";
  }
  msg += "Gostaria de receber uma orientação personalizada. 😊";
  return msg;
}

function formatWhatsApp(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

// ─── Step indicator ───────────────────────────────────────────────────────────

const STEPS = [
  { id: 1, label: "Produtos"     },
  { id: 2, label: "Preferências" },
  { id: 3, label: "Resumo"       },
  { id: 4, label: "Contato"      },
];

function phaseToStep(phase: Phase): number {
  const map: Record<Phase, number> = { produtos: 1, detalhes: 2, resumo: 3, contato: 4 };
  return map[phase];
}

// ─── Initial state ────────────────────────────────────────────────────────────

const INITIAL_STATE: QuizState = {
  phase: "produtos",
  selectedProducts: [],
  currentProductIndex: 0,
  currentQuestionIndex: 0,
  answers: {},
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function QuestionarioAtendimento() {
  const [state, setState] = useState<QuizState>(INITIAL_STATE);
  const [measurementInput, setMeasurementInput] = useState("");
  const [contact, setContact] = useState<ContactData>({ nome: "", whatsapp: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ── Derived ─────────────────────────────────────────────────────────────────

  const currentProductKey = state.selectedProducts[state.currentProductIndex] as ProductKey | undefined;
  const currentQuestions  = currentProductKey ? QUESTIONS[currentProductKey] : [];
  const currentQuestion   = currentQuestions[state.currentQuestionIndex];
  const currentAnswer     = currentProductKey && currentQuestion
    ? state.answers[currentProductKey]?.[currentQuestion.key]
    : undefined;

  const isLastQuestion =
    state.currentProductIndex === state.selectedProducts.length - 1 &&
    state.currentQuestionIndex === currentQuestions.length - 1;

  const totalQuestions = state.selectedProducts.reduce((s, k) => s + QUESTIONS[k].length, 0);
  const answeredCount  = state.selectedProducts
    .slice(0, state.currentProductIndex)
    .reduce((s, k) => s + QUESTIONS[k].length, 0) + state.currentQuestionIndex;
  const progressPct = totalQuestions > 0 ? (answeredCount / totalQuestions) * 100 : 0;

  const whatsAppUrl  = getWhatsAppUrl(buildWhatsAppMessage(state.answers, state.selectedProducts));
  const emailValid   = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email);
  const contactValid = contact.nome.trim().length > 0 &&
    contact.whatsapp.replace(/\D/g, "").length >= 10 && emailValid;

  const currentStep = phaseToStep(state.phase);

  // ── Handlers ─────────────────────────────────────────────────────────────────

  const toggleProduct = (key: ProductKey) =>
    setState(prev => ({
      ...prev,
      selectedProducts: prev.selectedProducts.includes(key)
        ? prev.selectedProducts.filter(p => p !== key)
        : [...prev.selectedProducts, key],
    }));

  const goToDetails = () =>
    setState(prev => ({ ...prev, phase: "detalhes", currentProductIndex: 0, currentQuestionIndex: 0 }));

  const setAnswer = (value: string) => {
    if (!currentProductKey || !currentQuestion) return;
    setState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [currentProductKey]: { ...prev.answers[currentProductKey], [currentQuestion.key]: value },
      },
    }));
  };

  const handleOptionClick = (option: string) => {
    setAnswer(option);
    setMeasurementInput("");
  };

  const handleMeasurementInput = (value: string) => {
    setMeasurementInput(value);
    if (value.trim()) setAnswer(value.trim());
  };

  const goNext = () => {
    if (!currentProductKey) return;
    if (state.currentQuestionIndex < currentQuestions.length - 1) {
      setState(prev => ({ ...prev, currentQuestionIndex: prev.currentQuestionIndex + 1 }));
      setMeasurementInput("");
    } else if (state.currentProductIndex < state.selectedProducts.length - 1) {
      setState(prev => ({ ...prev, currentProductIndex: prev.currentProductIndex + 1, currentQuestionIndex: 0 }));
      setMeasurementInput("");
    } else {
      setState(prev => ({ ...prev, phase: "resumo" }));
    }
  };

  const goBack = () => {
    if (state.phase === "contato") {
      setState(prev => ({ ...prev, phase: "resumo" }));
      return;
    }
    if (state.phase === "resumo") {
      const lastIdx = state.selectedProducts.length - 1;
      const lastKey = state.selectedProducts[lastIdx] as ProductKey;
      setState(prev => ({ ...prev, phase: "detalhes", currentProductIndex: lastIdx, currentQuestionIndex: QUESTIONS[lastKey].length - 1 }));
      return;
    }
    if (state.phase === "detalhes") {
      if (state.currentQuestionIndex > 0) {
        setState(prev => ({ ...prev, currentQuestionIndex: prev.currentQuestionIndex - 1 }));
        setMeasurementInput("");
      } else if (state.currentProductIndex > 0) {
        const prevKey = state.selectedProducts[state.currentProductIndex - 1] as ProductKey;
        setState(prev => ({ ...prev, currentProductIndex: prev.currentProductIndex - 1, currentQuestionIndex: QUESTIONS[prevKey].length - 1 }));
        setMeasurementInput("");
      } else {
        setState(prev => ({ ...prev, phase: "produtos" }));
      }
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await fetch("/api/orcamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: state.answers, selectedProducts: state.selectedProducts, contact }),
      });
    } catch { /* falha silenciosa — ainda abre o WhatsApp */ }
    setIsSubmitting(false);
    window.open(whatsAppUrl, "_blank");
  };

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#F1EADA] flex flex-col">

      {/* ── Step bar ──────────────────────────────────────────────────────── */}
      <div className="sticky top-0 z-20 w-full bg-[#F1EADA]/95 backdrop-blur-sm border-b border-[#B59E7D]/15">
        <div className="mx-auto max-w-2xl lg:max-w-4xl px-5 py-3">
          <div className="flex items-center gap-1">
            {STEPS.map((step, idx) => {
              const isCompleted = currentStep > step.id;
              const isCurrent   = currentStep === step.id;
              const isLast      = idx === STEPS.length - 1;
              return (
                <div key={step.id} className="flex items-center flex-1 last:flex-none">
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border-[1.5px] transition-all duration-300 ${
                      isCompleted
                        ? "bg-[#f1bf27] border-[#f1bf27] text-[#221e10]"
                        : isCurrent
                        ? "bg-transparent border-[#f1bf27] text-[#584738]"
                        : "bg-transparent border-[#B59E7D]/25 text-[#B59E7D]/40"
                    }`}>
                      {isCompleted ? <Check className="w-3 h-3" /> : step.id}
                    </div>
                    <span className={`text-[10px] font-semibold uppercase tracking-widest transition-colors hidden sm:block ${
                      isCurrent ? "text-[#584738]" : isCompleted ? "text-[#f1bf27]" : "text-[#B59E7D]/35"
                    }`}>
                      {step.label}
                    </span>
                  </div>

                  {!isLast && (
                    <div className="flex-1 mx-3 h-px bg-[#B59E7D]/15 relative overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-[#f1bf27]/60 transition-all duration-700"
                        style={{ width: isCompleted ? "100%" : "0%" }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div className="flex-1 flex items-start lg:items-center justify-center px-5 py-8 lg:py-12">
        <div className="w-full max-w-2xl lg:max-w-4xl">

          {/* ── Phase 0: Product selection ────────────────────────────────── */}
          {state.phase === "produtos" && (
            <div>
              <div className="mb-7">
                <p className="text-[#f1bf27] font-semibold text-[10px] tracking-[0.22em] uppercase mb-2.5">
                  Passo 1 de 4
                </p>
                <h1 className="font-serif text-2xl md:text-[1.875rem] font-bold text-[#584738] leading-snug mb-2">
                  O que você está buscando?
                </h1>
                <p className="text-[#584738]/50 text-sm md:text-[0.9375rem]">
                  Selecione um ou mais produtos para personalizar sua consulta.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {PRODUCTS.map(product => {
                  const isSelected = state.selectedProducts.includes(product.key);
                  return (
                    <button
                      key={product.key}
                      onClick={() => toggleProduct(product.key)}
                      className={`group relative overflow-hidden rounded-xl text-left transition-all duration-300 ${
                        isSelected
                          ? "ring-2 ring-[#f1bf27] ring-offset-2 ring-offset-[#F1EADA]"
                          : "hover:scale-[1.02] hover:shadow-lg"
                      }`}
                      style={{ aspectRatio: "2/4.8" }}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 200px, 280px"
                      />
                      <div className={`absolute inset-0 transition-all duration-300 ${
                        isSelected
                          ? "bg-gradient-to-t from-[#221e10] via-[#221e10]/60 to-[#f1bf27]/15"
                          : "bg-gradient-to-t from-[#221e10]/90 via-[#221e10]/35 to-transparent"
                      }`} />

                      {isSelected && (
                        <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-[#f1bf27] flex items-center justify-center shadow-md">
                          <Check className="w-3 h-3 text-[#221e10]" />
                        </div>
                      )}

                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                        <p className="font-semibold text-white text-sm md:text-[0.9375rem] leading-tight">
                          {product.name}
                        </p>
                        <p className="text-white/50 text-xs mt-1">{product.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-7 flex justify-end">
                <button
                  onClick={goToDetails}
                  disabled={state.selectedProducts.length === 0}
                  className="brushed-gold inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-[#221e10] transition-all hover:opacity-90 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Continuar
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* ── Phase 1: Questions ────────────────────────────────────────── */}
          {state.phase === "detalhes" && currentProductKey && currentQuestion && (
            <div>
              {/* Context row */}
              <div className="mb-4 flex items-center gap-2 flex-wrap">
                {state.selectedProducts.length > 1 && state.selectedProducts.map((key, idx) => {
                  const isCurrent = idx === state.currentProductIndex;
                  return (
                    <span
                      key={key}
                      className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border transition-all ${
                        isCurrent
                          ? "border-[#f1bf27] bg-[#f1bf27]/10 text-[#584738]"
                          : idx < state.currentProductIndex
                          ? "border-[#B59E7D]/35 text-[#B59E7D]"
                          : "border-[#B59E7D]/15 text-[#584738]/25"
                      }`}
                    >
                      <span className="relative w-4 h-4 rounded-sm overflow-hidden inline-block shrink-0">
                        <Image src={PRODUCT_META[key].image} alt="" fill className="object-cover" sizes="16px" />
                      </span>
                      {PRODUCT_META[key].name}
                    </span>
                  );
                })}

                {state.selectedProducts.length === 1 && (
                  <span className="flex items-center gap-1.5 text-xs font-medium text-[#584738]/40">
                    <span className="relative w-4 h-4 rounded-sm overflow-hidden inline-block shrink-0">
                      <Image src={PRODUCT_META[currentProductKey].image} alt="" fill className="object-cover" sizes="16px" />
                    </span>
                    {PRODUCT_META[currentProductKey].name}
                  </span>
                )}

                <span className="text-[#B59E7D]/35 text-xs font-medium ml-auto shrink-0">
                  {state.currentQuestionIndex + 1} / {currentQuestions.length}
                </span>
              </div>

              {/* Progress bar */}
              <div className="mb-7 h-1 w-full rounded-full bg-[#B59E7D]/15 overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#f1bf27] transition-all duration-500"
                  style={{ width: `${progressPct + (1 / totalQuestions) * 100}%` }}
                />
              </div>

              {/* Question */}
              <h2 className="font-serif text-2xl md:text-[1.625rem] font-bold text-[#584738] leading-snug mb-6">
                {currentQuestion.label}
              </h2>

              {/* Options */}
              <div className="grid gap-3 sm:grid-cols-2">
                {currentQuestion.options.map(option => {
                  const isPresetSelected =
                    currentAnswer === option &&
                    (!currentQuestion.isMeasurement || measurementInput === "");
                  return (
                    <button
                      key={option}
                      onClick={() => handleOptionClick(option)}
                      className={`group flex items-center gap-4 rounded-xl border-[1.5px] px-5 py-4 text-left text-base font-medium transition-all duration-150 ${
                        isPresetSelected
                          ? "border-[#f1bf27] bg-[#f1bf27]/8 text-[#584738]"
                          : "border-[#B59E7D]/20 bg-white text-[#584738]/60 hover:border-[#B59E7D]/40 hover:text-[#584738]"
                      }`}
                    >
                      <span className={`h-5 w-5 rounded-full border-[1.5px] flex items-center justify-center shrink-0 transition-all duration-150 ${
                        isPresetSelected ? "border-[#f1bf27] bg-[#f1bf27]" : "border-[#B59E7D]/30"
                      }`}>
                        {isPresetSelected && <Check className="h-2.5 w-2.5 text-[#221e10]" />}
                      </span>
                      {option}
                    </button>
                  );
                })}
              </div>

              {/* Free-text measurement */}
              {currentQuestion.isMeasurement && (
                <div className="mt-3">
                  <input
                    type="text"
                    value={measurementInput}
                    onChange={e => handleMeasurementInput(e.target.value)}
                    placeholder="Ou informe a medida exata (ex: 2,40 × 1,80 m)"
                    className={`w-full rounded-xl border-[1.5px] bg-white px-5 py-4 text-base text-[#584738] placeholder:text-[#584738]/30 outline-none transition-all duration-150 ${
                      measurementInput
                        ? "border-[#f1bf27]"
                        : "border-[#B59E7D]/20 focus:border-[#B59E7D]/45"
                    }`}
                  />
                </div>
              )}

              {/* Navigation */}
              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={goBack}
                  className="inline-flex items-center gap-2 text-base font-medium text-[#584738]/40 hover:text-[#584738] transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Voltar
                </button>
                <button
                  onClick={goNext}
                  disabled={!currentAnswer}
                  className="brushed-gold inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-[#221e10] transition-all hover:opacity-90 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-30"
                >
                  {isLastQuestion ? "Ver resumo" : "Continuar"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* ── Phase 2: Summary ──────────────────────────────────────────── */}
          {state.phase === "resumo" && (
            <div>
              <div className="mb-6">
                <p className="text-[#f1bf27] font-semibold text-[10px] tracking-[0.22em] uppercase mb-2.5">
                  Passo 3 de 4
                </p>
                <h1 className="font-serif text-2xl md:text-[1.75rem] font-bold text-[#584738] leading-snug mb-1.5">
                  Seu resumo
                </h1>
                <p className="text-[#584738]/50 text-sm">
                  Confira suas escolhas antes de continuar.
                </p>
              </div>

              <div className="grid gap-2.5 md:grid-cols-2">
                {state.selectedProducts.map(key => {
                  const { name, image } = PRODUCT_META[key];
                  const productAnswers = state.answers[key] ?? {};
                  return (
                    <div key={key} className="rounded-xl bg-white border border-[#B59E7D]/15 overflow-hidden">
                      <div className="flex items-center gap-2.5 px-4 py-3 border-b border-[#B59E7D]/10">
                        <div className="relative h-6 w-6 overflow-hidden rounded-md shrink-0">
                          <Image src={image} alt={name} fill className="object-cover" sizes="24px" />
                        </div>
                        <p className="font-semibold text-[#584738] text-sm">{name}</p>
                      </div>
                      <dl className="px-4 py-3 space-y-1.5">
                        {QUESTIONS[key].map(q => {
                          const answer = productAnswers[q.key];
                          if (!answer) return null;
                          return (
                            <div key={q.key} className="flex items-baseline gap-2 text-sm">
                              <dt className="text-[#584738]/40 shrink-0 text-xs min-w-[5rem]">
                                {ANSWER_LABELS[q.key] ?? q.key}
                              </dt>
                              <dd className="font-medium text-[#584738] text-xs">{answer}</dd>
                            </div>
                          );
                        })}
                      </dl>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={goBack}
                  className="inline-flex items-center gap-2 text-base font-medium text-[#584738]/40 hover:text-[#584738] transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Editar respostas
                </button>
                <button
                  onClick={() => setState(prev => ({ ...prev, phase: "contato" }))}
                  className="brushed-gold inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-[#221e10] transition-all hover:opacity-90 hover:shadow-md"
                >
                  Continuar
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* ── Phase 3: Contact ──────────────────────────────────────────── */}
          {state.phase === "contato" && (
            <div>
              <div className="mb-6">
                <p className="text-[#f1bf27] font-semibold text-[10px] tracking-[0.22em] uppercase mb-2.5">
                  Passo 4 de 4
                </p>
                <h1 className="font-serif text-2xl md:text-[1.75rem] font-bold text-[#584738] leading-snug mb-1.5">
                  Quase lá!
                </h1>
                <p className="text-[#584738]/50 text-sm">
                  Como podemos te contatar para continuar o atendimento?
                </p>
              </div>

              <div className="space-y-4">
                {/* Nome */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#584738]/45 mb-2">
                    Nome completo <span className="text-[#f1bf27]">*</span>
                  </label>
                  <input
                    type="text"
                    value={contact.nome}
                    onChange={e => setContact(p => ({ ...p, nome: e.target.value }))}
                    placeholder="Seu nome"
                    className={`w-full rounded-xl border-[1.5px] bg-white px-5 py-4 text-base text-[#584738] placeholder:text-[#584738]/30 outline-none transition-all duration-150 ${
                      contact.nome
                        ? "border-[#f1bf27]"
                        : "border-[#B59E7D]/20 focus:border-[#B59E7D]/45"
                    }`}
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#584738]/45 mb-2">
                    WhatsApp com DDD <span className="text-[#f1bf27]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={contact.whatsapp}
                    onChange={e => setContact(p => ({ ...p, whatsapp: formatWhatsApp(e.target.value) }))}
                    placeholder="(48) 99999-9999"
                    className={`w-full rounded-xl border-[1.5px] bg-white px-5 py-4 text-base text-[#584738] placeholder:text-[#584738]/30 outline-none transition-all duration-150 ${
                      contact.whatsapp
                        ? "border-[#f1bf27]"
                        : "border-[#B59E7D]/20 focus:border-[#B59E7D]/45"
                    }`}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#584738]/45 mb-2">
                    E-mail <span className="text-[#f1bf27]">*</span>
                  </label>
                  <input
                    type="email"
                    value={contact.email}
                    onChange={e => setContact(p => ({ ...p, email: e.target.value }))}
                    placeholder="seu@email.com"
                    className={`w-full rounded-xl border-[1.5px] bg-white px-5 py-4 text-base text-[#584738] placeholder:text-[#584738]/30 outline-none transition-all duration-150 ${
                      contact.email && !emailValid
                        ? "border-red-400"
                        : contact.email && emailValid
                        ? "border-[#f1bf27]"
                        : "border-[#B59E7D]/20 focus:border-[#B59E7D]/45"
                    }`}
                  />
                  {contact.email && !emailValid && (
                    <p className="mt-1.5 text-sm text-red-500">Digite um e-mail válido</p>
                  )}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={goBack}
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 text-base font-medium text-[#584738]/40 hover:text-[#584738] transition-colors disabled:opacity-40"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Voltar
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!contactValid || isSubmitting}
                  className="brushed-gold inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-[#221e10] transition-all hover:opacity-90 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {isSubmitting ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Enviando…</>
                  ) : (
                    <>Enviar para WhatsApp <ArrowRight className="h-4 w-4" /></>
                  )}
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
