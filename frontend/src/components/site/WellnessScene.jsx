import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";

const HERO_IMAGE = "/images/masaje-relajante-blanes.webp";

export const WellnessScene = ({ progress }) => {
  const prefersReducedMotion = useReducedMotion();

  // Smooth the scroll signal before applying it to the image. This avoids the
  // stepped feeling that was especially visible on touch devices.
  const smoothProgress = useSpring(progress, {
    stiffness: 92,
    damping: 28,
    mass: 0.24,
    restDelta: 0.001,
  });

  // One feathered moving layer is much cheaper than the previous two masked
  // hand layers and avoids the visible seams between independent cut-outs.
  const massageY = useTransform(
    smoothProgress,
    [0, 0.09, 0.2, 0.34, 0.52, 0.72],
    [0, 18, 43, 66, 32, 8]
  );
  const massageX = useTransform(
    smoothProgress,
    [0, 0.16, 0.34, 0.55, 0.72],
    [0, -2, 4, -1, 0]
  );
  const massageRotate = useTransform(
    smoothProgress,
    [0, 0.2, 0.38, 0.6, 0.72],
    [0, 0.8, -0.7, 0.35, 0]
  );
  const massageScale = useTransform(
    smoothProgress,
    [0, 0.2, 0.38, 0.6, 0.72],
    [1, 1.012, 0.992, 1.006, 1]
  );

  return (
    <div
      role="img"
      aria-label="Masajista realizando un masaje relajante"
      className="relative w-full aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]"
    >
      <div className="absolute inset-[3%] rounded-[34px] bg-gradient-to-b from-white to-sand border border-line/70 shadow-[0_24px_56px_rgba(44,53,43,0.06)]" />

      <div className="absolute inset-[6%] overflow-hidden rounded-[28px] bg-cream [transform:translateZ(0)]">
        <img
          src={HERO_IMAGE}
          alt="Sesión de masaje relajante en Lluna Blanca, Blanes"
          width="960"
          height="1440"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          draggable="false"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {!prefersReducedMotion && (
          <motion.div
            aria-hidden="true"
            style={{
              x: massageX,
              y: massageY,
              rotate: massageRotate,
              scale: massageScale,
              transformOrigin: "54% 31%",
              WebkitMaskImage:
                "radial-gradient(ellipse 56% 43% at 54% 30%, #000 0%, #000 38%, rgba(0,0,0,.9) 53%, rgba(0,0,0,.6) 66%, rgba(0,0,0,.25) 80%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 56% 43% at 54% 30%, #000 0%, #000 38%, rgba(0,0,0,.9) 53%, rgba(0,0,0,.6) 66%, rgba(0,0,0,.25) 80%, transparent 100%)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
            className="absolute inset-0 pointer-events-none will-change-transform [transform:translateZ(0)]"
          >
            <img
              src={HERO_IMAGE}
              alt=""
              width="960"
              height="1440"
              decoding="async"
              draggable="false"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </motion.div>
        )}

        <div className="absolute inset-0 bg-gradient-to-tr from-forest/[0.045] via-transparent to-cream/[0.035] pointer-events-none" />
      </div>
    </div>
  );
};
