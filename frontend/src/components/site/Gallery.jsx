import { GALLERY } from "../../data/site";
import { Reveal, MaskLines } from "./Reveal";

export const Gallery = () => (
  <section id="galeria" data-testid="gallery" className="py-24 md:py-36 bg-cream">
    <div className="max-w-7xl mx-auto px-5 md:px-10">
      <div className="mb-14 max-w-2xl">
        <p className="overline mb-6">Galería</p>
        <h2 className="font-serif font-light text-forest text-6xl md:text-8xl leading-[0.98] tracking-tight">
          <MaskLines lines={["El ambiente lo", <span key="s">dice <em className="italic text-sage">todo</em></span>]} />
        </h2>
        <p className="mt-6 text-forest/60 leading-relaxed">
          Un espacio cálido, cercano y natural en pleno centro de Blanes, pensado para que desconectes desde que entras por la puerta.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[260px]">
        {GALLERY.map((g, i) => (
          <Reveal
            key={i}
            delay={(i % 3) * 0.08}
            className={`overflow-hidden rounded-[2px] group ${g.span === "tall" ? "row-span-2" : ""} ${i === 0 ? "col-span-2 md:col-span-2" : ""}`}
          >
            <div className="w-full h-full overflow-hidden">
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
