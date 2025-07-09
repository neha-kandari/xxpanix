import { useEffect } from 'react';
import { 
  initPerformanceMonitoring, 
  checkPerformanceBudgets, 
  optimizeImageLoading 
} from '../utils/performance';

export default function PerformanceInit() {
  useEffect(() => {
    // Initialize performance monitoring
    initPerformanceMonitoring();
    
    // Check performance budgets
    checkPerformanceBudgets();
    
    // Optimize image loading after a delay
    const timer = setTimeout(() => {
      optimizeImageLoading();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return null; // This component doesn't render anything
} 