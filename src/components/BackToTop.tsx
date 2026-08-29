import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePrefersReducedMotion } from "../hooks";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduced ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={scrollToTop}
          initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 15 }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 15 }}
          whileHover={reduced ? undefined : { scale: 1.1, y: -3 }}
          whileTap={reduced ? undefined : { scale: 0.92 }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
          aria-label="Voltar ao topo da página"
          className="fixed left-4 bottom-4 z-40 flex h-11 w-11 sm:left-6 sm:bottom-6 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gold-500/40 bg-coal-950/90 text-gold-300 shadow-[0_12px_28px_-8px_rgba(15,17,19,0.7)] backdrop-blur-md transition-colors hover:border-gold-400 hover:text-gold-200 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
