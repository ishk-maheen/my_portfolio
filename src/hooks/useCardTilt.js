import { useEffect } from "react";
import { canUsePointerEffects } from "./useMotion";

export default function useCardTilt(ref) {
  useEffect(() => {
    const card = ref.current;
    if (!card || !canUsePointerEffects()) return;

    const onMove = (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(1000px) rotateX(${-y * 2.2}deg) rotateY(${x * 2.2}deg) translateY(-4px)`;
      card.style.boxShadow = `${-x * 10}px ${-y * 10}px 36px rgba(23,105,210,.15)`;
    };
    const onLeave = () => {
      card.style.transform = "";
      card.style.boxShadow = "";
    };

    card.addEventListener("pointermove", onMove);
    card.addEventListener("pointerleave", onLeave);
    return () => {
      card.removeEventListener("pointermove", onMove);
      card.removeEventListener("pointerleave", onLeave);
    };
  }, [ref]);
}
