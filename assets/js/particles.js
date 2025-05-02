// Particules désactivées pour améliorer la performance
document.addEventListener('DOMContentLoaded', function() {
  console.log("Particles disabled for performance");
  
  // Version très légère avec seulement 10 particules statiques (pas d'animation)
  const addLightParticles = () => {
    // Créer un conteneur pour les particules
    const container = document.createElement('div');
    container.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
    `;
    
    // Ajouter seulement 5 particules statiques
    for (let i = 0; i < 5; i++) {
      const dot = document.createElement('div');
      dot.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background-color: #6366f1;
        opacity: 0.2;
        border-radius: 50%;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
      `;
      container.appendChild(dot);
    }
    
    document.body.appendChild(container);
  };
  
  // Ajout optionnel de particules très légères
  // addLightParticles();
});