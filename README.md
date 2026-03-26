# OGSnap

Dynamic Open Graph image generation API. One URL → beautiful social cards.

## Deploy

### Option 1: Vercel (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new), import the repo
3. Click Deploy — zero config needed

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

## API Usage

```html
<meta property="og:image"
  content="https://YOUR-DOMAIN/api/og?title=Your+Title&template=blog&brand=YourSite" />
```

### Parameters

| Param | Required | Default | Description |
|-------|----------|---------|-------------|
| `title` | yes | Hello World | Main heading |
| `subtitle` | no | — | Secondary text |
| `template` | no | blog | blog, saas, minimal, docs, changelog |
| `theme` | no | dark | dark or light |
| `brand` | no | — | Your brand name |
| `accent` | no | #6366f1 | Accent color (hex, URL-encoded) |
| `w` | no | 1200 | Width in px (max 2400) |
| `h` | no | 630 | Height in px (max 1260) |

### Templates endpoint

```
GET /api/templates
```

Returns JSON with all templates and their parameters.

## Tech Stack

- **@vercel/og** — Satori + resvg-wasm for edge image generation
- **Vercel Edge Functions** — Sub-50ms global response times
- **Zero external dependencies** beyond @vercel/og
