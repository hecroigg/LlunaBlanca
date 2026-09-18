import { useEffect, useState } from "react";
import { Cookie, ShieldCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

const CONSENT_COOKIE = "lluna_cookie_consent";
const CONSENT_VERSION = 1;
const ONE_YEAR = 60 * 60 * 24 * 365;

const DEFAULT_PREFERENCES = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const readConsent = () => {
  const entry = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${CONSENT_COOKIE}=`));

  if (!entry) return null;

  try {
    const value = JSON.parse(decodeURIComponent(entry.split("=").slice(1).join("=")));
    return value.version === CONSENT_VERSION ? value : null;
  } catch {
    return null;
  }
};

const writeConsent = (preferences) => {
  const consent = {
    version: CONSENT_VERSION,
    preferences: { ...preferences, necessary: true },
    updatedAt: new Date().toISOString(),
  };
  const secure = window.location.protocol === "https:" ? "; Secure" : "";

  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(consent))}; Path=/; Max-Age=${ONE_YEAR}; SameSite=Lax${secure}`;
  window.dispatchEvent(new CustomEvent("lluna:cookie-consent", { detail: consent }));
};

const PreferenceRow = ({ title, description, checked, disabled, onChange }) => (
  <div className="flex items-start justify-between gap-6 border-t border-line py-5">
    <div>
      <p className="font-medium text-forest">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-forest/60">{description}</p>
    </div>
    <label className={`relative mt-1 inline-flex shrink-0 items-center ${disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}>
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
        aria-label={title}
      />
      <span className="h-6 w-11 rounded-full bg-forest/20 transition-colors peer-checked:bg-sage peer-focus-visible:ring-2 peer-focus-visible:ring-sage peer-focus-visible:ring-offset-2" />
      <span className="absolute left-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-5" />
    </label>
  </div>
);

export const CookieConsent = () => {
  const [isReady, setIsReady] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState(DEFAULT_PREFERENCES);

  useEffect(() => {
    const saved = readConsent();

    if (saved) {
      setPreferences({ ...DEFAULT_PREFERENCES, ...saved.preferences, necessary: true });
    } else {
      setShowBanner(true);
    }
    setIsReady(true);

    const openSettings = () => {
      const current = readConsent();
      setPreferences({
        ...DEFAULT_PREFERENCES,
        ...(current?.preferences || {}),
        necessary: true,
      });
      setShowSettings(true);
    };

    window.addEventListener("lluna:open-cookie-settings", openSettings);
    return () => window.removeEventListener("lluna:open-cookie-settings", openSettings);
  }, []);

  const save = (nextPreferences) => {
    const normalized = { ...nextPreferences, necessary: true };
    writeConsent(normalized);
    setPreferences(normalized);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => save({ necessary: true, analytics: true, marketing: true });
  const rejectOptional = () => save(DEFAULT_PREFERENCES);

  if (!isReady) return null;

  return (
    <>
      {showBanner && (
        <section
          aria-label="Preferencias de cookies"
          className="fixed inset-x-4 bottom-4 z-40 mx-auto max-w-4xl rounded-md border border-line bg-cream p-5 shadow-2xl sm:p-6"
          data-testid="cookie-banner"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex max-w-2xl items-start gap-4">
              <span className="mt-1 rounded-full bg-sand p-2.5 text-sage" aria-hidden="true">
                <Cookie size={21} />
              </span>
              <div>
                <h2 className="font-serif text-2xl text-forest">Tu privacidad, a tu elección</h2>
                <p className="mt-2 text-sm leading-relaxed text-forest/65">
                  Usamos una cookie necesaria para recordar tu elección. Las cookies opcionales solo se activarán si las aceptas; actualmente no utilizamos herramientas analíticas ni publicitarias.
                </p>
              </div>
            </div>
            <div className="grid shrink-0 grid-cols-2 gap-2 sm:flex sm:flex-wrap lg:max-w-[270px] lg:justify-end">
              <button
                type="button"
                onClick={rejectOptional}
                className="rounded-full border border-forest/25 px-5 py-2.5 text-sm text-forest transition-colors hover:border-forest hover:bg-white"
              >
                Rechazar
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-full bg-forest px-5 py-2.5 text-sm text-cream transition-colors hover:bg-sage-dark"
              >
                Aceptar
              </button>
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="col-span-2 px-4 py-2 text-sm text-forest/70 underline decoration-forest/25 underline-offset-4 hover:text-forest sm:w-full"
              >
                Gestionar cookies
              </button>
            </div>
          </div>
        </section>
      )}

      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-h-[90vh] max-w-xl overflow-y-auto border-line bg-cream p-6 sm:p-8">
          <DialogHeader>
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-sand text-sage" aria-hidden="true">
              <ShieldCheck size={23} />
            </div>
            <DialogTitle className="font-serif text-3xl font-normal text-forest">Gestionar cookies</DialogTitle>
            <DialogDescription className="pt-2 text-sm leading-relaxed text-forest/65">
              Elige qué categorías permites. Puedes cambiar esta decisión cuando quieras desde el enlace del pie de página.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-3">
            <PreferenceRow
              title="Cookies necesarias"
              description="Permiten recordar tu elección de privacidad y son imprescindibles para esta función."
              checked
              disabled
            />
            <PreferenceRow
              title="Cookies analíticas"
              description="Ayudarían a entender el uso de la web. Actualmente no hay ninguna herramienta analítica instalada."
              checked={preferences.analytics}
              onChange={(checked) => setPreferences((current) => ({ ...current, analytics: checked }))}
            />
            <PreferenceRow
              title="Cookies de marketing"
              description="Se usarían para medir campañas o personalizar publicidad. Actualmente no utilizamos estas cookies."
              checked={preferences.marketing}
              onChange={(checked) => setPreferences((current) => ({ ...current, marketing: checked }))}
            />
          </div>

          <div className="mt-2 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={rejectOptional}
              className="rounded-full border border-forest/25 px-5 py-2.5 text-sm text-forest transition-colors hover:border-forest hover:bg-white"
            >
              Rechazar opcionales
            </button>
            <button
              type="button"
              onClick={() => save(preferences)}
              className="rounded-full bg-forest px-5 py-2.5 text-sm text-cream transition-colors hover:bg-sage-dark"
            >
              Guardar preferencias
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

