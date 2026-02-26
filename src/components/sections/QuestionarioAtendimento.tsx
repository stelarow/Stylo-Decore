"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Check, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

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
  { key: "cortinas",      image: "/images/cortinas/cortina-01.jpg",   name: "Cortinas",        desc: "Tecido, wave, blackout e mais" },
  { key: "persianas",     image: "/images/persianas/persiana-01.jpg", name: "Persianas",       desc: "Horizontal, vertical, rolô"   },
  { key: "papelDeParede", image: "/images/papel/papel-01.jpg",        name: "Papel de Parede", desc: "Breeze, Carving, Elegant"     },
  { key: "tapetes",       image: "/images/tapetes/tapete-01.jpg",     name: "Tapetes",         desc: "Sob medida, decorativo"       },
];

type Question = { label: string; key: string; options: string[]; isMeasurement?: boolean };

const QUESTIONS: Record<ProductKey, Question[]> = {
  cortinas: [
    { label: "Que tipo de cortina você busca?",          key: "tipo",       options: ["Tecido", "Prega Americana", "Ilhós", "Wave", "Blackout & Acústicas", "Não sei"] },
    { label: "Qual é o ambiente?",                        key: "ambiente",   options: ["Sala", "Quarto", "Escritório", "Varanda", "Outro", "Não sei"] },
    { label: "Qual é a prioridade principal?",            key: "prioridade", options: ["Privacidade", "Controle de luz", "Estética e decoração", "Isolamento acústico", "Não sei"] },
    { label: "Qual estilo combina com o seu espaço?",     key: "estilo",     options: ["Moderno / Contemporâneo", "Clássico / Tradicional", "Rústico / Natural", "Minimalista", "Não sei"] },
    { label: "Qual é o tamanho aproximado da janela?",    key: "tamanho",    options: ["Pequena (até 2m)", "Média (2–4m)", "Grande (acima de 4m)", "Não sei ainda"], isMeasurement: true },
    { label: "Qual é o seu prazo para este projeto?",     key: "prazo",      options: ["Urgente (menos de 1 mês)", "1 a 3 meses", "Mais de 3 meses", "Ainda não definido"] },
  ],
  persianas: [
    { label: "Que tipo de persiana você prefere?",        key: "tipo",        options: ["Horizontal", "Vertical", "Rolô", "Double Vision", "Não sei"] },
    { label: "Qual é o ambiente?",                        key: "ambiente",    options: ["Sala", "Quarto", "Escritório", "Banheiro", "Outro", "Não sei"] },
    { label: "Como prefere o controle de luz?",           key: "luz",         options: ["Bloqueio total (blackout)", "Meia-luz suave", "Difusão clara", "Depende do horário", "Não sei"] },
    { label: "Qual acionamento prefere?",                 key: "acionamento", options: ["Manual", "Motorizado", "Tanto faz", "Não sei ainda"] },
    { label: "Qual é o tamanho aproximado?",              key: "tamanho",     options: ["Pequena (até 1,5m)", "Média (1,5–3m)", "Grande (acima de 3m)", "Não sei ainda"], isMeasurement: true },
    { label: "Qual é o seu prazo para este projeto?",     key: "prazo",       options: ["Urgente (menos de 1 mês)", "1 a 3 meses", "Mais de 3 meses", "Ainda não definido"] },
  ],
  papelDeParede: [
    { label: "Qual coleção te interessa?",                key: "colecao",     options: ["Breeze", "Carving", "Elegant", "Ainda não sei"] },
    { label: "Qual é o ambiente?",                        key: "ambiente",    options: ["Sala", "Quarto", "Escritório", "Corredor", "Outro", "Não sei"] },
    { label: "Que visual você busca?",                    key: "visual",      options: ["Texturizado / Relevo", "Liso e sofisticado", "Estampado / Padrão", "Geométrico", "Não sei"] },
    { label: "A parede já possui papel de parede?",       key: "estadoParede",options: ["Sim, precisa remover", "Não, parede limpa", "Não sei", "Preciso de orientação"] },
    { label: "Qual é a área aproximada?",                 key: "area",        options: ["Até 10m²", "10–25m²", "Acima de 25m²", "Não sei ainda"], isMeasurement: true },
    { label: "Qual é o seu prazo para este projeto?",     key: "prazo",       options: ["Urgente (menos de 1 mês)", "1 a 3 meses", "Mais de 3 meses", "Ainda não definido"] },
  ],
  tapetes: [
    { label: "Que tipo de tapete você procura?",          key: "tipo",     options: ["Sob Medida", "Decorativo", "Passadeira", "Não sei"] },
    { label: "Qual é o ambiente?",                        key: "ambiente", options: ["Sala", "Quarto", "Corredor", "Área Externa", "Outro", "Não sei"] },
    { label: "Qual é o uso principal?",                   key: "uso",      options: ["Decorativo / Estético", "Conforto térmico", "Proteção do piso", "Delimitação do ambiente", "Não sei"] },
    { label: "Material preferido?",                       key: "material", options: ["Lã / Natural", "Sintético / Fácil limpeza", "Sisal / Fibra", "Sem preferência"] },
    { label: "Qual é o tamanho aproximado?",              key: "tamanho",  options: ["Pequeno (até 2m²)", "Médio (2–6m²)", "Grande (acima de 6m²)", "Não sei ainda"], isMeasurement: true },
    { label: "Qual é o seu prazo para este projeto?",     key: "prazo",    options: ["Urgente (menos de 1 mês)", "1 a 3 meses", "Mais de 3 meses", "Ainda não definido"] },
  ],
};

