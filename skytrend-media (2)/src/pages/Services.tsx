import React from "react";
import { motion } from "motion/react";
import { Monitor, ShoppingCart, PenTool, Search, Bot, Settings, Wrench, Target, Share2, Megaphone, MonitorSmartphone, Terminal, Layout } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { useSeo } from "../hooks/useSeo";

export function Services() {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      { "@type": "Service", "position": 1, "name": "Website Development", "provider": { "@type": "Organization", "name": "SKYTrend Media" } },
      { "@type": "Service", "position": 2, "name": "Branding", "provider": { "@type": "Organization", "name": "SKYTrend Media" } },
      { "@type": "Service", "position": 3, "name": "SEO Optimization", "provider": { "@type": "Organization", "name": "SKYTrend Media" } },
      { "@type": "Service", "position": 4, "name": "AI Automation", "provider": { "@type": "Organization", "name": "SKYTrend Media" } }
    ]
  });

  useSeo({
    title: "Website Development & Digital Marketing Services",
    description: "SKYTrend Media offers Website Development, Web Design, SEO Services, AI Automation, Custom Software, and Meta Ads in Jhansi and India.",
    canonicalUrl: "https://skytrendmedia.com/services",
    keywords: "Website Development Services, Web Design Services, SEO Services, AI Automation Services, Custom Software Development, Meta Ads, Google Ads",
    jsonLd
  });

  const services = [
    {
      icon: Monitor,
      title: "Website Development Services",
      desc: "Custom React, Next.js, and business website development tailored to your brand.",
      features: ["Custom UI/UX", "SEO Optimized", "CMS Integration", "Fast Loading"]
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce Development",
      desc: "Scalable online stores engineered to maximize conversions and sales.",
      features: ["Payment Gateways", "Inventory Sync", "Mobile Ready", "Secure Checkout"]
    },
    {
      icon: PenTool,
      title: "Branding Services",
      desc: "Graphic design, logo design, and brand identity strategies that convert.",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Visual Identity"]
    },
    {
      icon: Search,
      title: "SEO Services",
      desc: "Local SEO, technical SEO, and organic strategies to boost your rankings.",
      features: ["Keyword Research", "On-Page SEO", "Link Building", "Local SEO (Jhansi)"]
    },
    {
      icon: Share2,
      title: "Social Media Management",
      desc: "Engaging content creation and community management.",
      features: ["Content Strategy", "Platform Management", "Community Engagement", "Analytics"]
    },
    {
      icon: Target,
      title: "Google Ads",
      desc: "Highly targeted search campaigns to drive qualified business leads.",
      features: ["Search Ads", "Display Ads", "Remarketing", "Conversion Tracking"]
    },
    {
      icon: Megaphone,
      title: "Meta Ads",
      desc: "Data-driven advertising strategies for Facebook and Instagram.",
      features: ["Audience Targeting", "Creative A/B Testing", "Lead Generation", "Pixel Tracking"]
    },
    {
      icon: Bot,
      title: "AI Automation Services",
      desc: "Implement artificial intelligence to streamline workflows.",
      features: ["Chatbots", "Workflow Automation", "Predictive Analytics", "Custom Integrations"]
    },
    {
      icon: MonitorSmartphone,
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile experiences for iOS and Android.",
      features: ["React Native", "Flutter", "iOS & Android", "API Integration"]
    },
    {
      icon: Terminal,
      title: "Custom Software Development",
      desc: "Bespoke digital solutions and web portals for complex operations.",
      features: ["SaaS Architecture", "Database Design", "Scalable Infrastructure", "Secure APIs"]
    },
    {
      icon: Wrench,
      title: "Website Maintenance",
      desc: "Ongoing support, security updates, and performance optimization.",
      features: ["Security Audits", "Content Updates", "Uptime Monitoring", "Performance Tuning"]
    },
    {
      icon: Layout,
      title: "Landing Page Development",
      desc: "Conversion-optimized landing pages that drive qualified leads.",
      features: ["A/B Testing", "Lead Capture", "Fast Load Times", "Copywriting"]
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 mt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Digital Services Designed for <span className="text-blue-500">Scale</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400 leading-relaxed"
          >
            We don't just build websites; we build digital growth engines. Our comprehensive suite of services covers everything you need to dominate your market in Jhansi, India, and beyond.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 items-stretch">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/50 rounded-2xl p-6 border border-white/5 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all duration-300 group flex flex-col h-full"
            >
              <div className="h-16 w-16 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              <h2 className="text-xl font-bold text-white mb-3 leading-snug">{service.title}</h2>
              <p className="text-base text-zinc-400 mb-6 leading-relaxed">
                {service.desc}
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-center text-[15px] text-zinc-300 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-2 flex flex-col gap-3">
                <a 
                  href="https://wa.me/917376558291"
                  target="_blank" rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="w-full bg-transparent border-white/10 text-white hover:bg-white/5 transition-colors">Inquire on WhatsApp</Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
