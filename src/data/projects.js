import feedora from "../assets/projects/feedora.jpg";
import customerService from "../assets/projects/customer-service.jpg";
import physicalAi from "../assets/projects/physical-ai.jpg";
import embel from "../assets/projects/embel.jpg";
import bodrin from "../assets/projects/bodrin-coffee.jpg";

export const projects = [
  {
    mockTitle: "Feedora",
    mockSubtitle: "Social publishing and community",
    kicker: "Full-stack application",
    title: "Feedora, Social Media & Blog App",
    image: feedora,
    text: "A social publishing platform that brings posts, comments and user profiles together in one responsive experience.",
    chips: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    demo: "https://mern-stack-blog-social-media-app-fu.vercel.app/",
    code: { label: "GitHub repository", href: "https://github.com/ishk-maheen/mern-stack-blog-social-media-app" },
  },
  {
    mockTitle: "Customer Service",
    mockSubtitle: "Customer information and workflows",
    kicker: "Web application",
    title: "Customer Service Management System",
    image: customerService,
    text: "A web application project focused on organizing customer service information and related management workflows.",
    chips: ["Web UI", "Application workflow", "Responsive design"],
    demo: "https://customer-services-management-system-cyan.vercel.app/",
    code: { label: "GitHub repository", href: "https://github.com/ishk-maheen/customer-services-management-system" },
  },
  {
    mockTitle: "Physical AI & Robotics",
    mockSubtitle: "Learning platform · Humanoid robotics",
    kicker: "AI-focused learning project",
    title: "Physical AI & Humanoid Robotics",
    image: physicalAi,
    text: "An online learning experience focused on Physical AI and humanoid robotics, bringing technical learning content into an accessible web-based platform.",
    chips: ["AI-focused project", "Robotics", "Web platform"],
    demo: "https://physical-ai-and-humanoid-robotics.netlify.app/",
    code: { label: "GitHub repository", href: "https://github.com/ishk-maheen/physical-ai-and-humanoid-robotics" },
  },
  {
    mockTitle: "EMBEL",
    mockSubtitle: "Premium beauty and salon experience",
    kicker: "React frontend · Hackathon project",
    title: "EMBEL Premium Beauty & Salon",
    image: embel,
    text: "A premium-style salon website concept designed to present beauty services through an elegant, modern and responsive React interface.",
    chips: ["React", "Frontend UI", "Responsive design"],
    demo: "https://embel-premium-beauty-and-salon.vercel.app/",
    code: { label: "GitHub repository", href: "https://github.com/ishk-maheen/embel-premium-beauty-and-salon-website-react-hackathon" },
  },
  {
    mockTitle: "BODRIN Coffee",
    mockSubtitle: "Animated coffee brand website",
    kicker: "React · Animation-focused frontend",
    title: "GSAP Animated Coffee Website",
    image: bodrin,
    text: "A modern coffee brand website with smooth motion, floating visual elements and scroll-triggered sections for a more engaging browsing experience.",
    chips: ["React", "GSAP", "ScrollTrigger", "Tailwind CSS"],
    demo: "https://gsap-animated-coffee-website-using.vercel.app/",
    code: { label: "GitHub repository", href: "https://github.com/ishk-maheen/gsap-animated-coffee-website-using-react" },
  },
  {
    comingSoon: true,
    kicker: "Coming soon",
    title: "Something new is on the way",
    text: "A new project is being kept under wraps for now. Stay tuned, it will be revealed here soon.",
  },
];
