//src/hooks/useNavigation.js
import { useState, useCallback, useRef } from 'react';

export const useNavigation = (totalSections) => {
    const [currentSection, setCurrentSection] = useState(0);
    const isScrolling = useRef(false);

    const scrollToSection = useCallback((index) => {
        if (isScrolling.current || index === currentSection) return;

        isScrolling.current = true;
        setCurrentSection(index);

        // Ajout d'une vérification de l'index
        if (index < 0 || index >= totalSections) {
            isScrolling.current = false;
            return;
        }

        const container = document.querySelector('.sections-container');
        const targetSection = container?.children[index];

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'start'
            });
        }

        // Réduire le délai de verrouillage
        setTimeout(() => {
            isScrolling.current = false;
        }, 300); // Réduit de 500ms à 300ms
    }, [currentSection, totalSections]);

    const handleNavigation = useCallback((direction) => {
        if (isScrolling.current) return;

        const newIndex = direction === 'next'
            ? Math.min(totalSections - 1, currentSection + 1)
            : Math.max(0, currentSection - 1);

        scrollToSection(newIndex);
    }, [currentSection, totalSections, scrollToSection]);

    return {
        currentSection,
        setCurrentSection,
        scrollToSection,
        handleNavigation,
        isScrolling
    };
};