// ─── Option images (visual questions only) ────────────────────────────────────
// Options omitted from a map render as plain text cards in the same grid.

const OPTION_IMAGES: Record<string, Record<string, string>> = {
  colecao: {
    "Breeze":  "/images/papel-breeze.jpg",
    "Carving": "/images/papel-carving.jpg",
    "Elegant": "/images/papel-elegant.jpg",
    // "Ainda não sei" → text card
  },
  tipo: {
    // Cortinas
    "Tecido":               "/images/cortinas-tecido.jpg",
    "Prega Americana":      "/images/cortinas-prega-americana.jpg",
    "Ilhós":                "/images/cortinas-ilhos.jpg",
    "Wave":                 "/images/cortinas-wave.jpg",
    "Blackout & Acústicas": "/images/cortinas-blackout.jpg",
    // Persianas
    "Horizontal":    "/images/persianas-horizontais.jpg",
    "Vertical":      "/images/persianas-verticais.jpg",
    "Rolô":          "/images/persianas/rolo-01.jpg",
    "Double Vision": "/images/persianas-rolo-double-vision.jpg",
    // Tapetes
    "Sob Medida":  "/images/tapetes/tapete-01.jpg",
    "Decorativo":  "/images/tapetes/tapete-05.jpg",
    "Passadeira":  "/images/tapetes/tapete-10.jpg",
  },
  estilo: {
    "Moderno / Contemporâneo": "/images/cortinas/wave-01.jpg",
    "Clássico / Tradicional":  "/images/cortinas/prega-americana-desktop-01.jpg",
    "Rústico / Natural":       "/images/cortinas/cortina-05.jpg",
    "Minimalista":             "/images/cortinas/ilhos-01.jpg",
  },
};

// ─── Meta ─────────────────────────────────────────────────────────────────────

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

const INITIAL_STATE: QuizState = {
  phase: "produtos",
  selectedProducts: [],
  currentProductIndex: 0,
  currentQuestionIndex: 0,
  answers: {},
};

// Step bar height used for sticky left panel positioning
const STEP_BAR_H = 69; // px: py-5 (40) + h-7 (28) + border (1)

// ─── Component ────────────────────────────────────────────────────────────────

