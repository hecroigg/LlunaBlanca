import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, MessageCircle, ArrowDownRight } from "lucide-react";
import { CONTACT, IMAGES } from "../../data/site";
import { MaskLines } from "./Reveal";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section id="top" ref={ref} data-testid="hero" className="relative min-h-screen pt-28 md:pt-32 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-10 items-center min-h-[calc(100vh-8rem)]">
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

        {/* Right image */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative w-full max-w-sm aspect-[4/5] lg:aspect-[3/4] rounded-[2px] overflow-hidden"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};
