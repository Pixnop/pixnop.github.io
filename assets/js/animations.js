// Animations et effets modernes pour le portfolio

document.addEventListener('DOMContentLoaded', function() {
  // Animation d'entrée pour les sections
  const animateSections = () => {
    const sections = document.querySelectorAll('section, article, .card');
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < windowHeight * 0.9) {
        section.classList.add('animated');
      }
    });
  };
  
  // Ajouter une classe pour l'animation du menu au scroll
  const animateHeader = () => {
    const header = document.querySelector('.main-menu');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
  // Initialiser les animations
  window.addEventListener('scroll', () => {
    animateSections();
    animateHeader();
  });
  
  // Déclencher l'animation initiale
  animateSections();
  
  // Animation d'entrée pour le titre principal
  setTimeout(() => {
    const mainTitle = document.querySelector('.home-profile h1');
    if (mainTitle) {
      mainTitle.classList.add('animated');
    }
  }, 300);
  
  // Ajouter une classe aux éléments pour l'animation de survol
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('hover-effect');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('hover-effect');
    });
  });

  // Animation de frappe pour le titre
  if (typeof TypeIt !== 'undefined') {
    try {
      new TypeIt("#typing-title", {
        speed: 50,
        loop: false,
        waitUntilVisible: true
      }).go();
    } catch (e) {
      console.log("TypeIt not available");
    }
  }

  // Ajouter un effet de parallax sur le défilement
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Appliquer un effet parallax aux éléments d'arrière-plan
    document.querySelectorAll('.parallax-bg').forEach(bg => {
      const speed = bg.getAttribute('data-speed') || 0.5;
      bg.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });

  // Animer progressivement les compétences
  const animateSkills = () => {
    const skills = document.querySelectorAll('.skill-progress');
    skills.forEach(skill => {
      const skillTop = skill.getBoundingClientRect().top;
      if (skillTop < window.innerHeight * 0.8) {
        const percent = skill.getAttribute('data-percent');
        skill.style.width = percent + '%';
      }
    });
  };
  
  window.addEventListener('scroll', animateSkills);
  animateSkills(); // Initialiser
});

// Fonction pour ajouter la classe animated aux éléments lors de leur apparition
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
  });
};

// Initialiser l'observateur d'intersection si pris en charge
if ('IntersectionObserver' in window) {
  document.addEventListener('DOMContentLoaded', observeElements);
}