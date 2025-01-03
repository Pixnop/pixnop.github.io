# Ouvrez PowerShell et naviguez vers votre dossier projet, puis exécutez:

# Créer les dossiers
mkdir -Force src/components/layout/Header
mkdir -Force src/components/layout/Footer
mkdir -Force src/components/sections/Profile
mkdir -Force src/components/sections/Experience
mkdir -Force src/components/sections/Education
mkdir -Force src/components/sections/Skills
mkdir -Force src/components/sections/Passions
mkdir -Force src/components/ui/Button
mkdir -Force src/components/ui/Card
mkdir -Force src/components/ui/Title
mkdir -Force src/hooks
mkdir -Force src/styles
mkdir -Force src/types
mkdir -Force src/utils
mkdir -Force src/constants
mkdir -Force src/data
mkdir -Force src/context

# Créer les fichiers
New-Item -Force src/components/layout/Header/Header.tsx
New-Item -Force src/components/layout/Header/Navigation.tsx
New-Item -Force src/components/layout/Header/index.ts
New-Item -Force src/components/layout/Footer/Footer.tsx
New-Item -Force src/components/layout/Footer/index.ts

New-Item -Force src/components/sections/Profile/Profile.tsx
New-Item -Force src/components/sections/Profile/ProfileCard.tsx
New-Item -Force src/components/sections/Profile/index.ts

New-Item -Force src/components/sections/Experience/Experience.tsx
New-Item -Force src/components/sections/Experience/ExperienceCard.tsx
New-Item -Force src/components/sections/Experience/index.ts

New-Item -Force src/components/sections/Education/Education.tsx
New-Item -Force src/components/sections/Education/EducationCard.tsx
New-Item -Force src/components/sections/Education/index.ts

New-Item -Force src/components/sections/Skills/Skills.tsx
New-Item -Force src/components/sections/Skills/SkillCard.tsx
New-Item -Force src/components/sections/Skills/index.ts

New-Item -Force src/components/sections/Passions/Passions.tsx
New-Item -Force src/components/sections/Passions/PassionCard.tsx
New-Item -Force src/components/sections/Passions/index.ts

New-Item -Force src/components/ui/Button/Button.tsx
New-Item -Force src/components/ui/Button/index.ts
New-Item -Force src/components/ui/Card/Card.tsx
New-Item -Force src/components/ui/Card/index.ts
New-Item -Force src/components/ui/Title/Title.tsx
New-Item -Force src/components/ui/Title/index.ts

New-Item -Force src/hooks/useHorizontalScroll.ts
New-Item -Force src/hooks/useIntersectionObserver.ts

New-Item -Force src/styles/globals.css
New-Item -Force src/styles/animations.css

New-Item -Force src/types/portfolio.types.ts
New-Item -Force src/types/components.types.ts

New-Item -Force src/utils/scroll.ts
New-Item -Force src/utils/animations.ts

New-Item -Force src/constants/portfolio.constants.ts
New-Item -Force src/data/portfolio.data.ts
New-Item -Force src/context/PortfolioContext.tsx