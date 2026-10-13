import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';
export { ROUTES, SITE_URL, LANGUAGES, UI, pageContent, getGroups, routeFor } from '../src/data/localized';
export { CONTACT, PHOTOS } from '../src/data/site';
export { COPY } from '../src/context/LanguageContext';
export function render(path) { return renderToString(<React.StrictMode><App path={path} /></React.StrictMode>); }
