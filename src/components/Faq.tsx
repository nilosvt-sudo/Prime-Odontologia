import { useState } from "react";
import { CLINIC, waLink } from "../config";
import { FAQS } from "../data";
import { Reveal } from "../hooks";
import { InstaIcon, PlusIcon, WhatsIcon } from "./Icons";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-snow py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.45fr] lg:gap-20">
        {/* lateral */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="flex items-center gap-3 text-[0.72rem] font-bold tracking-[0.24em] text-coral-600 uppercase">
              <span className="h-px w-10 bg-coral-500" />
              Dúvidas frequentes
            </p>
            <h2 className="font-display mt-4 text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.06] font-semibold tracking-tight text-pine-950">
              Antes de agendar,
              <br />
              <em className="font-light text-pine-700 italic">a gente responde</em>.
            </h2>
            <p className="mt-4 max-w-md text-ink/65">
              Reunimos as perguntas que mais ouvimos aqui na clínica. Não achou a sua?
              Fale direto com a nossa equipe.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-8 flex max-w-md flex-col gap-3">
              <a
                href={waLink("Olá! Tenho uma dúvida antes de agendar minha avaliação.")}
                target="_blank"
                rel="noreferrer"
                className="btn btn-coral px-6 py-3.5 text-sm"
              >
                <WhatsIcon className="h-4.5 w-4.5" />
                Perguntar no WhatsApp
              </a>
              <a
                href={CLINIC.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="btn border border-pine-900/15 bg-paper px-6 py-3.5 text-sm text-pine-900 hover:border-pine-900/40"
              >
                <InstaIcon className="h-4.5 w-4.5" />
                Chamar no direct {CLINIC.instagramHandle}
              </a>
            </div>
          </Reveal>
        </div>

        {/* sanfona */}
        <div>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div
                  className={`border-b border-pine-900/10 transition-colors duration-300 ${
                    isOpen ? "bg-mint-100/50" : ""
                  } rounded-t-2xl`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-4 py-6 text-left sm:px-6"
                  >
                    <span className="flex items-baseline gap-4">
                      <span
                        className={`font-display text-lg italic transition-colors ${
                          isOpen ? "text-coral-500" : "text-pine-700/35"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-display text-lg font-semibold transition-colors sm:text-xl ${
                          isOpen ? "text-pine-950" : "text-pine-900/85"
                        }`}
                      >
                        {f.q}
                      </span>
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-400 ${
                        isOpen
                          ? "rotate-45 border-coral-500 bg-coral-500 text-[#fff4ef]"
                          : "border-pine-900/20 text-pine-900"
                      }`}
                    >
                      <PlusIcon className="h-4 w-4" />
                    </span>
                  </button>
                  <div className={`acc-body ${isOpen ? "open" : ""}`}>
                    <div>
                      <p className="max-w-2xl px-4 pb-7 pl-[3.35rem] leading-relaxed text-ink/70 sm:px-6 sm:pl-[3.85rem]">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
