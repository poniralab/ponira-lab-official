"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-ponira-white/5 bg-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          {/* Contato */}
          <div className="md:col-span-1">
            <span className="text-ponira-bronze font-body text-[9px] uppercase tracking-[0.4em] mb-4 block font-bold opacity-60">
              Contato
            </span>
            <a
              href="mailto:contato@poniralab.com"
              className="text-[11px] font-body text-ponira-white/70 hover:text-ponira-yellow transition-colors duration-300 break-all"
            >
              contato@poniralab.com
            </a>
          </div>

          {/* Social */}
          <div>
            <span className="text-ponira-white/20 font-body text-[9px] uppercase tracking-widest block mb-4">
              Social
            </span>
            <ul className="text-ponira-white/50 font-body text-[10px] space-y-2 uppercase tracking-tighter">
              {[
                { label: "Instagram", href: "https://instagram.com/poniralab" },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/company/poniralab",
                },
                { label: "GitHub", href: "https://github.com/poniralab" },
                { label: "TikTok", href: "https://tiktok.com/@poniralab" },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ponira-yellow transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Labs */}
          <div>
            <span className="text-ponira-white/20 font-body text-[9px] uppercase tracking-widest block mb-4">
              Labs
            </span>
            <ul className="text-ponira-white/50 font-body text-[10px] space-y-2 italic">
              {[
                { label: "Creative", href: "https://creative.poniralab.com" },
                { label: "Studio", href: "https://studio.poniralab.com" },
                { label: "Systems", href: "https://systems.poniralab.com" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ponira-yellow transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Base */}
          <div className="md:text-right">
            <span className="text-ponira-white/20 font-body text-[9px] uppercase tracking-widest block mb-4">
              Base
            </span>
            <p className="text-ponira-white/50 font-body text-[10px] leading-relaxed uppercase">
              Rio de Janeiro, RJ
              <br />
              Brasil
            </p>
            <a
              href="https://wa.me/5521998382038"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-ponira-yellow/60 hover:text-ponira-yellow font-body text-[10px] uppercase tracking-widest transition-colors"
            >
              WhatsApp ↗
            </a>
          </div>
        </div>

        {/* ── Assinatura com logo real ── */}
        <div className="mt-20 pt-6 border-t border-ponira-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            {/*
              Logo horizontal completo (ícone + wordmark).
              Se você tiver logo-full.svg, use-o aqui para uma assinatura mais rica.
              Fallback: apenas o ícone com o texto ao lado.
            */}
            <img
              src="/logo-icon.svg"
              alt="Ponira"
              className="w-4 h-4 opacity-15"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span className="text-ponira-white/10 font-body text-[8px] uppercase tracking-[0.3em]">
              Ponira Lab © {currentYear}
            </span>
          </div>
          <div className="text-ponira-white/20 font-body text-[8px] uppercase tracking-[0.3em]">
            Corpo: Maria • Voz & Alma: Carol
          </div>
        </div>
      </div>
    </footer>
  );
}
