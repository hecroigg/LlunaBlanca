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
  googleReviews: "https://search.google.com/local/reviews?placeid=ChIJ5XfufqYXuxIRUCHCxf_8Mbk",
  googleWriteReview: "https://search.google.com/local/writereview?placeid=ChIJ5XfufqYXuxIRUCHCxf_8Mbk",
  address: "Carrer de la Fe, 15",
  addressFull: "Carrer de la Fe, 15 · 17300 Blanes, Girona",
  postal: "17300 Blanes, Girona",
  hours: [
    { d: "Lunes – Viernes", h: "9:00 – 13:00 · 16:30 – 19:30" },
    { d: "Sábado", h: "Cerrado" },
    { d: "Domingo", h: "Cerrado" },
  ],
  mapEmbed:
    "https://www.google.com/maps?q=Carrer%20de%20la%20Fe%2015%2C%2017300%20Blanes%2C%20Girona&output=embed",
  mapDir:
    "https://maps.google.com/?daddr=Carrer%20de%20la%20Fe%2C%2015%2C%2017300%20Blanes%2C%20Girona%2C%20Spain",
};

const A = "https://customer-assets-agu9un31.emergentagent.net/job_bienestar-blanes/artifacts";
export const PHOTOS = {
  massage1: `${A}/1f69nl8l_unnamed-10.jpg`,
  massage2: `${A}/9nv7pkhv_unnamed-11.jpg`,
  room: `${A}/y9wruam5_unnamed.jpg`,
  manicure: `${A}/9kp94oc7_unnamed-6.jpg`,
  storefront: `${A}/50vufpzf_unnamed-4.jpg`,
};

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?crop=entropy&cs=srgb&fm=jpg&w=1600&q=90";

export const IMAGES = {
  hero: HERO_IMAGE,
  about1: PHOTOS.storefront,
  about2: PHOTOS.room,
  cta: PHOTOS.room,
};

export const GALLERY = [
  { src: PHOTOS.room, alt: "Sala de masaje del centro Lluna Blanca en Blanes" },
  { src: PHOTOS.storefront, alt: "Fachada de Lluna Blanca en Carrer de la Fe, Blanes", span: "tall" },
  { src: PHOTOS.massage1, alt: "Masaje descontracturante en Lluna Blanca" },
  { src: PHOTOS.manicure, alt: "Zona de manicura y estética", span: "tall" },
  { src: PHOTOS.massage2, alt: "Masaje con aceites en Blanes" },
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
  { quote: "Yo salgo siempre como nueva, grandes profesionales. Los masajes en manos de Nuri son algo que recomiendo vaya donde vaya. Si tuviera que dar el máximo de 10, yo le daba un 100. Para mí es indispensable en mi vida.", author: "Carol Moes", rating: 5, date: "Google · Hace 11 meses" },
  { quote: "Aconsejo este centro porque son profesionales en lo que hacen, trato muy cercano. Me encantó el masaje facial Kobido de Isabel, mi hija está muy contenta con Blanca.", author: "Esperanza Tienda", rating: 5, date: "Google · Hace 11 meses" },
  { quote: "En Lluna Blanca encuentras un lugar donde hacerte un buen masaje, una reflexología podal y hasta un masaje Kobido, y tratamientos de belleza. Todo en un mismo sitio, con precios accesibles y excelente servicio.", author: "Karina Chiappella", rating: 5, date: "Google · Hace 1 año" },
  { quote: "¡Tan feliz de haber llegado a este lugar! Nuri y sus manos de ángel. Da igual si te haces una sesión de reiki o un masaje, sales más bonita y con más luz. 10/10, el lugar y las personas que trabajan.", author: "Cintia", rating: 5, date: "Google · Hace 2 años" },
  { quote: "¡Súper recomendables los masajes descontracturantes! No sé qué haría mi espalda sin las manos de Nuri. Además, las chicas que trabajan en el centro son muy amables y cercanas.", author: "Ana Aguilera", rating: 5, date: "Google · Hace 3 años" },
  { quote: "Debido a mi artrosis necesito recuperación. Tanto Nuria con sus masajes como Isa con el baño de parafina, voy recuperando poco a poco elasticidad. Estoy muy contenta.", author: "Aqualia Fernández", rating: 5, date: "Google · Hace 3 años" },
  { quote: "Una maravilla de profesionales, tanto la atención como su trabajo, ¡de 10!", author: "Silvia Rodríguez Jimeno", rating: 5, date: "Google · Hace 1 año" },
  { quote: "¡Muy buen servicio! He salido como nuevo, sin duda repetiré. 👌", author: "Toni Ollé", rating: 5, date: "Google · Hace 1 año" },
  { quote: "Encantadoras las personas que están allí y muy profesionales cuando te atienden. Me he sentido como en casa.", author: "Macarena Caparrós", rating: 4, date: "Google · Hace 11 meses" },
  { quote: "Totalmente recomendable. Una paz, y las mejores en todo, trato muy personal.", author: "Valeria García", rating: 5, date: "Google · Hace 3 años" },
  { quote: "Me encanta cómo trabajan, ¡sales como nueva!", author: "Alexandra", rating: 5, date: "Google · Hace 8 meses" },
];

export const PROMOS = [
  { title: "Maderoterapia", offer: "5 sesiones + 1 gratis", price: "150 €", note: "Moldeado corporal completo" },
  { title: "Bono 3 masajes", offer: "Ahorra un 20%", price: "85 €", note: "Antes 105 € · a tu ritmo" },
  { title: "Pedicura completa", offer: "Cuidado spa de pies", price: "18 €", note: "Promoción del centro" },
  { title: "Reiki", offer: "Bono de 4 sesiones", price: "100 €", note: "Equilibrio energético" },
];

export const FAQS = [
  { q: "¿Es necesario pedir cita?", a: "Sí, trabajamos con cita previa para dedicarte toda la atención y adaptar la sesión a tus necesidades. Puedes reservar por teléfono o WhatsApp en unos segundos." },
  { q: "¿Qué ropa debo llevar?", a: "No necesitas nada especial. Te facilitamos todo lo necesario y podrás desvestirte con total intimidad. Recomendamos ropa cómoda para después de la sesión." },
  { q: "¿Qué masaje me recomendáis?", a: "Depende de lo que busques: el relajante es ideal para desconectar, el descontracturante para aliviar tensión muscular y el drenante o circulatorio para sentir ligereza. Si tienes dudas, te asesoramos antes de empezar." },
  { q: "¿Cuánto dura una sesión?", a: "La mayoría de masajes duran alrededor de 60 minutos. Las terapias específicas y tratamientos faciales varían entre 30 y 75 minutos según el servicio." },
  { q: "¿Dónde estáis y qué horario tenéis?", a: "Estamos en Carrer de la Fe, 15, en el centro de Blanes (Girona). Abrimos de lunes a viernes de 9:00 a 13:00 y de 16:30 a 19:30." },
];
