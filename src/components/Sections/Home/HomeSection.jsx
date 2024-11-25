// src/components/Sections/Home/HomeSection.jsx
import React from 'react';
import { homeContent } from '../../../constants/content/home';

const HomeSection = () => (
    <section className="w-screen h-screen flex-shrink-0 snap-start relative overflow-hidden">
        {/* Motif de fond avec grille */}
        <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 h-full">
                    {[...Array(64)].map((_, i) => (
                        <div
                            key={i}
                            className="border-b border-r border-blue-500/10"
                        />
                    ))}
                </div>
            </div>
        </div>

        {/* Cercles lumineux */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

        {/* Lignes géométriques */}
        <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-40 h-40 border-t-2 border-r-2 border-blue-500/20" />
            <div className="absolute bottom-20 left-20 w-40 h-40 border-b-2 border-l-2 border-purple-500/20" />
        </div>

        {/* Contenu principal */}
        <div className="relative flex flex-col items-center justify-center h-full p-8">
            <h1 className="text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-200 to-purple-400">
                {homeContent.title}
            </h1>
            <p className="text-xl text-blue-200 text-center max-w-2xl mb-12 leading-relaxed">
                {homeContent.subtitle}
                <br />
                {homeContent.description}
            </p>
            <div className="flex space-x-6">
                <a
                    href={`mailto:${homeContent.contact}`}
                    className="group relative px-8 py-4 bg-transparent overflow-hidden"
                >
                    <div className="absolute inset-0 w-0 bg-blue-500 transition-all duration-300 ease-out group-hover:w-full"/>
                    <div className="relative flex items-center space-x-2">
                        <span className="relative text-lg font-semibold text-white">
                            Me contacter
                        </span>
                        <span className="relative transition-transform duration-300 group-hover:translate-x-2">
                            →
                        </span>
                    </div>
                    <div className="absolute inset-0 border border-blue-500 rounded" />
                </a>
            </div>
        </div>
    </section>
);

export default HomeSection;