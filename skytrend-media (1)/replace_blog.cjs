const fs = require('fs');

const fileContent = `import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, User } from "lucide-react";
import { useSeo } from "../hooks/useSeo";
import { blogs } from "../data/blogs";

export function Blog() {
  useSeo({
    title: "Blog & Insights",
    description: "Read the latest thoughts, strategies, and resources from SKYTrend Media's team of digital experts."
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
            Thoughts, strategies, and resources from our team of digital experts.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          {blogs.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full flex"
            >
              <Link 
                to={\`/blog/\${post.slug}\`}
                className="group flex flex-col flex-grow bg-zinc-900/40 rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-medium text-zinc-500 mb-4">
                    <span className="text-blue-400 uppercase tracking-wider">{post.category}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-zinc-400 leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    <span className="flex items-center gap-2 text-sm text-zinc-300 font-medium">
                      <User size={16} className="text-zinc-500" /> {post.author}
                    </span>
                    <span className="text-white text-sm font-medium flex items-center group/btn">
                      Read Article <ArrowRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter / CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-900/20 to-zinc-900/50 border border-white/5 p-12 rounded-3xl text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">Subscribe to our newsletter</h3>
          <p className="text-zinc-400 mb-8 max-w-md mx-auto">Get the latest digital growth strategies delivered straight to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
              required
            />
            <button type="submit" className="px-6 py-3 bg-white text-black font-medium rounded-xl hover:bg-zinc-200 transition-colors">
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync('src/pages/Blog.tsx', fileContent);
