import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

const SEO = ({ title, description, keywords }: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    // Update title
    document.title = `${title} | B2B Consulting`;

    // Update or create meta tags
    const setMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('description', description);
    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    // Open Graph tags
    setMetaTag('og:title', title);
    setMetaTag('og:description', description);
    setMetaTag('og:url', window.location.href);

    // Twitter Card tags
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
  }, [title, description, keywords, location]);

  return null;
};

export default SEO;