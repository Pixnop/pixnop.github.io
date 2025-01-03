// src/context/PortfolioContext.tsx
import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Profile, Experience, Education, Skill, Passion } from '@/types/portfolio.types';

interface PortfolioContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  scrollTo: (sectionId: string) => void;
  profile: Profile;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  passions: Passion[];
}

interface PortfolioProviderProps {
  children: ReactNode;
}

const defaultProfile: Profile = {
  name: "Fievet Léon",
  title: "Étudiant en informatique",
  description: "Étudiant en informatique, spécialisé dans la création d'applications et d'algorithmes avec une expérience en conception de produits.",
  contact: {
    email: ["fievet.leon@free.fr", "leon.fievet@etu.umontpellier.fr"],
    phone: "07 81 87 39 33",
    website: "pixnop.github.io",
    address: [
      "42 rue du mas du juge, Saint gély du fesc, 34980",
      "5 rue de la vieille aiguillerie, Montpellier, 34000"
    ]
  }
};

const defaultExperiences: Experience[] = [
  {
    title: "Développeur Informatique FullStack",
    company: "ECO-MED Montpellier",
    period: "1ᵉʳ juillet au 31 août 2024",
    description: [
      "Développement d'un hub applicatif centralisé",
      "Création d'applications métier : covoiturage, suivi météo, génération de documents",
      "Optimisation d'outils existants",
      "Méthodologies agiles & outils collaboratifs (Git)"
    ]
  },
  {
    title: "Maître nageur sauveteur",
    company: "Camping Domaine des Mûriers",
    period: "Saison 2023",
    description: []
  }
];

const defaultEducation: Education[] = [
  {
    degree: "BUT informatique",
    school: "IUT Montpellier Sète",
    period: "2021 - aujourd'hui",
    description: [
      "Développement et optimisation d'applications",
      "Administration de systèmes informatiques",
      "Gestion des données et de l'information",
      "Gestion de projets et travail d'équipe en informatique"
    ]
  },
  {
    degree: "Bac technologique STI2D",
    school: "Lycée Pierre Rouge",
    period: "2019 - 2021",
    description: ["programmation", "Connaissance des matériaux et de leur architecture"]
  }
];

const defaultSkills: Skill[] = [
  {
    category: "Développement",
    items: [
      "SQL et SGBD",
      "Développement front-end et back-end",
      "Architecture logiciel",
    ]
  },
  {
    category: "Certifications",
    items: [
      "BNSSA (2022)",
      "PSE1 (2022-2023)",
      "Drone télépiloté"
    ]
  }
];

const defaultPassions: Passion[] = [
  {
    title: "Drone FPV",
    description: "Pilote de drone FPV depuis 2019. Création et configuration de drones personnels."
  },
  {
    title: "Impression 3D",
    description: "Utilisation d'imprimantes FDM et SLA. Modélisation 3D et CAO."
  }
];

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider = ({ children }: PortfolioProviderProps) => {
  const [activeSection, setActiveSection] = useState('profile');

  const scrollTo = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
  }, []);

  const value: PortfolioContextType = {
    activeSection,
    setActiveSection,
    scrollTo,
    profile: defaultProfile,
    experiences: defaultExperiences,
    education: defaultEducation,
    skills: defaultSkills,
    passions: defaultPassions
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

// Hook personnalisé pour la navigation active
export const useActiveSection = () => {
  const { activeSection, setActiveSection } = usePortfolio();

  const handleIntersection = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
  }, [setActiveSection]);

  return {
    activeSection,
    handleIntersection
  };
};