import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { services } from "../data/services";

export function Services() {
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
          {services.map((service, index) => (
            <Link key={index} to={`/service/${service.id}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={service.cardImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">Click to view details</span>
                    <span className="text-sm font-medium text-primary">→</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-white p-8 rounded-lg shadow-sm max-w-2xl">
            <h3 className="text-2xl mb-4">And Much More!</h3>
            <p className="text-gray-600 mb-6">
              From linens to lighting, we have everything you need for your perfect event.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Contact us to discuss your specific needs and get a custom quote.
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get Your Free Quote Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
