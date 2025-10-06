import React from "react";
import { motion } from "framer-motion";
import { Footer } from "../../components/Footer";
import { useReveal } from "../../hooks/useReveal";
import { useNavigate } from "react-router-dom";

const galleryItems = [
  {
    title: "Elegant Floral Centerpieces",
    description:
      "Custom-designed floral arrangements to elevate your event tablescape.",
    image:
      "https://plus.unsplash.com/premium_photo-1661429475489-3f6932220757?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Modern Event Styling",
    description:
      "Contemporary floral and décor elements tailored for upscale celebrations.",
    image:
      "https://plus.unsplash.com/premium_photo-1661431061711-567fefccbe86?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Garden-Inspired Reception",
    description:
      "Lush greenery and soft blooms bring nature into your indoor or outdoor event.",
    image:
      "https://plus.unsplash.com/premium_photo-1661340744668-6d3e349a81cf?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Luxurious Table Styling",
    description:
      "Gold accents, fine linens, and elegant florals for a timeless dining experience.",
    image:
      "https://plus.unsplash.com/premium_photo-1661405720585-d2a451c77724?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Boho-Chic Ceremony Setup",
    description:
      "Earthy tones, pampas grass, and florals combine for a beautifully relaxed look.",
    image:
      "https://plus.unsplash.com/premium_photo-1661407361760-a6a23aab6625?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Whimsical Garden Décor",
    description:
      "Perfectly balanced florals and soft textures ideal for outdoor soirées.",
    image:
      "https://plus.unsplash.com/premium_photo-1661387659323-f70896b4ff59?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Romantic Aisle Florals",
    description:
      "Guide your guests down the aisle with floral accents full of charm and character.",
    image:
      "https://plus.unsplash.com/premium_photo-1661404080340-c0dc718f8fac?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Statement Backdrops",
    description:
      "Breathtaking flower walls and custom installations to frame your event beautifully.",
    image:
      "https://images.unsplash.com/photo-1758810744028-689670b0877c?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Colorful Wedding Details",
    description:
      "Bold floral palettes and textures that celebrate love in full bloom.",
    image:
      "https://plus.unsplash.com/premium_photo-1681841252669-bf18b3c1e50b?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Elegant Ceremony Arches",
    description:
      "Adorned with fresh blooms and drapery — ideal for indoor or outdoor vows.",
    image:
      "https://plus.unsplash.com/premium_photo-1661329854518-40c4e35d6e1e?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Luxury Floral Runners",
    description:
      "Long, low arrangements that bring opulence to your dining tables.",
    image:
      "https://plus.unsplash.com/premium_photo-1681841637169-a11659770dc6?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Chic Event Lounge Corners",
    description:
      "Floral accents and styled seating create perfect photo-ready moments.",
    image:
      "https://plus.unsplash.com/premium_photo-1661661288199-247620067a89?w=900&auto=format&fit=crop&q=60",
  },
];

export default function Flowerseventdecor() {
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
      <div className="justify-center flex pt-10 pb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Flowers & Event Décor
        </h2>
      </div>
      <section className="py-6 px-6 md:px-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600 mb-6">
            At Munstars, we craft unforgettable moments through bespoke floral
            designs and curated event décor. Whether you're envisioning an
            enchanting wedding, a stylish celebration, or an intimate gathering,
            our team transforms spaces into breathtaking experiences.
          </p>
          <p className="text-gray-600">
            From elegant floral arches and lush centerpieces to immersive décor
            installations, every element is thoughtfully designed to reflect
            your unique style and story. We bring beauty, cohesion, and
            creativity to every event we touch.
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
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
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
            Let’s Create Something Beautiful Together
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Ready to design a stunning event filled with florals, texture, and
            charm? Connect with Munstars for a personalized consultation, and
            let’s bring your dream event to life—one bloom at a time.
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
