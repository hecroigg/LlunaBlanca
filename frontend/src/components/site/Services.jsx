import { useState } from "react";
import { ArrowRight, CalendarCheck, MessageCircle } from "lucide-react";
import { SERVICE_GROUPS, CONTACT } from "../../data/site";
import { Reveal, MaskLines } from "./Reveal";
import { useLanguage } from "../../context/LanguageContext";

const GROUP_LABELS = {
  es: {},
  ca: {
    masajes: "Massatges",
    maderoterapia: "Maderoteràpia & Pressoteràpia",
    radiofrecuencia: "Radiofreqüència",
    terapias: "Teràpies de benestar",
    estetica: "Estètica & Facial",
    aparatologia: "Aparells estètics",
  },
  en: {
    masajes: "Massage",
    maderoterapia: "Wood therapy & Pressotherapy",
    radiofrecuencia: "Radiofrequency",
    terapias: "Wellness therapies",
    estetica: "Beauty & Facial",
    aparatologia: "Aesthetic technology",
  },
};

export const Services = () => {
  const [active, setActive] = useState(SERVICE_GROUPS[0].id);
  const group = SERVICE_GROUPS.find((g) => g.id === active);
  const { language, copy } = useLanguage();

  return (
    <section id="servicios" data-testid="services" className="py-24 md:py-36 bg-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <p className="overline mb-6">{copy.services.eyebrow}</p>
            <h2 className="font-serif font-light text-forest text-6xl md:text-8xl leading-[0.98] tracking-tight">
              <MaskLines lines={[
                copy.services.lines[0],
                <span key={`${language}-services-line`}>{copy.services.lines[1].replace(/ ti$| tu$| you$/, "")} <em className="italic text-sage">{language === "es" ? "ti" : language === "ca" ? "tu" : "you"}</em></span>,
              ]} />
            </h2>
          </div>
          <p className="max-w-sm text-forest/60 leading-relaxed">{copy.services.intro}</p>
        </div>

        <nav aria-label="Páginas de servicios" className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            { href: "/masajes-blanes/", copy: copy.services.cards[0] },
            { href: "/estetica-blanes/", copy: copy.services.cards[1] },
            { href: "/terapias-naturales-blanes/", copy: copy.services.cards[2] },
          ].map((card) => (
            <a key={card.href} href={card.href} className="group bg-cream border border-line rounded-[3px] p-6 hover:border-sage transition-colors">
              <span className="overline">{card.copy[0]}</span>
              <span className="mt-3 flex items-center justify-between font-serif text-2xl text-forest">{card.copy[1]} <ArrowRight size={18} className="text-sage group-hover:translate-x-1 transition-transform" /></span>
            </a>
          ))}
        </nav>

        <div className="flex flex-wrap gap-3 mb-12">
          {SERVICE_GROUPS.map((g) => (
            <button
              key={g.id}
              type="button"
              data-testid={`service-tab-${g.id}`}
              onClick={() => setActive(g.id)}
              aria-pressed={active === g.id}
              className={`rounded-full px-5 py-2.5 text-sm transition-all duration-300 border ${
                active === g.id
                  ? "bg-forest text-cream border-forest"
                  : "bg-transparent text-forest/70 border-line hover:border-sage hover:text-sage"
              }`}
            >
              {GROUP_LABELS[language]?.[g.id] || g.label}
            </button>
          ))}
        </div>

        <Reveal key={active}>
          <p className="font-serif italic text-xl text-forest/70 mb-8 max-w-2xl">{group.intro}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {group.items.map((s, i) => (
              <div
                key={i}
                data-testid={`service-card-${active}-${i}`}
                className="group bg-cream border border-line rounded-[3px] p-7 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(44,53,43,0.07)] transition-all duration-400"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-serif text-2xl text-forest leading-tight">{s.name}</h3>
                    <span className="font-serif text-2xl text-sage whitespace-nowrap">{s.price}</span>
                  </div>
                  <p className="text-forest/60 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-muted text-xs uppercase tracking-widest">
                    <CalendarCheck size={13} /> {s.detail}
                  </span>
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sage text-sm md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {copy.services.reserve} <MessageCircle size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <a href={group.landing} className="mt-8 inline-flex items-center gap-2 text-forest hover:text-sage transition-colors">
            {copy.services.more} <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
};
