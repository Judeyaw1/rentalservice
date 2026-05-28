import { ServicePageTemplate } from "../../components/ServicePageTemplate";

const galleryItems = [
  {
    title: "Elegant Buffet Setup",
    description: "Classic chafing dishes perfect for upscale events and banquets.",
    image: "https://images.unsplash.com/photo-1511224931379-b4e4324ea7fc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    title: "Modern Serving Station",
    description: "Contemporary chafing dishes for stylish buffet presentations.",
    image: "https://images.unsplash.com/photo-1624420785869-e0da088ca5e9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    title: "Outdoor Buffet Display",
    description: "Stainless steel chafing dishes arranged on a wooden outdoor table.",
    image: "https://media.istockphoto.com/id/2233285011/photo/outdoor-buffet-setup-with-stainless-steel-chafing-dishes-and-stacked-plates-on-a-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=uhLruyJneNKiDOrRNZrHF7GvFiI5vodFIbgz7pjX-Fo=",
  },
  {
    title: "Event Catering Setup",
    description: "Line of silver chafing dishes ready for an outdoor event.",
    image: "https://media.istockphoto.com/id/512453261/photo/line-of-silver-food-trays-awaiting-an-outdoor-party.jpg?s=612x612&w=0&k=20&c=Lx4yAo20TRZ3H5odFIvy3AcRU74AnoCLzqzmRe4Gul4=",
  },
  {
    title: "Hotel Breakfast Buffet",
    description: "Full-service self-serve chafing dishes at a hotel breakfast station.",
    image: "https://media.istockphoto.com/id/888883122/photo/self-service-buffet-breakfast-in-hotel.jpg?s=612x612&w=0&k=20&c=pgOWQzbnOIDst6wMb1b4tHVkQIKkH8GwrXu6--CA1oU=",
  },
  {
    title: "Professional Warming Dishes",
    description: "Stainless steel chafing dishes in a row, ideal for catering services.",
    image: "https://media.istockphoto.com/id/464932285/photo/chafing-dishes-in-line.webp?a=1&b=1&s=612x612&w=0&k=20&c=PUyY6W69y-vMcT7Nk8_AnLWmNzk2MZE80wwK3MuV3so=",
  },
  {
    title: "Premium Buffet Service",
    description: "Luxurious chafing dishes in a premium buffet-style setup.",
    image: "https://plus.unsplash.com/premium_photo-1754269311276-165b4deaa6d6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    title: "Restaurant Service Station",
    description: "Elegant display of warming trays in a professional kitchen.",
    image: "https://images.unsplash.com/photo-1618255361046-ef2b21557863?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    title: "Rustic Event Catering",
    description: "Outdoor chafing dish setup in a countryside event setting.",
    image: "https://images.unsplash.com/photo-1544813545-cbe51737035b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    title: "Minimalist Food Service",
    description: "Sleek chafing dishes arranged in a modern buffet line.",
    image: "https://images.unsplash.com/photo-1758810743122-39cea73cee34?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Classic Banquet Setup",
    description: "Round banquet tables and folding chairs set for a reception.",
    image: "https://media.istockphoto.com/id/465876039/photo/round-table-and-folding-chairs-at-reception.webp?a=1&b=1&s=612x612&w=0&k=20&c=X_C-Tw8R6jbKODbZnsg1LaUPNyak__cJhNQIs5tV7QA=",
  },
  {
    title: "Event Seating & Service",
    description: "Event layout featuring tables, chairs, and buffet service.",
    image: "https://plus.unsplash.com/premium_photo-1664391631217-d53431f0effd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
];

export default function Chaffingdishes() {
  return (
    <ServicePageTemplate
      title="Chafing Dishes & Catering Equipment"
      badge="Catering & Food Service"
      heroImage="https://images.unsplash.com/photo-1624420785869-e0da088ca5e9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
      paragraphs={[
        "Keep your food presentation seamless and your service efficient with Munastars' premium catering equipment rentals. From sleek chafing dishes and beverage dispensers to food warmers, carving stations, and serving utensils — we provide the essential tools to keep your menu hot, fresh, and beautifully displayed.",
        "All equipment is thoroughly cleaned, maintained to the highest standards, and delivered with care. Whether you're hosting an elegant buffet, corporate luncheon, or private dinner party, we ensure your catering setup runs smoothly and looks professional.",
      ]}
      galleryItems={galleryItems}
      ctaHeading="Reliable Catering Equipment for Every Occasion"
      ctaBody="Contact Munastars today to reserve high-quality chafing dishes and catering equipment. Our team is ready to support your service needs with dependable rentals and exceptional care."
    />
  );
}
