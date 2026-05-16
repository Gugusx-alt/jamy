import { motion, useReducedMotion } from "framer-motion";
import { photoSrc, PHOTO_FILES } from "../data/photos";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const heroPhoto = PHOTO_FILES[0];

  return (
    <header className="relative pb-14 pt-6 text-center">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: easeOut }}
      >
        <p className="mb-4 inline-block rounded-full border border-accent/25 bg-white/70 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent">
          feito com carinho · react + motion
        </p>

        <h1 className="font-display text-[clamp(2.4rem,6.5vw,4rem)] font-medium leading-[1.05] tracking-tight">
          <span className="text-gradient block">Para a Jamy,</span>
          <span className="mt-1 block font-display italic text-ink/90">
            com todo o meu amor
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
          Um lugar só nosso — cores que abraçam, fotos que lembram e um pouco de tecnologia bonita
          no meio, porque você merece algo{" "}
          <span className="font-semibold text-accent">único</span>.
        </p>

        <motion.p
          className="mt-6 text-xl tracking-[0.35em] text-accent/70"
          aria-hidden
          animate={reduce ? undefined : { opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          ✦ ⋆ ﾟ ☁ ﾟ ⋆ ✦
        </motion.p>
      </motion.div>

      <motion.div
        className="relative mx-auto mt-14 max-w-md"
        initial={reduce ? false : { opacity: 0, rotate: -6, y: 40 }}
        whileInView={{ opacity: 1, rotate: -2, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.85, ease: easeOut, delay: 0.15 }}
      >
        <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/25 via-lilac/20 to-transparent blur-2xl" />
        <motion.figure
          className="relative rounded-md bg-white p-3 pb-14 shadow-polaroid"
          whileHover={reduce ? undefined : { rotate: 0, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
        >
          <img
            src={photoSrc(heroPhoto)}
            alt="Um momento especial com a Jamy"
            className="aspect-[4/5] w-full rounded-sm object-cover"
            loading="eager"
            decoding="async"
          />
          <figcaption className="absolute bottom-4 left-0 right-0 text-center font-display text-lg text-ink-soft">
            você ♡
          </figcaption>
        </motion.figure>
      </motion.div>
    </header>
  );
}
