# PRD — Lluna Blanca Blanes

## Problema original
Web profesional, moderna y elegante para el centro de masajes y bienestar **Lluna Blanca** en Blanes (Girona). Objetivo: transmitir confianza y relajación y conseguir contactos por teléfono/WhatsApp. Estilo minimalista (blanco, beige, verde salvia, madera), sin reservas online. SEO local.

## Datos reales usados
- Nombre: Lluna Blanca · Tagline: "Terapias Naturales y Masajes"
- Tel/WhatsApp: +34 636 604 359
- Dirección: Carrer de la Fe, 15 · 17300 Blanes, Girona (mapa Google embebido real)
- Horario: Lun–Vie 9:00–13:00, Sáb/Dom cerrado
- Instagram: @llunablancablanes
- Servicios/precios: extraídos de la lista oficial (masajes, maderoterapia, presoterapia, reiki, reflexología, tarot, facial, manicura, pedicura)

## Arquitectura
- Frontend React (CRA) single-page. Sin backend necesario (marketing estático).
- Librerías clave: framer-motion (reveals/parallax), lenis (scroll suave), lucide-react, shadcn/ui (accordion, dialog).
- Todo el contenido editable en `/app/frontend/src/data/site.js`.
- Componentes en `/app/frontend/src/components/site/`.

## Implementado (2026-06)
- Navbar sticky + menú móvil, botón Llamar.
- Hero cinético con reveal por líneas, parallax de imagen, CTAs Llamar/WhatsApp.
- Marquee editorial.
- Sobre nosotros (manifiesto numerado 01–03) con imágenes.
- Servicios con pestañas por categoría y tarjetas (nombre, descripción, duración, precio).
- Galería en mosaico con marcador para fotos reales.
- Testimonios (carrusel) con espacio marcado para pegar reseñas reales de Google.
- Contacto: datos, horario, botones, Instagram y mapa Google real.
- FAQ (accordion), Footer con Aviso legal / Privacidad / Cookies (modales) y botón flotante de WhatsApp.
- SEO local: title/description/keywords, JSON-LD LocalBusiness, lang es.

## Marcadores pendientes de que el cliente aporte
- Fotografías reales del centro (galería) — placeholders de stock por ahora.
- Reseñas reales de Google/Instagram (estructura lista para pegar).
- Datos fiscales/registrales en los textos legales.
- Enlace de Facebook (si existe).

## Backlog
- P1: Sustituir imágenes de stock por fotos reales del centro.
- P2: Integrar reseñas reales / widget de Google.
- P2: Sección de bonos/promociones destacadas.
