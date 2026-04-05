"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacityValue = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const yValue = useTransform(scrollYProgress, [0, 1], ["0px", "60px"]);

  return (
    <section
      ref={targetRef}
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      <motion.div
        style={{ opacity: opacityValue, y: yValue }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24 md:pb-32 transform-gpu"
      >
        {/* Label */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-ponira-yellow/60 font-body text-[9px] uppercase tracking-[0.5em] font-bold block mb-6"
        >
          Ponira Lab
        </motion.span>

        {/* Headline — posicionamento único */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.5rem,8vw,7rem)] font-display italic text-ponira-white leading-[0.95] max-w-5xl mb-10"
        >
          Não somos uma agência.
          <br />
          Somos um{" "}
          <span className="text-ponira-yellow">laboratório.</span>
        </motion.h1>

        {/* Divisor + Subtítulo + CTA — grid inferior */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 pt-8 border-t border-ponira-white/10"
        >
          <p className="text-ponira-white/40 font-body font-light text-base md:text-lg max-w-md leading-relaxed">
            Design, conteúdo, audiovisual e tecnologia —
            quatro frentes, uma entrega coesa.
          </p>

          <a
            href="/contato"
            className="shrink-0 px-10 py-5 bg-ponira-yellow text-ponira-brown rounded-full font-body font-black text-[10px] hover:scale-[1.03] active:scale-[0.98] transition-transform duration-300 shadow-[0_0_25px_rgba(198,141,7,0.2)] uppercase tracking-[0.3em]"
          >
            Iniciar Projeto →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
