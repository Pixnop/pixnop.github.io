import React from 'react';
import SectionCard from './SectionCard';

const ExperienceSection = () => {
    const experiences = [
        {
            title: 'ECO-MED Montpellier',
            subtitle: 'Stage & Alternance | 2024',
            items: [
                'Développement d\'applications métier',
                'Création d\'un hub applicatif centralisé',
                'Méthodologies agiles & Git'
            ]
        },
        {
            title: 'Autres Expériences',
            items: [
                'Maître nageur sauveteur - Camping Domaine des Mûriers (2023)',
                'Création du site web saint-gely-athletisme.fr (2020)'
            ]
        }
    ];

    return (
        <section className="w-screen h-screen flex-shrink-0 snap-start bg-gradient-to-br from-black to-blue-900">
            <div className="flex flex-col items-center justify-center h-full p-8">
                <h2 className="text-4xl font-bold mb-8">Expérience Professionnelle</h2>
                <div className="grid grid-cols-1 gap-8 max-w-4xl">
                    {experiences.map((experience, index) => (
                        <SectionCard key={index} {...experience} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;