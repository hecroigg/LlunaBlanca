import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const buildDir = path.resolve(currentDir, "../build");
const baseHtml = await readFile(path.join(buildDir, "index.html"), "utf8");
const siteUrl = "https://llunablancablanes.com";

const pages = [
  {
    slug: "masajes-blanes",
    title: "Masajes en Blanes | Lluna Blanca",
    description: "Masaje relajante, descontracturante y drenante-circulatorio en Lluna Blanca, Blanes. Consulta precios y disponibilidad por WhatsApp.",
    service: "Masajes en Blanes",
  },
  {
    slug: "estetica-blanes",
    title: "Centro de estética en Blanes | Lluna Blanca",
    description: "Limpieza facial, radiofrecuencia, presoterapia, maderoterapia, manicura y pedicura en Lluna Blanca, centro de estética en Blanes.",
    service: "Tratamientos de estética en Blanes",
  },
  {
    slug: "terapias-naturales-blanes",
    title: "Terapias naturales en Blanes | Lluna Blanca",
    description: "Sesiones de reflexología y reiki en Lluna Blanca, centro de bienestar y terapias naturales en Blanes. Reserva por WhatsApp o teléfono.",
    service: "Terapias naturales en Blanes",
  },
];

const replaceMeta = (html, pattern, replacement) => {
  if (!pattern.test(html)) throw new Error(`No se encontró la etiqueta que debe reemplazarse: ${pattern}`);
  return html.replace(pattern, replacement);
};

for (const page of pages) {
  const url = `${siteUrl}/${page.slug}/`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.title,
        description: page.description,
        inLanguage: "es",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#business` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: page.service, item: url },
        ],
      },
      {
        "@type": "Service",
        name: page.service,
        description: page.description,
        url,
        provider: { "@id": `${siteUrl}/#business` },
        areaServed: { "@type": "City", name: "Blanes" },
      },
    ],
  };

  let html = baseHtml;
  html = replaceMeta(html, /<title>.*?<\/title>/, `<title>${page.title}</title>`);
  html = replaceMeta(html, /<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${page.description}"/>`);
  html = replaceMeta(html, /<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${url}"/>`);
  html = replaceMeta(html, /<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${page.title}"/>`);
  html = replaceMeta(html, /<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${page.description}"/>`);
  html = replaceMeta(html, /<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${url}"/>`);
  html = replaceMeta(html, /<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${page.title}"/>`);
  html = replaceMeta(html, /<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${page.description}"/>`);
  html = html.replace("</head>", `<script type="application/ld+json">${JSON.stringify(schema)}</script></head>`);

  const pageDir = path.join(buildDir, page.slug);
  await mkdir(pageDir, { recursive: true });
  await writeFile(path.join(pageDir, "index.html"), html, "utf8");
}

console.log(`Generated ${pages.length} static service pages.`);
