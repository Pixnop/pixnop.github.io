// src/components/sections/Experience/ExperienceCard.tsx
import { Experience } from '@/types/portfolio.types';
import Card from '@/components/ui/Card';

interface ExperienceCardProps {
  experience: Experience;
  delay: number;
}

const ExperienceCard = ({ experience, delay }: ExperienceCardProps) => {
  const { title, company, period, description } = experience;

  return (
    <Card
      className="transform transition-all duration-700"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h3 className="text-xl font-semibold text-primary-500">{title}</h3>
          <span className="text-text-secondary text-sm">{period}</span>
        </div>
        <p className="text-text-primary font-medium">{company}</p>
        {description.length > 0 && (
          <ul className="list-disc list-inside space-y-1 text-text-secondary">
            {description.map((item, index) => (
              <li key={index} className="ml-4">{item}</li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
};

export default ExperienceCard;