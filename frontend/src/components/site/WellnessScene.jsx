import { useRef } from "react";
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
  const springX = useSpring(pointerX, { stiffness: 55, damping: 20, mass: 0.75 });
  const springY = useSpring(pointerY, { stiffness: 55, damping: 20, mass: 0.75 });

  const rotateY = useTransform(springX, [-1, 1], [-7, 7]);
  const rotateX = useTransform(springY, [-1, 1], [5, -5]);
  const shiftX = useTransform(springX, [-1, 1], [-5, 5]);
  const shiftY = useTransform(springY, [-1, 1], [-4, 4]);

  const handlePointerMove = (event) => {
    if (prefersReducedMotion || event.pointerType === "touch") return;
    const root = rootRef.current;
    if (!root) return;

    const rect = root.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const floating = (values, duration, delay = 0) =>
    prefersReducedMotion
      ? undefined
      : { animate: values, transition: floatTransition(duration, delay) };

  return (
    <div
      ref={rootRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      role="img"
      aria-label="Ilustración 3D de una terapeuta realizando un masaje sobre una camilla"
      className={`relative w-full aspect-[5/4] lg:aspect-[4/5] select-none ${className}`}
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
        {/* Quiet organic backdrop — deliberately not a planet/orbit motif */}
        <div
          className="absolute left-[9%] right-[8%] top-[7%] bottom-[9%] rounded-[46%_54%_48%_52%/42%_44%_56%_58%] bg-sand/70"
          style={{ transform: "translateZ(-55px) rotate(-5deg)" }}
        />
        <div
          className="absolute right-[6%] top-[12%] w-[31%] h-[42%] rounded-[52%_48%_56%_44%/47%_56%_44%_53%] bg-sage/10"
          style={{ transform: "translateZ(-35px) rotate(11deg)" }}
        />

        {/* Ground shadow */}
        <div
          className="absolute left-[16%] right-[12%] bottom-[9%] h-[8%] rounded-full bg-forest/10 blur-xl"
          style={{ transform: "translateZ(-25px)" }}
        />

        {/* Massage table */}
        <div
          className="absolute left-[11%] right-[8%] bottom-[25%] h-[22%]"
          style={{ transform: "translateZ(35px)" }}
        >
          <motion.div
            className="absolute inset-x-0 top-0 h-[57%] rounded-[28px] bg-gradient-to-br from-[#ead9c5] via-[#dec5a9] to-[#caa987] shadow-[0_20px_42px_rgba(80,65,50,0.15)]"
            {...floating({ y: [0, -3] }, 5.2)}
          >
            <div className="absolute inset-[7%] rounded-[22px] bg-gradient-to-br from-[#faf7f1] to-[#eee5d8]" />
          </motion.div>
          <div className="absolute left-[12%] top-[50%] w-[6%] h-[48%] rounded-full bg-[#a98d72]" />
          <div className="absolute right-[12%] top-[50%] w-[6%] h-[48%] rounded-full bg-[#a98d72]" />
        </div>

        {/* Client: head, hair, body and towel */}
        <div
          className="absolute left-[16%] bottom-[40%] w-[14%] aspect-square"
          style={{ transform: "translateZ(78px)" }}
        >
          <motion.div
            className="relative w-full h-full rounded-full bg-gradient-to-br from-[#edc4a1] to-[#cd956f] shadow-[0_10px_20px_rgba(70,48,35,0.12)]"
            {...floating({ y: [0, -2] }, 4.7, 0.2)}
          >
            <div className="absolute -left-[4%] -top-[5%] w-[76%] h-[58%] rounded-[70%_45%_55%_45%] bg-[#51433a] rotate-[-12deg]" />
          </motion.div>
        </div>

        <div
          className="absolute left-[25%] right-[24%] bottom-[41%] h-[12%]"
          style={{ transform: "translateZ(72px)" }}
        >
          <motion.div
            className="w-full h-full rounded-full bg-gradient-to-r from-[#d6a17b] via-[#e7b890] to-[#d39a74] shadow-[0_10px_25px_rgba(83,55,39,0.1)]"
            {...floating({ y: [0, -2] }, 5, 0.1)}
          />
        </div>

        <div
          className="absolute left-[22%] right-[20%] bottom-[34%] h-[11%] rounded-[24px] bg-gradient-to-b from-white to-[#e9e2d7] shadow-[0_7px_18px_rgba(44,53,43,0.06)]"
          style={{ transform: "translateZ(84px)" }}
        />

        {/* Therapist head + hair */}
        <div
          className="absolute right-[22%] top-[13%] w-[14%] aspect-square"
          style={{ transform: "translateZ(92px)" }}
        >
          <motion.div
            className="relative w-full h-full rounded-full bg-gradient-to-br from-[#efc7a7] to-[#cf9871]"
            {...floating({ y: [0, -4] }, 4.9, 0.15)}
          >
            <div className="absolute -right-[9%] -top-[12%] w-[78%] h-[72%] rounded-full bg-[#4d4037]" />
            <div className="absolute right-[3%] -top-[22%] w-[36%] aspect-square rounded-full bg-[#4d4037]" />
          </motion.div>
        </div>

        {/* Therapist torso */}
        <div
          className="absolute right-[18%] top-[27%] w-[24%] h-[31%]"
          style={{ transform: "translateZ(76px) rotate(7deg)" }}
        >
          <motion.div
            className="w-full h-full rounded-[36%_40%_22%_25%] bg-gradient-to-br from-[#354033] to-forest shadow-[0_18px_32px_rgba(44,53,43,0.15)]"
            {...floating({ y: [0, -3] }, 5.3, 0.35)}
          />
        </div>

        {/* Therapist legs */}
        <div
          className="absolute right-[29%] bottom-[18%] w-[8%] h-[26%] rounded-full bg-[#313b30] rotate-[5deg]"
          style={{ transform: "translateZ(48px)" }}
        />
        <div
          className="absolute right-[18%] bottom-[18%] w-[8%] h-[25%] rounded-full bg-[#394438] -rotate-[7deg]"
          style={{ transform: "translateZ(44px)" }}
        />

        {/* Arms reaching towards the back */}
        <div
          className="absolute right-[34%] top-[42%] w-[26%] h-[6%] origin-right"
          style={{ transform: "translateZ(108px) rotate(18deg)" }}
        >
          <motion.div
            className="w-full h-full rounded-full bg-gradient-to-r from-[#d49c76] to-[#ecc3a1]"
            {...floating({ rotate: [0, -3] }, 3.8)}
          />
        </div>
        <div
          className="absolute right-[27%] top-[45%] w-[24%] h-[6%] origin-right"
          style={{ transform: "translateZ(112px) rotate(31deg)" }}
        >
          <motion.div
            className="w-full h-full rounded-full bg-gradient-to-r from-[#d49c76] to-[#ecc3a1]"
            {...floating({ rotate: [0, 3] }, 4.1, 0.15)}
          />
        </div>

        {/* Hands create the subtle massage animation */}
        <div
          className="absolute left-[44%] top-[53%] w-[7%] aspect-square"
          style={{ transform: "translateZ(123px)" }}
        >
          <motion.div
            className="w-full h-full rounded-full bg-[#e7b894] shadow-[0_5px_12px_rgba(80,53,37,0.12)]"
            {...floating({ y: [0, 3], scale: [1, 0.96] }, 2.4)}
          />
        </div>
        <div
          className="absolute left-[53%] top-[55%] w-[7%] aspect-square"
          style={{ transform: "translateZ(126px)" }}
        >
          <motion.div
            className="w-full h-full rounded-full bg-[#e7b894] shadow-[0_5px_12px_rgba(80,53,37,0.12)]"
            {...floating({ y: [3, 0], scale: [0.96, 1] }, 2.4, 0.2)}
          />
        </div>

        {/* Minimal botanical accents for the Lluna Blanca visual language */}
        <div
          className="absolute left-[7%] top-[23%] w-[11%] h-[4%] rounded-full bg-sage/35 -rotate-[28deg]"
          style={{ transform: "translateZ(18px)" }}
        />
        <div
          className="absolute left-[11%] top-[18%] w-[9%] h-[3.5%] rounded-full bg-sage/20 rotate-[31deg]"
          style={{ transform: "translateZ(14px)" }}
        />
        <div
          className="absolute right-[5%] bottom-[28%] w-[12%] h-[4%] rounded-full bg-wood/20 rotate-[24deg]"
          style={{ transform: "translateZ(12px)" }}
        />
      </motion.div>
    </div>
  );
};
