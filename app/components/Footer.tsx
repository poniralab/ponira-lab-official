"use client";

import Link from "next/link";

const labs = [
  { name: "Studio", href: "https://studio.poniralab.com", color: "text-amber-400 border-amber-400/25 hover:bg-amber-400/10" },
  { name: "Creative", href: "https://creative.poniralab.com", color: "text-rose-400 border-rose-400/25 hover:bg-rose-400/10" },
  { name: "Systems", href: "https://systems.poniralab.com", color: "text-sky-400 border-sky-400/25 hover:bg-sky-400/10" },
];

const navLinks = [
  { label: "Manifesto", href: "/#manifesto" },
  { label: "Labs", href: "/#labs" },
  { label: "Cases", href: "/cases" },
  { label: "Pacotes", href: "/#pacotes" },
  { label: "Contato", href: "/contato" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/poniralab" },
  { label: "LinkedIn", href: "https://linkedin.com/company/poniralab" },
  { label: "GitHub", href: "https://github.com/poniralab" },
  { label: "TikTok", href: "https://tiktok.com/@poniralab" },
  { label: "WhatsApp", href: "https://wa.me/5521998382038" },
];

function FooterLink({ href, children, external = false }: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const cls = "group flex items-center gap-1.5 text-ponira-white/40 hover:text-ponira-yellow font-body text-xs font-light transition-colors duration-200";
  const arrow = (
    <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[10px]">
      ↗
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}{arrow}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}{arrow}
    </Link>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ponira-white/5 overflow-hidden">

      {/* Faixa dourada topo */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(198,141,7,0.5) 30%, rgba(198,141,7,0.5) 70%, transparent 100%)" }}
      />

      {/* ── HERO ── */}
      <div className="px-6 md:px-12 pt-16 pb-12 border-b border-ponira-white/5 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
        <h2 className="font-display italic text-ponira-white leading-[0.95] text-4xl md:text-6xl lg:text-7xl max-w-xl">
          Sua marca merece<br />
          existir com{" "}
          <span className="text-ponira-yellow">intenção.</span>
        </h2>
        <Link
          href="/contato"
          className="group flex items-center gap-3 px-8 py-4 border border-ponira-yellow/20 rounded-full font-body text-[10px] uppercase tracking-widest text-ponira-yellow hover:bg-ponira-yellow hover:text-ponira-brown transition-all duration-300 whitespace-nowrap"
        >
          Iniciar projeto
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </Link>
      </div>

      {/* ── GRID ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-ponira-white/5">

        {/* Col 1 — Sobre */}
        <div className="px-6 md:px-12 py-10 lg:border-r border-ponira-white/5">
          <span className="text-ponira-white/20 font-body text-[9px] uppercase tracking-widest block mb-5">
            Sobre
          </span>
          <p className="text-ponira-white/40 font-body font-light text-sm leading-relaxed mb-7 max-w-xs">
            Boutique criativa carioca com três frentes integradas — design, conteúdo e tecnologia com intenção.
          </p>
          <div className="flex flex-wrap gap-2">
            {labs.map((lab) => (
              <a
                key={lab.name}
                href={lab.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-body text-[8px] font-black uppercase tracking-[0.3em] px-3 py-1.5 rounded-full border transition-all duration-250 ${lab.color}`}
              >
                {lab.name}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Navegação */}
        <div className="px-6 md:px-12 py-10 md:border-l lg:border-l lg:border-r border-ponira-white/5">
          <span className="text-ponira-white/20 font-body text-[9px] uppercase tracking-widest block mb-5">
            Navegação
          </span>
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.label}>
                <FooterLink href={l.href}>{l.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Social */}
        <div className="px-6 md:px-12 py-10 md:border-r lg:border-r border-ponira-white/5">
          <span className="text-ponira-white/20 font-body text-[9px] uppercase tracking-widest block mb-5">
            Social
          </span>
          <ul className="space-y-3">
            {socialLinks.map((l) => (
              <li key={l.label}>
                <FooterLink href={l.href} external>{l.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contato */}
        <div className="px-6 md:px-12 py-10">
          <span className="text-ponira-white/20 font-body text-[9px] uppercase tracking-widest block mb-5">
            Contato
          </span>
          <ul className="space-y-3 mb-8">
            <li>
              <FooterLink href="mailto:contato@poniralab.com" external>
                contato@poniralab.com
              </FooterLink>
            </li>
          </ul>

          <span className="text-ponira-white/20 font-body text-[9px] uppercase tracking-widest block mb-2">
            Base
          </span>
          <p className="text-ponira-white/35 font-body font-light text-xs leading-relaxed mb-7">
            Rio de Janeiro, RJ<br />Brasil
          </p>

          <span className="text-ponira-white/20 font-body text-[9px] uppercase tracking-widest block mb-2">
            Resposta
          </span>
          <p className="text-ponira-white/35 font-body font-light text-xs leading-relaxed">
            Em até 24h úteis
          </p>
        </div>

      </div>

      {/* ── BARRA INFERIOR ── */}
      <div className="px-6 md:px-12 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

        <div className="flex items-center gap-4">
          <img
            src="/logo-icon.svg"
            alt="Ponira"
            className="w-5 h-5 opacity-15"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <span className="font-display italic text-ponira-white/15 text-lg tracking-wide">
            PONIRA.LAB
          </span>
          <span className="text-ponira-white/10 font-body text-[8px] uppercase tracking-[0.3em]">
            © {currentYear}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <span className="text-ponira-white/10 font-body text-[8px] uppercase tracking-[0.25em]">
            Rio de Janeiro · Brasil
          </span>
          <span className="text-ponira-white/10 font-body text-[8px] uppercase tracking-[0.25em]">
            Corpo: Maria · Voz &amp; Alma: Carol
          </span>
          <a
            href="https://poniralab.com"
            className="text-ponira-yellow/30 hover:text-ponira-yellow font-body text-[8px] uppercase tracking-[0.25em] transition-colors duration-200"
          >
            poniralab.com
          </a>
        </div>

      </div>

    </footer>
  );
}