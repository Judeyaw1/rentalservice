import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Truck, Clock, Headphones, Package } from "lucide-react";
import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { services } from "../data/services";

/* ── helpers ─────────────────────────────────────────────── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

/* ── data ────────────────────────────────────────────────── */

const STATS = [
  { value: "500+", label: "Events Hosted" },
  { value: "5+",   label: "Years in Business" },
  { value: "5★",   label: "Average Rating" },
  { value: "24hr", label: "Quote Response" },
];

const STEPS = [
  {
    step: "01",
    title: "Browse & Choose",
    body: "Explore our range of premium rentals — chairs, tables, tableware, florals, and more.",
  },
  {
    step: "02",
    title: "Get a Free Quote",
    body: "Tell us about your event and we'll build a tailored package with transparent pricing.",
  },
  {
    step: "03",
    title: "We Handle the Rest",
    body: "We deliver, set up, and pack down everything — so you just show up and celebrate.",
  },
];

const FEATURES = [
  { icon: Truck,      title: "Delivery & Setup",    body: "Professional delivery, setup and pickup at every event." },
  { icon: Clock,      title: "Always On Time",       body: "We know timing is everything — your rentals are ready when you need them." },
  { icon: CheckCircle,title: "Premium Quality",      body: "Every item is cleaned, inspected and maintained to the highest standard." },
  { icon: Headphones, title: "Dedicated Support",    body: "Our team is with you from the first call to the final pickup." },
];

const TESTIMONIALS = [
  {
    name: "Sarah & James",
    event: "Wedding",
    rating: 5,
    quote: "Munastars transformed our venue beyond what we imagined. The gold chiavari chairs and floral centrepieces were absolutely stunning. Every single detail was perfect.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&auto=format&fit=crop&q=80",
  },
  {
    name: "Amara Osei",
    event: "Birthday Party",
    rating: 5,
    quote: "I was blown away by how smooth the whole process was. They delivered, set everything up beautifully, and came back to pack it all away. I didn't have to lift a finger!",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&auto=format&fit=crop&q=80",
  },
  {
    name: "TechVision Corp",
    event: "Corporate Dinner",
    rating: 5,
    quote: "We've used Munastars for three corporate events now. Consistently professional, excellent quality, and always on time. They're our go-to rental partner.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&auto=format&fit=crop&q=80",
  },
];

const EVENT_TYPES = [
  { label: "Weddings",              img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop" },
  { label: "Birthday Parties",      img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop" },
  { label: "Corporate Events",      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop" },
  { label: "Community Gatherings",  img: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?q=80&w=600&auto=format&fit=crop" },
];

/* ── page ────────────────────────────────────────────────── */

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      {/* ── Stats bar ─────────────────────────────────────── */}
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

      {/* ── Services preview ──────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-100 px-4 py-1.5 rounded-full mb-4">
                What We Offer
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Services</h2>
            </div>
            <Link
              to="/services"
              className="flex items-center gap-2 text-yellow-600 font-semibold hover:gap-3 transition-all text-sm shrink-0"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div key={service.id} {...fadeUp(i * 0.07)}>
                <Link
                  to={`/service/${service.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <ImageWithFallback
                      src={service.cardImage}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-gray-900 mb-1.5 group-hover:text-yellow-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 flex-1 leading-relaxed">{service.description}</p>
                    <div className="flex items-center gap-1 mt-4 text-yellow-600 text-sm font-semibold">
                      View details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────── */}
      <section className="py-24 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 px-4 py-1.5 rounded-full mb-4">
              Simple Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-yellow-500/30" />

            {STEPS.map(({ step, title, body }, i) => (
              <motion.div key={step} {...fadeUp(i * 0.12)} className="relative text-center">
                <div className="w-20 h-20 rounded-full bg-yellow-500 text-black font-bold text-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-500/30">
                  {step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">{body}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-14">
            <button
              onClick={() => navigate("/contact")}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-yellow-500/30 text-base"
            >
              Start Planning Your Event
            </button>
          </div>
        </div>
      </section>

      {/* ── Events we serve ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-100 px-4 py-1.5 rounded-full mb-4">
              Every Occasion
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Events We Specialise In</h2>
            <p className="text-gray-500 max-w-xl mx-auto">From intimate gatherings to large-scale celebrations — we have everything you need.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EVENT_TYPES.map(({ label, img }, i) => (
              <motion.div key={label} {...fadeUp(i * 0.08)}>
                <Link
                  to="/services"
                  className="group relative block rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <img src={img} alt={label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white font-bold text-lg">{label}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Munastars ─────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div className="relative order-2 lg:order-1" {...fadeUp(0)}>
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1644174547761-de211415598e?w=800&auto=format&fit=crop&q=80"
                  alt="Munastars event"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-yellow-500 text-black px-6 py-4 rounded-2xl shadow-xl">
                <p className="text-2xl font-bold">500+</p>
                <p className="text-xs font-semibold mt-0.5">Events & counting</p>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-4 border-gray-200 -z-10" />
            </motion.div>

            {/* Text */}
            <motion.div className="order-1 lg:order-2" {...fadeUp(0.1)}>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-100 px-4 py-1.5 rounded-full mb-5">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                Stress-free rentals,<br />unforgettable events
              </h2>
              <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                Munastars Rentals takes care of everything — from delivery and setup to breakdown and pickup — so you can focus on what matters: making memories.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {FEATURES.map(({ icon: Icon, title, body }) => (
                  <div key={title} className="flex gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-yellow-100 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-0.5">{title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:scale-105"
              >
                Learn more about us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-100 px-4 py-1.5 rounded-full mb-4">
              Reviews
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">What Our Clients Say</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Trusted by hundreds of families, couples, and businesses across the metro area.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ name, event, rating, quote, avatar }, i) => (
              <motion.div
                key={name}
                {...fadeUp(i * 0.1)}
                className="bg-gray-50 rounded-3xl p-8 flex flex-col gap-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed flex-1">"{quote}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                  <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{name}</p>
                    <p className="text-xs text-yellow-600 font-medium">{event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <motion.div
          {...fadeUp()}
          className="max-w-7xl mx-auto bg-gray-900 rounded-3xl overflow-hidden relative"
        >
          <img
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1600&auto=format&fit=crop"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10 px-8 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Ready to plan your perfect event?</h2>
              <p className="text-gray-400 max-w-lg text-lg">Get a free personalised quote in under 24 hours. No commitment needed.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <button
                onClick={() => navigate("/contact")}
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-9 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-yellow-500/30 whitespace-nowrap"
              >
                Get a Free Quote
              </button>
              <Link
                to="/services"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-9 py-4 rounded-full transition-all whitespace-nowrap text-center"
              >
                Browse Services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
