const fs = require('fs');

const fileContent = fs.readFileSync('src/pages/BlogPost.tsx', 'utf-8');

const targetContent = `  useSeo({
    title: blog ? \`\${blog.title} | SKYTrend Media\` : "Blog",
    description: blog?.excerpt || "",
    // You could also pass structured data or social images here if useSeo supports it
  });

  if (!blog) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';`;

const replaceContent = `  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const jsonLd = blog ? JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "image": [blog.coverImage],
    "author": {
      "@type": "Organization",
      "name": blog.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "SKYTrend Media"
    }
  }) : "";

  useSeo({
    title: blog ? blog.title : "Blog",
    description: blog?.excerpt || "",
    canonicalUrl: currentUrl,
    ogImage: blog?.coverImage,
    ogType: "article",
    jsonLd: jsonLd
  });

  if (!blog) return null;`;

if (fileContent.includes(targetContent)) {
  fs.writeFileSync('src/pages/BlogPost.tsx', fileContent.replace(targetContent, replaceContent));
  console.log("Replaced");
} else {
  console.log("Target content not found");
}
