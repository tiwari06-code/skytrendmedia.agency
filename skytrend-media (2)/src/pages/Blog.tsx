import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, User } from "lucide-react";
import { useSeo } from "../hooks/useSeo";
import { blogs } from "../data/blogs";

export function Blog() {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "SKYTrend Media Blog - Digital Marketing & Website Development Insights",
    "url": "https://skytrendmedia.com/blog",
    "description": "Read the latest thoughts, strategies, and resources from SKYTrend Media's team of digital experts.",
    "publisher": {
      "@type": "Organization",
      "name": "SKYTrend Media",
      "logo": "https://skytrendmedia.com/logo.png.png"
    }
  });

  useSeo({
    title: "Digital Marketing & Website Development Blog",
    description: "Read the latest thoughts, strategies, and resources from SKYTrend Media's team of digital experts in Jhansi. Learn SEO, AI automation, and web design.",
    canonicalUrl: "https://skytrendmedia.com/blog",
    keywords: "Website Development Blog, SEO Blog, Digital Marketing Strategy, AI Automation Insights, Business Growth, Technology Updates, Google Ads Tips, Local SEO Jhansi",
    jsonLd
  });

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 mt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Insights & <span className="text-blue-500">Perspectives</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400 leading-relaxed"
          >
            Discover the latest strategies, industry trends, and technical guides from our digital marketing and website development experts.
          </motion.p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["All", "Website Development", "SEO", "Digital Marketing", "Branding", "AI Automation", "Business Growth"].map((cat, i) => (
            <button 
              key={cat}
              className={"px-5 py-2.5 rounded-full text-sm font-medium transition-colors " + (i === 0 ? "bg-white text-black" : "bg-transparent text-zinc-400 hover:text-white border border-white/10 hover:bg-white/5")}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col h-full bg-zinc-900/30 rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors"
            >
              <Link to={"/blog/" + post.slug} className="flex flex-col h-full">
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-800">
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/80 backdrop-blur-md rounded-full text-xs font-medium text-blue-400 border border-blue-500/20">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4 font-medium">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </div>
                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                    <span>{post.readingTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="inline-flex items-center text-blue-500 font-medium text-sm group/link mt-auto">
                    Read Article <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-10 md:p-16 bg-gradient-to-br from-zinc-900 to-black rounded-3xl border border-white/5 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Subscribe to our newsletter</h2>
            <p className="text-zinc-400 mb-8">Get the latest digital growth strategies, web development trends, and SEO tips delivered straight to your inbox.</p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => {
              e.preventDefault();
              const emailInput = e.currentTarget.querySelector('input[type="email"]') as HTMLInputElement;
              const email = emailInput?.value || '';
              const text = `Hello SKYTrend Media,

I would like to subscribe to your newsletter.

Email:
${email}`;
              const encodedText = encodeURIComponent(text);
              window.open(`https://wa.me/917376558291?text=${encodedText}`, '_blank');
            }}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-5 py-3.5 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
              <button type="submit" className="px-6 py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
