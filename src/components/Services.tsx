import { useEffect, useState } from "react";
import { SERVICES, serviceWa } from "../data";
import { Reveal, usePrefersReducedMotion } from "../hooks";
import { ArrowIcon, CheckIcon, WhatsIcon } from "./Icons";

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
            <p className="flex items-center gap-3 text-[0.72rem] font-bold tracking-[0.24em] text-coral-600 uppercase">
              <span className="h-px w-10 bg-coral-500" />
              Nossas especialidades
            </p>
            <h2 className="font-display mt-4 text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.05] font-semibold tracking-tight text-pine-950">
              Tratamentos que <em className="font-light text-pine-700 italic">transformam</em>
              <br className="hidden sm:block" /> a sua relação com o espelho.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-ink/65 lg:justify-self-end">
              Quatro frentes de cuidado reunidas na mesma clínica: reabilitação, estética
              facial, estética do sorriso e saúde infantil. Toque em cada especialidade
              para conhecer os detalhes.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[0.85fr_1.4fr] lg:gap-14">
          {/* lista fixa */}
          <div
            className="lg:sticky lg:top-32 lg:self-start"
            onMouseEnter={() => setPaused(true)}
          >
            <div className="flex flex-col">
              {SERVICES.map((s, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActive(i);
                      setPaused(true);
                    }}
                    aria-pressed={isActive}
                    className={`group flex items-center gap-5 border-b border-pine-900/10 px-4 py-5 text-left transition-all duration-400 sm:px-6 ${
                      isActive
                        ? "rounded-2xl border-transparent bg-pine-900 text-mint-100 shadow-[0_24px_50px_-25px_rgba(10,50,46,0.6)]"
                        : "hover:bg-mint-100/70"
                    }`}
                  >
                    <span
                      className={`font-display text-xl italic ${
                        isActive ? "text-coral-400" : "text-pine-700/40"
                      }`}
                    >
                      {s.num}
                    </span>
                    <span className="flex-1">
                      <span
                        className={`font-display block text-xl font-semibold sm:text-2xl ${
                          isActive ? "text-mint-100" : "text-pine-900"
                        }`}
                      >
                        {s.name}
                      </span>
                      <span
                        className={`mt-0.5 block text-xs font-semibold tracking-wide uppercase ${
                          isActive ? "text-mint-300" : "text-ink/45"
                        }`}
                      >
                        {s.tag}
                      </span>
                    </span>
                    <ArrowIcon
                      className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                        isActive
                          ? "translate-x-0 text-coral-400 opacity-100"
                          : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-50"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <a
              href={serviceWa(service.name)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-pine mt-8 w-full px-6 py-4 text-sm lg:w-auto"
            >
              <WhatsIcon className="h-4.5 w-4.5" />
              Agendar {service.name.toLowerCase()}
            </a>
          </div>

          {/* painel dinâmico */}
          <div key={service.id} className="panel-in">
            <div className="grid overflow-hidden rounded-[2.2rem] border border-pine-900/10 bg-paper shadow-[0_40px_80px_-50px_rgba(10,50,46,0.5)] md:grid-cols-2">
              <div className="relative min-h-[260px] overflow-hidden md:min-h-full">
                <img
                  src={service.img}
                  alt={service.name}
                  className="animate-breathe absolute inset-0 h-full w-full object-cover"
                />
                <span className="font-display absolute bottom-4 left-5 text-6xl font-semibold text-white/35 italic">
                  {service.num}
                </span>
              </div>

              <div className="flex flex-col p-7 sm:p-9">
                <span className="flex items-center gap-3 text-pine-700">
                  <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-pine-900 text-mint-300">
                    {service.icon}
                  </span>
                  <span className="text-[0.7rem] font-bold tracking-[0.2em] text-coral-600 uppercase">
                    {service.tag}
                  </span>
                </span>

                <h3 className="font-display mt-5 text-3xl font-semibold tracking-tight text-pine-950">
                  {service.name}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">
                  {service.description}
                </p>

                <ul className="mt-5 grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[0.85rem] font-medium text-ink/80">
                      <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-mint-200 text-pine-800">
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
                      className="rounded-full border border-pine-900/12 bg-snow px-3.5 py-1.5 text-xs font-semibold text-pine-800"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  <a
                    href={serviceWa(service.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-coral px-6 py-3 text-sm"
                  >
                    Agendar avaliação
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="#contato"
                    className="btn border border-pine-900/15 bg-snow px-6 py-3 text-sm text-pine-900 hover:border-pine-900/40"
                  >
                    Onde estamos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
