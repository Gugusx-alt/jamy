import { useCallback, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { photoSrc, PHOTO_FILES } from "../data/photos";

type GalleryProps = {
  active: number | null;
  setActive: (i: number | null) => void;
};

const washi = ["from-rose/50 to-blush", "from-lilac/50 to-blush/30", "from-amber-100/70 to-rose/40"];

export function Gallery({ active, setActive }: GalleryProps) {
  const reduce = useReducedMotion();

  const close = useCallback(() => setActive(null), [setActive]);

  const go = useCallback(
    (dir: -1 | 1) => {
      if (active === null) return;
      const n = PHOTO_FILES.length;
      setActive(((active + dir + n) % n));
    },
    [active, setActive],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, go]);

  useEffect(() => {
    if (active === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <section id="galeria" className="scroll-mt-24 py-16">
      <motion.div
        className="text-center"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-display text-[clamp(1.7rem,3.2vw,2.35rem)] font-medium">
          Nosso mural
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-ink-soft">
          Passe o mouse pra ver o efeito 3D. Clica pra abrir em tela cheia — setas no teclado
          navegam entre as fotos.
        </p>
      </motion.div>

      <ul className="mt-12 grid list-none grid-cols-2 gap-5 sm:grid-cols-3 lg:gap-8">
        {PHOTO_FILES.map((file, i) => {
          const tilt = i % 2 === 0 ? -2.2 : 2.2;
          return (
            <li key={file}>
              <motion.button
                type="button"
                className="group relative w-full cursor-zoom-in rounded-2xl border-0 bg-transparent p-0 text-left outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
                initial={reduce ? false : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActive(i)}
                whileHover={
                  reduce
                    ? undefined
                    : { rotate: 0, y: -6, transition: { type: "spring", stiffness: 320, damping: 20 } }
                }
                style={{ rotate: reduce ? 0 : tilt }}
              >
                <span
                  className={`pointer-events-none absolute left-1/2 top-[-6px] z-10 h-[18px] w-[46%] -translate-x-1/2 -rotate-3 rounded-sm bg-gradient-to-r opacity-60 ${washi[i % washi.length]}`}
                  aria-hidden
                />
                <div className="overflow-hidden rounded-[18px] border-[3px] border-white shadow-card transition-shadow group-hover:shadow-glow">
                  <img
                    src={photoSrc(file)}
                    alt={`Momento ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
              </motion.button>
            </li>
          );
        })}
      </ul>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Foto ampliada"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/75 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          >
            <motion.button
              type="button"
              className="absolute right-4 top-4 z-[110] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white text-2xl leading-none text-ink shadow-lg transition hover:scale-105"
              aria-label="Fechar"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              ×
            </motion.button>

            <motion.button
              type="button"
              className="absolute left-4 top-1/2 z-[110] hidden -translate-y-1/2 rounded-full border border-white/20 bg-white/90 px-4 py-3 text-sm font-bold text-ink shadow-lg md:block hover:bg-white"
              aria-label="Foto anterior"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
            >
              ←
            </motion.button>
            <motion.button
              type="button"
              className="absolute right-4 top-1/2 z-[110] hidden -translate-y-1/2 rounded-full border border-white/20 bg-white/90 px-4 py-3 text-sm font-bold text-ink shadow-lg md:block hover:bg-white"
              aria-label="Próxima foto"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
            >
              →
            </motion.button>

            <motion.figure
              className="relative max-h-[85vh] max-w-[min(90vw,560px)] overflow-hidden rounded-xl bg-white p-2 shadow-2xl"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={PHOTO_FILES[active] ?? ""}
                src={photoSrc(PHOTO_FILES[active]!)}
                alt={`Foto ${active + 1}`}
                className="max-h-[min(72vh,680px)] w-full rounded-lg object-contain"
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
