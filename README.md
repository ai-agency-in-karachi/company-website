# Betterflow website

Marketing website for **Betterflow**, a demo tech agency brand that builds software, AI agents, business automation, websites and mobile apps.

Three main pages in the navigation: **Home** (`/`), **Services** (`/services`, with a detail page per service at `/services/[slug]`) and **Contact** (`/contact`). Featured projects open their own pages at `/projects/[slug]`, and there is a custom 404.

**Stack:** Next.js 16 (App Router, Cache Components, Turbopack), React 19, TypeScript (strict), Tailwind CSS 4, Framer Motion, GSAP ScrollTrigger, Lucide icons, simple-icons (technology logos), clsx + tailwind-merge, Resend (email), zod (validation).

---

## Getting started

Requires Node.js 22.12 or newer.

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

| Script              | What it does                                              |
| ------------------- | --------------------------------------------------------- |
| `npm run dev`       | Development server with hot reload                        |
| `npm run build`     | Production build                                          |
| `npm run start`     | Serves the production build                               |
| `npm run lint`      | ESLint (Next.js core web vitals and TypeScript rules)     |
| `npm run typecheck` | Generates route types and runs the TypeScript compiler    |
| `npm run check`     | Type check, lint and build in one go (use before deploys) |

### Environment variables

| Variable               | Required | Purpose                                                                    |
| ---------------------- | -------- | -------------------------------------------------------------------------- |
| `RESEND_API_KEY`       | Yes      | Resend API key used to send the contact emails                             |
| `CONTACT_TO_EMAIL`     | Yes      | Inbox that receives new enquiries                                          |
| `CONTACT_FROM_EMAIL`   | Yes      | Sender for both emails, on a domain verified in Resend                     |
| `NEXT_PUBLIC_SITE_URL` | Yes      | Public URL without trailing slash (canonical URLs, sitemap, social images) |

Without the email variables the form still validates; on submit it explains that email is not set up yet (development) or shows a generic message with the email address (production).

---

## Before you launch

**The full checklist of every piece of demo content (copy, reviews, projects, mockup data, logos), grouped by section, is in [`CONTENT_TO_REPLACE.md`](CONTENT_TO_REPLACE.md).** The short version:

Betterflow is a demo brand. Replace these placeholders, all in `content/` unless noted:

1. **Domain:** `NEXT_PUBLIC_SITE_URL` (and `site.url` in `content/site.ts`).
2. **Email and location:** `site.contact`.
3. **Social profiles:** `site.socials` currently point to the platforms' home pages.
4. **Reviews:** `home.reviews.items` are demo reviews, labelled as such on the page. Replace them with real ones (and only ever show genuine reviews).
5. **Projects:** `content/projects.ts` holds six demo concepts. Their pages are `noindex` and stay out of the sitemap.
6. **Mockup figures:** numbers inside the coded mockups (`components/mockups/`) are illustrative.
7. **Logo:** the N mark is in `components/ui/Logo.tsx`, `app/icon.svg`, `app/apple-icon.tsx`, `app/favicon.ico` and `public/logo.png`.

---

## Home page order

Hero → Services (three cards) → How We Work (process) → Selected Work (projects) → Powered by the Right Tools (technology) → Why Choose Us → Reviews → Final call to action. The order is set in `app/page.tsx`; each section after the hero is numbered (“02 — Services” to “08”).

## Editing content

All copy lives in **`content/`**; components never hard-code text.

- `content/site.ts`: brand, navigation, every home section (`home.hero`, `home.clients`, `home.about`, `home.services`, `home.why`, `home.process`, `home.projects`, `home.tech`, `home.reviews`, `home.finalCta`), services page copy, contact page, footer and 404.
- `content/services.ts`: the eight services, including the detail-view copy (offerings, delivery steps, stack, deliverables, fit, timeline). The `slug` is used in `/services/[slug]` and `/contact?service=[slug]`.
- `content/projects.ts`: the six featured projects; `visual` picks the coded mockup and `stage` the panel colour.
- Headlines are arrays: **each entry is one line** of the heading, so the line breaks are designed.
- Technology logos come from `simple-icons` and are mapped in `lib/tech-icons.tsx`; tools without a logo there get a typographic monogram.

---

## How it is built

```
app/                     routes, metadata (sitemap, robots, icons, OG images), contact API
  services/[slug]/       service detail view
  projects/[slug]/       project page
components/
  layout/                header, mobile menu, footer, skip link, back to top
  mockups/               coded product visuals (WhatsApp inbox, voice agent, dashboard,
                         storefront, mobile app, workflow canvas)
  motion/                RevealManager, Reveal, Stagger, MaskedText,
                         PageTransition, MotionProvider
  sections/              page sections (home, contact)
  ui/                    Button, ArrowLink, Eyebrow, Logo
content/                 all editable text and data
lib/                     tokens, class helper, lazy GSAP hook, service/project styles,
                         tech icons, SEO, email, validation, rate limit
```

### Colour

An editorial palette: one warm canvas, charcoal text, deep pine for weight and a single olive-sage accent.

- **Canvas:** warm alabaster `#F4F1EA` on every page; cards and raised surfaces `#FBF9F4` or stone `#EAE5DA`.
- **Text:** charcoal `#1C1C1C`.
- **Deep pine:** `#0A1F14` (with `#153126`) for primary buttons and dark surfaces: footer, mobile menu, contact card, alternate project panels, the tech orbit's core.
- **Accent:** olive-sage `#637545` (with `sage-soft` `#A9B78D` on dark and `sage-tint` `#E4E8D8` for quiet fills) for italic accent phrases, section numbers, markers and chart highlights.
- **Functional only:** success, warning and error for form feedback and status pills inside the mockups; star ratings use a muted gold.
- Flat colour throughout: no gradients, glass or blur.

