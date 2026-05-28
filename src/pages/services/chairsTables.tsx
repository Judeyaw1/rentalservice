import { ServicePageTemplate } from "../../components/ServicePageTemplate";

const galleryItems = [
  {
    title: "Rustic Wooden Chairs",
    description: "Perfect for barn weddings and vintage setups.",
    image: "https://images.unsplash.com/photo-1670213193254-cbbebedfe8b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Modern Lounge Seating",
    description: "Add a touch of elegance to your corporate or upscale event.",
    image: "https://plus.unsplash.com/premium_photo-1673626582397-0bcb43707f44?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Round Banquet Tables",
    description: "Ideal for receptions and formal dinners with large guest lists.",
    image: "https://images.unsplash.com/photo-1736155983506-c6e9da195f43?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Gold Chiavari Chairs",
    description: "Classic and elegant — a favorite for weddings and upscale events.",
    image: "https://images.unsplash.com/photo-1636089651106-a770b5bda303?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Rustic Farm Tables",
    description: "A natural wood look that's perfect for garden or countryside events.",
    image: "https://plus.unsplash.com/premium_photo-1661775249446-c56b418d009e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Wooden Cross-Back Chairs",
    description: "Classic farmhouse style chairs, often paired with rustic farm tables.",
    image: "https://plus.unsplash.com/premium_photo-1673569490592-fdbffc9b8f67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Clear Ghost Chairs",
    description: "Modern and versatile transparent chairs for a minimalist look.",
    image: "https://plus.unsplash.com/premium_photo-1661775105937-ee21a69e4180?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Trestle Table Setup",
    description: "Long tables set for a dinner, often used for family-style dining.",
    image: "https://images.unsplash.com/photo-1606311199519-bfe0dddc53dd?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Elegant White Dinnerware Setting",
    description: "A clean, formal place setting with napkins and wine glasses.",
    image: "https://images.unsplash.com/photo-1747115275583-f93db102e4e3?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Bohemian Picnic Setup",
    description: "Low tables and floor cushions for a casual, intimate gathering.",
    image: "https://images.unsplash.com/photo-1758810743122-39cea73cee34?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Basic Folding Chairs & Tables",
    description: "Standard utility rentals for large, informal gatherings.",
    image: "https://media.istockphoto.com/id/465876039/photo/round-table-and-folding-chairs-at-reception.webp?a=1&b=1&s=612x612&w=0&k=20&c=X_C-Tw8R6jbKODbZnsg1LaUPNyak__cJhNQIs5tV7QA=",
  },
  {
    title: "Modern Minimalist Chairs",
    description: "Sleek, black chairs suitable for contemporary and formal events.",
    image: "https://plus.unsplash.com/premium_photo-1664391631217-d53431f0effd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
];

export default function ChairsTables() {
  return (
    <ServicePageTemplate
      title="Chairs & Tables"
      badge="Seating & Furniture"
      heroImage="https://images.unsplash.com/photo-1746549855902-0028190ed877?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
      paragraphs={[
        "Create stylish, functional seating arrangements with Munastars' curated collection of chairs and tables. Whether you're hosting a romantic wedding, a high-end corporate function, or a cozy backyard celebration, we offer versatile rental options to suit every event style.",
        "From classic banquet chairs and modern acrylic styles to rustic farm tables and elegant dining setups, each piece is thoroughly cleaned, delivered on schedule, and professionally arranged to ensure a seamless experience from start to finish.",
      ]}
      galleryItems={galleryItems}
      ctaHeading="Style Your Space with Munastars Rentals"
      ctaBody="Ready to elevate your event with stylish and functional furniture? Contact Munastars today for a personalized quote and let us help bring your vision to life."
    />
  );
}
