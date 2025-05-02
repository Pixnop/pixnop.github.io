// Script pour forcer l'application des animations
document.addEventListener('DOMContentLoaded', function() {
  
  // Fonction pour attendre le chargement complet
  function waitForPageLoaded() {
    return new Promise(resolve => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', resolve);
      }
    });
  }
  
  // Appliquer les styles avec force
  async function enforceAnimations() {
    await waitForPageLoaded();
    
    console.log("Enforcing animations...");
    
    // Forcer l'animation du titre principal
    const homeTitle = document.querySelector('.home-profile h1');
    if (homeTitle) {
      homeTitle.style.cssText = `
        background: linear-gradient(90deg, #ff3d00, #ffb300, #00c853, #2196f3, #9c27b0, #f50057) !important;
        background-size: 400% 100% !important;
        -webkit-background-clip: text !important;
        background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        animation: superRainbow 3s linear infinite !important;
        display: inline-block !important;
        font-weight: 800 !important;
        text-transform: uppercase !important;
        letter-spacing: 2px !important;
        font-size: 2.5rem !important;
      `;
      
      // Ajouter le keyframe si nécessaire
      if (!document.querySelector('#rainbow-keyframe')) {
        const style = document.createElement('style');
        style.id = 'rainbow-keyframe';
        style.textContent = `
          @keyframes superRainbow {
            0% { background-position: 0% 50% !important; }
            50% { background-position: 100% 50% !important; }
            100% { background-position: 0% 50% !important; }
          }
        `;
        document.head.appendChild(style);
      }
    }
    
    // Animer l'image de profil
    const profileImage = document.querySelector('.home-profile img');
    if (profileImage) {
      profileImage.style.cssText = `
        border: 5px solid transparent !important;
        background: linear-gradient(white, white) padding-box,
          linear-gradient(45deg, #ff3d00, #ffb300, #00c853, #2196f3, #9c27b0, #f50057) border-box !important;
        border-radius: 50% !important;
        animation: pulse 2s infinite !important;
        box-shadow: 0 0 30px rgba(99, 102, 241, 0.5) !important;
        transform: scale(1.1) !important;
        transition: all 0.5s ease !important;
      `;
      
      // Ajouter le keyframe si nécessaire
      if (!document.querySelector('#pulse-keyframe')) {
        const style = document.createElement('style');
        style.id = 'pulse-keyframe';
        style.textContent = `
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.7) !important; }
            70% { box-shadow: 0 0 0 20px rgba(99, 102, 241, 0) !important; }
            100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0) !important; }
          }
        `;
        document.head.appendChild(style);
      }
      
      // Ajouter l'événement hover
      profileImage.addEventListener('mouseenter', () => {
        profileImage.style.transform = 'scale(1.2) !important';
        profileImage.style.boxShadow = '0 0 40px rgba(139, 92, 246, 0.7) !important';
      });
      
      profileImage.addEventListener('mouseleave', () => {
        profileImage.style.transform = 'scale(1.1) !important';
        profileImage.style.boxShadow = '0 0 30px rgba(99, 102, 241, 0.5) !important';
      });
    }
    
    // Animer toutes les cartes
    document.querySelectorAll('.card').forEach((card, index) => {
      card.style.cssText = `
        transform-style: preserve-3d !important;
        perspective: 1000px !important;
        transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
        border-radius: 20px !important;
        overflow: hidden !important;
        background: rgba(255, 255, 255, 0.1) !important;
        backdrop-filter: blur(15px) !important;
        -webkit-backdrop-filter: blur(15px) !important;
        border: 2px solid rgba(255, 255, 255, 0.1) !important;
        animation: cardEntrance 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) backwards !important;
        animation-delay: ${index * 0.1}s !important;
      `;
      
      // Ajouter le keyframe si nécessaire
      if (!document.querySelector('#card-entrance-keyframe')) {
        const style = document.createElement('style');
        style.id = 'card-entrance-keyframe';
        style.textContent = `
          @keyframes cardEntrance {
            0% {
              opacity: 0;
              transform: translateY(60px) scale(0.9);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `;
        document.head.appendChild(style);
      }
      
      // Événement hover pour chaque carte
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) rotateX(5deg) rotateY(5deg) !important';
        card.style.boxShadow = '0 20px 40px rgba(99, 102, 241, 0.3) !important';
        card.style.borderColor = 'rgba(139, 92, 246, 0.5) !important';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0) !important';
        card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1) !important';
        card.style.borderColor = 'rgba(255, 255, 255, 0.1) !important';
      });
    });
    
    // Animer les titres h2 et h3
    document.querySelectorAll('h2, h3').forEach(title => {
      title.style.cssText = `
        background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899) !important;
        -webkit-background-clip: text !important;
        background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-size: 200% auto !important;
        animation: gradientText 3s ease infinite !important;
        display: inline-block !important;
        font-weight: 700 !important;
        letter-spacing: 1px !important;
      `;
    });
    
    // Appliquer un fond dégradé animé au body
    document.body.style.cssText = `
      background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab) !important;
      background-size: 400% 400% !important;
      animation: gradientBG 15s ease infinite !important;
    `;
    
    if (!document.querySelector('#bg-gradient-keyframe')) {
      const style = document.createElement('style');
      style.id = 'bg-gradient-keyframe';
      style.textContent = `
        @keyframes gradientBG {
          0% { background-position: 0% 50% !important; }
          50% { background-position: 100% 50% !important; }
          100% { background-position: 0% 50% !important; }
        }
      `;
      document.head.appendChild(style);
    }
    
    // Si le site est en mode sombre, utiliser un dégradé différent
    if (document.documentElement.classList.contains('dark')) {
      document.body.style.cssText = `
        background: linear-gradient(-45deg, #121212, #1e1e1e, #2d3748, #1a2030) !important;
        background-size: 400% 400% !important;
        animation: gradientBG 15s ease infinite !important;
      `;
    }
    
    // Créer un conteneur pour les éléments flottants
    const floatingContainer = document.createElement('div');
    floatingContainer.id = 'floating-elements-container';
    floatingContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
      overflow: hidden;
    `;
    
    document.body.prepend(floatingContainer);
    
    // Créer des éléments flottants
    const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981'];
    const shapes = ['circle', 'square', 'triangle'];
    
    for (let i = 0; i < 20; i++) {
      const element = document.createElement('div');
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const size = Math.random() * 60 + 20;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      element.style.cssText = `
        position: absolute;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        width: ${size}px;
        height: ${size}px;
        background-color: ${color};
        opacity: ${Math.random() * 0.15 + 0.05};
        border-radius: ${shape === 'circle' ? '50%' : (shape === 'square' ? '0' : '0 50% 50% 50%')};
        transform: rotate(${Math.random() * 360}deg);
        animation: float ${Math.random() * 10 + 10}s ease-in-out infinite;
        animation-delay: ${Math.random() * 5}s;
        filter: blur(${Math.random() * 5 + 2}px);
      `;
      
      floatingContainer.appendChild(element);
    }
    
    // Ajouter le keyframe pour l'animation flottante
    if (!document.querySelector('#float-keyframe')) {
      const style = document.createElement('style');
      style.id = 'float-keyframe';
      style.textContent = `
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
    }
    
    // Styles pour le menu
    const mainMenu = document.querySelector('.main-menu');
    if (mainMenu) {
      mainMenu.style.cssText = `
        background: rgba(255, 255, 255, 0.1) !important;
        backdrop-filter: blur(20px) !important;
        -webkit-backdrop-filter: blur(20px) !important;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
        border-radius: 0 0 20px 20px !important;
        border-bottom: 2px solid rgba(139, 92, 246, 0.3) !important;
        transition: all 0.5s ease !important;
      `;
      
      // Animer les liens du menu
      mainMenu.querySelectorAll('nav.items-center a p').forEach(menuItem => {
        menuItem.style.cssText = `
          position: relative !important;
          font-weight: 600 !important;
          letter-spacing: 1px !important;
          color: #6366f1 !important;
          transition: all 0.3s ease !important;
        `;
        
        // Créer l'élément after pour l'animation
        const afterStyle = document.createElement('style');
        afterStyle.textContent = `
          .main-menu nav.items-center a p::after {
            content: '' !important;
            position: absolute !important;
            bottom: -5px !important;
            left: 0 !important;
            width: 0 !important;
            height: 3px !important;
            background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899) !important;
            transition: width 0.3s ease !important;
            border-radius: 10px !important;
          }
          
          .main-menu nav.items-center a:hover p {
            transform: translateY(-5px) !important;
            color: #8b5cf6 !important;
          }
          
          .main-menu nav.items-center a:hover p::after {
            width: 100% !important;
          }
        `;
        document.head.appendChild(afterStyle);
      });
    }
    
    // Ajouter un effet de suivi du curseur
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
  }
  
  // Exécuter le script après un léger délai pour laisser les autres scripts se charger
  setTimeout(enforceAnimations, 500);
  
  // Réappliquer les animations lors du changement de page
  if ('onpopstate' in window) {
    window.addEventListener('popstate', () => {
      setTimeout(enforceAnimations, 500);
    });
  }
});