// Gestion de l'animation de fond avec flou lors du défilement

document.addEventListener("DOMContentLoaded", function() {
  // Créer l'élément d'animation de fond s'il n'existe pas déjà
  if (\!document.querySelector(".background-animation")) {
    const backgroundAnimation = document.createElement("div");
    backgroundAnimation.className = "background-animation";
    document.body.insertBefore(backgroundAnimation, document.body.firstChild);
  }

  const backgroundAnimation = document.querySelector(".background-animation");

  // Variables pour la détection du défilement
  let scrollTimer;
  let isScrolling = false;
  let lastScrollTop = 0;
  const scrollThreshold = 5; // Seuil minimum de défilement pour déclencher l'effet
  
  // Fonction pour appliquer le flou lors du défilement
  function handleScroll() {
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
    
    // Vérifier si le défilement est suffisamment important
    if (Math.abs(currentScrollTop - lastScrollTop) > scrollThreshold) {
      if (\!isScrolling) {
        isScrolling = true;
        backgroundAnimation.classList.add("blur");
      }
      
      // Mettre à jour la dernière position de défilement
      lastScrollTop = currentScrollTop;
      
      // Réinitialiser le minuteur à chaque événement de défilement
      clearTimeout(scrollTimer);
    }
    
    // Définir un nouveau minuteur
    scrollTimer = setTimeout(function() {
      // L'utilisateur a arrêté de défiler
      isScrolling = false;
      backgroundAnimation.classList.remove("blur");
    }, 300); // Délai avant de supprimer l'effet de flou
  }

  // Fonction pour ajuster l'intensité du flou en fonction de la vitesse de défilement
  function adjustBlurIntensity() {
    // Non implémenté pour l'instant - possibilité d'amélioration future
  }

  // Fonction pour ajuster l'opacité du fond en fonction de la position de défilement
  function adjustBackgroundOpacity() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    
    // Calculer le pourcentage de défilement (0 à 1)
    const scrollPercentage = Math.min(scrollPosition / (docHeight - windowHeight), 1);
    
    // Ajuster l'opacité légèrement (subtil) en fonction du défilement
    // Valeurs ajustées pour être moins intrusives
    const baseOpacity = 0.3; // Opacité de base
    const opacityRange = 0.1; // Variation d'opacité
    const newOpacity = baseOpacity - (scrollPercentage * opacityRange);
    
    // Appliquer l'opacité
    backgroundAnimation.style.opacity = newOpacity.toFixed(2);
  }

  // Écouteurs d'événements
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("scroll", adjustBackgroundOpacity, { passive: true });
  
  // Initialiser l'opacité
  adjustBackgroundOpacity();
  
  // Assurer que l'animation est visible sur tous les navigateurs
  document.documentElement.style.height = "100%";
  document.body.style.height = "100%";
  document.body.style.margin = "0";
  document.body.style.padding = "0";
});
