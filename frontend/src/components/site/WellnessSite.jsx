import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, CalendarDays, Check, ChevronDown, Clock3, Flower2, Heart, Leaf, MapPin, Menu, MessageCircle, Phone, Sparkles, X, Instagram } from 'lucide-react';
import { CONTACT, PHOTOS } from '../../data/site';
import { COPY, LANGUAGE_OPTIONS } from '../../context/LanguageContext';
import { UI, routeFor, bookingUrl, getGroups, pageContent } from '../../data/localized';
import { LEGAL_CONTENT } from '../../data/legal';

const categories = ['massages', 'beauty', 'therapies'];
const featured = ['relaxing', 'tension', 'facial'];
const categoryImages = [PHOTOS.massage1, PHOTOS.manicure, PHOTOS.room];
const icons = [Leaf, Sparkles, Flower2];

function Booking({ language, treatment, secondary = false, children, className = '' }) {
  return <a className={`button ${secondary ? 'button-light' : 'button-primary'} ${className}`} href={bookingUrl(language, treatment)} target="_blank" rel="noreferrer" data-conversion="booking"><MessageCircle size={17} aria-hidden="true" />{children || UI[language].book}<ArrowUpRight size={16} aria-hidden="true" /></a>;
}

function Navbar({ route }) {
  const { language, key } = route;
  const copy = COPY[language];
  const [open, setOpen] = useState(false);
  const [languagesOpen, setLanguagesOpen] = useState(false);
  const header = useRef(null), menuButton = useRef(null), languageButton = useRef(null);
  const home = routeFor('home', language);
  const links = [[copy.nav.services,'servicios'],[copy.nav.center,'sobre'],[copy.nav.gallery,'galeria'],[copy.nav.contact,'contacto']];
  useEffect(() => {
    const dismiss = event => {
      if (event.type === 'keydown' && event.key === 'Escape') {
        if (open) menuButton.current?.focus();
        else if (languagesOpen) languageButton.current?.focus();
        setOpen(false); setLanguagesOpen(false);
      } else if (event.type === 'pointerdown' && !header.current?.contains(event.target)) { setOpen(false); setLanguagesOpen(false); }
    };
    document.addEventListener('keydown', dismiss);
    document.addEventListener('pointerdown', dismiss);
    return () => { document.removeEventListener('keydown', dismiss); document.removeEventListener('pointerdown', dismiss); };
  }, [open,languagesOpen]);
  return <header className="site-header" ref={header} data-testid="navbar">
   <nav className="shell nav-inner" aria-label={copy.nav.services}>
    <a className="brand" href={home} aria-label="Lluna Blanca"><img src="/images/logo-lluna-blanca.webp" alt="" width="40" height="40" /><span>Lluna Blanca<small>BLANES · GIRONA</small></span></a>
    <div className="desktop-links">{links.map(([label,id]) => <a key={id} href={`${home}#${id}`}>{label}</a>)}</div>
    <div className="nav-actions"><div className="language-control">
      <button ref={languageButton} className="language-toggle" aria-label={copy.nav.language} aria-expanded={languagesOpen} aria-controls="language-links" onClick={() => { setLanguagesOpen(!languagesOpen); setOpen(false); }}>{language.toUpperCase()}<ChevronDown size={13} aria-hidden="true" /></button>
      {languagesOpen && <div className="language-links" id="language-links">{LANGUAGE_OPTIONS.map(option => <a key={option.code} href={routeFor(key,option.code)} hrefLang={option.code} lang={option.code} aria-current={language === option.code ? 'true' : undefined}>{option.label}{language === option.code && <Check size={14} aria-hidden="true" />}</a>)}</div>}
     </div><Booking language={language} className="nav-book" /><button className="menu-toggle" ref={menuButton} data-testid="menu-toggle" aria-label={open ? copy.nav.close : copy.nav.open} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => { setOpen(!open); setLanguagesOpen(false); }}>{open ? <X size={22} /> : <Menu size={22} />}</button></div>
   </nav>
   {open && <nav id="mobile-navigation" className="mobile-navigation" aria-label={copy.nav.services} data-testid="mobile-menu">{links.map(([label,id]) => <a key={id} href={`${home}#${id}`} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={17} aria-hidden="true" /></a>)}<Booking language={language} /><a href={`tel:${CONTACT.phone}`} className="mobile-phone"><Phone size={16} aria-hidden="true" />{copy.nav.call} {CONTACT.phoneDisplay}</a></nav>}
  </header>;
}

