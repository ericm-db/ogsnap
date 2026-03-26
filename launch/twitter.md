# Twitter/X Posts

## Main launch tweet

I got tired of making OG images in Canva for every blog post.

So I built OGSnap — dynamic social cards from a URL:

```
/api/og?title=Your+Title&template=blog&brand=YourSite
```

→ Beautiful 1200x630 PNG
→ 5 templates, dark/light
→ Sub-50ms on the edge
→ Free for personal sites

Try it: https://ogsnap.vercel.app

## Thread tweet 2

How it works:

1. Add one meta tag to your <head>
2. We render HTML/CSS → SVG → PNG on the edge
3. Cached globally for 24h
4. No Puppeteer, no headless browser
5. ~200 lines of TypeScript

It's @vercel/og under the hood, but wrapped as a hosted API so you don't need to build anything.

## Thread tweet 3

Pricing is simple:

Free: 50 images/day (covers most blogs)
Indie ($9/mo): 2,000/mo + custom branding
Pro ($29/mo): 10K/mo + custom HTML templates

Competitors charge $14-39/mo for fewer images.

I'm keeping the free tier generous because that's where word-of-mouth comes from.
