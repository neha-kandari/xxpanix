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
    if (!showSpline || !isMounted) return;

    // Load immediately when component mounts for Services page
    setIsVisible(true);
    setShouldLoad(true);
  }, [showSpline, isMounted]);

  useEffect(() => {
    if (shouldLoad && showSpline && isMounted) {
      // Use high priority for immediate loading
      loadSplineViewer('high').catch(console.error);
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
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        borderRadius: '8px',
      }}
    >
      <div 
        style={{
          width: '150px',
          height: '150px',
          background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))',
          borderRadius: '50%',
          opacity: 0.6,
          animation: 'pulse 2s ease-in-out infinite alternate',
        }}
      />
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.6; }
            100% { transform: scale(1.1); opacity: 0.8; }
          }
        `}
      </style>
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
        url: "https://prod.spline.design/bunikdfDgR9Y2Y-Q/scene.splinecode",
        style: {
          width: '100%',
          height: '100%',
          display: 'block',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.4s ease-in-out',
        },
        // Mobile optimization attributes
        'pixel-ratio': window.innerWidth < 768 ? '1' : '2',
        'render-on-demand': 'true',
        'loading-anim-type': 'spinner-big-dark',
      })}
    </div>
  );
} 