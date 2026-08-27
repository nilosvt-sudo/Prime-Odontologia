import { CLINIC, HOURS, MAPS_DIR, MAPS_EMBED, waLink } from "../config";
import { Reveal } from "../hooks";
import { ArrowIcon, ClockIcon, PhoneIcon, PinIcon, ShieldIcon, WhatsIcon } from "./Icons";

export default function Location() {
  return (
    <section id="contato" className="relative bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <p className="flex items-center gap-3 text-[0.72rem] font-bold tracking-[0.26em] text-gold-600 uppercase">
              <span className="h-px w-12 bg-gold-500" />
              Onde estamos
            </p>
            <h2 className="font-display mt-4 text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.05] font-semibold tracking-tight text-coal-950">
              No coração de <em className="font-medium text-gold-600 italic">Bicas</em>,
              <br className="hidden sm:block" /> pertinho de você.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md font-light text-ink/65 lg:justify-self-end">
              Estamos na praça central da cidade: fácil de chegar, com comércio ao redor e
              acessibilidade para pacientes de todas as idades.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* informações */}
          <Reveal>
            <div className="flex h-full flex-col rounded-[2.4rem] border border-gold-500/25 bg-coal-950 p-8 text-snow shadow-[0_50px_100px_-45px_rgba(15,17,19,0.8)] sm:p-10">
              <div className="space-y-7">
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-coal-800 text-gold-300 ring-1 ring-gold-500/20">
                    <PinIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-[0.66rem] font-bold tracking-[0.2em] text-gold-300 uppercase">
                      Endereço
                    </p>
                    <p className="mt-1 leading-relaxed font-light">{CLINIC.address}</p>
                    <a
                      href={MAPS_DIR}
                      target="_blank"
                      rel="noreferrer"
                      className="group mt-2 inline-flex items-center gap-2 text-sm font-bold text-gold-400 transition-colors hover:text-gold-300"
                    >
                      Traçar rota no Google Maps
                      <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-coal-800 text-gold-300 ring-1 ring-gold-500/20">
                    <ClockIcon className="h-6 w-6" />
                  </span>
                  <div className="flex-1">
                    <p className="text-[0.66rem] font-bold tracking-[0.2em] text-gold-300 uppercase">
                      Horários
                    </p>
                    <ul className="mt-2 space-y-1.5 text-sm">
                      {HOURS.map((h) => (
                        <li key={h.day} className="flex justify-between gap-6">
                          <span className="font-light text-snow/65">{h.day}</span>
                          <span className="font-semibold">{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-coal-800 text-gold-300 ring-1 ring-gold-500/20">
                    <PhoneIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-[0.66rem] font-bold tracking-[0.2em] text-gold-300 uppercase">
                      Contato
                    </p>
                    <a
                      href={waLink("Olá! Quero falar com a Prime Odontologia.")}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block font-medium transition-colors hover:text-gold-300"
                    >
                      WhatsApp {CLINIC.phoneDisplay}
                    </a>
                    <a
                      href={CLINIC.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block text-sm font-light text-snow/65 transition-colors hover:text-gold-300"
                    >
                      {CLINIC.instagramHandle}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 border-t border-snow/10 pt-7">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-coal-800 text-gold-300 ring-1 ring-gold-500/20">
                    <ShieldIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-[0.66rem] font-bold tracking-[0.2em] text-gold-300 uppercase">
                      Registro profissional
                    </p>
                    <p className="mt-1 text-sm leading-relaxed font-light text-snow/70">
                      {CLINIC.epao} · {CLINIC.rt}
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={waLink("Olá! Quero agendar uma avaliação na Prime Odontologia. 🙂")}
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold mt-10 w-full px-6 py-4 text-[0.95rem]"
              >
                <WhatsIcon className="h-5 w-5" />
                Agendar pelo WhatsApp
              </a>
            </div>
          </Reveal>

          {/* mapa */}
          <Reveal delay={140}>
            <div className="relative h-full min-h-[440px] overflow-hidden rounded-[2.4rem] shadow-[0_50px_100px_-45px_rgba(15,17,19,0.5)] ring-1 ring-coal-900/15">
              <iframe
                title="Mapa — Prime Odontologia, Praça Dr. Vicente Bianco, 71, Bicas/MG"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
              />
              <div className="pointer-events-none absolute top-5 left-5 flex items-center gap-2.5 rounded-2xl border border-gold-500/40 bg-snow/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                <PinIcon className="h-5 w-5 text-gold-600" />
                <span className="text-sm leading-tight font-bold text-coal-950">
                  Praça Dr. Vicente Bianco, 71
                  <span className="block text-xs font-medium text-ink/55">Centro · Bicas/MG</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
