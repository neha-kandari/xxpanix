let isSplineLoaded = false;
let loadingPromise: Promise<void> | null = null;
let scriptElement: HTMLScriptElement | null = null;

// Debounced loader to prevent multiple simultaneous loads
let loadTimeout: NodeJS.Timeout | null = null;

// Mobile detection and performance checks
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         window.innerWidth <= 768;
};

const isLowEndDevice = () => {
  // Check for low-end device indicators
  const memory = (navigator as any).deviceMemory;
  const cores = navigator.hardwareConcurrency;
  return memory && memory < 4 || cores && cores < 4;
};

const isSlowConnection = () => {
  const connection = (navigator as any).connection;
  if (!connection) return false;
  
  return connection.effectiveType === 'slow-2g' || 
         connection.effectiveType === '2g' ||
         connection.effectiveType === '3g' ||
         connection.saveData === true;
};

export const loadSplineViewer = (priority: 'high' | 'low' = 'low'): Promise<void> => {
  if (isSplineLoaded) {
    return Promise.resolve();
  }

  if (loadingPromise) {
    return loadingPromise;
  }

  // Mobile performance checks
  const mobile = isMobile();
  const lowEnd = isLowEndDevice();
  const slowConn = isSlowConnection();

  // Skip loading on very poor conditions
  if (mobile && lowEnd && slowConn) {
    console.log('Skipping Spline loading due to poor device/network conditions');
    return Promise.resolve();
  }

  loadingPromise = new Promise<void>((resolve, reject) => {
    // Check if spline-viewer is already defined
    if (customElements.get('spline-viewer')) {
      isSplineLoaded = true;
      resolve();
      return;
    }

    const loadScript = () => {
      if (scriptElement) {
        // Script is already being loaded
        scriptElement.addEventListener('load', () => resolve());
        scriptElement.addEventListener('error', () => reject());
        return;
      }

      scriptElement = document.createElement("script");
      scriptElement.type = "module";
      scriptElement.src = "https://unpkg.com/@splinetool/viewer@1.10.24/build/spline-viewer.js";
      scriptElement.async = true;
      scriptElement.defer = true;
      
      // Add loading priority hints
      if (priority === 'high' && !mobile) {
        scriptElement.setAttribute('fetchpriority', 'high');
      } else {
        scriptElement.setAttribute('fetchpriority', 'low');
      }
      
      scriptElement.onload = () => {
        isSplineLoaded = true;
        scriptElement = null;
        resolve();
      };
      
      scriptElement.onerror = () => {
        scriptElement = null;
        loadingPromise = null;
        reject(new Error('Failed to load Spline viewer script'));
      };
      
      document.head.appendChild(scriptElement);
    };

    // Aggressive mobile delays
    const getLoadDelay = () => {
      if (mobile && slowConn) return 10000; // 10s delay on mobile + slow connection
      if (mobile && lowEnd) return 8000;    // 8s delay on mobile + low-end device
      if (mobile) return 5000;              // 5s delay on mobile
      if (slowConn) return 3000;            // 3s delay on slow connection
      return priority === 'high' ? 0 : 1000; // Desktop delays
    };

    const delay = getLoadDelay();

    if (priority === 'high' && !mobile) {
      // High priority on desktop: load immediately
      loadScript();
    } else {
      // Use longer delays for mobile/poor conditions
      if ('requestIdleCallback' in window) {
        requestIdleCallback(loadScript, { timeout: delay + 5000 });
      } else {
        setTimeout(loadScript, delay);
      }
    }
  });

  return loadingPromise;
};

// Enhanced lazy loader with mobile-specific optimizations
export const createLazySplineLoader = (threshold = 0.1, rootMargin = '100px') => {
  const mobile = isMobile();
  const lowEnd = isLowEndDevice();
  
  // Adjust threshold and margin for mobile
  const mobileThreshold = mobile ? 0.3 : threshold; // Require more visibility on mobile
  const mobileMargin = mobile ? '200px' : rootMargin; // Larger margin for mobile
  
  return (element: Element, callback: () => void) => {
    // Skip on very low-end mobile devices
    if (mobile && lowEnd && isSlowConnection()) {
      console.log('Skipping Spline animation on low-end mobile device');
      return () => {}; // Return empty cleanup
    }

    if (!('IntersectionObserver' in window)) {
      // Longer fallback delay for mobile
      setTimeout(callback, mobile ? 5000 : 2000);
      return () => {};
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Longer delay on mobile for better performance
            if (loadTimeout) clearTimeout(loadTimeout);
            const mobileDelay = mobile ? 500 : 150;
            loadTimeout = setTimeout(() => {
              callback();
              observer.unobserve(element);
            }, mobileDelay);
          }
        });
      },
      { 
        threshold: mobileThreshold, 
        rootMargin: mobileMargin,
        // More conservative settings for mobile
        trackVisibility: true,
        delay: mobile ? 200 : 100
      } as IntersectionObserverInit
    );

    observer.observe(element);
    
    // Cleanup function
    return () => {
      observer.unobserve(element);
      if (loadTimeout) clearTimeout(loadTimeout);
    };
  };
};

// Preload function with mobile awareness
export const preloadSplineViewer = () => {
  if (typeof window === 'undefined') return;
  
  const mobile = isMobile();
  const lowEnd = isLowEndDevice();
  const slowConn = isSlowConnection();
  
  // Skip preloading on poor mobile conditions
  if (mobile && (lowEnd || slowConn)) {
    return;
  }
  
  // Conditional preload based on device capabilities (moved from layout)
  if (window.innerWidth > 768 && !mobile) {
    const link = document.createElement('link');
    link.rel = 'modulepreload';
    link.href = 'https://unpkg.com/@splinetool/viewer@1.10.24/build/spline-viewer.js';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
    return; // Early return after desktop preload
  }
  
  // Only preload if user hasn't interacted yet (for other cases)
  let hasInteracted = false;
  
  const markInteraction = () => {
    hasInteracted = true;
  };
  
  ['mousedown', 'keydown', 'touchstart', 'pointerdown'].forEach(event => {
    document.addEventListener(event, markInteraction, { once: true, passive: true });
  });
  
  // Longer delay on mobile
  const preloadDelay = mobile ? 8000 : 3000;
  
  setTimeout(() => {
    if (!hasInteracted && !isSplineLoaded) {
      const link = document.createElement('link');
      link.rel = 'modulepreload';
      link.href = 'https://unpkg.com/@splinetool/viewer@1.10.24/build/spline-viewer.js';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
  }, preloadDelay);
};

// Mobile-specific: Check if we should show Spline at all
export const shouldShowSpline = (): boolean => {
  const mobile = isMobile();
  const lowEnd = isLowEndDevice();
  const slowConn = isSlowConnection();
  
  // Skip on very poor conditions
  if (mobile && lowEnd && slowConn) {
    return false;
  }
  
  return true;
}; 