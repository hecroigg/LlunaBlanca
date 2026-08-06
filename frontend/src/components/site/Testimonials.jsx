import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";
import { TESTIMONIALS, CONTACT } from "../../data/site";
import { MaskLines } from "./Reveal";

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const go = (dir) => setI((p) => (p + dir + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="opiniones" data-testid="testimonials" className="py-24 md:py-36 bg-forest text-cream overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="overline !text-sage mb-6">Opiniones de clientes</p>
            <h2 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl leading-[0.98] tracking-tight">
              <MaskLines lines={["Lo que dicen", <em key="e" className="italic text-sage">de nosotros</em>]} />
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sage">
            <div className="flex gap-0.5">{[...Array(5)].map((_, k) => <Star key={k} size={16} fill="currentColor" />)}</div>
            <span className="text-cream/60 text-sm ml-1">5,0 en Google</span>
          </div>
        </div>

        <div className="relative min-h-[260px] md:min-h-[220px]">
          <Quote size={64} className="text-sage/30 mb-6" />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex gap-0.5 text-sage mb-5">
                {[...Array(t.rating)].map((_, k) => <Star key={k} size={16} fill="currentColor" />)}
              </div>
              <p className="font-serif italic font-light text-2xl md:text-[2rem] leading-snug text-cream/95">
                “{t.quote}”
              </p>
              <p className="mt-8 text-sm uppercase tracking-widest text-cream/85">{t.author}</p>
              <p className="mt-1 text-xs text-sage/70">{t.date}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-12">
          <button data-testid="testimonial-prev" onClick={() => go(-1)} className="w-12 h-12 rounded-full border border-cream/25 flex items-center justify-center hover:bg-sage hover:border-sage transition-all duration-300" aria-label="Anterior">
            <ArrowLeft size={18} />
          </button>
          <button data-testid="testimonial-next" onClick={() => go(1)} className="w-12 h-12 rounded-full border border-cream/25 flex items-center justify-center hover:bg-sage hover:border-sage transition-all duration-300" aria-label="Siguiente">
            <ArrowRight size={18} />
          </button>
          <span className="ml-1 text-cream/50 text-sm">{String(i + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}</span>

          <div className="flex flex-wrap gap-3 sm:ml-auto">
            <a
              href={CONTACT.googleReviews}
              target="_blank" rel="noreferrer"
              data-testid="google-reviews-btn"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 text-sm hover:bg-cream hover:text-forest transition-all duration-300"
            >
              Ver todas en Google
            </a>
            <a
              href={CONTACT.googleWriteReview}
              target="_blank" rel="noreferrer"
              data-testid="google-write-btn"
              className="inline-flex items-center gap-2 rounded-full bg-sage text-cream px-6 py-3 text-sm hover:bg-sage-dark transition-all duration-300"
            >
              Deja tu opinión
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
