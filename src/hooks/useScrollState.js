import { useEffect, useState } from "react";

// Tracks back-to-top visibility and the section currently in view (scroll-spy).
export default function useScrollState() {
  const [showBackTop, setShowBackTop] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setShowBackTop(window.scrollY > 500);
      let current = "home";
      document.querySelectorAll("main section[id]").forEach((s) => {
        if (window.scrollY >= s.offsetTop - 150) current = s.id;
      });
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { showBackTop, activeId };
}
