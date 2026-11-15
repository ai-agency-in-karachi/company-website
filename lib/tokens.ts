/**
 * Design tokens for code that cannot read CSS variables: generated images
 * (Open Graph, icons), emails and JavaScript-driven motion. The CSS source
 * of truth is app/globals.css; keep the two in sync.
 */

export const palette = {
  /** Warm stone: the page canvas. */
  paper: "#F3F1EC",
  white: "#FDFCFA",
  stone: "#E9E6DF",
  stoneDeep: "#D8D4CA",
  mist: "#8D8A99",
  /** Near-black navy: text and dark surfaces. */
  ink: "#111322",
  night: "#181B2E",
  /** The one accent. */
  cobalt: "#3245D1",
  cobaltSoft: "#93A0F5",
  cobaltTint: "#E2E5FA",
  /** Functional only. */
  success: "#2F8F6B",
  warning: "#B07D1F",
  error: "#C0392B",
} as const;

export type PaletteColor = keyof typeof palette;

/**
 * Motion: smooth and controlled. UI feedback is quick (150 to 320ms),
 * and reveals take 0.6s.
 * Values in seconds for Framer Motion and GSAP; CSS uses --dur-*.
 */
export const motion = {
  /** cubic-bezier(0.22, 1, 0.36, 1) */
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  duration: {
    fast: 0.15,
    base: 0.24,
    slow: 0.36,
    reveal: 0.6,
  },
} as const;
