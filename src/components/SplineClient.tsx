import React, { useEffect, useRef, useState } from "react";
import { loadSplineViewer, createLazySplineLoader, shouldShowSpline } from "../libs/splineLoader";

export default function SplineClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showSpline, setShowSpline] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection logic (copied from splineLoader)
  function checkIsMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth <= 768;
  }

  useEffect(() => {
    setIsMobile(checkIsMobile());
    // Listen for resize to update mobile state
    const handleResize = () => setIsMobile(checkIsMobile());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Check if we should show Spline at all on this device
    setShowSpline(shouldShowSpline());
  }, []);

  useEffect(() => {
    if (!containerRef.current || !showSpline || isMobile) return;

    // Since this is above-the-fold, use smaller rootMargin for faster loading
    const lazyLoader = createLazySplineLoader(0.05, '50px');
    
    const cleanup = lazyLoader(containerRef.current, () => {
      setIsVisible(true);
      setShouldLoad(true);
    });

    return cleanup;
  }, [showSpline, isMobile]);

  useEffect(() => {
    if (shouldLoad && showSpline && !isMobile) {
      // Use high priority for hero section (above-the-fold)
      loadSplineViewer('high').catch(console.error);
    }
  }, [shouldLoad, showSpline, isMobile]);

  // Show GIF for mobile devices
  if (isMobile) {
    return (
      <div 
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img 
          src={"/threshold-dark-ambient-ui.gif"}
          alt="Animated background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 0,
            opacity: 0.9,
          }}
        />
      </div>
    );
  }

  // Fallback content for low-end devices (non-mobile)
  if (!showSpline) {
    return (
      <div 
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div 
          style={{
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            opacity: 0.6,
          }}
        />
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        backgroundColor: 'transparent',
      }}
    >
      {shouldLoad && React.createElement('spline-viewer', {
        'loading-anim': true,
        url: "https://prod.spline.design/63RCalAgMNj7rmd2/scene.splinecode",
        style: {
          width: '100%',
          height: '100%',
          display: 'block',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        },
      })}
    </div>
  );
}
