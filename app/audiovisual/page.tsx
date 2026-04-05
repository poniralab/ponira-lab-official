"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Grainient from "@/Grainient";
import NavbarLab from "@/app/components/NavbarLab";
import Footer from "@/app/components/Footer";
import { cases } from "@/lib/cases";
import LogoLoop from "@/components/LogoLoop";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

// ─── DADOS ────────────────────────────────────────────────────────────────

const audiovisualCases = cases.filter((c) => c.lab === "audiovisual");

const services = [
  {
    tier: "Pré-Produção",
    tagline: "A base de toda grande história.",
    highlight: false,
    includes: [
      "Criação de roteiro para vídeos curtos (Reels/TikTok)",
      "Criação de roteiro para formato longo (YouTube)",
      "Planejamento de cenas",
    ],
  },
  {
    tier: "Produção",
    tagline: "Registrando o movimento.",
    highlight: true,
    includes: [
      "Captação de fotos",
      "Captação de vídeos em resolução 4K",
      "Direção de arte no set",
    ],
  },
  {
    tier: "Pós-Produção",
    tagline: "A mágica na ilha de edição.",
    highlight: false,
    includes: [
      "Edição de vídeo dinâmica",
      "Edição de fotos profissional",
      "Color grading",
    ],
  },
];

const tools = [
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Canva Pro",
  "CapCut",
  "Social Media",
  "Content Strategy",
  "Ilustração Digital",
  "Character Design",
  "Marketing Digital",
];

const niches = [
  "Arquitetura & Design de interiores",
  "Gastronomia & Food",
  "Moda & Lifestyle",
  "Educação",
  "Saúde & Bem-estar",
  "Jurídico & Consultoria",
  "Fotografia & Arte",
  "Agências & Estúdios",
];

// ─── COMPONENTE ───────────────────────────────────────────────────────────

