import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

type ProductKey = "cortinas" | "persianas" | "papelDeParede" | "tapetes";

interface ContactData {
  nome: string;
  whatsapp: string;
  email: string;
}

const PRODUCT_NAMES: Record<ProductKey, string> = {
  cortinas: "Cortinas",
  persianas: "Persianas",
  papelDeParede: "Papel de Parede",
  tapetes: "Tapetes",
};

const ANSWER_LABELS: Record<string, string> = {
  tipo: "Tipo",
  ambiente: "Ambiente",
  tamanho: "Tamanho",
  colecao: "Coleção",
  area: "Área",
};

function buildEmailHtml(
  answers: Partial<Record<ProductKey, Record<string, string>>>,
  selectedProducts: ProductKey[],
  contact: ContactData
): string {
  const now = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

  const productsHtml = selectedProducts
    .map((key) => {
      const productAnswers = answers[key] ?? {};
      const rows = Object.entries(productAnswers)
        .map(
          ([k, v]) =>
            `<tr><td style="padding:4px 12px 4px 0;color:#584738;font-weight:600;white-space:nowrap">${ANSWER_LABELS[k] ?? k}:</td><td style="padding:4px 0;color:#333">${v}</td></tr>`
        )
        .join("");

      return `
        <div style="margin-bottom:16px;padding:16px;border:1px solid #e2d9c8;border-radius:10px;background:#faf8f3">
          <p style="margin:0 0 10px;font-size:15px;font-weight:700;color:#584738">${PRODUCT_NAMES[key]}</p>
          <table style="border-collapse:collapse;font-size:14px">${rows}</table>
        </div>`;
    })
    .join("");

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f5f0e8">
  <div style="max-width:600px;margin:32px auto;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08)">
    <div style="background:#f1bf27;padding:28px 32px">
      <h1 style="margin:0;font-size:22px;color:#221e10;font-weight:800">Novo Orçamento — Stylo Decore</h1>
    </div>
    <div style="padding:32px">
      <h2 style="margin:0 0 16px;font-size:16px;color:#584738;text-transform:uppercase;letter-spacing:.08em">Dados do Cliente</h2>
      <table style="border-collapse:collapse;font-size:14px;margin-bottom:28px">
        <tr><td style="padding:4px 12px 4px 0;color:#584738;font-weight:600">Nome:</td><td style="padding:4px 0;color:#333">${contact.nome}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#584738;font-weight:600">WhatsApp:</td><td style="padding:4px 0;color:#333">${contact.whatsapp}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#584738;font-weight:600">E-mail:</td><td style="padding:4px 0;color:#333">${contact.email}</td></tr>
      </table>

      <h2 style="margin:0 0 16px;font-size:16px;color:#584738;text-transform:uppercase;letter-spacing:.08em">Produtos de Interesse</h2>
      ${productsHtml}
    </div>
    <div style="padding:16px 32px;background:#f5f0e8;font-size:12px;color:#9e8e7a;text-align:right">
      Enviado em ${now}
    </div>
  </div>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const { answers, selectedProducts, contact } = await req.json();

    const emailHtml = buildEmailHtml(answers, selectedProducts, contact);

    await resend.emails.send({
      from: "Stylo Decore <no-reply@stylodecore.com.br>",
      to: process.env.EMAIL_TO!,
      subject: `Novo orçamento — ${contact.nome}`,
      html: emailHtml,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[orcamento] Falha ao enviar email:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
