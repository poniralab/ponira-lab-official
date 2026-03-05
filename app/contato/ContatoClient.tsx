"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Grainient from "@/Grainient";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ViewportBlur from "@/app/components/ViewportBlur";

const WHATSAPP_NUMBER = "5521998382038";

const tiposProjeto = [
  { value: "", label: "Selecione uma frente" },
  { value: "Creative — Social Media & Marketing", label: "Creative — Social Media & Marketing" },
  { value: "Studio — Design & Branding", label: "Studio — Design & Branding" },
  { value: "Systems — Dev & Automação", label: "Systems — Dev & Automação" },
  { value: "Múltiplas frentes", label: "Múltiplas frentes" },
];

type FormData = {
  nome: string;
  email: string;
  whatsapp: string;
  tipoProjeto: string;
  orcamento: string;
};

type Status = "idle" | "loading" | "success" | "error";

interface GravatarProfile {
  display_name?: string;
  avatar_url?: string;
  job_title?: string;
  company?: string;
  location?: string;
}

// ─── SHA-256 no browser via Web Crypto API ────────────────────────────────────

async function sha256(str: string): Promise<string> {
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(str.trim().toLowerCase()),
  );
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// ─── Hook: busca Gravatar com debounce ────────────────────────────────────────

function useGravatarLookup(
  email: string,
  onProfile: (profile: GravatarProfile | null) => void,
) {
  const [profile, setProfile] = useState<GravatarProfile | null>(null);
  const [looking, setLooking] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastEmail = useRef("");
  // Ref estável para o callback — evita re-executar o effect se a função mudar
  const onProfileRef = useRef(onProfile);
  useEffect(() => { onProfileRef.current = onProfile; });

  useEffect(() => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail || email === lastEmail.current) {
      if (!isValidEmail) {
        setProfile(null);
        // Chamada assíncrona — fora do corpo síncrono do effect
        Promise.resolve().then(() => onProfileRef.current(null));
      }
      return;
    }

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(async () => {
      setLooking(true);
      lastEmail.current = email;

      try {
        const hash = await sha256(email);
        const res = await fetch(`/api/gravatar?hash=${hash}`);
        if (res.ok) {
          const data = await res.json();
          // setState dentro de callback assíncrono — sem cascata
          setProfile(data);
          onProfileRef.current(data);
        } else {
          setProfile(null);
          onProfileRef.current(null);
        }
      } catch {
        setProfile(null);
        onProfileRef.current(null);
      } finally {
        setLooking(false);
      }
    }, 700);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [email]);

  return { profile, looking };
}

// ─── Componente principal ─────────────────────────────────────────────────────

