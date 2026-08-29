import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BEFORE_AFTER_CASES, ClinicalCase } from "../data";
import { waLink } from "../config";
import { Reveal, usePrefersReducedMotion } from "../hooks";
import { ArrowIcon, CheckIcon, SparkIcon, WhatsIcon } from "./Icons";
import Magnetic from "./Magnetic";

export default function BeforeAfter() {
  const [selectedCase, setSelectedCase] = useState<ClinicalCase>(BEFORE_AFTER_CASES[0]);
  const [sliderPos, setSliderPos] = useState<number>(50);
  const reduced = usePrefersReducedMotion();

  return (
    <section id="resultados" className="relative overflow-hidden bg-paper py-20 lg:py-28">
      {/* Atmosfera sutil */}
      <div
        aria-hidden
        className="absolute top-1/2 -right-40 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(194,154,71,0.12),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <p className="flex items-center justify-center gap-3 text-[0.72rem] font-extrabold tracking-[0.26em] text-gold-700 uppercase">
              <span className="h-0.5 w-10 bg-gold-600" />
              Resultados Reais & Transformações
              <span className="h-0.5 w-10 bg-gold-600" />
            </p>
            <h2 className="font-display mt-3 text-[clamp(2.1rem,4.5vw,3.5rem)] leading-[1.06] font-semibold tracking-tight text-coal-950">
              Casos clínicos que{" "}
              <em className="font-medium text-gold-600 italic">falam por si.</em>
            </h2>
            <p className="mt-3 max-w-xl text-sm font-normal text-coal-800 sm:text-base">
              Veja a evolução de pacientes reais que confiaram seu sorriso e sua autoestima aos especialistas da Prime Odontologia.
            </p>
          </Reveal>
        </div>

        {/* Abas de seleção de caso com layoutId */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {BEFORE_AFTER_CASES.map((c) => {
            const isSelected = c.id === selectedCase.id;
            return (
              <motion.button
                key={c.id}
                whileHover={reduced ? undefined : { scale: 1.05 }}
                whileTap={reduced ? undefined : { scale: 0.96 }}
                onClick={() => {
                  setSelectedCase(c);
                  setSliderPos(50);
                }}
                className={`relative flex items-center gap-2.5 rounded-full px-5 py-2.5 text-xs font-bold transition-colors duration-300 sm:text-sm cursor-pointer ${
                  isSelected
                    ? "text-gold-300"
                    : "border border-coal-900/15 bg-snow text-coal-700 hover:border-gold-500/60 hover:text-coal-950"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeCasePill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-coal-950 shadow-[0_12px_24px_-8px_rgba(15,17,19,0.5)] ring-1 ring-gold-400 z-0"
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <SparkIcon className={`h-4 w-4 ${isSelected ? "text-gold-400" : "text-gold-600"}`} />
                  {c.title}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Card Principal de Comparativo com AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCase.id}
            initial={reduced ? undefined : { opacity: 0, scale: 0.98, y: 10 }}
            animate={reduced ? undefined : { opacity: 1, scale: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid gap-8 overflow-hidden rounded-[2.2rem] border border-coal-900/15 bg-snow p-6 shadow-[0_35px_80px_-35px_rgba(15,17,19,0.25)] lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-10"
          >
            {/* Lado visual: Comparador Antes & Depois Interativo */}
            <div className="relative flex flex-col items-center justify-center w-full">
              <div className="relative aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/3] w-full select-none overflow-hidden rounded-2xl border border-coal-900/15 shadow-inner bg-coal-900/5">
                {/* Imagem Depois (fundo) */}
                <img
                  src={selectedCase.afterImg}
                  alt={`Depois: ${selectedCase.title}`}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                {/* Imagem Antes (com recorte clip-path) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                  <img
                    src={selectedCase.beforeImg}
                    alt={`Antes: ${selectedCase.title}`}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </div>

                {/* Tag Antes (fixa no topo esquerdo) */}
                <span className="pointer-events-none absolute top-4 left-4 z-10 rounded-full bg-coal-950/90 px-3.5 py-1.5 text-[0.68rem] font-extrabold tracking-wider text-snow uppercase shadow-md backdrop-blur-sm">
                  Antes
                </span>

                {/* Tag Depois (fixa no topo direito) */}
                <span className="pointer-events-none absolute top-4 right-4 z-10 rounded-full bg-emerald-600/95 px-3.5 py-1.5 text-[0.68rem] font-extrabold tracking-wider text-white uppercase shadow-md backdrop-blur-sm">
                  Depois ✨
                </span>

                {/* Linha divisória do slider */}
                <div
                  className="absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-gold-500 text-[0.7rem] font-black text-coal-950 shadow-lg">
                    ◀▶
                  </div>
                </div>

                {/* Range input invisível sobreposto para controle do slider */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  aria-label="Controle de comparação antes e depois"
                  className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
                />
              </div>

              <p className="mt-3 text-center text-xs text-coal-600">
                Arraste a barra para comparar o <strong>Antes</strong> e <strong>Depois</strong>
              </p>
            </div>

            {/* Lado informativo e CTA */}
            <div className="flex flex-col justify-center h-full space-y-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-gold-100 px-3 py-1 text-[0.68rem] font-bold tracking-wider text-gold-700 uppercase">
                    {selectedCase.category}
                  </span>
                  <span className="rounded-full border border-coal-900/12 bg-paper px-3 py-1 text-[0.68rem] font-semibold text-coal-700">
                    {selectedCase.tag}
                  </span>
                </div>

                <h3 className="font-display mt-3.5 text-2xl font-semibold tracking-tight text-coal-950 sm:text-3xl">
                  {selectedCase.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-coal-800 sm:text-base">
                  {selectedCase.description}
                </p>

                <div className="mt-5 space-y-3 rounded-2xl border border-coal-900/10 bg-paper p-4">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-coal-700">Tempo de tratamento:</span>
                    <strong className="font-semibold text-coal-950">{selectedCase.duration}</strong>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm border-t border-coal-900/8 pt-2.5">
                    <span className="text-coal-700">Satisfação do paciente:</span>
                    <span className="flex items-center gap-1 font-bold text-gold-600">
                      <CheckIcon className="h-4 w-4 text-emerald-600" /> 100% aprovado
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Magnetic className="w-full">
                  <motion.a
                    whileHover={reduced ? undefined : { scale: 1.02 }}
                    whileTap={reduced ? undefined : { scale: 0.98 }}
                    href={waLink(`Olá! Vi o resultado de *${selectedCase.title}* no site e gostaria de saber se meu caso pode ter um resultado parecido. 🙂`)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-whatsapp w-full px-6 py-3.5 text-xs sm:text-sm font-bold shadow-lg cursor-pointer flex items-center justify-center gap-2"
                  >
                    <WhatsIcon className="h-4.5 w-4.5" />
                    Quero um resultado como este no WhatsApp
                    <ArrowIcon className="h-4 w-4" />
                  </motion.a>
                </Magnetic>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
