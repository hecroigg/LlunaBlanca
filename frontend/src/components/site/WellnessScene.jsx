import { motion, useReducedMotion, useTransform } from "framer-motion";

const HERO_IMAGE = "/images/masaje-relajante-blanes.webp";

export const WellnessScene = ({ progress }) => {
  const prefersReducedMotion = useReducedMotion();

  const imageY = useTransform(progress, [0, 1], [0, -8]);
  const imageScale = useTransform(progress, [0, 1], [1, 1.02]);

  // Left hand / forearm: moves down the back as the user scrolls.
  const leftHandY = useTransform(progress, [0, 0.35, 0.72, 1], [0, 18, 34, 10]);
  const leftHandX = useTransform(progress, [0, 0.45, 1], [0, 3, -1]);
  const leftHandRotate = useTransform(progress, [0, 0.5, 1], [0, 1.2, 0]);
  const leftHandScale = useTransform(progress, [0, 0.48, 1], [1, 1.018, 1]);

  // Right hand follows a slightly different path so it feels like kneading rather than camera movement.
  const rightHandY = useTransform(progress, [0, 0.32, 0.68, 1], [0, 10, 27, 5]);
  const rightHandX = useTransform(progress, [0, 0.4, 0.8, 1], [0, -4, 2, 0]);
  const rightHandRotate = useTransform(progress, [0, 0.5, 1], [0, -1.5, 0]);
  const rightHandScale = useTransform(progress, [0, 0.5, 1], [1, 0.985, 1]);

  const backPressY = useTransform(progress, [0, 0.5, 1], [0, 4, 0]);
  const backPressScale = useTransform(progress, [0, 0.5, 1], [1, 0.985, 1]);
  const backPressOpacity = useTransform(progress, [0, 0.5, 1], [0.08, 0.16, 0.08]);

  return (
    <div
      role="img"
      aria-label="Masajista realizando un masaje relajante"
      className="relative w-full aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]"
    >
      <div className="absolute inset-[3%] rounded-[34px] bg-gradient-to-b from-white to-sand border border-line/70 shadow-[0_30px_70px_rgba(44,53,43,0.07)]" />
      <div className="absolute left-[14%] right-[14%] bottom-[4%] h-8 rounded-full bg-forest/10 blur-2xl" />

      <motion.div
        style={prefersReducedMotion ? undefined : { y: imageY, scale: imageScale }}
        className="absolute inset-[6%] overflow-hidden rounded-[28px] bg-cream"
      >
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
          <>
            {/* Left hand and forearm. Feathered masking avoids hard crop edges. */}
            <motion.div
              aria-hidden="true"
              style={{
                x: leftHandX,
                y: leftHandY,
                rotate: leftHandRotate,
                scale: leftHandScale,
                WebkitMaskImage:
                  "radial-gradient(ellipse 24% 34% at 43% 31%, #000 52%, rgba(0,0,0,.92) 68%, transparent 100%)",
                maskImage:
                  "radial-gradient(ellipse 24% 34% at 43% 31%, #000 52%, rgba(0,0,0,.92) 68%, transparent 100%)",
              }}
              className="absolute -inset-[4%] pointer-events-none will-change-transform"
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

            {/* Right hand / pressure point */}
            <motion.div
              aria-hidden="true"
              style={{
                x: rightHandX,
                y: rightHandY,
                rotate: rightHandRotate,
                scale: rightHandScale,
                WebkitMaskImage:
                  "radial-gradient(ellipse 24% 29% at 67% 27%, #000 50%, rgba(0,0,0,.9) 68%, transparent 100%)",
                maskImage:
                  "radial-gradient(ellipse 24% 29% at 67% 27%, #000 50%, rgba(0,0,0,.9) 68%, transparent 100%)",
              }}
              className="absolute -inset-[4%] pointer-events-none will-change-transform"
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

            {/* Subtle pressure cue on the upper back. */}
            <motion.div
              aria-hidden="true"
              style={{ y: backPressY, scaleY: backPressScale, opacity: backPressOpacity }}
              className="absolute left-[30%] right-[18%] top-[27%] h-[28%] rounded-[50%] bg-forest/10 blur-xl pointer-events-none"
            />
          </>
        )}

        <div className="absolute inset-0 bg-gradient-to-tr from-forest/8 via-transparent to-cream/10 pointer-events-none" />
      </motion.div>
    </div>
  );
};
