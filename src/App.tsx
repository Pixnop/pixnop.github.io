// src/App.tsx
import { useRef } from 'react';
import Header from '@/components/layout/Header';
import Profile from '@/components/sections/Profile';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Skills from '@/components/sections/Skills';
import Passions from '@/components/sections/Passions';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';
import { PortfolioProvider } from '@/context/PortfolioContext';

const AppContent = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  useHorizontalScroll(scrollContainerRef);

  return (
    <div className="h-screen w-screen overflow-hidden bg-background">
      <Header className="fixed top-0 left-0 right-0 h-16 z-50" />

      <main
        ref={scrollContainerRef}
        className="flex mt-16 h-[calc(100vh-4rem)] overflow-x-auto overflow-y-hidden"
      >
        <div className="flex flex-nowrap">
          <Profile />
          <Experience />
          <Education />
          <Skills />
          <Passions />
        </div>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <PortfolioProvider>
      <AppContent />
    </PortfolioProvider>
  );
};

export default App;