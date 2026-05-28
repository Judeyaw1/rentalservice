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

// Import top-level pages
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// Import service detail pages
import Detailservice from "./pages/services/index.tsx";
import ChairsTables from "./pages/services/chairsTables.tsx";
import Chaffingdishes from "./pages/services/chaffingdishes.tsx";
import Chargerplates from "./pages/services/chargerplates.tsx";
import Flowerseventdecor from "./pages/services/flowerseventdecor.tsx";

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
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/detail" element={<Detailservice />} />
        <Route path="/chairsTables" element={<ChairsTables />} />
        <Route path="/chaffingdishes" element={<Chaffingdishes />} />
        <Route path="/chargerplates" element={<Chargerplates />} />
        <Route path="/flowerseventdecor" element={<Flowerseventdecor />} />
      </Routes>
    </Router>
  );
}
