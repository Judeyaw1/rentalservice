import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  ["Services", "/services"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img src="/favicon.svg" alt="Munastars Rentals logo" className="h-10 w-auto shrink-0" />
          <div className="hidden sm:block">
            <p className={`font-semibold text-sm leading-tight transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}>
              Munastars Rentals
            </p>
            <p className={`text-xs transition-colors ${scrolled ? "text-yellow-500" : "text-yellow-300"}`}>
              Where Your Wishes Shine Bright
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(([label, path]) => (
            <Link
              key={path}
              to={path}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-gray-700 hover:text-yellow-500"
                  : "text-white/90 hover:text-yellow-300"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <a
            href="tel:+15551234567"
            className={`flex items-center gap-2 text-sm transition-colors ${
              scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
            }`}
          >
            <Phone className="w-4 h-4" />
            (555) 123-4567
          </a>
          <Link
            to="/contact"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            Get Free Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className={`md:hidden p-2 transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-6 py-4 flex flex-col">
            {NAV_LINKS.map(([label, path]) => (
              <Link
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className="w-full text-left py-3 text-gray-800 font-medium border-b border-gray-100 last:border-0 hover:text-yellow-500 transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-full transition-colors text-center"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
