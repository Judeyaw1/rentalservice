import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { services } from "../data/services";

const EVENT_TYPES = [
  { label: "Weddings", emoji: "💍" },
  { label: "Birthday Parties", emoji: "🎂" },
  { label: "Corporate Events", emoji: "🏢" },
  { label: "Community Gatherings", emoji: "🤝" },
  { label: "Anniversary Celebrations", emoji: "🥂" },
  { label: "Baby Showers", emoji: "🎀" },
  { label: "Graduations", emoji: "🎓" },
  { label: "Special Occasions", emoji: "✨" },
];

const INCLUDED = [
  "Free delivery & pickup within our service area",
  "Professional setup and breakdown",
  "Clean, sanitised, and inspected equipment",
  "Flexible rental durations",
  "Custom packages for large events",
  "Same-day support available",
];

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <div className="relative min-h-[420px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop"
          alt="Event setup"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/30" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-300 bg-yellow-500/20 border border-yellow-400/30 px-4 py-1.5 rounded-full mb-4">
            What We Offer
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">Our Services</h1>
          <p className="text-lg text-white/75 max-w-xl">
            Premium rentals delivered, set up, and packed away — so you focus on the moments that matter.
          </p>
        </div>
      </div>

      {/* Service cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  to={`/service/${service.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <ImageWithFallback
                      src={service.cardImage}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-3 left-3 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      {service.pricing.split(" ").slice(0, 3).join(" ")}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-yellow-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1">{service.description}</p>
                    <ul className="mt-3 mb-4 space-y-1">
                      {service.details.slice(0, 2).map((d) => (
                        <li key={d} className="flex items-center gap-2 text-xs text-gray-400">
                          <CheckCircle className="w-3.5 h-3.5 text-yellow-500 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-1 text-yellow-600 text-sm font-semibold">
                      View details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's always included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-100 px-4 py-1.5 rounded-full mb-5">
                Always Included
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Every rental comes with our full service promise</h2>
              <ul className="space-y-4">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-yellow-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-square">
              <img
                src="https://images.unsplash.com/photo-1736155983506-c6e9da195f43?q=80&w=2069&auto=format&fit=crop"
                alt="Event setup"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events we serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-100 px-4 py-1.5 rounded-full mb-4">
              Every Occasion
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Events We Love to Serve</h2>
            <p className="text-gray-500 max-w-xl mx-auto">No event is too big or too small — we've got you covered for every celebration.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {EVENT_TYPES.map(({ label, emoji }) => (
              <div key={label} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="text-3xl mb-3">{emoji}</div>
                <p className="font-semibold text-gray-800 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-gray-900 rounded-3xl px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Need something custom?</h2>
            <p className="text-gray-400 max-w-lg">We create tailored packages for any event size or style. Get in touch and we'll build the perfect rental plan for you.</p>
          </div>
          <button
            onClick={() => navigate("/contact")}
            className="shrink-0 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-yellow-500/20 whitespace-nowrap text-base"
          >
            Get a Free Quote
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
