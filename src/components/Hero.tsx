import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const SLIDES = [
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1584072554475-cacee06c7240?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1758705477576-8783430d55b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1653821355692-03666613499f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<number | null>(null);
  const [isFading, setIsFading] = useState(false);

  function startAutoplay() {
    stopAutoplay();
    timerRef.current = window.setInterval(() => {
      fadeTo((prevIndexRef() + 1) % SLIDES.length);
    }, 4000);
  }

  function stopAutoplay() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  function prevIndexRef() {
    // helper to read the latest index inside interval
    return (document.body.dataset.heroIndex
      ? Number(document.body.dataset.heroIndex)
      : current) as number;
  }

  useEffect(() => {
    document.body.dataset.heroIndex = String(current);
  }, [current]);

  function fadeTo(nextIndex: number) {
    setIsFading(true);
    window.setTimeout(() => {
      setCurrent(nextIndex);
      setIsFading(false);
    }, 250);
  }

  function goNext() {
    fadeTo((current + 1) % SLIDES.length);
    startAutoplay();
  }

  function goPrev() {
    fadeTo((current - 1 + SLIDES.length) % SLIDES.length);
    startAutoplay();
  }
  function scrollToId(id: string) {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="relative h-[600px] bg-black-900 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          key={current}
          src={SLIDES[current]}
          alt=""
          role="presentation"
          aria-hidden="true"
          decoding="async"
          loading="eager"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 pointer-events-none ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/60 pointer-events-none"></div>
      </div>

      {/* Arrows for manual sliding */}
      <button
        aria-label="Previous slide"
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-black/70 focus:outline-none z-50"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>
      <button
        aria-label="Next slide"
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-black/70 focus:outline-none z-50"
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      
      <div className="relative z-50 pointer-events-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center w-full reveal-hidden">
          <h1 className="text-4xl md:text-6xl text-white mb-6 text-shadow">
            Welcome to <span className="text-yellow-300">Munastars Rentals</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto text-shadow">
            We bring your celebrations to life with high-quality party essentials and elegant décor. 
            Whether you're hosting a wedding, birthday, corporate event, or community gathering, 
            we provide the perfect rentals to make your event seamless and unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black"
              onClick={() => scrollToId("#services")}
            >
              View Our Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-black"
              onClick={() => scrollToId("#contact")}
            >
              Get Free Quote
            </Button>
          </div>
          <div className="mt-8">
            <p className="text-white text-lg border-white text-black hover:bg-white hover:text-black transition-all duration-300">✨ Where Your Wishes Shine Bright ✨</p>
          </div>
        </div>
      </div>
      {/* No manual controls per request */}
    </section>
  );
}