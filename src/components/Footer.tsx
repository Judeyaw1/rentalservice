import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const QUICK_LINKS = [
  ["Services", "/services"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

const SERVICE_LINKS = [
  { label: "Chairs & Tables", path: "/chairsTables" },
  { label: "Chafing Dishes", path: "/chaffingdishes" },
  { label: "Charger Plates", path: "/chargerplates" },
  { label: "Flowers & Décor", path: "/flowerseventdecor" },
];

const EVENT_TYPES = [
  "Weddings",
  "Birthday Parties",
  "Corporate Events",
  "Community Gatherings",
  "Anniversary Celebrations",
  "Special Occasions",
];

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img src="/favicon.svg" alt="Munastars Rentals logo" className="h-10 w-auto" />
              <div>
                <p className="font-semibold text-white">Munastars Rentals</p>
                <p className="text-yellow-400 text-xs">Where Your Wishes Shine Bright</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Bringing celebrations to life with premium party essentials and elegant décor since 2020.
            </p>
            <div className="space-y-2.5 text-sm text-gray-400">
              <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-yellow-500" />(555) 123-4567
              </a>
              <a href="mailto:info@munastarsrentals.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-yellow-500" />info@munastarsrentals.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-yellow-500" />Greater Metro Area
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-5">Services</h4>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <span className="text-sm text-gray-400">Linens & Lighting</span>
              </li>
              <li>
                <span className="text-sm text-gray-400">Full Setup Service</span>
              </li>
            </ul>
          </div>

          {/* Event types */}
          <div>
            <h4 className="font-semibold text-white mb-5">Event Types</h4>
            <ul className="space-y-2.5">
              {EVENT_TYPES.map((type) => (
                <li key={type} className="text-sm text-gray-400">{type}</li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-2.5 mb-8">
              {QUICK_LINKS.map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-yellow-500 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-yellow-500 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2024 Munastars Rentals. All rights reserved.</p>
          <p>Licensed & Insured · Greater Metro Area</p>
        </div>
      </div>
    </footer>
  );
}
