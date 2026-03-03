"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Grainient from "@/Grainient";
import NavbarLab from "@/app/components/NavbarLab";
import Footer from "@/app/components/Footer";
import ViewportBlur from "@/app/components/ViewportBlur";
import { cases } from "@/lib/cases";

// ─── DADOS ────────────────────────────────────────────────────────────────

const studioCases = cases.filter((c) => c.lab === "studio");

const services = [
  {
    tier: "Standard",
    tagline: "Uma marca que se apresenta.",
    price: "R$ 900",
    includes: [
      "Logo principal + variações",
      "Paleta de cores com aplicações",
      "Tipografia selecionada e hierarquizada",
      "Entrega em até 10 dias úteis",
    ],
  },
  {
    tier: "Plus",
    tagline: "Uma identidade que se sustenta.",
    price: "R$ 1.800",
    highlight: true,
    includes: [
      "Tudo do Standard",
      "Identidade visual completa",
      "Manual de marca básico",
      "3 aplicações (cartão, papel timbrado, assinatura)",
      "Entrega em até 20 dias úteis",
    ],
  },
  {
    tier: "Premium",
    tagline: "Um sistema que cresce com você.",
    price: "R$ 3.200",
    includes: [
      "Tudo do Plus",
      "Manual de marca completo",
      "Aplicações ilimitadas",
      "Social media kit (templates editáveis)",
      "Apresentação estratégica da marca",
      "Entrega em até 35 dias úteis",
    ],
  },
];

const addons = [
  { name: "Redesign de logo existente", price: "+ R$ 400" },
  { name: "Papelaria completa (cartão, envelope, pasta)", price: "+ R$ 600" },
  { name: "Apresentação institucional (até 12 slides)", price: "+ R$ 500" },
  { name: "Embalagem / packaging", price: "+ R$ 700" },
  { name: "Sinalização / wayfinding", price: "sob consulta" },
];

const tools = [
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Adobe InDesign",
  "Figma",
  "Branding",
  "Logo Design",
  "Visual Identity",
  "Personal Branding",
  "Brand System",
];

const BASE = "https://poniralab.com";

const navLinks = [
  { name: "Iniciar Projeto", href: `${BASE}/#contato` },
];



// ─── COMPONENTE ───────────────────────────────────────────────────────────

