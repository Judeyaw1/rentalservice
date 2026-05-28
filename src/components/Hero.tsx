import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1584072554475-cacee06c7240?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1758705477576-8783430d55b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1653821355692-03666613499f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0",
];

export function Hero() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<number | null>(null);
  const currentRef = useRef(0);

  function fadeTo(next: number) {
    setFading(true);
    window.setTimeout(() => {
      setCurrent(next);
      currentRef.current = next;
      setFading(false);
    }, 350);
  }

  function startAutoplay() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      fadeTo((currentRef.current + 1) % SLIDES.length);
    }, 5000);
  }

  useEffect(() => {
    startAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function goNext() {
    fadeTo((current + 1) % SLIDES.length);
    startAutoplay();
  }

  function goPrev() {
    fadeTo((current - 1 + SLIDES.length) % SLIDES.length);
    startAutoplay();
  }

  function goTo(i: number) {
    if (i === current) return;
    fadeTo(i);
    startAutoplay();
  }


  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background slides */}
      <div className="absolute inset-0 z-0">
        <img
          key={current}
          src={SLIDES[current]}
          alt=""
          role="presentation"
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-350 ${
            fading ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Layered gradient: dark top for header legibility + dark bottom for text */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/70" />
      </div>

      {/* Prev / Next arrows */}
      <button
        aria-label="Previous slide"
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/20 transition-all backdrop-blur-sm"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        aria-label="Next slide"
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/20 transition-all backdrop-blur-sm"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/40 text-yellow-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            Premium Event Rentals
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Munastars{" "}
            <span className="text-yellow-400">Rentals</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            We bring your celebrations to life — weddings, birthdays, corporate events, and more —
            with premium rentals and elegant décor that make every moment unforgettable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/services")}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3.5 rounded-full text-base transition-all hover:scale-105 shadow-lg shadow-yellow-500/30"
            >
              Explore Services
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="bg-white/10 hover:bg-white/20 border border-white/40 text-white font-semibold px-8 py-3.5 rounded-full text-base transition-all backdrop-blur-sm hover:scale-105"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="relative z-10 flex justify-center gap-2 pb-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-8 h-2 bg-yellow-400"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
