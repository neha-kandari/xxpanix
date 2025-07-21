/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Image optimization
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Bundle optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Webpack optimizations
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      config.resolve = config.resolve || {};
      config.resolve.fallback = {
        ...(config.resolve.fallback || {}),
        fs: false,
      };
    }
    
    // Tree shaking optimization
    if (!dev) {
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }
    
    return config;
  },
  
  // Output compression
  compress: true,
};

module.exports = nextConfig;
