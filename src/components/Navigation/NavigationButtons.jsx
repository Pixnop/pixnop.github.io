//src/components/Navigation/NavigationButtons.jsx
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NavigationButtons = ({ currentSection, totalSections, onNavigate }) => {
    return (
        <>
            <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-10">
                <button
                    onClick={() => onNavigate('prev')}
                    className="p-2 bg-blue-500 rounded-full mb-4 hover:bg-blue-600 transition-colors"
                    disabled={currentSection === 0}
                >
                    <ChevronLeft size={24} />
                </button>
            </div>

            <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-10">
                <button
                    onClick={() => onNavigate('next')}
                    className="p-2 bg-blue-500 rounded-full mb-4 hover:bg-blue-600 transition-colors"
                    disabled={currentSection === totalSections - 1}
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </>
    );
};

export default NavigationButtons;