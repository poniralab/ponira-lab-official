"use client";
import { motion } from "framer-motion";
import Grainient from "../../Grainient";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export default function Linktree() {
  return (
    <main className="relative min-h-screen bg-ponira-brown overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <Grainient color1="#5a5539" color2="#3b2e0f" color3="#9b682a" />
      </div>

      <div className="relative z-10 px-5 py-10 flex flex-col items-center min-h-screen max-w-md mx-auto">
        {/* ── HEADER ── */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-8"
        >
          <Image
            src="/logo-full.svg"
            alt="Ponira Lab"
            width={180}
            height={60}
            priority
            className="w-44 h-auto mb-3"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(60%) sepia(90%) saturate(500%) hue-rotate(5deg) brightness(95%)",
            }}
          />
          <p className="text-ponira-white/35 font-body text-[11px] text-center">
            Laboratório criativo · Rio de Janeiro
          </p>
        </motion.header>

        {/* ── BANNERS ── */}
        <section className="w-full space-y-4">
          {/* INSTAGRAM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <CardContainer containerClassName="w-full" className="w-full">
              <a
                href="https://instagram.com/poniralab"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <CardBody className="relative w-full rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-500 p-6 overflow-hidden shadow-lg shadow-amber-900/30 cursor-pointer">
                  {/* Ícone decorativo fundo */}
                  <CardItem translateZ="15" className="absolute -right-4 -bottom-4">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-40 h-40 text-amber-600/20">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </CardItem>

                  {/* Ícone funcional — salta bastante */}
                  <CardItem translateZ="80" className="relative z-10 mb-2">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-ponira-brown/80 drop-shadow-lg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </CardItem>

                  {/* Título — salta mais ainda */}
                  <CardItem translateZ="100" className="relative z-10">
                    <span className="font-body text-[9px] uppercase tracking-widest text-ponira-brown/60 font-bold block mb-1">
                      @poniralab
                    </span>
                    <h2 className="font-display italic text-4xl text-ponira-brown leading-none drop-shadow-sm">
                      Instagram
                    </h2>
                  </CardItem>

                  {/* Subtítulo — nível médio */}
                  <CardItem translateZ="50" className="relative z-10 mt-2">
                    <span className="font-body text-xs text-ponira-brown/50">
                      Portfólio visual e bastidores ↗
                    </span>
                  </CardItem>
                </CardBody>
              </a>
            </CardContainer>
          </motion.div>

          {/* WHATSAPP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.5 }}
          >
            <CardContainer containerClassName="w-full" className="w-full">
              <a
                href="https://wa.me/5521998382038"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <CardBody className="relative w-full rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 p-6 overflow-hidden shadow-lg shadow-emerald-900/30 cursor-pointer">
                  <CardItem translateZ="15" className="absolute -right-3 -bottom-3">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-36 h-36 text-emerald-700/20">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </CardItem>

                  <CardItem translateZ="80" className="relative z-10 mb-2">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-ponira-brown/80 drop-shadow-lg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </CardItem>

                  <CardItem translateZ="100" className="relative z-10">
                    <span className="font-body text-[9px] uppercase tracking-widest text-ponira-brown/60 font-bold block mb-1">
                      Atendimento direto
                    </span>
                    <h2 className="font-display italic text-4xl text-ponira-brown leading-none drop-shadow-sm">
                      WhatsApp
                    </h2>
                  </CardItem>

                  <CardItem translateZ="50" className="relative z-10 mt-2">
                    <span className="font-body text-xs text-ponira-brown/50">
                      Inicie um projeto conosco ↗
                    </span>
                  </CardItem>
                </CardBody>
              </a>
            </CardContainer>
          </motion.div>

          {/* SITE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.5 }}
          >
            <CardContainer containerClassName="w-full" className="w-full">
              <a
                href="https://poniralab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <CardBody className="relative w-full rounded-2xl bg-ponira-yellow/10 border-2 border-ponira-yellow/40 p-6 overflow-hidden cursor-pointer">
                  <CardItem translateZ="15" className="absolute -right-6 -bottom-6">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-36 h-36 text-ponira-yellow/10">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                  </CardItem>

                  <CardItem translateZ="50" className="relative z-10">
                    <span className="font-body text-[9px] uppercase tracking-widest text-ponira-yellow/50 font-bold block mb-1">
                      poniralab.com
                    </span>
                    <h2 className="font-display italic text-3xl text-ponira-white leading-none mb-2">
                      Nosso Site
                    </h2>
                    <span className="font-body text-xs text-ponira-white/30">
                      Experiência completa ↗
                    </span>
                  </CardItem>
                </CardBody>
              </a>
            </CardContainer>
          </motion.div>

          {/* TIKTOK */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.5 }}
          >
            <CardContainer containerClassName="w-full" className="w-full">
              <a href="https://tiktok.com/@poniralab" target="_blank" rel="noopener noreferrer" className="block">
                <CardBody className="relative w-full rounded-2xl bg-ponira-white/5 border border-ponira-white/10 p-5 overflow-hidden cursor-pointer">
                  <CardItem translateZ="10" className="absolute -right-4 -bottom-4">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-28 h-28 text-ponira-white/[0.04]">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V12.8a8.2 8.2 0 005.58 2.17V11.5a4.84 4.84 0 01-2.93-1.01v-.01a4.85 4.85 0 002.93-3.79z" />
                    </svg>
                  </CardItem>
                  <CardItem translateZ="40" className="relative z-10 flex items-center gap-4">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-ponira-white/60 shrink-0">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V12.8a8.2 8.2 0 005.58 2.17V11.5a4.84 4.84 0 01-2.93-1.01v-.01a4.85 4.85 0 002.93-3.79z" />
                    </svg>
                    <div className="flex-1">
                      <h2 className="font-display italic text-xl text-ponira-white leading-none">TikTok</h2>
                      <span className="font-body text-[10px] text-ponira-white/30">Bastidores e dicas</span>
                    </div>
                    <span className="text-ponira-white/15 text-sm">↗</span>
                  </CardItem>
                </CardBody>
              </a>
            </CardContainer>
          </motion.div>

          {/* LINKEDIN */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <CardContainer containerClassName="w-full" className="w-full">
              <a href="https://linkedin.com/company/ponira-lab" target="_blank" rel="noopener noreferrer" className="block">
                <CardBody className="relative w-full rounded-2xl bg-ponira-white/5 border border-ponira-white/10 p-5 overflow-hidden cursor-pointer">
                  <CardItem translateZ="10" className="absolute -right-4 -bottom-4">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-28 h-28 text-ponira-white/[0.04]">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </CardItem>
                  <CardItem translateZ="40" className="relative z-10 flex items-center gap-4">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-ponira-white/60 shrink-0">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <div className="flex-1">
                      <h2 className="font-display italic text-xl text-ponira-white leading-none">LinkedIn</h2>
                      <span className="font-body text-[10px] text-ponira-white/30">Cases e networking</span>
                    </div>
                    <span className="text-ponira-white/15 text-sm">↗</span>
                  </CardItem>
                </CardBody>
              </a>
            </CardContainer>
          </motion.div>

          {/* EMAIL */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.46, duration: 0.5 }}
          >
            <CardContainer containerClassName="w-full" className="w-full">
              <a href="mailto:contato@poniralab.com" className="block">
                <CardBody className="relative w-full rounded-2xl bg-ponira-white/5 border border-ponira-white/10 p-5 overflow-hidden cursor-pointer">
                  <CardItem translateZ="40" className="relative z-10 flex items-center gap-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-ponira-white/60 shrink-0">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 4l-10 8L2 4" />
                    </svg>
                    <div className="flex-1">
                      <h2 className="font-display italic text-xl text-ponira-white leading-none">E-mail</h2>
                      <span className="font-body text-[10px] text-ponira-white/30">contato@poniralab.com</span>
                    </div>
                    <span className="text-ponira-white/15 text-sm">↗</span>
                  </CardItem>
                </CardBody>
              </a>
            </CardContainer>
          </motion.div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="mt-auto pt-10 flex flex-col items-center gap-2">
          <img
            src="/logo-icon.svg"
            alt=""
            className="w-5 h-5 opacity-15"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <p className="text-ponira-white/10 font-body text-[7px] uppercase tracking-[0.5em]">
            Rio de Janeiro · Brasil
          </p>
        </footer>
      </div>
    </main>
  );
}
