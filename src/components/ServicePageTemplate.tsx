import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface GalleryItem {
  title: string;
  description: string;
  image: string;
}

interface ServicePageTemplateProps {
  title: string;
  badge: string;
  heroImage: string;
  paragraphs: string[];
  galleryItems: GalleryItem[];
  ctaHeading: string;
  ctaBody: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.07, ease: "easeOut" },
  }),
};

export function ServicePageTemplate({
  title,
  badge,
  heroImage,
  paragraphs,
  galleryItems,
  ctaHeading,
  ctaBody,
}: ServicePageTemplateProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      {/* Hero banner */}
      <div className="relative min-h-[380px] md:min-h-[460px] flex items-end overflow-hidden">
        <img
          src={heroImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/30" />

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-24 left-4 md:left-8 flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors backdrop-blur-sm bg-white/10 border border-white/20 px-3 py-1.5 rounded-full"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-300 bg-yellow-500/20 border border-yellow-400/30 px-4 py-1.5 rounded-full mb-4">
            {badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white">{title}</h1>
        </div>
      </div>

      {/* Description */}
      <motion.section
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-5">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-gray-600 text-lg leading-relaxed">{p}</p>
          ))}
        </div>
      </motion.section>

      {/* Gallery */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Collection</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-yellow-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          className="max-w-7xl mx-auto bg-gray-900 rounded-3xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{ctaHeading}</h2>
            <p className="text-gray-400 max-w-lg">{ctaBody}</p>
          </div>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
              setTimeout(() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }), 150);
            }}
            className="shrink-0 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3.5 rounded-full transition-all hover:scale-105 shadow-lg shadow-yellow-500/20 whitespace-nowrap"
          >
            Get a Free Quote
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
