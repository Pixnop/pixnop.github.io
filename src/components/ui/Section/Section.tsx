// src/components/ui/Section/Section.tsx
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, children, className = '' }: SectionProps) => {
  return (
    <section
      id={id}
      className={`min-w-screen w-screen flex-shrink-0 h-full flex items-center px-2 snap-start ${className}`}
    >
      <div className="w-full max-w-2xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;