const fs = require('fs');

const fileContent = `import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Clock, User, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, Check } from "lucide-react";
import { getBlogBySlug, getRelatedBlogs, BlogPost as BlogPostType } from "../data/blogs";
import { useSeo } from "../hooks/useSeo";

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogPostType | null>(null);
  const [related, setRelated] = useState<BlogPostType[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (slug) {
      const foundBlog = getBlogBySlug(slug);
      if (foundBlog) {
        setBlog(foundBlog);
        setRelated(getRelatedBlogs(foundBlog));
        window.scrollTo(0, 0);
      } else {
        navigate("/blog");
      }
    }
  }, [slug, navigate]);

  useSeo({
    title: blog ? \`\${blog.title} | SKYTrend Media\` : "Blog",
    description: blog?.excerpt || "",
    // You could also pass structured data or social images here if useSeo supports it
  });

  if (!blog) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = {
    twitter: \`https://twitter.com/intent/tweet?text=\${encodeURIComponent(blog.title)}&url=\${encodeURIComponent(currentUrl)}\`,
    linkedin: \`https://www.linkedin.com/shareArticle?mini=true&url=\${encodeURIComponent(currentUrl)}&title=\${encodeURIComponent(blog.title)}\`,
    facebook: \`https://www.facebook.com/sharer/sharer.php?u=\${encodeURIComponent(currentUrl)}\`
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#050505]">
      {/* Article Header */}
      <div className="container mx-auto px-4 md:px-8 max-w-4xl pt-10">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-10 font-medium"
        >
          <ArrowLeft size={20} /> Back to Blog
        </Link>
        
        <div className="mb-8 flex items-center gap-4 text-sm font-medium">
          <span className="text-blue-400 uppercase tracking-wider">{blog.category}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
          <span className="text-zinc-400 flex items-center gap-1.5">
            <Clock size={16} /> {blog.readingTime}
          </span>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
        >
          {blog.title}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-between py-6 border-y border-white/10 mb-12"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 border border-blue-500/20">
              <User size={24} />
            </div>
            <div>
              <p className="text-white font-medium">{blog.author}</p>
              <p className="text-zinc-500 text-sm">Author</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
              <Twitter size={18} />
            </a>
            <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
              <Linkedin size={18} />
            </a>
            <button onClick={copyToClipboard} className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
              {copied ? <Check size={18} className="text-green-500" /> : <LinkIcon size={18} />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto px-4 md:px-8 max-w-5xl mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="aspect-[21/9] md:aspect-[2.5/1] overflow-hidden rounded-3xl border border-white/5"
        >
          <img 
            src={blog.coverImage} 
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert prose-lg prose-zinc max-w-none 
          prose-headings:text-white prose-headings:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-3xl
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-white prose-strong:font-semibold
          prose-ul:text-zinc-300 prose-ul:my-6
          prose-li:my-2
          prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-950/20 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-blue-100
          mb-20"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {blog.content}
          </ReactMarkdown>
        </motion.div>

        {/* Share Section Bottom */}
        <div className="py-8 border-y border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 mb-20">
          <div>
            <h4 className="text-white font-medium mb-1">Share this article</h4>
            <p className="text-zinc-500 text-sm">Help others discover this content.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2]/20 transition-colors font-medium text-sm">
              <Twitter size={16} /> Twitter
            </a>
            <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2]/20 transition-colors font-medium text-sm">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2]/20 transition-colors font-medium text-sm">
              <Facebook size={16} /> Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {related.length > 0 && (
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <h3 className="text-3xl font-bold text-white mb-10">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.slice(0, 3).map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <Link 
                  to={\`/blog/\${post.slug}\`}
                  className="group flex flex-col h-full bg-zinc-900/40 rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.coverImage} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-blue-400 text-xs font-medium uppercase tracking-wider mb-3">{post.category}</span>
                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-zinc-400 text-sm line-clamp-3 mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    <span className="text-white text-sm font-medium flex items-center group/btn mt-auto">
                      Read More <ArrowLeft size={16} className="ml-1 rotate-180 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
`;

fs.writeFileSync('src/pages/BlogPost.tsx', fileContent);
