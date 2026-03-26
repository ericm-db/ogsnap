// API endpoint to list available templates and their parameters
export const config = { runtime: 'edge' };

const templateDocs = {
  templates: {
    blog: {
      description: 'Clean blog post card with accent bar, title, subtitle, and brand footer',
      preview: '/api/og?template=blog&title=How+to+Build+a+REST+API&subtitle=A+complete+guide+for+beginners&brand=MyBlog&accent=%236366f1',
    },
    saas: {
      description: 'Centered SaaS-style card with gradient orb and bold typography',
      preview: '/api/og?template=saas&title=Ship+Faster+With+OGSnap&subtitle=Dynamic+social+cards+in+one+URL&brand=OGSnap&accent=%236366f1',
    },
    minimal: {
      description: 'Ultra-minimal — just the title, big and bold',
      preview: '/api/og?template=minimal&title=Less+Is+More',
    },
    docs: {
      description: 'Documentation-style card with brand label and gradient accent line',
      preview: '/api/og?template=docs&title=Getting+Started&subtitle=Install,+configure,+and+generate+your+first+image&brand=OGSnap',
    },
    changelog: {
      description: 'Changelog/release card with version pill and brand footer',
      preview: '/api/og?template=changelog&title=Custom+Templates+Are+Here&subtitle=v2.0&brand=OGSnap&accent=%2310b981',
    },
  },
  parameters: {
    title: { type: 'string', required: true, description: 'The main heading text' },
    subtitle: { type: 'string', required: false, description: 'Secondary text below the title' },
    template: { type: 'string', required: false, default: 'blog', description: 'Template name: blog, saas, minimal, docs, changelog' },
    theme: { type: 'string', required: false, default: 'dark', description: 'Color scheme: dark or light' },
    brand: { type: 'string', required: false, description: 'Your brand/site name' },
    accent: { type: 'string', required: false, default: '#6366f1', description: 'Accent color as hex (e.g. %236366f1)' },
    w: { type: 'number', required: false, default: 1200, description: 'Image width in pixels (max 2400)' },
    h: { type: 'number', required: false, default: 630, description: 'Image height in pixels (max 1260)' },
  },
};

export default function handler() {
  return new Response(JSON.stringify(templateDocs, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
