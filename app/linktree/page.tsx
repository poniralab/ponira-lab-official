"use client";
import { motion } from "framer-motion";
import Grainient from "../../Grainient";

const links = [
  {
    id: "instagram",
    label: "Alma / Visual",
    title: "Instagram",
    description:
      "Onde o propósito ganha forma. Portfólio visual e essência estética.",
    url: "https://instagram.com/poniralab",
    bg: "bg-[#CD7F32]/20",
    border: "border-[#CD7F32]/60",
    text: "text-[#CD7F32]",
  },
  {
    id: "tiktok",
    label: "Voz / Dinâmico",
    title: "TikTok",
    description: "Insights rápidos e o movimento constante do laboratório.",
    url: "https://tiktok.com/@poniralab",
    bg: "bg-[#82933d]/20",
    border: "border-[#82933d]/60",
    text: "text-[#82933d]",
  },
  {
    id: "linkedin",
    label: "Corpo / Tecnologia",
    title: "LinkedIn",
    description:
      "Engenharia de software e o back-end que sustenta a autoridade.",
    url: "https://linkedin.com/company/poniralab",
    bg: "bg-[#FFB703]/15",
    border: "border-[#FFB703]/60",
    text: "text-[#FFB703]",
  },
  {
    id: "website",
    label: "Hub / Oficial",
    title: "Nosso Portal",
    description: "A experiência imersiva completa da Ponira Lab no Rio.",
    url: "https://poniralab.com",
    bg: "bg-white/5",
    border: "border-white/20",
    text: "text-white/60",
  },
  {
    id: "whatsapp",
    label: "Conexão Direta",
    title: "WhatsApp",
    description: "Inicie um projeto conosco. Atendimento direto.",
    url: "https://wa.me/5521998382038",
    bg: "bg-white/5",
    border: "border-white/20",
    text: "text-white/60",
  },
];

export default function Linktree() {
  return (
    <main className="relative min-h-screen bg-ponira-brown overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <Grainient color1="#5a5539" color2="#3b2e0f" color3="#9b682a" />
      </div>

      <div className="relative z-10 px-6 py-12 flex flex-col items-center">
        <header className="flex flex-col items-center mb-12 text-center">
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src="/logo-icon.svg"
            className="w-16 h-16 mb-6 opacity-90 drop-shadow-2xl"
          />
          <h1 className="text-3xl text-white font-display italic mb-2">
            Ponira Lab
          </h1>
          <p className="text-[10px] uppercase tracking-[0.4em] text-ponira-yellow font-bold">
            Corpo • Alma • Voz
          </p>
        </header>

        <section className="w-full max-w-md space-y-4">
          {links.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.15 }}
              className={`block group relative p-6 rounded-2xl border backdrop-blur-md transition-all duration-500 hover:scale-[1.02] ${link.bg} ${link.border}`}
            >
              <div className="flex flex-col">
                <span
                  className={`text-[9px] uppercase tracking-widest font-black mb-1 ${link.text}`}
                >
                  {link.label}
                </span>
                <h2 className="text-xl font-display italic text-white group-hover:translate-x-1 transition-transform">
                  {link.title}
                </h2>
                <p className="text-xs font-body font-light text-white/50 mt-1">
                  {link.description}
                </p>
              </div>
              <span
                className={`absolute top-6 right-6 text-lg transition-colors ${link.text}`}
              >
                ↗
              </span>
            </motion.a>
          ))}
        </section>

        <footer className="mt-16 text-center">
          <p className="text-[9px] uppercase tracking-widest text-white/40 font-light">
            Rio de Janeiro, RJ • Brasil
          </p>
        </footer>
      </div>
    </main>
  );
}
