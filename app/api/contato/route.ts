import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createHash } from "crypto";

const TO_EMAIL = "contato@poniralab.com";
const FROM_EMAIL = "Ponira Lab <contato@poniralab.com>";

// ─── Gravatar ─────────────────────────────────────────────────────────────────

interface GravatarProfile {
  display_name?: string;
  job_title?: string;
  company?: string;
  location?: string;
  description?: string;
  avatar_url?: string;
  verified_accounts?: { service_type: string; url: string }[];
}

async function fetchGravatarProfile(
  email: string,
): Promise<GravatarProfile | null> {
  const apiKey = process.env.GRAVATAR_API_KEY;
  if (!apiKey) return null;

  const hash = createHash("sha256").update(email.trim().toLowerCase()).digest("hex");

  try {
    const res = await fetch(`https://api.gravatar.com/v3/profiles/${hash}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
      },
      // Não bloqueia o envio se a API demorar
      signal: AbortSignal.timeout(3000),
    });

    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { nome, email, whatsapp, tipoProjeto, orcamento } = body;

    if (!nome || !email || !tipoProjeto) {
      return NextResponse.json(
        { error: "Campos obrigatórios ausentes." },
        { status: 400 },
      );
    }

    // Busca Gravatar em paralelo com nada — não bloqueia o fluxo
    const gravatar = await fetchGravatarProfile(email);

    // ── 1. Email interno ───────────────────────────────────────────────
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `✦ Novo lead: ${nome} — ${tipoProjeto}`,
      html: internalEmailHtml({
        nome,
        email,
        whatsapp,
        tipoProjeto,
        orcamento,
        gravatar,
      }),
    });

    // ── 2. Auto-reply para o visitante ─────────────────────────────────
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `Sua mensagem chegou ✦ Ponira Lab`,
      html: autoReplyHtml({ nome }),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[/api/contato]", err);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}

// ─── TEMPLATE INTERNO ─────────────────────────────────────────────────────────

function internalEmailHtml({
  nome,
  email,
  whatsapp,
  tipoProjeto,
  orcamento,
  gravatar,
}: {
  nome: string;
  email: string;
  whatsapp: string;
  tipoProjeto: string;
  orcamento: string;
  gravatar: GravatarProfile | null;
}) {
  const avatarBlock = gravatar?.avatar_url
    ? `<img src="${gravatar.avatar_url}?s=80"
            width="80" height="80"
            style="border-radius:50%;border:2px solid #C68D07;display:block;" />`
    : `<div style="width:80px;height:80px;border-radius:50%;background-color:rgba(198,141,7,0.15);border:2px solid rgba(198,141,7,0.3);display:flex;align-items:center;justify-content:center;">
         <span style="font-family:Georgia,serif;font-size:28px;font-style:italic;color:rgba(198,141,7,0.4);">✦</span>
       </div>`;

  const gravatarSection = gravatar
    ? `
    <!-- PERFIL GRAVATAR -->
    <tr>
      <td style="background-color:#2B1B16;padding:0 48px 40px;">
        <div style="height:1px;background-color:rgba(198,141,7,0.1);margin-bottom:32px;font-size:0;">&nbsp;</div>

        <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:8px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:rgba(198,141,7,0.5);">
          PERFIL PÚBLICO — GRAVATAR
        </p>

        <table cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding-right:20px;vertical-align:top;">
              ${avatarBlock}
            </td>
            <td style="vertical-align:top;">
              ${gravatar.display_name ? `<p style="margin:0 0 4px;font-family:Georgia,serif;font-size:16px;font-style:italic;color:#F5F5F5;">${gravatar.display_name}</p>` : ""}
              ${gravatar.job_title || gravatar.company
                ? `<p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:11px;font-weight:300;color:rgba(245,245,245,0.4);">
                    ${[gravatar.job_title, gravatar.company].filter(Boolean).join(" · ")}
                   </p>`
                : ""}
              ${gravatar.location
                ? `<p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:10px;color:rgba(245,245,245,0.25);">
                    📍 ${gravatar.location}
                   </p>`
                : ""}
              ${gravatar.description
                ? `<p style="margin:0;font-family:Arial,sans-serif;font-size:12px;font-weight:300;color:rgba(245,245,245,0.4);line-height:1.6;max-width:320px;">
                    ${gravatar.description}
                   </p>`
                : ""}
            </td>
          </tr>
        </table>

        ${gravatar.verified_accounts && gravatar.verified_accounts.length > 0
          ? `<div style="margin-top:16px;">
               ${gravatar.verified_accounts
                 .map(
                   (acc) =>
                     `<a href="${acc.url}"
                         style="display:inline-block;margin-right:8px;margin-bottom:4px;font-family:Arial,sans-serif;font-size:8px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(198,141,7,0.5);text-decoration:none;border:1px solid rgba(198,141,7,0.2);padding:4px 10px;border-radius:999px;">
                        ${acc.service_type} ↗
                      </a>`,
                 )
                 .join("")}
             </div>`
          : ""}
      </td>
    </tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Novo Lead — Ponira Lab</title>
</head>
<body style="margin:0;padding:0;background-color:#1a0f09;font-family:Georgia,serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#1a0f09;padding:48px 20px;">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0" style="max-width:580px;width:100%;">

        <!-- TOPO dourado -->
        <tr>
          <td style="background-color:#C68D07;height:2px;font-size:0;line-height:0;">&nbsp;</td>
        </tr>

        <!-- HEADER -->
        <tr>
          <td style="background-color:#2B1B16;padding:40px 48px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:22px;font-style:italic;font-weight:900;color:#C68D07;letter-spacing:-0.5px;">PONIRA.LAB</p>
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:8px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:rgba(245,245,245,0.25);">CORPO &nbsp;·&nbsp; ALMA &nbsp;·&nbsp; VOZ</p>
                </td>
                <td align="right" valign="top">
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:8px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:rgba(198,141,7,0.5);">NOVO LEAD</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- DIVISOR -->
        <tr>
          <td style="background-color:#2B1B16;padding:0 48px;">
            <div style="height:1px;background-color:rgba(198,141,7,0.15);font-size:0;">&nbsp;</div>
          </td>
        </tr>

        <!-- DADOS DO LEAD -->
        <tr>
          <td style="background-color:#2B1B16;padding:40px 48px 40px;">
            <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:9px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:rgba(245,245,245,0.3);">DEMONSTRAÇÃO DE INTERESSE</p>
            <p style="margin:0 0 36px;font-family:Georgia,serif;font-size:26px;font-style:italic;font-weight:900;color:#F5F5F5;line-height:1.2;">${nome} quer conversar.</p>

            ${fieldInternal("Nome completo", nome)}
            ${fieldInternal("Email", email)}
            ${fieldInternal("WhatsApp", whatsapp || "Não informado")}
            ${fieldInternal("Frente de interesse", tipoProjeto)}
            ${fieldInternal("Orçamento estimado", orcamento || "Não informado")}

            <!-- CTA -->
            <table cellpadding="0" cellspacing="0" style="margin-top:40px;">
              <tr>
                <td style="background-color:#C68D07;border-radius:999px;">
                  <a href="mailto:${email}?subject=Re: Seu contato na Ponira Lab"
                     style="display:inline-block;padding:14px 32px;font-family:Arial,sans-serif;font-size:9px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#2B1B16;text-decoration:none;">
                    RESPONDER A ${nome.split(" ")[0].toUpperCase()} →
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        ${gravatarSection}

        <!-- RODAPÉ -->
        <tr>
          <td style="background-color:#1a0f09;padding:24px 48px;border-top:1px solid rgba(198,141,7,0.1);">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:8px;letter-spacing:2px;text-transform:uppercase;color:rgba(245,245,245,0.12);">STUDIO &nbsp;·&nbsp; CREATIVE &nbsp;·&nbsp; SYSTEMS</p>
                </td>
                <td align="right">
                  <a href="https://poniralab.com" style="font-family:Arial,sans-serif;font-size:8px;letter-spacing:2px;text-transform:uppercase;color:rgba(198,141,7,0.3);text-decoration:none;">PONIRALAB.COM</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- LINHA DOURADA INFERIOR -->
        <tr>
          <td style="background-color:#C68D07;height:2px;font-size:0;line-height:0;">&nbsp;</td>
        </tr>

      </table>
    </td></tr>
  </table>

</body>
</html>`;
}

function fieldInternal(label: string, value: string) {
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
    <tr>
      <td style="padding:14px 20px;background-color:rgba(255,255,255,0.03);border-left:2px solid #C68D07;">
        <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:8px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:rgba(245,245,245,0.25);">${label}</p>
        <p style="margin:0;font-family:Georgia,serif;font-size:15px;color:#F5F5F5;">${value}</p>
      </td>
    </tr>
  </table>`;
}

// ─── TEMPLATE AUTO-REPLY ──────────────────────────────────────────────────────

function autoReplyHtml({ nome }: { nome: string }) {
  const firstName = nome.split(" ")[0];

  return `<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mensagem recebida — Ponira Lab</title>
</head>
<body style="margin:0;padding:0;background-color:#1a0f09;font-family:Georgia,serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#1a0f09;padding:48px 20px;">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0" style="max-width:580px;width:100%;">

        <tr>
          <td style="background-color:#C68D07;height:2px;font-size:0;line-height:0;">&nbsp;</td>
        </tr>

        <tr>
          <td style="background-color:#2B1B16;padding:48px 48px 40px;">
            <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:22px;font-style:italic;font-weight:900;color:#C68D07;letter-spacing:-0.5px;">PONIRA.LAB</p>
            <p style="margin:0 0 48px;font-family:Arial,sans-serif;font-size:8px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:rgba(245,245,245,0.2);">CORPO &nbsp;·&nbsp; ALMA &nbsp;·&nbsp; VOZ</p>

            <p style="margin:0 0 16px;font-family:Georgia,serif;font-size:36px;color:rgba(198,141,7,0.2);">✦</p>

            <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:9px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:rgba(245,245,245,0.3);">OLÁ, ${firstName.toUpperCase()}</p>
            <p style="margin:0;font-family:Georgia,serif;font-size:32px;font-style:italic;font-weight:900;color:#F5F5F5;line-height:1.15;">Sua mensagem<br/>chegou.</p>
          </td>
        </tr>

        <tr>
          <td style="background-color:#2B1B16;padding:0 48px;">
            <div style="height:1px;background-color:rgba(198,141,7,0.15);font-size:0;">&nbsp;</div>
          </td>
        </tr>

        <tr>
          <td style="background-color:#2B1B16;padding:40px 48px 48px;">
            <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:14px;font-weight:300;color:rgba(245,245,245,0.6);line-height:1.8;">
              Recebemos seu contato e já está em nossas mãos. Em breve uma das sócias vai chegar até você — normalmente respondemos em até
              <span style="color:#C68D07;font-weight:700;">24h úteis.</span>
            </p>
            <p style="margin:0 0 40px;font-family:Arial,sans-serif;font-size:14px;font-weight:300;color:rgba(245,245,245,0.4);line-height:1.8;">
              Enquanto isso, vale explorar o que já construímos. Cada case conta uma história real de intenção, processo e resultado.
            </p>

            <table cellpadding="0" cellspacing="0" style="margin-bottom:48px;">
              <tr>
                <td style="background-color:#C68D07;border-radius:999px;">
                  <a href="https://poniralab.com/cases"
                     style="display:inline-block;padding:14px 32px;font-family:Arial,sans-serif;font-size:9px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#2B1B16;text-decoration:none;">
                    VER NOSSOS CASES →
                  </a>
                </td>
              </tr>
            </table>

            <div style="height:1px;background-color:rgba(245,245,245,0.05);margin-bottom:32px;font-size:0;">&nbsp;</div>

            <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:8px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:rgba(245,245,245,0.2);">COM CUIDADO</p>
            <p style="margin:0 0 2px;font-family:Georgia,serif;font-size:16px;font-style:italic;color:rgba(245,245,245,0.8);">Carol &amp; Maria</p>
            <p style="margin:0;font-family:Arial,sans-serif;font-size:8px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#C68D07;">PONIRA LAB</p>
          </td>
        </tr>

        <tr>
          <td style="background-color:#1a0f09;padding:28px 48px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <a href="https://instagram.com/poniralab" style="font-family:Arial,sans-serif;font-size:8px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(198,141,7,0.4);text-decoration:none;">INSTAGRAM</a>
                  &nbsp;&nbsp;
                  <a href="https://wa.me/5521998382038" style="font-family:Arial,sans-serif;font-size:8px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(198,141,7,0.4);text-decoration:none;">WHATSAPP</a>
                  &nbsp;&nbsp;
                  <a href="https://poniralab.com" style="font-family:Arial,sans-serif;font-size:8px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(198,141,7,0.4);text-decoration:none;">SITE</a>
                </td>
                <td align="right">
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:8px;letter-spacing:2px;text-transform:uppercase;color:rgba(245,245,245,0.1);">RIO DE JANEIRO · BR</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="background-color:#C68D07;height:2px;font-size:0;line-height:0;">&nbsp;</td>
        </tr>

      </table>
    </td></tr>
  </table>

</body>
</html>`;
}