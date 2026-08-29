import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CLINIC } from "../config";
import { TESTIMONIALS } from "../data";
import { Reveal, usePrefersReducedMotion } from "../hooks";
import { ArrowIcon, InstaIcon, StarIcon } from "./Icons";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const t = TESTIMONIALS[idx];

  useEffect(() => {
    if (paused || reduced) return;
    const id = window.setInterval(
      () => setIdx((i) => (i + 1) % TESTIMONIALS.length),
      6500
    );
    return () => window.clearInterval(id);
  }, [paused, reduced]);

  const prev = () => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section id="depoimentos" className="relative overflow-hidden bg-coal-950 py-20 lg:py-28">
      {/* arcos decorativos dourados */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 h-[520px] w-[520px] text-gold-500/12"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
      >
        {[88, 64, 40].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} strokeWidth="1" />
        ))}
      </svg>
      <div
        aria-hidden
        className="absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(194,154,71,0.12),transparent_62%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          {/* carrossel */}
          <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <Reveal>
              <p className="flex items-center gap-3 text-[0.72rem] font-bold tracking-[0.26em] text-gold-400 uppercase">
                <span className="h-px w-12 bg-gold-500" />
                Depoimentos
              </p>
              <h2 className="font-display mt-4 text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.06] font-semibold tracking-tight text-snow">
                Quem sorri, <em className="font-medium text-gold-300 italic">recomenda.</em>
              </h2>
            </Reveal>

            <div className="relative min-h-[260px] mt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={idx}
                  initial={reduced ? undefined : { opacity: 0, x: 20 }}
                  animate={reduced ? undefined : { opacity: 1, x: 0 }}
                  exit={reduced ? undefined : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-1.5 text-gold-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 fill-current" />
                    ))}
                    <span className="ml-2 text-xs font-semibold text-gold-300">5.0 · Avaliação Verificada</span>
                  </div>

                  <blockquote className="font-display mt-5 max-w-2xl text-[clamp(1.15rem,2.4vw,1.75rem)] leading-snug font-light text-snow italic">
                    “{t.quote}”
                  </blockquote>

                  {/* Paciente com foto e detalhes */}
                  <div className="mt-7 flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="h-14 w-14 rounded-full border-2 border-gold-400 object-cover shadow-lg"
                      />
                      <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[0.6rem] font-bold text-white ring-2 ring-coal-950">
                        ✓
                      </span>
                    </div>
                    <div>
                      <strong className="block text-base font-semibold text-snow">{t.name}</strong>
                      <div className="flex items-center gap-2 text-xs font-light text-gold-300/85">
                        <span>{t.treatment}</span>
                        {t.timeAgo && (
                          <>
                            <span>•</span>
                            <span className="text-snow/50">{t.timeAgo}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navegação e miniaturas dos pacientes com fotos */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex gap-2">
                <motion.button
                  whileHover={reduced ? undefined : { scale: 1.1 }}
                  whileTap={reduced ? undefined : { scale: 0.92 }}
                  onClick={prev}
                  aria-label="Depoimento anterior"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-snow/25 text-snow transition-colors duration-300 hover:border-gold-500 hover:bg-gold-500 hover:text-coal-950 cursor-pointer"
                >
                  <ArrowIcon className="h-4 w-4 rotate-180" />
                </motion.button>
                <motion.button
                  whileHover={reduced ? undefined : { scale: 1.1 }}
                  whileTap={reduced ? undefined : { scale: 0.92 }}
                  onClick={next}
                  aria-label="Próximo depoimento"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-snow/25 text-snow transition-colors duration-300 hover:border-gold-500 hover:bg-gold-500 hover:text-coal-950 cursor-pointer"
                >
                  <ArrowIcon className="h-4 w-4" />
                </motion.button>
              </div>

              {/* Miniaturas com fotos dos pacientes */}
              <div className="flex items-center gap-2.5">
                {TESTIMONIALS.map((item, i) => (
                  <motion.button
                    key={i}
                    whileHover={reduced ? undefined : { scale: 1.15 }}
                    whileTap={reduced ? undefined : { scale: 0.95 }}
                    onClick={() => setIdx(i)}
                    aria-label={`Ver depoimento de ${item.name}`}
                    className={`group relative transition-all duration-300 cursor-pointer ${
                      i === idx
                        ? "scale-110 ring-2 ring-gold-400 ring-offset-2 ring-offset-coal-950 rounded-full"
                        : "opacity-45 hover:opacity-100 rounded-full"
                    }`}
                  >
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* resumo de avaliação */}
          <Reveal delay={150}>
            <div className="flex h-full flex-col rounded-[2rem] border border-gold-500/25 bg-coal-900 p-8 lg:p-10">
              <p className="font-display text-[5.2rem] leading-none font-semibold text-gold-300">
                5,0
              </p>
              <span className="mt-3 flex gap-1 text-gold-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-6 w-6" />
                ))}
              </span>
              <p className="mt-4 font-light text-snow/70">
                Nota máxima nas avaliações dos nossos pacientes — resultado de um cuidado
                que trata cada sorriso como único.
              </p>

              <div className="mt-8 space-y-3 border-t border-snow/10 pt-8">
                {[
                  ["Ambiente acolhedor", "nota 5,0"],
                  ["Pontualidade", "nota 5,0"],
                  ["Resultado dos tratamentos", "nota 5,0"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between text-sm">
                    <span className="font-light text-snow/65">{k}</span>
                    <span className="flex items-center gap-1.5 font-semibold text-snow">
                      {v} <StarIcon className="h-3.5 w-3.5 text-gold-400" />
                    </span>
                  </div>
                ))}
              </div>

              <motion.a
                whileHover={reduced ? undefined : { scale: 1.03 }}
                whileTap={reduced ? undefined : { scale: 0.97 }}
                href={CLINIC.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-gold mt-auto px-6 py-3.5 text-sm cursor-pointer"
              >
                <InstaIcon className="h-4.5 w-4.5" />
                Ver mais no Instagram
              </motion.a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