function Moon({ className = '' }) { return <div className={`moon-object ${className}`} aria-hidden="true"><span /><i /><b /></div>; }

function Hero({ language }) {
 const ui = UI[language];
 return <section className="hero shell" id="top" data-testid="hero"><div className="hero-copy"><p className="eyebrow"><span className="tiny-star" aria-hidden="true">✧</span>{ui.eyebrow}</p><h1>{ui.heroA}<br /><em>{ui.heroB}</em></h1><p className="hero-description">{ui.heroDescription}</p><div className="hero-buttons"><Booking language={language} /><a className="button button-outline" href="#servicios">{ui.explore}<ArrowRight size={17} aria-hidden="true" /></a></div><div className="hero-notes"><span><CalendarDays size={14} aria-hidden="true" />{ui.appointment}</span><span><Heart size={14} aria-hidden="true" />{ui.personal}</span></div></div><div className="hero-visual"><div className="hero-image-frame"><img src={PHOTOS.room} alt={ui.imageAlts[1]} width="1200" height="897" fetchPriority="high" decoding="async" /><span className="image-caption"><MapPin size={14} aria-hidden="true" />{CONTACT.address} · Blanes</span></div><Moon /><span className="visual-label" aria-hidden="true">Lluna Blanca<span>BLANES · GIRONA</span></span></div></section>;
}

function Services({ language }) {
 const ui = UI[language];
 return <section className="section services-section" id="servicios" data-testid="services"><div className="shell"><div className="section-heading"><div><p className="eyebrow">{ui.category}</p><h2>{ui.servicesTitle}</h2></div><p>{ui.serviceIntro}</p></div><div className="category-grid">{categories.map((key,index) => { const Icon = icons[index]; return <article className={`category-card category-${index} reveal`} key={key}><a className="category-image" href={routeFor(key,language)} tabIndex="-1" aria-hidden="true"><img src={categoryImages[index]} alt="" width={index === 0 ? 767 : index === 1 ? 762 : 1200} height={index === 0 ? 678 : index === 1 ? 1020 : 897} loading="lazy" decoding="async" /><span className="category-symbol"><Icon size={25} /></span></a><div className="category-body"><div className="category-topline"><span className="eyebrow">0{index+1}</span><span>{ui.from} {[40,10,30][index]} €</span></div><h3><a href={routeFor(key,language)}>{ui.categories[index]}</a></h3><p>{ui.categoryDescriptions[index]}</p><a className="text-link" href={routeFor(key,language)}>{ui.allPrices}<ArrowRight size={16} aria-hidden="true" /></a><a className="category-book" href={bookingUrl(language,ui.categories[index])} target="_blank" rel="noreferrer">{ui.book}<ArrowUpRight size={14} aria-hidden="true" /></a></div></article>; })}</div></div></section>;
}

function Featured({ language }) {
 const ui = UI[language];
 return <section className="section featured-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">{ui.featured}</p><h2>{ui.featuredTitle}</h2></div><p>{ui.featuredIntro}</p></div><div className="featured-grid">{featured.map((key,index) => { const page = pageContent(key,language); return <article className="treatment-card reveal" key={key}><span className="treatment-number">0{index+1}</span><h3><a href={routeFor(key,language)}>{page.item.name}</a></h3><p>{page.intro}</p><div className="treatment-bottom"><strong>{page.item.price}</strong><a className="text-link" href={routeFor(key,language)}>{ui.details}<ArrowUpRight size={16} aria-hidden="true" /></a></div><Booking language={language} treatment={page.item.name} secondary /></article>; })}</div><p className="tariff-note">{ui.tariffNote}</p></div></section>;
}

