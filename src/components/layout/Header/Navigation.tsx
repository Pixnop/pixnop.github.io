// src/components/layout/Header/Navigation.tsx
const Navigation = () => {
  const navItems = [
    { id: 'profile', label: 'Profil' },
    { id: 'experience', label: 'Expérience' },
    { id: 'education', label: 'Formation' },
    { id: 'skills', label: 'Compétences' },
    { id: 'passions', label: 'Passions' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  };

  return (
    <nav className="flex gap-6">
      {navItems.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className="text-text-secondary hover:text-primary-500 transition-colors duration-200"
        >
          {label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;