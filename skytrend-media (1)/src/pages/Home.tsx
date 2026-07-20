import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Code, ShoppingCart, PenTool, TrendingUp, Share2, MousePointerClick, Megaphone, Cpu, MonitorSmartphone, Terminal, Settings, Layout, CheckCircle, Search, Target, Rocket, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { useSeo } from "../hooks/useSeo";

export function Home() {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "SKYTrend Media",
        "image": "https://skytrendmedia.com/logo.png.png",
        "@id": "https://skytrendmedia.com/",
        "url": "https://skytrendmedia.com/",
        "telephone": "+91 73765 58291",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jhansi",
          "addressRegion": "Uttar Pradesh",
          "addressCountry": "India"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 25.4484,
          "longitude": 78.5685
        },
        "areaServed": ["Jhansi", "Lucknow", "Kanpur", "Delhi", "Noida", "Agra", "Gwalior", "Bhopal", "India"]
      },
      {
        "@type": "Organization",
        "name": "SKYTrend Media",
        "url": "https://skytrendmedia.com/",
        "logo": "https://skytrendmedia.com/logo.png.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91 73765 58291",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["en", "hi"]
        }
      },
      {
        "@type": "WebSite",
        "name": "SKYTrend Media",
        "url": "https://skytrendmedia.com/"
      }
    ]
  });

  useSeo({
    title: "Website Development & SEO Company in Jhansi, India",
    description: "SKYTrend Media is a premier digital marketing and website development agency in Jhansi, UP. We specialize in custom web design, SEO, and AI automation for business growth.",
    canonicalUrl: "https://skytrendmedia.com/",
    keywords: "Website Development Company, Web Design Agency, Digital Marketing Agency, SEO Company, Website Designer, Website Developer, AI Automation Services, Branding Agency, Custom Software Development, Mobile App Development, Google Ads Agency, Meta Ads Agency, Website Maintenance, Local SEO, Jhansi, Uttar Pradesh",
    jsonLd
  });

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#050505]">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
            
            {/* Left Content */}
            <div className="w-full lg:w-[45%] flex flex-col items-start text-left z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
              >
                <span className="text-sm font-medium text-zinc-300">🚀 Trusted Digital Growth Agency</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.15]"
              >
                Build Websites That <span className="text-blue-500">Grow Businesses.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed"
              >
                SKYTrend Media helps businesses establish a powerful online presence through premium website development, branding, SEO, AI automation, digital marketing, and custom software solutions.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto"
              >
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="h-12 px-8 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors w-full">
                    Get Free Consultation
                  </button>
                </Link>
                <Link to="/services" className="w-full sm:w-auto">
                  <button className="h-12 px-8 rounded-full bg-transparent border border-white/10 text-white font-medium hover:bg-white/5 transition-colors w-full">
                    Explore Services
                  </button>
                </Link>
              </motion.div>

              {/* Trust Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-zinc-400 font-medium"
              >
                {['Website Development', 'Branding', 'SEO', 'AI Automation', 'Mobile Apps'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-[55%] relative mt-8 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="relative rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group aspect-[4/3] sm:aspect-video lg:aspect-[4/3] xl:aspect-video"
              >
                {/* Premium dark overlay (40-50%) */}
                <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-20" />
                
                <img 
                  src="/skytrend_office.jpg" 
                  alt="SKYTrend Media Office" 
                  className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
                  loading="eager"
                />
              </motion.div>

              {/* Floating Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:-bottom-10 lg:-left-12 bg-[#050505]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl z-20 flex items-center justify-between gap-4 sm:gap-8 w-[95%] sm:w-auto overflow-hidden"
              >
                <div className="flex flex-col">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">Custom</div>
                  <div className="text-[10px] sm:text-xs text-zinc-400 font-medium uppercase tracking-wider">Websites &<br className="hidden sm:block" /> Social Media</div>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="flex flex-col">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">Dedicated</div>
                  <div className="text-[10px] sm:text-xs text-zinc-400 font-medium uppercase tracking-wider">Client<br className="hidden sm:block" /> Success</div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-white/10"></div>
                <div className="hidden sm:flex flex-col">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">End-to-End</div>
                  <div className="text-[10px] sm:text-xs text-zinc-400 font-medium uppercase tracking-wider">Digital<br className="hidden sm:block" /> Services</div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-white/10"></div>
                <div className="hidden sm:flex flex-col">
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-[10px] sm:text-xs text-zinc-400 font-medium uppercase tracking-wider">Customer<br className="hidden sm:block" /> Support</div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Our Core Digital Services</h2>
            <p className="text-zinc-400">As a leading web design agency, we deliver comprehensive solutions tailored to dominate your local and global markets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code, title: "Website Development", desc: "High-performance business website development tailored to your brand." },
              { icon: ShoppingCart, title: "Ecommerce Development", desc: "Scalable online stores engineered to maximize conversions." },
              { icon: PenTool, title: "Web Design & Branding", desc: "User-centric interfaces and professional branding agency services." },
              { icon: TrendingUp, title: "SEO Services", desc: "Local SEO and technical optimization to boost search rankings." },
              { icon: Share2, title: "Social Media Management", desc: "Engaging content creation to build your digital presence." },
              { icon: MousePointerClick, title: "Google Ads", desc: "Highly targeted search campaigns as your certified Google Ads agency." },
              { icon: Megaphone, title: "Meta Ads", desc: "Data-driven advertising strategies for Facebook and Instagram." },
              { icon: Cpu, title: "AI Automation", desc: "Implement artificial intelligence to streamline business workflows." },
              { icon: MonitorSmartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile experiences." },
              { icon: Terminal, title: "Custom Software", desc: "Bespoke software development for complex business operations." },
              { icon: Settings, title: "Website Maintenance", desc: "Ongoing support, security updates, and performance tuning." },
              { icon: Layout, title: "Landing Page Development", desc: "Conversion-optimized landing pages that drive qualified leads." }
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 hover:bg-zinc-900/80 hover:border-white/10 transition-all duration-300"
              >
                <div className="h-12 w-12 bg-blue-600/20 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="text-blue-500 font-medium text-sm flex items-center hover:text-blue-400">
                  Explore Service <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Why Choose SKYTrend Media?</h2>
            <p className="text-zinc-400">Based in Jhansi, we extend our expertise across Lucknow, Kanpur, Delhi, Noida, and all of India. We are more than website designers; we are your technology growth partners.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "Modern Technologies",
              "Custom Solutions",
              "Responsive Design",
              "SEO Optimized",
              "Secure Development",
              "Transparent Communication",
              "Business-Focused Strategy",
              "Ongoing Support",
              "AI-Powered Solutions",
              "Scalable Architecture"
            ].map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:bg-zinc-900/80 transition-all duration-300"
              >
                <CheckCircle className="text-blue-500 mb-4" size={28} />
                <h4 className="text-white font-medium text-sm">{feature}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Our Proven Process</h2>
            <p className="text-zinc-400">A structured, transparent approach to ensure successful project delivery from concept to launch.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[40%] left-[5%] w-[90%] h-px bg-white/10 -translate-y-1/2" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-12 gap-x-4">
              {[
                { icon: Search, title: "Discovery" },
                { icon: Target, title: "Strategy" },
                { icon: PenTool, title: "Design" },
                { icon: Code, title: "Development" },
                { icon: CheckCircle, title: "Testing" },
                { icon: Rocket, title: "Launch" },
                { icon: Headphones, title: "Support" }
              ].map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-blue-500 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-all duration-300 relative z-10 mb-4">
                    <step.icon size={24} />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shadow-lg border border-[#050505]">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-sm md:text-base">{step.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-900/20 to-black border-t border-white/5">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Scale Your Business?</h2>
          <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Let's discuss how SKYTrend Media can help you achieve your goals with a powerful new website or digital marketing strategy. Book a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto sm:max-w-none">
            <Link to="/contact">
              <button className="h-14 px-8 w-full sm:w-auto rounded-xl font-medium bg-white text-black hover:bg-zinc-200 transition-colors flex items-center justify-center group">
                Contact Us <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <a 
              href="https://wa.me/917376558291"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-8 rounded-xl text-base font-medium bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors shadow-[0_0_20px_rgba(37,211,102,0.15)]"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
