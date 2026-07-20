export interface Project {
  id: string;
  title: string;
  category: string;
  industry: string;
  shortDesc: string;
  image: string;
  features: string[];
  overview: {
    businessGoal: string;
    targetAudience: string;
    designStyle: string;
    websitePurpose: string;
  };
  keyFeatures: string[];
  businessBenefits: string[];
  technology: string[];
}

export const projectsData: Project[] = [
  {
    id: "bookit-jhansi",
    title: "Bookit Jhansi",
    category: "Website Development",
    industry: "Local Services",
    shortDesc: "A local service booking platform connecting providers with customers in Jhansi.",
    image: "/bookit-jhansi.png", 
    features: ["Responsive", "SEO Ready", "WhatsApp Integration", "Fast Loading"],
    overview: {
      businessGoal: "Simplify the process of discovering and booking local services in Jhansi through a centralized digital platform.",
      targetAudience: "Local residents seeking home services and professionals looking to reach new customers.",
      designStyle: "Clean, accessible, and highly functional with a focus on mobile usability.",
      websitePurpose: "To serve as a reliable two-sided marketplace for local service bookings and inquiries.",
    },
    keyFeatures: ["Service Directory", "Responsive Design", "WhatsApp Integration", "Fast Loading", "Premium UI", "SEO Ready"],
    businessBenefits: ["Professional Online Presence", "Increased Trust", "Better User Experience", "Lead Generation", "Easy Navigation"],
    technology: ["React", "Node.js", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    id: "abhaya-legal",
    title: "The Abhaya Legal Initiative",
    category: "Law Firms",
    industry: "Law Firm / Legal Services",
    shortDesc: "A professional, trust-building digital presence for a modern legal initiative.",
    image: "/the-abhaya-legal-initiative.png.png",
    features: ["Responsive", "SEO Ready", "Modern UI", "Fast Loading"],
    overview: {
      businessGoal: "Establish digital authority, provide clear legal resources, and facilitate easy contact for prospective clients.",
      targetAudience: "Individuals and businesses seeking reliable legal counsel and resources.",
      designStyle: "Authoritative, professional, minimal, and highly trustworthy.",
      websitePurpose: "To act as a digital front-door for legal consultations and resource distribution.",
    },
    keyFeatures: ["Premium UI", "Secure Contact Form", "Responsive Design", "SEO Ready", "Fast Loading", "Easy Navigation"],
    businessBenefits: ["Professional Online Presence", "Increased Trust", "Lead Generation", "Mobile Friendly"],
    technology: ["Next.js", "TypeScript", "Tailwind CSS", "React", "HTML5", "CSS3"]
  },
  {
    id: "tiwari-luxe",
    title: "Tiwari Luxe Interiors",
    category: "Interior Designers",
    industry: "Interior Design",
    shortDesc: "A highly visual, premium portfolio website showcasing luxury interior design projects.",
    image: "/tiwari-luxe.png",
    features: ["Modern UI", "Responsive", "Fast Loading", "SEO Ready"],
    overview: {
      businessGoal: "Showcase the firm's luxury projects with high-resolution imagery and attract high-net-worth clients.",
      targetAudience: "High-net-worth individuals and premium commercial real estate developers.",
      designStyle: "Luxurious, image-forward, minimal, and elegant.",
      websitePurpose: "To function as a high-end digital showroom and consultation booking platform.",
    },
    keyFeatures: ["Gallery", "Premium UI", "Responsive Design", "WhatsApp Integration", "Fast Loading", "SEO Ready"],
    businessBenefits: ["Professional Online Presence", "Increased Trust", "Lead Generation", "Better User Experience", "Mobile Friendly"],
    technology: ["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"]
  },
  {
    id: "buildkhand",
    title: "Buildkhand",
    category: "Construction",
    industry: "Construction & Infrastructure",
    shortDesc: "A robust corporate website detailing construction capabilities, past projects, and services.",
    image: "/buildkhand-1.png",
    features: ["Responsive", "SEO Ready", "Modern UI", "Fast Loading"],
    overview: {
      businessGoal: "Highlight engineering capabilities, past infrastructure projects, and attract commercial contracts.",
      targetAudience: "Government bodies, corporate developers, and large-scale commercial investors.",
      designStyle: "Industrial, structured, robust, and professional.",
      websitePurpose: "To serve as a comprehensive corporate portfolio and capability statement.",
    },
    keyFeatures: ["Gallery", "Contact Form", "Responsive Design", "Premium UI", "SEO Ready", "Fast Loading"],
    businessBenefits: ["Professional Online Presence", "Increased Trust", "Lead Generation", "Easy Navigation"],
    technology: ["Next.js", "React", "Tailwind CSS", "Node.js", "HTML5"]
  },
  {
    id: "rk-properties",
    title: "RK Properties",
    category: "Real Estate",
    industry: "Real Estate",
    shortDesc: "A sleek real estate portal for listing properties and connecting with potential buyers.",
    image: "/rk-properties.png",
    features: ["Responsive", "SEO Ready", "WhatsApp Integration", "Modern UI"],
    overview: {
      businessGoal: "Create an accessible platform for buyers to browse available properties and seamlessly contact agents.",
      targetAudience: "Homebuyers, property investors, and renters in the local market.",
      designStyle: "Clean, card-based, functional, and highly visual.",
      websitePurpose: "To list available properties and drive immediate inquiries via WhatsApp or phone.",
    },
    keyFeatures: ["WhatsApp Integration", "Premium UI", "Responsive Design", "SEO Ready", "Fast Loading", "Gallery"],
    businessBenefits: ["Professional Online Presence", "Increased Trust", "Better User Experience", "Lead Generation", "Mobile Friendly"],
    technology: ["React", "Node.js", "Tailwind CSS", "HTML5", "CSS3"]
  }
];
