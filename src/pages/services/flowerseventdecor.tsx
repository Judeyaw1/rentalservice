import { ServicePageTemplate } from "../../components/ServicePageTemplate";

const galleryItems = [
  {
    title: "Elegant Floral Centerpieces",
    description: "Custom-designed floral arrangements to elevate your event tablescape.",
    image: "https://plus.unsplash.com/premium_photo-1661429475489-3f6932220757?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Modern Event Styling",
    description: "Contemporary floral and décor elements tailored for upscale celebrations.",
    image: "https://plus.unsplash.com/premium_photo-1661431061711-567fefccbe86?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Garden-Inspired Reception",
    description: "Lush greenery and soft blooms bring nature into your indoor or outdoor event.",
    image: "https://plus.unsplash.com/premium_photo-1661340744668-6d3e349a81cf?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Luxurious Table Styling",
    description: "Gold accents, fine linens, and elegant florals for a timeless dining experience.",
    image: "https://plus.unsplash.com/premium_photo-1661405720585-d2a451c77724?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Boho-Chic Ceremony Setup",
    description: "Earthy tones, pampas grass, and florals combine for a beautifully relaxed look.",
    image: "https://plus.unsplash.com/premium_photo-1661407361760-a6a23aab6625?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Whimsical Garden Décor",
    description: "Perfectly balanced florals and soft textures ideal for outdoor soirées.",
    image: "https://plus.unsplash.com/premium_photo-1661387659323-f70896b4ff59?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Romantic Aisle Florals",
    description: "Guide your guests down the aisle with floral accents full of charm.",
    image: "https://plus.unsplash.com/premium_photo-1661404080340-c0dc718f8fac?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Statement Backdrops",
    description: "Breathtaking flower walls and custom installations to frame your event.",
    image: "https://images.unsplash.com/photo-1758810744028-689670b0877c?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Colorful Wedding Details",
    description: "Bold floral palettes and textures that celebrate love in full bloom.",
    image: "https://plus.unsplash.com/premium_photo-1681841252669-bf18b3c1e50b?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Elegant Ceremony Arches",
    description: "Adorned with fresh blooms and drapery — ideal for indoor or outdoor vows.",
    image: "https://plus.unsplash.com/premium_photo-1661329854518-40c4e35d6e1e?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Luxury Floral Runners",
    description: "Long, low arrangements that bring opulence to your dining tables.",
    image: "https://plus.unsplash.com/premium_photo-1681841637169-a11659770dc6?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Chic Event Lounge Corners",
    description: "Floral accents and styled seating create perfect photo-ready moments.",
    image: "https://plus.unsplash.com/premium_photo-1661661288199-247620067a89?w=900&auto=format&fit=crop&q=60",
  },
];

export default function Flowerseventdecor() {
  return (
    <ServicePageTemplate
      title="Flowers & Event Décor"
      badge="Florals & Décor"
      heroImage="https://images.unsplash.com/photo-1646075514021-398d0925d4a9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
      paragraphs={[
        "At Munastars, we craft unforgettable moments through bespoke floral designs and curated event décor. Whether you're envisioning an enchanting wedding, a stylish celebration, or an intimate gathering, our team transforms spaces into breathtaking experiences.",
        "From elegant floral arches and lush centerpieces to immersive décor installations, every element is thoughtfully designed to reflect your unique style and story. We bring beauty, cohesion, and creativity to every event we touch.",
      ]}
      galleryItems={galleryItems}
      ctaHeading="Let's Create Something Beautiful Together"
      ctaBody="Ready to design a stunning event filled with florals, texture, and charm? Connect with Munastars for a personalized consultation and let's bring your dream event to life."
    />
  );
}
