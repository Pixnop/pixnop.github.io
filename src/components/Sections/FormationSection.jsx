import React from 'react';
import SectionCard from './SectionCard';

const FormationSection = () => {
    const formations = [
        {
            title: 'BUT Informatique',
            subtitle: 'IUT Montpellier-Sète | 2021 - présent',
            items: [
                'Développement et optimisation d\'applications',
                'Administration de systèmes informatiques',
                'Gestion de projets informatiques'
            ]
        },
        {
            title: 'Bac STI2D',
            subtitle: 'Lycée Pierre Rouge | 2019 - 2021',
            items: [
                'Spécialisation en programmation',
                'Projets systèmes en entreprise'
            ]
        }
    ];

    return (
        <section className="w-screen h-screen flex-shrink-0 snap-start bg-gradient-to-br from-black to-blue-900">
            <div className="flex flex-col items-center justify-center h-full p-8">
                <h2 className="text-4xl font-bold mb-8">Formation</h2>
                <div className="grid grid-cols-1 gap-8 max-w-4xl">
                    {formations.map((formation, index) => (
                        <SectionCard key={index} {...formation} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FormationSection;