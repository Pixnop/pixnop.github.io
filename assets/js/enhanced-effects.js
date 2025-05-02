// Effets visuels avancés pour le portfolio
document.addEventListener('DOMContentLoaded', function() {
  // Éléments flottants désactivés pour améliorer la performance
  const createFloatingElements = () => {
    // Fonction vide pour optimiser les performances
    console.log("Floating elements disabled for performance");
  };
  
  // Ajouter un effet de suivi du curseur
  const createCursorEffect = () => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-effect';
    cursor.style.cssText = `
      position: fixed;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 2px solid #6366f1;
      pointer-events: none;
      transform: translate(-50%, -50%);
      z-index: 9999;
      mix-blend-mode: difference;
      transition: all 0.1s ease;
      opacity: 0.7;
    `;
    
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
    
    // Agrandi au survol des liens et boutons
    document.querySelectorAll('a, button, .btn, .card').forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.border = '2px solid #ec4899';
        cursor.style.opacity = '1';
      });
      
      element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.border = '2px solid #6366f1';
        cursor.style.opacity = '0.7';
      });
    });
  };
  
  // Animer les lettres des titres principaux
  const animateLetters = () => {
    const mainTitle = document.querySelector('.home-profile h1');
    if (mainTitle) {
      const text = mainTitle.textContent;
      mainTitle.innerHTML = '';
      mainTitle.classList.add('animated-text');
      
      for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i] === ' ' ? '\u00A0' : text[i];
        span.style.animationDelay = `${i * 0.1}s`;
        mainTitle.appendChild(span);
      }
    }
    
    // Animer les sous-titres
    document.querySelectorAll('h2, h3').forEach(title => {
      const text = title.textContent;
      title.innerHTML = '';
      title.classList.add('animated-text');
      
      for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i] === ' ' ? '\u00A0' : text[i];
        span.style.animationDelay = `${i * 0.05}s`;
        title.appendChild(span);
      }
    });
  };
  
  // Effet de révélation au scroll
  const createScrollReveal = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.card, .skill-item, article, section, .prose p, .prose li, img').forEach(element => {
      element.classList.add('reveal-element');
      observer.observe(element);
    });
    
    // Ajouter le style pour la révélation
    const style = document.createElement('style');
    style.textContent = `
      .reveal-element {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.8s ease, transform 0.8s ease;
      }
      
      .revealed {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);
  };
  
  // Effet 3D au mouvement de la souris sur les cartes
  const create3DEffect = () => {
    document.querySelectorAll('.card').forEach(card => {
      card.classList.add('hover-3d');
      
      card.addEventListener('mousemove', (e) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        const angleX = (cardCenterY - e.clientY) / 15;
        const angleY = (e.clientX - cardCenterX) / 15;
        
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.05, 1.05, 1.05)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      });
    });
  };
  
  // Effet de distorsion pour les images
  const createImageDistortion = () => {
    document.querySelectorAll('img:not(.nozoom)').forEach(img => {
      img.addEventListener('mouseenter', () => {
        img.style.filter = 'hue-rotate(45deg) contrast(1.2)';
        img.style.transform = 'scale(1.05)';
      });
      
      img.addEventListener('mouseleave', () => {
        img.style.filter = 'none';
        img.style.transform = 'scale(1)';
      });
    });
  };
  
  // Effet de saisie avancé pour la biographie
  const createTypingEffect = () => {
    const bio = document.querySelector('.home-profile .text-neutral-500');
    if (bio) {
      const originalText = bio.textContent;
      bio.textContent = '';
      bio.style.opacity = '1';
      
      let i = 0;
      const typing = setInterval(() => {
        if (i < originalText.length) {
          bio.textContent += originalText.charAt(i);
          i++;
        } else {
          clearInterval(typing);
          bio.style.borderRight = 'none';
        }
      }, 50);
      
      bio.style.borderRight = '2px solid #6366f1';
      bio.style.display = 'inline-block';
      bio.style.whiteSpace = 'pre-wrap';
    }
  };
  
  // Initialiser tous les effets
  setTimeout(() => {
    createFloatingElements();
    createCursorEffect();
    animateLetters();
    createScrollReveal();
    create3DEffect();
    createImageDistortion();
    createTypingEffect();
  }, 500);
  
  // Ajouter des classes pour appliquer les animations CSS
  document.querySelectorAll('.card').forEach(card => {
    card.classList.add('glassmorphism');
  });
  
  document.querySelectorAll('.home-profile, .recent-articles, .competences, .projects').forEach(section => {
    section.classList.add('glassmorphism');
  });
});