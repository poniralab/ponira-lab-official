"use client";
import { motion } from "framer-motion";
import CardSwap, { Card } from "@/components/CardSwap";

const labs = [
  {
    id: "creative",
    category: "LAB_01 / VOZ",
    title: "Creative",
    role: "Estratégia & Marketing",
    description:
      "Gestão de redes sociais, tráfego pago e fotografia afetiva. A interface entre a marca e o mundo.",
    url: "https://creative.poniralab.com",
  },
  {
    id: "studio",
    category: "LAB_02 / ALMA",
    title: "Studio",
    role: "Design & Branding",
    description:
      "Identidades visuais, UI/UX e design estratégico. Onde a alma e o propósito ganham forma visual.",
    url: "https://studio.poniralab.com",
  },
  {
    id: "systems",
    category: "LAB_03 / CORPO",
    title: "Systems",
    role: "Dev & Automação",
    description:
      "Arquitetura de sistemas, APIs e automação de processos. A engenharia bruta que sustenta a autoridade.",
    url: "https://systems.poniralab.com",
  },
];


export default function ManifestoLabs() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* ESQUERDA — Manifesto */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-ponira-yellow font-mono text-[10px] tracking-[0.3em] font-bold mb-10 uppercase">
            A Trindade Digital
          </p>
          <p className="text-ponira-white font-body font-light text-lg leading-[2] max-w-[520px]">
            Na Ponira Lab, o design é a{" "}
            <span className="text-ponira-yellow font-semibold">alma</span> que
            projeta, a tecnologia é o{" "}
            <span className="text-ponira-yellow font-semibold">corpo</span> que
            executa e a estratégia é a{" "}
            <span className="text-ponira-yellow font-semibold">voz</span> que
            comunica. Criamos organismos digitais onde a engenharia de software
            sustenta a vitalidade estética e a{" "}
            <span className="text-ponira-yellow font-semibold">voz</span> da
            marca. Unimos precisão técnica e sensibilidade para transformar
            negócios em infraestruturas de alta performance e{" "}
            <span className="text-ponira-yellow font-semibold">autoridade</span>{" "}
            absoluta.
          </p>
        </motion.div>

{/* DIREITA — CardSwap */}
<motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
      viewport={{ once: true }}
      className="w-full flex justify-center lg:block"  
    >
  <div style={{ height: '340px', position: 'relative' }}> 
    <CardSwap
      cardDistance={60}
      verticalDistance={70}
      delay={2500}
      pauseOnHover
    >
      {labs.map((lab) => (
  <Card key={lab.id}>
    {/* Barra superior estilo browser */}
    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5 rounded-t-xl">
      {/* Botões estilo macOS */}
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
      </div>
      {/* URL fake */}
      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-md px-3 py-1">
        <span className="text-ponira-white/30 text-[10px]">🔒</span>
        <span className="text-ponira-white/40 font-mono text-[10px]">
          {lab.url.replace("https://", "")}
        </span>
      </div>
      {/* Tag do lab */}
      <span className="text-ponira-yellow font-mono text-[9px] tracking-[0.2em] font-bold">
        {lab.category}
      </span>
    </div>

    {/* Conteúdo da "página" */}
    
      <a href={lab.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="group flex flex-col h-full p-6"
    >
      {/* Nav fake */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
        <span className="text-ponira-white/20 font-mono text-[10px] tracking-widest uppercase">
          ponira<span className="text-ponira-yellow">lab</span>
        </span>
        <div className="flex gap-4">
          {["Work", "About", "Contact"].map((item) => (
            <span key={item} className="text-ponira-white/20 font-body text-[10px] uppercase tracking-wider">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Hero da página */}
      <div className="flex-1">
        <h3 className="text-4xl font-display text-ponira-white italic mb-2 leading-none">
          {lab.title}
        </h3>
        <p className="text-ponira-yellow font-body text-[10px] uppercase tracking-[0.25em] font-black mb-5">
          {lab.role}
        </p>
        <p className="text-ponira-white/40 font-body font-light text-xs leading-relaxed max-w-[280px]">
          {lab.description}
        </p>
      </div>

      {/* Botão CTA fake */}
      <div className="mt-6 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 border border-ponira-yellow/50 text-ponira-yellow font-mono text-[10px] tracking-widest uppercase px-4 py-2 rounded-full group-hover:bg-ponira-yellow group-hover:text-black transition-all duration-300">
          Explore →
        </span>
        <span className="text-ponira-white/15 font-mono text-[9px]">
          {new Date().getFullYear()} © Ponira
        </span>
      </div>
    </a>
  </Card>
))}
    </CardSwap>
  </div>
</motion.div>
        

      </div>
    </section>
  );
}