import { site } from "@/content/site";
import { cn } from "@/lib/cn";

/**
 * The Betterflow mark: a geometric B, a stem and two flowing bowls, in
 * alabaster on a deep pine square, the lower bowl in sage. Flat colour, so
 * it works at any size. The same drawing is used for the favicon, the Apple
 * icon and the social image.
 */
export function BMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" className={className}>
      <rect width="32" height="32" rx="8" fill="#0A1F14" />
      <rect x="9" y="7" width="4.5" height="18" rx="1" fill="#F4F1EA" />
      <path d="M13.5 7h2.75a4.25 4.25 0 0 1 0 8.5H13.5z" fill="#F4F1EA" />
      <path d="M13.5 15.5h3.5a4.75 4.75 0 0 1 0 9.5h-3.5z" fill="#A9B78D" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <BMark className="size-8 shrink-0" />
      <span className="font-display text-[1.625rem] leading-none font-semibold tracking-[-0.01em]">{site.name}</span>
    </span>
  );
}
