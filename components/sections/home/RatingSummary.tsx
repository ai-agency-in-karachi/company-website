"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { cssVars } from "@/lib/cn";
import { easeBrand } from "@/lib/easing";
import { REDUCED_MOTION } from "@/lib/use-media-query";

const SCORE = 5;
const COUNT_MS = 1200;

type RatingSummaryProps = {
  label: string;
  basedOn: string;
  disclaimer: string;
  stars: ReactNode;
  starColor: string;
};

/**
 * The rating card. When it scrolls into view, the score counts up from 0.0
 * to 5.0 and the rating bars fill from the left, together.
 *
 * Content first: the server renders the final state (5.0, full bar), and
 * screen readers always get the final score. The animation is only set up
 * if the card starts off screen, so nothing visible ever jumps; with
 * reduced motion, or without JavaScript, the final state simply shows.
 */
export function RatingSummary({ label, basedOn, disclaimer, stars, starColor }: RatingSummaryProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const scoreRef = useRef<HTMLSpanElement>(null);

  // Layout effect: the reset to 0.0 happens before paint, so it is never seen.
  useLayoutEffect(() => {
    const root = rootRef.current;
    const score = scoreRef.current;
    if (!root || !score || window.matchMedia(REDUCED_MOTION).matches) return;
    const rect = root.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    let frame = 0;
    const write = (value: number) => {
      score.textContent = value.toFixed(1);
    };
    root.dataset.rating = "ready";
    write(0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        root.dataset.rating = "play";
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / COUNT_MS);
          write(SCORE * easeBrand(progress));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(root);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      delete root.dataset.rating;
      write(SCORE);
    };
  }, []);

  return (
    <div ref={rootRef} className="rating mt-10 rounded-card bg-raise p-6">
      <p className="eyebrow text-fg-soft">{label}</p>
      <div className="mt-2 flex items-center gap-4">
        <span className="font-display text-[3.5rem] leading-none font-extrabold tracking-[-0.04em] text-fg tabular-nums">
          <span className="sr-only">{SCORE.toFixed(1)}</span>
          <span ref={scoreRef} aria-hidden="true">
            {SCORE.toFixed(1)}
          </span>
        </span>
        <span>
          {stars}
          <span className="sr-only">5 out of 5 stars.</span>
          <span className="mt-1 block text-small text-fg-soft">{basedOn}</span>
        </span>
      </div>
      <ul aria-hidden="true" className="mt-5 space-y-1.5">
        {[5, 4, 3, 2, 1].map((stars, index) => (
          <li key={stars} className="flex items-center gap-3 text-small text-fg-soft">
            <span className="numeral w-3">{stars}</span>
            <span className="h-2 flex-1 overflow-hidden rounded-full bg-line">
              <span
                className="rating-bar block h-full rounded-full"
                style={cssVars(
                  { "--i": index },
                  { width: stars === SCORE ? "100%" : "0%", backgroundColor: starColor },
                )}
              />
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-[0.8125rem] text-fg-soft">{disclaimer}</p>
    </div>
  );
}
