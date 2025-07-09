import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useEffect } from 'react';
import { 
  initPerformanceMonitoring, 
  checkPerformanceBudgets, 
  optimizeResourceLoading,
  optimizeImageLoading 
} from '../utils/performance';

export default function PerformanceProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize performance monitoring
    initPerformanceMonitoring();
    
    // Check performance budgets
    checkPerformanceBudgets();
    
    // Optimize resource loading
    optimizeResourceLoading();
    
    // Optimize image loading after a delay
    const imageOptimizationTimer = setTimeout(() => {
      optimizeImageLoading();
    }, 1000);

    return () => {
      clearTimeout(imageOptimizationTimer);
    };
  }, []);

  return <>{children}</>;
} 