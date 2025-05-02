// Effet de défilement fluide et autres interactions
document.addEventListener('DOMContentLoaded', function() {
  // Défilement fluide pour les liens d'ancrage
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
    });
  });
  
  // Effet de zoom au survol des images
  document.querySelectorAll('img:not(.nozoom)').forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.05)';
      img.style.transition = 'transform 0.3s ease';
    });
    
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  });
  
  // Ajouter des classes aux éléments pour le styling
  const addClasses = () => {
    // Ajouter la classe card.project aux cartes de projets
    document.querySelectorAll('.card').forEach(card => {
      if (card.querySelector('a[href*="projet"]') || 
          card.closest('.projets') || 
          card.closest('[class*="project"]')) {
        card.classList.add('project');
      }
    });
    
    // Ajouter des badges aux compétences
    document.querySelectorAll('.skills a, .tags a').forEach(tag => {
      tag.classList.add('skill-badge');
    });
    
    // Ajouter la classe glassmorphism aux conteneurs appropriés
    document.querySelectorAll('.recent-articles, .home-profile, .competences, .projects').forEach(container => {
      container.classList.add('glassmorphism');
    });
  };
  
  addClasses();
  
  // Ajouter un effet de parallax au défilement
  let lastScrollTop = 0;
  window.addEventListener('scroll', function() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Effet de parallax pour l'arrière-plan
    document.querySelectorAll('.parallax-bg').forEach(bg => {
      const speed = bg.getAttribute('data-speed') || 0.3;
      const yPos = -(currentScrollTop * speed);
      bg.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
    
    // Effet sur le header lors du défilement
    const header = document.querySelector('.main-menu');
    if (header) {
      if (currentScrollTop > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      // Effet de masquage/affichage du header lors du défilement
      if (currentScrollTop > lastScrollTop && currentScrollTop > 200) {
        // Défilement vers le bas
        header.style.transform = 'translateY(-100%)';
      } else {
        // Défilement vers le haut
        header.style.transform = 'translateY(0)';
      }
    }
    
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  });
  
  // Appliquer l'effet d'ondulation (ripple) aux boutons
  const applyRippleEffect = () => {
    const buttons = document.querySelectorAll('button, .btn, .card.project');
    
    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.className = 'ripple-effect';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        button.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  };
  
  applyRippleEffect();
  
  // Ajouter le style CSS pour l'effet d'ondulation
  const addRippleStyle = () => {
    const style = document.createElement('style');
    style.textContent = `
      .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.3);
        pointer-events: none;
        width: 10px;
        height: 10px;
        transform: scale(0);
        animation: ripple 0.6s linear;
        z-index: 10;
      }
      
      @keyframes ripple {
        to {
          transform: scale(20);
          opacity: 0;
        }
      }
      
      button, .btn, .card.project {
        position: relative;
        overflow: hidden;
      }
    `;
    document.head.appendChild(style);
  };
  
  addRippleStyle();
  
  // Initialiser l'effet de parallax pour l'arrière-plan
  const initParallaxBackground = () => {
    const header = document.querySelector('.hero, header, .main-menu');
    if (header) {
      const parallaxBg = document.createElement('div');
      parallaxBg.className = 'parallax-bg';
      parallaxBg.setAttribute('data-speed', '0.3');
      header.prepend(parallaxBg);
    }
  };
  
  initParallaxBackground();
});