function About({ language }) {
 const ui = UI[language];
 return <section className="section about-section" id="sobre" data-testid="about"><div className="shell about-grid"><div className="about-image reveal"><img src={PHOTOS.storefront} alt={ui.imageAlts[3]} width="762" height="1020" loading="lazy" decoding="async" /><span className="photo-note">Lluna Blanca<span>Blanes · Girona</span></span></div><div className="about-copy"><p className="eyebrow">{ui.teamEyebrow}</p><h2>{ui.teamTitle}</h2><p>{ui.teamIntro}</p><div className="people"><article><span className="person-mark" aria-hidden="true">N</span><div><h3>Nuri</h3><span>{ui.nuri}</span><p>{ui.nuriText}</p></div></article><article><span className="person-mark" aria-hidden="true">I</span><div><h3>Isa</h3><span>{ui.isa}</span><p>{ui.isaText}</p></div></article></div></div></div><div className="shell values">{ui.values.map(([title,text],i) => { const Icon = icons[i]; return <div key={title}><Icon size={23} aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></div>; })}</div></section>;
}

function Gallery({ language }) {
 const ui = UI[language];
 return <section className="section gallery-section" id="galeria"><div className="shell"><div className="section-heading"><div><p className="eyebrow">{COPY[language].gallery.eyebrow}</p><h2>{ui.galleryTitle}</h2></div><p>{ui.galleryText}</p></div><div className="gallery-grid">{[PHOTOS.room,PHOTOS.massage1,PHOTOS.manicure].map((src,i) => <figure key={src} className="reveal"><img src={src} alt={ui.imageAlts[[1,0,2][i]]} loading="lazy" decoding="async" width={[1200,767,762][i]} height={[897,678,1020][i]} /></figure>)}</div></div></section>;
}

function Reviews({ language }) {
 const ui = UI[language];
 // Link to the authentic profile; old anonymous paraphrases lack reviewer provenance.
 return <section className="reviews-section" id="opiniones"><div className="shell reviews-inner"><div className="review-mark" aria-hidden="true">“</div><div><p className="eyebrow">{COPY[language].testimonials.eyebrow}</p><h2>{ui.reviewsTitle}</h2><p>{ui.reviewsText}</p></div><div className="reviews-actions"><a className="button button-outline" href={CONTACT.googleReviews} target="_blank" rel="noreferrer">{ui.reviews}<ArrowUpRight size={16} aria-hidden="true" /></a><a className="text-link" href={CONTACT.googleWriteReview} target="_blank" rel="noreferrer">{ui.writeReview}<ArrowUpRight size={15} aria-hidden="true" /></a></div></div></section>;
}

function Contact({ language }) {
 const ui = UI[language], copy = COPY[language];
 const [mapOpen,setMapOpen] = useState(false);
 return <section className="section contact-section" id="contacto" data-testid="contact"><div className="shell contact-grid"><div><p className="eyebrow">{copy.contact.eyebrow}</p><h2>{ui.contactTitle}</h2><p>{ui.finalText}</p><div className="contact-details"><div><MapPin size={20} aria-hidden="true" /><div><h3>{copy.contact.address}</h3><address>{CONTACT.address}<br />{CONTACT.postal}</address><a className="text-link" href={CONTACT.mapDir} target="_blank" rel="noreferrer">{ui.directions}<ArrowUpRight size={15} aria-hidden="true" /></a></div></div><div><Clock3 size={20} aria-hidden="true" /><div><h3>{copy.contact.hours}</h3><p>{copy.contact.weekdays}<br />9:00 – 13:00 · 16:30 – 19:30<br />{copy.contact.saturday} / {copy.contact.sunday}: {copy.contact.closed}</p></div></div></div><div className="contact-buttons"><Booking language={language} /><a className="button button-outline" href={`tel:${CONTACT.phone}`} data-conversion="phone"><Phone size={17} aria-hidden="true" />{CONTACT.phoneDisplay}</a></div></div><div className="map-panel">{mapOpen ? <iframe title={`${copy.contact.address}: Lluna Blanca, Blanes`} src={CONTACT.mapEmbed} loading="lazy" referrerPolicy="no-referrer" allowFullScreen /> : <><div className="map-illustration" aria-hidden="true"><span className="map-road road-1" /><span className="map-road road-2" /><span className="map-road road-3" /><span className="map-dot"><MapPin size={30} /></span><span className="map-city">BLANES</span></div><div className="map-card"><h3>Lluna Blanca</h3><p>{CONTACT.addressFull}</p><button className="button button-light" onClick={() => setMapOpen(true)}>{ui.loadMap}<ArrowUpRight size={16} aria-hidden="true" /></button><small>{ui.mapNote}</small></div></>}</div></div></section>;
}

