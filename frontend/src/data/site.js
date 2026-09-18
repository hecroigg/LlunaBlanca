// Contenido confirmado de Lluna Blanca. Los precios proceden de las tarifas oficiales.

export const CONTACT = {
  name: "Lluna Blanca",
  city: "Blanes",
  tagline: "Terapias Naturales y Masajes",
  phone: "+34636604359",
  phoneDisplay: "636 604 359",
  whatsapp: "https://wa.me/34636604359?text=Hola%20Lluna%20Blanca%2C%20quiero%20consultar%20disponibilidad%20para%20una%20cita.",
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

export const PHOTOS = {
  massage1: "/images/masaje-lluna-blanca.webp",
  massage2: "/images/masaje-aceites-blanes.webp",
  room: "/images/sala-masajes-blanes.webp",
  manicure: "/images/estetica-manicura-blanes.webp",
  storefront: "/images/centro-lluna-blanca-blanes.webp",
};

export const IMAGES = {
  hero: "/images/masaje-relajante-blanes.webp",
  about1: PHOTOS.storefront,
  about2: PHOTOS.room,
  cta: PHOTOS.room,
};

export const GALLERY = [
  { src: PHOTOS.room, alt: "Sala de masajes de Lluna Blanca en Blanes" },
  { src: PHOTOS.storefront, alt: "Entrada de Lluna Blanca en Carrer de la Fe, Blanes", span: "tall" },
  { src: PHOTOS.massage1, alt: "Sesión de masaje en Lluna Blanca" },
  { src: PHOTOS.manicure, alt: "Espacio de manicura y estética de Lluna Blanca", span: "tall" },
  { src: PHOTOS.massage2, alt: "Preparación de una sesión de masaje con aceites" },
];

export const SERVICE_GROUPS = [
  {
    id: "masajes",
    label: "Masajes",
    intro: "Sesiones adaptadas a cada persona, con un ritmo y una presión ajustados a lo que necesitas.",
    landing: "/masajes-blanes/",
    items: [
      { name: "Masaje descontracturante", desc: "Trabajo manual centrado en zonas con tensión acumulada.", detail: "Cita previa", price: "40 €" },
      { name: "Masaje relajante", desc: "Maniobras suaves y continuas para favorecer la calma y la desconexión.", detail: "Cita previa", price: "40 €" },
      { name: "Masaje drenante – circulatorio", desc: "Movimientos rítmicos orientados a aportar una sensación de ligereza.", detail: "Cita previa", price: "40 €" },
      { name: "Ritual peeling corporal", desc: "Ritual de exfoliación corporal para cuidar y suavizar la piel.", detail: "Cita previa", price: "45 €" },
      { name: "Bono 3 masajes", desc: "Tres sesiones para utilizar a tu ritmo. Precio habitual: 120 €.", detail: "3 sesiones", price: "100 €" },
    ],
  },
  {
    id: "maderoterapia",
    label: "Maderoterapia & Presoterapia",
    intro: "Tratamientos corporales disponibles de forma individual o en bonos de varias sesiones.",
    landing: "/estetica-blanes/",
    items: [
      { name: "Maderoterapia · 1 sesión", desc: "Técnica manual corporal realizada con utensilios de madera.", detail: "1 sesión", price: "30 €" },
      { name: "Maderoterapia · 5 sesiones + 1 gratis", desc: "Bono completo de seis sesiones al precio de cinco.", detail: "6 sesiones", price: "150 €" },
      { name: "Presoterapia · 1 sesión", desc: "Sesión de presoterapia para el cuidado y bienestar corporal.", detail: "1 sesión", price: "15 €" },
      { name: "Presoterapia · 4 sesiones", desc: "Bono con un 10 % de descuento. Precio habitual: 60 €.", detail: "4 sesiones", price: "54 €" },
      { name: "Presoterapia · 6 sesiones", desc: "Bono con un 15 % de descuento. Precio habitual: 90 €.", detail: "6 sesiones", price: "76 €" },
      { name: "Presoterapia · 8 sesiones", desc: "Bono con un 20 % de descuento. Precio habitual: 120 €.", detail: "8 sesiones", price: "96 €" },
      { name: "Vendas frías", desc: "Tratamiento corporal complementario con vendas frías.", detail: "Tratamiento", price: "20 €" },
    ],
  },
  {
    id: "radiofrecuencia",
    label: "Radiofrecuencia",
    intro: "Tratamientos estéticos faciales y corporales con masaje complementario.",
    landing: "/estetica-blanes/",
    items: [
      { name: "Facial · 1 sesión", desc: "Radiofrecuencia facial con masaje activador.", detail: "1 sesión", price: "45 €" },
      { name: "Facial · 4 sesiones", desc: "Radiofrecuencia facial con masaje activador y 10 % de descuento.", detail: "4 sesiones", price: "162 €" },
      { name: "Facial · 6 sesiones", desc: "Radiofrecuencia facial con masaje activador y 15 % de descuento.", detail: "6 sesiones", price: "229 €" },
      { name: "Facial · 8 sesiones", desc: "Radiofrecuencia facial con masaje activador y 20 % de descuento.", detail: "8 sesiones", price: "288 €" },
      { name: "Corporal · 1 sesión", desc: "Radiofrecuencia corporal con masaje reductor.", detail: "1 sesión", price: "50 €" },
      { name: "Corporal · 4 sesiones", desc: "Radiofrecuencia corporal con masaje reductor y 10 % de descuento.", detail: "4 sesiones", price: "180 €" },
      { name: "Corporal · 6 sesiones", desc: "Radiofrecuencia corporal con masaje reductor y 15 % de descuento.", detail: "6 sesiones", price: "255 €" },
      { name: "Corporal · 8 sesiones", desc: "Radiofrecuencia corporal con masaje reductor y 20 % de descuento.", detail: "8 sesiones", price: "320 €" },
    ],
  },
  {
    id: "terapias",
    label: "Terapias de bienestar",
    intro: "Sesiones individuales de reflexología, reiki y acompañamiento personal.",
    landing: "/terapias-naturales-blanes/",
    items: [
      { name: "Reflexología · 1 sesión", desc: "Trabajo manual en puntos reflejos del pie orientado al bienestar general.", detail: "1 sesión", price: "30 €" },
      { name: "Reiki · 1 sesión", desc: "Sesión orientada a la relajación y al equilibrio personal.", detail: "1 sesión", price: "30 €" },
      { name: "Tarot · sesión de 1 hora", desc: "Sesión individual de acompañamiento.", detail: "1 hora", price: "60 €" },
      { name: "Tarot · sesión de 30 min", desc: "Sesión individual de acompañamiento.", detail: "30 min", price: "40 €" },
    ],
  },
  {
    id: "estetica",
    label: "Estética & Facial",
    intro: "Cuidado facial, manicura y pedicura con opciones para distintas necesidades.",
    landing: "/estetica-blanes/",
    items: [
      { name: "Higiene completa", desc: "Limpieza facial completa para el cuidado habitual de la piel.", detail: "Cita previa", price: "32 €" },
      { name: "Ritual Vitality-Aquah", desc: "Ritual facial de hidratación y vitalidad.", detail: "Cita previa", price: "38 €" },
      { name: "Ritual Gold", desc: "Ritual facial de cuidado intensivo.", detail: "Cita previa", price: "40 €" },
      { name: "Ritual Vit C", desc: "Ritual facial con vitamina C.", detail: "Cita previa", price: "38 €" },
      { name: "Masaje facial ritual lifting", desc: "Masaje facial manual dentro de un ritual de cuidado.", detail: "Cita previa", price: "30 €" },
      { name: "Hilos de colágeno · 1.ª sesión", desc: "Tratamiento estético facial con hilos de colágeno.", detail: "1 sesión", price: "55 €" },
      { name: "Lifting, tinte de pestañas y laminado de cejas", desc: "Servicio combinado para el cuidado de pestañas y cejas.", detail: "Cita previa", price: "32 €" },
      { name: "Manicura · tradicional completa", desc: "Cuidado y esmaltado tradicional de manos.", detail: "Cita previa", price: "10 €" },
      { name: "Manicura · semipermanente", desc: "Manicura con esmaltado semipermanente.", detail: "Cita previa", price: "17 €" },
      { name: "Manicura · acrigel / soft gel", desc: "Manicura con acabado acrigel o soft gel.", detail: "Cita previa", price: "22 €" },
      { name: "Parafina · 1 sesión", desc: "Tratamiento de parafina para el cuidado de las manos.", detail: "1 sesión", price: "10 €" },
      { name: "Parafina · 6 sesiones", desc: "Bono de seis sesiones de parafina.", detail: "6 sesiones", price: "50 €" },
      { name: "Pedicura · pedi spa", desc: "Cuidado spa para los pies.", detail: "Cita previa", price: "17 €" },
      { name: "Pedicura · pedi spa esmalte", desc: "Pedicura spa con esmaltado.", detail: "Cita previa", price: "20 €" },
      { name: "Pedicura · pedi spa permanente", desc: "Pedicura spa con esmaltado permanente.", detail: "Cita previa", price: "24 €" },
    ],
  },
  {
    id: "aparatologia",
    label: "Aparatología",
    intro: "Servicios de aparatología estética que se valoran de forma personalizada.",
    landing: "/estetica-blanes/",
    items: [
      { name: "Láser-depilación", desc: "Servicio de depilación láser con cita previa.", detail: "Cita previa", price: "Consultar" },
      { name: "Ultrasonidos", desc: "Tratamiento estético con ultrasonidos.", detail: "Cita previa", price: "Consultar" },
      { name: "Radiofrecuencia facial-corporal", desc: "Tratamiento de radiofrecuencia facial o corporal.", detail: "Cita previa", price: "Consultar" },
    ],
  },
];

export const SERVICE_PAGES = {
  "/masajes-blanes/": {
    slug: "masajes-blanes",
    eyebrow: "Centro de masajes en Blanes",
    title: "Masajes en Blanes adaptados a ti",
    description: "Masaje relajante, descontracturante, drenante-circulatorio y ritual peeling corporal en Lluna Blanca, Blanes. Consulta disponibilidad por WhatsApp.",
    intro: "En Lluna Blanca cada masaje se adapta a cómo llegas ese día. Antes de empezar hablamos contigo para ajustar el enfoque, el ritmo y la presión, siempre con un trato cercano y sin prisas.",
    groupIds: ["masajes"],
    highlights: [
      "Masaje relajante para quien busca parar y desconectar.",
      "Masaje descontracturante centrado en zonas con tensión acumulada.",
      "Masaje drenante-circulatorio con movimientos rítmicos y suaves.",
    ],
    faqs: [
      { q: "¿Qué diferencia hay entre el masaje relajante y el descontracturante?", a: "El relajante utiliza un ritmo más suave y continuo. El descontracturante se centra más en las zonas donde notas tensión. Si no sabes cuál elegir, puedes explicarnos cómo te encuentras y te orientamos antes de la sesión." },
      { q: "¿Cómo reservar un masaje en Lluna Blanca?", a: "Puedes consultar disponibilidad por WhatsApp o llamar al 636 604 359. Trabajamos con cita previa para dedicar a cada persona el tiempo necesario." },
      { q: "¿Dónde se realizan los masajes?", a: "En nuestro centro de Carrer de la Fe, 15, en Blanes, Girona." },
    ],
  },
  "/estetica-blanes/": {
    slug: "estetica-blanes",
    eyebrow: "Estética facial y corporal en Blanes",
    title: "Tratamientos de estética en Blanes",
    description: "Limpieza facial, rituales faciales, radiofrecuencia, presoterapia, maderoterapia, manicura y pedicura en Lluna Blanca, Blanes.",
    intro: "Isa cuida la parte de estética de Lluna Blanca con servicios faciales y corporales, manicura, pedicura y aparatología. Puedes consultarnos qué opción encaja mejor contigo antes de reservar.",
    groupIds: ["estetica", "radiofrecuencia", "maderoterapia", "aparatologia"],
    highlights: [
      "Higiene facial completa y rituales de cuidado facial.",
      "Radiofrecuencia facial y corporal en sesiones o bonos.",
      "Manicura, pedicura, presoterapia y maderoterapia.",
    ],
    faqs: [
      { q: "¿Ofrecéis limpieza facial en Blanes?", a: "Sí. La higiene completa tiene un precio de 32 €. También ofrecemos distintos rituales faciales y masaje facial ritual lifting." },
      { q: "¿Qué tratamientos de estética ofrece Lluna Blanca?", a: "La oferta incluye tratamientos faciales, radiofrecuencia facial y corporal, presoterapia, maderoterapia, manicura, pedicura y otros servicios de aparatología." },
      { q: "¿Puedo consultar qué tratamiento elegir?", a: "Sí. Escríbenos por WhatsApp o llámanos y cuéntanos qué tipo de cuidado buscas. Te explicaremos las opciones disponibles sin compromiso." },
    ],
  },
  "/terapias-naturales-blanes/": {
    slug: "terapias-naturales-blanes",
    eyebrow: "Terapias naturales y bienestar en Blanes",
    title: "Terapias naturales en Blanes",
    description: "Sesiones de reflexología y reiki en Lluna Blanca, centro de bienestar en Blanes. Atención cercana y reserva por WhatsApp o teléfono.",
    intro: "Nuri acompaña las sesiones de terapias y bienestar desde una atención cercana y personalizada. En Lluna Blanca puedes reservar reflexología o reiki en un ambiente tranquilo en el centro de Blanes.",
    groupIds: ["terapias"],
    highlights: [
      "Reflexología mediante trabajo manual en puntos reflejos del pie.",
      "Sesiones de reiki orientadas a la calma y al bienestar personal.",
      "Atención individual y con cita previa en Blanes.",
    ],
    faqs: [
      { q: "¿Qué terapias naturales ofrece Lluna Blanca?", a: "Actualmente puedes reservar sesiones de reflexología y reiki. Si tienes dudas sobre cuál elegir, consúltanos antes de pedir cita." },
      { q: "¿Necesito reservar antes de ir?", a: "Sí. Trabajamos con cita previa. Puedes contactar por WhatsApp o por teléfono en el 636 604 359." },
      { q: "¿Dónde está Lluna Blanca?", a: "Estamos en Carrer de la Fe, 15, 17300 Blanes, Girona." },
    ],
  },
};

export const TESTIMONIALS = [
  { quote: "Siempre salgo como nueva. Grandes profesionales y un trato que recomiendo vaya donde vaya.", author: "Cliente de Lluna Blanca", rating: 5, date: "Reseña publicada en Google" },
  { quote: "Aconsejo este centro porque son profesionales en lo que hacen y ofrecen un trato muy cercano.", author: "Cliente de Lluna Blanca", rating: 5, date: "Reseña publicada en Google" },
  { quote: "Masajes, reflexología y tratamientos de belleza en un mismo sitio, con precios accesibles y excelente servicio.", author: "Cliente de Lluna Blanca", rating: 5, date: "Reseña publicada en Google" },
  { quote: "Muy feliz de haber llegado a este lugar. Nuri tiene unas manos increíbles y el ambiente transmite mucha calma.", author: "Cliente de Lluna Blanca", rating: 5, date: "Reseña publicada en Google" },
  { quote: "Súper recomendables los masajes descontracturantes. Además, las chicas del centro son muy amables y cercanas.", author: "Cliente de Lluna Blanca", rating: 5, date: "Reseña publicada en Google" },
  { quote: "Una maravilla de profesionales, tanto la atención como su trabajo, ¡de 10!", author: "Cliente de Lluna Blanca", rating: 5, date: "Reseña publicada en Google" },
  { quote: "Muy buen servicio. He salido como nuevo y sin duda repetiré.", author: "Cliente de Lluna Blanca", rating: 5, date: "Reseña publicada en Google" },
  { quote: "Encantadoras y muy profesionales. Me he sentido como en casa.", author: "Cliente de Lluna Blanca", rating: 4, date: "Reseña publicada en Google" },
  { quote: "Totalmente recomendable. Mucha paz y un trato muy personal.", author: "Cliente de Lluna Blanca", rating: 5, date: "Reseña publicada en Google" },
  { quote: "Me encanta cómo trabajan, ¡sales como nueva!", author: "Cliente de Lluna Blanca", rating: 5, date: "Reseña publicada en Google" },
];

export const PROMOS = [
  { title: "Maderoterapia", offer: "5 sesiones + 1 gratis", price: "150 €", note: "Bono de seis sesiones" },
  { title: "Bono 3 masajes", offer: "Precio especial", price: "100 €", note: "Antes 120 € · a tu ritmo" },
  { title: "Presoterapia", offer: "Bono de 4 sesiones", price: "54 €", note: "10 % de descuento" },
  { title: "Radiofrecuencia facial", offer: "Bono de 4 sesiones", price: "162 €", note: "Con masaje activador · 10 % de descuento" },
];

export const FAQS = [
  { q: "¿Qué tipos de masaje ofrece Lluna Blanca?", a: "Ofrecemos masaje relajante, descontracturante y drenante-circulatorio, además de ritual peeling corporal y un bono de tres masajes. Antes de empezar adaptamos la sesión a lo que necesitas." },
  { q: "¿Qué diferencia hay entre un masaje relajante y uno descontracturante?", a: "El relajante tiene un ritmo más suave y continuo, pensado para desconectar. El descontracturante se centra más en las zonas donde notas tensión. Si tienes dudas, te orientamos antes de la sesión." },
  { q: "¿Ofrecéis tratamientos faciales y estética?", a: "Sí. Isa realiza higiene facial completa, rituales faciales, masaje facial, radiofrecuencia, presoterapia, maderoterapia, manicura, pedicura y otros tratamientos estéticos." },
  { q: "¿Cómo puedo reservar una cita?", a: "Puedes escribirnos por WhatsApp o llamar al 636 604 359. No tenemos reserva online: confirmamos contigo la disponibilidad de forma personal." },
  { q: "¿Dónde está Lluna Blanca?", a: "Estamos en Carrer de la Fe, 15, 17300 Blanes, Girona. En la sección de contacto encontrarás el mapa y el enlace para llegar." },
  { q: "¿Quién realiza los tratamientos?", a: "Nuri está especializada principalmente en masajes y terapias de bienestar. Isa se ocupa de estética, limpiezas faciales y tratamientos faciales y corporales." },
];
