import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  /** Section number, shown editorial-style: "02 — Services". */
  index?: string;
  as?: ElementType;
  className?: string;
};

/**
 * Small uppercase label that opens a section. With an index it reads
 * "02 — SERVICES" (number in sage); without one it is led by a small sage
 * square.
 */
export function Eyebrow({ children, index, as: Tag = "p", className }: EyebrowProps) {
  return (
    <Tag className={cn("eyebrow inline-flex items-center gap-3 text-fg", className)}>
      {index ? (
        <span aria-hidden="true" className="numeral text-em">
          {index}
        </span>
      ) : (
        <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-em" />
      )}
      {index ? (
        <span aria-hidden="true" className="h-px w-6 bg-line-strong">
          <span className="sr-only">—</span>
        </span>
      ) : null}
      <span>{children}</span>
    </Tag>
  );
}
