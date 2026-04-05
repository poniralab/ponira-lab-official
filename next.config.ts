import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' va.vercel-scripts.com", // Permite Vercel Analytics
              "style-src 'self' 'unsafe-inline'", // Necessário para Tailwind e animações
              "img-src 'self' blob: data: *.gravatar.com mir-s3-cdn-cf.behance.net images.unsplash.com", // Fontes das imagens dos seus cases
              "media-src 'self' https://assets.mixkit.co https://commondatastorage.googleapis.com", // Permite carregamento de vídeos externos
              "connect-src 'self' *.gravatar.com", // Para sua busca de perfis no Gravatar
              "font-src 'self' data:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
          {
            key: "X-Frame-Options",
            value: "DENY", // Impede que o site seja colocado em iframes (anti-clickjacking)
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Impede que o navegador tente adivinhar o tipo de arquivo
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin", // Controla quais informações de origem são enviadas
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload", // Força HTTPS por 1 ano
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()", // Bloqueia acesso a sensores que a Ponira Lab não usa
          },
        ],
      },
    ];
  },
};

export default nextConfig;