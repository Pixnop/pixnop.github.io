// src/components/sections/Experience/Experience.tsx
import { useRef } from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import ExperienceCard from './ExperienceCard';
import Title from '@/components/ui/Title';
import Section from '@/components/ui/Section';

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);
  const { experiences } = usePortfolio();

  return (
    <Section id="experience">
      <div
        ref={sectionRef}
        className={`transform transition-all duration-700 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'
        }`}
      >
        <Title className="text-3xl mb-8 text-center">Expérience professionnelle</Title>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.title}-${index}`}
              experience={experience}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;