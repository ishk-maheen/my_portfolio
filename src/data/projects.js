import feedora from "../assets/projects/feedora.jpg";
import customerService from "../assets/projects/customer-service.jpg";
import physicalAi from "../assets/projects/physical-ai.jpg";
import embel from "../assets/projects/embel.jpg";
import bodrin from "../assets/projects/bodrin-coffee.jpg";

export const projects = [
  {
    mockTitle: "Feedora",
    mockSubtitle: "Social publishing and community",
    kicker: "Full stack application",
    title: "Feedora, Social Media & Blog App",
    image: feedora,
    text: "A social publishing platform with posts, comments and user profiles. Built with React, Node.js, Express and MongoDB, with Cloudinary for media.",
    chips: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    demo: "https://mern-stack-blog-social-media-app-fu.vercel.app/",
    code: { label: "GitHub", href: "https://github.com/ishk-maheen/mern-stack-blog-social-media-app" },
  },
  {
    mockTitle: "Customer Service",
    mockSubtitle: "Customer information and workflows",
    kicker: "Web application",
    title: "Customer Service Management System",
    image: customerService,
    text: "A responsive web application for organizing customer service information and the workflows around it.",
    chips: ["Web UI", "Application workflow", "Responsive design"],
    demo: "https://customer-services-management-system-cyan.vercel.app/",
    code: { label: "GitHub", href: "https://github.com/ishk-maheen/customer-services-management-system" },
  },
  {
    mockTitle: "Physical AI & Robotics",
    mockSubtitle: "Learning platform · Humanoid robotics",
    kicker: "AI learning project",
    title: "Physical AI & Humanoid Robotics",
    image: physicalAi,
    text: "A learning website about Physical AI and humanoid robotics that presents technical topics in an accessible way.",
    chips: ["AI project", "Robotics", "Web platform"],
    demo: "https://physical-ai-and-humanoid-robotics.netlify.app/",
    code: { label: "GitHub", href: "https://github.com/ishk-maheen/physical-ai-and-humanoid-robotics" },
  },
  {
    mockTitle: "EMBEL",
    mockSubtitle: "Premium beauty and salon experience",
    kicker: "React frontend, hackathon project",
    title: "EMBEL Premium Beauty & Salon",
    image: embel,
    text: "A salon website concept that presents beauty services in a clean, responsive React interface.",
    chips: ["React", "Frontend UI", "Responsive design"],
    demo: "https://embel-premium-beauty-and-salon.vercel.app/",
    code: { label: "GitHub", href: "https://github.com/ishk-maheen/embel-premium-beauty-and-salon-website-react-hackathon" },
  },
  {
    mockTitle: "BODRIN Coffee",
    mockSubtitle: "Animated coffee brand website",
    kicker: "React, animated frontend",
    title: "GSAP Animated Coffee Website",
    image: bodrin,
    text: "A coffee brand website with smooth motion, floating visuals and sections that animate as you scroll.",
    chips: ["React", "GSAP", "ScrollTrigger", "Tailwind CSS"],
    demo: "https://gsap-animated-coffee-website-using.vercel.app/",
    code: { label: "GitHub", href: "https://github.com/ishk-maheen/gsap-animated-coffee-website-using-react" },
  },
];
