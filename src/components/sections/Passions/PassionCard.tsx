// src/components/sections/Passions/PassionCard.tsx
import { Passion } from '@/types/portfolio.types';
import Card from '@/components/ui/Card';
import { HeartIcon, CubeIcon, DeviceTabletIcon } from '@heroicons/react/24/outline';

interface PassionCardProps {
  passion: Passion;
  delay: number;
}

const PassionCard = ({ passion, delay }: PassionCardProps) => {
  const { title, description } = passion;

  // Sélectionner l'icône en fonction du titre
  const getIcon = () => {
    switch (title.toLowerCase()) {
      case 'drone fpv':
        return <DeviceTabletIcon className="w-8 h-8 text-primary-500" />;
      case 'impression 3d':
        return <CubeIcon className="w-8 h-8 text-primary-500" />;
      default:
        return <HeartIcon className="w-8 h-8 text-primary-500" />;
    }
  };

  return (
    <Card
      className="transform transition-all duration-700 flex flex-col items-center text-center"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="space-y-4">
        <div className="flex justify-center">
          {getIcon()}
        </div>
        <h3 className="text-xl font-semibold text-primary-500">{title}</h3>
        <p className="text-text-secondary">{description}</p>
      </div>
    </Card>
  );
};

export default PassionCard;