import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, Building2, UtensilsCrossed, Hotel, GraduationCap, Briefcase, Plane, Building, Scale, Brush, Factory, LineChart, Shield, ShoppingBag, Rocket } from "lucide-react";
import { useSeo } from "../hooks/useSeo";

export function Industries() {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Industries We Serve - SKYTrend Media",
    "description": "Specialized digital solutions and website development tailored for healthcare, real estate, construction, ecommerce, and corporate businesses.",
    "url": "https://skytrendmedia.com/industries"
  });

  useSeo({
    title: "Industries We Serve | Website Development Company",
    description: "SKYTrend Media offers specialized website development, SEO, and software solutions tailored for healthcare, real estate, construction, ecommerce, and corporate businesses.",
    canonicalUrl: "https://skytrendmedia.com/industries",
    keywords: "Website Development for Healthcare, Real Estate Website Design, Ecommerce Website Developer, Corporate Website Design, Construction Web Design, Specialized Digital Agency",
    jsonLd
  });

  const industries = [
    { icon: Building, name: "Construction & Architecture", desc: "Project portfolios, contractor lead gen, and internal dashboards." },
    { icon: Brush, name: "Interior Designers", desc: "Stunning visual portfolios and lead generation funnels." },
    { icon: Building2, name: "Real Estate", desc: "Property listings, CRM integration, and virtual tours." },
    { icon: Scale, name: "Law Firms", desc: "Professional firm websites and secure client portals." },
    { icon: Stethoscope, name: "Doctors & Hospitals", desc: "HIPAA-compliant portals, booking systems, and telemedicine apps." },
    { icon: UtensilsCrossed, name: "Restaurants", desc: "Online ordering, reservations, and POS integrations." },
    { icon: Hotel, name: "Hotels & Hospitality", desc: "Direct booking engines, loyalty programs, and property management." },
    { icon: GraduationCap, name: "Schools & Colleges", desc: "LMS platforms, student portals, and virtual classrooms." },
    { icon: Plane, name: "Travel Agencies", desc: "Tour booking, itinerary planners, and travel marketplaces." },
    { icon: Factory, name: "Manufacturing", desc: "B2B portals, inventory management, and corporate sites." },
    { icon: LineChart, name: "Finance", desc: "Secure financial dashboards and fintech applications." },
    { icon: Shield, name: "Insurance", desc: "Quote generators and claims management platforms." },
    { icon: ShoppingBag, name: "Retail & Ecommerce", desc: "High-conversion ecommerce, inventory sync, and omni-channel." },
    { icon: Rocket, name: "Startups", desc: "Scalable MVPs and investor-ready digital platforms." },
    { icon: Briefcase, name: "Corporate Businesses", desc: "Enterprise architectures and secure internal tools." }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#050505]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 mt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Industries We <span className="text-blue-500">Transform</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400 leading-relaxed"
          >
            We deliver highly specialized website development, SEO, and custom software solutions designed to meet the unique challenges of your industry.
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-24">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 group flex flex-col items-center text-center h-full"
            >
              <div className="h-16 w-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <industry.icon size={28} strokeWidth={1.5} />
              </div>
              <h2 className="text-lg font-bold text-white mb-3">{industry.name}</h2>
              <p className="text-sm text-zinc-400 leading-relaxed flex-grow">{industry.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-zinc-900 to-black border border-white/5 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Don't see your industry?</h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">We engineer custom solutions from the ground up for any complex business requirement.</p>
          <Link to="/contact">
            <button className="h-12 px-8 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors inline-flex items-center">
              Discuss Your Project <ArrowRight size={16} className="ml-2" />
            </button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
