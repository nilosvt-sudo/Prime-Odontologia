import { CLINIC, waLink } from "../config";
import { SERVICES } from "../data";
import { openBookingModal } from "./BookingModal";
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
    <footer className="relative overflow-hidden bg-coal-950 text-snow">
      {/* chamada final de conversão */}
      <div className="border-b border-gold-500/15">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center">
          <div>
            <p className="font-display text-[clamp(1.9rem,4vw,3rem)] leading-[1.08] font-semibold tracking-tight text-snow">
              Pronto para o seu{" "}
              <em className="font-medium text-gold-300 italic">sorriso padrão ouro?</em>
            </p>
            <p className="mt-3 max-w-lg font-light text-snow/60">
              Agende uma avaliação e receba um plano de tratamento pensado para o seu
              momento — sem compromisso.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Olá! Quero agendar minha avaliação na Prime Odontologia. 🙂")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-gold px-8 py-4 text-[0.95rem]"
            >
              <WhatsIcon className="h-5 w-5" />
              Agendar agora
            </a>
            <button
              onClick={() => openBookingModal()}
              type="button"
              className="btn btn-outline-gold px-8 py-4 text-[0.95rem] cursor-pointer"
            >
              Preencher formulário
              <ArrowIcon className="h-4 w-4 rotate-[-90deg]" />
            </button>
          </div>
        </div>
      </div>

      {/* colunas */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div>
          <a
            href="#inicio"
            aria-label="PRIME ODONTOLOGIA - Início"
            className="inline-flex items-center rounded-2xl bg-white p-4 sm:p-5 shadow-[0_14px_36px_-8px_rgba(0,0,0,0.6)] ring-2 ring-gold-500/50 transition-all duration-300 hover:scale-105 hover:ring-gold-400 hover:shadow-[0_18px_44px_-8px_rgba(194,154,71,0.35)]"
          >
            <img
              src="/logo-prime-odontologia.png"
              alt="PRIME ODONTOLOGIA"
              className="h-16 sm:h-20 w-auto object-contain drop-shadow"
            />
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed font-light text-snow/55">
            Harmonização facial · Odontopediatria · Implantes · Clareamento. Odontologia
            completa e acolhedora para toda a família de Bicas e região.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={CLINIC.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da Prime Odontologia"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/35 text-gold-300 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:bg-gold-500 hover:text-coal-950"
            >
              <InstaIcon className="h-5 w-5" />
            </a>
            <a
              href={waLink("Olá! Vim pelo site da Prime Odontologia.")}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp da Prime Odontologia"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/35 text-gold-300 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:bg-gold-500 hover:text-coal-950"
            >
              <WhatsIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <nav aria-label="Rodapé — navegação">
          <p className="text-[0.66rem] font-bold tracking-[0.24em] text-gold-300 uppercase">
            Navegação
          </p>
          <ul className="mt-5 space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="group inline-flex items-center gap-2 font-light text-snow/60 transition-colors hover:text-gold-300"
                >
                  <span className="h-px w-3 bg-gold-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Rodapé — serviços">
          <p className="text-[0.66rem] font-bold tracking-[0.24em] text-gold-300 uppercase">
            Especialidades
          </p>
          <ul className="mt-5 space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <a
                  href="#servicos"
                  className="group inline-flex items-center gap-2 font-light text-snow/60 transition-colors hover:text-gold-300"
                >
                  <span className="h-px w-3 bg-gold-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[0.66rem] font-bold tracking-[0.24em] text-gold-300 uppercase">
            Contato
          </p>
          <p className="mt-5 flex items-start gap-2.5 text-sm leading-relaxed font-light text-snow/60">
            <PinIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-400" />
            {CLINIC.address}
          </p>
          <a
            href={waLink("Olá! Vim pelo site da Prime Odontologia.")}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center gap-2.5 text-sm font-semibold text-snow transition-colors hover:text-gold-300"
          >
            <WhatsIcon className="h-4.5 w-4.5 shrink-0 text-gold-400" />
            {CLINIC.phoneDisplay}
          </a>
          <p className="mt-3 text-sm font-light text-snow/60">Seg a Sex · 08h–18h</p>
          <p className="mt-5 rounded-2xl border border-gold-500/20 bg-coal-900 px-4 py-3 text-xs leading-relaxed font-light text-snow/55">
            {CLINIC.epao} · {CLINIC.rt}
          </p>
        </div>
      </div>

      {/* barra legal com margem de segurança para o botão flutuante */}
      <div className="border-t border-gold-500/15 pt-6 pb-32 sm:pb-36 lg:pb-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-center text-xs font-light text-snow/45 sm:flex-row sm:text-left">
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
