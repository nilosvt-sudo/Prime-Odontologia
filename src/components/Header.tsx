import { useEffect, useState } from "react";
import { CLINIC, waLink } from "../config";
import { ArrowIcon, InstaIcon, LogoMark, PhoneIcon, WhatsIcon } from "./Icons";

const LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Para quem", href: "#publico" },
  { label: "A clínica", href: "#clinica" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-coal-900/10 bg-snow/92 py-2.5 shadow-[0_12px_40px_-20px_rgba(15,17,19,0.25)] backdrop-blur-md"
            : "border-b border-transparent bg-paper/70 py-4 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6">
          <a href="#inicio" className="group flex items-center gap-3">
            <LogoMark className="h-11 w-11 transition-transform duration-500 group-hover:rotate-[-6deg]" />
            <span className="leading-none">
              <span className="font-display block text-[1.55rem] font-semibold tracking-tight text-coal-950">
                Prime
              </span>
              <span className="mt-0.5 block text-[0.58rem] font-bold tracking-[0.34em] text-gold-600 uppercase">
                Odontologia
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-[0.83rem] font-semibold tracking-wide text-coal-700 transition-colors duration-300 hover:text-coal-950"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={waLink("Olá! Vim pelo site da Prime Odontologia.")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[0.83rem] font-semibold text-coal-700 transition-colors hover:text-gold-600"
            >
              <PhoneIcon className="h-4 w-4 text-gold-600" />
              {CLINIC.phoneDisplay}
            </a>
            <a
              href={waLink("Olá! Quero agendar uma avaliação na Prime Odontologia. 🙂")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-coal px-6 py-2.5 text-[0.83rem]"
            >
              <WhatsIcon className="h-4 w-4" />
              Agendar
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-coal-900/15 lg:hidden"
          >
            <span
              className={`h-[1.5px] w-5 bg-coal-950 transition-all duration-300 ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span className={`h-[1.5px] w-5 bg-coal-950 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-[1.5px] w-5 bg-coal-950 transition-all duration-300 ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* menu mobile */}
      <div
        className={`fixed inset-0 z-40 bg-snow transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-between px-8 pt-28 pb-10">
          <nav className="flex flex-col gap-1" aria-label="Navegação mobile">
            {[{ label: "Início", href: "#inicio" }, ...LINKS].map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`group flex items-center justify-between border-b border-coal-900/10 py-4 transition-all duration-500 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
              >
                <span className="font-display text-3xl font-medium text-coal-950">{l.label}</span>
                <ArrowIcon className="h-5 w-5 text-gold-500 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            ))}
          </nav>
          <div className="space-y-4">
            <a
              href={waLink("Olá! Quero agendar uma avaliação na Prime Odontologia. 🙂")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-gold w-full px-6 py-4 text-[0.95rem]"
            >
              <WhatsIcon className="h-5 w-5" />
              Agendar pelo WhatsApp
            </a>
            <div className="flex items-center justify-center gap-6 text-sm font-semibold text-coal-700">
              <a
                href={CLINIC.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-gold-600"
              >
                <InstaIcon className="h-4.5 w-4.5" /> {CLINIC.instagramHandle}
              </a>
            </div>
            <p className="text-center text-xs text-ink/50">
              {CLINIC.address} · {CLINIC.epao}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
