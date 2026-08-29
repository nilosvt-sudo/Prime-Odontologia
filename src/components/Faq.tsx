import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CLINIC, waLink } from "../config";
import { FAQS } from "../data";
import { Reveal, usePrefersReducedMotion } from "../hooks";
import { InstaIcon, PlusIcon, WhatsIcon } from "./Icons";
import Magnetic from "./Magnetic";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const reduced = usePrefersReducedMotion();

  return (
    <section id="faq" className="relative bg-snow py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.45fr] lg:gap-20">
        {/* lateral */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="flex items-center gap-3 text-[0.72rem] font-bold tracking-[0.26em] text-gold-600 uppercase">
              <span className="h-px w-12 bg-gold-500" />
              Dúvidas frequentes
            </p>
            <h2 className="font-display mt-4 text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.06] font-semibold tracking-tight text-coal-950">
              Antes de agendar,
              <br />
              <em className="font-medium text-gold-600 italic">a gente responde.</em>
            </h2>
            <p className="mt-4 max-w-md font-light text-ink/65">
              Reunimos as perguntas que mais ouvimos aqui na clínica. Não achou a sua?
              Fale direto com a nossa equipe.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-8 flex max-w-md flex-col gap-3">
              <Magnetic>
                <a
                  href={waLink("Olá! Tenho uma dúvida antes de agendar minha avaliação.")}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-coal px-6 py-3.5 text-sm flex items-center justify-center gap-2 cursor-pointer w-full"
                >
                  <WhatsIcon className="h-4.5 w-4.5 text-gold-300" />
                  Perguntar no WhatsApp
                </a>
              </Magnetic>
              <a
                href={CLINIC.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark px-6 py-3.5 text-sm flex items-center justify-center gap-2"
              >
                <InstaIcon className="h-4.5 w-4.5 text-gold-600" />
                Chamar no direct {CLINIC.instagramHandle}
              </a>
            </div>
          </Reveal>
        </div>

        {/* sanfona animada */}
        <div className="flex flex-col gap-2">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 50}>
                <motion.div
                  layout
                  className={`rounded-2xl border border-coal-900/10 overflow-hidden transition-colors duration-300 ${
                    isOpen ? "bg-gold-100/60 border-gold-400/40 shadow-sm" : "bg-snow"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-4 py-5 text-left sm:px-6 cursor-pointer"
                  >
                    <span className="flex items-baseline gap-4">
                      <span
                        className={`font-display text-lg italic transition-colors ${
                          isOpen ? "text-gold-600" : "text-coal-900/30"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-display text-lg font-semibold transition-colors sm:text-xl ${
                          isOpen ? "text-coal-950" : "text-coal-900/85"
                        }`}
                      >
                        {f.q}
                      </span>
                    </span>
                    <motion.span
                      animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isOpen
                          ? "border-coal-950 bg-coal-950 text-gold-300"
                          : "border-coal-900/25 text-coal-900"
                      }`}
                    >
                      <PlusIcon className="h-4 w-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduced ? undefined : { opacity: 0, height: 0 }}
                        animate={reduced ? undefined : { opacity: 1, height: "auto" }}
                        exit={reduced ? undefined : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="max-w-2xl px-4 pb-6 pl-[3.35rem] leading-relaxed font-light text-ink/80 sm:px-6 sm:pl-[3.85rem] text-sm sm:text-base">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
