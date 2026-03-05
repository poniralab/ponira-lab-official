import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const hash = req.nextUrl.searchParams.get("hash");

  if (!hash || !/^[a-f0-9]{64}$/.test(hash)) {
    return NextResponse.json({ error: "Hash inválido." }, { status: 400 });
  }

  const apiKey = process.env.GRAVATAR_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "API key não configurada." }, { status: 500 });
  }

  try {
    const res = await fetch(`https://api.gravatar.com/v3/profiles/${hash}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
      },
      signal: AbortSignal.timeout(3000),
    });

    if (!res.ok) {
      // 404 = sem perfil Gravatar, retorna vazio sem erro
      return NextResponse.json(null, { status: 404 });
    }

    const data = await res.json();

    // Retorna apenas os campos necessários para o frontend
    return NextResponse.json({
      display_name: data.display_name ?? null,
      avatar_url: data.avatar_url ?? null,
      job_title: data.job_title ?? null,
      company: data.company ?? null,
      location: data.location ?? null,
    });
  } catch {
    return NextResponse.json(null, { status: 404 });
  }
}