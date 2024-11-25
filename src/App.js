// src/App.js
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { sections } from './constants/sections';
import NavigationBar from './components/Navigation/NavigationBar';
import NavigationButtons from './components/Navigation/NavigationButtons';
import SectionIndicators from './components/Navigation/SectionIndicators';
import HomeSection from './components/Sections/HomeSection';
import FormationSection from './components/Sections/FormationSection';
import ExperienceSection from './components/Sections/ExperienceSection';
import TechnologiesSection from './components/Sections/TechnologiesSection';
import PassionsSection from './components/Sections/PassionsSection';

const App = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const containerRef = useRef(null);
    const scrollTimeout = useRef(null);
    const isScrolling = useRef(false);

    const sectionComponents = {
        home: HomeSection,
        formation: FormationSection,
        experience: ExperienceSection,
        tech: TechnologiesSection,
        passion: PassionsSection,
    };

    const scrollToSection = useCallback((index) => {
        if (isScrolling.current) return;

        isScrolling.current = true;
        setCurrentSection(index);

        containerRef.current.children[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        });

        // Reset scrolling flag after animation
        setTimeout(() => {
            isScrolling.current = false;
        }, 500);
    }, []);

    const handleNavigation = useCallback((direction) => {
        const newIndex = direction === 'next'
            ? Math.min(sections.length - 1, currentSection + 1)
            : Math.max(0, currentSection - 1);
        scrollToSection(newIndex);
    }, [currentSection, scrollToSection]);

    const handleScroll = useCallback(() => {
        if (!containerRef.current || isScrolling.current) return;

        // Clear existing timeout
        if (scrollTimeout.current) {
            clearTimeout(scrollTimeout.current);
        }

        // Set a new timeout
        scrollTimeout.current = setTimeout(() => {
            const container = containerRef.current;
            const scrollLeft = container.scrollLeft;
            const containerWidth = container.clientWidth;

            // Calculate which section is most visible
            const newIndex = Math.round(scrollLeft / containerWidth);

            if (newIndex !== currentSection) {
                setCurrentSection(newIndex);
            }
        }, 50); // Small delay to avoid too many updates
    }, [currentSection]);

    // Handle scroll events
    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
        };
    }, [handleScroll]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    handleNavigation('prev');
                    break;
                case 'ArrowRight':
                    handleNavigation('next');
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleNavigation]);

    // Handle wheel events for horizontal scrolling
    useEffect(() => {
        const container = containerRef.current;
        const handleWheel = (e) => {
            if (e.deltaY !== 0 && !isScrolling.current) {
                e.preventDefault();
                const direction = e.deltaY > 0 ? 'next' : 'prev';
                handleNavigation(direction);
            }
        };

        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false });
        }

        return () => {
            if (container) {
                container.removeEventListener('wheel', handleWheel);
            }
        };
    }, [handleNavigation]);

    // Handle touch events for mobile devices
    useEffect(() => {
        const container = containerRef.current;
        let touchStart = null;

        const handleTouchStart = (e) => {
            touchStart = e.touches[0].clientX;
        };

        const handleTouchEnd = (e) => {
            if (!touchStart) return;

            const touchEnd = e.changedTouches[0].clientX;
            const diff = touchStart - touchEnd;

            // Determine if the touch movement was significant enough
            if (Math.abs(diff) > 50) {
                const direction = diff > 0 ? 'next' : 'prev';
                handleNavigation(direction);
            }

            touchStart = null;
        };

        if (container) {
            container.addEventListener('touchstart', handleTouchStart);
            container.addEventListener('touchend', handleTouchEnd);
        }

        return () => {
            if (container) {
                container.removeEventListener('touchstart', handleTouchStart);
                container.removeEventListener('touchend', handleTouchEnd);
            }
        };
    }, [handleNavigation]);

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
                {sections.map((section) => {
                    const SectionComponent = sectionComponents[section.id];
                    return <SectionComponent key={section.id} />;
                })}
            </div>
        </div>
    );
};

export default App;