import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageAnimations = () => {
  const location = useLocation();

  useEffect(() => {
    // Reset scroll position
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Force a reflow to ensure all elements are properly positioned
    document.body.offsetHeight;
    
    // Dispatch resize event to trigger Framer Motion viewport recalculation
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      window.dispatchEvent(new Event('scroll'));
    }, 50);
    
  }, [location.pathname]);

  // Return viewport settings for consistent animations
  return {
    viewport: { 
      once: true, 
      margin: "-50px 0px -50px 0px",
      amount: 0.1
    }
  };
};
