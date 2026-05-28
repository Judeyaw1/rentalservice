import React from "react";
import { Truck, Clock, Star, Headphones } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const STATS = [
  { value: "500+", label: "Events Hosted" },
  { value: "5+", label: "Years in Business" },
  { value: "5★", label: "Average Rating" },
  { value: "24hr", label: "Quote Response" },
];

const FEATURES = [
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "Professional delivery, setup, and pickup so you never have to lift a finger.",
  },
  {
    icon: Clock,
    title: "Always On Time",
    description: "We understand timing is everything — your rentals are ready when you need them.",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Well-maintained, high-quality items that make your event look and feel exceptional.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Our experienced team is with you from planning through breakdown.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-white">
      {/* Stats bar */}
      <div className="bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-bold text-black">{value}</p>
              <p className="text-sm font-medium text-black/70 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-100 px-4 py-1.5 rounded-full mb-5">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Why Choose<br />Munastars Rentals?
            </h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              With reliable delivery, setup, and pickup services, Munastars Rentals takes the stress out of event planning so you can focus on making memories.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              {FEATURES.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-yellow-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-square">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1644174547761-de211415598e?w=800&auto=format&fit=crop&q=80"
                alt="Outdoor party event celebration"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-gray-900 text-white px-6 py-4 rounded-2xl shadow-xl">
              <p className="text-2xl font-bold text-yellow-400">✨</p>
              <p className="text-sm font-semibold mt-1">Making memories</p>
              <p className="text-xs text-gray-400">since 2020</p>
            </div>
            {/* Decorative ring */}
            <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full border-4 border-yellow-400/30 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
