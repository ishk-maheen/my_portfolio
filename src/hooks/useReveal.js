import { useEffect } from "react";
import { prefersReducedMotion } from "./useMotion";

export default function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || prefersReducedMotion()) {
      items.forEach((item) => item.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}
