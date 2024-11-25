//src/components/Navigation/SectionIndicators.jsx
import React from 'react';

const SectionIndicators = ({ totalSections, currentSection, onSectionChange }) => {
    return (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {Array.from({ length: totalSections }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => onSectionChange(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentSection === index
                            ? 'w-8 bg-blue-500'
                            : 'bg-gray-400 hover:bg-gray-300'
                    }`}
                    aria-label={`Go to section ${index + 1}`}
                />
            ))}
        </div>
    );
};

export default SectionIndicators;