// src/components/sections/Education/EducationCard.tsx
import { Education } from '@/types/portfolio.types';
import Card from '@/components/ui/Card';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

interface EducationCardProps {
  education: Education;
  delay: number;
}

const EducationCard = ({ education, delay }: EducationCardProps) => {
  const { degree, school, period, description } = education;

  return (
    <Card
      className="transform transition-all duration-700"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="space-y-3">
        <div className="flex items-start gap-4">
          <AcademicCapIcon className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
          <div className="flex-1 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-xl font-semibold text-primary-500">{degree}</h3>
              <span className="text-text-secondary text-sm">{period}</span>
            </div>
            <p className="text-text-primary font-medium">{school}</p>
            {description.length > 0 && (
              <ul className="list-disc list-inside space-y-1 text-text-secondary">
                {description.map((item, index) => (
                  <li key={index} className="ml-4">{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EducationCard;