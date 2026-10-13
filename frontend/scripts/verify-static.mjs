import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
const require=createRequire(import.meta.url),{JSDOM}=require('jsdom');
const root=path.resolve('build'),documents=new Map();
async function walk(dir) { for(const name of await readdir(dir)) {const file=path.join(dir,name);if((await stat(file)).isDirectory())await walk(file);else if(name==='index.html'){const route='/'+path.relative(root,path.dirname(file)).split(path.sep).filter(Boolean).join('/')+(path.dirname(file)===root?'':'/');documents.set(route,new JSDOM(await readFile(file,'utf8')).window.document);}} }
await walk(root);
let links=0,schemas=0,services=0;
assert.equal(documents.size,30);
for(const [route,doc] of documents){
 assert.equal(doc.querySelectorAll('h1').length,1,`${route}: one H1`);
 assert.ok(['es','ca','en'].includes(doc.documentElement.lang),`${route}: language`);
 assert.equal(doc.querySelectorAll('link[rel="canonical"]').length,1);
 assert.equal(doc.querySelector('link[rel="canonical"]').href,'https://www.llunablancablanes.com'+route,`${route}: canonical`);
 assert.deepEqual([...doc.querySelectorAll('link[hreflang]')].map(x=>x.hreflang).sort(),['ca','en','es','x-default']);
 assert.ok(doc.querySelector('meta[name="description"]').content.length>30);
 const scripts=doc.querySelectorAll('script[type="application/ld+json"]');assert.equal(scripts.length,1);
 const graph=JSON.parse(scripts[0].textContent)['@graph'];schemas++;
 for(const node of graph){assert.notEqual(node['@type'],'AggregateRating');if(node['@type']==='Service'){services++;assert.ok(node.name);if(node.offers)assert.equal(node.offers.priceCurrency,'EUR');}if(node['@type']==='FAQPage')for(const qa of node.mainEntity){assert.ok(doc.body.textContent.includes(qa.name),`${route}: visible question`);assert.ok(doc.body.textContent.includes(qa.acceptedAnswer.text),`${route}: visible answer`);}}
 for(const link of doc.querySelectorAll('a[href]')){const href=link.getAttribute('href');links++;if(href.startsWith('/')||href.startsWith('#')){const [pathname,fragment]=href.split('#');const target=documents.get(pathname||route);assert.ok(target,`${route}: linked page ${href}`);if(fragment)assert.ok(target.getElementById(fragment),`${route}: fragment ${href}`);}if(href.startsWith('https://wa.me/')){const url=new URL(href);assert.equal(url.pathname,'/34636604359');assert.ok(url.searchParams.get('text'));}}
 for(const image of doc.querySelectorAll('img')){assert.ok(image.hasAttribute('alt'));assert.ok(image.hasAttribute('width'));assert.ok(image.hasAttribute('height'));await stat(path.join(root,image.getAttribute('src')));}
}
const sitemap=new JSDOM(await readFile(path.join(root,'sitemap.xml'),'utf8'),{contentType:'application/xml'}).window.document;
assert.equal(sitemap.querySelectorAll('url').length,30);
const missing=new JSDOM(await readFile(path.join(root,'404.html'),'utf8')).window.document;assert.ok(missing.querySelector('meta[name="robots"]').content.includes('noindex'));
for(const font of ['cormorant-normal','cormorant-italic','outfit-normal'])assert.ok((await stat(path.join(root,'fonts',font+'.woff2'))).size>5000);
console.log(`PASS: ${documents.size} prerendered pages, ${links} links, ${schemas} JSON-LD graphs, ${services} services, 30 sitemap URLs, localized FAQs, booking destinations, assets and 404.`);
