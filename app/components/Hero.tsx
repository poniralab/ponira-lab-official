"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";


export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const blurValue = useTransform(scrollYProgress, [0, 0.8], ["blur(0px)", "blur(15px)"]);
  const opacityValue = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yValue = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);

  return (
    <section
      ref={targetRef}
      className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center overflow-hidden"
    >
      <motion.div
        style={{ filter: blurValue, opacity: opacityValue, y: yValue }}
        className="max-w-6xl mx-auto w-full flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          {/*
            width/height definem as proporções intrínsecas do SVG para o Next.js.
            O tamanho visual real é controlado pelo Tailwind via className.
            priority garante que o logo seja carregado como LCP asset.
          */}
          <Image
            src="/logo-full.svg"
            alt="Ponira Lab"
            width={540}
            height={200}
            priority
            className="w-64 sm:w-80 md:w-[420px] lg:w-[540px] h-auto"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(60%) sepia(90%) saturate(500%) hue-rotate(5deg) brightness(95%)",
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-lg md:text-2xl text-ponira-white/80 mb-14 max-w-2xl font-body font-light leading-relaxed"
        >
          Onde a sensibilidade do design encontra a precisão da tecnologia.
          Sistemas que{" "}
          <span className="text-ponira-yellow font-semibold">
            automatizam sua autoridade.
          </span>
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          href="/contato"
          className="px-12 py-5 bg-ponira-yellow text-white rounded-full font-body text-sm hover:scale-105 transition shadow-2xl uppercase tracking-widest"
        >
          Iniciar Conexão
        </motion.a>
      </motion.div>
    </section>
  );
}