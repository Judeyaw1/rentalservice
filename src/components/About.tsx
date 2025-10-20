import { Card, CardContent } from "./ui/card";
import { Truck, Clock, Star, Headphones } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "Professional delivery, setup, and pickup services for your convenience"
  },
  {
    icon: Clock,
    title: "Timely Service",
    description: "We understand the importance of timing and ensure everything is ready when you need it"
  },
  {
    icon: Star,
    title: "Quality Equipment",
    description: "High-quality, well-maintained rental items that make your event shine"
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Our experienced team is here to help you plan and execute the perfect event"
  }
];

export function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">Why Choose Munastars Rentals?</h2>
            <p className="text-xl text-gray-600 mb-8">
              With reliable delivery, setup, and pickup services, Munastars Rentals takes the stress out of event planning, 
              so you can focus on making memories.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-yellow-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1644174547761-de211415598e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
                alt="Outdoor party event celebration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl mb-1">✨</div>
                <p className="text-sm">Making memories</p>
                <p className="text-sm">since 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}