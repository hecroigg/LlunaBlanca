import { motion, useReducedMotion, useTransform } from "framer-motion";

const HERO_IMAGE = "/images/masaje-relajante-blanes.webp";

export const WellnessScene = ({ progress }) => {
  const prefersReducedMotion = useReducedMotion();

  const imageY = useTransform(progress, [0, 1], [0, -10]);
  const imageScale = useTransform(progress, [0, 1], [1, 1.035]);
  const handsY = useTransform(progress, [0, 0.45, 1], [0, 7, -2]);
  const handsX = useTransform(progress, [0, 0.45, 1], [0, -2, 1]);
  const handsScale = useTransform(progress, [0, 0.45, 1], [1, 0.985, 1]);

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
          <motion.div
            aria-hidden="true"
            style={{
              x: handsX,
              y: handsY,
              scale: handsScale,
              clipPath: "inset(22% 9% 38% 34% round 18px)",
            }}
            className="absolute inset-0 pointer-events-none"
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

        <div className="absolute inset-0 bg-gradient-to-tr from-forest/8 via-transparent to-cream/10 pointer-events-none" />
      </motion.div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-[2%] rounded-full bg-cream/90 border border-line px-4 py-2 text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-muted backdrop-blur-sm whitespace-nowrap">
        Desliza para ver el masaje
      </div>
    </div>
  );
};
