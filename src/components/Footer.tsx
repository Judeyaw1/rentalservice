import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white reveal-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/favicon.svg"
                alt="Munastars Rentals logo"
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-xl">Munastars Rentals</h3>
                <p className="text-yellow-300 text-sm">Where Your Wishes Shine Bright</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              We bring your celebrations to life with high-quality party essentials and elegant décor. 
              Making your events seamless and unforgettable since 2020.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@munastarsrentals.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Serving Greater Metro Area</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Chairs & Tables</li>
              <li>Chafing Dishes</li>
              <li>Charger Plates</li>
              <li>Flowers & Décor</li>
              <li>Linens & Lighting</li>
              <li>Full Setup Service</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg mb-4">Event Types</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Weddings</li>
              <li>Birthday Parties</li>
              <li>Corporate Events</li>
              <li>Community Gatherings</li>
              <li>Anniversary Celebrations</li>
              <li>Special Occasions</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Munastars Rentals. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
}