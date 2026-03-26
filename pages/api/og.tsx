import { ImageResponse } from '@vercel/og';
import type { NextRequest } from 'next/server';

export const config = { runtime: 'edge' };

// Template registry
const templates: Record<string, (params: Record<string, string>) => JSX.Element> = {
  blog: blogTemplate,
  saas: saasTemplate,
  minimal: minimalTemplate,
  docs: docsTemplate,
  changelog: changelogTemplate,
};

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const title = searchParams.get('title') || 'Hello World';
  const subtitle = searchParams.get('subtitle') || '';
  const template = searchParams.get('template') || 'blog';
  const theme = searchParams.get('theme') || 'dark';
  const brand = searchParams.get('brand') || '';
  const accent = searchParams.get('accent') || '#6366f1';
  const width = Math.min(parseInt(searchParams.get('w') || '1200'), 2400);
  const height = Math.min(parseInt(searchParams.get('h') || '630'), 1260);

  const params = { title, subtitle, theme, brand, accent };

  const renderTemplate = templates[template] || templates.blog;

  try {
    return new ImageResponse(renderTemplate(params), {
      width,
      height,
      headers: {
        'Cache-Control': 'public, max-age=86400, s-maxage=604800',
      },
    });
  } catch (e: any) {
    return new Response(`Error generating image: ${e.message}`, { status: 500 });
  }
}

// ─── Templates ───────────────────────────────────────────────────────────────

function blogTemplate(p: Record<string, string>) {
  const isDark = p.theme !== 'light';
  const bg = isDark ? '#0f172a' : '#ffffff';
  const fg = isDark ? '#f8fafc' : '#0f172a';
  const muted = isDark ? '#94a3b8' : '#64748b';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '60px 80px',
        width: '100%',
        height: '100%',
        backgroundColor: bg,
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      {/* Accent bar */}
      <div
        style={{
          display: 'flex',
          width: '80px',
          height: '6px',
          backgroundColor: p.accent,
          borderRadius: '3px',
          marginBottom: '32px',
        }}
      />
      {/* Title */}
      <div
        style={{
          display: 'flex',
          fontSize: p.title.length > 60 ? '48px' : '64px',
          fontWeight: 700,
          color: fg,
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          maxWidth: '900px',
        }}
      >
        {p.title}
      </div>
      {/* Subtitle */}
      {p.subtitle && (
        <div
          style={{
            display: 'flex',
            fontSize: '28px',
            color: muted,
            marginTop: '20px',
            lineHeight: 1.4,
            maxWidth: '800px',
          }}
        >
          {p.subtitle}
        </div>
      )}
      {/* Brand footer */}
      {p.brand && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 'auto',
            paddingTop: '40px',
            fontSize: '24px',
            fontWeight: 600,
            color: p.accent,
          }}
        >
          {p.brand}
        </div>
      )}
    </div>
  );
}

function saasTemplate(p: Record<string, string>) {
  const isDark = p.theme !== 'light';
  const bg = isDark ? '#0f172a' : '#f8fafc';
  const fg = isDark ? '#f8fafc' : '#0f172a';
  const muted = isDark ? '#94a3b8' : '#475569';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: bg,
        fontFamily: 'system-ui, sans-serif',
        padding: '60px',
      }}
    >
      {/* Gradient orb */}
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          top: '-200px',
          right: '-100px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${p.accent}33 0%, transparent 70%)`,
        }}
      />
      {p.brand && (
        <div
          style={{
            display: 'flex',
            fontSize: '22px',
            fontWeight: 700,
            color: p.accent,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '24px',
          }}
        >
          {p.brand}
        </div>
      )}
      <div
        style={{
          display: 'flex',
          fontSize: p.title.length > 40 ? '52px' : '68px',
          fontWeight: 800,
          color: fg,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          maxWidth: '1000px',
        }}
      >
        {p.title}
      </div>
      {p.subtitle && (
        <div
          style={{
            display: 'flex',
            fontSize: '26px',
            color: muted,
            marginTop: '24px',
            maxWidth: '700px',
            lineHeight: 1.4,
          }}
        >
          {p.subtitle}
        </div>
      )}
    </div>
  );
}

function minimalTemplate(p: Record<string, string>) {
  const isDark = p.theme !== 'light';
  const bg = isDark ? '#18181b' : '#fafafa';
  const fg = isDark ? '#fafafa' : '#18181b';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: bg,
        fontFamily: 'system-ui, sans-serif',
        padding: '80px',
      }}
    >
      <div
        style={{
          display: 'flex',
          fontSize: p.title.length > 30 ? '72px' : '96px',
          fontWeight: 800,
          color: fg,
          letterSpacing: '-0.04em',
          lineHeight: 1.05,
          textAlign: 'center',
          maxWidth: '1000px',
        }}
      >
        {p.title}
      </div>
    </div>
  );
}

function docsTemplate(p: Record<string, string>) {
  const isDark = p.theme !== 'light';
  const bg = isDark ? '#1a1a2e' : '#ffffff';
  const fg = isDark ? '#e2e8f0' : '#1e293b';
  const muted = isDark ? '#94a3b8' : '#64748b';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        backgroundColor: bg,
        fontFamily: 'system-ui, sans-serif',
        padding: '60px 80px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {p.brand && (
          <div
            style={{
              display: 'flex',
              fontSize: '20px',
              fontWeight: 600,
              color: muted,
              marginBottom: '16px',
            }}
          >
            {p.brand} Documentation
          </div>
        )}
        <div
          style={{
            display: 'flex',
            fontSize: '56px',
            fontWeight: 700,
            color: fg,
            lineHeight: 1.2,
            maxWidth: '900px',
          }}
        >
          {p.title}
        </div>
        {p.subtitle && (
          <div
            style={{
              display: 'flex',
              fontSize: '24px',
              color: muted,
              marginTop: '16px',
              lineHeight: 1.5,
              maxWidth: '750px',
            }}
          >
            {p.subtitle}
          </div>
        )}
      </div>
      {/* Bottom accent line */}
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '4px',
          background: `linear-gradient(90deg, ${p.accent}, ${p.accent}00)`,
          borderRadius: '2px',
        }}
      />
    </div>
  );
}

function changelogTemplate(p: Record<string, string>) {
  const isDark = p.theme !== 'light';
  const bg = isDark ? '#09090b' : '#ffffff';
  const fg = isDark ? '#fafafa' : '#09090b';
  const muted = isDark ? '#a1a1aa' : '#71717a';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: bg,
        fontFamily: 'system-ui, sans-serif',
        padding: '60px 80px',
      }}
    >
      {/* Tag pill */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: `${p.accent}22`,
          color: p.accent,
          fontSize: '18px',
          fontWeight: 600,
          padding: '8px 20px',
          borderRadius: '20px',
          marginBottom: '28px',
          alignSelf: 'flex-start',
        }}
      >
        {p.subtitle || 'New Release'}
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: '60px',
          fontWeight: 800,
          color: fg,
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          maxWidth: '900px',
        }}
      >
        {p.title}
      </div>
      {p.brand && (
        <div
          style={{
            display: 'flex',
            fontSize: '22px',
            color: muted,
            marginTop: 'auto',
            paddingTop: '40px',
          }}
        >
          {p.brand}
        </div>
      )}
    </div>
  );
}
