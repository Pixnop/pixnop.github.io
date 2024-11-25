// src/components/Sections/Formation/FormationSection.jsx
import React from 'react';
import InfoCard from '../Cards/InfoCard';
import { formationContent } from '../../../constants/content/formation';

const FormationSection = () => {
    return (
        <section className="w-screen h-screen flex-shrink-0 snap-start relative overflow-hidden bg-gradient-to-br from-black to-blue-900">
            {/* Particules d'arrière-plan */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Contenu principal */}
            <div className="relative flex flex-col items-center justify-center h-full p-8">
                <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Formation
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {formationContent.map((formation, index) => (
                        <InfoCard
                            key={index}
                            {...formation}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FormationSection;