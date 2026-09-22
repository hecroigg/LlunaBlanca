import { motion, useReducedMotion, useTransform } from "framer-motion";

const HERO_IMAGE = "/images/masaje-relajante-blanes.webp";

export const WellnessScene = ({ progress }) => {
  const prefersReducedMotion = useReducedMotion();

  const imageY = useTransform(progress, [0, 0.4], [0, -10]);
  const imageScale = useTransform(progress, [0, 0.4], [1, 1.025]);

  // Make the massage action happen early enough to be clearly visible on mobile.
  const leftHandY = useTransform(progress, [0, 0.08, 0.18, 0.32, 0.5], [0, 26, 58, 82, 22]);
  const leftHandX = useTransform(progress, [0, 0.12, 0.25, 0.5], [0, 7, -4, 0]);
  const leftHandRotate = useTransform(progress, [0, 0.18, 0.34, 0.5], [0, 2.8, 4.2, 0]);
  const leftHandScale = useTransform(progress, [0, 0.18, 0.34, 0.5], [1, 1.035, 0.985, 1]);

  const rightHandY = useTransform(progress, [0, 0.08, 0.18, 0.32, 0.5], [0, 16, 42, 68, 12]);
  const rightHandX = useTransform(progress, [0, 0.1, 0.24, 0.5], [0, -8, 5, 0]);
  const rightHandRotate = useTransform(progress, [0, 0.18, 0.34, 0.5], [0, -3.2, -4.8, 0]);
  const rightHandScale = useTransform(progress, [0, 0.18, 0.34, 0.5], [1, 0.97, 1.03, 1]);

  const backPressY = useTransform(progress, [0, 0.18, 0.34, 0.5], [0, 9, 17, 0]);
  const backPressScale = useTransform(progress, [0, 0.18, 0.34, 0.5], [1, 0.94, 0.9, 1]);
  const backPressOpacity = useTransform(progress, [0, 0.18, 0.34, 0.5], [0.05, 0.19, 0.25, 0.05]);

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
            <motion.div
              aria-hidden="true"
              style={{
                x: leftHandX,
                y: leftHandY,
                rotate: leftHandRotate,
                scale: leftHandScale,
                WebkitMaskImage:
                  "radial-gradient(ellipse 27% 38% at 43% 31%, #000 52%, rgba(0,0,0,.94) 68%, transparent 100%)",
                maskImage:
                  "radial-gradient(ellipse 27% 38% at 43% 31%, #000 52%, rgba(0,0,0,.94) 68%, transparent 100%)",
              }}
              className="absolute -inset-[5%] pointer-events-none will-change-transform"
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

            <motion.div
              aria-hidden="true"
              style={{
                x: rightHandX,
                y: rightHandY,
                rotate: rightHandRotate,
                scale: rightHandScale,
                WebkitMaskImage:
                  "radial-gradient(ellipse 27% 34% at 67% 27%, #000 50%, rgba(0,0,0,.92) 68%, transparent 100%)",
                maskImage:
                  "radial-gradient(ellipse 27% 34% at 67% 27%, #000 50%, rgba(0,0,0,.92) 68%, transparent 100%)",
              }}
              className="absolute -inset-[5%] pointer-events-none will-change-transform"
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

            <motion.div
              aria-hidden="true"
              style={{ y: backPressY, scaleY: backPressScale, opacity: backPressOpacity }}
              className="absolute left-[27%] right-[15%] top-[25%] h-[31%] rounded-[50%] bg-forest/10 blur-xl pointer-events-none"
            />
          </>
        )}

        <div className="absolute inset-0 bg-gradient-to-tr from-forest/8 via-transparent to-cream/10 pointer-events-none" />
      </motion.div>
    </div>
  );
};
