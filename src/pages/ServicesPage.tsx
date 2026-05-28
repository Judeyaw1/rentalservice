import React from "react";
import { Header } from "../components/Header";
import { Services } from "../components/Services";
import { Footer } from "../components/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
    </div>
  );
}
