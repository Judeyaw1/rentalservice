import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { services } from "../data/services";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-100 px-4 py-1.5 rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From linens to lighting — everything you need for a flawless event, delivered and set up by our team.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/service/${service.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <ImageWithFallback
                  src={service.cardImage}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-3 left-3 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.pricing.split(" ").slice(0, 3).join(" ")}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-yellow-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{service.description}</p>
                <div className="flex items-center gap-1 mt-4 text-yellow-600 text-sm font-semibold">
                  View details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-16 bg-gray-900 rounded-3xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Need something custom?</h3>
            <p className="text-gray-400">We offer tailored packages for any event size or theme.</p>
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="shrink-0 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-yellow-500/20"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
