import { useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

const PageWrapper = ({ children, className = '' }: PageWrapperProps) => {
  const location = useLocation();

  useEffect(() => {
    // Force scroll to top when component mounts
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Immediate scroll
    scrollToTop();
    
    // Also scroll after a small delay to handle any layout shifts
    const timeoutId = setTimeout(() => {
      scrollToTop();
      // Trigger a resize event to help Framer Motion recalculate viewport
      window.dispatchEvent(new Event('resize'));
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  // Use pathname as key to force re-render of animations
  return <div key={location.pathname} className={className}>{children}</div>;
};

export default PageWrapper;