Text and line colours are CSS variables exposed as Tailwind colours (`bg-canvas`, `text-fg`, `text-fg-soft`, `border-line`, `bg-accent`, `text-on-accent`, `bg-raise`, `text-em`). Dark surfaces set `data-tone-fixed="pine"`, which redefines them inside.

### Typography

Based on [Practical Typography](https://practicaltypography.com/summary-of-key-rules.html) and a modular scale from [typescale.com](https://typescale.com/).

- **Faces:** Cormorant Garamond for headings at weight 500 (never bold), with italics for accent phrases; Plus Jakarta Sans for text; Geist Mono for small numbers.
- **Scale:** a Perfect Fourth (1.333) on large screens, easing to about a Minor Third (1.2) on phones through fluid `clamp()` sizes. Desktop heading steps: 28, 38, 50, 67 and 90px (`text-title`, `text-h3`, `text-h2`, `text-h1`, `text-display`).
- **Text:** 17px body with 1.45 line height (Practical Typography: 120–145%) and paragraphs capped around 66 characters (45–90).
- **Details:** uppercase labels get 10% letterspacing (5–12%); curly quotes and apostrophes; bold and italic never combined.
- **Accents in headlines:** wrap a phrase in asterisks in `content/` (for example `"*One accountable team.*"`) to set it in italic sage.

### Design tokens

Defined once in `app/globals.css` (`@theme`) and mirrored in `lib/tokens.ts` for generated images and emails.

- **Palette:** see "Colour" above; tokens live in `@theme` and in `lib/tokens.ts`.
- **Type:** see "Typography" above; sizes are tokens in `@theme`.
- **Class names:** build conditional classes with `cn()` from `lib/cn.ts`; register new text, radius or shadow tokens there too.

### Motion

Smooth and controlled, one easing everywhere (`cubic-bezier(0.22, 1, 0.36, 1)`).

- **Reveals** (`Reveal`, `Stagger`, `MaskedText`) render on the server with data attributes; a single `IntersectionObserver` in `RevealManager` reveals each once with CSS transitions. Content already on screen is never hidden.
- **Hero:** pure CSS entrance; the isometric blocks (`IsoBlocks.tsx`, flat-shaded SVG with a true isometric projection) drop into place and two modules drift gently.
- **Framer Motion:** the navbar pill (`layoutId`). Loaded lazily by `MotionProvider`.
- **Selected Work:** on every desktop-width screen (1024px and up, any height, without reduced motion) the section pins and scrolling pans the project panels horizontally (GSAP ScrollTrigger, scrubbed 1:1 with light smoothing), with a progress line and counter; it unpins after the last project. On shorter screens each mockup scales down to fit its panel and the feature list is left out. On phones, and always on the server, it is a vertical list.
- **Mockup micro-animations:** each mockup plays a short entrance when it comes into view (`components/mockups/MockupStage.tsx`: messages and cards rise in, chart bars grow, the donut draws, progress bars fill), plus continuous details in CSS: a reply typing itself in the WhatsApp composer, a breathing AI waveform, pulsing live and active states.
- **GSAP ScrollTrigger** (loaded on demand): the horizontal projects and the process track filling with its step counter.
- **Technology orbit:** three CSS rings at different speeds and directions, tiles counter-rotating to stay upright; the category list filters the orbit.
- **Page transitions:** React `<ViewTransition>`; service titles morph from the index into the detail page.
- `prefers-reduced-motion` turns off every continuous animation and scroll effect, leaving short fades.
- **Hydration safety:** components that animate or change layout on the client (horizontal projects, rating count-up, mockup entrances) render the server's static version first and only enhance after mounting (`lib/use-mounted.ts`), so the HTML React hydrates always matches the server. `<html>` and `<body>` carry `suppressHydrationWarning` for attributes added by browser extensions, and `app/error.tsx` / `app/global-error.tsx` show a "Try again" screen instead of a blank page if anything still fails.

### Contact form

`components/sections/contact/ContactForm.tsx` and `app/api/contact/route.ts` share one zod schema (`lib/contact-schema.ts`). Spam protection: honeypot, minimum time-to-submit, same-origin check, body size limit and a per-IP rate limit (5 requests per 10 minutes, in memory). Input is escaped before it goes into an email. Without JavaScript the form still posts and the API replies with a simple HTML page.

---

## Security

- **Secrets stay on the server.** `RESEND_API_KEY` and the contact addresses are read only in `lib/email.ts`, which imports `server-only`, so the build fails if it is ever pulled into browser code. The browser talks only to `/api/contact`; it never calls Resend or sees a key. The only `NEXT_PUBLIC_` variable is the public site URL.
- **Nothing sensitive is committed.** `.gitignore` excludes every `.env*` file except `.env.example` (which holds no values), plus keys, certificates, credential files and `.npmrc`.
- **Contact API:** zod validation, honeypot, minimum fill time, same-origin check, body size limit and per-IP rate limit; all input is HTML-escaped in emails and header values are stripped of line breaks.
- **Headers** (`next.config.ts`): HSTS, `X-Frame-Options: DENY`, `nosniff`, a strict referrer policy, a restrictive permissions policy, `Cross-Origin-Opener-Policy: same-origin`, and a CSP that forbids framing, plugins, `<base>` changes and off-site form posts.

## Deploying to Vercel

1. Import the repository in Vercel (framework preset: Next.js).
2. Add the four environment variables.
3. Deploy, add your domain and update `NEXT_PUBLIC_SITE_URL`.
4. Verify your sending domain in Resend.
