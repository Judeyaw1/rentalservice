import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { services } from "../data/services";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const service = services.find(s => s.id === id);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
            <Link to="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>

        {/* Service Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{service.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{service.description}</p>
        </div>

        {/* Image Gallery Section */}
        <div className="mb-16">
          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {service.images.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <ImageWithFallback
                  src={image}
                  alt={`${service.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Service Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Service Information */}
          <div className="space-y-8">
            {/* Rating & Reviews */}
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-lg text-gray-600 font-medium">4.9 (127 reviews)</span>
            </div>

            {/* Pricing Card */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pricing</h3>
              <p className="text-3xl font-bold text-primary mb-3">{service.pricing}</p>
              <p className="text-gray-600">*Prices may vary based on quantity and event requirements</p>
            </div>

            {/* Features */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
              <ul className="space-y-4">
                {service.details.map((detail, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="flex-1 bg-primary hover:bg-primary/90 text-white py-4 px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
              >
                Get Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="flex-1 py-4 px-8 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all hover:shadow-lg hover:scale-105"
                onClick={() => {
                  window.open('tel:+15551234567', '_self');
                }}
              >
                Call Now
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h4>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Our team is here to help you create the perfect event. Contact us for custom quotes and personalized recommendations.
            </p>
            <div className="space-y-4">
              <a 
                href="tel:+15551234567" 
                className="flex items-center space-x-3 text-lg text-gray-700 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  📞
                </div>
                <span className="font-medium">(555) 123-4567</span>
              </a>
              <a 
                href="mailto:info@munastarsrentals.com" 
                className="flex items-center space-x-3 text-lg text-gray-700 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  ✉️
                </div>
                <span className="font-medium">info@munastarsrentals.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
