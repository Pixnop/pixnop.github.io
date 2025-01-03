// src/components/sections/Skills/SkillCard.tsx
import { Skill } from '@/types/portfolio.types';
import Card from '@/components/ui/Card';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface SkillCardProps {
  skillCategory: Skill;
  delay: number;
}

const SkillCard = ({ skillCategory, delay }: SkillCardProps) => {
  const { category, items } = skillCategory;

  return (
    <Card
      className="transform transition-all duration-700"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-primary-500">{category}</h3>
        <div className="space-y-2">
          {items.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-text-secondary"
            >
              <CheckCircleIcon className="w-5 h-5 text-primary-500" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default SkillCard;