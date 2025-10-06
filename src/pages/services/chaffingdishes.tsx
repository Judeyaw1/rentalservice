import React from "react";
import { motion } from "framer-motion";
import { useReveal } from "../../hooks/useReveal";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const galleryItems = [
  {
    title: "Elegant Buffet Setup",
    description:
      "Classic chafing dishes perfect for upscale events and banquets.",
    image:
      "https://images.unsplash.com/photo-1511224931379-b4e4324ea7fc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENoYWZpbmclMjBEaXNoZXMlMjAlMjYlMjBDYXRlcmluZyUyMEVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Modern Serving Station",
    description:
      "Contemporary chafing dishes for stylish buffet presentations.",
    image:
      "https://images.unsplash.com/photo-1624420785869-e0da088ca5e9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENoYWZpbmclMjBEaXNoZXMlMjAlMjYlMjBDYXRlcmluZyUyMEVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Outdoor Buffet Display",
    description:
      "Stainless steel chafing dishes arranged on a wooden outdoor table.",
    image:
      "https://media.istockphoto.com/id/2233285011/photo/outdoor-buffet-setup-with-stainless-steel-chafing-dishes-and-stacked-plates-on-a-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=uhLruyJneNKiDOrRNZrHF7GvFiI5vodFIbgz7pjX-Fo=",
  },
  {
    title: "Event Catering Setup",
    description: "Line of silver chafing dishes ready for an outdoor event.",
    image:
      "https://media.istockphoto.com/id/512453261/photo/line-of-silver-food-trays-awaiting-an-outdoor-party.jpg?s=612x612&w=0&k=20&c=Lx4yAo20TRZ3H5odFIvy3AcRU74AnoCLzqzmRe4Gul4=",
  },
  {
    title: "Hotel Breakfast Buffet",
    description:
      "Full-service self-serve chafing dishes at a hotel breakfast station.",
    image:
      "https://media.istockphoto.com/id/888883122/photo/self-service-buffet-breakfast-in-hotel.jpg?s=612x612&w=0&k=20&c=pgOWQzbnOIDst6wMb1b4tHVkQIKkH8GwrXu6--CA1oU=",
  },
  {
    title: "Professional Warming Dishes",
    description:
      "Stainless steel chafing dishes in a row, ideal for catering services.",
    image:
      "https://media.istockphoto.com/id/464932285/photo/chafing-dishes-in-line.webp?a=1&b=1&s=612x612&w=0&k=20&c=PUyY6W69y-vMcT7Nk8_AnLWmNzk2MZE80wwK3MuV3so=",
  },
  {
    title: "Premium Buffet Service",
    description: "Luxurious chafing dishes in a premium buffet-style setup.",
    image:
      "https://plus.unsplash.com/premium_photo-1661775105937-ee21a69e4180?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Restaurant Service Station",
    description: "Elegant display of warming trays in a professional kitchen.",
    image:
      "https://images.unsplash.com/photo-1606311199519-bfe0dddc53dd?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Rustic Event Catering",
    description: "Outdoor chafing dish setup in a countryside event setting.",
    image:
      "https://images.unsplash.com/photo-1747115275583-f93db102e4e3?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Minimalist Food Service",
    description: "Sleek chafing dishes arranged in a modern buffet line.",
    image:
      "https://images.unsplash.com/photo-1758810743122-39cea73cee34?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Classic Banquet Setup",
    description: "Round banquet tables and folding chairs set for a reception.",
    image:
      "https://media.istockphoto.com/id/465876039/photo/round-table-and-folding-chairs-at-reception.webp?a=1&b=1&s=612x612&w=0&k=20&c=X_C-Tw8R6jbKODbZnsg1LaUPNyak__cJhNQIs5tV7QA=",
  },
  {
    title: "Event Seating & Service",
    description: "Event layout featuring tables, chairs, and buffet service.",
    image:
      "https://plus.unsplash.com/premium_photo-1664391631217-d53431f0effd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbnQlMjBjaGFpcnMlMjBhbmQlMjB0YWJsZXN8ZW58MHx8MHx8fDA%3D",
  },
];

export default function Chaffingdishes() {
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
      <div className="pt-10 justify-center flex">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Chafing Dishes & Catering Equipment
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
            Keep your food presentation seamless and your service efficient with
            Munstars’ premium catering equipment rentals. From sleek chafing
            dishes and beverage dispensers to food warmers, carving stations,
            and serving utensils — we provide the essential tools to keep your
            menu hot, fresh, and beautifully displayed.
          </p>
          <p className="text-gray-600">
            All equipment is thoroughly cleaned, maintained to the highest
            standards, and delivered with care. Whether you're hosting an
            elegant buffet, corporate luncheon, or private dinner party, we
            ensure your catering setup runs smoothly and looks professional.
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
            Reliable Catering Equipment for Every Occasion
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Contact Munstars today to reserve high-quality chafing dishes and
            catering equipment for your event. Our team is ready to support your
            service needs with dependable rentals and exceptional care.
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
