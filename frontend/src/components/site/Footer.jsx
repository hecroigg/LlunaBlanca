import { Phone, MessageCircle, Instagram, MapPin } from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,
} from "../ui/dialog";
import { CONTACT } from "../../data/site";

const LEGAL = {
  aviso: {
    title: "Aviso legal",
    body: `1. Datos identificativos

En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios de este sitio web de los siguientes datos:

Titular del sitio web: Nuria Roig Clavijos
Nombre comercial: Lluna Blanca
Actividad: Centro de masajes y terapias naturales.
Dirección: Carrer de la Fe, 15, Blanes (Girona), España.
Correo electrónico: llunablancablanes@gmail.com
Teléfono: 636 604 359
Sitio web: https://www.llunablancablanes.com

2. Objeto

El presente sitio web tiene como finalidad ofrecer información sobre los servicios prestados por Lluna Blanca, así como facilitar el contacto con las personas interesadas mediante teléfono, WhatsApp o, en su caso, redes sociales.

La información publicada tiene carácter meramente informativo y no constituye una oferta contractual.

3. Condiciones de uso

El acceso y navegación por este sitio web atribuye la condición de usuario e implica la aceptación de las presentes condiciones de uso.

El usuario se compromete a utilizar la web de forma adecuada, respetando la legislación vigente, la buena fe y el orden público, absteniéndose de realizar cualquier actuación que pueda perjudicar el funcionamiento del sitio web o los derechos de terceros.

4. Propiedad intelectual e industrial

Todos los contenidos de este sitio web, incluyendo, entre otros, textos, fotografías, imágenes, logotipos, diseños, elementos gráficos y demás materiales, son propiedad de Lluna Blanca o se utilizan con la correspondiente autorización.

Queda prohibida su reproducción, distribución, transformación, comunicación pública o cualquier otro uso sin autorización previa y expresa de la titular, salvo en los casos legalmente permitidos.

5. Responsabilidad

La titular realiza sus mejores esfuerzos para mantener la información del sitio web actualizada y libre de errores. No obstante, no garantiza la ausencia de errores, interrupciones del servicio o incidencias técnicas.

Asimismo, no se responsabiliza del uso que los usuarios hagan de la información contenida en este sitio web.

6. Enlaces externos

Este sitio web puede incluir enlaces a servicios externos, como WhatsApp o Instagram, cuya utilización se regirá por las condiciones de uso y políticas de privacidad de sus respectivos titulares.

Lluna Blanca no se hace responsable del contenido, funcionamiento o políticas de dichos sitios web externos.

7. Protección de datos

El tratamiento de los datos personales de los usuarios se realizará conforme a lo dispuesto en la Política de Privacidad de este sitio web.

8. Legislación aplicable y jurisdicción

El presente Aviso Legal se rige por la legislación española.

Para cualquier controversia que pudiera derivarse del acceso o utilización del sitio web, las partes se someterán a los Juzgados y Tribunales que correspondan conforme a la normativa vigente.`,
  },
  privacidad: {
    title: "Política de privacidad",
    body: `1. Responsable del tratamiento

En cumplimiento del Reglamento (UE) 2016/679 (Reglamento General de Protección de Datos - RGPD) y de la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), se informa a los usuarios de este sitio web de que el responsable del tratamiento de los datos personales es:

Titular: Nuria Roig Clavijos
Nombre comercial: Lluna Blanca
Actividad: Centro de masajes y terapias naturales.
Dirección: Carrer de la Fe, 15, Blanes (Girona), España.
Correo electrónico: llunablancablanes@gmail.com
Teléfono: 636 604 359

2. Finalidad del tratamiento de los datos

Este sitio web tiene carácter exclusivamente informativo y no dispone de formularios de contacto, registro, reservas ni contratación online.

Los datos personales únicamente serán tratados cuando el usuario contacte voluntariamente con Lluna Blanca a través de alguno de los siguientes medios: correo electrónico, teléfono o WhatsApp.

En estos casos, los datos facilitados serán utilizados únicamente para:
· Atender consultas o solicitudes de información.
· Responder a las comunicaciones recibidas.
· Gestionar citas o servicios solicitados por el usuario.
· Mantener las comunicaciones necesarias relacionadas con dichos servicios.

No se utilizarán los datos para finalidades distintas sin el consentimiento previo del interesado.

3. Base jurídica del tratamiento

La base legal para el tratamiento de los datos personales es:
· El consentimiento del interesado al contactar voluntariamente con Lluna Blanca.
· La aplicación de medidas precontractuales o contractuales cuando la consulta esté relacionada con la prestación de un servicio.

4. Conservación de los datos

Los datos personales se conservarán únicamente durante el tiempo necesario para atender la consulta realizada o mientras exista una relación profesional o comercial entre las partes.

Posteriormente podrán mantenerse bloqueados durante los plazos legalmente establecidos para atender posibles responsabilidades legales.

5. Destinatarios de los datos

Con carácter general, los datos personales no serán comunicados a terceros.

No obstante, podrán ser tratados por proveedores de servicios tecnológicos necesarios para el funcionamiento del correo electrónico, WhatsApp u otros servicios utilizados por Lluna Blanca, siempre bajo las correspondientes garantías legales.

Asimismo, podrán comunicarse cuando exista una obligación legal.

6. Derechos de los usuarios

El usuario puede ejercer en cualquier momento los siguientes derechos: acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de los datos cuando resulte aplicable.

Para ejercer cualquiera de estos derechos podrá enviar una solicitud al correo electrónico: llunablancablanes@gmail.com

La solicitud deberá identificar al interesado e indicar el derecho que desea ejercer.

Si considera que el tratamiento de sus datos no se ajusta a la normativa vigente, podrá presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).

7. Seguridad de los datos

Lluna Blanca adopta las medidas técnicas y organizativas razonables para proteger los datos personales frente a accesos no autorizados, pérdida, alteración o tratamiento indebido, teniendo en cuenta la naturaleza de los datos tratados.

8. Enlaces a terceros

Este sitio web puede contener enlaces a servicios externos, como WhatsApp o Instagram.

El acceso a dichos servicios se realiza bajo la responsabilidad del usuario y se encuentra sujeto a las políticas de privacidad establecidas por sus respectivos titulares.

Lluna Blanca no se responsabiliza del tratamiento de datos personales realizado por dichos servicios externos.

9. Modificaciones de la presente política

Lluna Blanca podrá actualizar la presente Política de Privacidad cuando resulte necesario para adaptarla a cambios legislativos o al funcionamiento del sitio web.

La versión publicada en cada momento será la que resulte aplicable.`,
  },
  cookies: {
    title: "Política de cookies",
    body: `1. ¿Qué son las cookies?

Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario al visitar un sitio web. Su finalidad es permitir el correcto funcionamiento de la página, mejorar la experiencia de navegación y, en algunos casos, obtener información estadística sobre el uso del sitio web.

2. ¿Qué tipos de cookies utiliza este sitio web?

El sitio web de Lluna Blanca utiliza únicamente las cookies necesarias para su funcionamiento y, en su caso, las derivadas de servicios de terceros que el usuario decida utilizar.

a) Cookies técnicas o necesarias

Son aquellas imprescindibles para que la página web funcione correctamente y para garantizar la seguridad de la navegación. Estas cookies no requieren el consentimiento del usuario, ya que son necesarias para prestar el servicio solicitado.

b) Cookies de terceros

Este sitio web puede incluir enlaces o accesos a servicios externos, como WhatsApp o Instagram.

Al acceder a estos servicios, el usuario abandona el sitio web o interactúa con plataformas gestionadas por terceros, que pueden instalar sus propias cookies conforme a sus respectivas políticas de privacidad y de cookies.

Lluna Blanca no controla ni es responsable del uso que dichos terceros hagan de las cookies o de la información recopilada.

3. Cookies analíticas y publicitarias

Actualmente este sitio web no utiliza cookies analíticas, publicitarias ni de personalización propias.

En caso de incorporar en el futuro herramientas como Google Analytics, Meta Pixel u otros servicios similares, esta Política de Cookies será actualizada y se solicitará el consentimiento correspondiente cuando sea legalmente exigible.

4. Gestión de las cookies

El usuario puede permitir, bloquear o eliminar las cookies instaladas en su dispositivo mediante la configuración de su navegador. La desactivación de determinadas cookies puede afectar al correcto funcionamiento de algunas funcionalidades del sitio web.

Puede consultar la información de gestión de cookies en los principales navegadores: Google Chrome, Mozilla Firefox, Microsoft Edge, Safari y Opera.

5. Actualización de la Política de Cookies

La presente Política de Cookies podrá modificarse cuando resulte necesario para adaptarse a cambios normativos, técnicos o derivados del funcionamiento del sitio web. Se recomienda revisar periódicamente esta política para conocer cualquier actualización.`,
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
