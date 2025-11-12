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

const App = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 7, // smoothness speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing function
      smoothWheel: 4,
      smoothTouch: 4,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <div id="app-wrapper" className="bg-black text-white">
        {/* Hero Section */}
        <Home />

        {/* Description */}
        <div id="description">
          <Section2 />
        </div>

        {/* Experience */}
        <div id="experience">
          <Section3 />
        </div>

        {/* Services */}
        <div id="services">
          <Services />
        </div>
        <div id="services2">
          <Services2 />
        </div>

        {/* Testimonials */}
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="testimonials2">
          <Testimonials2 />
        </div>

        {/* FAQ */}
        <div id="faq">
          <FAQ />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
