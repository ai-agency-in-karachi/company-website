"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { REDUCED_MOTION } from "@/lib/use-media-query";

/**
 * Starts a mockup's micro-animations when it comes into view (also when a
 * panel slides in sideways in the horizontal project scroll).
 *
 * Content first: the server renders every mockup complete. Only after
 * mounting, and only if the mockup is still off screen, does this "arm" it
 * (data-armed), which lets CSS hold the entrance elements back; when the
 * mockup enters the viewport, data-inview plays them. With reduced motion
 * nothing is armed. Continuous details (typing, pulses, waveform) run in CSS.
 */
export function MockupStage({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia(REDUCED_MOTION).matches) return;
    const rect = element.getBoundingClientRect();
    const onScreen =
      rect.bottom > 0 && rect.top < window.innerHeight && rect.right > 0 && rect.left < window.innerWidth;
    if (onScreen) return;

    element.setAttribute("data-armed", "");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        element.setAttribute("data-inview", "");
      },
      { threshold: 0.35 },
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      element.removeAttribute("data-armed");
      element.removeAttribute("data-inview");
    };
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="mockup pointer-events-none select-none">
      {children}
    </div>
  );
}
