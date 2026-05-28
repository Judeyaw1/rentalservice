import React from "react";
import { Header } from "../components/Header";
import { About } from "../components/About";
import { Footer } from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </div>
  );
}
