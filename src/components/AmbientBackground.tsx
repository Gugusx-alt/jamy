import { motion, useReducedMotion } from "framer-motion";

const hearts = [
  { left: "6%", delay: 0, size: "text-sm" },
  { left: "18%", delay: -5, size: "text-xs" },
  { left: "32%", delay: -12, size: "text-lg" },
  { left: "48%", delay: -3, size: "text-sm" },
  { left: "63%", delay: -8, size: "text-xs" },
  { left: "78%", delay: -15, size: "text-base" },
  { left: "91%", delay: -2, size: "text-sm" },
];

export function AmbientBackground() {
  const reduce = useReducedMotion();

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 85% 65% at 12% 18%, rgba(255,228,236,0.95), transparent 55%), radial-gradient(ellipse 70% 50% at 88% 8%, rgba(232,212,255,0.82), transparent 50%), radial-gradient(ellipse 95% 72% at 50% 100%, rgba(248,180,196,0.38), transparent 55%), linear-gradient(180deg, #fff8f2 0%, #fdf5ff 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[length:80px_80px] opacity-[0.35] bg-noise mix-blend-soft-light" />

        {!reduce && (
          <>
            <motion.div
              className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-gradient-to-br from-accent/30 to-lilac/25 blur-3xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.45, 0.65, 0.45] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-24 bottom-[15%] h-80 w-80 rounded-full bg-gradient-to-tr from-rose/40 to-violet/30 blur-3xl"
              animate={{ scale: [1.08, 1, 1.08], opacity: [0.4, 0.58, 0.4] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
      </div>

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
        {hearts.map((h, idx) => (
          <span
            key={idx}
            className={`absolute bottom-0 ${h.size} text-accent/35`}
            style={{
              left: h.left,
              animation: reduce ? undefined : `drift 22s linear infinite`,
              animationDelay: `${h.delay}s`,
            }}
          >
            ♡
          </span>
        ))}
      </div>
    </>
  );
}
