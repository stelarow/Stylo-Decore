import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactPayload {
  name: string;
  phone: string;
  email?: string;
  interests: string[];
  message: string;
}

function buildEmailHtml(data: ContactPayload): string {
  const now = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

  const interestsHtml =
    data.interests.length > 0
      ? data.interests
          .map(
            (i) =>
              `<span style="display:inline-block;margin:2px 4px 2px 0;padding:3px 10px;background:#fdf6e3;border:1px solid #e2d9c8;border-radius:20px;font-size:13px;color:#584738">${i}</span>`
          )
          .join("")
      : `<span style="color:#9e8e7a;font-size:13px">Não informado</span>`;

  const messageHtml = data.message
    ? `<p style="margin:0;padding:14px 16px;background:#faf8f3;border-left:3px solid #f1bf27;border-radius:0 8px 8px 0;font-size:14px;color:#333;line-height:1.6">${data.message.replace(/\n/g, "<br>")}</p>`
    : `<p style="color:#9e8e7a;font-size:13px">Nenhuma mensagem.</p>`;

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f5f0e8">
  <div style="max-width:600px;margin:32px auto;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08)">
    <div style="background:#f1bf27;padding:28px 32px">
      <h1 style="margin:0;font-size:22px;color:#221e10;font-weight:800">Nova Mensagem de Contato — Stylo Decore</h1>
    </div>
    <div style="padding:32px">

      <h2 style="margin:0 0 16px;font-size:16px;color:#584738;text-transform:uppercase;letter-spacing:.08em">Dados do Cliente</h2>
      <table style="border-collapse:collapse;font-size:14px;margin-bottom:28px">
        <tr>
          <td style="padding:5px 14px 5px 0;color:#584738;font-weight:600;white-space:nowrap">Nome:</td>
          <td style="padding:5px 0;color:#333">${data.name}</td>
        </tr>
        <tr>
          <td style="padding:5px 14px 5px 0;color:#584738;font-weight:600;white-space:nowrap">WhatsApp:</td>
          <td style="padding:5px 0;color:#333">${data.phone}</td>
        </tr>
        ${data.email ? `<tr>
          <td style="padding:5px 14px 5px 0;color:#584738;font-weight:600;white-space:nowrap">E-mail:</td>
          <td style="padding:5px 0;color:#333">${data.email}</td>
        </tr>` : ""}
      </table>

      <h2 style="margin:0 0 12px;font-size:16px;color:#584738;text-transform:uppercase;letter-spacing:.08em">Produtos de Interesse</h2>
      <div style="margin-bottom:28px">${interestsHtml}</div>

      <h2 style="margin:0 0 12px;font-size:16px;color:#584738;text-transform:uppercase;letter-spacing:.08em">Mensagem</h2>
      <div style="margin-bottom:8px">${messageHtml}</div>

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
    const data: ContactPayload = await req.json();

    if (!data.name?.trim() || !data.phone?.trim()) {
      return NextResponse.json({ ok: false, error: "Campos obrigatórios ausentes." }, { status: 400 });
    }

    const emailHtml = buildEmailHtml(data);

    await resend.emails.send({
      from: "Stylo Decore <onboarding@resend.dev>",
      to: process.env.EMAIL_TO!,
      subject: `Nova mensagem — ${data.name}`,
      html: emailHtml,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contato] Falha ao enviar email:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
