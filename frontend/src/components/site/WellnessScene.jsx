import { useEffect, useState } from "react";
import { useMotionValueEvent, useReducedMotion } from "framer-motion";

const FRAMES = [
  "/images/massage-frame-1.webp",
  "/images/massage-frame-2.webp",
  "/images/massage-frame-3.webp",
];

const frameForProgress = (value) => {
  // One complete massage stroke while the hero leaves the viewport:
  // shoulders -> mid back -> lower position -> mid back -> shoulders.
  if (value < 0.12) return 0;
  if (value < 0.28) return 1;
  if (value < 0.46) return 2;
  if (value < 0.64) return 1;
  return 0;
};

export const WellnessScene = ({ progress }) => {
  const prefersReducedMotion = useReducedMotion();
  const [frame, setFrame] = useState(0);

  // Frames 2 and 3 are tiny optimized WebPs. Warm them into the browser cache
  // so changing frame never waits on the network while the user is scrolling.
  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const preload = () => {
      FRAMES.slice(1).forEach((src) => {
        const image = new Image();
        image.decoding = "async";
        image.src = src;
      });
    };

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(preload, { timeout: 800 });
      return () => window.cancelIdleCallback?.(id);
    }

    const id = window.setTimeout(preload, 120);
    return () => window.clearTimeout(id);
  }, []);

  useMotionValueEvent(progress, "change", (latest) => {
    if (prefersReducedMotion) return;
    const next = frameForProgress(latest);
    setFrame((current) => (current === next ? current : next));
  });

  return (
    <div
      role="img"
      aria-label="Masajista realizando un masaje relajante"
      className="relative w-full aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]"
    >
      <div className="absolute inset-[3%] rounded-[34px] bg-gradient-to-b from-white to-sand border border-line/70 shadow-[0_24px_56px_rgba(44,53,43,0.06)]" />

      <div className="absolute inset-[6%] overflow-hidden rounded-[28px] bg-cream">
        <img
          key={prefersReducedMotion ? FRAMES[0] : FRAMES[frame]}
          src={prefersReducedMotion ? FRAMES[0] : FRAMES[frame]}
          alt="Sesión de masaje relajante en Lluna Blanca, Blanes"
          width="320"
          height="400"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          draggable="false"
          className="absolute inset-0 w-full h-full object-cover object-center select-none"
        />
      </div>
    </div>
  );
};
