// src/components/sections/Passions/Passions.tsx
import { useRef } from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import PassionCard from './PassionCard';
import Title from '@/components/ui/Title';
import Section from '@/components/ui/Section';

const Passions = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);
  const { passions } = usePortfolio();

  return (
    <Section id="passions">
      <div
        ref={sectionRef}
        className={`transform transition-all duration-700 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'
        }`}
      >
        <Title className="text-3xl mb-8 text-center">Passions</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {passions.map((passion, index) => (
            <PassionCard
              key={passion.title}
              passion={passion}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Passions;