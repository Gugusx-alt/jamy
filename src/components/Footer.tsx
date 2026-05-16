import { motion, useReducedMotion } from "framer-motion";

export function Footer() {
  const reduce = useReducedMotion();

  return (
    <footer className="pb-16 pt-10 text-center">
      <motion.p
        className="font-display text-xl text-ink-soft"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Feito especialmente pra você
      </motion.p>
      <motion.span
        className="mt-3 inline-block text-4xl text-accent"
        aria-label="amor"
        animate={reduce ? undefined : { scale: [1, 1.12, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        ♡
      </motion.span>
    </footer>
  );
}
