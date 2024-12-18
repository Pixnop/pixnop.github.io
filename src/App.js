//src/App.js
import React from 'react';
import { sections } from './constants/sections';
import { useNavigation } from './hooks/useNavigation';
import useKeyboardNavigation from './hooks/useKeyboardNavigation';
import NavigationBar from './components/Navigation/NavigationBar';
import NavigationButtons from './components/Navigation/NavigationButtons';
import SectionIndicators from './components/Navigation/SectionIndicators';
import HomeSection from './components/Sections/Home/HomeSection';
import FormationSection from './components/Sections/Formation/FormationSection';
import ExperienceSection from './components/Sections/Experience/ExperienceSection';
import TechnologiesSection from './components/Sections/Technologies/TechnologiesSection';
import PassionsSection from './components/Sections/Passions/PassionsSection';

const App = () => {
    const {
        currentSection,
        scrollToSection,
        handleNavigation,
        isScrolling
    } = useNavigation(sections.length);

    const sectionComponents = {
        home: HomeSection,
        formation: FormationSection,
        experience: ExperienceSection,
        tech: TechnologiesSection,
        passion: PassionsSection,
    };

    // Use keyboard navigation
    useKeyboardNavigation(handleNavigation);

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
                className="sections-container flex h-screen overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar"
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