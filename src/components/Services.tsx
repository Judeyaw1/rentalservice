import React from "react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useNavigate } from "react-router-dom";

export function Services() {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-16 bg-gray-50 reveal-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Our Services Include</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From linens to lighting, we're your one-stop solution for event
            rentals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card
            onClick={() => navigate("/chairsTables")}
            className="group hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="aspect-square overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1755704282977-340323fa52df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMHRhYmxlJTIwY2hhaXJzJTIwZXZlbnQlMjBzZXR1cHxlbnwxfHx8fDE3NTkwODEwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Chairs & Tables"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-lg mb-3">Chairs & Tables</h3>
              <p className="text-gray-600">
                Comfortable and stylish options to fit any theme or guest list.
              </p>
            </CardContent>
          </Card>

          <Card
            onClick={() => navigate("/chaffingdishes")}
            className="group hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="aspect-square overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1618255361046-ef2b21557863?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcmluZyUyMGNoYWZpbmclMjBkaXNoZXMlMjBidWZmZXR8ZW58MXx8fHwxNzU5MDgxMDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Chafing Dishes & Catering Equipment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-lg mb-3">
                Chafing Dishes & Catering Equipment
              </h3>
              <p className="text-gray-600">
                Keep food warm, fresh, and beautifully presented.
              </p>
            </CardContent>
          </Card>

          <Card
            onClick={() => navigate("/chargerplates")}
            className="group hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="aspect-square overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758810746264-a7a551501e71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY2hhcmdlciUyMHBsYXRlcyUyMGZpbmUlMjBkaW5pbmd8ZW58MXx8fHwxNzU5MDgxMDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Charger Plates & Tableware"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-lg mb-3">Charger Plates & Tableware</h3>
              <p className="text-gray-600">
                Add a touch of elegance to your dining experience.
              </p>
            </CardContent>
          </Card>

          <Card
            onClick={() => navigate("/flowerseventdecor")}
            className="group hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="aspect-square overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1646075514021-398d0925d4a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZmxvd2VycyUyMGNlbnRlcnBpZWNlJTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NTkwODEwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Flowers & Event Décor"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-lg mb-3">Flowers & Event Décor</h3>
              <p className="text-gray-600">
                Stunning floral arrangements and décor accents that elevate your
                atmosphere.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl mb-3">And Much More!</h3>
            <p className="text-gray-600 mb-4">
              From linens to lighting, we have everything you need for your
              perfect event.
            </p>
            <p className="text-sm text-gray-500">
              Contact us to discuss your specific needs and get a custom quote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
