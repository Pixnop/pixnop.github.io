// Script pour animer la partie haute de la page uniquement
document.addEventListener('DOMContentLoaded', function() {
  // Création des éléments d'animation pour le header
  function createHeaderAnimation() {
    // Vérifier si l'animation existe déjà
    if (document.querySelector('.header-background')) {
      return;
    }
    
    // Créer le conteneur principal pour l'animation
    const headerBackground = document.createElement('div');
    headerBackground.className = 'header-background';
    
    // Créer l'effet de vagues
    const headerWaves = document.createElement('div');
    headerWaves.className = 'header-waves';
    headerBackground.appendChild(headerWaves);
    
    // Créer le conteneur pour les points
    const headerDots = document.createElement('div');
    headerDots.className = 'header-dots';
    
    // Ajouter quelques points statiques (approche légère pour les performances)
    for (let i = 0; i < 6; i++) {
      const dot = document.createElement('div');
      dot.className = 'header-dot';
      headerDots.appendChild(dot);
    }
    
    headerBackground.appendChild(headerDots);
    
    // Insérer l'animation après l'en-tête principal
    const mainMenu = document.querySelector('.main-menu');
    if (mainMenu && mainMenu.parentNode) {
      mainMenu.parentNode.insertBefore(headerBackground, mainMenu.nextSibling);
    } else {
      // Fallback: ajouter au début du body si le menu n'est pas trouvé
      document.body.prepend(headerBackground);
    }
    
    // Ajouter un wrapper pour le contenu principal
    const mainContent = document.querySelector('.main');
    if (mainContent) {
      const mainContentWrapper = document.createElement('div');
      mainContentWrapper.className = 'main-content-wrapper';
      mainContent.parentNode.insertBefore(mainContentWrapper, mainContent);
      mainContentWrapper.appendChild(mainContent);
    }
  }
  
  // Exécuter la création de l'animation
  createHeaderAnimation();
  
  // Effet d'interaction simple au mouvement de la souris
  function addMouseInteraction() {
    const headerBackground = document.querySelector('.header-background');
    if (!headerBackground) return;
    
    document.addEventListener('mousemove', function(e) {
      // Limiter cet effet à la partie haute de la page
      if (e.clientY < 400) {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.005;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.005;
        
        const dots = document.querySelectorAll('.header-dot');
        dots.forEach((dot, index) => {
          const factor = (index + 1) * 0.1;
          dot.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
        });
      }
    });
  }
  
  // Ajouter l'interaction au mouvement de souris
  setTimeout(addMouseInteraction, 500);
});