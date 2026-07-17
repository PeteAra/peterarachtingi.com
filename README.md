# My Portfolio

Premium personal developer portfolio built with Next.js 15, TypeScript, CSS Modules, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy (Cloudflare Workers)

This project uses `@opennextjs/cloudflare`.

```bash
npm run deploy
```

In the Cloudflare dashboard (Workers Builds), use:

- **Build command:** `npm run build` (runs OpenNext + Next.js)
- **Deploy command:** `npx opennextjs-cloudflare deploy`
- **Worker name:** `peterarachtingi` (must match `wrangler.jsonc`)

If deploy is still set to `npx wrangler deploy`, that can work after a successful OpenNext build, but `npx opennextjs-cloudflare deploy` is the clearer option.

Then attach the custom domain `peterarachtingi.com` to the Worker.

## Customization

Update your personal details in `src/content/site.ts`:

- Name, title, bio, email, LinkedIn, GitHub, domain URL

Add or edit projects in `src/content/projects.ts` and place screenshots in `public/projects/`.

Replace placeholder assets:

- `public/images/headshot-placeholder.svg` — professional headshot
- `public/resume.pdf` — your resume
- `public/og-image.svg` — Open Graph image (1200×630)
- `public/projects/*/hero.svg` — project screenshots

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- CSS Modules
- Framer Motion
- Lucide React

## Project Structure

```
src/
├── app/              # Routes, layout, SEO
├── components/       # Reusable UI and sections
├── content/          # Site data (projects, services, skills)
├── lib/              # Metadata and JSON-LD helpers
├── styles/           # Design tokens
└── types/            # TypeScript interfaces
```

## Contact Form

The contact form is UI-only in v1. To wire up a backend, integrate Formspree or a Next.js Server Action with Resend in `ContactForm.tsx`.
