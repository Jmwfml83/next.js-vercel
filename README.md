# Next.js + Vercel Starter (GitHub flow)

A minimal, production-ready Next 14 + Tailwind template designed to deploy on Vercel via GitHub in minutes.

## Features
- ✅ Next.js 14 (App Router, TypeScript, strict mode)
- ✅ Tailwind CSS
- ✅ Sample API route at `/api/hello`
- ✅ Sensible defaults (`.gitignore`, ESLint, `vercel.json`)

## Quickstart

```bash
# 1) Install dependencies
npm i    # or: pnpm i | yarn

# 2) Run locally
npm run dev
```

Open http://localhost:3000

## Deploy via GitHub → Vercel

1. Create a new **GitHub** repo (empty).
2. In this project folder, run:

```bash
git init
git add -A
git commit -m "init: next-vercel-starter"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

3. Go to **Vercel** → **New Project** → **Import Git Repository** → select your repo → **Deploy**.
4. On every push to `main`, Vercel will auto‑build & deploy a new preview. Hitting **Promote** or merging to your production branch will update prod.

### Environment variables
If you need secrets later, add them in **Vercel → Project → Settings → Environment Variables**.
Locally, create `.env.local` (not committed) and add key=value lines.

## Scripts
- `npm run dev` — local dev at http://localhost:3000
- `npm run build` — production build
- `npm start` — run production build locally
- `npm run lint` — lint

## Where to edit
- Homepage: `app/page.tsx`
- Global styles: `app/globals.css`
- API route: `app/api/hello/route.ts`

---

**You’re good to go.** Push to GitHub and import on Vercel.
