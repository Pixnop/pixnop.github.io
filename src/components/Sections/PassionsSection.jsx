import React from 'react';
import SectionCard from './SectionCard';

const PassionsSection = () => {
    const passions = [
        {
            title: 'Drones FPV',
            items: [
                'Pilotage depuis 2019',
                'Création et configuration',
                'Modélisation 3D de pièces'
            ]
        },
        {
            title: 'Impression 3D',
            items: [
                'FDM (Fused Deposition Modeling)',
                'SLA (Stéréolithographie)',
                'Conception CAO'
            ]
        }
    ];

    return (
        <section className="w-screen h-screen flex-shrink-0 snap-start bg-gradient-to-br from-black to-blue-900">
            <div className="flex flex-col items-center justify-center h-full p-8">
                <h2 className="text-4xl font-bold mb-8">Passions & Projets</h2>
                <div className="grid grid-cols-2 gap-8 max-w-4xl">
                    {passions.map((passion, index) => (
                        <SectionCard key={index} {...passion} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PassionsSection;