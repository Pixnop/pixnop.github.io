// Animations d'effet de frappe et autres effets dynamiques
document.addEventListener('DOMContentLoaded', function() {
  // Récupère le titre de la page d'accueil pour l'animation de typing
  const homeTitle = document.querySelector('.home-profile h1');
  if (homeTitle) {
    // Obtenir le texte original
    const originalText = homeTitle.innerText;
    // Créer un span avec un ID pour TypeIt
    homeTitle.innerHTML = '<span id="typing-title"></span>';
    
    // Charger TypeIt si ce n'est pas déjà fait
    if (typeof TypeIt === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/typeit@8.7.1/dist/index.umd.js';
      script.onload = () => {
        initTypeIt(originalText);
      };
      document.head.appendChild(script);
    } else {
      initTypeIt(originalText);
    }
  }
  
  // Initialiser l'animation de typing
  function initTypeIt(text) {
    try {
      new TypeIt("#typing-title", {
        strings: text,
        speed: 50,
        waitUntilVisible: true,
        cursor: true,
        afterComplete: function() {
          document.querySelector('.TypeIt-cursor').classList.add('with-pulse');
        }
      }).go();
    } catch (e) {
      console.log("TypeIt error", e);
      // Fallback si l'animation échoue
      if (document.getElementById('typing-title')) {
        document.getElementById('typing-title').innerText = text;
      }
    }
  }
  
  // Animer les textes avec une apparition progressive
  const animateTexts = () => {
    document.querySelectorAll('.animate-text').forEach((element, index) => {
      element.style.animationDelay = `${0.2 * index}s`;
      element.classList.add('fadeInUp');
    });
  };
  
  // Ajouter la classe 'animate-text' aux paragraphes pour l'animation
  document.querySelectorAll('.prose p, .prose li, .prose h2, .prose h3').forEach(element => {
    element.classList.add('animate-text');
  });
  
  // Déclencher l'animation
  setTimeout(animateTexts, 500);
  
  // Ajouter des animations aux éléments de navigation
  const navigationItems = document.querySelectorAll('.main-menu nav a');
  navigationItems.forEach((item, index) => {
    item.style.animationDelay = `${0.1 * index}s`;
    item.classList.add('fadeInDown');
  });
  
  // Animation des icônes sociales
  const socialIcons = document.querySelectorAll('.social-icons a, footer a');
  socialIcons.forEach((icon, index) => {
    icon.style.animationDelay = `${0.1 * index}s`;
    icon.classList.add('fadeInUp');
    
    // Ajouter un effet de survol avec une rotation légère
    icon.addEventListener('mouseenter', () => {
      icon.style.transform = 'translateY(-3px) rotate(5deg)';
    });
    
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'translateY(0) rotate(0)';
    });
  });
  
  // Créer un observateur pour animer les éléments lorsqu'ils deviennent visibles
  const animateOnScrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        animateOnScrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  // Appliquer l'observateur à tous les éléments animés
  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    animateOnScrollObserver.observe(element);
  });
  
  // Ajouter la classe animate-on-scroll à tous les éléments pertinents
  document.querySelectorAll('.card, .skill-item, article, section > div').forEach(element => {
    if (!element.classList.contains('animate-on-scroll')) {
      element.classList.add('animate-on-scroll');
    }
  });
});