import { CLINIC, waLink } from "../config";
import { formatPt, Reveal, useCountUp, useInView } from "../hooks";
import { ArrowIcon, CalendarIcon, ChatIcon, HeartIcon, ShieldIcon, WhatsIcon } from "./Icons";

function Stat({
  value,
  suffix,
  label,
  decimals = 0,
  start,
}: {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
  start: boolean;
}) {
  const v = useCountUp(value, start, 1900, decimals);
  return (
    <div>
      <p className="font-display text-[2.6rem] leading-none font-semibold text-gold-300 sm:text-5xl">
        {formatPt(v, decimals)}
        {suffix}
      </p>
      <p className="mt-2 text-[0.72rem] font-bold tracking-[0.18em] text-snow/55 uppercase">{label}</p>
    </div>
  );
}

const FEATURES = [
  {
    icon: <HeartIcon className="h-6 w-6" />,
    title: "Acolhimento de verdade",
    text: "Ambiente pensado para você se sentir em casa — do cafezinho na recepção ao atendimento sem pressa.",
  },
  {
    icon: <ShieldIcon className="h-6 w-6" />,
    title: "Equipe registrada",
    text: "Responsável técnica com CRO-MG 55084 e clínica registrada (EPAO 14184). Segurança em primeiro lugar.",
  },
  {
    icon: <CalendarIcon className="h-6 w-6" />,
    title: "Plano sob medida",
    text: "Avaliação completa, diagnóstico honesto e um plano de tratamento que cabe na sua rotina e no seu bolso.",
  },
  {
    icon: <ChatIcon className="h-6 w-6" />,
    title: "Agendamento descomplicado",
    text: "Marcação e lembretes pelo WhatsApp, com horários pontuais e encaixes para urgências.",
  },
];

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section id="clinica" className="relative overflow-hidden bg-snow py-20 lg:py-28">
      <div
        aria-hidden
        className="absolute -top-32 left-[-140px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(194,154,71,0.14),transparent_62%)]"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          {/* texto + stats */}
          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-[0.72rem] font-bold tracking-[0.26em] text-gold-600 uppercase">
                <span className="h-px w-12 bg-gold-500" />A clínica
              </p>
              <h2 className="font-display mt-4 text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.05] font-semibold tracking-tight text-coal-950">
                Sofisticação no detalhe,
                <br />
                <em className="font-medium text-gold-600 italic">calor humano</em> no atendimento.
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-6 max-w-xl space-y-4 font-light leading-relaxed text-ink/70">
                <p>
                  A <strong className="font-semibold text-coal-950">Prime Odontologia</strong> nasceu
                  para ser a clínica da família biquense: um espaço moderno na Praça Dr.
                  Vicente Bianco, que une tecnologia, biossegurança rigorosa e aquele
                  cuidado de quem conhece cada paciente pelo nome.
                </p>
                <p>
                  Da primeira consulta do seu filho à reabilitação com implantes dos seus
                  pais, tudo acontece aqui — com planejamento digital, materiais de
                  qualidade e uma equipe que ama o que faz.
                </p>
              </div>
            </Reveal>

            {/* painel de números */}
            <Reveal delay={200}>
              <div
                ref={ref}
                className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 rounded-[2rem] bg-coal-950 p-8 shadow-[0_45px_90px_-45px_rgba(15,17,19,0.7)] sm:grid-cols-4 sm:p-10"
              >
                <Stat value={1500} suffix="+" label="Sorrisos transformados" start={inView} />
                <Stat value={5} decimals={1} suffix=",0" label="Nota dos pacientes" start={inView} />
                <Stat value={4} label="Especialidades" start={inView} />
                <Stat value={100} suffix="%" label="Foco em você" start={inView} />
              </div>
            </Reveal>
          </div>

          {/* foto + diferenciais */}
          <div className="lg:pt-6">
            <Reveal delay={140}>
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[2.2rem] border border-gold-500/50"
                />
                <div className="relative overflow-hidden rounded-[2.2rem] shadow-[0_50px_100px_-45px_rgba(15,17,19,0.55)]">
                  <img
                    src="https://image.qwenlm.ai/generated-images/31270cc3-e5bd-49da-9fde-76df8fb0ad26/_result.png"
                    alt="Recepção da Prime Odontologia em Bicas/MG"
                    loading="lazy"
                    className="animate-breathe aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 right-6 rounded-full border border-coal-900/65 bg-snow px-5 py-2.5 text-[0.7rem] font-bold tracking-[0.14em] text-coal-950 uppercase shadow-lg">
                  {CLINIC.city} · MG
                </div>
              </div>
            </Reveal>

            <div className="mt-12 space-y-4">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={i * 90}>
                  <div className="group flex gap-5 rounded-3xl border border-coal-900/10 bg-paper p-5 transition-all duration-300 hover:border-gold-500/60 hover:bg-gold-100/60 hover:shadow-[0_18px_40px_-24px_rgba(15,17,19,0.4)]">
                    <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-coal-900/65 bg-snow text-gold-600 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                      {f.icon}
                    </span>
                    <span>
                      <strong className="font-display block text-lg font-semibold text-coal-950">
                        {f.title}
                      </strong>
                      <span className="mt-1 block text-sm leading-relaxed font-light text-ink/65">
                        {f.text}
                      </span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <a
                href={waLink("Olá! Quero conhecer a Prime Odontologia e agendar uma avaliação.")}
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold mt-8 px-7 py-3.5 text-sm"
              >
                <WhatsIcon className="h-4.5 w-4.5" />
                Venha nos conhecer
                <ArrowIcon className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
