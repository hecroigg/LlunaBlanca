import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { CONTACT } from "../../data/site";

const LINKS = [
  { label: "Centro", href: "#sobre" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Contacto", href: "#contacto" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      <nav className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
        <a href="#top" data-testid="logo-link" className="flex items-baseline gap-2 group">
          <span className="font-serif text-2xl md:text-[26px] tracking-tight text-forest">Lluna Blanca</span>
          <span className="overline hidden sm:inline">Blanes</span>
        </a>

        <div className="hidden lg:flex items-center gap-9">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-${l.label.toLowerCase()}`}
              className="text-sm text-forest/80 hover:text-sage transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
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
            aria-label="Menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div data-testid="mobile-menu" className="lg:hidden bg-cream border-t border-line mt-3 px-5 py-6 flex flex-col gap-5">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-lg font-serif text-forest">
              {l.label}
            </a>
          ))}
          <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 rounded-full bg-sage text-cream px-5 py-3 text-sm w-fit">
            <Phone size={15} /> Llamar {CONTACT.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
};
