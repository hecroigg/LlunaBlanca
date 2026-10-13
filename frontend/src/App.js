import './App.css';
import { LanguageProvider } from './context/LanguageContext';
import { resolveRoute } from './data/localized';
import { WellnessSite } from './components/site/WellnessSite';
import { CookieConsent } from './components/site/CookieConsent';

export default function App({ path = typeof window === 'undefined' ? '/' : window.location.pathname }) {
  const route = resolveRoute(path);
  return <LanguageProvider initialLanguage={route.language}>
    <WellnessSite route={route} />
    <CookieConsent />
  </LanguageProvider>;
}
