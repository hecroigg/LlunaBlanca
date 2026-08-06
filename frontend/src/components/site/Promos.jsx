import { Sparkles, MessageCircle } from "lucide-react";
import { PROMOS, CONTACT } from "../../data/site";
import { Reveal } from "./Reveal";

export const Promos = () => (
  <section id="promociones" data-testid="promos" className="py-20 md:py-28 bg-forest text-cream">
    <div className="max-w-7xl mx-auto px-5 md:px-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <p className="overline !text-sage mb-5 inline-flex items-center gap-2">
            <Sparkles size={14} /> Promociones
          </p>
          <h2 className="font-serif font-light text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
            Bonos y <em className="italic text-sage">ofertas</em>
          </h2>
        </div>
        <a
          href={CONTACT.whatsapp}
          target="_blank" rel="noreferrer"
          data-testid="promos-whatsapp-btn"
          className="inline-flex items-center gap-2.5 rounded-full bg-whatsapp text-white px-7 py-4 text-sm hover:-translate-y-1 hover:opacity-90 transition-all duration-300 w-fit"
        >
          <MessageCircle size={17} /> Reservar por WhatsApp
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROMOS.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
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
