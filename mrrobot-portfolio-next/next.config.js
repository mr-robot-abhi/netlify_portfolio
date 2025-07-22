/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com', 'res.cloudinary.com', 'ghchart.rshah.org'],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'gsap'],
  },
}

module.exports = nextConfig