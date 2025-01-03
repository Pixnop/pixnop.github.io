// src/components/sections/Profile/Profile.tsx
import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import ProfileCard from './ProfileCard';
import Section from '@/components/ui/Section';

const Profile = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <Section id="profile">
      <div
        ref={sectionRef}
        className={`transform transition-all duration-700 ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-10 opacity-0'
        }`}
      >
        <ProfileCard />
      </div>
    </Section>
  );
};

export default Profile;