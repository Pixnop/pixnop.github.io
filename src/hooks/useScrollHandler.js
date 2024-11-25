//src/hooks/useScrollHandler.js
import { useCallback, useRef } from 'react';

export const useScrollHandler = (currentSection, setCurrentSection, isScrolling) => {
    const scrollTimeout = useRef(null);

    const handleScroll = useCallback(() => {
        if (!isScrolling.current) {
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            scrollTimeout.current = setTimeout(() => {
                const container = containerRef.current;
                const scrollLeft = container.scrollLeft;
                const containerWidth = container.clientWidth;

                const newIndex = Math.round(scrollLeft / containerWidth);

                if (newIndex !== currentSection) {
                    setCurrentSection(newIndex);
                }
            }, 50);
        }
    }, [currentSection, setCurrentSection, isScrolling]);

    return {
        handleScroll,
        scrollTimeout
    };
};