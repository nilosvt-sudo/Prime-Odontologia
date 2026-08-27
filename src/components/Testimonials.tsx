import { useEffect, useState } from "react";
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
                Quem sorri, <em className="font-medium text-gold-300 italic">recomenda</em>.
              </h2>
            </Reveal>

            <div key={idx} className="panel-in mt-10">
              <span className="font-display block text-8xl leading-[0.4] text-gold-500">“</span>
              <blockquote className="font-display mt-6 max-w-2xl text-[clamp(1.25rem,2.6vw,1.85rem)] leading-snug font-light text-snow italic">
                {t.quote}
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <span className="font-display flex h-13 w-13 items-center justify-center rounded-full bg-gold-500 text-lg font-semibold text-coal-950">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <strong className="block text-snow">{t.name}</strong>
                  <span className="text-sm font-light text-gold-300/85">{t.treatment}</span>
                </span>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  aria-label="Depoimento anterior"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-snow/25 text-snow transition-all duration-300 hover:border-gold-500 hover:bg-gold-500 hover:text-coal-950"
                >
                  <ArrowIcon className="h-4.5 w-4.5 rotate-180" />
                </button>
                <button
                  onClick={next}
                  aria-label="Próximo depoimento"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-snow/25 text-snow transition-all duration-300 hover:border-gold-500 hover:bg-gold-500 hover:text-coal-950"
                >
                  <ArrowIcon className="h-4.5 w-4.5" />
                </button>
              </div>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`Ver depoimento ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-400 ${
                      i === idx ? "w-8 bg-gold-400" : "w-2 bg-snow/25 hover:bg-snow/50"
                    }`}
                  />
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

              <a
                href={CLINIC.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-gold mt-auto px-6 py-3.5 text-sm"
              >
                <InstaIcon className="h-4.5 w-4.5" />
                Ver mais no Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
