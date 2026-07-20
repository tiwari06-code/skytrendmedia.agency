const fs = require('fs');

const fileContent = `import { useEffect } from 'react';

export interface SeoProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: string;
}

export function useSeo({ 
  title, 
  description, 
  canonicalUrl, 
  ogImage, 
  ogType = "website",
  jsonLd 
}: SeoProps) {
  useEffect(() => {
    const fullTitle = \`\${title} | SKYTrend Media\`;
    document.title = fullTitle;
    
    // Helper to set meta tags
    const setMetaTag = (selector: string, attribute: string, value: string, createAttr: string = 'name') => {
      let el = document.querySelector(\`meta[\${selector}]\`);
      if (el) {
        el.setAttribute(attribute, value);
      } else {
        el = document.createElement('meta');
        el.setAttribute(createAttr, selector.split('=')[1].replace(/"/g, ''));
        el.setAttribute(attribute, value);
        document.head.appendChild(el);
      }
    };

    // Update meta description
    setMetaTag('name="description"', 'content', description);
    
    // Open Graph
    setMetaTag('property="og:title"', 'content', fullTitle, 'property');
    setMetaTag('property="og:description"', 'content', description, 'property');
    setMetaTag('property="og:type"', 'content', ogType, 'property');
    if (ogImage) setMetaTag('property="og:image"', 'content', ogImage, 'property');
    
    // Twitter Card
    setMetaTag('name="twitter:card"', 'content', 'summary_large_image');
    setMetaTag('name="twitter:title"', 'content', fullTitle);
    setMetaTag('name="twitter:description"', 'content', description);
    if (ogImage) setMetaTag('name="twitter:image"', 'content', ogImage);

    // Canonical URL
    if (canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]');
      if (link) {
        link.setAttribute('href', canonicalUrl);
      } else {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', canonicalUrl);
        document.head.appendChild(link);
      }
      setMetaTag('property="og:url"', 'content', canonicalUrl, 'property');
    }

    // JSON-LD Schema
    if (jsonLd) {
      const scriptId = 'seo-jsonld';
      let script = document.getElementById(scriptId);
      if (script) {
        script.textContent = jsonLd;
      } else {
        script = document.createElement('script');
        script.setAttribute('id', scriptId);
        script.setAttribute('type', 'application/ld+json');
        script.textContent = jsonLd;
        document.head.appendChild(script);
      }
    }

    return () => {
      // Cleanup if needed (optional)
      // Usually, we just let it overwrite on next page view since it's a SPA
    };
  }, [title, description, canonicalUrl, ogImage, ogType, jsonLd]);
}
`;

fs.writeFileSync('src/hooks/useSeo.ts', fileContent);
