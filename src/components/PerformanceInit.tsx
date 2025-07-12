import { useEffect } from 'react';
import { 
  initPerformanceMonitoring, 
  checkPerformanceBudgets, 
  optimizeImageLoading 
} from '../utils/performance';
import { initServiceWorker } from '../utils/serviceWorker';

export default function PerformanceInit() {
  useEffect(() => {
    // Initialize performance monitoring
    initPerformanceMonitoring();
    
    // Check performance budgets
    checkPerformanceBudgets();
    
    // Register service worker for caching
    initServiceWorker().then((registration) => {
      if (registration) {
        console.log('Service Worker initialized successfully');
      }
    });
    
    // Optimize image loading after a delay
    const timer = setTimeout(() => {
      optimizeImageLoading();
    }, 1000);

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/hero-poster.jpg',
        '/mobile-hero-bg.jpg',
        '/hero-fallback.jpg'
      ];
      
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };
    
    preloadCriticalResources();

    // Performance observer for monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            console.log('Navigation performance:', {
              loadTime: navEntry.loadEventEnd - navEntry.loadEventStart,
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              firstPaint: navEntry.responseStart - navEntry.requestStart,
            });
          }
        });
      });
      
      try {
        observer.observe({ entryTypes: ['navigation'] });
      } catch (e) {
        console.warn('Performance observer not supported for navigation');
      }
    }

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return null; // This component doesn't render anything
} 