// src/components/sections/Education/Education.tsx
import { useRef } from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import EducationCard from './EducationCard';
import Title from '@/components/ui/Title';
import Section from '@/components/ui/Section';

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);
  const { education } = usePortfolio();

  return (
    <Section id="education">
      <div
        ref={sectionRef}
        className={`transform transition-all duration-700 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'
        }`}
      >
        <Title className="text-3xl mb-8 text-center">Formation</Title>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <EducationCard
              key={`${edu.degree}-${index}`}
              education={edu}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;