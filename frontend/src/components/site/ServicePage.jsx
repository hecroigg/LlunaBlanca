import { ArrowLeft, Check, MapPin, MessageCircle, Phone } from "lucide-react";
import { CONTACT, SERVICE_GROUPS, SERVICE_PAGES } from "../../data/site";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingWhatsapp } from "./FloatingWhatsapp";

const SITE_URL = "https://llunablancablanes.com";

const ServiceStructuredData = ({ page, groups }) => {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: page.title, item: `${SITE_URL}/${page.slug}/` },
        ],
      },
      {
        "@type": "Service",
        name: page.title,
        description: page.description,
        url: `${SITE_URL}/${page.slug}/`,
        areaServed: { "@type": "City", name: "Blanes" },
        provider: { "@id": `${SITE_URL}/#business` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: page.title,
          itemListElement: groups.flatMap((group) =>
            group.items.map((item) => ({
              "@type": "Offer",
              name: item.name,
              description: item.desc,
              priceCurrency: "EUR",
              ...(item.price !== "Consultar" ? { price: item.price.replace(" €", "") } : {}),
            })),
          ),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
};

export const ServicePage = ({ page }) => {
  const groups = SERVICE_GROUPS.filter((group) => page.groupIds.includes(group.id));
  const otherPages = Object.values(SERVICE_PAGES).filter((item) => item.slug !== page.slug);

  return (
    <div className="App bg-cream min-h-screen antialiased">
      <ServiceStructuredData page={page} groups={groups} />
      <Navbar />
      <main>
        <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-cream">
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            <nav aria-label="Migas de pan" className="mb-10 text-sm text-forest/60">
              <ol className="flex flex-wrap items-center gap-2">
                <li><a href="/" className="hover:text-sage transition-colors">Inicio</a></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-forest">{page.title}</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8">
                <p className="overline mb-6">{page.eyebrow}</p>
                <h1 className="font-serif font-light text-forest text-6xl sm:text-7xl lg:text-8xl leading-[0.96] tracking-tight">
                  {page.title}
                </h1>
                <p className="mt-8 max-w-2xl text-forest/70 text-lg leading-relaxed">{page.intro}</p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 rounded-full bg-whatsapp text-white px-7 py-4 text-sm hover:-translate-y-1 hover:opacity-90 transition-all duration-300">
                  <MessageCircle size={17} /> Consultar disponibilidad
                </a>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Información destacada" className="border-y border-line bg-sand py-10">
          <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-3 gap-6">
            {page.highlights.map((item) => (
              <div key={item} className="flex gap-3 text-forest/75 leading-relaxed">
                <Check size={19} className="text-sage shrink-0 mt-1" aria-hidden="true" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 md:py-28 bg-cream">
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            <div className="max-w-2xl mb-14">
              <p className="overline mb-5">Servicios y precios</p>
              <h2 className="font-serif font-light text-forest text-5xl md:text-7xl leading-[0.98] tracking-tight">Opciones disponibles</h2>
              <p className="mt-5 text-forest/65 leading-relaxed">Todas las tarifas mostradas son las tarifas actuales de Lluna Blanca. Para reservar, consulta primero la disponibilidad por teléfono o WhatsApp.</p>
            </div>

            <div className="space-y-16">
              {groups.map((group) => (
                <section key={group.id} aria-labelledby={`group-${group.id}`}>
                  <div className="mb-7">
                    <h2 id={`group-${group.id}`} className="font-serif text-4xl md:text-5xl text-forest">{group.label}</h2>
                    <p className="mt-3 text-forest/60 max-w-2xl">{group.intro}</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {group.items.map((service) => (
                      <article key={service.name} className="bg-white border border-line rounded-[3px] p-7 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-5">
                            <h3 className="font-serif text-2xl text-forest leading-tight">{service.name}</h3>
                            <p className="font-serif text-2xl text-sage whitespace-nowrap">{service.price}</p>
                          </div>
                          <p className="mt-4 text-forest/60 text-sm leading-relaxed">{service.desc}</p>
                        </div>
                        <div className="mt-7 pt-4 border-t border-line flex items-center justify-between gap-4">
                          <span className="text-muted text-xs uppercase tracking-widest">{service.detail}</span>
                          <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="text-sage text-sm hover:text-sage-dark transition-colors">Consultar</a>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-sand">
          <div className="max-w-5xl mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-14">
            <div>
              <p className="overline mb-5">Atención personalizada</p>
              <h2 className="font-serif font-light text-forest text-5xl md:text-6xl leading-none">Cuidado cercano, sin prisas</h2>
              <p className="mt-6 text-forest/65 leading-relaxed">Lluna Blanca es un centro de masajes, terapias naturales y estética en Blanes. Nuri se ocupa principalmente de los masajes y terapias; Isa, de la estética y los tratamientos faciales y corporales.</p>
              <div className="mt-8 flex items-start gap-3 text-forest/70">
                <MapPin size={19} className="text-sage shrink-0 mt-0.5" aria-hidden="true" />
                <a href={CONTACT.mapDir} target="_blank" rel="noreferrer" className="hover:text-sage transition-colors">{CONTACT.addressFull}</a>
              </div>
            </div>
            <div>
              <p className="overline mb-5">Preguntas frecuentes</p>
              <div className="border-t border-line">
                {page.faqs.map((faq) => (
                  <details key={faq.q} className="group border-b border-line py-5">
                    <summary className="cursor-pointer list-none font-serif text-2xl text-forest pr-8 relative">
                      {faq.q}<span aria-hidden="true" className="absolute right-0 text-sage group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="pt-4 text-forest/65 leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-forest text-cream">
          <div className="max-w-5xl mx-auto px-5 md:px-10 text-center">
            <p className="overline !text-sage mb-5">Cita previa</p>
            <h2 className="font-serif font-light text-5xl md:text-7xl leading-none">¿Quieres consultar disponibilidad?</h2>
            <p className="mt-6 text-cream/65 max-w-xl mx-auto">Cuéntanos qué servicio buscas y te responderemos personalmente. No utilizamos un sistema de reserva automática.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 rounded-full bg-whatsapp text-white px-7 py-4 text-sm hover:-translate-y-1 transition-all"><MessageCircle size={17} /> WhatsApp</a>
              <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2.5 rounded-full border border-cream/30 text-cream px-7 py-4 text-sm hover:bg-cream hover:text-forest transition-all"><Phone size={17} /> Llamar {CONTACT.phoneDisplay}</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-cream">
          <div className="max-w-7xl mx-auto px-5 md:px-10">
            <a href="/" className="inline-flex items-center gap-2 text-forest hover:text-sage transition-colors"><ArrowLeft size={17} /> Volver a Lluna Blanca</a>
            <div className="mt-8 flex flex-wrap gap-3">
              {otherPages.map((item) => <a key={item.slug} href={`/${item.slug}/`} className="rounded-full border border-line px-5 py-2.5 text-sm text-forest/70 hover:border-sage hover:text-sage transition-colors">{item.title}</a>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
};
