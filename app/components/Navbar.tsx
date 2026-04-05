"use client";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const BASE_URL = "https://poniralab.com";

const rawNavLinks = [
  { name: "Labs", href: "/#labs" },
  { name: "Artefatos", href: "/#showcase" },
  { name: "Pacotes", href: "/#pacotes" },
  { name: "Sócias", href: "/#founders" },
  { name: "Cases", href: "/cases" },
  { name: "Contato", href: "/contato" },
];

function useIsSubdomain() {
  const [isSubdomain] = useState(() => {
    if (typeof window === "undefined") return false;
    const parts = window.location.hostname.split(".");
    return parts.length > 2 && parts[0] !== "www";
  });
  return isSubdomain;
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [whatsAppOpen, setWhatsAppOpen] = useState(false);
  const isSubdomain = useIsSubdomain();
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
    // Exibir o botão Voltar ao Topo logo ao sair da Hero Section (aprox. 600px/1 tela)
    setShowBackToTop(latest > 600);
  });

  const navLinks = rawNavLinks.map((link) => ({
    ...link,
    href: isSubdomain ? `${BASE_URL}${link.href}` : link.href,
  }));

  const homeHref = isSubdomain ? BASE_URL : "/";

  return (
    <>
      {/* ── PROGRESS BAR HORIZONTAL DE LEITURA ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-ponira-yellow origin-left z-[100] shadow-[0_0_15px_rgba(255,183,3,0.6)]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* ── NAVBAR TRADICIONAL ── */}
      <nav
        className={`fixed top-0 left-0 w-full z-[90] px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-ponira-brown/85 backdrop-blur-md border-b border-ponira-white/10 py-4 shadow-xl"
            : "bg-transparent py-8"
        }`}
      >
        {/* Logo */}
        <a
          href={homeHref}
          className="group flex items-center gap-3 relative z-50 cursor-pointer"
        >
          <img
            src="/logo-icon.svg"
            alt="Ponira"
            className="w-7 h-7 opacity-80 group-hover:opacity-100 transition-all duration-500"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <div className="flex flex-col">
            <span className="text-ponira-white font-display italic text-lg leading-none tracking-tight group-hover:text-ponira-yellow transition-colors duration-300">
              PONIRA
            </span>
            <span className="text-ponira-white/30 font-mono text-[8px] uppercase tracking-[0.4em]">
              LAB
            </span>
          </div>
        </a>

        {/* Links — Desktop */}
        <div className="hidden md:flex items-center gap-8 relative z-50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-ponira-white/60 hover:text-ponira-yellow hover:-translate-y-[1px] transition-all duration-300 font-body text-[10px] uppercase tracking-[0.25em] font-bold"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Hamburger — Mobile */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden flex flex-col gap-[6px] p-2 group relative z-50 cursor-pointer"
          aria-label="Menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-ponira-white/80 group-hover:bg-ponira-yellow transition-colors origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-[2px] bg-ponira-white/80 group-hover:bg-ponira-yellow transition-colors"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-ponira-white/80 group-hover:bg-ponira-yellow transition-colors origin-center"
          />
        </button>
      </nav>

      {/* ── MENU MOBILE OVERLAY ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-ponira-brown/98 backdrop-blur-3xl md:hidden"
          >
            <nav className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 + 0.15 }}
                  className="text-ponira-white/70 hover:text-ponira-yellow transition-colors font-display text-3xl italic uppercase tracking-widest"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <img
              src="/logo-full.svg"
              alt="Ponira Lab"
              className="w-32 mt-16 opacity-20 pointer-events-none"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── BOTÃO WHATSAPP FIXO ── */}
      <button
        onClick={() => setWhatsAppOpen(true)}
        className="fixed bottom-[90px] right-6 md:bottom-[104px] md:right-10 z-[60] flex items-center justify-center w-12 h-12 rounded-full border border-[#25D366]/30 bg-[#25D366]/90 backdrop-blur-md shadow-[0_0_25px_rgba(37,211,102,0.3)] hover:bg-[#25D366] hover:scale-110 transition-all duration-300 group cursor-pointer"
        aria-label="Falar no WhatsApp"
      >
        {/* POPOUT AMIGÁVEL */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.5, duration: 0.6, ease: "easeOut" }}
          className="absolute right-full mr-4 w-max pointer-events-none"
        >
          <div className="relative flex items-center px-4 py-2 bg-ponira-brown/95 border border-[#25D366]/30 rounded-full shadow-[0_0_15px_rgba(37,211,102,0.15)] backdrop-blur-md">
            <span className="text-ponira-white/90 font-body text-[9px] font-bold uppercase tracking-widest translate-y-[1px]">
              Fala com a gente no WhatsApp!
            </span>
            <div className="absolute top-1/2 -right-[4.5px] -translate-y-1/2 w-2.5 h-2.5 bg-ponira-brown border-t border-r border-[#25D366]/30 rotate-45 rounded-sm" />
          </div>
        </motion.div>

        {/* Ícone WhatsApp */}
        <svg
          className="w-6 h-6 text-white group-hover:text-[#075E54] transition-colors duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.128.552 4.195 1.6 6.015L.32 24l6.113-1.603a11.96 11.96 0 005.598 1.385h.005C18.614 23.782 24 18.397 24 11.751 24 5.385 18.615 0 12.031 0zM11.751 21.727h-.003a9.982 9.982 0 01-5.088-1.383l-.365-.217-3.78 1.002.997-3.684-.238-.378a9.98 9.98 0 01-1.523-5.341c0-5.508 4.482-9.99 9.998-9.99 2.668 0 5.174 1.04 7.059 2.926 1.886 1.885 2.925 4.39 2.925 7.058 0 5.508-4.482 9.99-9.99 9.99z" />
          <path d="M17.279 14.18c-.276-.138-1.633-.805-1.886-.897-.253-.092-.437-.138-.621.138-.184.276-.713.897-.874 1.08-.161.184-.322.207-.598.069-.276-.138-1.165-.43-2.22-1.373-.82-.733-1.374-1.638-1.535-1.914-.161-.276-.017-.425.121-.563.125-.125.276-.322.414-.483.138-.161.184-.276.276-.46.092-.184.046-.345-.023-.483-.069-.138-.621-1.503-.85-2.057-.225-.541-.45-.468-.621-.477-.161-.008-.345-.008-.53-.008s-.483.069-.736.345c-.253.276-.966.942-.966 2.298 0 1.356.989 2.666 1.127 2.85.138.184 1.942 2.964 4.71 4.125.659.277 1.173.442 1.57.565.661.206 1.263.177 1.737.107.53-.078 1.633-.667 1.863-1.31.23-.644.23-1.196.161-1.31-.069-.115-.253-.184-.53-.322z" />
        </svg>
      </button>

      {/* ── MODAL WHATSAPP ── */}
      <AnimatePresence>
        {whatsAppOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setWhatsAppOpen(false)}
              className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
            />

            {/* Card do modal */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed bottom-24 right-6 md:bottom-28 md:right-10 z-[80] w-[320px] bg-ponira-brown/95 border border-[#25D366]/20 rounded-3xl shadow-[0_0_60px_rgba(37,211,102,0.15)] backdrop-blur-xl overflow-hidden"
            >
              {/* Header verde */}
              <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] px-6 py-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.128.552 4.195 1.6 6.015L.32 24l6.113-1.603a11.96 11.96 0 005.598 1.385h.005C18.614 23.782 24 18.397 24 11.751 24 5.385 18.615 0 12.031 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display italic text-white text-lg leading-none">Ponira Lab</h3>
                      <span className="font-body text-[9px] text-white/60 uppercase tracking-widest">Online agora</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setWhatsAppOpen(false)}
                    className="text-white/40 hover:text-white text-xl transition-colors"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Corpo */}
              <div className="px-6 py-5">
                <p className="text-ponira-white/70 font-body text-sm leading-relaxed mb-5">
                  Oi! 👋 Conta pra gente como podemos te ajudar. Resposta rápida, sem robô.
                </p>

                {/* Opções de mensagem */}
                <div className="space-y-2 mb-5">
                  {[
                    "Quero um orçamento",
                    "Tenho dúvidas sobre os pacotes",
                    "Quero falar sobre um projeto",
                  ].map((msg) => (
                    <a
                      key={msg}
                      href={`https://wa.me/5521998382038?text=${encodeURIComponent(msg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-left px-4 py-3 rounded-xl border border-ponira-white/10 text-ponira-white/60 font-body text-xs hover:border-[#25D366]/40 hover:text-[#25D366] hover:bg-[#25D366]/5 transition-all duration-300"
                    >
                      {msg}
                    </a>
                  ))}
                </div>

                {/* CTA principal */}
                <a
                  href="https://wa.me/5521998382038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] hover:bg-[#20BD5A] rounded-xl text-white font-body font-bold text-xs uppercase tracking-widest transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  </svg>
                  Iniciar conversa
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── BOTÃO VOLTAR AO TOPO — Após Hero Section ── */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-8 right-6 md:bottom-10 md:right-10 z-[60] flex items-center justify-center w-12 h-12 rounded-full border border-ponira-white/20 bg-ponira-brown/80 backdrop-blur-md shadow-[0_0_20px_rgba(255,183,3,0.15)] hover:border-ponira-yellow hover:bg-ponira-yellow hover:scale-110 transition-all duration-300 group cursor-pointer"
            aria-label="Voltar para o topo"
          >
            <span className="text-ponira-white/80 group-hover:text-ponira-brown font-black text-xl transition-colors duration-300 -translate-y-[1px]">
              ↑
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
