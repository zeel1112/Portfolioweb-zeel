import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const checkVisibility = () => {
    const element = elementRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const isElementVisible = rect.top <= windowHeight * 0.8;
    
    if (isElementVisible && !isVisible) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check on initial render
    
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return { elementRef, isVisible };
};