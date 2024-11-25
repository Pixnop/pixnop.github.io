import { Code, GraduationCap, Briefcase, Monitor, Heart } from 'lucide-react';
// Autres options d'icônes possibles:
// import { Gamepad2, Hobby, Heart, Puzzle, Star, Sparkles } from 'lucide-react';

export const sections = [
    {
        id: 'home',
        title: 'Accueil',
        icon: Code,
        color: '#00A3FF',
    },
    {
        id: 'formation',
        title: 'Formation',
        icon: GraduationCap,
        color: '#00A3FF',
    },
    {
        id: 'experience',
        title: 'Expérience',
        icon: Briefcase,
        color: '#00A3FF',
    },
    {
        id: 'tech',
        title: 'Technologies',
        icon: Monitor,
        color: '#00A3FF',
    },
    {
        id: 'passion',
        title: 'Passions',
        icon: Heart,
        color: '#00A3FF',
    }
];