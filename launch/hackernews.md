# Show HN: OGSnap – Generate OG images with a URL, no design tools needed

**Title:** Show HN: OGSnap – Dynamic social card images from a single URL

**Post text:**

I got tired of manually creating Open Graph images in Canva/Figma every time I published a blog post. The existing solutions are either locked to Vercel (Satori/OG), expensive ($14-39/mo for 1-3K images), or require running Puppeteer.

So I built OGSnap — an API that generates social preview images from URL parameters. You add one meta tag to your HTML and get a beautiful 1200x630 PNG back.

```html
<meta property="og:image"
  content="https://ogsnap.vercel.app/api/og?title=My+Post&template=blog&brand=MyBlog" />
```

Features:
- 5 templates (blog, SaaS, docs, changelog, minimal)
- Dark/light themes, custom accent colors, branding
- Sub-50ms on Vercel Edge (Satori, no headless browser)
- Works with any framework — it's just a URL
- Free tier: 50 images/day

Live playground: https://ogsnap.vercel.app/#playground

Built with @vercel/og (Satori + resvg-wasm). The entire API is ~200 lines of TypeScript.
