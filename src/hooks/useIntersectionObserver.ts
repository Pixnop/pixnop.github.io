// src/hooks/useIntersectionObserver.ts
import { RefObject, useEffect, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

export const useIntersectionObserver = (
  elementRef: RefObject<HTMLDivElement>,
  { threshold = 0.1, root = null, rootMargin = '0px' }: UseIntersectionObserverProps = {}
): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin]);

  return isVisible;
};