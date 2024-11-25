// src/components/Sections/Experience/ExperienceSection.jsx
import React from 'react';
import InfoCard from '../Cards/InfoCard';
import { experienceContent } from '../../../constants/content/experience';

const ExperienceSection = () => (
    <section className="w-screen h-screen flex-shrink-0 snap-start relative overflow-hidden">
        {/* Fond avec motif hexagonal */}
        <div className="absolute inset-0 bg-[#020617]">
            {/* Hexagones en arrière-plan */}
            <div className="absolute inset-0 opacity-20">
                <div className="relative h-full w-full">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute border-2 border-blue-500/10"
                            style={{
                                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                                width: '200px',
                                height: '230px',
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                transform: `scale(${Math.random() * 2 + 1}) rotate(${Math.random() * 360}deg)`
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>

        {/* Effet de lumière */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl" />

        {/* Lignes décoratives */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        </div>

        {/* Contenu principal */}
        <div className="relative flex flex-col items-center justify-center h-full p-8">
            <h2 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                Expérience Professionnelle
            </h2>

            <div className="grid grid-cols-1 gap-8 max-w-4xl relative">
                {/* Ligne de temps verticale */}
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 hidden md:block" />

                {experienceContent.map((experience, index) => (
                    <div key={index} className="relative">
                        {/* Point sur la ligne de temps */}
                        <div className="absolute -left-2 top-8 w-4 h-4 rounded-full bg-blue-500 hidden md:block" />
                        <InfoCard {...experience} className="md:ml-8" />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default ExperienceSection;