import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "contato@poniralab.com";
const FROM_EMAIL = "Ponira Lab <contato@poniralab.com>";

export async function POST(req: NextRequest) {
  // Instancia dentro do handler para garantir que a env var existe em runtime
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { nome, email, whatsapp, tipoProjeto, orcamento } = body;

    if (!nome || !email || !tipoProjeto || !orcamento) {
      return NextResponse.json(
        { error: "Campos obrigatórios ausentes." },
        { status: 400 },
      );
    }

    // ── 1. Email interno para a Ponira Lab ──────────────────────────────
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Novo contato: ${nome} — ${tipoProjeto}`,
      html: internalEmailHtml({
        nome,
        email,
        whatsapp,
        tipoProjeto,
        orcamento,
      }),
    });

    // ── 2. Auto-reply para o visitante ──────────────────────────────────
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `Recebemos sua mensagem ✦ Ponira Lab`,
      html: autoReplyHtml({ nome }),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[/api/contato]", err);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}

// ─── TEMPLATE INTERNO ─────────────────────────────────────────────────────
function internalEmailHtml({
  nome,
  email,
  whatsapp,
  tipoProjeto,
  orcamento,
}: {
  nome: string;
  email: string;
  whatsapp: string;
  tipoProjeto: string;
  orcamento: string;
}) {
  return `
<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#2B1B16;font-family:'Arial',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#2B1B16;padding:40px 20px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#1a1008;border:1px solid rgba(198,141,7,0.15);border-radius:4px;overflow:hidden;">
        
        <!-- Header -->
        <tr>
          <td style="background:#C68D07;padding:24px 32px;">
            <p style="margin:0;color:#2B1B16;font-size:10px;font-weight:700;letter-spacing:4px;text-transform:uppercase;">
              Ponira Lab — Novo Contato
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <p style="margin:0 0 24px;color:rgba(245,245,245,0.5);font-size:11px;letter-spacing:2px;text-transform:uppercase;">
              Dados do Lead
            </p>

            ${field("Nome", nome)}
            ${field("Email", email)}
            ${field("WhatsApp", whatsapp || "Não informado")}
            ${field("Tipo de projeto", tipoProjeto)}
            ${field("Orçamento estimado", orcamento)}

            <!-- Reply button -->
            <table cellpadding="0" cellspacing="0" style="margin-top:32px;">
              <tr>
                <td style="background:#C68D07;border-radius:999px;padding:14px 28px;">
                  <a href="mailto:${email}" style="color:#2B1B16;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;text-decoration:none;">
                    Responder → ${email}
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 32px;border-top:1px solid rgba(245,245,245,0.05);">
            <p style="margin:0;color:rgba(245,245,245,0.15);font-size:9px;letter-spacing:2px;text-transform:uppercase;">
              Corpo: Maria · Voz &amp; Alma: Carol · poniralab.com
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function field(label: string, value: string) {
  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
      <tr>
        <td style="padding:14px 16px;background:rgba(255,255,255,0.03);border-left:2px solid #C68D07;border-radius:2px;">
          <p style="margin:0 0 4px;color:rgba(245,245,245,0.3);font-size:9px;letter-spacing:3px;text-transform:uppercase;">${label}</p>
          <p style="margin:0;color:#F5F5F5;font-size:14px;">${value}</p>
        </td>
      </tr>
    </table>`;
}

// ─── TEMPLATE AUTO-REPLY ──────────────────────────────────────────────────
function autoReplyHtml({ nome }: { nome: string }) {
  return `
<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#2B1B16;font-family:'Arial',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#2B1B16;padding:40px 20px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#1a1008;border:1px solid rgba(198,141,7,0.15);border-radius:4px;overflow:hidden;">

        <!-- Header -->
        <tr>
          <td style="background:#C68D07;padding:32px;">
            <p style="margin:0 0 6px;color:#2B1B16;font-size:22px;font-weight:900;font-style:italic;letter-spacing:-0.5px;">
              PONIRA.LAB
            </p>
            <p style="margin:0;color:rgba(43,27,22,0.6);font-size:9px;font-weight:700;letter-spacing:4px;text-transform:uppercase;">
              Corpo · Alma · Voz
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px 32px;">
            <p style="margin:0 0 8px;color:rgba(245,245,245,0.4);font-size:10px;letter-spacing:3px;text-transform:uppercase;">
              Olá, ${nome}
            </p>
            <h1 style="margin:0 0 24px;color:#F5F5F5;font-size:26px;font-weight:900;font-style:italic;line-height:1.2;">
              Sua mensagem chegou.
            </h1>
            <p style="margin:0 0 16px;color:rgba(245,245,245,0.6);font-size:14px;line-height:1.7;">
              Recebemos seu contato e já está em nossas mãos. Em breve uma das sócias entrará em contato — normalmente respondemos em até <strong style="color:#C68D07;">24h úteis.</strong>
            </p>
            <p style="margin:0 0 32px;color:rgba(245,245,245,0.6);font-size:14px;line-height:1.7;">
              Enquanto isso, você pode explorar nossos projetos e entender melhor como trabalhamos.
            </p>

            <!-- CTA -->
            <table cellpadding="0" cellspacing="0" style="margin-bottom:40px;">
              <tr>
                <td style="background:#C68D07;border-radius:999px;padding:14px 28px;">
                  <a href="https://poniralab.com/cases" style="color:#2B1B16;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;text-decoration:none;">
                    Ver nossos cases →
                  </a>
                </td>
              </tr>
            </table>

            <!-- Divider -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr><td style="border-top:1px solid rgba(245,245,245,0.05);"></td></tr>
            </table>

            <p style="margin:0;color:rgba(245,245,245,0.3);font-size:13px;line-height:1.6;">
              Com cuidado,<br/>
              <strong style="color:rgba(245,245,245,0.7);">Carol &amp; Maria</strong><br/>
              <span style="color:#C68D07;font-size:11px;letter-spacing:2px;text-transform:uppercase;">Ponira Lab</span>
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 32px;border-top:1px solid rgba(245,245,245,0.05);">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0;color:rgba(245,245,245,0.15);font-size:9px;letter-spacing:2px;text-transform:uppercase;">
                    Rio de Janeiro, RJ · Brasil
                  </p>
                </td>
                <td align="right">
                  <a href="https://poniralab.com" style="color:rgba(198,141,7,0.4);font-size:9px;letter-spacing:2px;text-transform:uppercase;text-decoration:none;">
                    poniralab.com
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
