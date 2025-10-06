import React from "react";
import { motion } from "framer-motion";
import { useReveal } from "../../hooks/useReveal";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const galleryItems = [
  {
    title: "Ceramic Rimmed Charger Plates",
    description:
      "Add a touch of elegance to every seat with gold-accented chargers.",
    image:
      "https://plus.unsplash.com/premium_photo-1681400129221-0f64ad756481?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2hhcmdlciUyMFBsYXRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Luxury Cutlery Sets",
    description:
      "Sleek silverware and golden flatware to elevate your table setting.",
    image:
      "https://images.unsplash.com/photo-1557962004-0c6421596a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fEx1eHVyeSUyMEN1dGxlcnklMjBTZXRzfGVufDB8fDB8fHww",
  },
  {
    title: "Crystal Glassware",
    description:
      "Refined wine and water glasses for weddings and fine dining events.",
    image:
      "https://plus.unsplash.com/premium_photo-1661342507074-1199f0eb4a2f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3J5c3RhbCUyMEdsYXNzd2FyZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Bohemian Table Settings",
    description:
      "Earth-toned plates and textured elements perfect for outdoor events.",
    image:
      "https://media.istockphoto.com/id/2226427573/photo/sunny-outdoor-dining-table-with-elegant-setup.webp?a=1&b=1&s=612x612&w=0&k=20&c=TQW2cRAr1lKcoSwaoGyBz4EfbgMViMaeNMYoOgA6-_8=",
  },
  {
    title: "Classic White Chargers",
    description:
      "Minimalistic elegance — ideal for corporate and formal banquets.",
    image:
      "https://plus.unsplash.com/premium_photo-1672208149342-a5ca6b6e7a4c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2xhc3NpYyUyMFdoaXRlJTIwQ2hhcmdlciUyMHBsYXRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Vintage Silverware",
    description: "Add character to your tables with antique-styled utensils.",
    image:
      "https://images.unsplash.com/photo-1731345356052-fa162523666d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmludGFnZSUyMFNpbHZlcndhcmV8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Rustic Charger Plates",
    description:
      "Wooden or stone-inspired chargers to complement earthy themes.",
    image:
      "https://images.unsplash.com/photo-1758810744738-6eebece715a9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UnVzdGljJTIwQ2hhcmdlciUyMFBsYXRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Black & Gold Tableware",
    description: "For a bold and luxurious look that stands out.",
    image:
      "https://plus.unsplash.com/premium_photo-1674197236182-44d387884bcd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fEJsYWNrJTIwJTI2JTIwR29sZCUyMFRhYmxld2FyZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Fine Dining Table Setup",
    description:
      "Every detail matters — from folded napkins to layered chargers.",
    image:
      "https://plus.unsplash.com/premium_photo-1673214881759-4bd60b76acae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmluZSUyMERpbmluZyUyMFRhYmxlJTIwU2V0dXB8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Elegant Napkin Styling",
    description: "Add sophistication with custom napkin folds and holders.",
    image:
      "https://plus.unsplash.com/premium_photo-1681554601391-9e3320064ebe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fEVsZWdhbnQlMjBOYXBraW4lMjBTdHlsaW5nfGVufDB8fDB8fHww",
  },
  {
    title: "Textured Table Linens",
    description: "Set the tone with unique textures and luxurious fabrics.",
    image:
      "https://plus.unsplash.com/premium_photo-1664392063355-ed8c17a999ed?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fFRleHR1cmVkJTIwVGFibGUlMjBMaW5lbnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Themed Table Settings",
    description: "Whether rustic, glam, or modern — your table, your style.",
    image:
      "https://plus.unsplash.com/premium_photo-1677159521274-8197a5007bf2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VGhlbWVkJTIwVGFibGUlMjBTZXR0aW5nc3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function Chargerplates() {
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
          Charger Plates & Tableware
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
            Set the tone for an unforgettable dining experience with Munstars’
            curated selection of charger plates, fine cutlery, crystal-clear
            glassware, and elegant linens. Our tableware is thoughtfully chosen
            to elevate any tablescape — from intimate soirées to lavish
            banquets.
          </p>
          <p className="text-gray-600">
            Each piece is immaculately maintained, sanitized, and styled with
            precision. Our team ensures every place setting is a visual
            statement, striking the perfect balance between function and flair.
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
              <div className="w-full h-[250px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-t-xl object-center"
                />
              </div>

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
            Style Every Seat with Sophistication
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Discover how the right tableware can transform your event. Connect
            with Munstars to browse our premium rental collection and craft a
            table setting that leaves a lasting impression.
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
