import React from 'react';

const HomeSection = () => {
    return (
        <section className="w-screen h-screen flex-shrink-0 snap-start bg-gradient-to-br from-black to-blue-900">
            <div className="flex flex-col items-center justify-center h-full p-8">
                <h1 className="text-6xl font-bold mb-8 text-white">Léon Fievet</h1>
                <p className="text-xl text-blue-300 text-center max-w-2xl mb-8">
                    Étudiant en BUT Informatique à l'IUT de Montpellier, passionné par le développement web et
                    les nouvelles technologies
                </p>
                <div className="flex space-x-4">
                    <a
                        href="mailto:fievet.leon@free.fr"
                        className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors text-white"
                    >
                        Me contacter
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HomeSection;