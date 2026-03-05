"use client";

import React from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Grainient from "@/Grainient";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ViewportBlur from "@/app/components/ViewportBlur";
import CaseGallery from "@/app/components/CaseGallery";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { getCaseBySlug, cases, labMeta } from "@/lib/cases";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function CaseClient({ params }: Props) {
  const { slug } = React.use(params);
  const c = getCaseBySlug(slug);
  if (!c) notFound();

  const currentIndex = cases.findIndex((x) => x.slug === c.slug);
  const next = cases[(currentIndex + 1) % cases.length];

  const galleryImages = c.images.map((src) => ({ src }));
  const section1 = galleryImages.slice(1, 3);
  const section2 = galleryImages.slice(3, 7);
  const section3 = galleryImages.slice(7);

  const centerCrop = c.lab === "studio" || c.lab === "creative";

  return (
    <main className="relative min-h-screen bg-ponira-brown overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <Grainient color1="#5a5539" color2="#3b2e0f" color3="#9b682a" />
      </div>
      <ViewportBlur />

      <div className="relative z-10">
        <Navbar />

        {/* ── HERO ── */}
        <section className="pt-40 pb-0 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-10">
              <Link
                href="/cases"
                className="text-ponira-white/30 hover:text-ponira-yellow font-body text-[10px] uppercase tracking-widest transition-colors"
              >
                ← Cases
              </Link>
              <span className="text-ponira-white/10 font-body text-[10px]">
                /
              </span>
              <span className="text-ponira-yellow font-body text-[10px] uppercase tracking-widest">
                {labMeta[c.lab].label}
              </span>
            </div>

            <span className="text-ponira-yellow font-body text-[10px] uppercase tracking-[0.5em] font-bold opacity-60 block mb-4">
              {c.category} · {c.year}
            </span>
            <h1 className="text-5xl md:text-8xl font-display italic text-ponira-white leading-none mb-4">
              {c.title}
            </h1>
            <p className="text-ponira-white/50 font-body font-light text-xl max-w-2xl leading-relaxed">
              {c.subtitle}
            </p>
          </motion.div>

          {c.cover && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Cover hero com padrão 3d-card */}
              <CardContainer containerClassName="w-full" className="w-full">
                <CardBody className="w-full">
                  <CardItem translateZ="40" className="w-full">
                    <div className="aspect-video overflow-hidden rounded-tr-[80px] rounded-bl-[80px] border border-ponira-white/5 relative bg-black/20">
                      <img
                        src={c.cover}
                        alt={c.title}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: centerCrop ? "center" : "top center" }}
                      />
                      {/* Lab badge flutuante */}
                      <CardItem translateZ="80" className="absolute top-5 left-5 z-10">
                        <span className="text-[8px] font-body font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm text-ponira-yellow border border-ponira-yellow/20">
                          {labMeta[c.lab].label}
                        </span>
                      </CardItem>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          )}
        </section>

        {/* ── CONTEÚDO ── */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <aside className="md:col-span-3 space-y-10">
              <div>
                <span className="text-ponira-white/20 font-body text-[9px] uppercase tracking-widest block mb-4">
                  Ferramentas
                </span>
                <ul className="space-y-2">
                  {c.tools.map((t) => (
                    <li
                      key={t}
                      className="text-ponira-white/60 font-body text-sm font-light"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-ponira-white/20 font-body text-[9px] uppercase tracking-widest block mb-4">
                  Frente
                </span>
                <p className="text-ponira-white/60 font-body text-sm font-light">
                  {labMeta[c.lab].label}
                </p>
                <p className="text-ponira-white/30 font-body text-xs font-light mt-1">
                  {labMeta[c.lab].description}
                </p>
              </div>

              {c.externalUrl && (
                <a
                  href={c.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ponira-yellow font-body text-[10px] uppercase tracking-widest hover:gap-3 transition-all duration-300"
                >
                  {c.externalLabel} ↗
                </a>
              )}
            </aside>

            <div className="md:col-span-9 space-y-20">
              {/* 01 Contexto */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <span className="text-ponira-yellow font-body text-[9px] uppercase tracking-[0.4em] font-bold opacity-60 block mb-6">
                  01 / Contexto
                </span>
                <p className="text-ponira-white/80 font-body font-light text-xl leading-relaxed max-w-2xl">
                  {c.context}
                </p>
              </motion.div>

              {section1.length > 0 && (
                <CaseGallery
                  images={section1}
                  layout="duo"
                  centerCrop={centerCrop}
                />
              )}

              {/* 02 Processo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <span className="text-ponira-yellow font-body text-[9px] uppercase tracking-[0.4em] font-bold opacity-60 block mb-6">
                  02 / Processo
                </span>
                <p className="text-ponira-white/80 font-body font-light text-xl leading-relaxed max-w-2xl">
                  {c.process}
                </p>
              </motion.div>

              {section2.length > 0 && (
                <CaseGallery
                  images={section2}
                  layout="single"
                  centerCrop={centerCrop}
                />
              )}

              {/* 03 Resultado */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <span className="text-ponira-yellow font-body text-[9px] uppercase tracking-[0.4em] font-bold opacity-60 block mb-6">
                  03 / Resultado
                </span>
                <p className="text-ponira-white/80 font-body font-light text-xl leading-relaxed max-w-2xl">
                  {c.result}
                </p>
              </motion.div>

              {section3.length > 0 && (
                <CaseGallery
                  images={section3}
                  layout="grid"
                  centerCrop={centerCrop}
                />
              )}
            </div>
          </div>
        </section>

        {/* ── PRÓXIMO CASE ── */}
        <section className="py-24 px-6 border-t border-ponira-white/5">
          <div className="max-w-7xl mx-auto">
            <span className="text-ponira-white/20 font-body text-[9px] uppercase tracking-widest block mb-8">
              Próximo Case
            </span>

            <CardContainer containerClassName="w-full" className="w-full">
              <CardBody className="w-full">
                <Link href={`/cases/${next.slug}`} className="group block">
                  {/* Cover mini do próximo */}
                  <CardItem translateZ="40" className="w-full mb-8">
                    <div className="aspect-video overflow-hidden rounded-tr-[80px] rounded-bl-[80px] border border-ponira-white/5 relative bg-black/20">
                      {next.cover ? (
                        <img
                          src={next.cover}
                          alt={next.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-tr from-ponira-brown/60 to-transparent" />
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-ponira-yellow font-body text-xs uppercase tracking-widest border border-ponira-yellow/40 px-4 py-2 rounded-full backdrop-blur-sm bg-black/30">
                          Ver Case ↗
                        </span>
                      </div>
                    </div>
                  </CardItem>

                  {/* Info do próximo */}
                  <CardItem translateZ="30" className="flex items-end justify-between gap-6">
                    <div>
                      <span className="text-ponira-yellow font-body text-[10px] uppercase tracking-[0.3em] font-bold opacity-60 block mb-3">
                        {next.category}
                      </span>
                      <h2 className="text-4xl md:text-6xl font-display italic text-ponira-white group-hover:translate-x-3 transition-transform duration-500">
                        {next.title}
                      </h2>
                    </div>
                    <span className="text-ponira-yellow text-4xl group-hover:translate-x-2 transition-transform duration-300 shrink-0 mb-2">
                      →
                    </span>
                  </CardItem>
                </Link>
              </CardBody>
            </CardContainer>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}