function Faq({ language, items = COPY[language].faq.items }) {
 return <section className="section faq-section" id="faq"><div className="shell faq-grid"><div><p className="eyebrow">{COPY[language].faq.eyebrow}</p><h2>{COPY[language].faq.lines.join(' ')}</h2></div><div className="faq-list">{items.map(([q,a]) => <details key={q}><summary>{q}<ChevronDown size={17} aria-hidden="true" /></summary><p>{a}</p></details>)}</div></div></section>;
}

function FinalCTA({ language }) {
 const ui=UI[language];
 return <section className="final-cta"><div className="shell"><p className="eyebrow">Lluna Blanca · Blanes</p><h2>{ui.finalA}<br /><em>{ui.finalB}</em></h2><p>{ui.finalText}</p><div className="final-buttons"><Booking language={language} secondary /><a className="button button-cream-outline" href={`tel:${CONTACT.phone}`}><Phone size={17} aria-hidden="true" />{COPY[language].contact.call} {CONTACT.phoneDisplay}</a></div><Moon /></div></section>;
}

function Footer({ language }) {
 const ui=UI[language],copy=COPY[language];
 return <footer className="site-footer" data-testid="footer"><div className="shell footer-grid"><div><a href={routeFor('home',language)} className="footer-brand">Lluna Blanca</a><p>{copy.footer.tagline}</p><div className="footer-social"><a href={CONTACT.instagram} target="_blank" rel="noreferrer" aria-label="Instagram: Lluna Blanca"><Instagram size={20} /></a><a href={bookingUrl(language)} target="_blank" rel="noreferrer" aria-label="WhatsApp: Lluna Blanca"><MessageCircle size={20} /></a></div></div><div><h2>{copy.nav.services}</h2>{categories.map((key,i) => <a key={key} href={routeFor(key,language)}>{ui.categories[i]}</a>)}</div><div><h2>{copy.footer.contact}</h2><address>{CONTACT.address}<br />{CONTACT.postal}</address><a href={`tel:${CONTACT.phone}`}>{CONTACT.phoneDisplay}</a><a href="mailto:llunablancablanes@gmail.com">llunablancablanes@gmail.com</a></div><div><h2>{copy.footer.legal}</h2>{Object.entries(ui.legalTitles).map(([key,title]) => <a key={key} href={routeFor(key,language)}>{title}</a>)}<button type="button" onClick={() => window.dispatchEvent(new Event('lluna:open-cookie-settings'))}>{copy.footer.cookies}</button></div></div><div className="shell footer-bottom"><span>© 2026 Lluna Blanca. {copy.footer.rights}</span><div>{LANGUAGE_OPTIONS.map(option => <a href={routeFor('home',option.code)} hrefLang={option.code} lang={option.code} key={option.code}>{option.label}</a>)}</div></div></footer>;
}

function TariffGroup({ group, language }) {
 const ui=UI[language];
 return <section className="tariff-group" id={group.id}><h3>{group.label}</h3><p>{group.intro}</p><div className="tariff-list">{group.items.map(item => <article className="tariff-row" key={item.name}><div><h4>{item.name}</h4><p>{item.desc}</p><small>{item.detail}</small></div><div className="tariff-action"><strong>{item.price}</strong><a href={bookingUrl(language,item.name)} target="_blank" rel="noreferrer" className="text-link" aria-label={`${ui.book}: ${item.name}`} data-conversion="booking">{ui.book}<ArrowUpRight size={15} aria-hidden="true" /></a></div></article>)}</div></section>;
}

