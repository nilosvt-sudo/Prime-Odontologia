import { useEffect, useState } from "react";
import { CLINIC, waLink } from "../config";
import { ClockIcon, LogoMark, PhoneIcon, PinIcon } from "./Icons";

const NAV = [
  { label: "Serviços", href: "#servicos" },
  { label: "Para quem", href: "#publico" },
  { label: "A clínica", href: "#clinica" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dúvidas", href: "#faq" },
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
    <header className="sticky top-0 z-50">
      {/* barra informativa */}
      <div className="hidden bg-pine-950 text-mint-200 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-[0.72rem] font-medium tracking-wide">
          <span className="inline-flex items-center gap-1.5">
            <PinIcon className="h-3.5 w-3.5 text-mint-400" />
            {CLINIC.address}
          </span>
          <span className="inline-flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <ClockIcon className="h-3.5 w-3.5 text-mint-400" />
              Seg a Sex · 08h–18h
            </span>
            <a
              href={waLink("Olá! Gostaria de falar com a Prime Odontologia.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-coral-400"
            >
              <PhoneIcon className="h-3.5 w-3.5 text-mint-400" />
              {CLINIC.phoneDisplay}
            </a>
          </span>
        </div>
      </div>

      {/* barra principal */}
      <div
        className={`border-b transition-all duration-500 ${
          scrolled
            ? "border-pine-900/10 bg-paper/90 shadow-[0_10px_40px_-18px_rgba(10,50,46,0.25)] backdrop-blur-md"
            : "border-transparent bg-paper/70 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5">
          <a href="#inicio" className="group flex items-center gap-3">
            <LogoMark className="h-11 w-11 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105" />
            <span className="leading-none">
              <span className="font-display block text-[1.35rem] font-semibold tracking-tight text-pine-900">
                Prime
              </span>
              <span className="mt-1 block text-[0.58rem] font-bold tracking-[0.32em] text-pine-600 uppercase">
                Odontologia
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-sm font-semibold text-ink/75 transition-colors hover:text-pine-900"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 rounded-full bg-coral-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waLink("Olá! Quero agendar uma avaliação na Prime Odontologia.")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-coral hidden px-5 py-2.5 text-sm sm:inline-flex"
            >
              Agendar avaliação
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-pine-900/15 bg-snow lg:hidden"
            >
              <span
                className={`h-[2px] w-5 rounded bg-pine-900 transition-all duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-5 rounded bg-pine-900 transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[2px] w-5 rounded bg-pine-900 transition-all duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* menu mobile */}
      <div
        className={`fixed inset-x-0 top-0 bottom-0 z-[-1] bg-pine-950 pt-28 transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-8">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 50}ms` : "0ms" }}
              className={`border-b border-mint-100/10 py-4 font-display text-3xl font-medium text-mint-100 transition-all duration-500 hover:pl-3 hover:text-coral-400 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={waLink("Olá! Quero agendar uma avaliação na Prime Odontologia.")}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="btn btn-coral mt-8 px-6 py-4 text-base"
          >
            Agendar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
