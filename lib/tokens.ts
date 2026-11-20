/**
 * Design tokens for code that cannot read CSS variables: generated images
 * (Open Graph, icons), emails and JavaScript-driven motion. The CSS source
 * of truth is app/globals.css; keep the two in sync.
 */

export const palette = {
  /** Warm alabaster: the page canvas. */
  paper: "#F4F1EA",
  white: "#FBF9F4",
  stone: "#EAE5DA",
  stoneDeep: "#D9D2C3",
  mist: "#8A8F84",
  /** Charcoal: text. */
  ink: "#1C1C1C",
  /** Deep pine: dark surfaces and primary actions. */
  pine: "#0A1F14",
  pine2: "#153126",
  /** The one accent: olive-sage. */
  sage: "#637545",
  sageSoft: "#A9B78D",
  sageTint: "#E4E8D8",
  /** Functional only. */
  success: "#2F7A55",
  warning: "#A8741A",
  error: "#B23A2E",
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
