import { Sparkles, MessageCircle } from "lucide-react";
import { PROMOS, CONTACT } from "../../data/site";
import { Reveal } from "./Reveal";
import { useLanguage } from "../../context/LanguageContext";

const PROMO_COPY = {
  es: PROMOS,
  ca: [
    { title: "Maderoteràpia", offer: "5 sessions + 1 gratis", price: "150 €", note: "Bo de sis sessions" },
    { title: "Bo 3 massatges", offer: "Preu especial", price: "100 €", note: "Abans 120 € · al teu ritme" },
    { title: "Pressoteràpia", offer: "Bo de 4 sessions", price: "54 €", note: "10 % de descompte" },
    { title: "Radiofreqüència facial", offer: "Bo de 4 sessions", price: "162 €", note: "Amb massatge activador · 10 % de descompte" },
  ],
  en: [
    { title: "Wood therapy", offer: "5 sessions + 1 free", price: "150 €", note: "Six-session package" },
    { title: "3-massage package", offer: "Special price", price: "100 €", note: "Previously 120 € · use at your pace" },
    { title: "Pressotherapy", offer: "4-session package", price: "54 €", note: "10% discount" },
    { title: "Facial radiofrequency", offer: "4-session package", price: "162 €", note: "With activating massage · 10% discount" },
  ],
};

export const Promos = () => {
  const { language, copy } = useLanguage();
  const promos = PROMO_COPY[language] || PROMOS;

  return (
    <section id="promociones" data-testid="promos" className="py-20 md:py-28 bg-forest text-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="overline !text-sage mb-5 inline-flex items-center gap-2">
              <Sparkles size={14} /> {copy.promos.eyebrow}
            </p>
            <h2 className="font-serif font-light text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              {copy.promos.titleA} <em className="italic text-sage">{copy.promos.titleB}</em>
            </h2>
          </div>
          <a
            href={CONTACT.whatsapp}
            target="_blank" rel="noreferrer"
            data-testid="promos-whatsapp-btn"
            className="inline-flex items-center gap-2.5 rounded-full bg-whatsapp text-white px-7 py-4 text-sm hover:-translate-y-1 hover:opacity-90 transition-all duration-300 w-fit"
          >
            <MessageCircle size={17} /> {copy.promos.whatsapp}
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {promos.map((p, i) => (
            <Reveal key={`${language}-${i}`} delay={i * 0.08}>
              <div className="group h-full rounded-[3px] border border-cream/15 p-7 flex flex-col justify-between hover:bg-cream/5 hover:-translate-y-1.5 transition-all duration-400">
                <div>
                  <p className="overline !text-sage mb-4">{p.offer}</p>
                  <h3 className="font-serif text-3xl mb-2">{p.title}</h3>
                  <p className="text-cream/55 text-sm">{p.note}</p>
                </div>
                <p className="mt-8 font-serif text-5xl text-cream group-hover:text-sage transition-colors duration-300">{p.price}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
