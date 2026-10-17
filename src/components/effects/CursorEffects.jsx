import { useEffect, useRef } from "react";
import { canUsePointerEffects } from "../../hooks/useMotion";

const HOVER_SELECTOR = "a,button,.panel";

export default function CursorEffects() {
  const glow = useRef(null);
  const ring = useRef(null);
  const dot = useRef(null);

  useEffect(() => {
    if (!canUsePointerEffects()) return;
    document.body.classList.add("cursor-on");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let frame;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      glow.current.style.left = mx + "px";
      glow.current.style.top = my + "px";
      dot.current.style.left = mx + "px";
      dot.current.style.top = my + "px";
    };
    const animate = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.current.style.left = rx + "px";
      ring.current.style.top = ry + "px";
      frame = requestAnimationFrame(animate);
    };
    const onOver = (e) =>
      ring.current.classList.toggle("hovering", !!e.target.closest?.(HOVER_SELECTOR));
    const onLeaveWindow = () => ring.current.classList.remove("hovering");

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver);
    document.documentElement.addEventListener("pointerleave", onLeaveWindow);
    animate();

    return () => {
      document.body.classList.remove("cursor-on");
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("pointerleave", onLeaveWindow);
    };
  }, []);

  return (
    <>
      <div className="cursor-glow" ref={glow} aria-hidden="true" />
      <div className="cursor-ring" ref={ring} aria-hidden="true" />
      <div className="cursor-dot" ref={dot} aria-hidden="true" />
    </>
  );
}
