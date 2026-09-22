import { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Phone, MessageCircle, ArrowDownRight } from "lucide-react";
import { CONTACT } from "../../data/site";
import { MaskLines } from "./Reveal";
import { WellnessScene } from "./WellnessScene";
import { useLanguage } from "../../context/LanguageContext";

export const Hero = () => {
  const ref = useRef(null);
  const { language, copy } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const titles = {
      es: "Masajes, terapias naturales y estética en Blanes | Lluna Blanca",
      ca: "Massatges, teràpies naturals i estètica a Blanes | Lluna Blanca",
      en: "Massage, natural therapies and beauty in Blanes | Lluna Blanca",
    };
    document.title = titles[language];
  }, [language]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero"
      className="relative min-h-[100svh] overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -right-16 top-20 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-sage/5 blur-3xl" />
        <div className="absolute -left-20 bottom-8 h-44 w-44 rounded-full bg-wood/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-6 sm:gap-9 lg:gap-12 items-center min-h-[calc(100svh-7rem)]">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.65 }}
            className="overline mb-5 sm:mb-6"
          >
            {copy.hero.eyebrow}
          </motion.p>

          <h1 className="font-serif font-light text-forest leading-[0.94] text-[3.3rem] sm:text-7xl lg:text-8xl tracking-tight">
            <MaskLines
              lines={[
                copy.hero.lines[0],
                copy.hero.lines[1],
                <em key={`${language}-hero-em`} className="italic text-sage">{copy.hero.lines[2]}</em>,
              ]}
              delay={0.18}
            />
          </h1>

          <motion.p
            key={`${language}-description`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-6 sm:mt-8 max-w-md text-forest/70 text-[15px] sm:text-base md:text-lg leading-relaxed"
          >
            {copy.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.75 }}
            className="mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href={`tel:${CONTACT.phone}`}
              data-testid="hero-call-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-forest text-cream px-7 py-4 text-sm hover:bg-sage hover:-translate-y-0.5 transition-all duration-300"
            >
              <Phone size={17} /> {copy.hero.call}
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              data-testid="hero-whatsapp-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border border-forest/20 text-forest px-7 py-4 text-sm hover:border-whatsapp hover:text-whatsapp hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircle size={17} /> {copy.hero.whatsapp}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-9 sm:mt-12 flex items-center gap-3 text-muted text-sm"
          >
            <ArrowDownRight size={18} className="text-sage" />
            <span>{copy.hero.tagline}</span>
          </motion.div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end items-center">
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[330px] sm:max-w-[430px] lg:max-w-[540px]"
          >
            <WellnessScene progress={scrollYProgress} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
