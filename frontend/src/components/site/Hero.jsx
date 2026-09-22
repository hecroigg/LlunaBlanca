import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, MessageCircle, ArrowDownRight } from "lucide-react";
import { CONTACT, IMAGES } from "../../data/site";
import { MaskLines } from "./Reveal";
import { WellnessScene } from "./WellnessScene";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, -42]);
  const sceneRotate = useTransform(scrollYProgress, [0, 1], [0, 8]);

  return (
    <section id="top" ref={ref} data-testid="hero" className="relative min-h-screen pt-28 md:pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -right-20 top-24 h-72 w-72 rounded-full bg-sage/5 blur-3xl" />
        <div className="absolute right-[34%] bottom-12 h-56 w-56 rounded-full bg-wood/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-10 items-center min-h-[calc(100vh-8rem)] relative z-10">
        {/* Left copy */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}
            className="overline mb-6"
          >
            Lluna Blanca · Blanes, Girona
          </motion.p>

          <h1 className="font-serif font-light text-forest leading-[0.95] text-5xl sm:text-7xl lg:text-8xl tracking-tight">
            <MaskLines lines={["Masajes y", "terapias naturales", <em key="e" className="italic text-sage">y estética en Blanes.</em>]} delay={0.25} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 1 }}
            className="mt-8 max-w-md text-forest/70 text-base md:text-lg leading-relaxed"
          >
            Lluna Blanca es un centro de masajes, terapias naturales, bienestar y estética en Blanes. Nuri e Isa te atienden de forma cercana, profesional y sin prisas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 1 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href={`tel:${CONTACT.phone}`}
              data-testid="hero-call-btn"
              className="inline-flex items-center gap-2.5 rounded-full bg-forest text-cream px-7 py-4 text-sm hover:bg-sage hover:-translate-y-1 transition-all duration-300"
            >
              <Phone size={17} /> Llamar ahora
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank" rel="noreferrer"
              data-testid="hero-whatsapp-btn"
              className="inline-flex items-center gap-2.5 rounded-full border border-forest/25 text-forest px-7 py-4 text-sm hover:border-whatsapp hover:text-whatsapp hover:-translate-y-1 transition-all duration-300"
            >
              <MessageCircle size={17} /> Contactar por WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }}
            className="mt-14 flex items-center gap-3 text-muted text-sm"
          >
            <ArrowDownRight size={18} className="text-sage" />
            <span>{CONTACT.tagline}</span>
          </motion.div>
        </div>

        {/* Right image + interactive 3D wellness objects */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end relative isolate min-h-[430px] sm:min-h-[520px] lg:min-h-[650px] items-center">
          <motion.div
            style={{ y: sceneY, rotate: sceneRotate }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -inset-x-16 -inset-y-12 sm:-inset-x-24 lg:-right-48 lg:-left-24 lg:-inset-y-14 z-0"
          >
            <WellnessScene className="w-full h-full" />
          </motion.div>

          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative z-10 w-[78%] sm:w-[72%] lg:w-full max-w-sm aspect-[4/5] lg:aspect-[3/4] rounded-[2px] overflow-hidden shadow-[0_26px_80px_rgba(44,53,43,0.14)] ring-1 ring-forest/5"
          >
            <motion.img
              src={IMAGES.hero}
              alt="Sesión de masaje relajante en Lluna Blanca, Blanes"
              style={{ y, scale }}
              width="960"
              height="1440"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 w-full h-[112%] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-forest/10 via-transparent to-cream/5 pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.35, duration: 0.8 }}
            className="absolute z-20 right-0 sm:right-4 lg:-right-4 bottom-10 sm:bottom-14 rounded-full border border-forest/10 bg-cream/80 backdrop-blur-md px-4 py-2.5 shadow-[0_10px_35px_rgba(44,53,43,0.08)]"
          >
            <span className="text-[10px] uppercase tracking-[0.22em] text-forest/55">Mueve el cursor</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
