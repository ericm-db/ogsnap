# Build Log — OG Image Generation API ("ogsnap")

## Decision Log

### 2026-03-25: Product Selection
**Chosen:** Dynamic OG Image Generation API
**Why:**
- Proven market: Bannerbear ($630K ARR), htmlcsstoimage ($14-749/mo), ScreenshotOne ($200K ARR)
- Gap: No cheap ($9/mo), developer-friendly, template-rich OG image API with generous free tier
- Stable demand: Human behavior (sharing links) doesn't change. This is an integration play, not an AI trick.
- Buildable in <500 LOC with Satori + resvg-wasm
- Deployable on Cloudflare Workers free tier (100K req/day)
- Profitable from customer #1 (near-zero infra cost)

**Rejected:**
- Cron monitoring: Too crowded (Healthchecks.io is free and good)
- Screenshot API: Requires headless browsers = real infra costs

### 2026-03-25: Tech Stack
- **Runtime:** Cloudflare Workers (free tier: 100K requests/day)
- **Image engine:** Satori (HTML/CSS → SVG) + @resvg/resvg-wasm (SVG → PNG)
- **Cache:** Cloudflare KV (free tier) for generated images
- **Landing page:** Static HTML on same Worker
- **Payments:** Stripe Payment Links (no backend integration needed to start)
- **Domain:** Use *.workers.dev subdomain initially, buy domain later if revenue justifies it

### 2026-03-25: Pricing
- **Free:** 50 images/day, 5 templates, no watermark
- **Indie ($9/mo):** 2,000 images/mo, all templates, custom branding
- **Pro ($29/mo):** 10,000 images/mo, custom HTML templates, priority support
