import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

import Home from "./pages/Home";
import Section2 from "./componenets/Section2";
import Section3 from "./componenets/Section3";
import Services from "./componenets/Services";
import Services2 from "./componenets/Services2";
import Testimonials from "./componenets/Testimonials";
import Testimonials2 from "./componenets/Testimonials2";
import FAQ from "./componenets/Faq";
import Footer from "./componenets/Footer";

function App() {
  useEffect(() => {
    // ✅ Initialize Lenis smooth scroll (clean, global version)
    const lenis = new Lenis({
      duration: 2, // Adjust scroll speed (higher = slower)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
    });

    // Expose globally if needed elsewhere
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle resizing or layout shifts
    const onResize = () => lenis.refresh();
    window.addEventListener("resize", onResize);
    window.addEventListener("load", () => lenis.refresh());

    return () => {
      window.removeEventListener("resize", onResize);
      delete window.lenis;
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <div id="app-wrapper" className="bg-black text-white">
        <section id="home">
          <Home />
        </section>

        <section id="description">
          <Section2 />
        </section>

        <section id="experience">
          <Section3 />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="services2">
          <Services2 />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="testimonials2">
          <Testimonials2 />
        </section>

        <section id="faq">
          <FAQ />
        </section>

        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
