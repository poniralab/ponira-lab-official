"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const BASE = "https://poniralab.com";

const navLinks = [
  { name: "Manifesto", href: `${BASE}/#manifesto` },
  { name: "Labs",      href: `${BASE}/#labs` },
  { name: "Artefatos", href: `${BASE}/#showcase` },
  { name: "Pacotes",   href: `${BASE}/#pacotes` },
  { name: "Cases",     href: `${BASE}/cases` },
  { name: "Contato",   href: `${BASE}/contato` },
  { name: "Sócias",    href: `${BASE}/#founders` },
];

export default function NavbarLab() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center pointer-events-none"
      >
        {/* ── Logo ── */}
        <div className="pointer-events-auto">
          <a href={BASE} className="flex items-center gap-3 group">
            <img
              src="/logo-icon.svg"
              alt="Ponira"
              className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span className="text-ponira-white/30 group-hover:text-ponira-white transition-colors font-body text-[9px] uppercase tracking-[0.4em] font-bold">
              Ponira Lab
            </span>
          </a>
        </div>

        {/* ── Desktop links ── */}
        <div className="hidden md:flex gap-10 pointer-events-auto bg-black/5 backdrop-blur-sm border border-ponira-white/5 px-8 py-3 rounded-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-ponira-white/30 hover:text-ponira-yellow transition-colors font-body text-[9px] uppercase tracking-[0.2em] font-bold"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* ── Status ── */}
        <div className="hidden lg:block pointer-events-auto text-right">
          <span className="text-ponira-white/10 font-body text-[8px] uppercase tracking-widest block">
            Base: Rio de Janeiro, RJ
          </span>
          <span className="text-ponira-yellow/40 font-body text-[8px] uppercase tracking-widest block">
            Status: Online_026
          </span>
        </div>

        {/* ── Hamburger mobile ── */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden pointer-events-auto flex flex-col gap-[5px] p-2 group"
          aria-label="Menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px bg-ponira-white/40 group-hover:bg-ponira-yellow transition-colors origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-px bg-ponira-white/40 group-hover:bg-ponira-yellow transition-colors"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px bg-ponira-white/40 group-hover:bg-ponira-yellow transition-colors origin-center"
          />
        </button>
      </motion.nav>

      {/* ── Mobile overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-ponira-brown/95 backdrop-blur-lg md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-12"
            >
              <img
                src="/logo-icon.svg"
                alt="Ponira"
                className="w-12 h-12 opacity-20"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </motion.div>

            <nav className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 + 0.15 }}
                  className="text-ponira-white/50 hover:text-ponira-yellow transition-colors font-display text-4xl italic uppercase tracking-wide"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <img src="/logo-full.svg" alt="Ponira Lab" className="w-32 mt-12 opacity-10" />

            <p className="absolute bottom-10 text-ponira-white/10 font-body text-[8px] uppercase tracking-[0.3em]">
              Ponira Lab © 2026
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}