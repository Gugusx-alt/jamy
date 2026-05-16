import { useState } from "react";
import { AmbientBackground } from "./components/AmbientBackground";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { IntroSection } from "./components/IntroSection";
import { Gallery } from "./components/Gallery";
import { NotesSection } from "./components/NotesSection";
import { Footer } from "./components/Footer";

export default function App() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <AmbientBackground />
      <div className="relative mx-auto max-w-6xl px-5 pb-8 pt-2 md:px-8">
        <Nav />
        <Hero />
        <IntroSection />
        <Gallery active={lightboxIndex} setActive={setLightboxIndex} />
        <NotesSection />
        <Footer />
      </div>
    </>
  );
}
