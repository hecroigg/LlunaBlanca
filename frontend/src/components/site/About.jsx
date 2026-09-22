import { IMAGES } from "../../data/site";
import { Reveal, MaskLines } from "./Reveal";
import { useLanguage } from "../../context/LanguageContext";

export const About = () => {
  const { language, copy } = useLanguage();
  const chapters = copy.about.chapters.map((chapter, index) => ({
    n: `0${index + 1}`,
    title: chapter[0],
    text: chapter[1],
  }));

  return (
    <section id="sobre" data-testid="about" className="py-24 md:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="overline mb-6">{copy.about.eyebrow}</p>
            <h2 className="font-serif font-light text-forest text-6xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight">
              <MaskLines lines={[
                copy.about.lines[0],
                copy.about.lines[1],
                <em key={`${language}-about-em`} className="italic text-sage">{copy.about.lines[2]}</em>,
              ]} />
            </h2>

            <div className="mt-12 grid grid-cols-2 gap-4">
              <Reveal className="col-span-1">
                <div className="aspect-[3/4] overflow-hidden rounded-[2px] group">
                  <img src={IMAGES.about1} alt="Entrada del centro Lluna Blanca en Blanes" width="900" height="1200" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </Reveal>
              <Reveal delay={0.15} className="col-span-1 mt-10">
                <div className="aspect-[3/4] overflow-hidden rounded-[2px] group">
                  <img src={IMAGES.about2} alt="Sala de tratamientos de Lluna Blanca" width="900" height="1200" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
            <div className="space-y-14">
              {chapters.map((c, i) => (
                <Reveal key={`${language}-${c.n}`} delay={i * 0.1}>
                  <div className="flex gap-6 md:gap-8">
                    <span className="font-serif text-5xl md:text-6xl font-light text-line leading-none shrink-0">{c.n}</span>
                    <div className="pt-1">
                      <h3 className="font-serif text-3xl md:text-4xl text-forest mb-3">{c.title}</h3>
                      <p className="text-forest/65 leading-relaxed max-w-md">{c.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
