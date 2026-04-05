"use client";
import { motion } from "framer-motion";
import MetallicLogo from "@/app/components/MetallicLogo";
export default function Manifesto() {
  const text =
    "Na Ponira Lab, o design é a alma que projeta, a tecnologia é o corpo que executa, a estratégia é a voz que comunica e o audiovisual é a lente que materializa a visão. Criamos organismos digitais onde a engenharia de software sustenta a vitalidade estética e a voz da marca. Unimos precisão técnica e sensibilidade para transformar negócios em infraestruturas de alta performance e autoridade absoluta.";

  const words = text.split(" ");

  // Palavras que ganharão o destaque no novo amarelo
  const highlights = ["alma", "corpo", "voz", "lente", "autoridade"];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
        <div className="md:col-span-7 lg:col-span-6">
          <h2 className="text-ponira-yellow font-body text-[10px] uppercase tracking-[0.5em] mb-8 font-bold opacity-85">
            Ecossistema Digital
          </h2>

          <div className="flex flex-wrap gap-x-2 gap-y-3">
            {words.map((word, i) => {
              const isHighlighted = highlights.includes(
                word.toLowerCase().replace(/[.,]/g, ""),
              );
              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0.12 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.01 }}
                  viewport={{ once: false, amount: 0.9 }}
                  className={`text-lg md:text-xl lg:text-2xl font-body leading-relaxed tracking-tight ${
                    isHighlighted
                      ? "text-ponira-yellow font-bold"
                      : "text-ponira-white font-light"
                  }`}
                >
                  {word}
                </motion.span>
              );
            })}
          </div>
        </div>

        <div className="md:col-span-5 lg:col-span-6 flex justify-center md:justify-end">
          {/* Ícone da Palmeira ou Logo mantido conforme o layout anterior */}
          <MetallicLogo />
        </div>
      </div>
    </section>
  );
}
