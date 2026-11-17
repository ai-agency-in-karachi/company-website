"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

/**
 * Safety net for any page: if something fails while rendering (for example
 * a browser extension or auto-translate altering the page before React
 * takes over), visitors see this instead of a blank screen, and can retry.
 */
export default function PageError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="container-wide flex min-h-[60svh] flex-col items-start justify-center py-[var(--section-y)]">
      <p className="eyebrow text-fg-soft">Something went wrong</p>
      <h1 className="mt-5 text-h2 text-fg">This page didn&apos;t load properly.</h1>
      <p className="mt-4 max-w-[34rem] text-lead text-fg-soft">
        Please try again. If it keeps happening, reload the page or try another browser.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button onClick={() => reset()}>Try again</Button>
        <Button variant="outline" arrow="none" onClick={() => window.location.reload()}>
          Reload page
        </Button>
      </div>
    </section>
  );
}
