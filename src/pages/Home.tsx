import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import WhatWeDoSection from "../components/WhatWeDoSection";
import BenefitsSection from '../components/BenefitsSection';
import SplineClient from '../components/SplineClient';
import LazyWrapper from '../components/LazyWrapper';
import { preloadSplineViewer } from '../libs/splineLoader';

export default function Home() {
  useEffect(() => {
    // Preload Spline viewer for better performance
    preloadSplineViewer();
  }, []);

  return (
    <>
      <HeroSection>
        <SplineClient />
      </HeroSection>
      <LazyWrapper rootMargin="200px" className="min-h-screen">
        <WhatWeDoSection />
      </LazyWrapper>
      <LazyWrapper rootMargin="200px" className="min-h-screen">
        <BenefitsSection/>
      </LazyWrapper>
    </>
  );
} 