import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { services } from "../data/services";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  serviceType: string;
  details: string;
};

const EMPTY: FormData = {
  firstName: "", lastName: "", email: "", phone: "",
  eventDate: "", eventType: "", serviceType: "", details: "",
};

const CONTACT_CARDS = [
  { icon: Phone, label: "Call Us", value: "(555) 123-4567", href: "tel:+15551234567" },
  { icon: Mail, label: "Email Us", value: "info@munastarsrentals.com", href: "mailto:info@munastarsrentals.com" },
  { icon: MapPin, label: "Service Area", value: "Greater Metro Area", href: undefined },
];

const HOURS = [
  { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
  { day: "Saturday", time: "10:00 AM – 4:00 PM" },
  { day: "Sunday", time: "10:00 AM – 2:00 PM" },
];

const FAQS = [
  { q: "How far in advance should I book?", a: "We recommend booking at least 2–4 weeks in advance, especially for peak seasons. However, we do accommodate last-minute requests when availability allows." },
  { q: "Do you deliver and set up?", a: "Yes — delivery, setup, and pickup are all part of our service. We handle everything so you can focus on your event." },
  { q: "Can I customise a rental package?", a: "Absolutely. We love building custom packages. Just tell us about your event and we'll put together the perfect solution." },
];

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [sending, setSending] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.firstName || !form.lastName) { toast.error("Please enter your full name."); return; }
    if (!/.+@.+\..+/.test(form.email)) { toast.error("Please enter a valid email address."); return; }
    if (!form.phone) { toast.error("Please enter your phone number."); return; }

    setSending(true);
    toast.loading("Sending your request…", { id: "quote" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
      if (!serviceId || !templateId || !publicKey) throw new Error("Email service not configured.");

      await emailjs.send(serviceId, templateId, {
        first_name: form.firstName, last_name: form.lastName,
        email: form.email, phone: form.phone,
        event_date: form.eventDate, event_type: form.eventType,
        service_type: form.serviceType, details: form.details,
      }, { publicKey });

      toast.success("Thanks! We'll be in touch within 24 hours.", { id: "quote" });
      setForm(EMPTY);
    } catch {
      toast.error("Something went wrong. Please try again or call us directly.", { id: "quote" });
    } finally {
      setSending(false);
    }
  }

  const inputCls = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition";
  const labelCls = "block text-sm font-medium text-gray-700 mb-1.5";

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <div className="relative min-h-[380px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1600&auto=format&fit=crop"
          alt="Contact Munastars"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/30" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-300 bg-yellow-500/20 border border-yellow-400/30 px-4 py-1.5 rounded-full mb-4">
            Let's Talk
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">Get In Touch</h1>
          <p className="text-lg text-white/75 max-w-xl">
            Tell us about your event and we'll build the perfect rental package — free quote within 24 hours.
          </p>
        </div>
      </div>

      {/* Contact cards */}
      <div className="bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CONTACT_CARDS.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-black/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-black" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-black/60">{label}</p>
                {href ? (
                  <a href={href} className="font-semibold text-black hover:underline">{value}</a>
                ) : (
                  <p className="font-semibold text-black">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form + sidebar */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-white border border-gray-100 rounded-3xl shadow-sm p-8 md:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Request a Free Quote</h2>
                <p className="text-gray-500 text-sm mb-8">Fill in the form and we'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>First Name</label>
                      <input className={inputCls} placeholder="Your first name" value={form.firstName} onChange={(e) => update("firstName", e.target.value)} required />
                    </div>
                    <div>
                      <label className={labelCls}>Last Name</label>
                      <input className={inputCls} placeholder="Your last name" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Email Address</label>
                      <input type="email" className={inputCls} placeholder="you@example.com" value={form.email} onChange={(e) => update("email", e.target.value)} required />
                    </div>
                    <div>
                      <label className={labelCls}>Phone Number</label>
                      <input type="tel" className={inputCls} placeholder="(555) 123-4567" value={form.phone} onChange={(e) => update("phone", e.target.value)} required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Event Date</label>
                      <input type="date" className={inputCls} value={form.eventDate} onChange={(e) => update("eventDate", e.target.value)} />
                    </div>
                    <div>
                      <label className={labelCls}>Event Type</label>
                      <input className={inputCls} placeholder="Wedding, Birthday, Corporate…" value={form.eventType} onChange={(e) => update("eventType", e.target.value)} />
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>Service Needed</label>
                    <select className={inputCls} value={form.serviceType} onChange={(e) => update("serviceType", e.target.value)}>
                      <option value="">Select a service</option>
                      {services.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
                      <option value="Multiple Services">Multiple Services</option>
                      <option value="Custom Package">Custom Package</option>
                      <option value="Not Sure">Not Sure Yet</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelCls}>Tell us about your event</label>
                    <textarea
                      rows={5}
                      className={inputCls}
                      placeholder="Number of guests, items needed, special requirements…"
                      value={form.details}
                      onChange={(e) => update("details", e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:opacity-60 text-black font-bold py-4 rounded-full text-base transition-all hover:scale-[1.02] shadow-lg shadow-yellow-500/20"
                  >
                    {sending ? "Sending…" : "Get My Free Quote"}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Business hours */}
              <div className="bg-gray-950 text-white rounded-3xl p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h3 className="font-bold text-lg">Business Hours</h3>
                </div>
                <ul className="space-y-3">
                  {HOURS.map(({ day, time }) => (
                    <li key={day} className="flex justify-between text-sm">
                      <span className="text-gray-400">{day}</span>
                      <span className="text-white font-medium">{time}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-xs text-gray-400 mb-3">Need urgent help outside hours?</p>
                  <a
                    href="tel:+15551234567"
                    className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-full text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                </div>
              </div>

              {/* What to expect */}
              <div className="bg-yellow-50 border border-yellow-100 rounded-3xl p-7">
                <h3 className="font-bold text-gray-900 mb-4">What happens next?</h3>
                <ul className="space-y-4">
                  {[
                    "We review your request within 24 hours",
                    "We send a personalised quote",
                    "You confirm and we handle the rest",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="w-6 h-6 rounded-full bg-yellow-500 text-black font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust signals */}
              <div className="bg-white border border-gray-100 rounded-3xl p-7 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Why book with us?</h3>
                <ul className="space-y-3">
                  {["Licensed & fully insured", "500+ events delivered", "5★ average rating", "Free delivery & setup"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-100 px-4 py-1.5 rounded-full mb-4">FAQ</span>
            <h2 className="text-3xl font-bold text-gray-900">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map(({ q, a }, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-7 py-5 flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-gray-900">{q}</span>
                  <span className={`text-yellow-500 text-xl font-bold transition-transform shrink-0 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-7 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
