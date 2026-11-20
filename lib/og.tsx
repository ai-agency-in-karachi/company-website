import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { home, site } from "@/content/site";
import { palette } from "./tokens";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

// Read once when the module loads, so image routes can be prerendered at build time.
// The same families as the site (SIL Open Font License, see assets/fonts).
const [serif, serifItalic, sans] = await Promise.all([
  readFile(join(process.cwd(), "assets/fonts/CormorantGaramond-Medium.ttf")),
  readFile(join(process.cwd(), "assets/fonts/CormorantGaramond-MediumItalic.ttf")),
  readFile(join(process.cwd(), "assets/fonts/PlusJakartaSans-Medium.ttf")),
]);

const fonts = [
  { name: "Cormorant", data: serif, style: "normal" as const, weight: 500 as const },
  { name: "Cormorant", data: serifItalic, style: "italic" as const, weight: 500 as const },
  { name: "Jakarta", data: sans, style: "normal" as const, weight: 500 as const },
];

/** The Betterflow B mark, as in components/ui/Logo.tsx. */
function Mark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <rect width="32" height="32" rx="8" fill={palette.pine2} />
      <rect x="9" y="7" width="4.5" height="18" rx="1" fill={palette.paper} />
      <path d="M13.5 7h2.75a4.25 4.25 0 0 1 0 8.5H13.5z" fill={palette.paper} />
      <path d="M13.5 15.5h3.5a4.75 4.75 0 0 1 0 9.5h-3.5z" fill={palette.sageSoft} />
    </svg>
  );
}

/** A heading line whose *phrase* is set in italic sage (as on the site). */
function Line({ line }: { line: string }) {
  const parts = line.split(/(\*[^*]+\*)/g).filter(Boolean);
  return (
    <div style={{ display: "flex" }}>
      {parts.map((part, index) =>
        part.startsWith("*") ? (
          <span key={index} style={{ fontStyle: "italic", color: palette.sageSoft, whiteSpace: "pre" }}>
            {part.slice(1, -1)}
          </span>
        ) : (
          <span key={index} style={{ whiteSpace: "pre" }}>
            {part}
          </span>
        ),
      )}
    </div>
  );
}

type OgOptions = { eyebrow: string; lines: readonly string[]; footer?: string };

export async function renderOgImage({ eyebrow, lines, footer = site.tagline }: OgOptions) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px 60px",
        background: palette.pine,
        color: palette.paper,
        fontFamily: "Jakarta",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Mark size={48} />
        <span style={{ fontFamily: "Cormorant", fontSize: 44, letterSpacing: -0.5 }}>{site.name}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 20, letterSpacing: 2.4, color: palette.sageSoft, textTransform: "uppercase" }}>
          {eyebrow}
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 24,
            fontFamily: "Cormorant",
            fontSize: 84,
            lineHeight: 1.02,
            letterSpacing: -1,
          }}
        >
          {lines.map((line) => (
            <Line key={line} line={line} />
          ))}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <span style={{ width: 40, height: 2, background: palette.sage }} />
        <span style={{ fontSize: 22, color: "#B9BDB2" }}>{footer}</span>
      </div>
    </div>,
    { ...ogSize, fonts },
  );
}

export function renderSiteOgImage() {
  return renderOgImage({ eyebrow: home.hero.eyebrow, lines: home.hero.title });
}
