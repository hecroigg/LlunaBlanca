import { CONTACT, SERVICE_GROUPS, SERVICE_PAGES } from './site';
import { COPY } from '../context/LanguageContext';

export const SITE_URL = 'https://www.llunablancablanes.com';
export const LANGUAGES = ['es', 'ca', 'en'];
export const ROUTES = {
  home: { es: '/', ca: '/ca/', en: '/en/' },
  massages: { es: '/masajes-blanes/', ca: '/ca/massatges-blanes/', en: '/en/massage-blanes/' },
  beauty: { es: '/estetica-blanes/', ca: '/ca/estetica-blanes/', en: '/en/beauty-blanes/' },
  therapies: { es: '/terapias-naturales-blanes/', ca: '/ca/terapies-naturals-blanes/', en: '/en/natural-therapies-blanes/' },
  relaxing: { es: '/masajes-blanes/relajante/', ca: '/ca/massatges-blanes/relaxant/', en: '/en/massage-blanes/relaxing/' },
  tension: { es: '/masajes-blanes/descontracturante/', ca: '/ca/massatges-blanes/descontracturant/', en: '/en/massage-blanes/tension-release/' },
  facial: { es: '/estetica-blanes/limpieza-facial/', ca: '/ca/estetica-blanes/higiene-facial/', en: '/en/beauty-blanes/facial-cleansing/' },
  legal: { es: '/aviso-legal/', ca: '/ca/avis-legal/', en: '/en/legal-notice/' },
  privacy: { es: '/privacidad/', ca: '/ca/privacitat/', en: '/en/privacy/' },
  cookies: { es: '/cookies/', ca: '/ca/cookies/', en: '/en/cookies/' },
};
export const routeFor = (key, lang) => ROUTES[key]?.[lang] || ROUTES.home[lang];
export const resolveRoute = (path = '/') => {
  const normalized = path.endsWith('/') ? path : `${path}/`;
  for (const [key, versions] of Object.entries(ROUTES)) {
    for (const [language, url] of Object.entries(versions)) if (url === normalized) return { key, language, path: url };
  }
  return { key: '404', language: path.startsWith('/ca/') ? 'ca' : path.startsWith('/en/') ? 'en' : 'es', path: normalized };
};
export const bookingUrl = (language, treatment) => {
  const messages = {
    es: treatment ? `Hola Lluna Blanca, quisiera consultar disponibilidad para ${treatment}.` : 'Hola Lluna Blanca, quisiera consultar disponibilidad para una cita.',
    ca: treatment ? `Hola Lluna Blanca, voldria consultar disponibilitat per a ${treatment}.` : 'Hola Lluna Blanca, voldria consultar disponibilitat per a una cita.',
    en: treatment ? `Hello Lluna Blanca, I would like to ask about availability for ${treatment}.` : 'Hello Lluna Blanca, I would like to ask about appointment availability.',
  };
  return `https://wa.me/${CONTACT.phone.replace('+', '')}?text=${encodeURIComponent(messages[language])}`;
};

