//src/components/Navigation/NavigationBar.jsx
import React from 'react';

const NavigationBar = ({ sections, currentSection, onSectionChange }) => {
    return (
        <nav className="fixed top-0 left-0 w-full p-4 z-10 bg-black bg-opacity-50">
            <div className="flex justify-center space-x-8">
                {sections.map((section, index) => {
                    const Icon = section.icon;
                    return (
                        <button
                            key={section.id}
                            onClick={() => onSectionChange(index)}
                            className={`flex items-center space-x-2 p-2 rounded-lg transition-all
                                ${currentSection === index ? 'bg-blue-500 bg-opacity-20' : 'hover:bg-blue-500 hover:bg-opacity-10'}`}
                        >
                            <Icon size={20} color={section.color} />
                            <span>{section.title}</span>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};

export default NavigationBar;