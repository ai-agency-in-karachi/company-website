import { Fragment, type ReactNode } from "react";

/**
 * Renders a heading line, turning any *phrase* into the italic accent
 * (Cormorant italic in olive-sage, see .accent-em in globals.css). Content
 * marks accents with asterisks, e.g. ["Three disciplines.", "*One accountable team.*"].
 */
export function renderAccent(line: string): ReactNode {
  if (!line.includes("*")) return line;
  return line.split(/(\*[^*]+\*)/g).map((part, index) =>
    part.startsWith("*") && part.endsWith("*") && part.length > 2 ? (
      <em key={index} className="accent-em">
        {part.slice(1, -1)}
      </em>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    ),
  );
}

/** The same line as plain text, for metadata and screen-reader labels. */
export function plainAccent(line: string) {
  return line.replace(/\*/g, "");
}
