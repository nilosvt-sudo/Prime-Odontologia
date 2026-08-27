import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Audiences from "./components/Audiences";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Instagram from "./components/Instagram";
import Faq from "./components/Faq";
import Location from "./components/Location";
import Footer from "./components/Footer";
import FloatingCta from "./components/FloatingCta";
import { MARQUEE_ITEMS } from "./data";

export default function App() {
  return (
    <div className="relative">
      {/* textura de grão sobre toda a página */}
      <div aria-hidden className="grain pointer-events-none fixed inset-0 z-[70] opacity-[0.05]" />

      <Header />

      <main>
        <Hero />

        <div className="-mt-2 -rotate-[1.2deg] scale-[1.02]">
          <Marquee items={MARQUEE_ITEMS} tone="coal" />
        </div>

        <Services />
        <Audiences />
        <About />
        <Testimonials />
        <Instagram />
        <Faq />
        <Location />
      </main>

      <Footer />
      <FloatingCta />
    </div>
  );
}
