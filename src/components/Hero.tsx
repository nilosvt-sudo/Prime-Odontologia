import { useState, type FormEvent } from "react";
import { CLINIC, IMG, waLink } from "../config";
import { SERVICES } from "../data";
import {
  ArrowIcon,
  CalendarIcon,
  CheckIcon,
  LogoMark,
  ShieldIcon,
  StarIcon,
  ToothIcon,
  WhatsIcon,
} from "./Icons";

export default function Hero() {
  const [nome, setNome] = useState("");
  const [phone, setPhone] = useState("");
  const [servico, setServico] = useState(SERVICES[0].name);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Sou ${nome.trim() || "(não informado)"} e gostaria de agendar uma avaliação de *${servico}* na Prime Odontologia. Meu contato: ${phone.trim() || "(não informado)"}. 🙂`;
    window.open(waLink(msg), "_blank", "noopener");
    setSent(true);
    window.setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* fundo em camadas: arcos de sorriso + dente gigante */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-32 h-[620px] w-[620px] text-mint-300/40"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
      >
        {[88, 68, 48, 28].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} strokeWidth="0.7" />
        ))}
      </svg>
      <ToothIcon
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-16 h-[380px] w-[380px] rotate-12 text-pine-900/[0.05]"
        strokeWidth={0.8}
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pt-10 pb-16 sm:pt-14 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pt-16 lg:pb-24">
        {/* coluna esquerda */}
        <div className="lg:col-span-7">
          <div className="line-mask">
            <span style={{ animationDelay: "80ms" }}>
              <span className="inline-flex flex-wrap items-center gap-2 rounded-full border border-pine-900/12 bg-snow px-4 py-2 text-[0.7rem] font-bold tracking-[0.14em] text-pine-700 uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-mint-500" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-mint-500" />
                </span>
                {CLINIC.city} · {CLINIC.rt} · {CLINIC.epao}
              </span>
            </span>
          </div>

          <h1 className="font-display mt-6 text-[clamp(2.7rem,6.4vw,4.9rem)] leading-[1.01] font-semibold tracking-tight text-pine-950">
            <span className="line-mask">
              <span style={{ animationDelay: "180ms" }}>Seu sorriso,</span>
            </span>
            <span className="line-mask">
              <span style={{ animationDelay: "320ms" }}>
                nossa <em className="font-light text-coral-500 italic">assinatura</em>.
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-ink/70">
            Da primeira consulta do seu filho à reabilitação com implantes: odontologia
            completa, humana e tecnológica no coração de Bicas.{" "}
            <strong className="font-semibold text-pine-800">Para toda a família, em um só lugar.</strong>
          </p>

          {/* formulário de agendamento */}
          <form
            id="agendar"
            onSubmit={onSubmit}
            className="mt-8 max-w-xl rounded-[1.6rem] border border-pine-900/10 bg-snow/95 p-5 shadow-[0_30px_70px_-35px_rgba(10,50,46,0.4)] sm:p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="flex items-center gap-2.5 font-display text-lg font-semibold text-pine-900">
                <CalendarIcon className="h-5 w-5 text-coral-500" />
                Agende sua avaliação
              </p>
              <span className="rounded-full bg-mint-100 px-3 py-1 text-[0.65rem] font-bold tracking-wide text-pine-700 uppercase">
                resposta rápida
              </span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <input
                className="field"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                aria-label="Seu nome"
              />
              <input
                className="field"
                placeholder="Seu WhatsApp"
                inputMode="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                aria-label="Seu WhatsApp"
              />
              <select
                className="field sm:col-span-2"
                value={servico}
                onChange={(e) => setServico(e.target.value)}
                aria-label="Serviço de interesse"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name}
                  </option>
                ))}
                <option value="Avaliação geral">Ainda não sei — avaliação geral</option>
              </select>
            </div>

            <button type="submit" className="btn btn-coral mt-4 w-full px-6 py-3.5 text-[0.95rem]">
              <WhatsIcon className="h-5 w-5" />
              {sent ? "Abrindo WhatsApp…" : "Quero agendar pelo WhatsApp"}
            </button>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-ink/55">
              <CheckIcon className="h-3.5 w-3.5 text-mint-500" />
              Sem compromisso · Atendimento humanizado · Convênios e particular
            </p>
          </form>

          {/* selos de confiança */}
          <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink/75">
            <span className="flex items-center gap-2">
              <span className="flex text-coral-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </span>
              <strong className="text-pine-900">5,0</strong> avaliação dos pacientes
            </span>
            <span className="flex items-center gap-2">
              <ShieldIcon className="h-5 w-5 text-pine-700" />
              Biossegurança rigorosa
            </span>
            <span className="flex items-center gap-2">
              <LogoMark className="h-6 w-6" />
              {CLINIC.epao}
            </span>
          </div>
        </div>

        {/* coluna direita: arco + selos flutuantes */}
        <div className="relative mx-auto w-full max-w-[440px] lg:col-span-5">
          <div className="animate-float-slow relative">
            <div className="relative overflow-hidden rounded-t-full rounded-b-[2.2rem] border-[6px] border-snow shadow-[0_50px_90px_-40px_rgba(10,50,46,0.55)]">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={IMG.heroSmile}
                  alt="Paciente sorrindo com dentes saudáveis na Prime Odontologia"
                  className="animate-breathe h-full w-full object-cover"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-t-full rounded-b-[2.2rem] bg-gradient-to-t from-pine-950/25 via-transparent to-transparent" />
            </div>

            {/* selo giratório */}
            <div className="absolute -top-4 -right-4 h-28 w-28 sm:-right-10 sm:h-32 sm:w-32">
              <div className="animate-spin-slow absolute inset-0">
                <svg viewBox="0 0 100 100" className="h-full w-full text-pine-900">
                  <defs>
                    <path id="circ" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
                  </defs>
                  <text fontSize="9.2" letterSpacing="2.6" fontWeight="700" fill="currentColor">
                    <textPath href="#circ">PRIME ODONTOLOGIA • BICAS MG •</textPath>
                  </text>
                </svg>
              </div>
              <span className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-coral-500 text-[#fff4ef] shadow-lg">
                <ToothIcon className="h-7 w-7" strokeWidth={2} />
              </span>
            </div>

            {/* chip: horário disponível */}
            <div className="animate-float absolute bottom-8 -left-3 flex items-center gap-3 rounded-2xl bg-pine-900 px-4 py-3 text-mint-100 shadow-xl sm:-left-12">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-mint-400" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-mint-400" />
              </span>
              <span className="leading-tight">
                <strong className="block text-sm">Hoje, 14h</strong>
                <span className="text-[0.7rem] text-mint-300">horário disponível</span>
              </span>
            </div>

            {/* chip: avaliação */}
            <div className="animate-float absolute top-1/3 -right-2 hidden items-center gap-2 rounded-2xl bg-snow px-4 py-3 shadow-xl ring-1 ring-pine-900/8 sm:flex lg:-right-8">
              <span className="flex text-coral-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5" />
                ))}
              </span>
              <span className="text-xs leading-tight font-semibold text-pine-900">
                5,0
                <span className="block font-normal text-ink/55">no Google</span>
              </span>
            </div>

            {/* chip: sorrisos */}
            <div className="absolute -bottom-5 right-6 rounded-2xl bg-coral-500 px-5 py-3 text-[#fff4ef] shadow-xl">
              <strong className="font-display text-2xl leading-none">+1.500</strong>
              <span className="block text-[0.68rem] font-semibold tracking-wide uppercase">
                sorrisos transformados
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* atalho para serviços */}
      <div className="relative mx-auto hidden max-w-7xl px-6 pb-10 lg:block">
        <a
          href="#servicos"
          className="group inline-flex items-center gap-3 text-sm font-semibold text-pine-700 transition-colors hover:text-coral-600"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-pine-900/15 transition-all duration-300 group-hover:border-coral-500 group-hover:bg-coral-500 group-hover:text-[#fff4ef]">
            <ArrowIcon className="h-4 w-4 rotate-90" />
          </span>
          Conheça as 4 especialidades da Prime
        </a>
      </div>
    </section>
  );
}
