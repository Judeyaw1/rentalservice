import React from "react";
import { useNavigate } from "react-router-dom";
import { Truck, Clock, Star, Headphones, Heart, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const STATS = [
  { value: "500+", label: "Events Hosted" },
  { value: "5+", label: "Years in Business" },
  { value: "5★", label: "Average Rating" },
  { value: "24hr", label: "Quote Response" },
];

const VALUES = [
  {
    icon: Heart,
    title: "Passion for Events",
    description: "We genuinely love what we do. Every event is an opportunity to make someone's day truly memorable.",
  },
  {
    icon: Shield,
    title: "Trusted & Insured",
    description: "Fully licensed and insured — you can book with complete confidence and peace of mind.",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Every item is cleaned, inspected, and maintained to the highest standard before each rental.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "On-time delivery, professional setup, and hassle-free pickup — every single time.",
  },
  {
    icon: Clock,
    title: "Always On Time",
    description: "Timing is everything at events. We make sure every rental is ready exactly when you need it.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Our experienced team is with you from the first call through the final breakdown.",
  },
];

const TEAM = [
  {
    name: "Munastars Team",
    role: "Event Specialists",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
  },
];

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <div className="relative min-h-[420px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1644174547761-de211415598e?w=1600&auto=format&fit=crop&q=80"
          alt="About Munastars"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/30" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-300 bg-yellow-500/20 border border-yellow-400/30 px-4 py-1.5 rounded-full mb-4">
            Our Story
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">About Munastars</h1>
          <p className="text-lg text-white/75 max-w-xl">
            Making memories and bringing celebrations to life since 2020.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-bold text-black">{value}</p>
              <p className="text-sm font-medium text-black/70 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-100 px-4 py-1.5 rounded-full mb-5">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Where Your Wishes<br />Shine Bright
              </h2>
              <p className="text-lg text-gray-500 mb-5 leading-relaxed">
                Munastars Rentals was born out of a simple belief: every celebration deserves to look and feel extraordinary — without the stress. Since 2020, we've been partnering with families, couples, and businesses to bring their event visions to life.
              </p>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                From intimate birthday dinners to large-scale corporate gatherings, we provide premium furniture, tableware, florals, and catering equipment — all delivered, set up, and packed away by our professional team.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Weddings", "Birthdays", "Corporate Events", "Graduations", "Community Gatherings"].map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1644174547761-de211415598e?w=800&auto=format&fit=crop&q=80"
                  alt="Munastars event setup"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-gray-900 text-white px-6 py-4 rounded-2xl shadow-xl">
                <p className="text-2xl font-bold text-yellow-400">✨</p>
                <p className="text-sm font-semibold mt-1">Making memories</p>
                <p className="text-xs text-gray-400">since 2020</p>
              </div>
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full border-4 border-yellow-400/30 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-100 px-4 py-1.5 rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Our Commitment to You</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Everything we do is built around making your event a success — from the first call to the final pickup.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-gray-900 rounded-3xl px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Ready to plan your next event?</h2>
            <p className="text-gray-400 max-w-lg">Let us take the stress out of your event planning. Get a free personalised quote today.</p>
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
