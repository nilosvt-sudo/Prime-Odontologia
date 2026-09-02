import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { waLink } from "../config";
import { WhatsIcon } from "./Icons";
import { usePrefersReducedMotion } from "../hooks";
import Magnetic from "./Magnetic";

export default function FloatingCta() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const id = window.setTimeout(() => setShow(true), 1800);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {show && !dismissed && (
        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="fixed right-4 bottom-6 z-50 flex items-center gap-2.5 sm:right-6 sm:bottom-6 md:right-8 md:bottom-8"
        >
          <motion.span
            initial={reduced ? undefined : { opacity: 0, x: 10 }}
            animate={reduced ? undefined : { opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden items-center rounded-full border border-coal-900/15 bg-snow px-3.5 py-1.5 text-[0.72rem] font-bold text-coal-900 shadow-lg sm:flex backdrop-blur-sm"
          >
            Agende pelo WhatsApp
          </motion.span>
          <Magnetic strength={0.4}>
            <motion.a
              whileHover={reduced ? undefined : { scale: 1.1 }}
              whileTap={reduced ? undefined : { scale: 0.94 }}
              href={waLink("Olá! Quero agendar uma avaliação na Prime Odontologia. 🙂")}
              target="_blank"
              rel="noreferrer"
              aria-label="Conversar no WhatsApp"
              className="group relative flex h-14 w-14 sm:h-15 sm:w-15 items-center justify-center cursor-pointer"
            >
              <span className="animate-ping-soft absolute inset-0 rounded-full bg-emerald-400/60" />
              <span className="relative flex h-14 w-14 sm:h-15 sm:w-15 items-center justify-center rounded-full bg-[#25D366] text-[#081d11] shadow-[0_18px_40px_-10px_rgba(37,211,102,0.7)] ring-2 ring-emerald-300 transition-colors duration-300 group-hover:bg-[#20bd5a] group-hover:text-black">
                <WhatsIcon className="h-7 w-7 sm:h-8 sm:w-8" />
              </span>
            </motion.a>
          </Magnetic>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Fechar"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-coal-900/15 bg-snow text-[0.7rem] font-bold text-coal-900 shadow transition-all hover:rotate-90 hover:border-gold-500 cursor-pointer"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
