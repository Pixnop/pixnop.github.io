import React from 'react';
import SectionCard from './SectionCard';

const TechnologiesSection = () => {
    const technologies = [
        {
            title: 'Développement',
            items: [
                'Front-end & Back-end',
                'SQL et SGBD',
                'Architecture logicielle'
            ]
        },
        {
            title: 'Certifications',
            items: [
                'BNSSA (2022)',
                'PSE1 (2022-2023)'
            ]
        }
    ];

    return (
        <section className="w-screen h-screen flex-shrink-0 snap-start bg-gradient-to-br from-black to-blue-900">
            <div className="flex flex-col items-center justify-center h-full p-8">
                <h2 className="text-4xl font-bold mb-8">Compétences Techniques</h2>
                <div className="grid grid-cols-2 gap-8 max-w-4xl">
                    {technologies.map((tech, index) => (
                        <SectionCard key={index} {...tech} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologiesSection;