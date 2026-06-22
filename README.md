# StallTrack — Public Landing Page

The public marketing/company website for **StallTrack**, a GovTech SaaS platform for LGU economic
enterprise operations, public market operations, and facility management.

This is a **static marketing site only** — it is not the admin system. It has no backend, no
authentication, no database, and shows only fictional sample data.

## Tech stack
- React 18 + Vite 5
- Tailwind CSS 3
- React Router (Home / Privacy / Terms)

## Local development
```bash
npm install
npm run dev      # http://localhost:5173
```

## Production build
```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Deploy (any free static host)
- **Vercel** — import the repo, framework preset "Vite". `vercel.json` handles SPA routing.
- **Netlify** — build `npm run build`, publish `dist`. `public/_redirects` handles SPA routing.
- **Cloudflare Pages / GitHub Pages** — build command `npm run build`, output dir `dist`.

## Domain & email alignment (for AWS / Kiro validation)
- Public website: `https://stalltrack.site`
- Business email: `clint@stalltrack.site`
- AWS account email: same `@stalltrack.site` domain
- Private admin system: `https://app.stalltrack.site/login` (kept private / staging — not this site)

## Pages
- `/` — Hero, Problem, Solution, Features, Use Cases, Product Preview (mock dashboard, sample data),
  Security & Privacy, Founder, Contact
- `/privacy` — Privacy Policy
- `/terms` — Terms of Service

## Application copy (reference)

**Tell us about your startup**
> StallTrack is a GovTech SaaS platform helping Economic Enterprise Management Offices and
> LGU-managed facilities digitize stall records, rental collections, payment tracking, audit logs,
> and operational reports.

**How will you use AWS / Kiro**
> We will use Kiro and AWS to accelerate development of StallTrack, including backend APIs, database
> integration, reporting modules, secure deployment workflows, and future cloud hosting for the platform.

## Notes
- All dashboard figures, names, and records on the site are **fictional samples** for illustration.
- StallTrack is presented as an independent product designed for LGU economic enterprise workflows —
  **not** as an official government-owned or government-operated system.
