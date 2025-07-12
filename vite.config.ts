import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        // Improved chunking strategy
        manualChunks: {
          // Core dependencies
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          
          // UI libraries
          'animation': ['framer-motion'],
          'icons': ['lucide-react', '@heroicons/react'],
          
          // 3D/Graphics
          'spline': ['@splinetool/react-spline', '@splinetool/runtime'],
          
          // Utils
          'utils': ['clsx', 'tailwind-merge'],
          
          // Analytics/Performance
          'analytics': ['web-vitals'],
        },
        // Optimize chunk sizes
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/').pop()?.replace('.tsx', '').replace('.ts', '')
            : 'chunk'
          return `assets/${facadeModuleId}-[hash].js`
        },
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
      // External dependencies for CDN
      external: (id) => {
        // Keep Firebase as external if using CDN
        if (id.includes('firebase')) return false
        return false
      },
    },
    sourcemap: false,
    chunkSizeWarningLimit: 500, // Reduced from 1000
    reportCompressedSize: false, // Faster builds
    // Enable CSS code splitting
    cssCodeSplit: true,
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'clsx',
      'tailwind-merge'
    ],
    exclude: ['@splinetool/react-spline', '@splinetool/runtime'],
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 3000,
  },
  // Enable compression
  esbuild: {
    drop: ['console', 'debugger'],
    legalComments: 'none',
  },
  // Performance optimizations
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
  },
}) 
