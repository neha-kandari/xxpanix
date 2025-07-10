import React, { useEffect, useRef, useState } from "react";
import { loadSplineViewer, createLazySplineLoader, shouldShowSpline } from "../libs/splineLoader";

export default function ServiceSpline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showSpline, setShowSpline] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch by only determining showSpline after component mounts
  useEffect(() => {
    setIsMounted(true);
    setShowSpline(shouldShowSpline());
  }, []);

  useEffect(() => {
    if (!containerRef.current || !showSpline || !isMounted) return;

    // Below-the-fold content: use larger rootMargin for better UX
    const lazyLoader = createLazySplineLoader(0.1, '150px');
    
    const cleanup = lazyLoader(containerRef.current, () => {
      setIsVisible(true);
      setShouldLoad(true);
    });

    return cleanup;
  }, [showSpline, isMounted]);

  useEffect(() => {
    if (shouldLoad && showSpline && isMounted) {
      // Use low priority for below-the-fold content
      loadSplineViewer('low').catch(console.error);
    }
  }, [shouldLoad, showSpline, isMounted]);

  // Loading placeholder component
  const LoadingPlaceholder = () => (
    <div 
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
        borderRadius: '8px',
      }}
    >
      <div 
        style={{
          width: '120px',
          height: '120px',
          background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
          borderRadius: '50%',
          opacity: 0.8,
        }}
      />
    </div>
  );

  // Show loading state during hydration to prevent mismatch
  if (!isMounted) {
    return <LoadingPlaceholder />;
  }

  // Fallback content for mobile/low-end devices
  if (!showSpline) {
    return <LoadingPlaceholder />;
  }

  return (
    <div 
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    >
      {shouldLoad && React.createElement('spline-viewer', {
        url: "https://prod.spline.design/0HhtDF4IAOrdc6FJ/scene.splinecode",
        style: {
          width: '100%',
          height: '100%',
          display: 'block',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.4s ease-in-out',
        },
      })}
    </div>
  );
} 
