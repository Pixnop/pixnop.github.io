// src/utils/scrollUtils.js

/**
 * Fait défiler vers une section spécifique
 */
export const scrollToSection = (containerRef, index, isScrolling, setCurrentSection) => {
    if (isScrolling.current) return;

    isScrolling.current = true;
    setCurrentSection(index);

    containerRef.current.children[index].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
    });

    setTimeout(() => {
        isScrolling.current = false;
    }, 500);
};

/**
 * Calcule l'index de la section actuellement visible
 */
export const getCurrentSectionIndex = (container) => {
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;
    return Math.round(scrollLeft / containerWidth);
};

/**
 * Gestion du défilement horizontal avec la molette
 */
export const handleWheelScroll = (e, isScrolling, handleNavigation) => {
    if (e.deltaY !== 0 && !isScrolling.current) {
        e.preventDefault();
        const direction = e.deltaY > 0 ? 'next' : 'prev';
        handleNavigation(direction);
    }
};

/**
 * Gestion des événements tactiles
 */
export const handleTouchEvents = {
    start: (containerRef, e) => {
        if (!containerRef.current) return;
        containerRef.current.touchStart = e.touches[0].clientX;
    },

    end: (containerRef, e, handleNavigation) => {
        if (!containerRef.current || !containerRef.current.touchStart) return;

        const touchEnd = e.changedTouches[0].clientX;
        const diff = containerRef.current.touchStart - touchEnd;

        if (Math.abs(diff) > 50) {
            const direction = diff > 0 ? 'next' : 'prev';
            handleNavigation(direction);
        }

        containerRef.current.touchStart = null;
    }
};