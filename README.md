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

## Deploy (Vercel)

Hosted on Vercel. Domain DNS stays on Cloudflare.

1. Push to `main` on GitHub
2. Vercel builds and deploys automatically
3. Point `peterarachtingi.com` DNS at Vercel (records from the Vercel domain settings)

## Customization

Update your personal details in `src/content/site.ts`:

- Name, title, bio, email, LinkedIn, GitHub, domain URL

Add or edit projects in `src/content/projects.ts` and place screenshots in `public/projects/`.

Replace placeholder assets:

- `public/images/headshot.png` — professional headshot
- `public/resume.pdf` — your resume
- `public/og-image.svg` — Open Graph image (1200×630)
- `public/projects/*/hero.png` — project screenshots

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

The contact form uses [Web3Forms](https://web3forms.com) and delivers to `peterara89@gmail.com`.

1. Go to https://web3forms.com and create an access key for `peterara89@gmail.com`
2. Add `WEB3FORMS_ACCESS_KEY` in Vercel → Project → Settings → Environment Variables
3. Redeploy (or push a new commit)

Locally, copy `.env.example` to `.env.local` and paste the same key.
