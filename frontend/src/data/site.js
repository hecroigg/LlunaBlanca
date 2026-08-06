// Datos editables de Lluna Blanca Blanes.
// Modifica precios, textos e imágenes libremente desde este archivo.

export const CONTACT = {
  name: "Lluna Blanca",
  city: "Blanes",
  tagline: "Terapias Naturales y Masajes",
  phone: "+34636604359",
  phoneDisplay: "636 604 359",
  whatsapp: "https://wa.me/34636604359",
  instagram: "https://www.instagram.com/llunablancablanes/",
  facebook: "",
  address: "Carrer de la Fe, 15",
  addressFull: "Carrer de la Fe, 15 · 17300 Blanes, Girona",
  postal: "17300 Blanes, Girona",
  hours: [
    { d: "Lunes – Viernes", h: "9:00 – 13:00" },
    { d: "Sábado", h: "Cerrado" },
    { d: "Domingo", h: "Cerrado" },
  ],
  mapEmbed:
    "https://www.google.com/maps?q=Carrer%20de%20la%20Fe%2015%2C%2017300%20Blanes%2C%20Girona&output=embed",
  mapDir:
    "https://maps.google.com/?daddr=Carrer%20de%20la%20Fe%2C%2015%2C%2017300%20Blanes%2C%20Girona%2C%20Spain",
};

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85",
  about1:
    "https://images.unsplash.com/photo-1651065213855-e6094f99ee65?crop=entropy&cs=srgb&fm=jpg&w=1100&q=85",
  about2:
    "https://images.unsplash.com/photo-1741522509438-a120c0bb5e88?crop=entropy&cs=srgb&fm=jpg&w=1100&q=85",
  cta: "https://images.unsplash.com/photo-1696841212541-449ca29397cc?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85",
};

export const GALLERY = [
  { src: "https://images.unsplash.com/photo-1700142360825-d21edc53c8db?crop=entropy&cs=srgb&fm=jpg&w=900&q=85", alt: "Sala de tratamiento luminosa", span: "tall" },
  { src: "https://images.unsplash.com/photo-1696841212541-449ca29397cc?crop=entropy&cs=srgb&fm=jpg&w=900&q=85", alt: "Masaje con piedras calientes" },
  { src: "https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?crop=entropy&cs=srgb&fm=jpg&w=900&q=85", alt: "Masaje de espalda" },
  { src: "https://images.unsplash.com/photo-1630835425197-50feeba99ecd?crop=entropy&cs=srgb&fm=jpg&w=900&q=85", alt: "Ambiente cálido y natural", span: "tall" },
  { src: "https://images.unsplash.com/photo-1610402601271-5b4bd5b3eba4?crop=entropy&cs=srgb&fm=jpg&w=900&q=85", alt: "Terapia con piedras y flores" },
  { src: "https://images.unsplash.com/photo-1741522509438-a120c0bb5e88?crop=entropy&cs=srgb&fm=jpg&w=900&q=85", alt: "Masaje con aceites" },
];

