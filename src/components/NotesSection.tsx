import { motion, useReducedMotion } from "framer-motion";

export function NotesSection() {
  const reduce = useReducedMotion();

  return (
    <section id="notas" className="scroll-mt-24 pb-12 pt-6">
      <motion.div
        className="relative mx-auto max-w-xl rounded-md border border-white/95 bg-gradient-to-br from-white/80 to-blush/25 px-8 py-10 shadow-card backdrop-blur-sm sm:px-12 sm:py-12"
        initial={reduce ? false : { opacity: 0, rotate: -1.5, y: 28 }}
        whileInView={{ opacity: 1, rotate: -0.35, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="mx-auto mb-8 h-4 w-14 rounded-sm opacity-90"
          style={{
            background:
              "repeating-linear-gradient(-45deg, rgba(255,107,157,0.45) 0 5px, rgba(232,212,255,0.55) 5px 10px)",
          }}
          aria-hidden
        />
        <h2 className="text-center font-display text-2xl font-medium">Pedacinhos de carinho</h2>
        <ul className="mt-8 space-y-4 text-ink-soft leading-relaxed">
          <li className="flex gap-3">
            <span className="select-none text-accent">✿</span>
            <span>Sorrisos guardados pra quando o dia pesar um pouquinho mais.</span>
          </li>
          <li className="flex gap-3">
            <span className="select-none text-accent">✿</span>
            <span>Abraços que cabem até na saudade quando a foto lembra a gente deles.</span>
          </li>
          <li className="flex gap-3">
            <span className="select-none text-accent">✿</span>
            <span>Planos bobos que viram história — porque com você até o simples é especial.</span>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
