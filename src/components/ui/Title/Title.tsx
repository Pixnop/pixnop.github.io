// src/components/ui/Title/Title.tsx
import { TitleProps } from '@/types/components.types';

const Title: React.FC<TitleProps> = ({
  children,
  className = '',
  as: Component = 'h2'
}) => {
  return (
    <Component className={`section-title ${className}`}>
      {children}
    </Component>
  );
};

export default Title;