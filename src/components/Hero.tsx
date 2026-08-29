import { useRef, useState, type FormEvent } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CLINIC, waLink } from "../config";
import { SERVICES } from "../data";
import { ArrowIcon, CheckIcon, ClockIcon, LogoMark, StarIcon, WhatsIcon } from "./Icons";
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
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -35]);

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
      className="relative flex items-center overflow-hidden bg-paper pt-23 sm:pt-25 pb-6 lg:min-h-[calc(100vh-64px)] lg:pt-24 lg:pb-8"
    >
      {/* atmosfera: brilho dourado com parallax */}
      <motion.div
        style={reduced ? undefined : { y: orbY }}
        aria-hidden="true"
        className="absolute -top-44 right-[-12%] h-[540px] w-[540px] rounded-full bg-[radial-gradient(circle,rgba(194,154,71,0.22),transparent_64%)] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-180px] left-[-120px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(15,17,19,0.07),transparent_62%)] pointer-events-none"
      />
      {/* legenda vertical */}
      <p
        aria-hidden
        className="absolute top-1/2 left-7 hidden -translate-y-1/2 text-[0.62rem] font-bold tracking-[0.5em] text-coal-900/30 uppercase xl:block"
        style={{ writingMode: "vertical-rl" }}
      >
        Prime Odontologia — Bicas · MG
      </p>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* coluna esquerda */}
          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 20 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              initial={reduced ? undefined : { opacity: 0, x: -16 }}
              animate={reduced ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2.5 text-[0.72rem] font-extrabold tracking-[0.24em] text-gold-700 uppercase"
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

            {/* cartão de agendamento de alta conversão com 3D Spotlight Tilt */}
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

                  {/* microcopy de reforço e agilidade */}
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

            {/* prova social */}
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

          {/* coluna direita — foto perfeitamente encaixada dentro da moldura demarcada com parallax */}
          <motion.div
            style={reduced ? undefined : { y: photoY }}
            initial={reduced ? undefined : { opacity: 0, scale: 0.95, y: 20 }}
            animate={reduced ? undefined : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[490px]"
          >
            {/* Moldura demarcada com borda dourada e acabamento de alto padrão */}
            <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] border-[3.5px] border-gold-500 bg-snow p-2 shadow-[0_45px_100px_-30px_rgba(15,17,19,0.5)] ring-2 ring-gold-300/60">
              <div className="relative aspect-[4/5] max-h-[520px] sm:max-h-[550px] lg:max-h-[580px] overflow-hidden rounded-t-[999px] rounded-b-[2.2rem] border border-coal-900/15">
                <img
                  src="/hero-image.jpg"
                  alt="Atendimento odontológico de alto padrão na Prime Odontologia"
                  className="h-full w-full object-cover scale-[1.55] origin-[50%_75%] transition-transform duration-700 hover:scale-[1.58]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Selo Circular Flutuante com parallax */}
            <motion.div
              style={reduced ? undefined : { y: badgeY }}
              initial={reduced ? undefined : { scale: 0, rotate: -20 }}
              animate={reduced ? undefined : { scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 }}
              className="absolute -top-6 -left-6 z-20 w-28 h-28 md:w-32 md:h-32 flex items-center justify-center"
            >
              {/* Texto Circular em Rotação Contínua */}
              <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full animate-[spin_12s_linear_infinite]"
              >
                <defs>
                  {/* Trajetória circular iniciando no topo (12h, centro superior x=50, y=12) */}
                  <path
                    id="circlePath"
                    d="M 50, 12 a 38, 38 0 1,1 0, 76 a 38, 38 0 1,1 0, -76"
                  />
                </defs>
                <text className="text-[7.8px] font-bold uppercase fill-coal-950">
                  <textPath
                    href="#circlePath"
                    startOffset="0%"
                    textLength="236"
                    lengthAdjust="spacing"
                  >
                    PRIME ODONTOLOGIA • BICAS MG • ALTO PADRÃO •{" "}
                  </textPath>
                </text>
              </svg>

              {/* Logo Oficial Central Fixa (sem girar, ampliada e perfeitamente centralizada) */}
              <div className="absolute inset-0 flex items-center justify-center p-1 pointer-events-none">
                <img 
                  src="/logo-prime-odontologia.png" 
                  alt="Símbolo Oficial Prime Odontologia" 
                  className="h-14 w-14 sm:h-16 sm:w-16 md:h-18 md:w-18 object-contain drop-shadow-sm transition-transform"
                />
              </div>
            </motion.div>

            {/* chips flutuantes com deslocamento ajustado e drop-shadow */}
            <motion.div
              whileHover={reduced ? undefined : { scale: 1.05, y: -2 }}
              className="animate-float absolute top-1/4 -right-2 flex items-center gap-2 rounded-full border border-coal-900/60 bg-snow/95 py-2.5 pr-4.5 pl-3 shadow-[0_16px_36px_-10px_rgba(15,17,19,0.45)] drop-shadow-md backdrop-blur-md sm:-right-6"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-coal-900/60 text-gold-600 bg-snow">
                <ClockIcon className="h-4 w-4" />
              </span>
              <span className="text-[0.74rem] leading-tight font-bold text-coal-950">
                Seg a Sex
                <span className="block font-medium text-ink/60 text-[0.68rem]">08h às 18h</span>
              </span>
            </motion.div>

            <motion.div
              whileHover={reduced ? undefined : { scale: 1.05, y: -2 }}
              className="animate-float-slow absolute -bottom-3 left-3 flex items-center gap-2 rounded-full border border-coal-900/60 bg-snow/95 py-2.5 pr-4.5 pl-3 shadow-[0_16px_36px_-10px_rgba(15,17,19,0.45)] drop-shadow-md backdrop-blur-md sm:left-5"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-coal-900/60 text-gold-600 bg-snow">
                <StarIcon className="h-3.5 w-3.5" />
              </span>
              <span className="text-[0.74rem] leading-tight font-bold text-coal-950">
                +1.500 sorrisos
                <span className="block font-medium text-ink/60 text-[0.68rem]">transformados aqui</span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
