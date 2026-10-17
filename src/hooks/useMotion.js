export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const hasFinePointer = () =>
  typeof window !== "undefined" && window.matchMedia("(pointer:fine)").matches;

// Cursor effects and card tilt only run for mouse users who haven't asked for reduced motion.
export const canUsePointerEffects = () => hasFinePointer() && !prefersReducedMotion();
