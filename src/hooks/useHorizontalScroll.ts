// src/hooks/useHorizontalScroll.ts
import { RefObject, useEffect } from 'react';

export const useHorizontalScroll = (ref: RefObject<HTMLElement>): void => {
  useEffect(() => {
    const element = ref.current;
    if (element) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        element.scrollLeft += e.deltaY;
      };
      element.addEventListener('wheel', onWheel, { passive: false });
      return () => element.removeEventListener('wheel', onWheel);
    }
  }, [ref]);
};