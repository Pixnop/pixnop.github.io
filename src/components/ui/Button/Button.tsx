// src/components/ui/Button/Button.tsx
import { ButtonProps } from '@/types/components.types';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button'
}) => {
  const baseStyles = 'rounded-lg font-medium transition-colors duration-200';
  const variants = {
    primary: 'btn-primary',
    secondary: 'bg-dark-200 hover:bg-dark-300 text-dark-900',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;