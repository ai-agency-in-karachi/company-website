# NOVARY® website

Marketing website for **NOVARY®**, a demo tech agency brand that builds software, AI agents, business automation, websites and mobile apps.

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

NOVARY® is a demo brand. Replace these placeholders, all in `content/` unless noted:

1. **Domain:** `NEXT_PUBLIC_SITE_URL` (and `site.url` in `content/site.ts`).
2. **Email and location:** `site.contact`.
3. **Social profiles:** `site.socials` currently point to the platforms' home pages.
4. **Reviews:** `home.reviews.items` are demo reviews, labelled as such on the page. Replace them with real ones (and only ever show genuine reviews).
5. **Projects:** `content/projects.ts` holds six demo concepts. Their pages are `noindex` and stay out of the sitemap.
6. **Mockup figures:** numbers inside the coded mockups (`components/mockups/`) are illustrative.
7. **Logo:** the N mark is in `components/ui/Logo.tsx`, `app/icon.svg`, `app/apple-icon.tsx`, `app/favicon.ico` and `public/logo.png`.

---

## Home page order

Hero → Our Expertise (services) → How We Work (process) → Selected Work (projects) → Powered by the Right Tools (technology) → About Us → Why Choose Us → Reviews → Final call to action. The order is set in `app/page.tsx`.

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

A restrained, premium palette: warm stone neutrals, near-black navy ink and a single cobalt accent. Colour is used to guide, not decorate.

- **Canvas:** stone paper `#F3F1EC` on every page. Cards and raised surfaces are white `#FDFCFA` or stone `#E9E6DF`.
- **Ink:** `#111322` for text and the dark surfaces (footer, mobile menu, contact card, alternate project panels).
- **Accent:** cobalt `#3245D1` (with `cobalt-soft` `#93A0F5` on dark and `cobalt-tint` `#E2E5FA` for quiet fills) for primary buttons, highlights, active states and chart emphasis.
- **Functional only:** success `#2F8F6B`, warning `#B07D1F` and error `#C0392B` for form feedback and status pills inside the mockups; star ratings use a muted gold.
- Services and projects are distinguished by name, number and icon, not by colour. Technology logos are monochrome.
- Flat colour throughout: no gradients, glass or blur.

Text and line colours are CSS variables exposed as Tailwind colours (`bg-canvas`, `text-fg`, `text-fg-soft`, `border-line`, `bg-accent`, `text-on-accent`, `bg-raise`). Dark surfaces set `data-tone-fixed="night"`, which redefines them inside.

### Design tokens

Defined once in `app/globals.css` (`@theme`) and mirrored in `lib/tokens.ts` for generated images and emails.

- **Palette:** see "Colour" above; tokens live in `@theme` and in `lib/tokens.ts`.
- **Type:** Bricolage Grotesque for display, Geist for text, Geist Mono for numbers. Fluid sizes: `text-display`, `text-h1`–`text-h3`, `text-title`, `text-lead`, `text-body`, `text-small`, `text-label`.
- **Class names:** build conditional classes with `cn()` from `lib/cn.ts`; register new text, radius or shadow tokens there too.

### Motion

Smooth and controlled, one easing everywhere (`cubic-bezier(0.22, 1, 0.36, 1)`).

- **Reveals** (`Reveal`, `Stagger`, `MaskedText`) render on the server with data attributes; a single `IntersectionObserver` in `RevealManager` reveals each once with CSS transitions. Content already on screen is never hidden.
- **Hero:** pure CSS entrance; the isometric blocks (`IsoBlocks.tsx`, flat-shaded SVG with a true isometric projection) drop into place and two modules drift gently.
- **Framer Motion:** the navbar pill and the services index indicator (`layoutId`), and the services colour panel crossfade (`AnimatePresence`). Loaded lazily by `MotionProvider`.
- **Selected Work:** on screens at least 1024px wide and 760px tall (and without reduced motion) the section pins and scrolling pans the project panels horizontally (GSAP ScrollTrigger, scrubbed 1:1 with light smoothing), with a progress line and counter; it unpins after the last project. Elsewhere, and always on the server, it is a vertical list.
- **Mockup micro-animations:** each mockup plays a short entrance when it comes into view (`components/mockups/MockupStage.tsx`: messages and cards rise in, chart bars grow, the donut draws, progress bars fill), plus continuous details in CSS: a reply typing itself in the WhatsApp composer, a breathing AI waveform, pulsing live and active states.
- **GSAP ScrollTrigger** (loaded on demand): the horizontal projects, the About lines drifting sideways, and the process track filling with its step counter.
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
