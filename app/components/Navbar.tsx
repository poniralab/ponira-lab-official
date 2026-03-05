"use client";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const BASE_URL = "https://poniralab.com";

const rawNavLinks = [
  { name: "Labs", href: "/#labs" },
  { name: "Artefatos", href: "/#showcase" },
  { name: "Pacotes", href: "/#pacotes" },
  { name: "Sócias", href: "/#founders" },
  { name: "Cases", href: "/cases" },
  { name: "Contato", href: "/contato" },
  
];

function useIsSubdomain() {
  const [isSubdomain] = useState(() => {
    if (typeof window === "undefined") return false;
    const parts = window.location.hostname.split(".");
    return parts.length > 2 && parts[0] !== "www";
  });
  return isSubdomain;
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isSubdomain = useIsSubdomain();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  const navLinks = rawNavLinks.map((link) => ({
    ...link,
    href: isSubdomain ? `${BASE_URL}${link.href}` : link.href,
  }));

  const homeHref = isSubdomain ? BASE_URL : "/";

  return (
    <>
      {/* ── NAVBAR HORIZONTAL — visível no topo ── */}
      <AnimatePresence>
        {!scrolled && (
          <motion.nav
            key="top-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.25 } }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between pointer-events-none"
          >
            {/* Logo */}
            <a href={homeHref} className="pointer-events-auto group flex items-center gap-3">
              <img
                src="/logo-icon.svg"
                alt="Ponira"
                className="w-7 h-7 opacity-40 group-hover:opacity-100 transition-all duration-500"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <div className="flex flex-col">
                <span className="text-ponira-white font-display italic text-lg leading-none tracking-tight group-hover:text-ponira-yellow transition-colors duration-300">
                  PONIRA
                </span>
                <span className="text-ponira-white/20 font-mono text-[8px] uppercase tracking-[0.4em]">
                  LAB
                </span>
              </div>
            </a>

            {/* Links — desktop horizontal */}
            <div className="hidden md:flex items-center gap-8 pointer-events-auto">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 + 0.3, duration: 0.5 }}
                  className="text-ponira-white/25 hover:text-ponira-yellow transition-all duration-300 font-body text-[9px] uppercase tracking-[0.25em] font-bold hover:tracking-[0.4em]"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Hamburger mobile */}
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
        )}
      </AnimatePresence>

      {/* ── ÍCONE FLUTUANTE — visível ao scrollar (desktop only) ── */}
      <AnimatePresence>
        {scrolled && (
          <motion.a
            key="floating-icon"
            href={homeHref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-6 left-6 z-50 hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-ponira-white/10 bg-ponira-brown/60 backdrop-blur-md hover:border-ponira-yellow/40 hover:bg-ponira-brown/80 transition-all duration-300 group"
            aria-label="Voltar ao início"
          >
            <img
              src="/logo-icon.svg"
              alt="Ponira"
              className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </motion.a>
        )}
      </AnimatePresence>

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

            <img
              src="/logo-full.svg"
              alt="Ponira Lab"
              className="w-32 mt-12 opacity-10"
            />
            <p className="absolute bottom-10 text-ponira-white/10 font-body text-[8px] uppercase tracking-[0.3em]">
              Ponira Lab © 2026
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}