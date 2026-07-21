# Whitfield & Cole — Law Firm Website (React)

Single-page marketing site, rebuilt as a proper React app (Vite + Tailwind)
per your request — component-based, fully responsive, no CDN dependency for
styling. Mail is still handled by a Netlify serverless function (no custom
backend), per the original brief.

> **Placeholder content note:** "Whitfield & Cole," the address, phone
> number, attorney names, and copy are all placeholders since no real firm
> details were provided. Search `src/content.js` and the component files to
> swap them for real content before launch.

## Stack

- **React 19 + Vite** — component structure, fast dev server, production build
- **Tailwind CSS** (compiled locally via PostCSS, not the CDN build this
  time — that's what was breaking responsiveness before: the CDN script
  loads asynchronously and can lose the viewport meta timing in some
  embedded/preview contexts. A real build removes that risk entirely.)
- **Netlify Functions (Node)** — `netlify/functions/contact.js` sends the
  contact form via nodemailer/SMTP. No Express server, no database — this
  keeps the "no custom backend" requirement from the original brief while
  still giving you the Node piece for the one place it's needed.

## What's here

```
src/
  components/       one component per section (Navbar, Hero, About, ...)
  content.js         all copy/data in one place — edit this first
  index.css          Tailwind layers + the handful of custom classes
  App.jsx             composes all sections
netlify/functions/contact.js   serverless mail handler
netlify.toml                    build + function + header config
.env.example                    env vars to set in Netlify
```

## Running locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. The contact form won't actually send mail
in plain `npm run dev` (there's no function server). To test the full flow
including the serverless function:

```bash
npm install -g netlify-cli
netlify dev
```

## Deploying to Netlify

1. Push to GitHub (or drag-and-drop the folder into Netlify for a quick
   deploy).
2. Netlify build settings are already in `netlify.toml`:
   `npm run build`, publish `dist`, functions in `netlify/functions`.
3. In Netlify: **Site settings → Environment variables**, add:
   `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `MAIL_TO`.
   For Gmail, use an **App Password**, not your real account password.
4. Deploy, then test the contact form on the live URL (check spam on first
   send).

## Responsiveness

This was rebuilt specifically to fix the responsiveness problem in the
first version. Every section now uses tested breakpoints
(`sm:` 640px, `md:` 768px, `lg:` 1024px) rather than desktop-only styling:

- Nav collapses to a slide-down mobile menu under `lg` (1024px), with body
  scroll locked while it's open.
- Hero, About, and Contact stack from side-by-side to single-column.
- Practice area cards go 3 → 2 → 1 columns; team photos go 4 → 2 columns.
- Font sizes, spacing, and padding all step down at each breakpoint instead
  of staying fixed.
- Verified by rendering the production build at 375px (mobile), 768px
  (tablet), and 1440px (desktop) before delivery.

## Replacing placeholder images

Same placeholders as before, now imported directly in each component
(`src/assets/img/`). Each SVG is labeled with its exact pixel size:

| File | Used in | Recommended size (px) |
|---|---|---|
| `hero-bg.svg` | `Hero.jsx` | 1920 × 1080 |
| `about-office.svg` | `About.jsx` | 1200 × 900 (4:3) |
| `team-01.svg` … `04.svg` | `Team.jsx` | 400 × 400 (1:1) |
| `badge-01.svg` … `04.svg` | `TrustBadges.jsx` | 160 × 80 |
| `favicon-source.svg` | `public/favicon.svg` | 64 × 64 source |

Drop a real image into `src/assets/img/`, update the `import` line at the
top of the relevant component, and rebuild.

## Google Maps

Keyless embed in `Contact.jsx` — replace the `q=` value in the iframe `src`
with the real office address. No API key needed for this basic embed.

## Accessibility

Labeled form fields with required states and a live-region status message,
visible focus outlines on every interactive element, and `prefers-reduced-motion`
is respected globally.
