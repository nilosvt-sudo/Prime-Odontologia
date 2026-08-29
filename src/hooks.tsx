import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

/* Detecta preferência por movimento reduzido */
export function usePrefersReducedMotion() {
  const reduced = useReducedMotion();
  const [matches, setMatches] = useState(Boolean(reduced));

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMatches(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return matches;
}

/* Observa quando um elemento entra na viewport (uma única vez) */
export function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -48px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* Variantes padrão do Motion para animações reutilizáveis */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: customDelay / 1000,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

/* Wrapper de revelação no scroll com Motion acelerado por GPU */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const shouldReduce = usePrefersReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Contador animado */
export function useCountUp(target: number, start: boolean, duration = 1800, decimals = 0) {
  const [val, setVal] = useState(0);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    if (!start) return;
    if (reduced) {
      setVal(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(parseFloat((target * eased).toFixed(decimals)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration, decimals, reduced]);
  return val;
}

/* Formata número no padrão pt-BR */
export function formatPt(n: number, decimals = 0) {
  return n.toLocaleString("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}
