import { motion, useScroll, useSpring } from "motion/react";
import { usePrefersReducedMotion } from "../hooks";

export default function ScrollProgress() {
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduced) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] pointer-events-none h-1 w-full overflow-hidden bg-coal-950/10">
      <motion.div
        style={{ scaleX, transformOrigin: "0%" }}
        aria-hidden="true"
        className="h-full w-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-500 shadow-[0_0_10px_rgba(194,154,71,0.8)]"
      />
    </div>
  );
}
