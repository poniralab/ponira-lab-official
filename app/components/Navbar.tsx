"use client";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const BASE_URL = "https://poniralab.com";

const rawNavLinks = [
  { name: "Manifesto", href: "/#manifesto" },
  { name: "Labs", href: "/#labs" },
  { name: "Artefatos", href: "/#showcase" },
  { name: "Pacotes", href: "/#pacotes" },
  { name: "Cases", href: "/cases" },
  { name: "Contato", href: "/contato" },
  { name: "Sócias", href: "/#founders" },
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
      {/* ── ESTADO INICIAL — navbar horizontal assimétrica ── */}
      <AnimatePresence>
        {!scrolled && (
          <motion.nav
            key="top-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.25 } }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 px-8 pt-8 flex justify-between items-start pointer-events-none"
          >
            {/* Logo — peso grande à esquerda */}
            <div className="pointer-events-auto flex flex-col gap-1">
              <a href={homeHref} className="group flex items-center gap-3">
                <img
                  src="/logo-icon.svg"
                  alt="Ponira"
                  className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-all duration-500"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
                <div className="flex flex-col">
                  <span className="text-ponira-white font-display italic text-xl leading-none tracking-tight group-hover:text-ponira-yellow transition-colors duration-300">
                    PONIRA
                  </span>
                  <span className="text-ponira-white/20 font-mono text-[8px] uppercase tracking-[0.4em]">
                    LAB
                  </span>
                </div>
              </a>
              {/* Status vivo abaixo do logo */}
              <div className="mt-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-ponira-yellow animate-pulse" />
                <span className="text-ponira-white/20 font-mono text-[8px] uppercase tracking-widest">
                  Online · RJ · 2026
                </span>
              </div>
            </div>

            {/* Links flutuando soltos — sem container, desalinhados propositalmente */}
            <div className="hidden md:flex flex-col items-end gap-3 mt-1 pointer-events-auto">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.3, duration: 0.5 }}
                  // offset alternado para desequilíbrio visual
                  style={{ marginRight: i % 2 === 0 ? "0px" : "18px" }}
                  className="text-ponira-white/25 hover:text-ponira-yellow transition-all duration-300 font-body text-[9px] uppercase tracking-[0.25em] font-bold hover:tracking-[0.4em]"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Hamburger mobile */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden pointer-events-auto flex flex-col gap-[5px] p-2 group mt-1"
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

      {/* ── ESTADO SCROLLADO — barra lateral estreita ── */}
      <AnimatePresence>
        {scrolled && (
          <motion.nav
            key="side-nav"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed left-0 top-0 h-full z-50 hidden md:flex flex-col justify-between py-10 px-4 border-r border-ponira-white/5 bg-black/20 backdrop-blur-sm"
            style={{ width: "56px" }}
          >
            {/* Logo compacto */}
            <a href={homeHref} className="group flex justify-center">
              <img
                src="/logo-icon.svg"
                alt="Ponira"
                className="w-5 h-5 opacity-30 group-hover:opacity-100 transition-all duration-500"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </a>

            {/* Links verticais rotacionados */}
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-ponira-white/20 hover:text-ponira-yellow transition-all duration-300 font-mono text-[7px] uppercase tracking-widest"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Dot de status */}
            <div className="flex justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-ponira-yellow/40 animate-pulse" />
            </div>
          </motion.nav>
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