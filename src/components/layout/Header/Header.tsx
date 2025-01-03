// src/components/layout/Header/Header.tsx
import Navigation from './Navigation';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`bg-surface border-b border-border ${className}`}>
      <div className="container mx-auto h-full px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary-500">Fievet Léon</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;