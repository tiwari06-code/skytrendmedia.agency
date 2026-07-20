import React from "react";
import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useSeo } from "../hooks/useSeo";

export function WebsiteCatalog() {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Website Design Catalog - SKYTrend Media",
    "description": "Browse our premium collection of pre-engineered, conversion-optimized website design frameworks ready for your business.",
    "url": "https://skytrendmedia.com/website-catalog"
  });

  useSeo({
    title: "Website Design Frameworks & Templates Catalog",
    description: "Browse our premium collection of pre-engineered, conversion-optimized website architectures and templates ready for customization.",
    canonicalUrl: "https://skytrendmedia.com/website-catalog",
    keywords: "Website Design Catalog, Web Templates, React Templates, Next.js Frameworks, Ecommerce Architecture, Custom Website Architectures",
    jsonLd
  });

  const categories = [
    { id: "all", name: "All Designs" },
    { id: "business", name: "Business" },
    { id: "restaurant", name: "Restaurant" },
    { id: "ecommerce", name: "E-Commerce" },
    { id: "portfolio", name: "Portfolio" },
    { id: "real-estate", name: "Real Estate" },
    { id: "healthcare", name: "Healthcare" }
  ];

  const catalogItems = [
    {
      title: "Corporate Framework",
      category: "business",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      features: ["CMS Integration", "Lead Forms", "SEO Optimized"],
      tech: ["Next.js", "Tailwind", "Framer Motion"]
    },
    {
      title: "Hospitality Framework",
      category: "restaurant",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
      features: ["Menu System", "Table Booking", "Review Display"],
      tech: ["React", "Node.js", "PostgreSQL"]
    },
    {
      title: "E-Commerce Architecture",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
      features: ["Shopping Cart", "Payment Gateway", "Inventory Sync"],
      tech: ["Shopify", "React", "Stripe"]
    },
    {
      title: "Creative Portfolio",
      category: "portfolio",
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800",
      features: ["Project Gallery", "Dark Mode", "Smooth Scroll"],
      tech: ["React", "GSAP", "Tailwind"]
    },
    {
      title: "Real Estate Portal",
      category: "real-estate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      features: ["Property Search", "Virtual Tours", "Agent Profiles"],
      tech: ["Next.js", "Mapbox", "Prisma"]
    },
    {
      title: "Healthcare System",
      category: "healthcare",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800",
      features: ["Appointment Booking", "Patient Portal", "HIPAA Compliant"],
      tech: ["React", "Express", "MongoDB"]
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Design <span className="text-blue-500">Frameworks</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400 max-w-2xl"
          >
            Explore our premium collection of scalable, industry-specific web architectures ready to be customized for your business.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat, i) => (
            <button 
              key={cat.id}
              className={"px-5 py-2.5 rounded-full text-sm font-medium transition-colors " + (i === 0 ? 'bg-white text-black' : 'bg-transparent text-zinc-400 hover:text-white border border-white/10 hover:bg-white/5')}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/50 rounded-3xl border border-white/5 overflow-hidden group hover:border-white/20 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-white mb-2">{item.title}</h2>
                
                <div className="mb-4">
                  <p className="text-sm text-zinc-400 mb-2 font-semibold uppercase tracking-wider">Core Features</p>
                  <ul className="space-y-1">
                    {item.features.map(f => (
                      <li key={f} className="text-sm text-zinc-300 flex items-center">
                        <Plus size={14} className="text-blue-500 mr-2 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6 flex-grow">
                  <p className="text-sm text-zinc-400 mb-2 font-semibold uppercase tracking-wider">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map(t => (
                      <span key={t} className="text-xs font-medium bg-black/50 text-zinc-300 px-2.5 py-1 rounded-md border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/5 mt-auto">
                  <a 
                    href="https://wa.me/917376558291"
                    target="_blank" rel="noopener noreferrer"
                    className="block w-full bg-white text-black hover:bg-zinc-200 text-center py-3 rounded-xl font-medium transition-colors"
                  >
                    Discuss Your Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
