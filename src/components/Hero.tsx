import { useState, type FormEvent } from "react";
import { CLINIC, waLink } from "../config";
import { SERVICES } from "../data";
import { ArrowIcon, CheckIcon, ClockIcon, LogoMark, StarIcon, WhatsIcon } from "./Icons";

export default function Hero() {
  const [form, setForm] = useState({ nome: "", contato: "", servico: SERVICES[0].name });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Sou ${form.nome || "um(a) novo(a) paciente"}${
      form.contato ? ` (meu contato: ${form.contato})` : ""
    }. Gostaria de agendar uma avaliação de ${form.servico} na Prime Odontologia. 🙂`;
    window.open(waLink(msg), "_blank", "noopener");
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-paper pt-30 pb-16 lg:pt-38 lg:pb-20">
      {/* atmosfera: brilho dourado + arcos */}
      <div
        aria-hidden
        className="absolute -top-44 right-[-12%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(194,154,71,0.18),transparent_64%)]"
      />
      <div
        aria-hidden
        className="absolute bottom-[-180px] left-[-120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(15,17,19,0.07),transparent_62%)]"
      />
      {/* legenda vertical */}
      <p
        aria-hidden
        className="absolute top-1/2 left-7 hidden -translate-y-1/2 text-[0.62rem] font-bold tracking-[0.5em] text-coal-900/30 uppercase xl:block"
        style={{ writingMode: "vertical-rl" }}
      >
        Prime Odontologia — Bicas · MG
      </p>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
          {/* coluna esquerda */}
          <div>
            <p className="flex items-center gap-3 text-[0.7rem] font-bold tracking-[0.26em] text-gold-600 uppercase">
              <span className="h-px w-12 bg-gold-500" />
              Odontologia de alto padrão · Bicas/MG
            </p>

            <h1 className="font-display mt-6 text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.03] font-semibold tracking-tight text-coal-950">
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
            </h1>

            <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed font-light text-ink/70">
              Harmonização facial, implantes, clareamento e odontopediatria em um só
              lugar — com atendimento acolhedor para todas as idades, no coração de Bicas.
            </p>

            {/* cartão de agendamento */}
            <form
              onSubmit={submit}
              className="mt-9 max-w-xl overflow-hidden rounded-[1.6rem] border border-coal-900/12 bg-snow shadow-[0_40px_80px_-40px_rgba(15,17,19,0.35)]"
            >
              <div className="h-1 w-full bg-gold-500" />
              <div className="p-6 sm:p-8">
                <p className="font-display text-2xl font-semibold text-coal-950">
                  Agende sua avaliação
                </p>
                <p className="mt-1 text-sm font-light text-ink/60">
                  Respondemos rapidinho pelo WhatsApp — sem compromisso.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <label className="block sm:col-span-2">
                    <span className="mb-1.5 block text-[0.68rem] font-bold tracking-[0.18em] text-coal-700 uppercase">
                      Seu nome
                    </span>
                    <input
                      required
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      placeholder="Como podemos te chamar?"
                      className="field"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[0.68rem] font-bold tracking-[0.18em] text-coal-700 uppercase">
                      WhatsApp
                    </span>
                    <input
                      value={form.contato}
                      onChange={(e) => setForm({ ...form, contato: e.target.value })}
                      placeholder="(32) 9 9999-9999"
                      className="field"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[0.68rem] font-bold tracking-[0.18em] text-coal-700 uppercase">
                      Especialidade
                    </span>
                    <select
                      value={form.servico}
                      onChange={(e) => setForm({ ...form, servico: e.target.value })}
                      className="field cursor-pointer"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                      <option>Primeira consulta</option>
                    </select>
                  </label>
                </div>

                <button type="submit" className="btn btn-coal mt-5 w-full px-6 py-4 text-[0.95rem]">
                  <WhatsIcon className="h-5 w-5 text-gold-300" />
                  Enviar e conversar no WhatsApp
                  <ArrowIcon className="h-4.5 w-4.5" />
                </button>

                <p className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[0.72rem] text-ink/55">
                  <CheckIcon className="h-3.5 w-3.5 text-gold-600" strokeWidth={2.4} />
                  {CLINIC.epao} · {CLINIC.rt}
                </p>
              </div>
            </form>

            {/* prova social */}
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div>
                <span className="flex gap-1 text-gold-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4.5 w-4.5" />
                  ))}
                </span>
                <p className="mt-1.5 text-sm text-ink/65">
                  <strong className="font-display text-lg text-coal-950">5,0</strong> nas
                  avaliações dos pacientes
                </p>
              </div>
              <span className="hidden h-10 w-px bg-coal-900/15 sm:block" />
              <a
                href={CLINIC.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="group text-sm font-semibold text-coal-700 transition-colors hover:text-gold-600"
              >
                Siga <span className="text-gold-600">{CLINIC.instagramHandle}</span>
                <span className="mt-0.5 block h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>

          {/* coluna direita — retrato em arco */}
          <div className="relative mx-auto w-full max-w-[480px]">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-5 translate-y-5 rounded-t-[999px] rounded-b-[2rem] border border-gold-500/60"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] shadow-[0_60px_120px_-50px_rgba(15,17,19,0.55)]">
              <img
                src="https://image.qwenlm.ai/generated-images/6bccda1f-a112-4d13-b64e-e94ee090fc99/_result.png"
                alt="Sorriso perfeito após tratamento na Prime Odontologia"
                className="animate-breathe h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coal-950/35 via-transparent to-transparent" />
            </div>

            {/* selo giratório */}
            <div className="absolute -top-6 -left-6 h-32 w-32 sm:-left-12">
              <svg viewBox="0 0 120 120" className="animate-spin-slow h-full w-full text-coal-900">
                <defs>
                  <path id="sealArc" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
                </defs>
                <text fontSize="10.5" letterSpacing="2.8" fill="currentColor" fontWeight="700">
                  <textPath href="#sealArc">PRIME ODONTOLOGIA • BICAS MG • ALTO PADRÃO •</textPath>
                </text>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center">
                <LogoMark className="h-12 w-12" />
              </span>
            </div>

            {/* chips estilo destaques: círculo branco, borda fina preta, ouro */}
            <div className="animate-float absolute top-1/4 -right-3 flex items-center gap-2.5 rounded-full border border-coal-900/65 bg-snow py-2.5 pr-5 pl-3 shadow-[0_20px_45px_-20px_rgba(15,17,19,0.4)] sm:-right-8">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-coal-900/60 text-gold-600">
                <ClockIcon className="h-5 w-5" />
              </span>
              <span className="text-xs leading-tight font-bold text-coal-950">
                Seg a Sex
                <span className="block font-medium text-ink/60">08h às 18h</span>
              </span>
            </div>

            <div className="animate-float-slow absolute -bottom-6 left-4 flex items-center gap-2.5 rounded-full border border-coal-900/65 bg-snow py-2.5 pr-5 pl-3 shadow-[0_20px_45px_-20px_rgba(15,17,19,0.4)]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-coal-900/60 text-gold-600">
                <StarIcon className="h-4.5 w-4.5" />
              </span>
              <span className="text-xs leading-tight font-bold text-coal-950">
                +1.500 sorrisos
                <span className="block font-medium text-ink/60">transformados aqui</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
