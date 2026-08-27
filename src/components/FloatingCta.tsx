import { useEffect, useState } from "react";
import { waLink } from "../config";
import { WhatsIcon } from "./Icons";

export default function FloatingCta() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setShow(true), 1800);
    return () => window.clearTimeout(id);
  }, []);

  if (!show || dismissed) return null;

  return (
    <div className="fixed right-5 bottom-5 z-50 flex items-center gap-3">
      <span className="hidden items-center rounded-full border border-coal-900/15 bg-snow px-4 py-2 text-[0.72rem] font-bold text-coal-900 shadow-lg sm:flex">
        Agende pelo WhatsApp
      </span>
      <a
        href={waLink("Olá! Quero agendar uma avaliação na Prime Odontologia. 🙂")}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar no WhatsApp"
        className="group relative flex h-16 w-16 items-center justify-center"
      >
        <span className="animate-ping-soft absolute inset-0 rounded-full bg-gold-400/60" />
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gold-500 text-coal-950 shadow-[0_18px_40px_-12px_rgba(194,154,71,0.7)] ring-1 ring-gold-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold-400">
          <WhatsIcon className="h-8 w-8" />
        </span>
      </a>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Fechar"
        className="flex h-7 w-7 items-center justify-center rounded-full border border-coal-900/15 bg-snow text-[0.7rem] font-bold text-coal-900 shadow transition-all hover:rotate-90 hover:border-gold-500"
      >
        ✕
      </button>
    </div>
  );
}
