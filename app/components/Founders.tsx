"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ShapeBlur from "@/components/ShapeBlur";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export default function Founders() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="text-ponira-yellow font-body text-[10px] uppercase tracking-[0.5em] mb-6 font-bold opacity-60">
          As Sócias
        </h2>
        <p className="text-3xl md:text-5xl font-display text-ponira-white italic leading-tight max-w-3xl">
          A fusão entre a arquitetura de sistemas e a direção de arte
          estratégica.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

        {/* --- CAROL: A ALMA (DESIGN) --- */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <CardContainer containerClassName="w-full" className="w-full">
            <CardBody className="w-full">

              {/* Foto */}
              <CardItem translateZ="50" className="w-full">
                <div className="aspect-[4/5] relative bg-black/20 rounded-tr-[80px] rounded-bl-[80px] overflow-hidden border border-ponira-white/5 grayscale hover:grayscale-0 transition-all duration-700">
                  <div className="absolute inset-0 pointer-events-none">
                    <ShapeBlur
                      variation={0}
                      pixelRatioProp={typeof window !== "undefined" ? window.devicePixelRatio : 1}
                      shapeSize={0.8}
                      roundness={0.5}
                      borderSize={0.05}
                      circleSize={0.25}
                      circleEdge={1}
                    />
                  </div>
                  <Image
                    src="/carol-ponira.jpg"
                    alt="Ana Carolina"
                    width={600}
                    height={900}
                    className="relative z-10 w-full h-full object-cover"
                  />
                </div>
              </CardItem>

              {/* Info */}
              <CardItem translateZ="30" className="mt-8">
                <span className="text-ponira-yellow font-body text-[10px] font-black tracking-[0.3em] uppercase mb-2 block">
                  ALMA / CREATIVE & STUDIO
                </span>
                <h3 className="text-4xl font-display text-ponira-white italic mb-4">
                  ANA CAROLINA
                </h3>
                <p className="text-ponira-white/60 font-body font-light text-base leading-relaxed max-w-md">
                  Liderança Criativa. Especialista em fotografia afetiva, UI/Visual
                  e direção de arte estratégica. Responsável pela estética, assets
                  visuais e pela identidade que comunica o propósito de cada marca.
                </p>
              </CardItem>

            </CardBody>
          </CardContainer>
        </motion.div>

        {/* --- MARIA: O CORPO (DEV) --- */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8 md:mt-24"
        >
          <CardContainer containerClassName="w-full" className="w-full">
            <CardBody className="w-full">

              {/* Foto */}
              <CardItem translateZ="50" className="w-full">
                <div className="aspect-[4/5] relative bg-black/20 rounded-tr-[80px] rounded-bl-[80px] overflow-hidden border border-ponira-white/5 grayscale hover:grayscale-0 transition-all duration-700">
                  <div className="absolute inset-0 pointer-events-none">
                    <ShapeBlur
                      variation={0}
                      pixelRatioProp={typeof window !== "undefined" ? window.devicePixelRatio : 1}
                      shapeSize={0.8}
                      roundness={0.5}
                      borderSize={0.05}
                      circleSize={0.25}
                      circleEdge={1}
                    />
                  </div>
                  <Image
                    src="/maria-ponira.jpg"
                    alt="Maria Clara"
                    width={600}
                    height={900}
                    className="relative z-10 w-full h-full object-cover"
                  />
                </div>
              </CardItem>

              {/* Info */}
              <CardItem translateZ="30" className="mt-8">
                <span className="text-ponira-yellow font-body text-[10px] font-black tracking-[0.3em] uppercase mb-2 block">
                  CORPO / SYSTEMS & UX
                </span>
                <h3 className="text-4xl font-display text-ponira-white italic mb-4">
                  MARIA CLARA
                </h3>
                <p className="text-ponira-white/60 font-body font-light text-base leading-relaxed max-w-md">
                  Liderança Técnica. Graduanda em Ciências Biológicas (UFRJ) e
                  Análise de Sistemas (UNINTER). Arquiteta de código, infraestrutura
                  e automação, focada na precisão técnica que sustenta a autoridade
                  digital.
                </p>
              </CardItem>

            </CardBody>
          </CardContainer>
        </motion.div>

      </div>
    </section>
  );
}