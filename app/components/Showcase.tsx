"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import ShapeBlur from "@/components/ShapeBlur";
import { cases, labMeta } from "@/lib/cases";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const featured = cases.filter((c) => c.featured);

export default function Showcase() {
  return (
    <section id="showcase" className="py-32 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
        <div className="max-w-xl">
          <h2 className="text-ponira-yellow font-display text-[10px] uppercase tracking-[0.5em] mb-6 font-bold opacity-85">
            Artefatos Selecionados
          </h2>
          <p className="text-3xl md:text-4xl font-body font-bold text-ponira-white leading-normal">
            Execuções que equilibram precisão técnica e intenção estética.
          </p>
        </div>
        <Link
          href="/cases"
          className="text-ponira-white/30 hover:text-ponira-yellow font-body text-xs uppercase tracking-widest pb-2 border-b border-ponira-white/10 hover:border-ponira-yellow/40 transition-all duration-300 whitespace-nowrap"
        >
          Ver todos os cases →
        </Link>
      </div>

      {/* Grid — apenas featured */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
        {featured.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.06 }}
            viewport={{ once: true }}
            className="group"
          >
            <CardContainer containerClassName="w-full" className="w-full">
              <CardBody className="w-full">
                <Link href={`/cases/${project.slug}`} className="block">
                  {/* Cover */}
                  <CardItem translateZ="50" className="w-full">
                    <div className="aspect-video mb-8 overflow-hidden rounded-tr-[80px] rounded-bl-[80px] border border-ponira-white/5 relative bg-black/20">
                      {/* ShapeBlur fundo */}
                      <div className="absolute inset-0 pointer-events-none">
                        <ShapeBlur
                          variation={0}
                          pixelRatioProp={
                            typeof window !== "undefined"
                              ? window.devicePixelRatio
                              : 1
                          }
                          shapeSize={0.8}
                          roundness={0.5}
                          borderSize={0.05}
                          circleSize={0.25}
                          circleEdge={1}
                        />
                      </div>

                      {project.cover ? (
                        <img
                          src={project.cover}
                          alt={project.title}
                          className="relative z-10 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-ponira-brown/60 to-transparent" />
                      )}

                      <div className="absolute inset-0 z-20 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-ponira-yellow font-body text-xs uppercase tracking-widest border border-ponira-yellow/40 px-4 py-2 rounded-full backdrop-blur-sm bg-black/30">
                          Ver Case ↗
                        </span>
                      </div>

                      {/* Lab badge — flutua acima da imagem */}
                      <CardItem
                        translateZ="80"
                        className="absolute top-4 left-4 z-30"
                      >
                        <span className="text-[8px] font-body font-black uppercase tracking-widest px-2 py-1 rounded-full bg-black/40 backdrop-blur-sm text-ponira-yellow border border-ponira-yellow/20">
                          {labMeta[project.lab].label}
                        </span>
                      </CardItem>
                    </div>
                  </CardItem>

                  {/* Info */}
                  <CardItem translateZ="30" className="flex flex-col gap-2">
                    <span className="text-ponira-yellow font-display text-[10px] font-black tracking-[0.2em] uppercase">
                      {project.category} · {project.year}
                    </span>
                    <h3 className="text-2xl font-display text-ponira-white italic group-hover:translate-x-2 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <p className="text-ponira-white/50 font-body font-light text-sm max-w-md leading-relaxed">
                      {project.subtitle}
                    </p>
                    <div className="mt-3">
                      <span className="text-[10px] font-mono text-ponira-white/20 uppercase tracking-tighter">
                        {project.tools.join(" • ")}
                      </span>
                    </div>
                  </CardItem>
                </Link>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>

      {/* CTA final */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-24 pt-12 border-t border-ponira-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <p className="text-ponira-white/30 font-body font-light text-sm">
          {cases.length} projetos no total — sistemas, identidades, social media
          e automação.
        </p>
        <Link
          href="/cases"
          className="group flex items-center gap-3 px-8 py-4 border border-ponira-white/10 hover:border-ponira-yellow/40 rounded-full font-body text-xs uppercase tracking-widest text-ponira-white/40 hover:text-ponira-yellow transition-all duration-300"
        >
          Explorar todos os cases
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
