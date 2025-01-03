// src/components/ui/Card/Card.tsx
import { CardProps } from '@/types/components.types';

const Card: React.FC<CardProps> = ({ children, className = '', style }) => {
  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Card;