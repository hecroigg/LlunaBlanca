import { build } from 'esbuild';
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
const require=createRequire(import.meta.url);
const root=path.resolve(process.cwd()), buildDir=path.join(root,'build');
const bundle=path.join(root,'scripts','.prerender.cjs');
await build({entryPoints:[path.join(root,'scripts/prerender-entry.jsx')],outfile:bundle,bundle:true,platform:'node',format:'cjs',jsx:'automatic',loader:{'.js':'jsx','.css':'empty'},external:['react','react-dom','react-dom/server'],alias:{'@':path.join(root,'src')},define:{'process.env.NODE_ENV':'"production"'},logLevel:'warning'});
const {render,ROUTES,SITE_URL,LANGUAGES,UI,COPY,CONTACT,PHOTOS,pageContent,getGroups,routeFor}=require(bundle);
const template=await readFile(path.join(buildDir,'index.html'),'utf8');
const escape=value=>String(value).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const json=value=>JSON.stringify(value).replaceAll('<','\\u003c');
const abs=value=>SITE_URL+value;
const locales={es:'es_ES',ca:'ca_ES',en:'en_GB'};
const categories=['massages','beauty','therapies'];
const days=['Monday','Tuesday','Wednesday','Thursday','Friday'];
const items=[];
function schema(key,language,content,url) {
 const businessId=abs('/#business'),siteId=abs('/#website');
 const business={ '@type':'HealthAndBeautyBusiness','@id':businessId,name:CONTACT.name,alternateName:'Lluna Blanca Blanes',description:UI[language].heroDescription,url:abs('/'),image:abs(PHOTOS.storefront),logo:abs('/images/logo-lluna-blanca.webp'),telephone:CONTACT.phone,email:'llunablancablanes@gmail.com',address:{'@type':'PostalAddress',streetAddress:CONTACT.address,postalCode:'17300',addressLocality:'Blanes',addressRegion:'Girona',addressCountry:'ES'},areaServed:{'@type':'City',name:'Blanes'},sameAs:[CONTACT.instagram],hasMap:`https://www.google.com/maps/search/?api=1&query=Lluna+Blanca+Blanes&query_place_id=ChIJ5XfufqYXuxIRUCHCxf_8Mbk`,employee:[{'@type':'Person',name:'Nuri',jobTitle:UI[language].nuri},{'@type':'Person',name:'Isa',jobTitle:UI[language].isa}],openingHoursSpecification:[{ '@type':'OpeningHoursSpecification',dayOfWeek:days,opens:'09:00',closes:'13:00'},{'@type':'OpeningHoursSpecification',dayOfWeek:days,opens:'16:30',closes:'19:30'}]};
 const graph=[business,{'@type':'WebSite','@id':siteId,name:CONTACT.name,url:abs('/'),inLanguage:LANGUAGES},{'@type':'WebPage','@id':url+'#webpage',url,name:content.title,description:content.description,inLanguage:language,isPartOf:{'@id':siteId},about:{'@id':businessId}}];
 if(key!=='home') {
  const crumbs=[{'@type':'ListItem',position:1,name:UI[language].home,item:abs(routeFor('home',language))}];
  if(content.parent && content.parent!=='home') crumbs.push({'@type':'ListItem',position:2,name:pageContent(content.parent,language).title,item:abs(routeFor(content.parent,language))});
  crumbs.push({'@type':'ListItem',position:crumbs.length+1,name:content.title,item:url});
  graph.push({'@type':'BreadcrumbList',itemListElement:crumbs});
 }
 if(content.groupIds) {
  const services=content.item?[content.item]:getGroups(language).filter(group=>content.groupIds.includes(group.id)).flatMap(group=>group.items);
  for(const item of services) {
   const service={'@type':'Service',name:item.name,description:item.desc,url,provider:{'@id':businessId},areaServed:{'@type':'City',name:'Blanes'}};
   const number=item.price.match(/^([\d]+)\s*€/);
   if(number) service.offers={'@type':'Offer',price:number[1],priceCurrency:'EUR',url,seller:{'@id':businessId}};
   graph.push(service);
  }
 }
 const faqs=key==='home'?COPY[language].faq.items:content.faqs;
 if(faqs) graph.push({'@type':'FAQPage','@id':url+'#faq',mainEntity:faqs.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))});
 return {'@context':'https://schema.org','@graph':graph};
}
async function emit(key,language,route) {
 const content=pageContent(key,language),url=abs(route);
 let html=template.replace(/<html lang="[^"]+">/,`<html lang="${language}">`);
 const heroImage=key==='home'||key==='therapies'?PHOTOS.room:key==='beauty'||key==='facial'?PHOTOS.manicure:PHOTOS.massage1;
 if(!UI[language].legalTitles[key]) html=html.replace(/(<link rel="preload" as="image" href=")[^"]+("[^>]*>)/,`$1${heroImage}$2`);
 else html=html.replace(/<link rel="preload" as="image"[^>]*>/,'');
 const title=content.title.includes('Lluna Blanca')?content.title:content.title+' | Lluna Blanca';
 html=html.replace(/<title>.*?<\/title>/,`<title>${escape(title)}</title>`);
 html=html.replace(/<meta name="description" content="[^"]*"\s*\/>/,`<meta name="description" content="${escape(content.description)}"/>`);
 html=html.replace(/<link rel="canonical" href="[^"]*"\s*\/>/,`<link rel="canonical" href="${url}"/>`);
 for(const [tag,value] of [['og:title',title],['og:description',content.description],['og:url',url],['og:locale',locales[language]],['twitter:title',title],['twitter:description',content.description]]) html=html.replace(new RegExp(`<meta (property|name)="${tag}" content="[^"]*"\\s*\\/>`),`<meta ${tag.startsWith('og:')?'property':'name'}="${tag}" content="${escape(value)}"/>`);
 html=html.replace(/<meta property="og:image:alt" content="[^"]*"\s*\/>/,`<meta property="og:image:alt" content="${escape(UI[language].imageAlts[3])}"/>`);
 html=html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g,'');
 const alternates=LANGUAGES.map(lang=>`<link rel="alternate" hreflang="${lang}" href="${abs(routeFor(key,lang))}"/>`).join('')+`<link rel="alternate" hreflang="x-default" href="${abs(routeFor(key,'es'))}"/>`;
 html=html.replace('</head>',`${alternates}<script type="application/ld+json">${json(schema(key,language,content,url))}</script></head>`);
 html=html.replace(/<noscript>[\s\S]*?<\/noscript>/,'');
 html=html.replace('<div id="root"></div>',`<div id="root">${render(route)}</div>`);
 const output=path.join(buildDir,route,'index.html');
 await mkdir(path.dirname(output),{recursive:true});await writeFile(output,html);
 items.push({key,language,url});
}
for(const [key,versions] of Object.entries(ROUTES)) for(const [language,route] of Object.entries(versions)) await emit(key,language,route);
const notfound=template.replace('<div id="root"></div>',`<div id="root">${render('/page-not-found/')}</div>`).replace(/<title>.*?<\/title>/,'<title>404 | Lluna Blanca</title>').replace(/<meta name="robots"[^>]*>/,'<meta name="robots" content="noindex, follow"/>').replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g,'').replace(/<link rel="canonical"[^>]*>/,'');
await writeFile(path.join(buildDir,'404.html'),notfound);
const xml='<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'+items.map(item=>`<url><loc>${item.url}</loc>${LANGUAGES.map(lang=>`<xhtml:link rel="alternate" hreflang="${lang}" href="${abs(routeFor(item.key,lang))}"/>`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="${abs(routeFor(item.key,'es'))}"/></url>`).join('')+'</urlset>';
await writeFile(path.join(buildDir,'sitemap.xml'),xml);
await writeFile(path.join(buildDir,'robots.txt'),`User-agent: *\nAllow: /\nSitemap: ${abs('/sitemap.xml')}\n`);
await writeFile(path.join(buildDir,'llms.txt'),`# Lluna Blanca\n\nOfficial massage, natural therapies and beauty studio in Blanes, Girona.\nAddress: ${CONTACT.addressFull}\nPhone: ${CONTACT.phone}\nAppointments: phone or WhatsApp; availability is confirmed personally.\nProfessionals: Nuri (massage and wellness), Isa (beauty).\nLanguages: Spanish, Catalan, English.\n\n${items.filter(i=>!['legal','privacy','cookies'].includes(i.key)).map(i=>`- [${pageContent(i.key,i.language).title}](${i.url})`).join('\n')}\n\nPrices are published on the service pages. Session durations should be confirmed with the studio.\n`);
await rm(bundle);
console.log(`Prerendered ${items.length} complete pages with localized metadata, schema, hreflang and sitemap.`);
