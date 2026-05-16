const links = [
  { href: "#sobre", label: "Sobre nós" },
  { href: "#galeria", label: "Fotos" },
  { href: "#notas", label: "Recadinhos" },
];

export function Nav() {
  return (
    <nav
      className="flex flex-wrap justify-center gap-2 py-6"
      aria-label="Seções do site"
    >
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className="rounded-full border border-white/80 bg-white/55 px-4 py-2 text-sm text-ink-soft shadow-card backdrop-blur-md transition hover:-translate-y-0.5 hover:text-accent hover:shadow-glow"
        >
          {l.label}
        </a>
      ))}
    </nav>
  );
}
