const WORDS = ["Lluna Blanca", "Masajes", "Bienestar", "Relajación", "Blanes", "Terapias Naturales", "Equilibrio"];

export const Marquee = () => {
  const row = [...WORDS, ...WORDS];
  return (
    <section data-testid="marquee" className="bg-sand border-y border-line py-6 overflow-hidden select-none">
      <div className="flex w-max animate-marquee">
        {row.map((w, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="font-serif italic text-2xl md:text-4xl text-forest/85 px-6 md:px-10">{w}</span>
            <span className="text-sage text-xl">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
};
