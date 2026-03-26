# Reddit Post — r/webdev or r/SideProject

**Title:** I built a free API to auto-generate OG images — no more Canva exports

**Body:**

Every blog post needs an Open Graph image for social sharing. But making them manually in Canva is soul-crushing, and the existing APIs charge $14-39/month.

I built **OGSnap** — pass your title, subtitle, and brand as URL params, get back a PNG. That's it.

```html
<meta property="og:image"
  content="https://ogsnap.vercel.app/api/og?title=Your+Title&brand=YourSite&template=blog" />
```

**What it does:**
- 5 polished templates (blog, SaaS, docs, changelog, minimal)
- Dark/light themes, custom colors
- Runs on the edge, ~50ms response time, globally cached
- Free tier: 50 images/day (enough for most personal sites)
- Paid: $9/mo for 2K images if you scale up

**What it doesn't do:**
- No AI, no Puppeteer, no headless Chrome
- No account required for free tier
- No vendor lock-in — it's just a URL

Try the live playground: https://ogsnap.vercel.app/#playground

Curious what templates/features you'd want. Happy to add more based on feedback.
