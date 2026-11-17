import { home } from "@/content/site";
import { MaskedText } from "@/components/motion/MaskedText";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Why choose us: five points in a clean vertical stack, each a flat,
 * full-width row (number, title, explanation).
 */
export function WhyChooseUs() {
  const content = home.why;
  return (
    <section id="difference" aria-labelledby="why-title" className="section-y relative">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <MaskedText id="why-title" lines={content.title} className="mt-6 text-h2 text-fg" />
          </div>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={120}>
            <p className="text-lead text-fg-soft">{content.description}</p>
          </Reveal>
        </div>

        <ol className="mt-12 space-y-3 lg:mt-16">
          {content.points.map((point, index) => (
            <li key={point.title}>
              <Reveal delay={index * 60}>
                <div className="grid grid-cols-[auto_1fr] items-start gap-x-5 rounded-card bg-raise p-6 md:grid-cols-[auto_minmax(0,1fr)_minmax(0,1.15fr)] md:items-center md:gap-x-10 md:px-8 md:py-7">
                  <span
                    aria-hidden="true"
                    className="flex size-12 items-center justify-center rounded-[0.875rem] bg-ink font-display text-[1.25rem] font-extrabold text-paper md:size-14"
                  >
                    {index + 1}
                  </span>
                  <h3 className="font-display text-title font-bold text-fg md:text-[1.75rem] md:leading-[1.1] md:tracking-[-0.03em]">
                    {point.title}
                  </h3>
                  <p className="col-start-2 mt-2 text-fg-soft md:col-start-3 md:mt-0">{point.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
