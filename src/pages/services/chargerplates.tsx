import { ServicePageTemplate } from "../../components/ServicePageTemplate";

const galleryItems = [
  {
    title: "Ceramic Rimmed Charger Plates",
    description: "Add a touch of elegance to every seat with gold-accented chargers.",
    image: "https://plus.unsplash.com/premium_photo-1681400129221-0f64ad756481?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    title: "Luxury Cutlery Sets",
    description: "Sleek silverware and golden flatware to elevate your table setting.",
    image: "https://images.unsplash.com/photo-1557962004-0c6421596a00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    title: "Crystal Glassware",
    description: "Refined wine and water glasses for weddings and fine dining events.",
    image: "https://plus.unsplash.com/premium_photo-1661342507074-1199f0eb4a2f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    title: "Bohemian Table Settings",
    description: "Earth-toned plates and textured elements perfect for outdoor events.",
    image: "https://media.istockphoto.com/id/2226427573/photo/sunny-outdoor-dining-table-with-elegant-setup.webp?a=1&b=1&s=612x612&w=0&k=20&c=TQW2cRAr1lKcoSwaoGyBz4EfbgMViMaeNMYoOgA6-_8=",
  },
  {
    title: "Classic White Chargers",
    description: "Minimalistic elegance — ideal for corporate and formal banquets.",
    image: "https://plus.unsplash.com/premium_photo-1672208149342-a5ca6b6e7a4c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    title: "Vintage Silverware",
    description: "Add character to your tables with antique-styled utensils.",
    image: "https://images.unsplash.com/photo-1731345356052-fa162523666d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    title: "Rustic Charger Plates",
    description: "Wooden or stone-inspired chargers to complement earthy themes.",
    image: "https://images.unsplash.com/photo-1758810744738-6eebece715a9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    title: "Black & Gold Tableware",
    description: "For a bold and luxurious look that stands out.",
    image: "https://plus.unsplash.com/premium_photo-1674197236182-44d387884bcd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    title: "Fine Dining Table Setup",
    description: "Every detail matters — from folded napkins to layered chargers.",
    image: "https://plus.unsplash.com/premium_photo-1673214881759-4bd60b76acae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    title: "Elegant Napkin Styling",
    description: "Add sophistication with custom napkin folds and holders.",
    image: "https://plus.unsplash.com/premium_photo-1681554601391-9e3320064ebe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    title: "Textured Table Linens",
    description: "Set the tone with unique textures and luxurious fabrics.",
    image: "https://plus.unsplash.com/premium_photo-1664392063355-ed8c17a999ed?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    title: "Themed Table Settings",
    description: "Whether rustic, glam, or modern — your table, your style.",
    image: "https://plus.unsplash.com/premium_photo-1677159521274-8197a5007bf2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
];

export default function Chargerplates() {
  return (
    <ServicePageTemplate
      title="Charger Plates & Tableware"
      badge="Tableware & Dining"
      heroImage="https://plus.unsplash.com/premium_photo-1673972358996-3747c0ba31b6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
      paragraphs={[
        "Set the tone for an unforgettable dining experience with Munastars' curated selection of charger plates, fine cutlery, crystal-clear glassware, and elegant linens. Our tableware is thoughtfully chosen to elevate any tablescape — from intimate soirées to lavish banquets.",
        "Each piece is immaculately maintained, sanitized, and styled with precision. Our team ensures every place setting is a visual statement, striking the perfect balance between function and flair.",
      ]}
      galleryItems={galleryItems}
      ctaHeading="Style Every Seat with Sophistication"
      ctaBody="Discover how the right tableware can transform your event. Connect with Munastars to browse our premium rental collection and craft a table setting that leaves a lasting impression."
    />
  );
}
