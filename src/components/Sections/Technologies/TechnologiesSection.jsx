// src/components/Sections/Technologies/TechnologiesSection.jsx
import React from 'react';
import InfoCard from '../Cards/InfoCard';
import { technologiesContent } from '../../../constants/content/technologies';

const TechnologiesSection = () => {
    // Animation des lignes de code avec des délais aléatoires
    const getRandomDelay = () => Math.random() * 5;
    const getRandomDuration = () => Math.random() * 3 + 2;

    return (
        <section className="w-screen h-screen flex-shrink-0 snap-start relative overflow-hidden">
            {/* Fond avec effet matrice */}
            <div className="absolute inset-0 bg-[#040612]">
                {/* Lignes de code stylisées animées */}
                <div className="absolute inset-0 opacity-10">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute font-mono text-xs text-blue-500 whitespace-nowrap animate-fadeInOut"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                transform: `rotate(${Math.random() * 360}deg)`,
                                animationDelay: `${getRandomDelay()}s`,
                                animationDuration: `${getRandomDuration()}s`,
                            }}
                        >
                            {`{ code: ${Math.random().toString(36).slice(2, 8)} }`}
                        </div>
                    ))}
                </div>

                {/* Grille de circuits avec animation de pulse */}
                <div className="absolute inset-0 opacity-20">
                    <div className="h-full w-full grid grid-cols-12 grid-rows-12">
                        {[...Array(144)].map((_, i) => (
                            <div
                                key={i}
                                className={`border-r border-b border-blue-500/20 ${i % 7 === 0 ? 'animate-pulse' : ''}`}
                                style={{
                                    animationDelay: `${i * 0.1}s`,
                                    background: i % 7 === 0 ? 'linear-gradient(45deg, transparent 0%, rgba(59,130,246,0.1) 50%, transparent 100%)' : '',
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Particules flottantes */}
                <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-blue-500/30 animate-float"
                            style={{
                                width: `${Math.random() * 4 + 2}px`,
                                height: `${Math.random() * 4 + 2}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${Math.random() * 3 + 4}s`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Effet d'éclairage tech avec scan line */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-scanline" />
                <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-scanlineReverse" />
            </div>

            {/* Contenu principal avec animation à l'entrée */}
            <div className="relative flex flex-col items-center justify-center h-full p-8 animate-fadeIn">
                <div className="absolute inset-0 bg-blue-950/10 backdrop-blur-sm" />

                <h2 className="relative text-5xl font-bold mb-12 text-center animate-slideDown">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">
                        Compétences Techniques
                    </span>
                </h2>

                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
                    {technologiesContent.map((tech, index) => (
                        <div
                            key={index}
                            className="relative flex items-stretch animate-slideIn"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <InfoCard
                                {...tech}
                                className="w-full group relative"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologiesSection;