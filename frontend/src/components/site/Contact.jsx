import { MapPin, Phone, MessageCircle, Clock, Instagram } from "lucide-react";
import { CONTACT } from "../../data/site";
import { Reveal, MaskLines } from "./Reveal";

export const Contact = () => (
  <section id="contacto" data-testid="contact" className="py-24 md:py-36 bg-sand">
    <div className="max-w-7xl mx-auto px-5 md:px-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Info */}
        <div>
          <p className="overline mb-6">Contacto</p>
          <h2 className="font-serif font-light text-forest text-5xl md:text-7xl leading-[0.98] tracking-tight">
            <MaskLines lines={["Reserva tu", <em key="e" className="italic text-sage">momento.</em>]} />
          </h2>
          <p className="mt-6 text-forest/60 leading-relaxed max-w-md">
            Llámanos o escríbenos por WhatsApp y reservamos tu cita en un momento. Estaremos encantados de asesorarte.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href={`tel:${CONTACT.phone}`} data-testid="contact-call-btn" className="inline-flex items-center gap-2.5 rounded-full bg-forest text-cream px-7 py-4 text-sm hover:bg-sage hover:-translate-y-1 transition-all duration-300">
              <Phone size={17} /> Llamar {CONTACT.phoneDisplay}
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" data-testid="contact-whatsapp-btn" className="inline-flex items-center gap-2.5 rounded-full bg-whatsapp text-white px-7 py-4 text-sm hover:-translate-y-1 hover:opacity-90 transition-all duration-300">
              <MessageCircle size={17} /> WhatsApp
            </a>
          </div>

          <div className="mt-12 space-y-7">
            <Reveal className="flex gap-4">
              <MapPin className="text-sage shrink-0 mt-1" size={20} />
              <div>
                <p className="text-forest font-medium">Dirección</p>
                <a href={CONTACT.mapDir} target="_blank" rel="noreferrer" className="text-forest/60 hover:text-sage transition-colors">{CONTACT.addressFull}</a>
              </div>
            </Reveal>
            <Reveal delay={0.05} className="flex gap-4">
              <Clock className="text-sage shrink-0 mt-1" size={20} />
              <div>
                <p className="text-forest font-medium">Horario</p>
                {CONTACT.hours.map((h) => (
                  <p key={h.d} className="text-forest/60"><span className="inline-block w-40">{h.d}</span> {h.h}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="flex gap-4">
              <Instagram className="text-sage shrink-0 mt-1" size={20} />
              <div>
                <p className="text-forest font-medium">Síguenos</p>
                <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="text-forest/60 hover:text-sage transition-colors">@llunablancablanes</a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Map */}
        <Reveal className="h-full">
          <div className="rounded-[3px] overflow-hidden border border-line h-[380px] lg:h-full min-h-[440px]">
            <iframe
              title="Ubicación de Lluna Blanca en Blanes"
              src={CONTACT.mapEmbed}
              className="w-full h-full map-frame"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
