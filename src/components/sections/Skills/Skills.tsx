// src/components/sections/Skills/Skills.tsx
import { useRef } from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import SkillCard from './SkillCard';
import Title from '@/components/ui/Title';
import Section from '@/components/ui/Section';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);
  const { skills } = usePortfolio();

  return (
    <Section id="skills">
      <div
        ref={sectionRef}
        className={`transform transition-all duration-700 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'
        }`}
      >
        <Title className="text-3xl mb-8 text-center">Compétences</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillCategory, index) => (
            <SkillCard
              key={skillCategory.category}
              skillCategory={skillCategory}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;