import QuestionarioAtendimento from "@/components/sections/QuestionarioAtendimento";

export const metadata = {
  title: "Questionário de Atendimento | Stylo Decore",
  description:
    "Responda algumas perguntas rápidas e montamos uma mensagem personalizada para o WhatsApp com tudo o que você precisa.",
};

export default async function QuestionarioPage({ searchParams }: { searchParams: Promise<{ tipo?: string }> }) {
  const { tipo } = await searchParams;
  const tipoAtendimento = tipo === "premium" ? "premium" : "online";
  return <QuestionarioAtendimento tipo={tipoAtendimento} />;
}
