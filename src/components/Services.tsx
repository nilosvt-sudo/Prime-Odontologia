import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES, serviceWa } from "../data";
import { Reveal, usePrefersReducedMotion } from "../hooks";
import { ArrowIcon, CheckIcon, WhatsIcon } from "./Icons";
import Magnetic from "./Magnetic";

export default function Services() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const service = SERVICES[active];

  /* rotação automática até o visitante interagir */
  useEffect(() => {
    if (paused || reduced) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % SERVICES.length),
      8000
    );
    return () => window.clearInterval(id);
  }, [paused, reduced]);

  return (
    <section id="servicos" className="relative bg-snow py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* cabeçalho */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <p className="flex items-center gap-3 text-[0.72rem] font-bold tracking-[0.26em] text-gold-600 uppercase">
              <span className="h-px w-12 bg-gold-500" />
              Nossas especialidades
            </p>
            <h2 className="font-display mt-4 text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.05] font-semibold tracking-tight text-coal-950">
              Tratamentos com{" "}
              <em className="font-medium text-gold-600 italic">assinatura Prime,</em>
              <br className="hidden sm:block" /> do sorriso ao contorno do rosto.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md font-light text-ink/65 lg:justify-self-end">
              Quatro frentes de cuidado reunidas na mesma clínica: reabilitação, estética
              do sorriso, harmonização facial e saúde infantil. Toque em cada
              especialidade para conhecer os detalhes.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[0.85fr_1.4fr] lg:gap-14">
          {/* lista fixa com layoutId */}
          <div className="lg:sticky lg:top-32 lg:self-start" onMouseEnter={() => setPaused(true)}>
            <div className="flex flex-col gap-1.5">
              {SERVICES.map((s, i) => {
                const isActive = i === active;
                return (
                  <motion.button
                    key={s.id}
                    onClick={() => {
                      setActive(i);
                      setPaused(true);
                    }}
                    whileHover={reduced ? undefined : { x: 4 }}
                    whileTap={reduced ? undefined : { scale: 0.98 }}
                    aria-pressed={isActive}
                    className={`group relative flex items-center gap-5 border-b border-coal-900/10 px-4 py-5 text-left transition-colors duration-300 sm:px-6 cursor-pointer rounded-2xl ${
                      isActive ? "text-snow" : "text-coal-950 hover:bg-gold-100/70"
                    }`}
                  >
                    {/* Pílula deslizante com layoutId */}
                    {isActive && (
                      <motion.div
                        layoutId="activeServicePill"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        className="absolute inset-0 rounded-2xl bg-coal-950 shadow-[0_28px_55px_-28px_rgba(15,17,19,0.65)] z-0"
                      />
                    )}

                    <span
                      className={`relative z-10 font-display text-xl italic ${
                        isActive ? "text-gold-400" : "text-coal-900/35"
                      }`}
                    >
                      {s.num}
                    </span>
                    <span className="relative z-10 flex-1">
                      <span
                        className={`font-display block text-xl font-semibold sm:text-2xl ${
                          isActive ? "text-snow" : "text-coal-950"
                        }`}
                      >
                        {s.name}
                      </span>
                      <span
                        className={`mt-0.5 block text-[0.66rem] font-bold tracking-[0.18em] uppercase ${
                          isActive ? "text-gold-300" : "text-ink/45"
                        }`}
                      >
                        {s.tag}
                      </span>
                    </span>
                    <ArrowIcon
                      className={`relative z-10 h-5 w-5 shrink-0 transition-all duration-300 ${
                        isActive
                          ? "translate-x-0 text-gold-400 opacity-100"
                          : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:text-gold-600 group-hover:opacity-60"
                      }`}
                    />
                  </motion.button>
                );
              })}
            </div>

            <Magnetic className="w-full lg:w-auto mt-8">
              <motion.a
                whileHover={reduced ? undefined : { scale: 1.03 }}
                whileTap={reduced ? undefined : { scale: 0.97 }}
                href={serviceWa(service.name)}
                target="_blank"
                rel="noreferrer"
                className="btn btn-coal w-full px-6 py-4 text-sm lg:w-auto flex items-center justify-center gap-2 cursor-pointer"
              >
                <WhatsIcon className="h-4.5 w-4.5 text-gold-300" />
                Agendar {service.name.toLowerCase()}
              </motion.a>
            </Magnetic>
          </div>

          {/* painel dinâmico com AnimatePresence */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={service.id}
                initial={reduced ? undefined : { opacity: 0, y: 16 }}
                animate={reduced ? undefined : { opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="grid overflow-hidden rounded-[2.2rem] border border-coal-900/12 bg-snow shadow-[0_45px_90px_-50px_rgba(15,17,19,0.5)] md:grid-cols-2"
              >
                <div className="relative min-h-[280px] overflow-hidden md:min-h-full">
                  <img
                    src={service.img}
                    alt={`Procedimento odontológico especializado de ${service.name} na Clínica Prime Odontologia`}
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coal-950/20 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="flex flex-col p-7 sm:p-9">
                  <span className="flex items-center gap-4">
                    {/* ícone estilo destaque: line-art dourado, círculo branco, borda fina preta */}
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-coal-900/70 bg-snow text-gold-600">
                      {service.icon}
                    </span>
                    <span className="text-[0.66rem] font-bold tracking-[0.22em] text-gold-600 uppercase">
                      {service.tag}
                    </span>
                  </span>

                  <h3 className="font-display mt-5 text-3xl font-semibold tracking-tight text-coal-950">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed font-light text-ink/70">
                    {service.description}
                  </p>

                  <ul className="mt-5 grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-[0.85rem] font-medium text-ink/80">
                        <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-gold-500 text-coal-950">
                          <CheckIcon className="h-3 w-3" strokeWidth={2.4} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {service.meta.map((m) => (
                      <span
                        key={m}
                        className="rounded-full border border-coal-900/14 bg-paper px-3.5 py-1.5 text-xs font-semibold text-coal-800"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-7">
                    <motion.a
                      whileHover={reduced ? undefined : { scale: 1.03 }}
                      whileTap={reduced ? undefined : { scale: 0.97 }}
                      href={serviceWa(service.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-gold px-6 py-3 text-sm"
                    >
                      Agendar avaliação
                      <ArrowIcon className="h-4 w-4" />
                    </motion.a>
                    <a
                      href="#contato"
                      className="btn btn-outline-dark px-6 py-3 text-sm"
                    >
                      Onde estamos
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
