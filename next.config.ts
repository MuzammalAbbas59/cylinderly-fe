import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // In development, skip sharp (native binary) so the dev server starts instantly.
    // In production, Next.js will use sharp for WebP conversion + responsive sizing.
    unoptimized: isDev,
  },
};

export default nextConfig;
