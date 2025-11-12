import React from "react";
import { BrowserRouter } from "react-router-dom";

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
