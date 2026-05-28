import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, CheckCircle, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "../data/services";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);

  const service = services.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
            <button
              onClick={() => navigate("/")}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  function goToContact() {
    navigate("/contact");
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero banner */}
      <div className="relative min-h-[400px] md:min-h-[500px] flex items-end overflow-hidden">
        <img
          src={service.images[activeImage] ?? service.cardImage}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/30" />

        <button
          onClick={() => navigate(-1)}
          className="absolute top-24 left-4 md:left-8 flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors backdrop-blur-sm bg-white/10 border border-white/20 px-3 py-1.5 rounded-full"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="flex items-center gap-2 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-white/70 text-sm ml-1">4.9 (127 reviews)</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">{service.title}</h1>
          <p className="text-lg text-white/80 max-w-2xl">{service.description}</p>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="bg-gray-950 px-4 py-4 overflow-x-auto">
        <div className="flex gap-3 max-w-7xl mx-auto">
          {service.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                i === activeImage ? "border-yellow-400 scale-105" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: details */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* What's included */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
              <ul className="space-y-4">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-yellow-600" />
                    </div>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image grid */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {service.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                      i === activeImage ? "border-yellow-400 shadow-lg" : "border-transparent hover:border-yellow-200"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${service.title} ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: pricing + contact */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {/* Pricing card */}
            <div className="bg-gray-950 text-white rounded-2xl p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-2">Pricing</p>
              <p className="text-2xl font-bold text-white mb-1">{service.pricing}</p>
              <p className="text-gray-400 text-sm">Prices may vary based on quantity and event requirements.</p>
              <div className="mt-6 flex flex-col gap-3">
                <button
                  onClick={goToContact}
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3.5 rounded-full transition-all hover:scale-105"
                >
                  Get a Free Quote
                </button>
                <a
                  href="tel:+15551234567"
                  className="w-full border border-white/20 text-white hover:bg-white/10 font-semibold py-3.5 rounded-full transition-colors text-center"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Contact card */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-1">Need help planning?</h3>
              <p className="text-gray-500 text-sm mb-5">Our team is happy to help with custom quotes and recommendations.</p>
              <div className="space-y-3">
                <a href="tel:+15551234567" className="flex items-center gap-3 text-gray-700 hover:text-yellow-600 transition-colors text-sm">
                  <div className="w-9 h-9 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-yellow-600" />
                  </div>
                  (555) 123-4567
                </a>
                <a href="mailto:info@munastarsrentals.com" className="flex items-center gap-3 text-gray-700 hover:text-yellow-600 transition-colors text-sm">
                  <div className="w-9 h-9 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-yellow-600" />
                  </div>
                  info@munastarsrentals.com
                </a>
              </div>
            </div>

            {/* Other services */}
            <div className="bg-white border rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Other Services</h3>
              <div className="space-y-2">
                {services.filter((s) => s.id !== service.id).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => navigate(`/service/${s.id}`)}
                    className="w-full text-left text-sm text-gray-600 hover:text-yellow-600 py-2 border-b border-gray-100 last:border-0 transition-colors"
                  >
                    {s.title} →
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA banner */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto bg-gray-900 rounded-3xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Ready to book {service.title}?</h2>
            <p className="text-gray-400">Get a personalised quote in under 2 hours during business hours.</p>
          </div>
          <button
            onClick={goToContact}
            className="shrink-0 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-yellow-500/20 whitespace-nowrap"
          >
            Get a Free Quote
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
