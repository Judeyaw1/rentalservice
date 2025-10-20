import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ServiceDetail } from "./components/ServiceDetail";
import { ScrollToTop } from "./components/ScrollToTop";
import { useReveal } from "./hooks/useReveal";

function HomePage() {
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

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
      </Routes>
    </Router>
  );
}