export default function CreativePage() {
  return (
    <main className="relative min-h-screen bg-ponira-brown overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <Grainient color1="#5a5539" color2="#3b2e0f" color3="#9b682a" />
      </div>

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
              <span className="text-rose-400 font-body text-[9px] uppercase tracking-[0.5em] font-black">
                Ponira Lab
              </span>
              <span className="text-ponira-white/20 font-body text-[9px]">
                ✦
              </span>
              <span className="text-purple-400/60 font-body text-[9px] uppercase tracking-[0.5em] font-black">
                Audiovisual
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display italic text-ponira-white leading-[0.9] mb-8">
              Movimento.
            </h1>
            <p className="text-ponira-white/50 font-body font-light text-xl max-w-lg leading-relaxed mb-10">
              Criação de roteiro, captação e edição. Transformamos mensagens em impacto visual.
            </p>
            <div className="flex flex-wrap gap-3">
              <LogoLoop
                items={tools}
                speed={25}
                accentColor="#FB7185"
                className="mt-10"
              />
            </div>
          </motion.div>
        </section>

        {/* ── NICHOS ── */}
        <section className="py-16 px-6 max-w-7xl mx-auto border-t border-ponira-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-10 items-start"
          >
            <div className="md:w-1/3 shrink-0">
              <h2 className="text-rose-400 font-display text-[10px] uppercase tracking-[0.5em] mb-4 font-bold opacity-85">
                Nichos que atendemos
              </h2>
              <p className="text-ponira-white/40 font-body font-light text-sm leading-relaxed">
                Cada nicho tem sua linguagem. Criamos conteúdo que fala com a
                audiência certa, não para todo mundo.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {niches.map((niche) => (
                <span
                  key={niche}
                  className="font-body font-light text-sm px-4 py-2 border border-ponira-white/10 text-ponira-white/50 rounded-full hover:border-rose-400/30 hover:text-rose-400/70 transition-colors duration-300"
                >
                  {niche}
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
              <h2 className="text-rose-400 font-display text-[10px] uppercase tracking-[0.5em] mb-4 font-bold opacity-85">
                Trabalhos
              </h2>
              <p className="text-3xl md:text-4xl font-display italic text-ponira-white">
                Conteúdo que existe por razões.
              </p>
            </div>
            <Link
              href="https://www.poniralab.com/cases?lab=audiovisual"
              className="text-ponira-white/30 hover:text-rose-400 font-body text-xs uppercase tracking-widest pb-2 border-b border-ponira-white/10 hover:border-rose-400/40 transition-all duration-300 whitespace-nowrap"
            >
              Ver todos os cases →
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {audiovisualCases.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="group"
              >
                <CardContainer containerClassName="w-full" className="w-full">
                  <CardBody className="w-full">
                    <a href={`https://www.poniralab.com/cases/${c.slug}`} className="block">
                      {/* Cover */}
                      <CardItem translateZ="50" className="w-full">
                        <div className="aspect-video mb-6 overflow-hidden rounded-tr-[80px] rounded-bl-[80px] border border-ponira-white/5 relative bg-black/20">
                          {c.cover ? (
                            <img
                              src={c.cover}
                              alt={c.title}
                              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-tr from-rose-900/40 to-transparent flex items-center justify-center">
                              <span className="text-rose-400/20 font-display text-6xl italic">
                                ✦
                              </span>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-rose-400 font-body text-xs uppercase tracking-widest border border-rose-400/40 px-4 py-2 rounded-full backdrop-blur-sm bg-black/30">
                              Ver Case ↗
                            </span>
                          </div>
                        </div>
                      </CardItem>

                      {/* Info */}
                      <CardItem translateZ="30" className="flex flex-col gap-1">
                        <span className="text-rose-400 font-display text-[10px] font-black tracking-[0.2em] uppercase block mb-2">
                          {c.category} · {c.year}
                        </span>
                        <h3 className="text-xl font-display italic text-ponira-white group-hover:translate-x-2 transition-transform duration-300 mb-1">
                          {c.title}
                        </h3>
                        <p className="text-ponira-white/40 font-body font-light text-sm">
                          {c.subtitle}
                        </p>
                      </CardItem>
                    </a>
                  </CardBody>
                </CardContainer>
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
            <h2 className="text-rose-400 font-display text-[10px] uppercase tracking-[0.5em] mb-4 font-bold opacity-85">
              Serviços
            </h2>
            <p className="text-3xl md:text-4xl font-display italic text-ponira-white max-w-xl">
              Planos mensais. Conteúdo que não para.
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
                className="relative overflow-visible"
              >
                {/* Badge fora do CardContainer para não ser cortado */}
                {svc.highlight && (
                  <div className="absolute -top-3 left-8 z-20">
                    <span className="text-[9px] font-body font-black uppercase tracking-widest px-3 py-1 bg-rose-400 text-ponira-brown rounded-full">
                      Mais escolhido
                    </span>
                  </div>
                )}

                <CardContainer containerClassName="w-full" className="w-full">
                  <CardBody
                    className={`relative flex flex-col p-8 rounded-tr-[80px] rounded-bl-[80px] border transition-colors duration-300 h-full ${
                      svc.highlight
                        ? "border-rose-400/30 bg-rose-400/5"
                        : "border-ponira-white/5 bg-black/10 hover:border-ponira-white/10"
                    }`}
                  >
                    {/* Tier + tagline */}
                    <CardItem translateZ="40" className="mb-2">
                      <span className="text-rose-400 font-body text-[9px] uppercase tracking-widest font-black block mb-3">
                        {svc.tier}
                      </span>
                      <h3 className="text-xl font-display italic text-ponira-white">
                        {svc.tagline}
                      </h3>
                    </CardItem>

                    {/* Includes */}
                    <CardItem translateZ="30" className="flex-1 my-8">
                      <ul className="space-y-3">
                        {svc.includes.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="text-purple-400 mt-0.5 text-xs">
                              ✦
                            </span>
                            <span className="text-ponira-white/60 font-body font-light text-sm leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardItem>

                    {/* CTA */}
                    <CardItem
                      translateZ="60"
                      className="border-t border-ponira-white/5 pt-6 flex flex-col gap-4"
                    >
                      <a
                        href="https://www.poniralab.com/contato"
                        className={`text-center py-3 rounded-full font-body text-[10px] uppercase tracking-widest transition-all duration-300 ${
                          svc.highlight
                            ? "bg-purple-400 text-ponira-brown hover:scale-[1.02]"
                            : "border border-ponira-white/10 text-ponira-white/50 hover:border-purple-400/30 hover:text-purple-400"
                        }`}
                      >
                        Solicitar orçamento
                      </a>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── BLOG PLACEHOLDER ── */}
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-ponira-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-10 py-16 px-12 border border-ponira-white/5 rounded-tr-[80px] rounded-bl-[80px] bg-black/10"
          >
            <div>
              <h2 className="text-purple-400 font-display text-[10px] uppercase tracking-[0.5em] mb-4 font-bold opacity-85">
                Conteúdo
              </h2>
              <p className="text-3xl font-display italic text-ponira-white mb-3">
                Diário do Audiovisual.
              </p>
              <p className="text-ponira-white/40 font-body font-light text-sm max-w-sm leading-relaxed">
                Bastidores das produções, dicas de roteiro, captação audiovisual
                e o que a equipe aprende no set.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 shrink-0">
              <span className="text-rose-400/40 font-display text-6xl italic">
                ✦
              </span>
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
                Sua marca precisa ser vista todos os dias.
              </h2>
              <p className="text-ponira-white/40 font-body font-light text-base leading-relaxed">
                Precisa de mais de uma frente?{" "}
                <a
                  href="https://poniralab.com/#pacotes"
                  className="text-rose-400/70 hover:text-rose-400 transition-colors"
                >
                  Conheça nossos pacotes cross-lab →
                </a>
              </p>
            </div>
            <a
              href="https://www.poniralab.com/contato"
              className="shrink-0 px-10 py-5 bg-rose-400 text-ponira-brown font-body text-xs uppercase tracking-widest font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-rose-900/20"
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
