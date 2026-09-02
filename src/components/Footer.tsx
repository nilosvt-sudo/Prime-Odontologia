import { CLINIC, waLink } from "../config";
import { SERVICES } from "../data";
import { openBookingModal } from "./BookingModal";
import { ArrowIcon, InstaIcon, PinIcon, WhatsIcon } from "./Icons";

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
    <footer className="relative overflow-hidden bg-coal-950 text-snow">
      {/* Chamada final de conversão */}
      <div className="border-b border-gold-500/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center sm:items-start sm:text-left justify-between gap-6 px-6 py-10 sm:py-14 lg:py-16 lg:flex-row lg:items-center">
          <div>
            <p className="font-display text-[clamp(1.75rem,3.5vw,2.8rem)] leading-[1.1] font-semibold tracking-tight text-snow">
              Pronto para o seu{" "}
              <em className="font-medium text-gold-300 italic">sorriso padrão ouro?</em>
            </p>
            <p className="mt-2.5 max-w-lg font-light text-zinc-300 text-sm sm:text-base">
              Agende uma avaliação e receba um plano de tratamento pensado para o seu
              momento — sem compromisso.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={waLink("Olá! Quero agendar minha avaliação na Prime Odontologia. 🙂")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-gold px-8 py-3.5 text-sm sm:text-[0.95rem] justify-center"
            >
              <WhatsIcon className="h-5 w-5" />
              Agendar agora
            </a>
            <button
              onClick={() => openBookingModal()}
              type="button"
              className="btn btn-outline-gold px-8 py-3.5 text-sm sm:text-[0.95rem] cursor-pointer justify-center"
            >
              Preencher formulário
              <ArrowIcon className="h-4 w-4 rotate-[-90deg]" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid de colunas responsivo e sem vãos vazios */}
      <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 lg:gap-12 px-6 py-10 sm:py-12 lg:py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        {/* Bloco da marca / Logo */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-3 sm:gap-4">
          <a
            href="#inicio"
            aria-label="PRIME ODONTOLOGIA - Início"
            className="inline-flex items-center rounded-2xl bg-white p-3.5 sm:p-5 shadow-[0_14px_36px_-8px_rgba(0,0,0,0.6)] ring-2 ring-gold-500/50 transition-all duration-300 hover:scale-105 hover:ring-gold-400"
          >
            <img
              src="/logo-prime-odontologia.png"
              alt="PRIME ODONTOLOGIA"
              className="h-14 sm:h-18 w-auto object-contain drop-shadow"
            />
          </a>
          <p className="max-w-xs text-xs sm:text-sm leading-relaxed font-normal text-zinc-300">
            Harmonização facial · Odontopediatria · Implantes · Clareamento. Odontologia
            completa e acolhedora para toda a família de Bicas e região.
          </p>
          <div className="flex items-center justify-center gap-3 mt-2">
            <a
              href={CLINIC.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da Prime Odontologia"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/40 bg-coal-900/60 text-gold-300 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:bg-gold-500 hover:text-coal-950"
            >
              <InstaIcon className="h-5 w-5" />
            </a>
            <a
              href={waLink("Olá! Vim pelo site da Prime Odontologia.")}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp da Prime Odontologia"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/40 bg-coal-900/60 text-gold-300 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:bg-gold-500 hover:text-coal-950"
            >
              <WhatsIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Navegação */}
        <nav aria-label="Rodapé — navegação" className="text-center sm:text-left">
          <p className="text-[0.66rem] font-bold tracking-[0.24em] text-gold-300 uppercase">
            Navegação
          </p>
          <ul className="mt-3.5 sm:mt-5 space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="group inline-flex items-center gap-2 font-normal text-zinc-300 transition-colors hover:text-white"
                >
                  <span className="hidden sm:inline-block h-px w-3 bg-gold-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Especialidades */}
        <nav aria-label="Rodapé — serviços" className="text-center sm:text-left">
          <p className="text-[0.66rem] font-bold tracking-[0.24em] text-gold-300 uppercase">
            Especialidades
          </p>
          <ul className="mt-3.5 sm:mt-5 space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <a
                  href="#servicos"
                  className="group inline-flex items-center gap-2 font-normal text-zinc-300 transition-colors hover:text-white"
                >
                  <span className="hidden sm:inline-block h-px w-3 bg-gold-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contato */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <p className="text-[0.66rem] font-bold tracking-[0.24em] text-gold-300 uppercase">
            Contato
          </p>
          <p className="mt-3.5 sm:mt-5 flex items-center sm:items-start gap-2 text-xs sm:text-sm leading-relaxed font-normal text-zinc-300 max-w-xs">
            <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400 hidden sm:block" />
            {CLINIC.address}
          </p>
          <a
            href={waLink("Olá! Vim pelo site da Prime Odontologia.")}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center gap-2 text-xs sm:text-sm font-semibold text-white transition-colors hover:text-gold-300"
          >
            <WhatsIcon className="h-4.5 w-4.5 shrink-0 text-gold-400" />
            {CLINIC.phoneDisplay}
          </a>
          <p className="mt-2 text-xs sm:text-sm font-normal text-zinc-300">Seg a Sex · 08h–18h</p>
          <p className="mt-4 rounded-xl border border-gold-500/20 bg-coal-900 px-3.5 py-2 text-[0.7rem] sm:text-xs leading-relaxed font-normal text-zinc-400">
            {CLINIC.epao} · {CLINIC.rt}
          </p>
        </div>
      </div>

      {/* Barra legal com padding inferior seguro pb-24 para dar respiro à navegação mobile e ao botão de voltar ao topo */}
      <div className="border-t border-gold-500/15 pt-5 pb-24 sm:pb-24 lg:pb-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-center text-xs font-normal text-zinc-400 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {CLINIC.name} — Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            Feito com <span className="inline-block text-sm text-red-500 animate-pulse">❤️</span> em {CLINIC.city} · Minas Gerais
          </p>
        </div>
      </div>
    </footer>
  );
}