// Servicios reales de Lluna Blanca (lista de precios oficial). Edita libremente.
export const SERVICE_GROUPS = [
  {
    id: "masajes",
    label: "Masajes",
    intro: "Sesiones adaptadas a cada cuerpo para liberar tensión y recuperar el equilibrio.",
    items: [
      { name: "Masaje descontracturante", desc: "Alivia contracturas y tensión muscular profunda.", duration: "≈ 60 min", price: "35 €" },
      { name: "Masaje relajante", desc: "Maniobras suaves para calmar cuerpo y mente.", duration: "≈ 60 min", price: "35 €" },
      { name: "Masaje drenante", desc: "Estimula la circulación linfática y reduce la retención.", duration: "≈ 60 min", price: "35 €" },
      { name: "Masaje circulatorio", desc: "Activa el riego sanguíneo y da ligereza a las piernas.", duration: "≈ 60 min", price: "35 €" },
      { name: "Relajante y exfoliante", desc: "Masaje relajante con exfoliación corporal renovadora.", duration: "≈ 75 min", price: "45 €" },
      { name: "Bono 3 masajes (-20%)", desc: "Tres sesiones a tu ritmo con precio especial.", duration: "3 sesiones", price: "85 €" },
    ],
  },
  {
    id: "maderoterapia",
    label: "Maderoterapia & Presoterapia",
    intro: "Técnicas moldeadoras que reafirman, drenan y remodelan la silueta.",
    items: [
      { name: "Maderoterapia · 1 sesión", desc: "Moldeado corporal con instrumentos de madera.", duration: "≈ 60 min", price: "30 €" },
      { name: "Maderoterapia · 5 sesiones + 1 gratis", desc: "Bono completo para resultados visibles.", duration: "6 sesiones", price: "150 €" },
      { name: "Presoterapia · 1 sesión", desc: "Drenaje por presión de aire, piernas ligeras.", duration: "≈ 30 min", price: "15 €" },
      { name: "Presoterapia · 4 sesiones", desc: "Bono de drenaje progresivo.", duration: "4 sesiones", price: "50 €" },
      { name: "Presoterapia + vendas frías", desc: "Sesión con efecto reafirmante y frío activo.", duration: "≈ 45 min", price: "25 €" },
      { name: "4 sesiones + vendas frías", desc: "Bono intensivo remodelante.", duration: "4 sesiones", price: "90 €" },
    ],
  },
  {
    id: "terapias",
    label: "Terapias de bienestar",
    intro: "Prácticas energéticas y reflejas para reconectar con la calma.",
    items: [
      { name: "Reiki · 1 sesión", desc: "Equilibrio energético y relajación profunda.", duration: "≈ 60 min", price: "30 €" },
      { name: "Reiki · 4 sesiones", desc: "Programa de armonización energética.", duration: "4 sesiones", price: "100 €" },
      { name: "Reflexología · 1 sesión", desc: "Presión en puntos del pie para todo el cuerpo.", duration: "≈ 45 min", price: "25 €" },
      { name: "Reflexología · 3 sesiones", desc: "Bono de equilibrio y descanso.", duration: "3 sesiones", price: "70 €" },
      { name: "Tarot & Numerología", desc: "Sesiones de acompañamiento con nuestra experta.", duration: "30 – 60 min", price: "Consultar" },
    ],
  },
  {
    id: "estetica",
    label: "Estética & Facial",
    intro: "Cuidado del rostro y las manos con productos de calidad.",
    items: [
      { name: "Limpieza facial completa", desc: "Higiene profunda y luminosidad para tu piel.", duration: "≈ 60 min", price: "30 €" },
      { name: "Facial + tratamiento específico", desc: "Limpieza con activo personalizado.", duration: "≈ 75 min", price: "35 €" },
      { name: "Masaje facial Kobido", desc: "Lifting natural japonés que reafirma el rostro.", duration: "≈ 50 min", price: "25 €" },
      { name: "Hilos de colágeno", desc: "Tratamiento tensor y antiedad.", duration: "≈ 45 min", price: "55 €" },
      { name: "Manicura completa", desc: "Cuidado y esmaltado de manos.", duration: "≈ 45 min", price: "12 €" },
      { name: "Pedicura spa", desc: "Cuidado relajante de pies. Desde.", duration: "≈ 45 min", price: "15 €" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Un trato cercano y muy profesional. Salí completamente renovada después del masaje descontracturante. Repetiré sin duda.",
    author: "Reseña de cliente",
    note: "Pega aquí una reseña real de Google / Instagram",
  },
  {
    quote:
      "El ambiente invita a desconectar desde el primer momento. Cada sesión está pensada para ti. El mejor rincón de bienestar en Blanes.",
    author: "Reseña de cliente",
    note: "Pega aquí una reseña real de Google / Instagram",
  },
  {
    quote:
      "Llevaba tiempo con dolor de espalda y noté la diferencia enseguida. Manos expertas y mucha atención al detalle.",
    author: "Reseña de cliente",
    note: "Pega aquí una reseña real de Google / Instagram",
  },
];

export const FAQS = [
  { q: "¿Es necesario pedir cita?", a: "Sí, trabajamos con cita previa para dedicarte toda la atención y adaptar la sesión a tus necesidades. Puedes reservar por teléfono o WhatsApp en unos segundos." },
  { q: "¿Qué ropa debo llevar?", a: "No necesitas nada especial. Te facilitamos todo lo necesario y podrás desvestirte con total intimidad. Recomendamos ropa cómoda para después de la sesión." },
  { q: "¿Qué masaje me recomendáis?", a: "Depende de lo que busques: el relajante es ideal para desconectar, el descontracturante para aliviar tensión muscular y el drenante o circulatorio para sentir ligereza. Si tienes dudas, te asesoramos antes de empezar." },
  { q: "¿Cuánto dura una sesión?", a: "La mayoría de masajes duran alrededor de 60 minutos. Las terapias específicas y tratamientos faciales varían entre 30 y 75 minutos según el servicio." },
  { q: "¿Dónde estáis y qué horario tenéis?", a: "Estamos en Carrer de la Fe, 15, en el centro de Blanes (Girona). Abrimos de lunes a viernes de 9:00 a 13:00." },
];
