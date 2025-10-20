import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { services } from "../data/services";

type QuoteFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  serviceType: string;
  details: string;
};

export function Contact() {
  const [form, setForm] = useState<QuoteFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    serviceType: "",
    details: "",
  });

  function update<K extends keyof QuoteFormData>(key: K, value: QuoteFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function isValidEmail(value: string) {
    return /.+@.+\..+/.test(value);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.firstName || !form.lastName) {
      toast.error("Please enter your first and last name.");
      return;
    }
    if (!isValidEmail(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!form.phone) {
      toast.error("Please enter your phone number.");
      return;
    }

    toast.loading("Submitting your quote request...", { id: "quote" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Email service is not configured. Set VITE_EMAILJS_* env vars.");
      }

      const templateParams = {
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        phone: form.phone,
        event_date: form.eventDate,
        event_type: form.eventType,
        service_type: form.serviceType,
        details: form.details,
      };

      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
      });

      toast.success("Thanks! We'll be in touch shortly.", { id: "quote" });
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        eventDate: "",
        eventType: "",
        serviceType: "",
        details: "",
      });
    } catch (err) {
      toast.error("Something went wrong. Please try again.", { id: "quote" });
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Get Your Free Quote Today</h2>
          <p className="text-xl text-gray-600">
            Ready to make your event unforgettable? Contact us for a personalized quote.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl mb-6">Request a Quote</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2">First Name</label>
                      <Input
                        placeholder="Your first name"
                        value={form.firstName}
                        onChange={(e) => update("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Last Name</label>
                      <Input
                        placeholder="Your last name"
                        value={form.lastName}
                        onChange={(e) => update("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Phone</label>
                      <Input
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2">Event Date</label>
                      <Input
                        type="date"
                        value={form.eventDate}
                        onChange={(e) => update("eventDate", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Event Type</label>
                      <Input
                        placeholder="Wedding, Birthday, Corporate, etc."
                        value={form.eventType}
                        onChange={(e) => update("eventType", e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block mb-2">Service Type</label>
                    <select
                      value={form.serviceType}
                      onChange={(e) => update("serviceType", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                      <option value="Multiple Services">Multiple Services</option>
                      <option value="Custom Package">Custom Package</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block mb-2">Tell us about your event</label>
                    <Textarea
                      placeholder="Describe your event, number of guests, items needed, and any special requirements..."
                      rows={4}
                      value={form.details}
                      onChange={(e) => update("details", e.target.value)}
                    />
                  </div>
                  
                  <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black" type="submit">
                    Get My Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="text-sm">Phone</p>
                      <p>(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="text-sm">Email</p>
                      <p>info@munastarsrentals.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="text-sm">Service Area</p>
                      <p>Greater Metro Area</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="text-sm">Hours</p>
                      <p>Mon-Fri: 9AM-6PM</p>
                      <p>Sat-Sun: 10AM-4PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">✨</div>
                <h3 className="text-lg mb-2">Quick Response</h3>
                <p className="text-sm text-gray-600 mb-4">
                  We typically respond to quote requests within 2-4 hours during business hours.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-yellow-400 text-yellow-700 hover:bg-yellow-100"
                  onClick={() => {
                    toast.info("Calling Munastars Rentals...", { duration: 1500 });
                    window.location.href = "tel:+15551234567";
                  }}
                >
                  Call Now for Urgent Requests
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}