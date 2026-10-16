import { useCallback, useState } from "react";
import { Lightbox } from "./components/Lightbox";
import { Blog } from "./sections/Blog";
import { Comparison } from "./sections/Comparison";
import { ContactForm } from "./sections/ContactForm";
import { Equipment } from "./sections/Equipment";
import { FloatingButtons } from "./sections/FloatingButtons";
import { Footer } from "./sections/Footer";
import { FounderLetter } from "./sections/FounderLetter";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Investment } from "./sections/Investment";
import { Process } from "./sections/Process";
import { TeamBacking } from "./sections/TeamBacking";
import { TinyClean } from "./sections/TinyClean";
import { TripleNo } from "./sections/TripleNo";
import { TrustBar } from "./sections/TrustBar";
import { WhoIsItFor } from "./sections/WhoIsItFor";
import { WhyUs } from "./sections/WhyUs";

export default function App() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const closeLightbox = useCallback(() => setLightboxSrc(null), []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <WhyUs />
        <FounderLetter />
        <Comparison />
        <Investment />
        <Equipment onZoom={setLightboxSrc} />
        <Process />
        <TinyClean />
        <TeamBacking />
        <TripleNo />
        <WhoIsItFor />
        <ContactForm />
        <Blog />
      </main>
      <Footer />
      <FloatingButtons />
      <Lightbox src={lightboxSrc} onClose={closeLightbox} />
    </div>
  );
}
