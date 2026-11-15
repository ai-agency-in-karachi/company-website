import { home } from "@/content/site";
import { cssVars } from "@/lib/cn";
import { MaskedText } from "@/components/motion/MaskedText";
import { Reveal } from "@/components/motion/Reveal";
import { BrandLogo } from "@/components/ui/BrandMark";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Client showcase as a dial: brand logos on the track of a very large wheel
 * that turns continuously. Only the top of the wheel is visible, so logos
 * rise over the horizon and set again. Every logo is centred exactly on the
 * drawn track (see "Client showcase" in globals.css for the geometry).
 *
 * Pure CSS, no JavaScript. The wheel never pauses: hovering a logo only
 * highlights it (it scales up slightly and turns cobalt) while the dial keeps
 * moving. With reduced motion the dial stays still.
 */
export function ClientShowcase() {
  const content = home.clients;
  // Two laps of the eight brands around the wheel.
  const items = [...content.brands, ...content.brands];

  return (
    <section id="clients" aria-labelledby="clients-title" className="section-y relative">
      <div className="container-wide grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className="lg:col-span-7">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <MaskedText id="clients-title" lines={content.title} className="mt-6 text-h2 text-fg" />
        </div>
        <Reveal className="lg:col-span-4 lg:col-start-9" delay={120}>
          <p className="text-lead text-fg-soft">{content.description}</p>
        </Reveal>
      </div>

      <div className="dial mt-10 lg:mt-14">
        <div className="dial__wheel">
          <span aria-hidden="true" className="dial__rim" />
          <span aria-hidden="true" className="dial__track" />
          <span aria-hidden="true" className="dial__ticks" />
          <ul aria-label={content.listLabel}>
            {items.map((brand, index) => (
              <li
                key={`${brand}-${index}`}
                aria-hidden={index >= content.brands.length ? "true" : undefined}
                className="dial__item"
                style={cssVars({ "--i": index, "--n": items.length })}
              >
                <span className="dial__tile flex size-28 items-center justify-center rounded-[1.25rem] border border-line bg-raise text-ink md:size-32">
                  <BrandLogo name={brand} className="h-auto w-[80%]" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