export const UI = {
 es: {
  eyebrow: 'TU ESPACIO DE BIENESTAR EN BLANES', heroA: 'Un momento para ti,', heroB: 'un espacio para cuidarte.', heroDescription: 'Masajes, terapias naturales y estética en Blanes. Nuri e Isa te acompañan con un trato cercano y sin prisas.',
  book: 'Reservar cita', explore: 'Ver tratamientos', appointment: 'Con cita previa', personal: 'Atención personalizada', location: 'Blanes, Girona', skip: 'Saltar al contenido', home: 'Inicio', from: 'Desde', consult: 'Consultar', allPrices: 'Todos los tratamientos y precios', category: 'Explora nuestros servicios', servicesTitle: '¿Cómo te apetece cuidarte?', serviceIntro: 'Elige tu momento. Consulta los tratamientos, descubre sus precios y pregúntanos por una cita.',
  categories: ['Masajes', 'Estética y belleza', 'Terapias naturales'], categoryDescriptions: ['Relajante, descontracturante y drenante-circulatorio. Un cuidado adaptado a ti.', 'Higiene facial, rituales, cuidado corporal, manicura y pedicura.', 'Reflexología y reiki para dedicar un espacio a tu bienestar.'],
  featured: 'ENCUENTRA TU MOMENTO', featuredTitle: 'Tres formas de empezar', featuredIntro: 'Una pausa para desconectar, un masaje para zonas con tensión o un cuidado facial.', details: 'Ver tratamiento', tariffNote: 'Precios publicados del centro. Consulta la duración y confirma disponibilidad al reservar.',
  teamEyebrow: 'EL LADO HUMANO DE LLUNA BLANCA', teamTitle: 'Nuri e Isa. Cuidarte empieza por escucharte.', teamIntro: 'Un centro cercano en Carrer de la Fe, 15. Nos cuentas qué necesitas y te orientamos antes de elegir tu sesión.', nuri: 'Masajes y terapias de bienestar', nuriText: 'Nuri se ocupa principalmente de los masajes, la reflexología y el reiki. El ritmo y la presión del masaje se adaptan a cada persona.', isa: 'Estética facial y corporal', isaText: 'Isa cuida la parte de estética: higiene y rituales faciales, tratamientos corporales, manicura y pedicura.',
  values: [['A tu ritmo', 'Sesiones con cita previa y un trato cercano.'], ['Todo en un mismo espacio', 'Masajes, bienestar y estética en Blanes.'], ['Puedes preguntar primero', 'Te orientamos por teléfono o WhatsApp antes de reservar.']],
  galleryTitle: 'Un espacio para bajar el ritmo', galleryText: 'Fotografías reales de nuestro centro y nuestros tratamientos.', reviewsTitle: 'Conoce las experiencias de quienes nos visitan', reviewsText: 'Consulta las opiniones publicadas en el perfil de Google de Lluna Blanca.', reviews: 'Ver opiniones en Google', writeReview: 'Compartir mi experiencia',
  contactTitle: 'Nos encontrarás en Blanes.', directions: 'Cómo llegar', loadMap: 'Ver mapa de Google', mapNote: 'El mapa se carga cuando lo solicitas y conecta con Google.', finalA: 'Tu próximo momento', finalB: 'de bienestar empieza aquí.', finalText: 'Escríbenos o llámanos. Confirmamos contigo la disponibilidad de forma personal.',
  treatments: 'Tratamientos y tarifas', session: 'Qué esperar de tu visita', sessionSteps: [['Cuéntanos qué buscas', 'Al consultar la cita, explícanos el tipo de cuidado que necesitas.'], ['Elige con nuestra ayuda', 'Te orientamos sobre las opciones. Consulta la duración antes de confirmar.'], ['Ven con cita confirmada', 'Te atendemos en nuestro centro de Carrer de la Fe, 15, en Blanes.']], related: 'También te puede interesar', back: 'Volver al inicio', healthNote: 'Los servicios de bienestar no sustituyen la atención sanitaria. Si tienes una condición de salud, consulta con tu profesional sanitario antes de elegir una sesión.',
  legalTitles: { legal: 'Aviso legal', privacy: 'Política de privacidad', cookies: 'Política de cookies' }, notFound: 'Esta página no está aquí.', notFoundText: 'Puedes volver al inicio o consultar nuestros tratamientos.',
  imageAlts: ['Sesión de masaje en Lluna Blanca, Blanes', 'Sala de masajes de Lluna Blanca en Blanes', 'Espacio de manicura y estética de Lluna Blanca', 'Entrada de Lluna Blanca en Carrer de la Fe, 15, Blanes'],
  cookie: { title: 'Tu privacidad, a tu elección', text: 'Recordamos tu elección con una cookie necesaria. Los servicios opcionales solo se activan con tu permiso.', accept: 'Aceptar', reject: 'Rechazar', settings: 'Gestionar cookies', save: 'Guardar preferencias', description: 'Puedes cambiar tu elección desde el pie de página.', necessary: 'Cookies necesarias', necessaryText: 'Recuerdan tu elección durante un máximo de 12 meses.', analytics: 'Analítica opcional', analyticsText: 'No hay herramientas analíticas opcionales instaladas en el código actual.', marketing: 'Marketing opcional', marketingText: 'No utilizamos cookies publicitarias.', close: 'Cerrar' },
 },
 ca: {
  eyebrow: 'EL TEU ESPAI DE BENESTAR A BLANES', heroA: 'Un moment per a tu,', heroB: 'un espai per cuidar-te.', heroDescription: 'Massatges, teràpies naturals i estètica a Blanes. La Nuri i la Isa t’acompanyen amb un tracte proper i sense presses.',
  book: 'Reservar cita', explore: 'Veure tractaments', appointment: 'Amb cita prèvia', personal: 'Atenció personalitzada', location: 'Blanes, Girona', skip: 'Saltar al contingut', home: 'Inici', from: 'Des de', consult: 'Consultar', allPrices: 'Tots els tractaments i preus', category: 'Explora els nostres serveis', servicesTitle: 'Com et ve de gust cuidar-te?', serviceIntro: 'Tria el teu moment. Consulta els tractaments, descobreix els preus i pregunta’ns per una cita.',
  categories: ['Massatges', 'Estètica i bellesa', 'Teràpies naturals'], categoryDescriptions: ['Relaxant, descontracturant i drenant-circulatori. Un tracte adaptat a tu.', 'Higiene facial, rituals, cura corporal, manicura i pedicura.', 'Reflexologia i reiki per dedicar un espai al teu benestar.'],
  featured: 'TROBA EL TEU MOMENT', featuredTitle: 'Tres maneres de començar', featuredIntro: 'Una pausa per desconnectar, un massatge per a zones amb tensió o una cura facial.', details: 'Veure tractament', tariffNote: 'Preus publicats del centre. Consulta la durada i confirma disponibilitat en reservar.',
  teamEyebrow: 'EL COSTAT HUMÀ DE LLUNA BLANCA', teamTitle: 'Nuri i Isa. Cuidar-te comença per escoltar-te.', teamIntro: 'Un centre proper al Carrer de la Fe, 15. Ens expliques què necessites i t’orientem abans de triar la sessió.', nuri: 'Massatges i teràpies de benestar', nuriText: 'La Nuri s’ocupa principalment dels massatges, la reflexologia i el reiki. El ritme i la pressió del massatge s’adapten a cada persona.', isa: 'Estètica facial i corporal', isaText: 'La Isa cuida la part d’estètica: higiene i rituals facials, tractaments corporals, manicura i pedicura.',
  values: [['Al teu ritme', 'Sessions amb cita prèvia i un tracte proper.'], ['Tot en un mateix espai', 'Massatges, benestar i estètica a Blanes.'], ['Pots preguntar primer', 'T’orientem per telèfon o WhatsApp abans de reservar.']],
  galleryTitle: 'Un espai per baixar el ritme', galleryText: 'Fotografies reals del nostre centre i dels nostres tractaments.', reviewsTitle: 'Coneix les experiències de qui ens visita', reviewsText: 'Consulta les opinions publicades al perfil de Google de Lluna Blanca.', reviews: 'Veure opinions a Google', writeReview: 'Compartir la meva experiència',
  contactTitle: 'Ens trobaràs a Blanes.', directions: 'Com arribar-hi', loadMap: 'Veure mapa de Google', mapNote: 'El mapa es carrega quan el demanes i connecta amb Google.', finalA: 'El teu pròxim moment', finalB: 'de benestar comença aquí.', finalText: 'Escriu-nos o truca’ns. Confirmem amb tu la disponibilitat de manera personal.',
  treatments: 'Tractaments i tarifes', session: 'Què esperar de la teva visita', sessionSteps: [['Explica’ns què busques', 'En consultar la cita, explica’ns el tipus de cura que necessites.'], ['Tria amb la nostra ajuda', 'T’orientem sobre les opcions. Consulta la durada abans de confirmar.'], ['Vine amb cita confirmada', 'T’atenem al nostre centre del Carrer de la Fe, 15, a Blanes.']], related: 'També et pot interessar', back: 'Tornar a l’inici', healthNote: 'Els serveis de benestar no substitueixen l’atenció sanitària. Si tens una condició de salut, consulta amb el teu professional sanitari abans de triar una sessió.',
  legalTitles: { legal: 'Avís legal', privacy: 'Política de privacitat', cookies: 'Política de cookies' }, notFound: 'Aquesta pàgina no és aquí.', notFoundText: 'Pots tornar a l’inici o consultar els nostres tractaments.',
  imageAlts: ['Sessió de massatge a Lluna Blanca, Blanes', 'Sala de massatges de Lluna Blanca a Blanes', 'Espai de manicura i estètica de Lluna Blanca', 'Entrada de Lluna Blanca al Carrer de la Fe, 15, Blanes'],
  cookie: { title: 'La teva privacitat, tu tries', text: 'Recordem la teva elecció amb una cookie necessària. Els serveis opcionals només s’activen amb el teu permís.', accept: 'Acceptar', reject: 'Rebutjar', settings: 'Gestionar cookies', save: 'Desar preferències', description: 'Pots canviar la teva elecció des del peu de pàgina.', necessary: 'Cookies necessàries', necessaryText: 'Recorden la teva elecció durant un màxim de 12 mesos.', analytics: 'Analítica opcional', analyticsText: 'No hi ha eines analítiques opcionals instal·lades al codi actual.', marketing: 'Màrqueting opcional', marketingText: 'No utilitzem cookies publicitàries.', close: 'Tancar' },
 },
 en: {
  eyebrow: 'YOUR WELLBEING SPACE IN BLANES', heroA: 'A moment for you,', heroB: 'a space to feel cared for.', heroDescription: 'Massage, natural therapies and beauty treatments in Blanes. Warm, unhurried care with Nuri and Isa.',
  book: 'Book an appointment', explore: 'Explore treatments', appointment: 'By appointment', personal: 'Personalised care', location: 'Blanes, Girona', skip: 'Skip to content', home: 'Home', from: 'From', consult: 'Ask for prices', allPrices: 'All treatments and prices', category: 'Explore our services', servicesTitle: 'How would you like to feel cared for?', serviceIntro: 'Choose your moment. Explore treatments, check prices and ask us about an appointment.',
  categories: ['Massage', 'Beauty treatments', 'Natural therapies'], categoryDescriptions: ['Relaxing, tension-release and draining/circulatory massage. Care adapted to you.', 'Facial cleansing, rituals, body care, manicures and pedicures.', 'Reflexology and reiki to make time for your wellbeing.'],
  featured: 'FIND YOUR MOMENT', featuredTitle: 'Three ways to begin', featuredIntro: 'A pause to switch off, a massage for tense areas or a facial treatment.', details: 'Explore treatment', tariffNote: 'Published studio prices. Ask about session length and confirm availability when booking.',
  teamEyebrow: 'THE PEOPLE BEHIND LLUNA BLANCA', teamTitle: 'Nuri and Isa. Care begins with listening.', teamIntro: 'A welcoming studio at Carrer de la Fe, 15. Tell us what you need and we will help you choose your session.', nuri: 'Massage and wellness therapies', nuriText: 'Nuri focuses mainly on massage, reflexology and reiki. Massage pressure and pace are adapted to each person.', isa: 'Facial and body beauty treatments', isaText: 'Isa looks after beauty treatments: facial cleansing and rituals, body treatments, manicures and pedicures.',
  values: [['At your pace', 'Sessions by appointment and warm, personal care.'], ['All in one space', 'Massage, wellness and beauty in Blanes.'], ['Ask us first', 'We can guide you by phone or WhatsApp before you book.']],
  galleryTitle: 'A space to slow down', galleryText: 'Real photographs of our studio and treatments.', reviewsTitle: 'Discover our visitors’ experiences', reviewsText: 'Read the reviews published on Lluna Blanca’s Google profile.', reviews: 'Read reviews on Google', writeReview: 'Share my experience',
  contactTitle: 'Find us in Blanes.', directions: 'Get directions', loadMap: 'Show Google map', mapNote: 'The map connects to Google only when you choose to load it.', finalA: 'Your next moment', finalB: 'of wellbeing begins here.', finalText: 'Message or call us. We will confirm availability with you personally.',
  treatments: 'Treatments and prices', session: 'What to expect from your visit', sessionSteps: [['Tell us what you need', 'When you enquire, tell us the kind of care you are looking for.'], ['Choose with our help', 'We can guide you through the options. Ask about session length before confirming.'], ['Visit with a confirmed appointment', 'Your session takes place at Carrer de la Fe, 15, in Blanes.']], related: 'You may also like', back: 'Back to home', healthNote: 'Wellness services do not replace healthcare. If you have a health condition, consult your healthcare professional before choosing a session.',
  legalTitles: { legal: 'Legal notice', privacy: 'Privacy policy', cookies: 'Cookie policy' }, notFound: 'This page is not here.', notFoundText: 'You can return home or explore our treatments.',
  imageAlts: ['Massage session at Lluna Blanca in Blanes', 'Massage room at Lluna Blanca in Blanes', 'Manicure and beauty area at Lluna Blanca', 'Entrance to Lluna Blanca at Carrer de la Fe, 15, Blanes'],
  cookie: { title: 'Your privacy, your choice', text: 'An essential cookie remembers your choice. Optional services are only enabled with your permission.', accept: 'Accept', reject: 'Reject', settings: 'Manage cookies', save: 'Save preferences', description: 'You can change your choice from the footer.', necessary: 'Essential cookies', necessaryText: 'Remember your choice for up to 12 months.', analytics: 'Optional analytics', analyticsText: 'No optional analytics tools are installed in the current source.', marketing: 'Optional marketing', marketingText: 'We do not use advertising cookies.', close: 'Close' },
 },
};

