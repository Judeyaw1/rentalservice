import React from "react";
import { motion } from "framer-motion";
import { useReveal } from "../../hooks/useReveal";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const galleryItems = [
  {
    title: "Rustic Wooden Chairs",
    description: "Perfect for barn weddings and vintage setups.",
    image:
      "https://images.unsplash.com/photo-1670213193254-cbbebedfe8b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Modern Lounge Seating",
    description: "Add a touch of elegance to your corporate or upscale event.",
    image:
      "https://plus.unsplash.com/premium_photo-1673626582397-0bcb43707f44?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Round Banquet Tables",
    description:
      "Ideal for receptions and formal dinners with large guest lists.",
    image:
      "https://images.unsplash.com/photo-1736155983506-c6e9da195f43?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Gold Chiavari Chairs",
    description:
      "Classic and elegant — a favorite for weddings and upscale events.",
    image:
      "https://images.unsplash.com/photo-1636089651106-a770b5bda303?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Rustic Farm Tables",
    description:
      "A natural wood look that’s perfect for garden or countryside events.",
    image:
      "https://plus.unsplash.com/premium_photo-1661775249446-c56b418d009e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Wooden Cross-Back Chairs",
    description:
      "Classic farmhouse style chairs, often paired with rustic farm tables.",
    image:
      "https://plus.unsplash.com/premium_photo-1673569490592-fdbffc9b8f67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Clear Ghost Chairs",
    description:
      "Modern and versatile transparent chairs for a minimalist look.",
    image:
      "https://plus.unsplash.com/premium_photo-1661775105937-ee21a69e4180?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Trestle Table Setup",
    description:
      "Long tables set for a dinner, often used for family-style dining.",
    image:
      "https://images.unsplash.com/photo-1606311199519-bfe0dddc53dd?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Elegant White Dinnerware Setting",
    description: "A clean, formal place setting with napkins and wine glasses.",
    image:
      "https://images.unsplash.com/photo-1747115275583-f93db102e4e3?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Bohemian Picnic Setup",
    description:
      "Low tables and floor cushions for a casual, intimate gathering.",
    image:
      "https://images.unsplash.com/photo-1758810743122-39cea73cee34?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Basic Folding Chairs and Tables",
    description:
      "Standard utility rentals for large, informal gatherings or behind-the-scenes use.",
    image:
      "https://media.istockphoto.com/id/465876039/photo/round-table-and-folding-chairs-at-reception.webp?a=1&b=1&s=612x612&w=0&k=20&c=X_C-Tw8R6jbKODbZnsg1LaUPNyak__cJhNQIs5tV7QA=",
  },
  {
    title: "Modern Minimalist Chairs",
    description:
      "Sleek, black chairs suitable for contemporary and formal events.",
    image:
      "https://plus.unsplash.com/premium_photo-1664391631217-d53431f0effd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbnQlMjBjaGFpcnMlMjBhbmQlMjB0YWJsZXN8ZW58MHx8MHx8fDA%3D",
  },
];

export default function ChairsTables() {
  useReveal();
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800">
      <div className="pt-8 pl-6 md:pl-16 max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-primary hover:text-primary-dark transition-colors font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Back to Services
        </button>
      </div>{" "}
      <div className="justify-center pt-10 flex">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Chairs & Tables by Munstars
        </h2>
      </div>
      <section className="py-12 px-6 md:px-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600 mb-6">
            Create stylish, functional seating arrangements with Munstars’
            curated collection of chairs and tables. Whether you're hosting a
            romantic wedding, a high-end corporate function, or a cozy backyard
            celebration, we offer versatile rental options to suit every event
            style.
          </p>
          <p className="text-gray-600">
            From classic banquet chairs and modern acrylic styles to rustic farm
            tables and elegant dining setups, each piece is thoroughly cleaned,
            delivered on schedule, and professionally arranged to ensure a
            seamless experience from start to finish.
          </p>
        </motion.div>
      </section>
      <section className="bg-gray-50 py-12 px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="rounded overflow-hidden hover:shadow-lg transition-shadow bg-white"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 rounded-t-xl object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Style Your Space with Munstars Rentals
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Ready to elevate your event with stylish and functional furniture?
            Contact Munstars today for a personalized quote and let us help
            bring your vision to life with premium chair and table rentals.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded shadow hover:bg-primary-dark transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
