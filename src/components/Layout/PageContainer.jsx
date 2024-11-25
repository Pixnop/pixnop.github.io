//src/components/Layout/PageContainer.jsx
import React, { useRef, useState, useEffect } from 'react';
import { sections } from '../../constants/sections';
import NavigationBar from '../Navigation/NavigationBar';
import NavigationButtons from '../Navigation/NavigationButtons';
import SectionIndicators from '../Navigation/SectionIndicators';

const PageContainer = ({ children }) => {
    const [currentSection, setCurrentSection] = useState(0);
    const containerRef = useRef(null);
    const isScrolling = useRef(false);

    const scrollToSection = (index) => {
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

    const handleNavigation = (direction) => {
        const newIndex = direction === 'next'
            ? Math.min(sections.length - 1, currentSection + 1)
            : Math.max(0, currentSection - 1);
        scrollToSection(newIndex);
    };

    return (
        <div className="h-screen w-screen overflow-hidden bg-black text-white">
            <NavigationBar
                sections={sections}
                currentSection={currentSection}
                onSectionChange={scrollToSection}
            />

            <NavigationButtons
                currentSection={currentSection}
                totalSections={sections.length}
                onNavigate={handleNavigation}
            />

            <SectionIndicators
                totalSections={sections.length}
                currentSection={currentSection}
                onSectionChange={scrollToSection}
            />

            <div
                ref={containerRef}
                className="flex h-screen overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar"
                style={{
                    scrollSnapType: 'x mandatory',
                    scrollBehavior: 'smooth',
                    WebkitOverflowScrolling: 'touch',
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default PageContainer;