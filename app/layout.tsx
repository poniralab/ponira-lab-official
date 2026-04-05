import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://poniralab.com"),
  title: {
    default: "Ponira Lab — Design, Branding & Development",
    template: "%s | Ponira Lab",
  },
  description:
    "Agência boutique carioca com quatro frentes: Studio (design & branding), Creative (social media), Systems (desenvolvimento & automação) e Audiovisual (captação & motion). Onde a alma do design encontra o corpo da tecnologia.",
  keywords: [
    "agência de design",
    "branding",
    "identidade visual",
    "social media",
    "desenvolvimento web",
    "Next.js",
    "Rio de Janeiro",
    "Ponira Lab",
  ],
  authors: [{ name: "Ponira Lab", url: "https://poniralab.com" }],
  creator: "Ponira Lab",

  // ── Ícones ──────────────────────────────────────────────────────────────
  icons: {
    // Favicon padrão — use o ícone da palmeira
    icon: [
      { url: "/logo-icon.svg", type: "image/svg+xml" },
      { url: "/logo-icon.svg", sizes: "any" },
    ],
    // Ícone para iOS (Apple touch icon) — precisa de fundo, use o badge quadrado
    apple: [
      { url: "/logo-badge.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
    // Shortcut
    shortcut: "/logo-icon.svg",
  },

  // ── Open Graph ───────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://poniralab.com",
    siteName: "Ponira Lab",
    title: "Ponira Lab — Design, Branding & Development",
    description:
      "Agência boutique carioca com quatro frentes: Studio, Creative, Systems e Audiovisual. Corpo, Alma, Voz & Lente.",
    images: [
      {
        // Crie uma og-image usando o logo-full.svg sobre fundo #2B1B16
        // Dimensões ideais: 1200×630px
        // Ferramenta rápida: satori (vercel) ou simplesmente um PNG exportado do Illustrator
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ponira Lab — Design, Branding & Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ponira Lab — Design, Branding & Development",
    description:
      "Agência boutique carioca com quatro frentes: Studio, Creative, Systems e Audiovisual.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className="antialiased bg-ponira-brown">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
