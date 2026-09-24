# Moin Bhai — Birthday Website

Simple React + Vite birthday site. Ready for Vercel.

## Local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy on Vercel

### Option A: Website (easiest)

1. Push this folder to GitHub (or GitLab / Bitbucket)
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo
4. Leave settings as detected:
   - Framework: Vite
   - Build command: `npm run build`
   - Output: `dist`
5. Click **Deploy**

### Option B: CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. For production:

```bash
vercel --prod
```

## Personalize

Edit `src/config.ts` for name, birthday date, wishes, and photo notes.
Photos are in `public/photos/`.
