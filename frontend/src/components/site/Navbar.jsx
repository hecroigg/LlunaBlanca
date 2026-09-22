import { useEffect, useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { CONTACT } from "../../data/site";
import { LANGUAGE_OPTIONS, useLanguage } from "../../context/LanguageContext";

const Senyera = () => (
  <span className="inline-block h-[14px] w-[20px] overflow-hidden rounded-[2px] border border-black/5 bg-[#f8d347] align-middle">
    <span className="block h-[2px] bg-[#c92f2f] mt-[2px]" />
    <span className="block h-[2px] bg-[#c92f2f] mt-[2px]" />
    <span className="block h-[2px] bg-[#c92f2f] mt-[2px]" />
  </span>
);

const Flag = ({ option }) => option.flag === "senyera" ? <Senyera /> : <span className="text-base leading-none">{option.flag}</span>;

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const { language, setLanguage, copy } = useLanguage();
  const isHome = window.location.pathname === "/";
  const linkTo = (hash) => `${isHome ? "" : "/"}${hash}`;

  const links = [
    { label: copy.nav.center, href: "#sobre" },
    { label: copy.nav.services, href: "#servicios" },
    { label: copy.nav.gallery, href: "#galeria" },
    { label: copy.nav.reviews, href: "#opiniones" },
    { label: copy.nav.contact, href: "#contacto" },
  ];
  const currentLanguage = LANGUAGE_OPTIONS.find((option) => option.code === language);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/90 backdrop-blur-md border-b border-line py-3" : "py-5 border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between gap-3">
        <a href={isHome ? "#top" : "/"} data-testid="logo-link" className="flex items-baseline gap-2 group min-w-0">
          <span className="font-serif text-2xl md:text-[26px] tracking-tight text-forest whitespace-nowrap">Lluna Blanca</span>
          <span className="overline hidden sm:inline">Blanes</span>
        </a>

        <div className="hidden lg:flex items-center gap-8 xl:gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={linkTo(l.href)}
              className="text-sm text-forest/80 hover:text-sage transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <button
              type="button"
              onClick={() => setLanguageOpen((value) => !value)}
              aria-haspopup="menu"
              aria-expanded={languageOpen}
              aria-label={copy.nav.language}
              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-line bg-cream/80 px-2.5 sm:px-3 text-xs font-medium text-forest shadow-sm backdrop-blur-sm hover:border-sage transition-colors"
            >
              <Flag option={currentLanguage} />
              <span className="hidden sm:inline">{currentLanguage.short}</span>
              <ChevronDown size={13} className={`transition-transform ${languageOpen ? "rotate-180" : ""}`} />
            </button>

            {languageOpen && (
              <div role="menu" className="absolute right-0 mt-2 min-w-[145px] rounded-2xl border border-line bg-cream/95 p-1.5 shadow-[0_18px_45px_rgba(44,53,43,0.12)] backdrop-blur-md">
                {LANGUAGE_OPTIONS.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      setLanguage(option.code);
                      setLanguageOpen(false);
                    }}
                    className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition-colors ${language === option.code ? "bg-sand text-forest" : "text-forest/75 hover:bg-sand/70"}`}
                  >
                    <Flag option={option} />
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href={`tel:${CONTACT.phone}`}
            data-testid="nav-call-btn"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-sage text-cream px-5 py-2.5 text-sm hover:bg-sage-dark hover:-translate-y-0.5 transition-all duration-300"
          >
            <Phone size={15} /> {CONTACT.phoneDisplay}
          </a>
          <button
            data-testid="menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-forest p-1"
            aria-label={open ? copy.nav.close : copy.nav.open}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-navigation" data-testid="mobile-menu" className="lg:hidden bg-cream border-t border-line mt-3 px-5 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a key={l.href} href={linkTo(l.href)} onClick={() => setOpen(false)} className="text-lg font-serif text-forest">
              {l.label}
            </a>
          ))}
          <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 rounded-full bg-sage text-cream px-5 py-3 text-sm w-fit">
            <Phone size={15} /> {copy.nav.call} {CONTACT.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
};