function ServicePage({ route }) {
 const { language,key }=route,ui=UI[language],page=pageContent(key,language);
 const groups=getGroups(language).filter(g => page.groupIds.includes(g.id));
 const related=page.item ? featured.filter(k=>k!==key).concat(page.parent) : categories.filter(k=>k!==key).concat(key==='massages'?featured.slice(0,2):key==='beauty'?['facial']:[]);
 return <><section className="shell service-hero"><nav className="breadcrumbs" aria-label={ui.home}><a href={routeFor('home',language)}>{ui.home}</a><span aria-hidden="true">/</span>{page.parent!=='home'&&<><a href={routeFor(page.parent,language)}>{ui.categories[categories.indexOf(page.parent)]}</a><span aria-hidden="true">/</span></>}<span aria-current="page">{page.item?.name || ui.categories[categories.indexOf(key)]}</span></nav><div className="service-hero-grid"><div><p className="eyebrow">Lluna Blanca · Blanes</p><h1>{page.title}</h1><p className="lead">{page.intro}</p>{page.item&&<p className="service-price">{page.item.price}<small>{ui.appointment}</small></p>}<div className="hero-buttons"><Booking language={language} treatment={page.item?.name || page.title} /><a className="button button-outline" href={page.item?'#sesion':'#tarifas'}>{page.item?ui.session:ui.treatments}<ArrowRight size={16} aria-hidden="true" /></a></div></div><img src={key==='beauty'||key==='facial'?PHOTOS.manicure:key==='therapies'?PHOTOS.room:PHOTOS.massage1} alt={ui.imageAlts[key==='beauty'||key==='facial'?2:key==='therapies'?1:0]} width="767" height="678" fetchPriority="high" /></div></section>
 {page.item ? <section className="section shell treatment-explanation"><p className="eyebrow">{page.item.name}</p><h2>{ui.details}</h2><p>{page.explanation}</p><p className="tariff-note">{ui.tariffNote}</p></section> : <section className="section tariff-section" id="tarifas"><div className="shell"><p className="eyebrow">{COPY[language].services.eyebrow}</p><h2>{ui.treatments}</h2>{groups.length>1&&<nav className="tariff-jumps" aria-label={ui.treatments}>{groups.map(group=><a href={`#${group.id}`} key={group.id}>{group.label}</a>)}</nav>}{groups.map(group=><TariffGroup key={group.id} group={group} language={language} />)}<p className="tariff-note">{ui.tariffNote}</p></div></section>}
 <section className="section session-section" id="sesion"><div className="shell"><h2>{ui.session}</h2><div className="session-grid">{ui.sessionSteps.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>{(key==='therapies'||key==='massages'||key==='relaxing'||key==='tension')&&<p className="tariff-note">{ui.healthNote}</p>}</div></section><Faq language={language} items={page.faqs} /><section className="section shell related-section"><h2>{ui.related}</h2><div>{related.map(k=><a className="button button-outline" href={routeFor(k,language)} key={k}>{pageContent(k,language).item?.name || ui.categories[categories.indexOf(k)]}<ArrowUpRight size={16} aria-hidden="true" /></a>)}</div></section><FinalCTA language={language} /></>;
}

export function WellnessSite({ route }) {
 const {language,key}=route,ui=UI[language];
 useEffect(() => {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target);}}),{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  return ()=>observer.disconnect();
 },[]);
 return <div className="wellness-site"><a className="skip-link" href="#main">{ui.skip}</a><Navbar route={route} /><main id="main">
 {key==='home'?<><Hero language={language} /><Services language={language} /><Featured language={language} /><About language={language} /><Gallery language={language} /><Reviews language={language} /><Contact language={language} /><Faq language={language} /><FinalCTA language={language} /></>:LEGAL_CONTENT[language]?.[key]?<article className="shell legal-page"><p className="eyebrow">Lluna Blanca · Blanes</p><h1>{ui.legalTitles[key]}</h1><div className="legal-content">{LEGAL_CONTENT[language][key].split('\n\n').map((paragraph,i)=><p key={i}>{paragraph}</p>)}</div><a className="text-link" href={routeFor('home',language)}>{ui.back}<ArrowRight size={16} aria-hidden="true" /></a></article>:key==='404'?<section className="shell not-found"><p className="eyebrow">404 · Lluna Blanca</p><h1>{ui.notFound}</h1><p>{ui.notFoundText}</p><a className="button button-primary" href={routeFor('home',language)}>{ui.back}<ArrowRight size={16} aria-hidden="true" /></a></section>:<ServicePage route={route} />}
 </main><Footer language={language} />{!ui.legalTitles[key]&&<div className="mobile-booking"><Booking language={language} /><a href={`tel:${CONTACT.phone}`} aria-label={`${COPY[language].nav.call} ${CONTACT.phoneDisplay}`}><Phone size={19} /></a></div>}</div>;
}
