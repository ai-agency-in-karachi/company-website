import { home } from "@/content/site";
import { MaskedText } from "@/components/motion/MaskedText";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RatingSummary } from "./RatingSummary";

/* Review-platform conventions kept quiet: five stars in a muted gold (the
   rating signal people recognise) and initials instead of photos. No
   platform logo, and no claim that reviews are verified. */
const STAR = "#C99A2E";

function Stars({ size = "size-4" }: { size?: string }) {
  return (
    <span className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} viewBox="0 0 20 20" className={size} fill={STAR}>
          <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6L10 15l-5.4 3 1.2-6L1.3 7.8l6.1-.7z" />
        </svg>
      ))}
    </span>
  );
}

/**
 * Reviews: a rating summary on the left, and the reviews in two offset
 * columns of typography (no photos, no card grid).
 */
export function Reviews() {
  const content = home.reviews;
  const renderReview = (review: (typeof content.items)[number], index: number) => {
    return (
      // Even items sit lower on wide screens, so the two columns are offset.
      <Reveal
        as="li"
        key={review.name}
        delay={(index % 2) * 60 + Math.floor(index / 2) * 80}
        className="md:even:translate-y-20"
      >
        <figure className="rounded-card bg-raise p-6 md:p-7">
          <figcaption className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-stone font-display text-[1rem] font-bold text-ink"
            >
              {review.name[0]}
            </span>
            <span className="min-w-0">
              <span className="block font-semibold text-fg">{review.name}</span>
              <span className="block text-small text-fg-soft">{review.location}</span>
            </span>
          </figcaption>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
            <Stars />
            <span className="sr-only">Rated 5 out of 5.</span>
            <span className="text-small text-fg-soft">{review.service}</span>
          </div>
          <blockquote className="mt-3 text-[1.0625rem] leading-relaxed text-fg">
            <p>&ldquo;{review.text}&rdquo;</p>
          </blockquote>
        </figure>
      </Reveal>
    );
  };

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="section-y relative">
      <div className="container-wide grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+3rem)]">
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <MaskedText id="reviews-title" lines={content.title} className="mt-6 text-h2 text-fg" />
            <Reveal delay={100}>
              <p className="mt-6 text-lead text-fg-soft">{content.description}</p>
              <RatingSummary
                label={content.ratingLabel}
                basedOn={content.basedOn(content.items.length)}
                disclaimer={content.disclaimer}
                stars={<Stars size="size-5" />}
                starColor={STAR}
              />
            </Reveal>
          </div>
        </div>

        <ul className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-5 md:pb-20 lg:col-span-8">
          {content.items.map((review, index) => renderReview(review, index))}
        </ul>
      </div>
    </section>
  );
}
