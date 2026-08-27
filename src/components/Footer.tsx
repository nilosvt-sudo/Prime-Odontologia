import { CLINIC, waLink } from "../config";
import { SERVICES } from "../data";
import { ArrowIcon, InstaIcon, LogoMark, PinIcon, WhatsIcon } from "./Icons";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Para quem", href: "#publico" },
  { label: "A clínica", href: "#clinica" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-pine-950 text-mint-200">
      {/* chamada final de conversão */}
      <div className="border-b border-mint-100/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center">
          <div>
            <p className="font-display text-[clamp(1.9rem,4vw,3rem)] leading-[1.08] font-semibold tracking-tight text-mint-100">
              Pronto para o seu
              <em className="font-light text-coral-400 italic"> melhor sorriso</em>?
            </p>
            <p className="mt-3 max-w-lg text-mint-200/75">
              Agende uma avaliação e receba um plano de tratamento pensado para o seu
              momento — sem compromisso.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Olá! Quero agendar minha avaliação na Prime Odontologia. 🙂")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-coral px-8 py-4 text-[0.95rem]"
            >
              <WhatsIcon className="h-5 w-5" />
              Agendar agora
            </a>
            <a
              href="#agendar"
              className="btn btn-outline-mint px-8 py-4 text-[0.95rem]"
            >
              Preencher formulário
              <ArrowIcon className="h-4 w-4 rotate-90" />
            </a>
          </div>
        </div>
      </div>

      {/* colunas */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div>
          <a href="#inicio" className="flex items-center gap-3">
            <LogoMark className="h-12 w-12 bg-mint-100! text-pine-900!" />
            <span className="leading-none">
              <span className="font-display block text-2xl font-semibold text-mint-100">Prime</span>
              <span className="mt-1 block text-[0.6rem] font-bold tracking-[0.32em] text-mint-300 uppercase">
                Odontologia
              </span>
            </span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-mint-200/70">
            Harmonização facial · Odontopediatria · Implantes · Clareamento. Odontologia
            completa e acolhedora para toda a família de Bicas e região.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={CLINIC.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da Prime Odontologia"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-mint-100/20 text-mint-100 transition-all duration-300 hover:-translate-y-1 hover:border-coral-400 hover:bg-coral-500 hover:text-[#fff4ef]"
            >
              <InstaIcon className="h-5 w-5" />
            </a>
            <a
              href={waLink("Olá! Vim pelo site da Prime Odontologia.")}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp da Prime Odontologia"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-mint-100/20 text-mint-100 transition-all duration-300 hover:-translate-y-1 hover:border-coral-400 hover:bg-coral-500 hover:text-[#fff4ef]"
            >
              <WhatsIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <nav aria-label="Rodapé — navegação">
          <p className="text-[0.7rem] font-bold tracking-[0.22em] text-mint-300 uppercase">
            Navegação
          </p>
          <ul className="mt-5 space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="group inline-flex items-center gap-2 text-mint-200/75 transition-colors hover:text-coral-400">
                  <span className="h-px w-3 bg-coral-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Rodapé — serviços">
          <p className="text-[0.7rem] font-bold tracking-[0.22em] text-mint-300 uppercase">
            Especialidades
          </p>
          <ul className="mt-5 space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <a href="#servicos" className="group inline-flex items-center gap-2 text-mint-200/75 transition-colors hover:text-coral-400">
                  <span className="h-px w-3 bg-coral-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[0.7rem] font-bold tracking-[0.22em] text-mint-300 uppercase">
            Contato
          </p>
          <p className="mt-5 flex items-start gap-2.5 text-sm leading-relaxed text-mint-200/75">
            <PinIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-coral-400" />
            {CLINIC.address}
          </p>
          <a
            href={waLink("Olá! Vim pelo site da Prime Odontologia.")}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center gap-2.5 text-sm font-semibold text-mint-100 transition-colors hover:text-coral-400"
          >
            <WhatsIcon className="h-4.5 w-4.5 shrink-0 text-coral-400" />
            {CLINIC.phoneDisplay}
          </a>
          <p className="mt-3 text-sm text-mint-200/75">Seg a Sex · 08h–18h</p>
          <p className="mt-5 rounded-2xl border border-mint-100/12 bg-pine-900/60 px-4 py-3 text-xs leading-relaxed text-mint-200/70">
            {CLINIC.epao} · {CLINIC.rt}
          </p>
        </div>
      </div>

      {/* barra legal */}
      <div className="border-t border-mint-100/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-xs text-mint-200/55 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {CLINIC.name} — Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-2">
            Feito com <span className="text-coral-400">♥</span> em {CLINIC.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
