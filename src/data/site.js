import portrait from "../assets/about.jpeg";

export const site = {
  name: "Maheen Sheikh",
  role: "Freelance Web Developer",
  portrait,
  linkedin: "https://www.linkedin.com/in/ishkmaheen/",
  github: "https://github.com/ishk-maheen",
  facebook: "https://www.facebook.com/ishkmaheen24",
  // Inquiry inbox (owner-supplied); override with VITE_CONTACT_EMAIL in .env
  email: import.meta.env.VITE_CONTACT_EMAIL || "maheenrashidsheikh786@gmail.com",
};

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export const heroProof = ["Responsive web experiences", "Clear project communication", "Business-focused approach"];
