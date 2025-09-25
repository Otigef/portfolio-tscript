import React, { useEffect, useRef, useState } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, className = '', threshold = 0.1, rootMargin = '0px 0px -5% 0px' }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold, rootMargin }
      );
      observer.observe(node);
      return () => observer.disconnect();
    }

    // Fallback if IntersectionObserver is not available
    setIsVisible(true);
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={
        `${className} transform transition-all duration-600 ease-out ` +
        `${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`
      }
    >
      {children}
    </div>
  );
};

export default FadeInSection;


