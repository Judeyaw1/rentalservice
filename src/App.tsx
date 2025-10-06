import React from "react";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();
  return (
    <div className="min-h-screen">
      <Header />
      <div className="reveal-hidden" id="hero-wrapper">
        <Hero />
      </div>
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