export default function QuestionarioAtendimento() {
  const [state, setState] = useState<QuizState>(INITIAL_STATE);
  const [measurementInput, setMeasurementInput] = useState("");
  const [contact, setContact] = useState<ContactData>({ nome: "", whatsapp: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [pendingAdvance, setPendingAdvance] = useState(false);

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

  const emailValid   = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email);
  const contactValid = contact.nome.trim().length > 0 &&
    contact.whatsapp.replace(/\D/g, "").length >= 10 && emailValid;

  const currentStep       = phaseToStep(state.phase);
  const questionImageMap  = currentQuestion ? (OPTION_IMAGES[currentQuestion.key] ?? {}) : {};
  const questionHasImages = currentQuestion
    ? currentQuestion.options.some(opt => questionImageMap[opt] !== undefined)
    : false;
  const optionCount = currentQuestion?.options.length ?? 0;
  const gridClass =
    optionCount <= 4 ? "grid-cols-2" :
    optionCount === 5 ? "grid-cols-2 sm:grid-cols-6" :
    "grid-cols-2 sm:grid-cols-3";

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
    setPendingAdvance(false);
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

  // Auto-advance: keep ref always pointing to latest goNext (avoids stale closure)
  const goNextRef = useRef(goNext);
  useEffect(() => { goNextRef.current = goNext; });

  // Auto-advance after short delay for non-measurement questions (Typeform-style)
  useEffect(() => {
    if (!pendingAdvance) return;
    const timer = setTimeout(() => {
      setPendingAdvance(false);
      goNextRef.current();
    }, 380);
    return () => clearTimeout(timer);
  }, [pendingAdvance]);

  const handleOptionClick = (option: string) => {
    setAnswer(option);
    setMeasurementInput("");
    if (currentQuestion && !currentQuestion.isMeasurement) {
      setPendingAdvance(true);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/orcamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: state.answers, selectedProducts: state.selectedProducts, contact }),
      });
      if (!res.ok) throw new Error();
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#F1EADA] flex flex-col pt-20">
      <style>{`
        @keyframes quizSlideIn {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0);    }
        }
        .quiz-slide-in { animation: quizSlideIn 0.30s cubic-bezier(0.22, 1, 0.36, 1); }
      `}</style>

      {/* ── Step bar ──────────────────────────────────────────────────────── */}
      <div className="sm:hidden sticky top-20 z-20 w-full bg-[#F1EADA]/96 backdrop-blur-sm border-b border-[#B59E7D]/18">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 py-3.5 sm:py-5">
          <div className="flex items-center gap-1">
            {STEPS.map((step, idx) => {
              const displayStep = submitStatus === "success" ? 5 : currentStep;
              const isCompleted = displayStep > step.id;
              const isCurrent   = displayStep === step.id;
              const isLast      = idx === STEPS.length - 1;
              return (
                <div key={step.id} className="flex items-center flex-1 last:flex-none">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold border-[1.5px] transition-all duration-300 ${
                      isCompleted
                        ? "bg-[#f1bf27] border-[#f1bf27] text-[#221e10]"
                        : isCurrent
                        ? "bg-transparent border-[#f1bf27] text-[#584738]"
                        : "bg-transparent border-[#B59E7D]/25 text-[#B59E7D]/40"
                    }`}>
                      {isCompleted ? <Check className="w-3.5 h-3.5" /> : step.id}
                    </div>
                    <span className={`text-[11px] font-semibold uppercase tracking-widest transition-colors hidden sm:block ${
                      isCurrent ? "text-[#584738]" : isCompleted ? "text-[#f1bf27]" : "text-[#B59E7D]/35"
                    }`}>
                      {step.label}
                    </span>
                  </div>
                  {!isLast && (
                    <div className="flex-1 mx-4 h-px bg-[#B59E7D]/15 relative overflow-hidden">
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

      {/* ════════════════════════════════════════════════════════════════════
          Phase: detalhes — centered layout
      ════════════════════════════════════════════════════════════════════ */}
      {state.phase === "detalhes" && currentProductKey && currentQuestion && (
        <div className="flex-1 flex items-start justify-center px-4 sm:px-8 pt-5 pb-28 sm:py-8 lg:pt-10 lg:pb-16">
          <div
            key={`${state.currentProductIndex}-${state.currentQuestionIndex}`}
            className="w-full max-w-5xl quiz-slide-in"
          >
              {/* Context row */}
              <div className="mb-5 flex items-center gap-2 flex-wrap">
                {state.selectedProducts.length > 1 && state.selectedProducts.map((key, idx) => {
                  const isCurrent = idx === state.currentProductIndex;
                  return (
                    <span
                      key={key}
                      className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
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
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-[#584738]/45">
                    <span className="relative w-4 h-4 rounded-sm overflow-hidden inline-block shrink-0">
                      <Image src={PRODUCT_META[currentProductKey].image} alt="" fill className="object-cover" sizes="16px" />
                    </span>
                    {PRODUCT_META[currentProductKey].name}
                  </span>
                )}
                <span className="text-[#B59E7D]/40 text-xs font-semibold ml-auto shrink-0">
                  {state.currentQuestionIndex + 1} / {currentQuestions.length}
                </span>
              </div>

              {/* Progress bar */}
              <div className="mb-6 sm:mb-8 h-1.5 w-full rounded-full bg-[#B59E7D]/15 overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#f1bf27] transition-all duration-500"
                  style={{ width: `${progressPct + (1 / totalQuestions) * 100}%` }}
                />
              </div>

              {/* Question */}
              <h2 className="font-serif text-[1.625rem] sm:text-3xl lg:text-[2.25rem] xl:text-[2.625rem] font-bold text-[#584738] leading-snug mb-5 sm:mb-8">
                {currentQuestion.label}
              </h2>

              {/* ── Options: image grid (mixed image + text cards) ── */}
              {questionHasImages ? (
                <div className={`grid gap-2.5 ${gridClass}`}>
                  {currentQuestion.options.map((option, idx) => {
                    const imgSrc     = questionImageMap[option];
                    const isSelected = currentAnswer === option && measurementInput === "";
                    // Mobile (grid-cols-2): last item spans 2 cols if odd count
                    // Desktop (sm:grid-cols-6): first 3 → col-span-2, last 2 → col-span-3
                    const colSpanClass =
                      optionCount === 5
                        ? idx === 4
                          ? "col-span-2 sm:col-span-3"
                          : idx < 3
                          ? "sm:col-span-2"
                          : "sm:col-span-3"
                        : "";

                    // ── Text-only card (no image mapped) ──
                    if (!imgSrc) {
                      return (
                        <button
                          key={option}
                          onClick={() => handleOptionClick(option)}
                          className={`group flex items-center justify-center gap-2.5 h-14 sm:h-20 self-start rounded-xl border-[1.5px] px-3 sm:px-4 py-2 sm:py-3 text-center font-semibold transition-all duration-150 ${
                            isSelected
                              ? "border-[#f1bf27] bg-[#f1bf27]/10 text-[#584738] shadow-sm scale-[1.01]"
                              : "border-[#B59E7D]/22 bg-[#EDE8DC] text-[#584738]/50 hover:border-[#B59E7D]/45 hover:bg-white hover:text-[#584738] hover:shadow-sm"
                          } ${colSpanClass}`}
                        >
                          {isSelected
                            ? <Check className="h-4 w-4 text-[#f1bf27] shrink-0" />
                            : <span className="text-[#B59E7D]/45 text-lg leading-none font-light">?</span>
                          }
                          <span className={optionCount >= 5 ? "text-[0.75rem] sm:text-[0.8125rem]" : "text-[0.8125rem] sm:text-[0.9375rem]"}>{option}</span>
                        </button>
                      );
                    }

                    // ── Image card ──
                    return (
                      <button
                        key={option}
                        onClick={() => handleOptionClick(option)}
                        className={`group relative h-40 sm:h-64 overflow-hidden rounded-xl text-left transition-all duration-200 ${
                          isSelected
                            ? "ring-2 ring-[#f1bf27] ring-offset-2 ring-offset-[#F1EADA] shadow-lg scale-[1.01]"
                            : "hover:shadow-xl hover:scale-[1.015]"
                        } ${colSpanClass}`}
                      >
                        <Image
                          src={imgSrc}
                          alt={option}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes={optionCount >= 5
                            ? "(max-width: 768px) 33vw, (max-width: 1280px) 22vw, 18vw"
                            : "(max-width: 768px) 50vw, (max-width: 1280px) 28vw, 24vw"
                          }
                        />
                        <div className={`absolute inset-0 transition-all duration-200 ${
                          isSelected
                            ? "bg-gradient-to-t from-[#221e10] via-[#221e10]/50 to-[#f1bf27]/20"
                            : "bg-gradient-to-t from-[#221e10]/88 via-[#221e10]/25 to-transparent"
                        }`} />
                        {isSelected && (
                          <div className={`absolute top-2.5 right-2.5 rounded-full bg-[#f1bf27] flex items-center justify-center shadow-md ${optionCount >= 5 ? "w-6 h-6" : "w-7 h-7"}`}>
                            <Check className={optionCount >= 5 ? "w-3 h-3 text-[#221e10]" : "w-3.5 h-3.5 text-[#221e10]"} />
                          </div>
                        )}
                        <div className={`absolute bottom-0 left-0 right-0 ${optionCount >= 5 ? "px-2.5 sm:px-3.5 py-2 sm:py-3" : "px-3 sm:px-5 py-2.5 sm:py-4"}`}>
                          <p className={`font-semibold text-white leading-tight ${optionCount >= 5 ? "text-[0.75rem] sm:text-[0.8125rem]" : "text-[0.8125rem] sm:text-[0.9375rem]"}`}>{option}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              ) : (
                /* ── Options: text cards ── */
                <div className="grid gap-4 sm:grid-cols-2">
                  {currentQuestion.options.map((option, idx) => {
                    const isPresetSelected =
                      currentAnswer === option &&
                      (!currentQuestion.isMeasurement || measurementInput === "");
                    const isLastOdd =
                      idx === currentQuestion.options.length - 1 &&
                      currentQuestion.options.length % 2 !== 0;
                    return (
                      <button
                        key={option}
                        onClick={() => handleOptionClick(option)}
                        className={`group flex items-center gap-3 sm:gap-5 rounded-2xl border-[1.5px] px-4 sm:px-7 py-4 sm:py-6 text-left text-[0.9375rem] sm:text-[1.0625rem] font-medium transition-all duration-150 ${
                          isPresetSelected
                            ? "border-[#f1bf27] bg-[#f1bf27]/8 text-[#584738] shadow-sm"
                            : "border-[#B59E7D]/20 bg-white text-[#584738]/55 hover:border-[#B59E7D]/40 hover:text-[#584738] hover:shadow-sm"
                        } ${isLastOdd ? "sm:col-span-2" : ""}`}
                      >
                        <span className={`h-5 w-5 rounded-full border-[1.5px] flex items-center justify-center shrink-0 transition-all duration-150 ${
                          isPresetSelected
                            ? "border-[#f1bf27] bg-[#f1bf27]"
                            : "border-[#B59E7D]/30 group-hover:border-[#B59E7D]/55"
                        }`}>
                          {isPresetSelected && <Check className="h-2.5 w-2.5 text-[#221e10]" />}
                        </span>
                        <span>{option}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Free-text measurement input */}
              {currentQuestion.isMeasurement && (
                <div className="mt-3">
                  <input
                    type="text"
                    value={measurementInput}
                    onChange={e => handleMeasurementInput(e.target.value)}
                    placeholder="Ou informe a medida exata (ex: 2,40 × 1,80 m)"
                    className={`w-full rounded-2xl border-[1.5px] bg-white px-4 sm:px-6 py-4 sm:py-5 text-base text-[#584738] placeholder:text-[#584738]/30 outline-none transition-all duration-150 ${
                      measurementInput
                        ? "border-[#f1bf27]"
                        : "border-[#B59E7D]/20 focus:border-[#B59E7D]/45"
                    }`}
                  />
                </div>
              )}

              {/* Navigation */}
              <div className="mt-7 sm:mt-10 flex items-center justify-between">
                <button
                  onClick={goBack}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#584738]/35 hover:text-[#584738] transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Voltar
                </button>
                <button
                  onClick={() => { setPendingAdvance(false); goNext(); }}
                  disabled={!currentAnswer}
                  className={`brushed-gold inline-flex items-center gap-2 sm:gap-2.5 rounded-full px-6 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[#221e10] transition-all hover:opacity-90 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-30 ${pendingAdvance ? "opacity-80" : ""}`}
                >
                  {pendingAdvance ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-[#221e10]/30 border-t-[#221e10] animate-spin" />
                      {isLastQuestion ? "Ver resumo" : "Próximo"}
                    </>
                  ) : (
                    <>
                      {isLastQuestion ? "Ver resumo" : "Continuar"}
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════════════════
          Other phases — centered layout
      ════════════════════════════════════════════════════════════════════ */}
      {state.phase !== "detalhes" && (
        <div className="flex-1 flex items-start justify-center px-4 sm:px-8 pt-7 pb-28 sm:py-12 lg:pt-12 lg:pb-20">
          <div className="w-full max-w-5xl">

            {/* ── Phase 0: Product selection ────────────────────────────── */}
            {state.phase === "produtos" && (
              <div>
                <div className="mb-6 sm:mb-10">
                  <p className="text-[#f1bf27] font-semibold text-[11px] tracking-[0.25em] uppercase mb-3">
                    Passo 1 de 4
                  </p>
                  <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#584738] leading-snug mb-2">
                    O que você está buscando?
                  </h1>
                  <p className="text-[#584738]/50 text-sm sm:text-base lg:text-[1.0625rem]">
                    Selecione um ou mais produtos para personalizar sua consulta.
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                  {PRODUCTS.map(product => {
                    const isSelected = state.selectedProducts.includes(product.key);
                    return (
                      <button
                        key={product.key}
                        onClick={() => toggleProduct(product.key)}
                        className={`group relative overflow-hidden rounded-2xl text-left transition-all duration-300 ${
                          isSelected
                            ? "ring-2 ring-[#f1bf27] ring-offset-2 ring-offset-[#F1EADA] shadow-xl scale-[1.01]"
                            : "hover:scale-[1.02] hover:shadow-xl"
                        }`}
                        style={{ aspectRatio: "3/4" }}
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className={`absolute inset-0 transition-all duration-300 ${
                          isSelected
                            ? "bg-gradient-to-t from-[#221e10] via-[#221e10]/60 to-[#f1bf27]/15"
                            : "bg-gradient-to-t from-[#221e10]/90 via-[#221e10]/30 to-transparent"
                        }`} />
                        {isSelected && (
                          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#f1bf27] flex items-center justify-center shadow-lg">
                            <Check className="w-4 h-4 text-[#221e10]" />
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="font-semibold text-white text-lg leading-tight">{product.name}</p>
                          <p className="text-white/50 text-sm mt-1.5">{product.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-7 sm:mt-10 flex justify-end">
                  <button
                    onClick={goToDetails}
                    disabled={state.selectedProducts.length === 0}
                    className="brushed-gold inline-flex items-center gap-2 sm:gap-2.5 rounded-full px-6 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[#221e10] transition-all hover:opacity-90 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Continuar
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* ── Phase 2: Summary ──────────────────────────────────────── */}
            {state.phase === "resumo" && (
              <div>
                {/* Header row */}
                <div className="mb-7 sm:mb-10 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[#f1bf27] font-semibold text-[11px] tracking-[0.25em] uppercase mb-3">
                      Passo 3 de 4
                    </p>
                    <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#584738] leading-snug">
                      Seu resumo
                    </h1>
                    <p className="text-[#584738]/45 text-sm sm:text-base mt-2">
                      Tudo pronto. Confira antes de continuar.
                    </p>
                  </div>
                  <span className="shrink-0 text-[#B59E7D]/40 text-sm font-medium hidden sm:block">
                    {state.selectedProducts.length} {state.selectedProducts.length === 1 ? "produto" : "produtos"}
                  </span>
                </div>

                {/* Cards */}
                <div className={`grid gap-6 ${state.selectedProducts.length > 1 ? "lg:grid-cols-2" : "max-w-2xl"}`}>
                  {state.selectedProducts.map(key => {
                    const { name, image } = PRODUCT_META[key];
                    const productAnswers = state.answers[key] ?? {};
                    const filledAnswers = QUESTIONS[key].filter(q => productAnswers[q.key]);
                    return (
                      <div key={key} className="rounded-3xl bg-white overflow-hidden shadow-sm border border-[#B59E7D]/12">
                        {/* Image header */}
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#221e10]/80 via-[#221e10]/20 to-transparent" />
                          {/* Pill count */}
                          <div className="absolute top-4 right-4 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
                            <span className="text-white text-[11px] font-semibold">
                              {filledAnswers.length} respostas
                            </span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 px-7 pb-5">
                            <p className="font-serif text-xl font-bold text-white leading-tight">{name}</p>
                          </div>
                        </div>

                        {/* Answers grid */}
                        <div className="px-4 sm:px-7 py-4 sm:py-6">
                          <dl className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-5">
                            {QUESTIONS[key].map(q => {
                              const answer = productAnswers[q.key];
                              if (!answer) return null;
                              const optionImg = OPTION_IMAGES[q.key]?.[answer];
                              return (
                                <div key={q.key} className="flex flex-col gap-1.5 min-w-0">
                                  <dt className="text-[#584738]/38 text-[9.5px] font-bold uppercase tracking-[0.12em]">
                                    {ANSWER_LABELS[q.key] ?? q.key}
                                  </dt>
                                  <dd className="flex items-center gap-2 min-w-0">
                                    {optionImg && (
                                      <span className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-[#B59E7D]/20">
                                        <Image src={optionImg} alt="" fill className="object-cover" sizes="32px" />
                                      </span>
                                    )}
                                    <span className="font-semibold text-[#584738] text-sm leading-snug truncate">
                                      {answer}
                                    </span>
                                  </dd>
                                </div>
                              );
                            })}
                          </dl>
                        </div>

                        {/* Card footer */}
                        <div className="px-4 sm:px-7 pb-4 sm:pb-5">
                          <button
                            onClick={goBack}
                            className="text-[11px] font-semibold text-[#B59E7D] hover:text-[#584738] uppercase tracking-wider transition-colors"
                          >
                            Editar respostas
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-7 sm:mt-10 flex items-center justify-between">
                  <button
                    onClick={goBack}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#584738]/35 hover:text-[#584738] transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Voltar
                  </button>
                  <button
                    onClick={() => setState(prev => ({ ...prev, phase: "contato" }))}
                    className="brushed-gold inline-flex items-center gap-2 sm:gap-2.5 rounded-full px-6 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[#221e10] transition-all hover:opacity-90 hover:shadow-lg"
                  >
                    Continuar
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* ── Phase 3: Contact ──────────────────────────────────────── */}
            {state.phase === "contato" && (
              <div className="max-w-xl mx-auto">

                {/* ── Tela de sucesso ── */}
                {submitStatus === "success" ? (
                  <div className="py-12 sm:py-16 flex flex-col items-center text-center gap-5">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#584738] mb-2">
                        Mensagem enviada!
                      </h2>
                      <p className="text-[#584738]/55 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                        Recebemos sua solicitação, {contact.nome.split(" ")[0]}.<br />
                        Em breve entraremos em contato pelo WhatsApp ou{" "}
                        <span className="whitespace-nowrap">e-mail.</span>
                      </p>
                    </div>
                    <Link
                      href="/"
                      className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#B59E7D]/40 px-6 py-2.5 text-sm font-semibold text-[#584738] transition-all hover:border-[#f1bf27] hover:text-[#f1bf27]"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Voltar à página inicial
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="mb-6 sm:mb-8">
                      <p className="text-[#f1bf27] font-semibold text-[11px] tracking-[0.25em] uppercase mb-3">
                        Passo 4 de 4
                      </p>
                      <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#584738] leading-snug mb-2">
                        Quase lá!
                      </h1>
                      <p className="text-[#584738]/50 text-sm sm:text-base">
                        Como podemos te contatar para continuar o atendimento?
                      </p>
                    </div>

                    {/* Banner de erro */}
                    {submitStatus === "error" && (
                      <div className="mb-5 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3.5">
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                        <div>
                          <p className="text-sm font-semibold text-red-800">Erro ao enviar</p>
                          <p className="mt-0.5 text-xs text-red-700">
                            Não foi possível enviar. Tente novamente ou fale pelo WhatsApp.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="space-y-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#584738]/45 mb-2.5">
                          Nome completo <span className="text-[#f1bf27]">*</span>
                        </label>
                        <input
                          type="text"
                          value={contact.nome}
                          onChange={e => setContact(p => ({ ...p, nome: e.target.value }))}
                          placeholder="Seu nome"
                          disabled={isSubmitting}
                          className={`w-full rounded-2xl border-[1.5px] bg-white px-5 sm:px-7 py-4 sm:py-5 text-base text-[#584738] placeholder:text-[#584738]/30 outline-none transition-all duration-150 disabled:opacity-60 ${
                            contact.nome
                              ? "border-[#f1bf27]"
                              : "border-[#B59E7D]/20 focus:border-[#B59E7D]/45"
                          }`}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#584738]/45 mb-2.5">
                          WhatsApp com DDD <span className="text-[#f1bf27]">*</span>
                        </label>
                        <input
                          type="tel"
                          value={contact.whatsapp}
                          onChange={e => setContact(p => ({ ...p, whatsapp: formatWhatsApp(e.target.value) }))}
                          placeholder="(48) 99999-9999"
                          disabled={isSubmitting}
                          className={`w-full rounded-2xl border-[1.5px] bg-white px-5 sm:px-7 py-4 sm:py-5 text-base text-[#584738] placeholder:text-[#584738]/30 outline-none transition-all duration-150 disabled:opacity-60 ${
                            contact.whatsapp
                              ? "border-[#f1bf27]"
                              : "border-[#B59E7D]/20 focus:border-[#B59E7D]/45"
                          }`}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#584738]/45 mb-2.5">
                          E-mail <span className="text-[#f1bf27]">*</span>
                        </label>
                        <input
                          type="email"
                          value={contact.email}
                          onChange={e => setContact(p => ({ ...p, email: e.target.value }))}
                          placeholder="seu@email.com"
                          disabled={isSubmitting}
                          className={`w-full rounded-2xl border-[1.5px] bg-white px-5 sm:px-7 py-4 sm:py-5 text-base text-[#584738] placeholder:text-[#584738]/30 outline-none transition-all duration-150 disabled:opacity-60 ${
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

                    <div className="mt-7 sm:mt-10 flex items-center justify-between">
                      <button
                        onClick={goBack}
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#584738]/35 hover:text-[#584738] transition-colors disabled:opacity-40"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Voltar
                      </button>
                      <button
                        onClick={handleSubmit}
                        disabled={!contactValid || isSubmitting}
                        className="brushed-gold inline-flex items-center justify-center gap-2 sm:gap-2.5 rounded-full px-5 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[#221e10] transition-all hover:opacity-90 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        {isSubmitting ? (
                          <><Loader2 className="h-4 w-4 animate-spin" /> Enviando…</>
                        ) : (
                          <>Enviar <ArrowRight className="h-4 w-4" /></>
                        )}
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}
