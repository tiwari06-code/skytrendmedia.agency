import React from "react";
import { motion } from "motion/react";
import { Phone, MapPin, ArrowRight, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { useSeo } from "../hooks/useSeo";

type FormData = {
  name: string;
  business: string;
  phone: string;
  email: string;
  service: string;
  budget: string;
  message: string;
};

export function Contact() {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "SKYTrend Media",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 73765 58291",
        "contactType": "customer service",
        "email": "skytrendmedia.agency@gmail.com"
      }
    }
  });

  useSeo({
    title: "Contact SKYTrend Media | Book Free Consultation",
    description: "Get in touch with SKYTrend Media to discuss your website development, digital marketing, or custom software project. Book a free consultation today.",
    canonicalUrl: "https://skytrendmedia.com/contact",
    keywords: "Contact SKYTrend Media, Book Free Consultation, Website Development Consultation, Digital Marketing Consultation",
    jsonLd
  });

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const text = `Hello SKYTrend Media,\nI want to discuss my project.\nName: ${data.name}\nBusiness: ${data.business || 'N/A'}\nPhone: ${data.phone}\nEmail: ${data.email}\nService Required: ${data.service}\nBudget: ${data.budget}\nProject Details:\n${data.message}\nLooking forward to your response.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/917376558291`, '_blank');
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="mb-16 mt-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Let's <span className="text-blue-500">Connect</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Book a free consultation with our digital experts. We're ready to discuss your Website Development and Digital Marketing needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-500 flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Email Us</h3>
                    <a href="mailto:skytrendmedia.agency@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                      skytrendmedia.agency@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-500 flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Call Us</h3>
                    <a href="tel:+917376558291" className="text-zinc-400 hover:text-white transition-colors">
                      +91 73765 58291
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-500 flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Headquarters</h3>
                    <p className="text-zinc-400">
                      Jhansi, Uttar Pradesh<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-zinc-900/50 p-8 md:p-10 rounded-3xl border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-8">Send Us A Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Full Name *</label>
                    <input 
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your Name"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Business Name</label>
                    <input 
                      {...register("business")}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Phone Number *</label>
                    <input 
                      {...register("phone", { required: "Phone is required" })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Email Address *</label>
                    <input 
                      {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="your.email@domain.com"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Service Required *</label>
                  <select 
                    {...register("service", { required: "Please select a service" })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Ecommerce Development">Ecommerce Development</option>
                    <option value="Branding Services">Branding Services</option>
                    <option value="SEO Services">SEO Services</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Google Ads">Google Ads</option>
                    <option value="Meta Ads">Meta Ads</option>
                    <option value="AI Automation">AI Automation</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Website Maintenance">Website Maintenance</option>
                    <option value="Landing Page Development">Landing Page Development</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Estimated Budget (INR)</label>
                  <input 
                    {...register("budget")}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter your budget (e.g. ₹50,000)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Project Details *</label>
                  <textarea 
                    {...register("message", { required: "Please provide some project details" })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your goals, timeline, and any specific requirements..."
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button 
                  type="submit"
                  className="w-full h-14 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group"
                >
                  Send Message via WhatsApp
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