export default function StudioPage() {
  const [hoveredCase, setHoveredCase] = useState<string | null>(null);

  return (
    <main className="relative min-h-screen bg-ponira-brown overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <Grainient color1="#5a5539" color2="#3b2e0f" color3="#9b682a" />
      </div>
      <ViewportBlur />

      <div className="relative z-10">
        <NavbarLab />

        {/* ── HERO ── */}
        <section className="pt-48 pb-32 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-amber-400 font-body text-[9px] uppercase tracking-[0.5em] font-black">
                Ponira Lab
              </span>
              <span className="text-ponira-white/20 font-body text-[9px]">✦</span>
              <span className="text-amber-400/60 font-body text-[9px] uppercase tracking-[0.5em] font-black">
                Studio
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-display italic text-ponira-white leading-[0.9] mb-8">
              Alma.
            </h1>

            <p className="text-ponira-white/50 font-body font-light text-xl max-w-lg leading-relaxed mb-6">
              Design & Branding. Construímos marcas que existem antes das palavras — identidades com método, intenção e história.
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="text-[9px] font-body font-black uppercase tracking-widest px-3 py-1.5 border border-amber-400/20 text-amber-400/60 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── CASES ── */}
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-ponira-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6"
          >
            <div>
              <h2 className="text-amber-400 font-display text-[10px] uppercase tracking-[0.5em] mb-4 font-bold opacity-85">
                Trabalhos
              </h2>
              <p className="text-3xl md:text-4xl font-display italic text-ponira-white">
                {studioCases.length} identidades entregues.
              </p>
            </div>
            <Link
              href="/cases?lab=studio"
              className="text-ponira-white/30 hover:text-amber-400 font-body text-xs uppercase tracking-widest pb-2 border-b border-ponira-white/10 hover:border-amber-400/40 transition-all duration-300 whitespace-nowrap"
            >
              Ver todos os cases →
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {studioCases.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.07 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCase(c.slug)}
                onMouseLeave={() => setHoveredCase(null)}
                className="group"
              >
                <Link href={`/cases/${c.slug}`} className="block">
                  <div className="aspect-video mb-6 overflow-hidden rounded-sm border border-ponira-white/5 relative bg-black/20">
                    {c.cover ? (
                      <img
                        src={c.cover}
                        alt={c.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/40 to-transparent flex items-center justify-center">
                        <span className="text-amber-400/20 font-display text-6xl italic">✦</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-amber-400 font-body text-xs uppercase tracking-widest border border-amber-400/40 px-4 py-2 rounded-full backdrop-blur-sm bg-black/30">
                        Ver Case ↗
                      </span>
                    </div>
                  </div>
                  <span className="text-amber-400 font-display text-[10px] font-black tracking-[0.2em] uppercase block mb-2">
                    {c.category} · {c.year}
                  </span>
                  <h3 className="text-xl font-display italic text-ponira-white group-hover:translate-x-2 transition-transform duration-300 mb-1">
                    {c.title}
                  </h3>
                  <p className="text-ponira-white/40 font-body font-light text-sm">
                    {c.subtitle}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── SERVIÇOS ── */}
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-ponira-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-amber-400 font-display text-[10px] uppercase tracking-[0.5em] mb-4 font-bold opacity-85">
              Serviços
            </h2>
            <p className="text-3xl md:text-4xl font-display italic text-ponira-white max-w-xl">
              Escolha o ponto de partida certo para sua marca.
            </p>
          </motion.div>

          {/* Pacotes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {services.map((svc, i) => (
              <motion.div
                key={svc.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col p-8 rounded-sm border transition-colors duration-300 ${
                  svc.highlight
                    ? "border-amber-400/30 bg-amber-400/5"
                    : "border-ponira-white/5 bg-black/10 hover:border-ponira-white/10"
                }`}
              >
                {svc.highlight && (
                  <div className="absolute -top-3 left-8">
                    <span className="text-[9px] font-body font-black uppercase tracking-widest px-3 py-1 bg-amber-400 text-ponira-brown rounded-full">
                      Mais escolhido
                    </span>
                  </div>
                )}

                <span className="text-amber-400 font-body text-[9px] uppercase tracking-widest font-black block mb-3">
                  {svc.tier}
                </span>
                <h3 className="text-xl font-display italic text-ponira-white mb-2">
                  {svc.tagline}
                </h3>

                <ul className="space-y-3 my-8 flex-1">
                  {svc.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-amber-400 mt-0.5 text-xs">✦</span>
                      <span className="text-ponira-white/60 font-body font-light text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-ponira-white/5 pt-6 flex flex-col gap-4">
                  <div>
                    <span className="text-ponira-white/20 font-body text-[9px] uppercase tracking-widest block mb-1">
                      A partir de
                    </span>
                    <span className="text-2xl font-display text-ponira-white">
                      {svc.price}
                    </span>
                  </div>
                  <Link
                    href="/contato"
                    className={`text-center py-3 rounded-full font-body text-[10px] uppercase tracking-widest transition-all duration-300 ${
                      svc.highlight
                        ? "bg-amber-400 text-ponira-brown hover:scale-[1.02]"
                        : "border border-ponira-white/10 text-ponira-white/50 hover:border-amber-400/30 hover:text-amber-400"
                    }`}
                  >
                    Solicitar orçamento
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Add-ons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="border border-ponira-white/5 rounded-sm p-8 bg-black/10"
          >
            <h3 className="text-ponira-white/60 font-body text-[10px] uppercase tracking-widest font-black mb-6">
              Módulos extras — adicione ao seu pacote
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addons.map((addon) => (
                <div
                  key={addon.name}
                  className="flex justify-between items-center py-3 border-b border-ponira-white/5 last:border-0"
                >
                  <span className="text-ponira-white/50 font-body font-light text-sm">
                    {addon.name}
                  </span>
                  <span className="text-amber-400/70 font-body text-xs font-black tracking-wider ml-4 whitespace-nowrap">
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── BLOG PLACEHOLDER ── */}
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-ponira-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-10 py-16 px-12 border border-ponira-white/5 rounded-sm bg-black/10"
          >
            <div>
              <h2 className="text-amber-400 font-display text-[10px] uppercase tracking-[0.5em] mb-4 font-bold opacity-85">
                Conteúdo
              </h2>
              <p className="text-3xl font-display italic text-ponira-white mb-3">
                Diário do Studio.
              </p>
              <p className="text-ponira-white/40 font-body font-light text-sm max-w-sm leading-relaxed">
                Artigos sobre processo criativo, decisões de design e o que a Carol aprende construindo marcas.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 shrink-0">
              <span className="text-amber-400/40 font-display text-6xl italic">✦</span>
              <span className="text-ponira-white/20 font-body text-[10px] uppercase tracking-widest">
                Em breve
              </span>
            </div>
          </motion.div>
        </section>

        {/* ── CTA CONTATO ── */}
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-ponira-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-10"
          >
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-display italic text-ponira-white leading-tight mb-4">
                Sua marca merece existir com intenção.
              </h2>
              <p className="text-ponira-white/40 font-body font-light text-base leading-relaxed">
                Precisa de mais de uma frente?{" "}
                <Link href="/#pacotes" className="text-amber-400/70 hover:text-amber-400 transition-colors">
                  Conheça nossos pacotes cross-lab →
                </Link>
              </p>
            </div>
            <a href="https://www.poniralab.com/contato"
            className="shrink-0 px-10 py-5 bg-amber-400 text-ponira-brown font-body text-xs uppercase tracking-widest font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-900/20"
            >
            Iniciar projeto
            </a>
          </motion.div>
        </section>

        <Footer />
      </div>
    </main>
  );
}