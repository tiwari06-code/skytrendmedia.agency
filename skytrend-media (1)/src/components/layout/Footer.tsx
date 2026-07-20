import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#050505] text-[#FAFAFA] border-t border-white/5 pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Left: Brand */}
          <div className="md:col-span-12 lg:col-span-5">
            <Link to="/" className="flex flex-col mb-4 group inline-flex">
              <img src="/logo.png.png" alt="SKYTrend Media Logo" className="h-20 w-auto object-contain mb-3" loading="lazy" />
              <span className="text-xl font-bold tracking-tight group-hover:text-blue-400 transition-colors">SKYTrend Media</span>
              <span className="text-xs font-medium text-blue-500 uppercase tracking-widest mt-1">Your Digital Growth Partner</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mt-4">
              Helping businesses grow through premium websites, branding, digital marketing, AI automation, and custom software solutions.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="md:col-span-6 lg:col-span-3 lg:col-start-7">
            <h3 className="text-sm font-semibold mb-6 text-white tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact */}
          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="text-sm font-semibold mb-6 text-white tracking-wider uppercase">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-zinc-400">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-blue-500" />
                <span className="text-sm leading-relaxed">Jhansi, Uttar Pradesh, India</span>
              </div>
              <a href="tel:+917376558291" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group">
                <Phone className="w-5 h-5 shrink-0 text-blue-500 group-hover:text-blue-400 transition-colors" />
                <span className="text-sm">+91 73765 58291</span>
              </a>
              <a href="mailto:skytrendmedia.agency@gmail.com" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group">
                <Mail className="w-5 h-5 shrink-0 text-blue-500 group-hover:text-blue-400 transition-colors" />
                <span className="text-sm">skytrendmedia.agency@gmail.com</span>
              </a>
              <a href="https://wa.me/917376558291" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-[#25D366] transition-colors group">
                <div className="w-5 h-5 shrink-0 text-[#25D366] group-hover:text-[#20bd5a] transition-colors flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} SKYTrend Media. All Rights Reserved.</p>
          <p>Designed & Developed by SKYTrend Media</p>
        </div>
      </div>
    </footer>
  );
}
