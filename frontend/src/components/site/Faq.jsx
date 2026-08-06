import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "../ui/accordion";
import { FAQS } from "../../data/site";
import { MaskLines } from "./Reveal";

export const Faq = () => (
  <section id="faq" data-testid="faq" className="py-24 md:py-36 bg-cream">
    <div className="max-w-3xl mx-auto px-5 md:px-10">
      <div className="mb-14">
        <p className="overline mb-6">Preguntas frecuentes</p>
        <h2 className="font-serif font-light text-forest text-4xl md:text-6xl leading-[1] tracking-tight">
          <MaskLines lines={["Antes de tu", <em key="e" className="italic text-sage">visita</em>]} />
        </h2>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {FAQS.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-b border-line" data-testid={`faq-item-${i}`}>
            <AccordionTrigger className="text-left font-serif text-xl md:text-2xl text-forest hover:text-sage hover:no-underline py-6">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-forest/65 text-base leading-relaxed pb-6">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
