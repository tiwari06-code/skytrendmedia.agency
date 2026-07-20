/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
import { Industries } from "./pages/Industries";
import { About } from "./pages/About";
import { WebsiteCatalog } from "./pages/WebsiteCatalog";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="industries" element={<Industries />} />
          <Route path="about" element={<About />} />
          <Route path="catalog" element={<WebsiteCatalog />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfService />} />
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center min-h-[70vh] bg-[#050505] text-white px-4">
              <div className="text-center max-w-md">
                <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-6">404</h1>
                <p className="text-xl text-zinc-400 mb-8">The page you are looking for doesn't exist or has been moved.</p>
                <a href="/" className="inline-flex items-center justify-center h-12 px-8 rounded-full font-semibold bg-white text-black hover:bg-zinc-200 transition-colors">Return to Home</a>
              </div>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
