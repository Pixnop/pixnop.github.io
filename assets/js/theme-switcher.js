// Gestion améliorée du changement de thème
document.addEventListener('DOMContentLoaded', function() {
  // Récupérer les éléments du sélecteur de thème
  const appearanceSwitcher = document.getElementById('appearance-switcher');
  const appearanceSwitcherMobile = document.getElementById('appearance-switcher-mobile');
  
  // Fonction principale pour gérer le changement de thème
  function toggleTheme() {
    // Vérifier si le thème actuel est clair ou sombre
    const isDarkMode = document.documentElement.classList.contains('dark');
    
    // Inverser le thème
    if (isDarkMode) {
      document.documentElement.classList.replace('dark', 'light');
      localStorage.setItem('appearance', 'light');
    } else {
      document.documentElement.classList.replace('light', 'dark');
      localStorage.setItem('appearance', 'dark');
    }
    
    // Forcer le rafraîchissement des styles d'animation
    updateStyles();
  }
  
  // Mettre à jour les styles en fonction du thème
  function updateStyles() {
    const isDarkMode = document.documentElement.classList.contains('dark');
    
    // Mettre à jour les couleurs du titre principal
    const mainTitle = document.querySelector('.home-profile h1');
    if (mainTitle) {
      if (isDarkMode) {
        mainTitle.style.color = '#8b5cf6';
      } else {
        mainTitle.style.color = '#6366f1';
      }
    }
    
    // Mettre à jour les couleurs des points
    document.querySelectorAll('.header-dot').forEach(dot => {
      if (isDarkMode) {
        dot.style.backgroundColor = 'rgba(139, 92, 246, 0.3)';
      } else {
        dot.style.backgroundColor = 'rgba(99, 102, 241, 0.2)';
      }
    });
  }
  
  // Ajouter les gestionnaires d'événements aux sélecteurs de thème
  if (appearanceSwitcher) {
    appearanceSwitcher.addEventListener('click', toggleTheme);
  }
  
  if (appearanceSwitcherMobile) {
    appearanceSwitcherMobile.addEventListener('click', toggleTheme);
  }
  
  // Initialiser le thème en fonction des préférences de l'utilisateur
  function initTheme() {
    // Vérifier si l'utilisateur a déjà choisi un thème
    const savedTheme = localStorage.getItem('appearance');
    
    if (savedTheme) {
      // Appliquer le thème sauvegardé
      document.documentElement.classList.remove('dark', 'light');
      document.documentElement.classList.add(savedTheme);
    } else {
      // Vérifier les préférences du système
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      document.documentElement.classList.remove('dark', 'light');
      document.documentElement.classList.add(prefersDarkMode ? 'dark' : 'light');
    }
    
    // Mettre à jour les styles
    updateStyles();
  }
  
  // Initialiser le thème
  initTheme();
});