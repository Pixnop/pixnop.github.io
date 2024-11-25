//src/hooks/useKeyboardNavigation.js
import { useEffect } from 'react';

const useKeyboardNavigation = (handleNavigation) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    handleNavigation('prev');
                    break;
                case 'ArrowRight':
                    handleNavigation('next');
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleNavigation]);
};

export default useKeyboardNavigation;