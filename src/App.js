import React, {useRef, useState} from 'react';
import {Briefcase, ChevronLeft, ChevronRight, Code, GraduationCap, Monitor, Plane} from 'lucide-react';

const sections = [
    {
        id: 'home',
        title: 'Accueil',
        icon: Code,
        color: '#00A3FF',
    },
    {
        id: 'formation',
        title: 'Formation',
        icon: GraduationCap,
        color: '#00A3FF',
    },
    {
        id: 'experience',
        title: 'Expérience',
        icon: Briefcase,
        color: '#00A3FF',
    },
    {
        id: 'tech',
        title: 'Technologies',
        icon: Monitor,
        color: '#00A3FF',
    },
    {
        id: 'passion',
        title: 'Passions',
        icon: Plane,
        color: '#00A3FF',
    }
];

const Portfolio = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const containerRef = useRef(null);

    const scrollToSection = (index) => {
        setCurrentSection(index);
        containerRef.current.children[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
        });
    };

    return (
        <div className="h-screen w-screen overflow-hidden bg-black text-white">
            <nav className="fixed top-0 left-0 w-full p-4 z-10 bg-black bg-opacity-50">
                <div className="flex justify-center space-x-8">
                    {sections.map((section, index) => (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(index)}
                            className={`flex items-center space-x-2 p-2 rounded-lg transition-all
                ${currentSection === index ? 'bg-blue-500 bg-opacity-20' : 'hover:bg-blue-500 hover:bg-opacity-10'}`}
                        >
                            <section.icon size={20} color={section.color}/>
                            <span>{section.title}</span>
                        </button>
                    ))}
                </div>
            </nav>

            {/* Navigation Buttons */}
            <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-10">
                <button
                    onClick={() => scrollToSection(Math.max(0, currentSection - 1))}
                    className="p-2 bg-blue-500 rounded-full mb-4 hover:bg-blue-600 transition-colors"
                    disabled={currentSection === 0}
                >
                    <ChevronLeft size={24}/>
                </button>
            </div>

            <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-10">
                <button
                    onClick={() => scrollToSection(Math.min(sections.length - 1, currentSection + 1))}
                    className="p-2 bg-blue-500 rounded-full mb-4 hover:bg-blue-600 transition-colors"
                    disabled={currentSection === sections.length - 1}
                >
                    <ChevronRight size={24}/>
                </button>
            </div>

            {/* Main Content */}
            <div ref={containerRef} className="flex h-screen overflow-x-auto snap-x snap-mandatory"
                 style={{scrollSnapType: 'x mandatory'}}>
                {/* Home */}
                <section
                    className="w-screen h-screen flex-shrink-0 snap-start bg-gradient-to-br from-black to-blue-900">
                    <div className="flex flex-col items-center justify-center h-full p-8">
                        <h1 className="text-6xl font-bold mb-8">Léon Fievet</h1>
                        <p className="text-xl text-blue-300 text-center max-w-2xl mb-8">
                            Étudiant en BUT Informatique à l'IUT de Montpellier, passionné par le développement web et
                            les nouvelles technologies
                        </p>
                        <div className="flex space-x-4">
                            <a href="mailto:fievet.leon@free.fr"
                               className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                                Me contacter
                            </a>
                        </div>
                    </div>
                </section>

                {/* Formation */}
                <section
                    className="w-screen h-screen flex-shrink-0 snap-start bg-gradient-to-br from-black to-blue-900">
                    <div className="flex flex-col items-center justify-center h-full p-8">
                        <h2 className="text-4xl font-bold mb-8">Formation</h2>
                        <div className="grid grid-cols-1 gap-8 max-w-4xl">
                            <div className="p-6 bg-black bg-opacity-50 rounded-lg">
                                <h3 className="text-2xl font-bold mb-4">BUT Informatique</h3>
                                <p className="text-blue-300 mb-2">IUT Montpellier-Sète | 2021 - présent</p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Développement et optimisation d'applications</li>
                                    <li>Administration de systèmes informatiques</li>
                                    <li>Gestion de projets informatiques</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-black bg-opacity-50 rounded-lg">
                                <h3 className="text-2xl font-bold mb-4">Bac STI2D</h3>
                                <p className="text-blue-300 mb-2">Lycée Pierre Rouge | 2019 - 2021</p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Spécialisation en programmation</li>
                                    <li>Projets systèmes en entreprise</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Expérience */}
                <section
                    className="w-screen h-screen flex-shrink-0 snap-start bg-gradient-to-br from-black to-blue-900">
                    <div className="flex flex-col items-center justify-center h-full p-8">
                        <h2 className="text-4xl font-bold mb-8">Expérience Professionnelle</h2>
                        <div className="grid grid-cols-1 gap-8 max-w-4xl">
                            <div className="p-6 bg-black bg-opacity-50 rounded-lg">
                                <h3 className="text-2xl font-bold mb-4">ECO-MED Montpellier</h3>
                                <p className="text-blue-300 mb-2">Stage & Alternance | 2024</p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Développement d'applications métier</li>
                                    <li>Création d'un hub applicatif centralisé</li>
                                    <li>Méthodologies agiles & Git</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-black bg-opacity-50 rounded-lg">
                                <h3 className="text-2xl font-bold mb-4">Autres Expériences</h3>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Maître nageur sauveteur - Camping Domaine des Mûriers (2023)</li>
                                    <li>Création du site web saint-gely-athletisme.fr (2020)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technologies */}
                <section
                    className="w-screen h-screen flex-shrink-0 snap-start bg-gradient-to-br from-black to-blue-900">
                    <div className="flex flex-col items-center justify-center h-full p-8">
                        <h2 className="text-4xl font-bold mb-8">Compétences Techniques</h2>
                        <div className="grid grid-cols-2 gap-8 max-w-4xl">
                            <div className="p-6 bg-black bg-opacity-50 rounded-lg">
                                <h3 className="text-2xl mb-4">Développement</h3>
                                <ul className="space-y-2">
                                    <li>• Front-end & Back-end</li>
                                    <li>• SQL et SGBD</li>
                                    <li>• Architecture logicielle</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-black bg-opacity-50 rounded-lg">
                                <h3 className="text-2xl mb-4">Certifications</h3>
                                <ul className="space-y-2">
                                    <li>• BNSSA (2022)</li>
                                    <li>• PSE1 (2022-2023)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Passions */}
                <section
                    className="w-screen h-screen flex-shrink-0 snap-start bg-gradient-to-br from-black to-blue-900">
                    <div className="flex flex-col items-center justify-center h-full p-8">
                        <h2 className="text-4xl font-bold mb-8">Passions & Projets</h2>
                        <div className="grid grid-cols-2 gap-8 max-w-4xl">
                            <div className="p-6 bg-black bg-opacity-50 rounded-lg">
                                <h3 className="text-2xl mb-4">Drones FPV</h3>
                                <ul className="space-y-2">
                                    <li>• Pilotage depuis 2019</li>
                                    <li>• Création et configuration</li>
                                    <li>• Modélisation 3D de pièces</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-black bg-opacity-50 rounded-lg">
                                <h3 className="text-2xl mb-4">Impression 3D</h3>
                                <ul className="space-y-2">
                                    <li>• FDM (Fused Deposition Modeling)</li>
                                    <li>• SLA (Stéréolithographie)</li>
                                    <li>• Conception CAO</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Portfolio;