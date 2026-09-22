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
    hero: {
      eyebrow: "Lluna Blanca · Blanes, Girona",
      lines: ["Masajes,", "terapias naturales", "y estética en Blanes."],
      description: "Lluna Blanca es un centro de masajes, terapias naturales, bienestar y estética en Blanes. Nuri e Isa te atienden de forma cercana, profesional y sin prisas.",
      call: "Llamar ahora",
      whatsapp: "Contactar por WhatsApp",
      tagline: "Terapias Naturales y Masajes",
    },
    marquee: ["Lluna Blanca", "Masajes", "Bienestar", "Relajación", "Blanes", "Terapias Naturales", "Equilibrio"],
    about: {
      eyebrow: "Sobre Lluna Blanca",
      lines: ["El arte de", "cuidar de ti,", "sesión a sesión."],
      chapters: [
        ["Un espacio para reencontrarte", "Lluna Blanca es un centro de masajes, terapias naturales y estética en Blanes. Un espacio físico en Carrer de la Fe, 15, creado para cuidar de ti con calma."],
        ["Trato cercano y personalizado", "Aquí nadie es un número. Escuchamos lo que tu cuerpo necesita y adaptamos cada sesión a ti: la presión, el ritmo y la técnica. Un trato humano, profesional y sin prisas."],
        ["Bienestar que perdura", "Nuri se ocupa principalmente de los masajes y las terapias de bienestar. Isa está centrada en estética, limpiezas faciales y tratamientos faciales y corporales."],
      ],
    },
    services: {
      eyebrow: "Servicios & Tarifas",
      lines: ["Tratamientos", "pensados para ti"],
      intro: "Consulta las tarifas actuales y reserva con cita previa. Si no sabes qué elegir, te asesoramos antes de confirmar.",
      cards: [["Masajes", "Masajes en Blanes"], ["Facial y corporal", "Estética en Blanes"], ["Bienestar", "Terapias naturales"]],
      reserve: "Reservar",
      more: "Ver información completa",
    },
  },
  ca: {
    nav: { center: "Centre", services: "Serveis", gallery: "Galeria", reviews: "Opinions", contact: "Contacte", call: "Trucar", open: "Obrir menú", close: "Tancar menú", language: "Idioma" },
    hero: {
      eyebrow: "Lluna Blanca · Blanes, Girona",
      lines: ["Massatges,", "teràpies naturals", "i estètica a Blanes."],
      description: "Lluna Blanca és un centre de massatges, teràpies naturals, benestar i estètica a Blanes. La Nuri i la Isa t'atenen de manera propera, professional i sense presses.",
      call: "Trucar ara",
      whatsapp: "Contactar per WhatsApp",
      tagline: "Teràpies Naturals i Massatges",
    },
    marquee: ["Lluna Blanca", "Massatges", "Benestar", "Relaxació", "Blanes", "Teràpies Naturals", "Equilibri"],
    about: {
      eyebrow: "Sobre Lluna Blanca",
      lines: ["L'art de", "cuidar-te,", "sessió a sessió."],
      chapters: [
        ["Un espai per retrobar-te", "Lluna Blanca és un centre de massatges, teràpies naturals i estètica a Blanes. Un espai físic al Carrer de la Fe, 15, creat per cuidar-te amb calma."],
        ["Tracte proper i personalitzat", "Aquí ningú és un número. Escoltem què necessita el teu cos i adaptem cada sessió a tu: la pressió, el ritme i la tècnica. Un tracte humà, professional i sense presses."],
        ["Benestar que perdura", "La Nuri s'ocupa principalment dels massatges i les teràpies de benestar. La Isa està centrada en estètica, neteges facials i tractaments facials i corporals."],
      ],
    },
    services: {
      eyebrow: "Serveis & Tarifes",
      lines: ["Tractaments", "pensats per a tu"],
      intro: "Consulta les tarifes actuals i reserva amb cita prèvia. Si no saps què triar, t'assessorem abans de confirmar.",
      cards: [["Massatges", "Massatges a Blanes"], ["Facial i corporal", "Estètica a Blanes"], ["Benestar", "Teràpies naturals"]],
      reserve: "Reservar",
      more: "Veure informació completa",
    },
  },
  en: {
    nav: { center: "Studio", services: "Services", gallery: "Gallery", reviews: "Reviews", contact: "Contact", call: "Call", open: "Open menu", close: "Close menu", language: "Language" },
    hero: {
      eyebrow: "Lluna Blanca · Blanes, Girona",
      lines: ["Massages,", "natural therapies", "and beauty treatments in Blanes."],
      description: "Lluna Blanca is a massage, natural therapy, wellness and beauty studio in Blanes. Nuri and Isa offer warm, professional and unhurried care.",
      call: "Call now",
      whatsapp: "Contact via WhatsApp",
      tagline: "Natural Therapies & Massage",
    },
    marquee: ["Lluna Blanca", "Massage", "Wellness", "Relaxation", "Blanes", "Natural Therapies", "Balance"],
    about: {
      eyebrow: "About Lluna Blanca",
      lines: ["The art of", "taking care of you,", "session by session."],
      chapters: [
        ["A space to reconnect", "Lluna Blanca is a massage, natural therapy and beauty studio in Blanes. A physical space at Carrer de la Fe, 15, created to care for you calmly."],
        ["Warm, personalised care", "Here, nobody is just a number. We listen to what your body needs and adapt each session to you: pressure, pace and technique. Human, professional care without rushing."],
        ["Wellbeing that lasts", "Nuri focuses mainly on massage and wellness therapies. Isa specialises in beauty, facial cleansing and facial and body treatments."],
      ],
    },
    services: {
      eyebrow: "Services & Prices",
      lines: ["Treatments", "designed for you"],
      intro: "Check our current prices and book by appointment. If you are unsure what to choose, we can advise you before confirming.",
      cards: [["Massage", "Massage in Blanes"], ["Face & body", "Beauty treatments in Blanes"], ["Wellness", "Natural therapies"]],
      reserve: "Book",
      more: "View full information",
    },
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
