import React from "react";
import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useSeo } from "../hooks/useSeo";

export function Portfolio() {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Website Portfolio - SKYTrend Media",
    "description": "View our website case studies and digital marketing success stories.",
    "url": "https://skytrendmedia.com/portfolio"
  });

  useSeo({
    title: "Website Portfolio & Digital Growth Case Studies",
    description: "Explore SKYTrend Media's business website projects, web design portfolio, and client success stories. We build websites that convert.",
    canonicalUrl: "https://skytrendmedia.com/portfolio",
    keywords: "Website Portfolio, Web Design Portfolio, Business Website Projects, Client Success Stories, Website Case Studies, Web Developer Portfolio",
    jsonLd
  });

  const projects = [
    {
      title: "Bookit Jhansi",
      category: "E-Commerce",
      image: "/bookit-jhansi.png",
      url: "https://bookitjhansi.com",
      description: "A complete multi-vendor e-commerce platform built for a local marketplace, featuring real-time inventory management and secure payment gateways.",
      tech: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"]
    },
    {
      title: "RK Properties",
      category: "Real Estate",
      image: "/rk-properties.png",
      url: "#",
      description: "A premium real estate portal designed to showcase high-end properties with virtual tours, advanced search filtering, and agent dashboards.",
      tech: ["React", "Firebase", "Tailwind CSS", "Mapbox"]
    },
    {
      title: "Buildkhand",
      category: "Construction & B2B",
      image: "/buildkhand-1.png",
      url: "#",
      description: "A robust corporate website for a leading construction firm, highlighting their portfolio, services, and providing an investor portal.",
      tech: ["React", "TypeScript", "Framer Motion", "Supabase"]
    },
    {
      title: "The Abhaya Legal Initiative",
      category: "Legal Services",
      image: "/the-abhaya-legal-initiative.png.png",
      url: "https://theabhayalegal.com",
      description: "A professional, accessible website for a legal initiative offering resources, consultation bookings, and secure client communication.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"]
    },
    {
      title: "Tiwari Luxe",
      category: "Luxury Retail",
      image: "/tiwari-luxe.png",
      url: "#",
      description: "An elegant online storefront for a luxury brand, emphasizing high-quality imagery, smooth animations, and a seamless checkout experience.",
      tech: ["Shopify", "React", "GSAP", "Tailwind CSS"]
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#050505]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Hero Section */}
        <div className="mb-16 mt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Website <span className="text-blue-500">Portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed"
          >
            Browse our business website projects and client success stories. Discover how we've helped businesses in Jhansi and globally transform their digital presence.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-zinc-900/50 rounded-3xl overflow-hidden border border-white/5 flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-800">
                <img 
                  src={project.image} 
                  alt={project.title + " Website Project"} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.url !== "#" ? project.url : "#"} 
                    target={project.url !== "#" ? "_blank" : "_self"}
                    rel={project.url !== "#" ? "noopener noreferrer" : ""}
                    className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{project.category}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">{project.title}</h2>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-medium bg-black/50 text-zinc-300 px-3 py-1.5 rounded-md border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
                
                <a 
                  href="https://wa.me/917376558291"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center text-white text-sm font-medium group/link mt-auto"
                >
                  Request Similar Project <ArrowRight size={16} className="ml-2 text-blue-500 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-blue-900/20 border border-blue-500/20 rounded-3xl p-10 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Have a project in mind?</h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">Let's collaborate to build something exceptional for your brand.</p>
          <Link to="/contact">
            <button className="h-12 px-8 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors inline-flex items-center">
              Let's Talk <ArrowRight size={16} className="ml-2" />
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
