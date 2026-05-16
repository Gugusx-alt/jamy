import { motion, useReducedMotion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function IntroSection() {
  const reduce = useReducedMotion();

  return (
    <section id="sobre" className="scroll-mt-24">
      <div className="mb-10 flex items-center justify-center gap-4">
        <span className="h-px max-w-[100px] flex-1 rounded-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <span className="whitespace-nowrap font-display text-lg text-ink-soft">
          memórias em cartão postal
        </span>
        <span className="h-px max-w-[100px] flex-1 rounded-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </div>

      <motion.div
        className="glass grid gap-10 rounded-[28px] p-8 md:grid-cols-2 md:p-12"
        initial={reduce ? false : { opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: easeOut }}
      >
        <div>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.1rem)] font-medium leading-tight">
            O que você é pra mim
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Cada foto é um mini-filme de um segundo que a gente quis eternizar. Você é aquele tipo
            de pessoa que faz o comum ficar cinematográfico — e eu sou muito sortudo por dividir
            essa história com você.
          </p>
          <ul className="mt-6 space-y-2 text-ink-soft">
            <li className="flex gap-2">
              <span className="text-accent">♡</span>
              <span>Leveza nos dias corridos e abraço quando o mundo aperta.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">♡</span>
              <span>Risadas que viram trilha sonora da nossa vida.</span>
            </li>
          </ul>
        </div>

        <motion.div
          className="relative flex flex-col justify-center"
          initial={reduce ? false : { opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: easeOut, delay: 0.12 }}
        >
          <div className="rounded-2xl border border-white/80 bg-gradient-to-br from-blush/40 to-lilac/30 p-[1px] shadow-glow">
            <div className="rounded-2xl bg-cream/80 p-6 backdrop-blur-sm">
              <p className="font-display text-xl italic leading-snug text-ink/90">
                &ldquo;Se amor fosse interface, você seria dark mode + arco-íris: confortável,
                bonita e impossível de largar.&rdquo;
              </p>
              <p className="mt-4 text-right text-sm font-semibold text-accent">— eu, obviamente</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
