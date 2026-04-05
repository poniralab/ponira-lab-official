"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Grainient from "@/Grainient";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { cases, labMeta, type Lab } from "@/lib/cases";

const filters: { value: "all" | Lab; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "studio", label: "Studio / Alma" },
  { value: "creative", label: "Creative / Voz" },
  { value: "systems", label: "Systems / Corpo" },
];

export default function CasesClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const labParam = searchParams.get("lab");
  const validLabs: (Lab | "all")[] = ["all", "studio", "creative", "systems"];
  const active = validLabs.includes(labParam as Lab)
    ? (labParam as Lab | "all")
    : "all";

  const setFilter = useCallback(
    (value: "all" | Lab) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "all") {
        params.delete("lab");
      } else {
        params.set("lab", value);
      }
      router.replace(`/cases?${params.toString()}`, { scroll: false });
    },
    [router, searchParams],
  );

  const filtered =
    active === "all" ? cases : cases.filter((c) => c.lab === active);

  return (
    <main className="relative min-h-screen bg-ponira-brown overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <Grainient color1="#5a5539" color2="#3b2e0f" color3="#9b682a" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* ── HEADER ── */}
        <section className="pt-48 pb-20 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-ponira-yellow font-body text-[10px] uppercase tracking-[0.5em] font-bold opacity-60 block mb-6">
              Cases
            </span>
            <h1 className="text-5xl md:text-7xl font-display italic text-ponira-white leading-tight max-w-3xl mb-8">
              Projetos que provam o que prometemos.
            </h1>
            <p className="text-ponira-white/50 font-body font-light text-lg max-w-xl leading-relaxed">
              Cada entrega tem um contexto, um processo e um resultado. Aqui
              estão as histórias por trás do trabalho.
            </p>
          </motion.div>
        </section>

        {/* ── FILTROS ── */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-ponira-brown/80 backdrop-blur-md border-b border-ponira-white/5">
          <div className="max-w-7xl mx-auto flex gap-3 overflow-x-auto scrollbar-none">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`whitespace-nowrap px-5 py-2 rounded-full font-body text-[10px] uppercase tracking-widest font-bold transition-all duration-300 ${
                  active === f.value
                    ? "bg-ponira-yellow text-ponira-brown"
                    : "text-ponira-white/30 border border-ponira-white/10 hover:text-ponira-yellow hover:border-ponira-yellow/40"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── GRID ── */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((c, i) => (
                <motion.div
                  key={c.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="group"
                >
                  <CardContainer containerClassName="w-full" className="w-full">
                    <CardBody className="w-full">
                      <Link href={`/cases/${c.slug}`} className="block">
                        {/* Cover */}
                        <CardItem translateZ="50" className="w-full">
                          <div className="aspect-video mb-6 overflow-hidden rounded-tr-[80px] rounded-bl-[80px] border border-ponira-white/5 relative bg-black/20">
                            {c.cover ? (
                              <img
                                src={c.cover}
                                alt={c.title}
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                              />
                            ) : (
                              <div className="absolute inset-0 bg-gradient-to-tr from-ponira-brown/60 to-transparent flex items-center justify-center">
                                <span className="text-ponira-yellow/20 font-display text-6xl italic">
                                  ✦
                                </span>
                              </div>
                            )}

                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-ponira-yellow font-body text-xs uppercase tracking-widest border border-ponira-yellow/40 px-4 py-2 rounded-full backdrop-blur-sm bg-black/30">
                                Ver Case ↗
                              </span>
                            </div>

                            {/* Lab badge */}
                            <CardItem
                              translateZ="80"
                              className="absolute top-4 left-4 z-10"
                            >
                              <span className="text-[8px] font-body font-black uppercase tracking-widest px-2 py-1 rounded-full bg-black/40 backdrop-blur-sm text-ponira-yellow border border-ponira-yellow/20">
                                {labMeta[c.lab].label}
                              </span>
                            </CardItem>
                          </div>
                        </CardItem>

                        {/* Info */}
                        <CardItem
                          translateZ="30"
                          className="flex flex-col gap-1"
                        >
                          <span className="text-ponira-yellow font-body text-[10px] uppercase tracking-[0.2em] font-black block mb-2">
                            {c.category} · {c.year}
                          </span>
                          <h2 className="text-2xl font-display italic text-ponira-white group-hover:translate-x-2 transition-transform duration-300 mb-1">
                            {c.title}
                          </h2>
                          <p className="text-ponira-white/40 font-body font-light text-sm leading-relaxed">
                            {c.subtitle}
                          </p>
                        </CardItem>
                      </Link>
                    </CardBody>
                  </CardContainer>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
