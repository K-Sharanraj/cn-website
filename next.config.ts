/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      'res.cloudinary.com'
    ]
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ Ignore TS errors during build
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignore ESLint errors during build
  }
};

module.exports = nextConfig;
