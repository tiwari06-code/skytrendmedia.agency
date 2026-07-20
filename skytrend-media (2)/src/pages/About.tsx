import React from "react";
import { motion } from "motion/react";
import { Users, Award, Target, Zap } from "lucide-react";
import { useSeo } from "../hooks/useSeo";

export function About() {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "SKYTrend Media",
      "description": "SKYTrend Media is a professional digital agency based in Jhansi, India, specializing in website development, custom software, SEO, and AI automation.",
      "url": "https://skytrendmedia.com/about",
      "logo": "https://skytrendmedia.com/logo.png.png"
    }
  });

  useSeo({
    title: "About Our Digital Agency in Jhansi",
    description: "Learn about SKYTrend Media, a professional website development company and digital marketing agency based in Jhansi, Uttar Pradesh. We drive business growth.",
    canonicalUrl: "https://skytrendmedia.com/about",
    keywords: "Digital Agency, Professional Team, Business Growth, Technology, Innovation, Customer Success, Website Development Company Jhansi, SEO Company India",
    jsonLd
  });

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Hero Section */}
        <div className="mb-16 mt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Who <span className="text-blue-500">We Are</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed"
          >
            Based in Jhansi, Uttar Pradesh, SKYTrend Media is a forward-thinking digital agency committed to driving innovation and customer success. We engineer robust digital infrastructures that propel business growth across India.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-white/5"
          >
            <img 
              src="/skytrend_office.jpg" 
              alt="SKYTrend Media Office in Jhansi" 
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            <p className="text-zinc-400 leading-relaxed text-lg">
              To empower businesses with cutting-edge technology. Whether you need a simple business website or complex custom software, our professional team delivers scalable, high-performance solutions.
            </p>
            <h2 className="text-3xl font-bold text-white mt-10">Our Vision</h2>
            <p className="text-zinc-400 leading-relaxed text-lg">
              To become the most trusted digital agency in India, recognized for our expertise, authoritativeness, and trustworthiness in driving measurable digital transformations.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-zinc-400">The principles that guide our work and relationships.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Result-Oriented", desc: "We focus on metrics that matter: leads, sales, and growth." },
              { icon: Users, title: "Client Partnership", desc: "Your success is our success. We build long-term relationships." },
              { icon: Zap, title: "Innovation First", desc: "Leveraging the latest technologies, from React to AI automation." },
              { icon: Award, title: "Quality Craftsmanship", desc: "No templates. We deliver custom, high-quality code and design." }
            ].map((value, i) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5"
              >
                <div className="w-12 h-12 bg-blue-600/20 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-zinc-400 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
