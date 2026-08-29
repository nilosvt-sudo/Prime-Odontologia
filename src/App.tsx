import Header from "./components/Header";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Audiences from "./components/Audiences";
import BeforeAfter from "./components/BeforeAfter";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Instagram from "./components/Instagram";
import Faq from "./components/Faq";
import Location from "./components/Location";
import Footer from "./components/Footer";
import FloatingCta from "./components/FloatingCta";
import BackToTop from "./components/BackToTop";
import BookingModal from "./components/BookingModal";
import { MARQUEE_ITEMS } from "./data";

export default function App() {
  return (
    <div className="relative">
      {/* Barra de progresso de scroll dourada */}
      <ScrollProgress />

      {/* textura de grão sobre toda a página */}
      <div aria-hidden className="grain pointer-events-none fixed inset-0 z-[70] opacity-[0.05]" />

      <Header />

      <main>
        <Hero />

        <div className="relative z-10 w-full overflow-hidden shadow-sm">
          <Marquee items={MARQUEE_ITEMS} tone="coal" />
        </div>

        <Services />
        <Audiences />
        <BeforeAfter />
        <About />
        <Testimonials />
        <Instagram />
        <Faq />
        <Location />
      </main>

      <Footer />
      <FloatingCta />
      <BackToTop />
      <BookingModal />
    </div>
  );
}
