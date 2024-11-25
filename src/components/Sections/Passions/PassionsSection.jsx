// src/components/Sections/Passions/PassionsSection.jsx
import React from 'react';
import InfoCard from '../Cards/InfoCard';
import { passionsContent } from '../../../constants/content/passions';

const PassionsSection = () => (
    <section className="w-screen h-screen flex-shrink-0 snap-start relative overflow-hidden">
        {/* Fond principal avec dégradé profond */}
        <div className="absolute inset-0 bg-[#0a0a1e]">
            {/* Cercles décoratifs animés */}
            {[...Array(5)].map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full mix-blend-screen animate-pulse"
                    style={{
                        background: `radial-gradient(circle, ${
                            ['rgba(147,51,234,0.15)', 'rgba(59,130,246,0.15)', 'rgba(236,72,153,0.15)'][i % 3]
                        } 0%, transparent 70%)`,
                        width: `${Math.random() * 400 + 200}px`,
                        height: `${Math.random() * 400 + 200}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 1.5}s`,
                        animationDuration: '4s',
                    }}
                />
            ))}

            {/* Motif ondulant */}
            <div className="absolute inset-0 opacity-30">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform -rotate-45"
                        style={{
                            top: `${i * 20}%`,
                            left: `-${i * 10}%`,
                            animation: `wave ${3 + i}s ease-in-out infinite`,
                            animationDelay: `${i * 0.5}s`,
                        }}
                    />
                ))}
            </div>
        </div>

        {/* Overlay avec effet glass */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />

        {/* Contenu principal */}
        <div className="relative flex flex-col items-center justify-center h-full p-8">
            <h2 className="text-5xl font-bold mb-12 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                    Passions & Projets
                </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
                {passionsContent.map((passion, index) => (
                    <InfoCard key={index} {...passion} />
                ))}
            </div>
        </div>

        {/* Particules flottantes */}
        <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-float opacity-20"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDuration: `${Math.random() * 3 + 2}s`,
                        animationDelay: `${Math.random() * 2}s`,
                    }}
                />
            ))}
        </div>
    </section>
);

export default PassionsSection;