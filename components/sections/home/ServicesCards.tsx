import { Check } from "lucide-react";
import { home } from "@/content/site";
import { MaskedText } from "@/components/motion/MaskedText";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Services, editorial and brief: the heading and intro side by side, then
 * three cards (one per discipline) with a short promise, what it covers
 * and a link to the full service page.
 */
export function ServicesCards() {
  const content = home.services;
  return (
    <section id="services" aria-labelledby="services-title" className="section-y relative">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <Eyebrow index={content.index}>{content.eyebrow}</Eyebrow>
            <MaskedText id="services-title" lines={content.title} className="mt-6 text-h2 text-fg" />
          </div>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={120}>
            <p className="max-w-[34rem] text-lead text-fg-soft">{content.intro}</p>
            <ArrowLink href={content.allLink.href} direction="right" className="mt-4 text-fg">
              {content.allLink.label}
            </ArrowLink>
          </Reveal>
        </div>

        <Stagger as="ol" stagger={80} className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-16 lg:gap-5">
          {content.cards.map((card, index) => (
            <StaggerItem as="li" key={card.title} index={index} className="flex">
              <article
                aria-labelledby={`service-card-${index}`}
                className="flex w-full flex-col rounded-card border border-line bg-raise p-7 transition-[border-color,translate] duration-[var(--dur-slow)] ease-brand hover:-translate-y-1 hover:border-line-strong lg:p-8"
              >
                <p className="eyebrow flex items-center gap-3 text-fg-soft">
                  <span className="numeral text-em">{card.index}</span>
                  <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
                </p>
                <h3
                  id={`service-card-${index}`}
                  className="mt-6 text-[clamp(1.625rem,1.35rem+0.7vw,2rem)] leading-[1.1] text-fg"
                >
                  {card.title}
                </h3>
                <p className="mt-3 text-fg-soft">{card.text}</p>
                <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.9375rem] text-fg">
                      <Check aria-hidden="true" strokeWidth={2} className="mt-0.5 size-4 shrink-0 text-em" />
                      {item}
                    </li>
                  ))}
                </ul>
                <ArrowLink href={card.href} direction="right" className="mt-auto pt-8 text-fg">
                  {content.exploreLabel}
                  <span className="sr-only"> {card.title}</span>
                </ArrowLink>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
