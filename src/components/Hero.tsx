import { useRef, useState, type FormEvent } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CLINIC, waLink } from "../config";
import { ArrowIcon, StarIcon, WhatsIcon } from "./Icons";
import { usePrefersReducedMotion } from "../hooks";
import Magnetic from "./Magnetic";
import SpotlightCard from "./SpotlightCard";

export default function Hero() {
  const [form, setForm] = useState({ nome: "", contato: "" });
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Sou ${form.nome || "um(a) novo(a) paciente"}${
      form.contato ? ` (meu WhatsApp: ${form.contato})` : ""
    }. Gostaria de agendar uma avaliação na Prime Odontologia. 🙂`;
    window.open(waLink(msg), "_blank", "noopener");
  };

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative flex flex-col lg:flex-row items-stretch justify-between overflow-hidden bg-paper pt-16 sm:pt-18 lg:pt-0 lg:min-h-[calc(100vh-64px)]"
    >
      {/* Atmosfera: brilho dourado suave no topo esquerdo */}
      <motion.div
        style={reduced ? undefined : { y: orbY }}
        aria-hidden="true"
        className="absolute -top-36 left-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(194,154,71,0.22),transparent_65%)] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-180px] left-[-120px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(15,17,19,0.05),transparent_62%)] pointer-events-none"
      />

      {/* Legenda vertical à esquerda */}
      <p
        aria-hidden
        className="absolute top-1/2 left-6 hidden -translate-y-1/2 text-[0.62rem] font-bold tracking-[0.5em] text-coal-900/30 uppercase xl:block z-20"
        style={{ writingMode: "vertical-rl" }}
      >
        Prime Odontologia — Bicas · MG
      </p>

      {/* Coluna esquerda — Textos e Agendamento */}
      <div className="flex-1 flex items-center justify-center lg:justify-end px-6 sm:px-8 lg:pl-12 lg:pr-4 xl:pr-6 pt-6 sm:pt-8 lg:pt-20 pb-14 sm:pb-16 lg:pb-12 z-10">
        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 20 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-xl"
        >
          <motion.p
            initial={reduced ? undefined : { opacity: 0, x: -16 }}
            animate={reduced ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 sm:mt-0 flex items-center gap-2.5 text-[0.72rem] font-extrabold tracking-[0.24em] text-gold-700 uppercase"
          >
            <span className="h-0.5 w-10 bg-gold-600" />
            Odontologia de alto padrão · Bicas/MG
          </motion.p>

          <motion.h1
            initial={reduced ? undefined : { opacity: 0, y: 24 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-1.5 sm:mt-2 text-3xl leading-tight font-semibold tracking-tight text-coal-950 sm:text-4xl lg:text-[2.65rem]"
          >
            <span className="line-mask">
              <span style={{ animationDelay: "0.05s" }}>O sorriso da sua</span>
            </span>
            <span className="line-mask">
              <span style={{ animationDelay: "0.17s" }}>
                família merece o
              </span>
            </span>
            <span className="line-mask">
              <span style={{ animationDelay: "0.29s" }}>
                <em className="font-medium text-gold-600 italic">padrão Prime.</em>
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={reduced ? undefined : { opacity: 0, y: 16 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-2 mb-3 max-w-lg text-xs leading-relaxed font-normal text-coal-900 sm:text-[0.96rem]"
          >
            Harmonização facial, implantes, clareamento e odontopediatria em um só
            lugar — com atendimento acolhedor para todas as idades, no coração de Bicas.
          </motion.p>

          {/* Cartão de agendamento de alta conversão */}
          <SpotlightCard className="mt-3 max-w-lg rounded-2xl border border-coal-900/15 bg-snow shadow-[0_30px_60px_-30px_rgba(15,17,19,0.3)]">
            <form id="agendar" onSubmit={submit}>
              <div className="h-1 w-full bg-gold-500" />
              <div className="p-4 sm:p-5">
                <p className="font-display text-lg font-semibold text-coal-950 sm:text-xl">
                  Agende sua avaliação
                </p>
                <p className="mt-0.5 text-xs font-medium text-coal-700">
                  Preencha abaixo para falar diretamente com nossa equipe.
                </p>

                <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1 block text-[0.66rem] font-bold tracking-[0.16em] text-coal-800 uppercase">
                      Seu nome *
                    </span>
                    <input
                      required
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      placeholder="Como podemos te chamar?"
                      className="field !py-2.5 !text-xs sm:!text-sm"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-[0.66rem] font-bold tracking-[0.16em] text-coal-800 uppercase">
                      WhatsApp com DDD *
                    </span>
                    <input
                      required
                      value={form.contato}
                      onChange={(e) => setForm({ ...form, contato: e.target.value })}
                      placeholder="(32) 9 9999-9999"
                      className="field !py-2.5 !text-xs sm:!text-sm"
                    />
                  </label>
                </div>

                <Magnetic className="w-full mt-3">
                  <motion.button
                    whileHover={reduced ? undefined : { scale: 1.02 }}
                    whileTap={reduced ? undefined : { scale: 0.98 }}
                    type="submit"
                    className="btn btn-whatsapp w-full px-5 py-3 text-xs font-bold sm:text-sm cursor-pointer flex items-center justify-center gap-2"
                  >
                    <WhatsIcon className="h-5 w-5" />
                    Iniciar conversa no WhatsApp
                    <ArrowIcon className="h-4 w-4" />
                  </motion.button>
                </Magnetic>

                {/* Microcopy de reforço e agilidade */}
                <div className="mt-3 space-y-1 text-center">
                  <p className="flex items-center justify-center gap-1.5 text-xs font-semibold text-coal-900">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    ⚡ Atendimento em menos de 5 minutos no WhatsApp
                  </p>
                  <p className="text-[0.68rem] text-coal-600">
                    {CLINIC.epao} · {CLINIC.rt}
                  </p>
                </div>
              </div>
            </form>
          </SpotlightCard>

          {/* Prova social */}
          <motion.div
            initial={reduced ? undefined : { opacity: 0 }}
            animate={reduced ? undefined : { opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            <div>
              <span className="flex gap-1 text-gold-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5" />
                ))}
              </span>
              <p className="mt-1 text-xs text-ink/65">
                <strong className="font-display text-base text-coal-950">5,0</strong> nas
                avaliações dos pacientes
              </p>
            </div>
            <span className="hidden h-7 w-px bg-coal-900/15 sm:block" />
            <a
              href={CLINIC.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group text-xs font-semibold text-coal-700 transition-colors hover:text-gold-600"
            >
              Siga <span className="text-gold-600">{CLINIC.instagramHandle}</span>
              <span className="mt-0.5 block h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Coluna direita — No mobile fica abaixo do formulário com altura controlada; no desktop preenche toda a altura */}
      <div className="order-last lg:order-2 w-full lg:w-[50%] xl:w-[52%] relative flex flex-col justify-end items-center lg:items-start overflow-hidden pt-0 mt-0 pb-0 mb-0 h-72 sm:h-96 lg:h-full lg:min-h-[calc(100vh-64px)]">
        <img
          src="/hero-sorriso.jpg"
          alt="Sorriso radiante — Prime Odontologia"
          className="w-full h-full object-cover object-top lg:object-[45%_top] max-w-[680px] lg:scale-105 drop-shadow-none !filter-none select-none block origin-top-left"
        />
        {/* Fusão suave de estúdio com o fundo do site na lateral esquerda */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper via-paper/30 to-transparent pointer-events-none hidden lg:block" />
      </div>
    </section>
  );
}
