import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

const floatTransition = (duration, delay = 0) => ({
  duration,
  delay,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
});

export const WellnessScene = ({ className = "" }) => {
  const rootRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 42, damping: 22, mass: 0.8 });
  const springY = useSpring(pointerY, { stiffness: 42, damping: 22, mass: 0.8 });

  const rotateY = useTransform(springX, [-1, 1], [-13, 13]);
  const rotateX = useTransform(springY, [-1, 1], [10, -10]);
  const shiftX = useTransform(springX, [-1, 1], [-10, 10]);
  const shiftY = useTransform(springY, [-1, 1], [-8, 8]);

  useEffect(() => {
    const onPointerMove = (event) => {
      const root = rootRef.current;
      if (!root) return;
      const rect = root.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      pointerX.set(Math.max(-1.25, Math.min(1.25, x)));
      pointerY.set(Math.max(-1.25, Math.min(1.25, y)));
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [pointerX, pointerY]);

  const float = (values, transition) =>
    prefersReducedMotion ? undefined : { animate: values, transition };

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className={`pointer-events-none select-none relative ${className}`}
      style={{ perspective: "1100px" }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          rotateX,
          rotateY,
          x: shiftX,
          y: shiftY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Main moon */}
        <div
          className="absolute left-[40%] top-[17%] w-[38%] aspect-square"
          style={{ transform: "translateZ(95px)", transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="w-full h-full rounded-full"
            style={{
              background:
                "radial-gradient(circle at 28% 22%, #ffffff 0%, #faf9f6 19%, #f3f2eb 48%, #d8dacd 74%, #9ca895 100%)",
              boxShadow:
                "inset -26px -22px 46px rgba(44,53,43,0.16), inset 14px 12px 24px rgba(255,255,255,0.82), 0 28px 70px rgba(44,53,43,0.16)",
            }}
            {...float(
              { y: [-8, 10], rotate: [-2, 3], scale: [0.99, 1.015] },
              floatTransition(5.8)
            )}
          />
        </div>

        {/* Orbital ring */}
        <div
          className="absolute left-[31%] top-[10%] w-[56%] aspect-square"
          style={{ transform: "translateZ(55px) rotateX(68deg) rotateZ(-23deg)" }}
        >
          <motion.div
            className="w-full h-full rounded-full border-[2px] border-sage/75 shadow-[0_0_30px_rgba(122,139,118,0.1)]"
            {...float({ rotate: [0, 12] }, floatTransition(8.5))}
          />
        </div>

        {/* Inner orbit */}
        <div
          className="absolute left-[34%] top-[13%] w-[50%] aspect-square"
          style={{ transform: "translateZ(35px) rotateX(72deg) rotateZ(18deg)" }}
        >
          <motion.div
            className="w-full h-full rounded-full border border-forest/15"
            {...float({ rotate: [0, -16] }, floatTransition(11))}
          />
        </div>

        {/* Warm stone */}
        <div
          className="absolute left-[16%] bottom-[16%] w-[24%] aspect-[1.45/1]"
          style={{ transform: "translateZ(125px) rotateZ(-12deg)" }}
        >
          <motion.div
            className="w-full h-full rounded-[48%_52%_45%_55%/58%_44%_56%_42%]"
            style={{
              background:
                "radial-gradient(circle at 32% 22%, #caa98f 0%, #a77d5e 35%, #8c6a4f 68%, #684c39 100%)",
              boxShadow:
                "inset -18px -14px 28px rgba(44,35,28,0.22), inset 10px 8px 18px rgba(255,239,220,0.34), 0 24px 50px rgba(44,53,43,0.12)",
            }}
            {...float(
              { y: [4, -10], rotate: [-3, 4] },
              floatTransition(6.6, 0.35)
            )}
          />
        </div>

        {/* Sage pebble */}
        <div
          className="absolute right-[8%] bottom-[12%] w-[18%] aspect-[0.9/1.15]"
          style={{ transform: "translateZ(145px) rotateZ(12deg)" }}
        >
          <motion.div
            className="w-full h-full rounded-[54%_46%_52%_48%/43%_56%_44%_57%]"
            style={{
              background:
                "radial-gradient(circle at 30% 22%, #b8c2b4 0%, #8fa08a 36%, #7a8b76 68%, #586954 100%)",
              boxShadow:
                "inset -15px -16px 25px rgba(44,53,43,0.18), inset 9px 8px 16px rgba(255,255,255,0.28), 0 22px 45px rgba(44,53,43,0.12)",
            }}
            {...float(
              { y: [-5, 11], rotate: [3, -5] },
              floatTransition(5.2, 0.8)
            )}
          />
        </div>

        {/* Small floating seed */}
        <div
          className="absolute left-[18%] top-[20%] w-[6%] aspect-square"
          style={{ transform: "translateZ(180px)" }}
        >
          <motion.div
            className="w-full h-full rounded-full bg-forest shadow-[0_12px_30px_rgba(44,53,43,0.2)]"
            {...float(
              { y: [-7, 9], x: [-3, 4], scale: [0.94, 1.04] },
              floatTransition(4.8, 0.15)
            )}
          />
        </div>

        {/* Pale floating seed */}
        <div
          className="absolute right-[13%] top-[22%] w-[4.5%] aspect-square"
          style={{ transform: "translateZ(155px)" }}
        >
          <motion.div
            className="w-full h-full rounded-full bg-sand border border-forest/10 shadow-[0_10px_25px_rgba(44,53,43,0.1)]"
            {...float(
              { y: [5, -8], x: [2, -3] },
              floatTransition(5.7, 0.55)
            )}
          />
        </div>

        {/* Soft depth shadows */}
        <div
          className="absolute left-[32%] bottom-[7%] w-[46%] h-[11%] rounded-full bg-forest/10 blur-2xl"
          style={{ transform: "translateZ(-70px) rotateX(72deg)" }}
        />
      </motion.div>
    </div>
  );
};
