import React from "react";
import { Button } from "./ui/button";
import { Phone, Mail } from "lucide-react";
// import { useNavigate } from "react-router-dom";

export function Header() {
  function scrollToId(id: string) {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
  // const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="flex items-center space-x-4">
            <img
              src="/favicon.svg"
              alt="Munastars Rentals logo"
              className="h-12 w-auto md:h-14"
            />
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Munastars Rentals
              </h1>
              <p className="text-sm text-gray-600">
                Where Your Wishes Shine Bright
              </p>
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </div>
            <Button onClick={() => scrollToId("#contact")}>Get Quote</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
