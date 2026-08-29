import { useState } from "react";
import { motion } from "motion/react";
import { CLINIC, HOURS, MAPS_DIR, MAPS_EMBED, WAZE_DIR, waLink } from "../config";
import { Reveal, usePrefersReducedMotion } from "../hooks";
import { ArrowIcon, CheckIcon, ClockIcon, PhoneIcon, PinIcon, ShieldIcon, WhatsIcon } from "./Icons";

export default function Location() {
  const reduced = usePrefersReducedMotion();
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(CLINIC.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contato" aria-labelledby="location-heading" className="relative bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Cabeçalho da seção */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <p className="flex items-center gap-3 text-[0.72rem] font-extrabold tracking-[0.26em] text-gold-700 uppercase">
              <span className="h-0.5 w-10 bg-gold-600" aria-hidden="true" />
              Onde estamos
            </p>
            <h2
              id="location-heading"
              className="font-display mt-4 text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.05] font-semibold tracking-tight text-coal-950"
            >
              No coração de <em className="font-medium text-gold-600 italic">Bicas,</em>
              <br className="hidden sm:block" /> pertinho de você.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-base leading-relaxed font-normal text-coal-800 lg:justify-self-end">
              Estamos na praça central da cidade: fácil de chegar, com comércio ao redor e
              acessibilidade completa para pacientes de todas as idades.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Card de Informações e Contato */}
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-[2.4rem] border border-gold-500/30 bg-coal-950 p-8 text-snow shadow-[0_50px_100px_-45px_rgba(15,17,19,0.8)] sm:p-10">
              <address className="not-italic space-y-7">
                {/* Endereço + Atalhos de Navegação */}
                <div className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-coal-900 text-gold-300 ring-1 ring-gold-500/30 shadow-inner"
                  >
                    <PinIcon className="h-6 w-6" />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xs font-bold tracking-[0.18em] text-gold-300 uppercase">
                      Endereço
                    </h3>
                    <p className="mt-1.5 text-sm sm:text-base leading-relaxed font-medium text-snow/95">
                      {CLINIC.address}
                    </p>
                    
                    {/* Botões de 1 clique: Google Maps, Waze e Copiar */}
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <a
                        href={MAPS_DIR}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Traçar rota no Google Maps (abre em nova aba)"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-gold-500/40 bg-coal-900 px-3 py-1.5 text-xs font-semibold text-gold-300 transition-all hover:bg-gold-500/20 hover:border-gold-400 focus-visible:outline-2 focus-visible:outline-gold-300"
                      >
                        Google Maps
                        <ArrowIcon className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href={WAZE_DIR}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Navegar com Waze (abre em nova aba)"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-coal-900 px-3 py-1.5 text-xs font-semibold text-cyan-300 transition-all hover:bg-cyan-500/20 hover:border-cyan-400 focus-visible:outline-2 focus-visible:outline-cyan-300"
                      >
                        Abrir no Waze
                        <ArrowIcon className="h-3.5 w-3.5" />
                      </a>
                      <button
                        type="button"
                        onClick={copyAddress}
                        aria-label="Copiar endereço completo para a área de transferência"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-snow/20 bg-coal-900 px-3 py-1.5 text-xs font-semibold text-snow/90 transition-all hover:bg-snow/10 hover:text-snow cursor-pointer focus-visible:outline-2 focus-visible:outline-gold-300"
                      >
                        {copied ? (
                          <>
                            <CheckIcon className="h-3.5 w-3.5 text-emerald-400" />
                            <span className="text-emerald-300">Copiado! ✓</span>
                          </>
                        ) : (
                          <>
                            <span>Copiar endereço</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Horários de Funcionamento */}
                <div className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-coal-900 text-gold-300 ring-1 ring-gold-500/30 shadow-inner"
                  >
                    <ClockIcon className="h-6 w-6" />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xs font-bold tracking-[0.18em] text-gold-300 uppercase">
                      Horários de Atendimento
                    </h3>
                    <ul className="mt-2.5 space-y-2 text-sm">
                      {HOURS.map((h) => (
                        <li key={h.day} className="flex justify-between gap-6 border-b border-snow/10 pb-1.5 last:border-0 last:pb-0">
                          <span className="font-normal text-snow/85">{h.day}</span>
                          <strong className="font-semibold text-snow">{h.time}</strong>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Contatos */}
                <div className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-coal-900 text-gold-300 ring-1 ring-gold-500/30 shadow-inner"
                  >
                    <PhoneIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-xs font-bold tracking-[0.18em] text-gold-300 uppercase">
                      Canais Diretos
                    </h3>
                    <a
                      href={waLink("Olá! Quero falar com a Prime Odontologia.")}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`WhatsApp da Prime Odontologia: ${CLINIC.phoneDisplay}`}
                      className="mt-1.5 block text-sm sm:text-base font-semibold text-snow transition-colors hover:text-gold-300 focus-visible:outline-2 focus-visible:outline-gold-300 focus-visible:outline-offset-2"
                    >
                      WhatsApp: <span className="text-gold-300 underline underline-offset-2">{CLINIC.phoneDisplay}</span>
                    </a>
                    <a
                      href={CLINIC.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Perfil oficial no Instagram: ${CLINIC.instagramHandle}`}
                      className="mt-1 block text-sm font-medium text-snow/85 transition-colors hover:text-gold-300 focus-visible:outline-2 focus-visible:outline-gold-300 focus-visible:outline-offset-2"
                    >
                      Instagram: {CLINIC.instagramHandle}
                    </a>
                  </div>
                </div>

                {/* Responsabilidade Técnica e Registro */}
                <div className="flex gap-4 border-t border-snow/15 pt-6">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-coal-900 text-gold-300 ring-1 ring-gold-500/30 shadow-inner"
                  >
                    <ShieldIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-xs font-bold tracking-[0.18em] text-gold-300 uppercase">
                      Registro Profissional
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed font-normal text-snow/90">
                      {CLINIC.epao} · {CLINIC.rt}
                    </p>
                  </div>
                </div>
              </address>

              {/* Botão de Ação Principal */}
              <motion.a
                whileHover={reduced ? undefined : { scale: 1.02 }}
                whileTap={reduced ? undefined : { scale: 0.98 }}
                href={waLink("Olá! Quero agendar uma avaliação na Prime Odontologia. 🙂")}
                target="_blank"
                rel="noreferrer"
                aria-label="Agendar consulta diretamente pelo WhatsApp"
                className="btn btn-gold mt-10 w-full px-6 py-4 text-base font-bold shadow-lg flex items-center justify-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-coal-950"
              >
                <WhatsIcon className="h-5 w-5" aria-hidden="true" />
                Agendar pelo WhatsApp
              </motion.a>
            </div>
          </Reveal>

          {/* Mapa Interativo com Card de Destaque */}
          <Reveal delay={140}>
            <div className="relative h-full min-h-[440px] overflow-hidden rounded-[2.4rem] shadow-[0_50px_100px_-45px_rgba(15,17,19,0.5)] ring-1 ring-coal-900/15">
              <iframe
                title="Localização no Google Maps da Prime Odontologia, Praça Dr. Vicente Bianco, 71, Centro, Bicas/MG"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
              />
              <div className="pointer-events-none absolute top-5 left-5 flex items-center gap-3 rounded-2xl border border-coal-900/20 bg-snow/95 px-4 py-3 shadow-xl backdrop-blur-md">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-100 text-gold-700 border border-gold-400/40">
                  <PinIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-sm leading-tight font-bold text-coal-950">
                    Praça Dr. Vicente Bianco, 71
                  </span>
                  <span className="block text-xs font-semibold text-coal-700">Centro · Bicas/MG</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
