"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const packages = [
  {
    name: "Presença Essencial",
    tagline: "Uma marca que existe de verdade no mundo digital.",
    price: "R$ 1.800",
    labs: ["Studio", "Systems"],
    labColors: ["text-amber-400", "text-sky-400"],
    includes: [
      "Logo + paleta + tipografia",
      "Identidade visual básica",
      "Landing page personalizada",
      "Entrega em até 15 dias úteis",
    ],
    cta: "/contato",
    highlight: false,
  },
  {
    name: "Presença Completa",
    tagline: "Design, código e conteúdo sob o mesmo teto.",
    price: "R$ 4.000",
    labs: ["Studio", "Systems", "Creative"],
    labColors: ["text-amber-400", "text-sky-400", "text-rose-400"],
    includes: [
      "Identidade visual completa + manual",
      "Site multi-página (até 6 páginas)",
      "Kit social media pronto para usar",
      "Entrega em até 30 dias úteis",
    ],
    cta: "/contato",
    highlight: true,
  },
  {
    name: "Ecossistema Digital",
    tagline: "Tudo que uma marca precisa para crescer com consistência.",
    price: "R$ 7.500",
    labs: ["Studio", "Systems", "Creative"],
    labColors: ["text-amber-400", "text-sky-400", "text-rose-400"],
    includes: [
      "Tudo do Presença Completa",
      "Automações e integrações",
      "Gestão de redes por 3 meses",
      "Relatório mensal de performance",
    ],
    cta: "/contato",
    highlight: false,
  },
];

const labLinks = [
  {
    name: "Studio",
    href: "https://studio.poniralab.com",
    color: "text-amber-400/60 hover:text-amber-400",
  },
  {
    name: "Creative",
    href: "https://creative.poniralab.com",
    color: "text-rose-400/60 hover:text-rose-400",
  },
  {
    name: "Systems",
    href: "https://systems.poniralab.com",
    color: "text-sky-400/60 hover:text-sky-400",
  },
];

export default function CrossLab() {
  return (
    <section id="pacotes" className="py-32 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
        <div className="max-w-xl">
          <h2 className="text-ponira-yellow font-display text-[10px] uppercase tracking-normal mb-6 font-bold opacity-85">
            Pacotes Cross-Lab
          </h2>
          <p className="text-3xl md:text-4xl font-display text-ponira-white tracking-normal leading-normal">
            Três frentes. Uma entrega coesa.
          </p>
        </div>
        <p className="text-ponira-white/30 font-body font-light text-sm max-w-xs text-right leading-relaxed">
          Precisa de só uma frente? Explore os labs individualmente.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            // overflow-visible para o badge "+escolhido" não ser cortado
            className="relative overflow-visible"
          >
            {/* Badge destaque — fora do CardContainer para não ser afetado pelo tilt */}
            {pkg.highlight && (
              <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 z-20">
                <span className="text-[9px] font-body font-black uppercase tracking-widest px-3 py-1 bg-ponira-yellow text-ponira-brown rounded-full">
                  +escolhido
                </span>
              </div>
            )}

            <CardContainer containerClassName="w-full" className="w-full">
              <CardBody
                className={`relative flex flex-col rounded-tr-[80px] rounded-bl-[80px] border transition-colors duration-300 h-full ${
                  pkg.highlight
                    ? "border-ponira-yellow/30 bg-ponira-yellow/5"
                    : "border-ponira-white/5 bg-black/10 hover:border-ponira-white/10"
                }`}
                style={{ padding: "32px 56px 56px 32px" }}
              >
                <div className="relative z-10 flex flex-col h-full">

                  {/* Labs */}
                  <CardItem translateZ="40" className="flex gap-2 mb-6 flex-wrap">
                    {pkg.labs.map((lab, j) => (
                      <span
                        key={lab}
                        className={`text-[9px] font-body font-black uppercase tracking-widest ${pkg.labColors[j]}`}
                      >
                        {lab}
                        {j < pkg.labs.length - 1 && (
                          <span className="text-ponira-white/20 ml-2">+</span>
                        )}
                      </span>
                    ))}
                  </CardItem>

                  {/* Nome e tagline */}
                  <CardItem translateZ="50" className="mb-8">
                    <h3 className="text-xl font-display italic text-ponira-white tracking-normal mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-ponira-white/40 font-body font-light text-sm tracking-normal leading-relaxed">
                      {pkg.tagline}
                    </p>
                  </CardItem>

                  {/* Includes */}
                  <CardItem translateZ="30" className="flex-1 mb-10">
                    <ul className="space-y-3">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="text-ponira-yellow mt-0.5 text-xs">✦</span>
                          <span className="text-ponira-white/60 font-body font-light text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardItem>

                  {/* Preço + CTA */}
                  <CardItem translateZ="60" className="border-t border-ponira-white/5 pt-6 flex flex-col gap-4">
                    <div>
                      <span className="text-ponira-white/20 font-body text-[9px] uppercase tracking-widest block mb-1">
                        A partir de
                      </span>
                      <span className="text-2xl font-display text-ponira-white">
                        {pkg.price}
                      </span>
                    </div>
                    <Link
                      href={pkg.cta}
                      className={`text-center py-3 rounded-full font-body text-[10px] uppercase tracking-widest transition-all duration-300 ${
                        pkg.highlight
                          ? "bg-ponira-yellow text-ponira-brown hover:scale-[1.02]"
                          : "border border-ponira-white/10 text-ponira-white/50 hover:border-ponira-yellow/30 hover:text-ponira-yellow"
                      }`}
                    >
                      Solicitar orçamento
                    </Link>
                  </CardItem>

                </div>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>

      {/* Links para labs individuais */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-ponira-white/5"
      >
        <p className="text-ponira-white/20 font-body font-light text-sm">
          Precisa de só uma frente? Explore os labs individualmente →
        </p>
        <div className="flex gap-8">
          {labLinks.map((lab) => (
            <a
              key={lab.name}
              href={lab.href}
              className={`font-body text-[10px] uppercase tracking-widest transition-colors duration-300 ${lab.color}`}
            >
              {lab.name} ↗
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}