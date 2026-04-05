"use client";

/**
 * CaseCover
 *
 * Renderiza o cover de um case com três estados:
 *  1. Imagem real (cover path ou URL externa) → <img> normal
 *  2. Cover em /public/covers/ ainda não gerado → fallback visual
 *  3. cover: null explícito → fallback visual
 *
 * O fallback exibe o nome do projeto, tools e um grid técnico
 * no estilo da identidade da Ponira, sem parecer "quebrado".
 */

import { useState } from "react";
import type { CaseStudy, Lab } from "@/lib/cases";

// Cor de acento por lab — consistente com o resto do site
const LAB_COLOR: Record<Lab, string> = {
  studio: "#FBBF24", // amber-400
  creative: "#FB7185", // rose-400
  systems: "#38BDF8", // sky-400
  audiovisual: "#34D399", // emerald-400
};

interface CaseCoverProps {
  c: CaseStudy;
  /** Classes aplicadas ao container externo */
  className?: string;
  /** Classes de aspect-ratio e overflow do container */
  aspectClass?: string;
}

export default function CaseCover({
  c,
  className = "",
  aspectClass = "aspect-video",
}: CaseCoverProps) {
  const [imgError, setImgError] = useState(false);

  const accentColor = LAB_COLOR[c.lab];

  // Resolve o src: cover explícito > path automático em /public/covers/
  const resolvedSrc = c.cover ?? `/covers/${c.slug}.png`;

  const showImage = !imgError;

  return (
    <div
      className={`relative overflow-hidden rounded-sm border border-ponira-white/5 bg-black/20 ${aspectClass} ${className}`}
    >
      {showImage ? (
        <img
          src={resolvedSrc}
          alt={c.title}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
      ) : (
        <FallbackCover c={c} accentColor={accentColor} />
      )}
    </div>
  );
}

// ─── Fallback visual ───────────────────────────────────────────────────────

function FallbackCover({
  c,
  accentColor,
}: {
  c: CaseStudy;
  accentColor: string;
}) {
  return (
    <div className="absolute inset-0 flex flex-col justify-between p-6 select-none">
      {/* Grid técnico de fundo */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`grid-${c.slug}`}
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${c.slug})`} />
      </svg>

      {/* Linha de acento superior */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${accentColor}60, transparent)`,
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between">
        <span
          className="font-body text-[8px] uppercase tracking-[0.4em] font-black"
          style={{ color: accentColor }}
        >
          {c.category}
        </span>
        <span className="font-body text-[8px] uppercase tracking-widest text-ponira-white/20">
          {c.year}
        </span>
      </div>

      {/* Nome do projeto — centro */}
      <div className="relative z-10 flex-1 flex items-center">
        <div>
          <p className="font-display italic text-ponira-white/10 text-5xl leading-none mb-3 select-none">
            ✦
          </p>
          <h3
            className="font-display italic leading-tight"
            style={{
              fontSize: "clamp(1.25rem, 3vw, 2rem)",
              color: `${accentColor}CC`,
            }}
          >
            {c.title}
          </h3>
          <p className="font-body font-light text-ponira-white/30 text-xs mt-2 leading-relaxed max-w-[240px]">
            {c.subtitle}
          </p>
        </div>
      </div>

      {/* Tools — rodapé */}
      <div className="relative z-10 flex flex-wrap gap-x-3 gap-y-1">
        {c.tools.slice(0, 5).map((tool) => (
          <span
            key={tool}
            className="font-mono text-[8px] uppercase tracking-wider"
            style={{ color: `${accentColor}50` }}
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Linha de acento inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, ${accentColor}30, transparent)`,
        }}
      />
    </div>
  );
}
