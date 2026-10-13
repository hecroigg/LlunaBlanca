import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { useLanguage } from '../../context/LanguageContext';
import { UI } from '../../data/localized';

const COOKIE = 'lluna_cookie_consent';
const DEFAULT = { necessary: true, analytics: false, marketing: false };
function readConsent() {
  const entry = document.cookie.split('; ').find(item => item.startsWith(`${COOKIE}=`));
  if (!entry) return null;
  try { const value = JSON.parse(decodeURIComponent(entry.split('=').slice(1).join('='))); return value.version === 1 ? value : null; } catch { return null; }
}
export function CookieConsent() {
  const { language } = useLanguage();
  const t = UI[language].cookie;
  const [banner,setBanner] = useState(false), [settings,setSettings] = useState(false), [preferences,setPreferences] = useState(DEFAULT);
  useEffect(() => {
    const current=readConsent();
    if(current) setPreferences({...DEFAULT,...current.preferences,necessary:true}); else setBanner(true);
    const open=()=>{setPreferences({...DEFAULT,...readConsent()?.preferences,necessary:true});setSettings(true);};
    window.addEventListener('lluna:open-cookie-settings',open);
    return ()=>window.removeEventListener('lluna:open-cookie-settings',open);
  },[]);
  useEffect(()=>{document.body.dataset.cookieBanner=String(banner);return ()=>delete document.body.dataset.cookieBanner;},[banner]);
  const save = next => {
    const consent={version:1,preferences:{...next,necessary:true},updatedAt:new Date().toISOString()};
    document.cookie=`${COOKIE}=${encodeURIComponent(JSON.stringify(consent))}; Path=/; Max-Age=31536000; SameSite=Lax${window.location.protocol==='https:'?'; Secure':''}`;
    window.dispatchEvent(new CustomEvent('lluna:cookie-consent',{detail:consent}));
    setPreferences(consent.preferences);setBanner(false);setSettings(false);
  };
  return <>
    {banner && <section className="cookie-banner" aria-label={t.title} data-testid="cookie-banner"><h2>{t.title}</h2><p>{t.text}</p><div className="cookie-actions"><button className="button button-outline" onClick={()=>save(DEFAULT)}>{t.reject}</button><button className="button button-primary" onClick={()=>save({necessary:true,analytics:true,marketing:true})}>{t.accept}</button><button onClick={()=>setSettings(true)}>{t.settings}</button></div></section>}
    <Dialog open={settings} onOpenChange={setSettings}><DialogContent closeLabel={t.close} className="cookie-settings max-h-[85svh] max-w-lg overflow-y-auto border-line bg-cream p-6 sm:p-8"><DialogHeader><DialogTitle>{t.settings}</DialogTitle><DialogDescription>{t.description}</DialogDescription></DialogHeader>{['necessary','analytics','marketing'].map(key=><div className="preference" key={key}><div><label htmlFor={`consent-${key}`}>{t[key]}</label><p>{t[`${key}Text`]}</p></div><input id={`consent-${key}`} type="checkbox" disabled={key==='necessary'} checked={preferences[key]} onChange={event=>setPreferences(current=>({...current,[key]:event.target.checked}))} /></div>)}<div className="cookie-save"><button className="button button-outline" onClick={()=>save(DEFAULT)}>{t.reject}</button><button className="button button-primary" onClick={()=>save(preferences)}>{t.save}</button></div></DialogContent></Dialog>
  </>;
}
