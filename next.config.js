/** @type {import('next').NextConfig} */
const nextConfig = {
  // Serve public/index.html as the landing page
  // Next.js automatically serves files from public/ at the root
  // We redirect / to our static landing page
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/index.html',
      },
    ];
  },
};

module.exports = nextConfig;