export default function ContatoClient() {
  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    whatsapp: "",
    tipoProjeto: "",
    orcamento: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [namePrefilled, setNamePrefilled] = useState(false);
  // Ref para acessar o nome atual sem tornar o callback uma dependência instável
  const nomeRef = useRef(form.nome);
  useEffect(() => { nomeRef.current = form.nome; });

  const { profile, looking } = useGravatarLookup(form.email, (found) => {
    if (found?.display_name && nomeRef.current.trim() === "") {
      setForm((prev) => ({ ...prev, nome: found.display_name! }));
      setNamePrefilled(true);
    } else if (!found) {
      setNamePrefilled(false);
    }
  });

  const isValid =
    form.nome.trim() !== "" &&
    form.email.trim() !== "" &&
    form.tipoProjeto !== "";

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "nome") setNamePrefilled(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          whatsapp: form.whatsapp || "Não informado",
          tipoProjeto: form.tipoProjeto,
          orcamento: form.orcamento || "Não informado",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ nome: "", email: "", whatsapp: "", tipoProjeto: "", orcamento: "" });
        setNamePrefilled(false);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function buildWhatsAppUrl() {
    const lines = [
      `Olá, Ponira Lab! 👋`,
      ``,
      `*Nome:* ${form.nome || "—"}`,
      `*Email:* ${form.email || "—"}`,
      `*Tipo de projeto:* ${form.tipoProjeto || "—"}`,
      `*Orçamento estimado:* ${form.orcamento || "—"}`,
    ];
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  }

  return (
    <main className="relative min-h-screen bg-ponira-brown overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <Grainient color1="#5a5539" color2="#3b2e0f" color3="#9b682a" />
      </div>
      <ViewportBlur />

      <div className="relative z-10">
        <Navbar />

        {/* ── HEADER ── */}
        <section className="pt-48 pb-16 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-ponira-yellow font-body text-[10px] uppercase tracking-[0.5em] font-bold opacity-60 block mb-6">
              Contato
            </span>
            <h1 className="text-5xl md:text-7xl font-display italic text-ponira-white leading-tight max-w-3xl mb-6">
              Vamos construir algo juntos.
            </h1>
            <p className="text-ponira-white/50 font-body font-light text-lg max-w-lg leading-relaxed">
              Preencha o formulário e entraremos em contato. Ou, se preferir
              algo mais direto, chame pelo WhatsApp.
            </p>
          </motion.div>
        </section>

        {/* ── FORMULÁRIO + ASIDE ── */}
        <section className="pb-32 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">

            {/* Formulário */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-7"
            >
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 flex flex-col items-start gap-4"
                >
                  <span className="text-ponira-yellow text-4xl">✦</span>
                  <h2 className="text-3xl font-display italic text-ponira-white">
                    Mensagem recebida.
                  </h2>
                  <p className="text-ponira-white/50 font-body font-light text-base max-w-sm leading-relaxed">
                    Em breve entraremos em contato. Você também receberá uma
                    confirmação no e-mail informado.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-ponira-yellow font-body text-[10px] uppercase tracking-widest hover:opacity-70 transition-opacity"
                  >
                    ← Enviar outra mensagem
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Email field — lookup Gravatar acontece aqui */}
                  <div className="flex flex-col gap-2">
                    <label className="text-ponira-white/30 font-body text-[9px] uppercase tracking-widest">
                      Email <span className="text-ponira-yellow ml-1">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        placeholder="seu@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/20 border border-ponira-white/10 focus:border-ponira-yellow/50 rounded-sm px-4 py-3 text-ponira-white font-body text-sm placeholder:text-ponira-white/20 outline-none transition-colors duration-300 pr-12"
                      />
                      {/* Indicador de status do lookup */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        {looking && (
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-ponira-yellow/40 font-body text-[8px] uppercase tracking-widest"
                          >
                            ···
                          </motion.span>
                        )}
                        {!looking && profile && (
                          <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-ponira-yellow text-xs"
                          >
                            ✦
                          </motion.span>
                        )}
                      </div>
                    </div>

                    {/* Card do perfil Gravatar encontrado */}
                    <AnimatePresence>
                      {profile && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center gap-4 px-4 py-3 border border-ponira-yellow/20 bg-ponira-yellow/5 rounded-sm"
                        >
                          {profile.avatar_url ? (
                            <img
                              src={`${profile.avatar_url}?s=48`}
                              alt={profile.display_name ?? ""}
                              width={40}
                              height={40}
                              className="rounded-full border border-ponira-yellow/30 shrink-0"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-full border border-ponira-yellow/20 bg-ponira-yellow/10 flex items-center justify-center shrink-0">
                              <span className="text-ponira-yellow/40 text-xs">✦</span>
                            </div>
                          )}
                          <div className="min-w-0">
                            {profile.display_name && (
                              <p className="text-ponira-white/80 font-body text-sm truncate">
                                {profile.display_name}
                              </p>
                            )}
                            {(profile.job_title || profile.company) && (
                              <p className="text-ponira-white/30 font-body text-[10px] truncate">
                                {[profile.job_title, profile.company]
                                  .filter(Boolean)
                                  .join(" · ")}
                              </p>
                            )}
                            {profile.location && (
                              <p className="text-ponira-white/20 font-body text-[9px]">
                                {profile.location}
                              </p>
                            )}
                          </div>
                          <span className="ml-auto text-ponira-yellow/30 font-body text-[8px] uppercase tracking-widest shrink-0">
                            Gravatar
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Nome — pode vir pré-preenchido */}
                  <div className="flex flex-col gap-2">
                    <label className="text-ponira-white/30 font-body text-[9px] uppercase tracking-widest flex items-center gap-2">
                      Nome
                      <span className="text-ponira-yellow ml-1">*</span>
                      <AnimatePresence>
                        {namePrefilled && (
                          <motion.span
                            initial={{ opacity: 0, x: -4 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-ponira-yellow/50 text-[8px] tracking-widest normal-case"
                          >
                            pré-preenchido via Gravatar
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </label>
                    <input
                      type="text"
                      name="nome"
                      placeholder="Seu nome"
                      value={form.nome}
                      onChange={handleChange}
                      required
                      className={`bg-black/20 border rounded-sm px-4 py-3 text-ponira-white font-body text-sm placeholder:text-ponira-white/20 outline-none transition-colors duration-300 ${
                        namePrefilled
                          ? "border-ponira-yellow/30 focus:border-ponira-yellow/60"
                          : "border-ponira-white/10 focus:border-ponira-yellow/50"
                      }`}
                    />
                  </div>

                  <Field
                    label="WhatsApp (opcional)"
                    name="whatsapp"
                    type="tel"
                    placeholder="(21) 99999-9999"
                    value={form.whatsapp}
                    onChange={handleChange}
                  />

                  <SelectField
                    label="Tipo de projeto"
                    name="tipoProjeto"
                    options={tiposProjeto}
                    value={form.tipoProjeto}
                    onChange={handleChange}
                    required
                  />

                  {status === "error" && (
                    <p className="text-red-400/80 font-body text-xs">
                      Algo deu errado. Tente novamente ou use o WhatsApp.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={!isValid || status === "loading"}
                    className="w-full py-5 bg-ponira-yellow text-ponira-brown font-body text-sm uppercase tracking-widest font-bold rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:scale-100"
                  >
                    {status === "loading" ? "Enviando..." : "Enviar por E-mail"}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Aside */}
            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="md:col-span-5 space-y-10 md:pt-2"
            >
              <div className="p-8 border border-ponira-white/5 rounded-sm bg-black/10 space-y-5">
                <div>
                  <span className="text-ponira-white/20 font-body text-[9px] uppercase tracking-widest block mb-3">
                    Prefere algo mais rápido?
                  </span>
                  <h3 className="text-2xl font-display italic text-ponira-white mb-2">
                    Chame pelo WhatsApp
                  </h3>
                  <p className="text-ponira-white/40 font-body font-light text-sm leading-relaxed">
                    Preencha os campos ao lado e clique abaixo — a mensagem já
                    chega formatada pra gente.
                  </p>
                </div>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 border border-ponira-yellow/30 hover:border-ponira-yellow hover:bg-ponira-yellow/5 text-ponira-yellow font-body text-xs uppercase tracking-widest rounded-full transition-all duration-300"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Abrir no WhatsApp
                </a>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-ponira-white/20 font-body text-[9px] uppercase tracking-widest block mb-2">Email</span>
                  <a href="mailto:contato@poniralab.com" className="text-ponira-white/60 hover:text-ponira-yellow font-body text-sm transition-colors">
                    contato@poniralab.com
                  </a>
                </div>
                <div>
                  <span className="text-ponira-white/20 font-body text-[9px] uppercase tracking-widest block mb-2">Base</span>
                  <p className="text-ponira-white/60 font-body text-sm">Rio de Janeiro, RJ · Brasil</p>
                </div>
                <div>
                  <span className="text-ponira-white/20 font-body text-[9px] uppercase tracking-widest block mb-2">Tempo de resposta</span>
                  <p className="text-ponira-white/60 font-body text-sm">Em até 24h úteis</p>
                </div>
              </div>
            </motion.aside>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

// ─── Subcomponentes ───────────────────────────────────────────────────────────

type FieldProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

function Field({ label, name, type, placeholder, value, onChange, required }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-ponira-white/30 font-body text-[9px] uppercase tracking-widest">
        {label}
        {required && <span className="text-ponira-yellow ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-black/20 border border-ponira-white/10 focus:border-ponira-yellow/50 rounded-sm px-4 py-3 text-ponira-white font-body text-sm placeholder:text-ponira-white/20 outline-none transition-colors duration-300"
      />
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
};

function SelectField({ label, name, options, value, onChange, required }: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-ponira-white/30 font-body text-[9px] uppercase tracking-widest">
        {label}
        {required && <span className="text-ponira-yellow ml-1">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-black/20 border border-ponira-white/10 focus:border-ponira-yellow/50 rounded-sm px-4 py-3 text-ponira-white font-body text-sm outline-none transition-colors duration-300 appearance-none cursor-pointer"
        style={{ colorScheme: "dark" }}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} disabled={o.value === ""}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}