const translatedGroups = {
 ca: [
 ['Massatges','Sessions adaptades a cada persona, amb un ritme i una pressió ajustats al que necessites.',[
 ['Massatge descontracturant','Treball manual centrat en zones amb tensió acumulada.'],['Massatge relaxant','Maniobres suaus i contínues per afavorir la calma i la desconnexió.'],['Massatge drenant – circulatori','Moviments rítmics orientats a aportar una sensació de lleugeresa.'],['Ritual peeling corporal','Ritual d’exfoliació corporal per cuidar i suavitzar la pell.'],['Bo de 3 massatges','Tres sessions per utilitzar al teu ritme. Preu habitual: 120 €.']]],
 ['Maderoteràpia i pressoteràpia','Tractaments corporals disponibles individualment o en bons de diverses sessions.',[
 ['Maderoteràpia · 1 sessió','Tècnica manual corporal amb utensilis de fusta.'],['Maderoteràpia · 5 sessions + 1 de regal','Bo complet de sis sessions al preu de cinc.'],['Pressoteràpia · 1 sessió','Sessió de pressoteràpia per a la cura i el benestar corporal.'],['Pressoteràpia · 4 sessions','Bo amb un 10 % de descompte. Preu habitual: 60 €.'],['Pressoteràpia · 6 sessions','Bo amb un 15 % de descompte. Preu habitual: 90 €.'],['Pressoteràpia · 8 sessions','Bo amb un 20 % de descompte. Preu habitual: 120 €.'],['Benes fredes','Tractament corporal complementari amb benes fredes.']]],
 ['Radiofreqüència','Tractaments estètics facials i corporals amb massatge complementari.',[
 ['Facial · 1 sessió','Radiofreqüència facial amb massatge activador.'],['Facial · 4 sessions','Radiofreqüència facial amb massatge activador i un 10 % de descompte.'],['Facial · 6 sessions','Radiofreqüència facial amb massatge activador i un 15 % de descompte.'],['Facial · 8 sessions','Radiofreqüència facial amb massatge activador i un 20 % de descompte.'],['Corporal · 1 sessió','Radiofreqüència corporal amb massatge reductor.'],['Corporal · 4 sessions','Radiofreqüència corporal amb massatge reductor i un 10 % de descompte.'],['Corporal · 6 sessions','Radiofreqüència corporal amb massatge reductor i un 15 % de descompte.'],['Corporal · 8 sessions','Radiofreqüència corporal amb massatge reductor i un 20 % de descompte.']]],
 ['Teràpies de benestar','Sessions individuals de reflexologia, reiki i acompanyament personal.',[
 ['Reflexologia · 1 sessió','Treball manual en punts reflexos del peu orientat al benestar general.'],['Reiki · 1 sessió','Sessió orientada a la relaxació i al benestar personal.'],['Tarot · sessió d’1 hora','Sessió individual d’acompanyament.'],['Tarot · sessió de 30 min','Sessió individual d’acompanyament.']]],
 ['Estètica i facial','Cura facial, manicura i pedicura amb opcions per a diferents necessitats.',[
 ['Higiene completa','Neteja facial completa per a la cura habitual de la pell.'],['Ritual Vitality-Aquah','Ritual facial d’hidratació i vitalitat.'],['Ritual Gold','Ritual facial de cura intensiva.'],['Ritual Vit C','Ritual facial amb vitamina C.'],['Massatge facial ritual lifting','Massatge facial manual dins d’un ritual de cura.'],['Fils de col·lagen · 1a sessió','Tractament estètic facial amb fils de col·lagen.'],['Lifting, tint de pestanyes i laminat de celles','Servei combinat per a la cura de pestanyes i celles.'],['Manicura · tradicional completa','Cura i esmaltat tradicional de mans.'],['Manicura · semipermanent','Manicura amb esmaltat semipermanent.'],['Manicura · acrigel / soft gel','Manicura amb acabat acrigel o soft gel.'],['Parafina · 1 sessió','Tractament de parafina per a la cura de les mans.'],['Parafina · 6 sessions','Bo de sis sessions de parafina.'],['Pedicura · pedi spa','Cura spa per als peus.'],['Pedicura · pedi spa esmalt','Pedicura spa amb esmaltat.'],['Pedicura · pedi spa permanent','Pedicura spa amb esmaltat permanent.']]],
 ['Aparells estètics','Serveis d’aparells estètics que es valoren de manera personalitzada.',[
 ['Depilació làser','Servei de depilació làser amb cita prèvia.'],['Ultrasons','Tractament estètic amb ultrasons.'],['Radiofreqüència facial i corporal','Tractament de radiofreqüència facial o corporal.']]],
 ],
 en: [
 ['Massage','Sessions adapted to each person, with pressure and pace adjusted to your needs.',[
 ['Tension-release massage','Manual massage focused on areas with accumulated tension.'],['Relaxing massage','Gentle, continuous movements to encourage calm and relaxation.'],['Draining – circulatory massage','Rhythmic movements intended to create a feeling of lightness.'],['Body peeling ritual','Body exfoliation ritual to care for and soften the skin.'],['3-massage package','Three sessions to use at your own pace. Usual total: €120.']]],
 ['Wood therapy and pressotherapy','Body treatments available individually or as multi-session packages.',[
 ['Wood therapy · 1 session','Manual body technique using wooden tools.'],['Wood therapy · 5 sessions + 1 free','Six sessions for the price of five.'],['Pressotherapy · 1 session','Pressotherapy session for body care and wellbeing.'],['Pressotherapy · 4 sessions','Package with a 10% discount. Usual total: €60.'],['Pressotherapy · 6 sessions','Package with a 15% discount. Usual total: €90.'],['Pressotherapy · 8 sessions','Package with a 20% discount. Usual total: €120.'],['Cold wraps','Complementary body treatment using cold wraps.']]],
 ['Radiofrequency','Facial and body beauty treatments with complementary massage.',[
 ['Facial · 1 session','Facial radiofrequency with activating massage.'],['Facial · 4 sessions','Facial radiofrequency with activating massage and a 10% discount.'],['Facial · 6 sessions','Facial radiofrequency with activating massage and a 15% discount.'],['Facial · 8 sessions','Facial radiofrequency with activating massage and a 20% discount.'],['Body · 1 session','Body radiofrequency with contouring massage.'],['Body · 4 sessions','Body radiofrequency with contouring massage and a 10% discount.'],['Body · 6 sessions','Body radiofrequency with contouring massage and a 15% discount.'],['Body · 8 sessions','Body radiofrequency with contouring massage and a 20% discount.']]],
 ['Wellness therapies','Individual reflexology, reiki and personal guidance sessions.',[
 ['Reflexology · 1 session','Manual work on reflex points of the foot for general wellbeing.'],['Reiki · 1 session','Session focused on relaxation and personal wellbeing.'],['Tarot · 1-hour session','Individual personal guidance session.'],['Tarot · 30-minute session','Individual personal guidance session.']]],
 ['Beauty and facial care','Facial care, manicures and pedicures for different needs.',[
 ['Complete facial cleansing','Complete facial cleansing for regular skin care.'],['Vitality-Aquah ritual','Facial hydration and vitality ritual.'],['Gold ritual','Intensive facial care ritual.'],['Vitamin C ritual','Facial ritual with vitamin C.'],['Lifting ritual facial massage','Manual facial massage as part of a care ritual.'],['Collagen threads · first session','Facial beauty treatment with collagen threads.'],['Lash lift, lash tint and brow lamination','Combined eyelash and eyebrow care service.'],['Manicure · complete traditional','Hand care and traditional nail polish.'],['Manicure · semi-permanent','Manicure with semi-permanent polish.'],['Manicure · acrygel / soft gel','Manicure with an acrygel or soft gel finish.'],['Paraffin · 1 session','Paraffin treatment for hand care.'],['Paraffin · 6 sessions','Six-session paraffin package.'],['Pedicure · pedi spa','Spa care for feet.'],['Pedicure · pedi spa with polish','Spa pedicure with nail polish.'],['Pedicure · pedi spa permanent','Spa pedicure with permanent polish.']]],
 ['Aesthetic technology','Beauty technology services assessed individually.',[
 ['Laser hair removal','Laser hair removal by appointment.'],['Ultrasound','Beauty treatment using ultrasound.'],['Facial and body radiofrequency','Facial or body radiofrequency treatment.']]],
 ],
};
export function getGroups(language) {
  return SERVICE_GROUPS.map((group, gi) => {
    const translated = translatedGroups[language]?.[gi];
    return { ...group, label: translated?.[0] || group.label, intro: translated?.[1] || group.intro,
      items: group.items.map((item, ii) => ({ ...item, name: translated?.[2][ii][0] || item.name, desc: translated?.[2][ii][1] || item.desc,
        price: item.price === 'Consultar' ? UI[language].consult : item.price,
        detail: language === 'es' ? item.detail : item.detail === 'Cita previa' ? UI[language].appointment : item.detail.replace('sesiones', language === 'ca' ? 'sessions' : 'sessions').replace('sesión', language === 'ca' ? 'sessió' : 'session').replace('Tratamiento', language === 'ca' ? 'Tractament' : 'Treatment').replace('hora', language === 'ca' ? 'hora' : 'hour'),
      })),
    };
  });
}
const categoryKeys = ['massages', 'beauty', 'therapies'];
const categoryTranslations = {
 ca: [
 ['Massatges a Blanes adaptats a tu','Massatge relaxant, descontracturant i drenant-circulatori a Lluna Blanca. Preus des de 40 €. Consulta disponibilitat per WhatsApp o telèfon.','A Lluna Blanca cada massatge s’adapta a com arribes aquell dia. Abans de començar parlem amb tu per ajustar l’enfocament, el ritme i la pressió, amb un tracte proper i sense presses.'],
 ['Tractaments d’estètica a Blanes','Higiene facial, rituals, radiofreqüència, pressoteràpia, maderoteràpia, manicura i pedicura a Lluna Blanca. Consulta preus i reserva cita.','La Isa cuida la part d’estètica de Lluna Blanca amb serveis facials i corporals, manicura, pedicura i aparells estètics. Ens pots consultar quina opció encaixa millor amb tu abans de reservar.'],
 ['Teràpies naturals a Blanes','Reflexologia i reiki a Lluna Blanca, centre de benestar a Blanes. Sessions a 30 €. Atenció propera i reserva per WhatsApp o telèfon.','La Nuri acompanya les sessions de teràpies i benestar amb una atenció propera i personalitzada. Pots reservar reflexologia o reiki en un ambient tranquil al centre de Blanes.'],
 ],
 en: [
 ['Massage in Blanes, adapted to you','Relaxing, tension-release and draining/circulatory massage at Lluna Blanca in Blanes. Prices from €40. Ask about availability by WhatsApp or phone.','Every massage at Lluna Blanca is adapted to how you feel that day. Before we begin, we discuss the approach, pace and pressure with you, with warm, unhurried care.'],
 ['Beauty treatments in Blanes','Facial cleansing, rituals, radiofrequency, pressotherapy, wood therapy, manicures and pedicures at Lluna Blanca. Check prices and book an appointment.','Isa looks after beauty at Lluna Blanca, with facial and body services, manicures, pedicures and aesthetic technology. Ask us which option suits you before booking.'],
 ['Natural therapies in Blanes','Reflexology and reiki at Lluna Blanca, a wellness studio in Blanes. Sessions at €30. Warm care and appointment enquiries by WhatsApp or phone.','Nuri offers personal, welcoming care during wellness sessions. You can book reflexology or reiki in a calm setting in central Blanes.'],
 ],
};
export function pageContent(key, language) {
 const ui = UI[language];
 if (key === 'home') return { title: COPY[language].hero.lines.join(' '), description: ui.heroDescription };
 if (ui.legalTitles[key]) return { title: ui.legalTitles[key], description: `${ui.legalTitles[key]} · Lluna Blanca, ${CONTACT.addressFull}.` };
 const index = categoryKeys.indexOf(key);
 if (index !== -1) {
   const original = SERVICE_PAGES[routeFor(key, 'es')];
   const translated = categoryTranslations[language]?.[index];
   return { ...original, title: translated?.[0] || original.title, description: translated?.[1] || original.description, intro: translated?.[2] || original.intro,
     faqs: language === 'es' ? original.faqs.map(f => [f.q,f.a]) : [COPY[language].faq.items[index === 0 ? 1 : index === 1 ? 2 : 5], COPY[language].faq.items[3], COPY[language].faq.items[4]], parent: 'home' };
 }
 const featured = { relaxing: ['masajes',1,'massages'], tension: ['masajes',0,'massages'], facial: ['estetica',0,'beauty'] }[key];
 if (featured) {
  const item = getGroups(language).find(g => g.id === featured[0]).items[featured[1]];
  const extra = {
   es: { relaxing: 'Puede ser una opción si buscas parar y dedicarte un rato de calma. El ritmo y la presión se comentan antes de empezar.', tension: 'Puede ser una opción si notas tensión acumulada y buscas un trabajo manual más centrado en esas zonas. Antes de empezar comentamos contigo el enfoque y la presión.', facial: 'La higiene facial completa es una opción de cuidado habitual de la piel. Isa te orienta sobre las alternativas de higiene y los rituales faciales disponibles.' },
   ca: { relaxing: 'Pot ser una opció si busques parar i dedicar-te una estona de calma. El ritme i la pressió es comenten abans de començar.', tension: 'Pot ser una opció si notes tensió acumulada i busques un treball manual més centrat en aquestes zones. Abans de començar comentem amb tu l’enfocament i la pressió.', facial: 'La higiene facial completa és una opció de cura habitual de la pell. La Isa t’orienta sobre les alternatives d’higiene i els rituals facials disponibles.' },
   en: { relaxing: 'An option if you want to slow down and make time for calm. Pressure and pace are discussed before the session begins.', tension: 'An option if you feel accumulated tension and want manual massage focused on those areas. We discuss the approach and pressure with you before starting.', facial: 'Complete facial cleansing is an option for regular skin care. Isa can explain the cleansing options and facial rituals available.' },
  };
  const durationQ = { es: '¿Cuánto dura la sesión?', ca: 'Quant dura la sessió?', en: 'How long is the session?' };
  const durationA = { es: 'La tarifa publicada no especifica la duración. Consúltala por WhatsApp o teléfono antes de confirmar tu cita.', ca: 'La tarifa publicada no especifica la durada. Consulta-la per WhatsApp o telèfon abans de confirmar la cita.', en: 'The published price does not specify session length. Please ask by WhatsApp or phone before confirming your appointment.' };
  return { title: `${item.name} ${language === 'es' ? 'en' : language === 'ca' ? 'a' : 'in'} Blanes`, description: `${item.name} · ${item.price}. ${item.desc} ${ui.book}: ${CONTACT.phoneDisplay}.`, intro: item.desc, explanation: extra[language][key], item, parent: featured[2], groupIds: [], faqs: [[durationQ[language],durationA[language]], COPY[language].faq.items[3],COPY[language].faq.items[4]] };
 }
 return { title: ui.notFound, description: ui.notFoundText };
}
