import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "../ui/accordion";
import { MaskLines } from "./Reveal";
import { useLanguage } from "../../context/LanguageContext";

export const Faq = () => {
  const { language, copy } = useLanguage();

  return (
    <section id="faq" data-testid="faq" className="py-24 md:py-36 bg-cream">
      <div className="max-w-3xl mx-auto px-5 md:px-10">
        <div className="mb-14">
          <p className="overline mb-6">{copy.faq.eyebrow}</p>
          <h2 className="font-serif font-light text-forest text-6xl md:text-8xl leading-[0.98] tracking-tight">
            <MaskLines lines={[copy.faq.lines[0], <em key={`${language}-faq-em`} className="italic text-sage">{copy.faq.lines[1]}</em>]} />
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {copy.faq.items.map((f, i) => (
            <AccordionItem key={`${language}-${i}`} value={`item-${i}`} className="border-b border-line" data-testid={`faq-item-${i}`}>
              <AccordionTrigger className="text-left font-serif text-xl md:text-2xl text-forest hover:text-sage hover:no-underline py-6">
                {f[0]}
              </AccordionTrigger>
              <AccordionContent className="text-forest/65 text-base leading-relaxed pb-6">
                {f[1]}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
