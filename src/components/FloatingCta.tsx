import { useEffect, useState } from "react";
import { waLink } from "../config";
import { WhatsIcon } from "./Icons";

export default function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waLink("Olá! Quero agendar uma avaliação na Prime Odontologia. 🙂")}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Prime Odontologia no WhatsApp"
      className={`fixed right-5 bottom-5 z-40 flex items-center gap-3 rounded-full bg-[#1FAF57] py-3 pr-6 pl-4 text-[#f2fff7] shadow-[0_20px_45px_-15px_rgba(21,120,60,0.65)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#1a9a4d] sm:right-7 sm:bottom-7 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-16 opacity-0"
      }`}
    >
      <span className="relative flex h-9 w-9 items-center justify-center">
        <span className="animate-ping-soft absolute inset-0 rounded-full bg-[#f2fff7]/60" />
        <WhatsIcon className="relative h-7 w-7" />
      </span>
      <span className="text-sm leading-tight font-bold">
        Agendar agora
        <span className="block text-[0.66rem] font-medium opacity-80">
          resposta rápida no WhatsApp
        </span>
      </span>
    </a>
  );
}
