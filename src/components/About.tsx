import { CLINIC, IMG, waLink } from "../config";
import { STATS } from "../data";
import { Reveal, formatPt, useCountUp, useInView } from "../hooks";
import { CheckIcon, ShieldIcon, ToothIcon, WhatsIcon } from "./Icons";

function Stat({
  value,
  suffix,
  decimals,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  decimals: number;
  label: string;
  delay: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const v = useCountUp(value, inView, 1900, decimals);
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} rounded-3xl border border-pine-900/10 bg-snow p-6 hover:border-mint-400 hover:shadow-[0_18px_40px_-24px_rgba(10,50,46,0.45)]`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="font-display text-[2.6rem] leading-none font-semibold tracking-tight text-pine-900">
        {formatPt(v, decimals)}
        <span className="text-coral-500">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium text-ink/60">{label}</p>
    </div>
  );
}

const DIFFERENTIALS = [
  "Biossegurança com protocolo rigoroso",
  "Fluxo digital: do planejamento ao resultado",
  "Atendimento humano, sem pressa",
  "Localização central, na praça de Bicas",
];

export default function About() {
  return (
    <section id="clinica" className="relative overflow-hidden bg-snow py-20 lg:py-28">
      <ToothIcon
        aria-hidden
        className="pointer-events-none absolute top-10 -right-20 h-[340px] w-[340px] -rotate-12 text-mint-200/60"
        strokeWidth={0.8}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        {/* imagem */}
        <Reveal className="relative">
          <div className="overflow-hidden rounded-[2.4rem] shadow-[0_50px_90px_-45px_rgba(10,50,46,0.55)]">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={IMG.clinica}
                alt="Recepção acolhedora da Prime Odontologia em Bicas/MG"
                loading="lazy"
                className="animate-breathe h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="animate-float absolute -top-5 -right-3 rounded-2xl bg-pine-900 px-5 py-4 text-mint-100 shadow-xl sm:-right-8">
            <p className="font-display text-xl leading-none font-semibold">{CLINIC.epao}</p>
            <p className="mt-1 text-[0.7rem] font-semibold tracking-wide text-mint-300 uppercase">
              {CLINIC.rt}
            </p>
          </div>

          <div className="animate-float-slow absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-snow px-5 py-3.5 shadow-xl ring-1 ring-pine-900/10">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mint-200 text-pine-800">
              <ShieldIcon className="h-5 w-5" />
            </span>
            <span className="text-sm leading-tight font-semibold text-pine-900">
              Registro ativo no CRO-MG
              <span className="block text-xs font-normal text-ink/55">
                segurança para você e sua família
              </span>
            </span>
          </div>
        </Reveal>

        {/* texto */}
        <div>
          <Reveal>
            <p className="flex items-center gap-3 text-[0.72rem] font-bold tracking-[0.24em] text-coral-600 uppercase">
              <span className="h-px w-10 bg-coral-500" />A clínica
            </p>
            <h2 className="font-display mt-4 text-[clamp(2.1rem,4.6vw,3.4rem)] leading-[1.06] font-semibold tracking-tight text-pine-950">
              Cuidado de capital,
              <br />
              <em className="font-light text-pine-700 italic">acolhimento de interior</em>.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 leading-relaxed text-ink/70">
              A <strong className="font-semibold text-pine-900">Prime Odontologia</strong> nasceu
              para provar que tratamento de excelência não precisa exigir viagem até a capital.
              Na Praça Dr. Vicente Bianco, no centro de Bicas, reunimos tecnologia, especialidades
              e — acima de tudo — tempo para ouvir cada paciente.
            </p>
            <p className="mt-4 leading-relaxed text-ink/70">
              Aqui, criança não chora na cadeira, idoso é atendido no seu ritmo e quem busca
              estética sai com resultado natural. É assim que construímos mais de 1.500 sorrisos
              na região.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {DIFFERENTIALS.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-sm font-semibold text-ink/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pine-900 text-mint-300">
                    <CheckIcon className="h-3 w-3" strokeWidth={2.6} />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <Stat key={s.label} {...s} delay={i * 90} />
            ))}
          </div>

          <Reveal delay={160}>
            <a
              href={waLink("Olá! Quero conhecer a Prime Odontologia e agendar uma visita.")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-coral mt-9 px-7 py-3.5 text-sm"
            >
              <WhatsIcon className="h-4.5 w-4.5" />
              Venha conhecer a clínica
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
