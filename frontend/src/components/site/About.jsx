import { IMAGES } from "../../data/site";
import { Reveal, MaskLines } from "./Reveal";

const CHAPTERS = [
  {
    n: "01",
    title: "Un espacio para reencontrarte",
    text: "Lluna Blanca es un centro de masajes, terapias naturales y estética en Blanes. Un espacio físico en Carrer de la Fe, 15, creado para cuidar de ti con calma.",
  },
  {
    n: "02",
    title: "Trato cercano y personalizado",
    text: "Aquí nadie es un número. Escuchamos lo que tu cuerpo necesita y adaptamos cada sesión a ti: la presión, el ritmo y la técnica. Un trato humano, profesional y sin prisas.",
  },
  {
    n: "03",
    title: "Bienestar que perdura",
    text: "Nuri se ocupa principalmente de los masajes y las terapias de bienestar. Isa está centrada en estética, limpiezas faciales y tratamientos faciales y corporales.",
  },
];

export const About = () => (
  <section id="sobre" data-testid="about" className="py-24 md:py-36 bg-cream">
    <div className="max-w-7xl mx-auto px-5 md:px-10">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left: heading + images */}
        <div className="lg:col-span-5">
          <p className="overline mb-6">Sobre Lluna Blanca</p>
          <h2 className="font-serif font-light text-forest text-6xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight">
            <MaskLines lines={["El arte de", "cuidar de ti,", <em key="e" className="italic text-sage">sesión a sesión.</em>]} />
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

        {/* Right: numbered manifesto */}
        <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
          <div className="space-y-14">
            {CHAPTERS.map((c, i) => (
              <Reveal key={c.n} delay={i * 0.1}>
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
