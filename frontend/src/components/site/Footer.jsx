import { Phone, MessageCircle, Instagram, MapPin } from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,
} from "../ui/dialog";
import { CONTACT } from "../../data/site";

const LEGAL = {
  aviso: {
    title: "Aviso legal",
    body: `En cumplimiento de la Ley 34/2002 (LSSI-CE), se informa que este sitio web pertenece a Lluna Blanca, centro de masajes y terapias de bienestar situado en Carrer de la Fe, 15, 17300 Blanes (Girona). Teléfono de contacto: 636 604 359.

El acceso y uso de esta web atribuye la condición de usuario y supone la aceptación de las presentes condiciones. Los contenidos, textos e imágenes tienen finalidad informativa; los precios y servicios pueden estar sujetos a modificaciones.

[Marcador editable: completa aquí el nombre fiscal, NIF y datos registrales del titular del negocio.]`,
  },
  privacidad: {
    title: "Política de privacidad",
    body: `Los datos que nos facilites (por teléfono, WhatsApp o presencialmente) serán tratados con la única finalidad de gestionar tu cita y atenderte adecuadamente. No cedemos tus datos a terceros salvo obligación legal.

Puedes ejercer tus derechos de acceso, rectificación, supresión y oposición contactando en el teléfono 636 604 359 o en nuestro centro de Blanes.

[Marcador editable: completa aquí el responsable del tratamiento y la dirección de contacto para ejercer derechos, conforme al RGPD (UE 2016/679).]`,
  },
  cookies: {
    title: "Política de cookies",
    body: `Esta web utiliza cookies técnicas necesarias para su correcto funcionamiento y, en su caso, servicios de terceros como el mapa de Google Maps que pueden instalar cookies propias.

Puedes configurar o rechazar las cookies desde tu navegador en cualquier momento. Al continuar navegando aceptas el uso de las cookies estrictamente necesarias.

[Marcador editable: si añades analítica o marketing, detalla aquí las cookies utilizadas y su finalidad.]`,
  },
};

const LegalLink = ({ id }) => {
  const l = LEGAL[id];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button data-testid={`legal-${id}`} className="text-cream/55 hover:text-cream transition-colors text-sm text-left">
          {l.title}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-lg bg-cream border-line max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-forest">{l.title}</DialogTitle>
        </DialogHeader>
        <p className="text-forest/70 text-sm leading-relaxed whitespace-pre-line">{l.body}</p>
      </DialogContent>
    </Dialog>
  );
};

export const Footer = () => (
  <footer data-testid="footer" className="bg-forest text-cream pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-5 md:px-10">
      <div className="grid md:grid-cols-12 gap-10 pb-16 border-b border-cream/12">
        <div className="md:col-span-5">
          <h3 className="font-serif text-4xl md:text-5xl font-light tracking-tight">Lluna Blanca</h3>
          <p className="overline !text-sage mt-3">Blanes · Girona</p>
          <p className="mt-6 text-cream/60 max-w-xs leading-relaxed">{CONTACT.tagline}. Tu rincón de bienestar en el corazón de Blanes.</p>
        </div>

        <div className="md:col-span-4">
          <p className="overline !text-cream/50 mb-5">Contacto</p>
          <ul className="space-y-3 text-cream/70">
            <li className="flex items-center gap-3"><MapPin size={16} className="text-sage" /> {CONTACT.addressFull}</li>
            <li><a href={`tel:${CONTACT.phone}`} className="flex items-center gap-3 hover:text-cream transition-colors"><Phone size={16} className="text-sage" /> {CONTACT.phoneDisplay}</a></li>
            <li><a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-cream transition-colors"><MessageCircle size={16} className="text-sage" /> WhatsApp</a></li>
            <li><a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-cream transition-colors"><Instagram size={16} className="text-sage" /> @llunablancablanes</a></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="overline !text-cream/50 mb-5">Legal</p>
          <div className="flex flex-col gap-3 items-start">
            <LegalLink id="aviso" />
            <LegalLink id="privacidad" />
            <LegalLink id="cookies" />
          </div>
        </div>
      </div>

      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-cream/45 text-xs">
        <p>© {new Date().getFullYear()} Lluna Blanca Blanes. Todos los derechos reservados.</p>
        <p className="uppercase tracking-widest">Masajes · Bienestar · Blanes</p>
      </div>
    </div>
  </footer>
);
