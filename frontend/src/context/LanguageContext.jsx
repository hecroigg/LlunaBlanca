import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

export const LANGUAGE_OPTIONS = [
  { code: "es", label: "Español", short: "ES", flag: "🇪🇸" },
  { code: "ca", label: "Català", short: "CA", flag: "senyera" },
  { code: "en", label: "English", short: "EN", flag: "🇬🇧" },
];

export const COPY = {
  es: {
    nav: { center: "Centro", services: "Servicios", gallery: "Galería", reviews: "Opiniones", contact: "Contacto", call: "Llamar", open: "Abrir menú", close: "Cerrar menú", language: "Idioma" },
    hero: { eyebrow: "Lluna Blanca · Blanes, Girona", lines: ["Masajes,", "terapias naturales", "y estética en Blanes."], description: "Lluna Blanca es un centro de masajes, terapias naturales, bienestar y estética en Blanes. Nuri e Isa te atienden de forma cercana, profesional y sin prisas.", call: "Llamar ahora", whatsapp: "Contactar por WhatsApp", tagline: "Terapias Naturales y Masajes" },
    marquee: ["Lluna Blanca", "Masajes", "Bienestar", "Relajación", "Blanes", "Terapias Naturales", "Equilibrio"],
    about: { eyebrow: "Sobre Lluna Blanca", lines: ["El arte de", "cuidar de ti,", "sesión a sesión."], chapters: [["Un espacio para reencontrarte", "Lluna Blanca es un centro de masajes, terapias naturales y estética en Blanes. Un espacio físico en Carrer de la Fe, 15, creado para cuidar de ti con calma."], ["Trato cercano y personalizado", "Aquí nadie es un número. Escuchamos lo que tu cuerpo necesita y adaptamos cada sesión a ti: la presión, el ritmo y la técnica. Un trato humano, profesional y sin prisas."], ["Bienestar que perdura", "Nuri se ocupa principalmente de los masajes y las terapias de bienestar. Isa está centrada en estética, limpiezas faciales y tratamientos faciales y corporales."]] },
    services: { eyebrow: "Servicios & Tarifas", lines: ["Tratamientos", "pensados para ti"], intro: "Consulta las tarifas actuales y reserva con cita previa. Si no sabes qué elegir, te asesoramos antes de confirmar.", cards: [["Masajes", "Masajes en Blanes"], ["Facial y corporal", "Estética en Blanes"], ["Bienestar", "Terapias naturales"]], reserve: "Reservar", more: "Ver información completa" },
    promos: { eyebrow: "Promociones", titleA: "Bonos y", titleB: "ofertas", whatsapp: "Reservar por WhatsApp" },
    gallery: { eyebrow: "Galería", lines: ["El ambiente lo", "dice todo"], description: "Un espacio cálido, cercano y natural en pleno centro de Blanes, pensado para que desconectes desde que entras por la puerta." },
    testimonials: { eyebrow: "Opiniones de clientes", lines: ["Lo que dicen", "de nosotros"], google: "Opiniones en Google", all: "Ver todas en Google", leave: "Deja tu opinión", previous: "Anterior", next: "Siguiente", author: "Cliente de Lluna Blanca", date: "Reseña publicada en Google" },
    contact: { eyebrow: "Contacto", lines: ["Reserva tu", "momento."], description: "Llámanos o escríbenos por WhatsApp y reservamos tu cita en un momento. Estaremos encantados de asesorarte.", call: "Llamar", address: "Dirección", hours: "Horario", follow: "Síguenos", weekdays: "Lunes – Viernes", saturday: "Sábado", sunday: "Domingo", closed: "Cerrado" },
    faq: { eyebrow: "Preguntas frecuentes", lines: ["Antes de tu", "visita"], items: [["¿Qué tipos de masaje ofrece Lluna Blanca?", "Ofrecemos masaje relajante, descontracturante y drenante-circulatorio, además de ritual peeling corporal y un bono de tres masajes. Antes de empezar adaptamos la sesión a lo que necesitas."], ["¿Qué diferencia hay entre un masaje relajante y uno descontracturante?", "El relajante tiene un ritmo más suave y continuo, pensado para desconectar. El descontracturante se centra más en las zonas donde notas tensión. Si tienes dudas, te orientamos antes de la sesión."], ["¿Ofrecéis tratamientos faciales y estética?", "Sí. Isa realiza higiene facial completa, rituales faciales, masaje facial, radiofrecuencia, presoterapia, maderoterapia, manicura, pedicura y otros tratamientos estéticos."], ["¿Cómo puedo reservar una cita?", "Puedes escribirnos por WhatsApp o llamar al 636 604 359. No tenemos reserva online: confirmamos contigo la disponibilidad de forma personal."], ["¿Dónde está Lluna Blanca?", "Estamos en Carrer de la Fe, 15, 17300 Blanes, Girona. En la sección de contacto encontrarás el mapa y el enlace para llegar."], ["¿Quién realiza los tratamientos?", "Nuri está especializada principalmente en masajes y terapias de bienestar. Isa se ocupa de estética, limpiezas faciales y tratamientos faciales y corporales."]] },
    footer: { tagline: "Tu rincón de bienestar en el corazón de Blanes.", contact: "Contacto", legal: "Legal", cookies: "Gestionar cookies", rights: "Todos los derechos reservados.", end: "Masajes · Bienestar · Blanes" },
  },
  ca: {
    nav: { center: "Centre", services: "Serveis", gallery: "Galeria", reviews: "Opinions", contact: "Contacte", call: "Trucar", open: "Obrir menú", close: "Tancar menú", language: "Idioma" },
    hero: { eyebrow: "Lluna Blanca · Blanes, Girona", lines: ["Massatges,", "teràpies naturals", "i estètica a Blanes."], description: "Lluna Blanca és un centre de massatges, teràpies naturals, benestar i estètica a Blanes. La Nuri i la Isa t'atenen de manera propera, professional i sense presses.", call: "Trucar ara", whatsapp: "Contactar per WhatsApp", tagline: "Teràpies Naturals i Massatges" },
    marquee: ["Lluna Blanca", "Massatges", "Benestar", "Relaxació", "Blanes", "Teràpies Naturals", "Equilibri"],
    about: { eyebrow: "Sobre Lluna Blanca", lines: ["L'art de", "cuidar-te,", "sessió a sessió."], chapters: [["Un espai per retrobar-te", "Lluna Blanca és un centre de massatges, teràpies naturals i estètica a Blanes. Un espai físic al Carrer de la Fe, 15, creat per cuidar-te amb calma."], ["Tracte proper i personalitzat", "Aquí ningú és un número. Escoltem què necessita el teu cos i adaptem cada sessió a tu: la pressió, el ritme i la tècnica. Un tracte humà, professional i sense presses."], ["Benestar que perdura", "La Nuri s'ocupa principalment dels massatges i les teràpies de benestar. La Isa està centrada en estètica, neteges facials i tractaments facials i corporals."]] },
    services: { eyebrow: "Serveis & Tarifes", lines: ["Tractaments", "pensats per a tu"], intro: "Consulta les tarifes actuals i reserva amb cita prèvia. Si no saps què triar, t'assessorem abans de confirmar.", cards: [["Massatges", "Massatges a Blanes"], ["Facial i corporal", "Estètica a Blanes"], ["Benestar", "Teràpies naturals"]], reserve: "Reservar", more: "Veure informació completa" },
    promos: { eyebrow: "Promocions", titleA: "Bons i", titleB: "ofertes", whatsapp: "Reservar per WhatsApp" },
    gallery: { eyebrow: "Galeria", lines: ["L'ambient ho", "diu tot"], description: "Un espai càlid, proper i natural al centre de Blanes, pensat perquè desconnectis des del moment que entres per la porta." },
    testimonials: { eyebrow: "Opinions de clients", lines: ["El que diuen", "de nosaltres"], google: "Opinions a Google", all: "Veure-les totes a Google", leave: "Deixa la teva opinió", previous: "Anterior", next: "Següent", author: "Client de Lluna Blanca", date: "Ressenya publicada a Google" },
    contact: { eyebrow: "Contacte", lines: ["Reserva el teu", "moment."], description: "Truca'ns o escriu-nos per WhatsApp i reservem la teva cita en un moment. Estarem encantades d'assessorar-te.", call: "Trucar", address: "Adreça", hours: "Horari", follow: "Segueix-nos", weekdays: "Dilluns – Divendres", saturday: "Dissabte", sunday: "Diumenge", closed: "Tancat" },
    faq: { eyebrow: "Preguntes freqüents", lines: ["Abans de la teva", "visita"], items: [["Quins tipus de massatge ofereix Lluna Blanca?", "Oferim massatge relaxant, descontracturant i drenant-circulatori, a més de ritual peeling corporal i un bo de tres massatges. Abans de començar adaptem la sessió al que necessites."], ["Quina diferència hi ha entre un massatge relaxant i un de descontracturant?", "El relaxant té un ritme més suau i continu, pensat per desconnectar. El descontracturant se centra més en les zones on notes tensió. Si tens dubtes, t'orientem abans de la sessió."], ["Oferiu tractaments facials i estètica?", "Sí. La Isa realitza higiene facial completa, rituals facials, massatge facial, radiofreqüència, pressoteràpia, maderoteràpia, manicura, pedicura i altres tractaments estètics."], ["Com puc reservar una cita?", "Pots escriure'ns per WhatsApp o trucar al 636 604 359. No tenim reserva online: confirmem amb tu la disponibilitat de manera personal."], ["On és Lluna Blanca?", "Som al Carrer de la Fe, 15, 17300 Blanes, Girona. A la secció de contacte trobaràs el mapa i l'enllaç per arribar-hi."], ["Qui realitza els tractaments?", "La Nuri està especialitzada principalment en massatges i teràpies de benestar. La Isa s'ocupa d'estètica, neteges facials i tractaments facials i corporals."]] },
    footer: { tagline: "El teu racó de benestar al cor de Blanes.", contact: "Contacte", legal: "Legal", cookies: "Gestionar cookies", rights: "Tots els drets reservats.", end: "Massatges · Benestar · Blanes" },
  },
  en: {
    nav: { center: "Studio", services: "Services", gallery: "Gallery", reviews: "Reviews", contact: "Contact", call: "Call", open: "Open menu", close: "Close menu", language: "Language" },
    hero: { eyebrow: "Lluna Blanca · Blanes, Girona", lines: ["Massages,", "natural therapies", "and beauty treatments in Blanes."], description: "Lluna Blanca is a massage, natural therapy, wellness and beauty studio in Blanes. Nuri and Isa offer warm, professional and unhurried care.", call: "Call now", whatsapp: "Contact via WhatsApp", tagline: "Natural Therapies & Massage" },
    marquee: ["Lluna Blanca", "Massage", "Wellness", "Relaxation", "Blanes", "Natural Therapies", "Balance"],
    about: { eyebrow: "About Lluna Blanca", lines: ["The art of", "taking care of you,", "session by session."], chapters: [["A space to reconnect", "Lluna Blanca is a massage, natural therapy and beauty studio in Blanes. A physical space at Carrer de la Fe, 15, created to care for you calmly."], ["Warm, personalised care", "Here, nobody is just a number. We listen to what your body needs and adapt each session to you: pressure, pace and technique. Human, professional care without rushing."], ["Wellbeing that lasts", "Nuri focuses mainly on massage and wellness therapies. Isa specialises in beauty, facial cleansing and facial and body treatments."]] },
    services: { eyebrow: "Services & Prices", lines: ["Treatments", "designed for you"], intro: "Check our current prices and book by appointment. If you are unsure what to choose, we can advise you before confirming.", cards: [["Massage", "Massage in Blanes"], ["Face & body", "Beauty treatments in Blanes"], ["Wellness", "Natural therapies"]], reserve: "Book", more: "View full information" },
    promos: { eyebrow: "Promotions", titleA: "Packages &", titleB: "offers", whatsapp: "Book via WhatsApp" },
    gallery: { eyebrow: "Gallery", lines: ["The atmosphere", "says it all"], description: "A warm, welcoming and natural space in central Blanes, designed to help you switch off from the moment you walk through the door." },
    testimonials: { eyebrow: "Client reviews", lines: ["What people say", "about us"], google: "Google reviews", all: "View all on Google", leave: "Leave a review", previous: "Previous", next: "Next", author: "Lluna Blanca client", date: "Review published on Google" },
    contact: { eyebrow: "Contact", lines: ["Book your", "moment."], description: "Call us or message us on WhatsApp and we will arrange your appointment. We will be happy to help you choose the right treatment.", call: "Call", address: "Address", hours: "Opening hours", follow: "Follow us", weekdays: "Monday – Friday", saturday: "Saturday", sunday: "Sunday", closed: "Closed" },
    faq: { eyebrow: "Frequently asked questions", lines: ["Before your", "visit"], items: [["What types of massage does Lluna Blanca offer?", "We offer relaxing, deep-tissue and draining/circulatory massage, as well as a body peeling ritual and a three-massage package. Before we begin, we adapt the session to what you need."], ["What is the difference between a relaxing and a deep-tissue massage?", "A relaxing massage uses a softer, continuous rhythm to help you switch off. A deep-tissue massage focuses more on areas where you feel tension. If you are unsure, we can guide you before the session."], ["Do you offer facial and beauty treatments?", "Yes. Isa offers complete facial cleansing, facial rituals, facial massage, radiofrequency, pressotherapy, wood therapy, manicure, pedicure and other beauty treatments."], ["How can I book an appointment?", "You can message us on WhatsApp or call 636 604 359. We do not use online booking: we confirm availability with you personally."], ["Where is Lluna Blanca?", "We are at Carrer de la Fe, 15, 17300 Blanes, Girona. You will find the map and directions in the contact section."], ["Who carries out the treatments?", "Nuri specialises mainly in massage and wellness therapies. Isa looks after beauty, facial cleansing and facial and body treatments."]] },
    footer: { tagline: "Your wellbeing corner in the heart of Blanes.", contact: "Contact", legal: "Legal", cookies: "Manage cookies", rights: "All rights reserved.", end: "Massage · Wellness · Blanes" },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem("lluna-language");
      return ["es", "ca", "en"].includes(saved) ? saved : "es";
    } catch {
      return "es";
    }
  });

  useEffect(() => {
    document.documentElement.lang = language;
    try { localStorage.setItem("lluna-language", language); } catch {}
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, copy: COPY[language] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
};
