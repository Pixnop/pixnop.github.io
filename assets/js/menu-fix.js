// Script pour s'assurer que le menu mobile fonctionne correctement
document.addEventListener('DOMContentLoaded', function() {
  // Fonction pour fixer le menu mobile
  function fixMobileMenu() {
    // S'assurer que le bouton de menu est cliquable
    const menuButton = document.getElementById('menu-button');
    const menuWrapper = document.getElementById('menu-wrapper');
    
    if (menuButton && menuWrapper) {
      // Nettoyer les anciens event listeners si besoin
      const newMenuButton = menuButton.cloneNode(true);
      menuButton.parentNode.replaceChild(newMenuButton, menuButton);
      
      // Ajouter l'event listener pour ouvrir le menu
      newMenuButton.addEventListener('click', function() {
        menuWrapper.style.opacity = '1';
        menuWrapper.style.visibility = 'visible';
        document.body.style.overflow = 'hidden'; // Empêcher le défilement du fond
      });
      
      // Ajouter l'event listener pour fermer le menu
      const closeButton = document.getElementById('menu-close-button');
      if (closeButton) {
        closeButton.addEventListener('click', function() {
          menuWrapper.style.opacity = '0';
          menuWrapper.style.visibility = 'hidden';
          document.body.style.overflow = ''; // Restaurer le défilement
        });
      }
    }
    
    // Fixer le titre du site pour éviter le retour chariot par lettre
    const siteTitle = document.querySelector('.main-menu nav.flex a.text-base');
    if (siteTitle) {
      // Ajouter un petit effet visuel au titre
      if (!siteTitle.hasAttribute('data-enhanced')) {
        // Marquer comme déjà traité
        siteTitle.setAttribute('data-enhanced', 'true');
        
        // Réduire le texte si nécessaire sur mobile
        if (window.innerWidth < 640 && siteTitle.textContent.length > 20) {
          const originalTitle = siteTitle.textContent;
          // Stocker le titre original comme attribut data
          if (!siteTitle.getAttribute('data-original-title')) {
            siteTitle.setAttribute('data-original-title', originalTitle);
          }
          
          // Réduire le titre sur les petits écrans
          if (window.innerWidth < 400) {
            siteTitle.textContent = 'Léon Fievet';
          } else if (window.innerWidth < 500) {
            siteTitle.textContent = 'Léon Fievet - Portfolio';
          }
        }
      }
      
      // Restaurer le titre original sur les grands écrans
      if (siteTitle.getAttribute('data-original-title') && window.innerWidth >= 640) {
        siteTitle.textContent = siteTitle.getAttribute('data-original-title');
      }
    }
  }
  
  // Exécuter la fonction immédiatement et après un court délai pour s'assurer que tout est chargé
  fixMobileMenu();
  setTimeout(fixMobileMenu, 500);
  
  // Réappliquer si la fenêtre est redimensionnée
  window.addEventListener('resize', fixMobileMenu);
});