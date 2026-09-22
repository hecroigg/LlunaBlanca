const HERO_IMAGE = "/images/masaje-relajante-blanes.webp";

export const WellnessScene = () => (
  <div
    role="img"
    aria-label="Sesión de masaje relajante en Lluna Blanca, Blanes"
    className="relative w-full aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]"
  >
    <div className="absolute inset-[2.5%] rounded-[36px] border border-line/80 bg-gradient-to-b from-white via-cream to-sand/70 shadow-[0_28px_70px_rgba(44,53,43,0.08)]" />
    <div className="absolute inset-[4.5%] rounded-[32px] border border-white/80 bg-cream shadow-[inset_0_0_0_1px_rgba(44,53,43,0.04)]" />

    <div className="absolute inset-[6%] overflow-hidden rounded-[27px] bg-cream">
      <img
        src={HERO_IMAGE}
        alt="Masajista realizando un masaje relajante en Lluna Blanca"
        width="960"
        height="1440"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        draggable="false"
        className="h-full w-full object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-forest/5" />
    </div>

    <div className="pointer-events-none absolute left-[9%] right-[9%] bottom-[1.5%] h-7 rounded-full bg-forest/[0.055] blur-2xl" />
  </div>
);
