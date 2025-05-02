document.addEventListener("DOMContentLoaded", function() {
  // Création d'un élément de débogage pour vérifier l'état du flou
  const debugElement = document.createElement("div");
  debugElement.id = "blur-debug";
  debugElement.style.position = "fixed";
  debugElement.style.bottom = "10px";
  debugElement.style.right = "10px";
  debugElement.style.background = "rgba(0,0,0,0.7)";
  debugElement.style.color = "white";
  debugElement.style.padding = "5px 10px";
  debugElement.style.borderRadius = "5px";
  debugElement.style.fontSize = "12px";
  debugElement.style.zIndex = "9999";
  document.body.appendChild(debugElement);
  
  // Fonction pour mettre à jour l'élément de débogage
  function updateDebug() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const hasClass = document.body.classList.contains("scrolled");
    const blurValue = getComputedStyle(document.documentElement).getPropertyValue("--scroll-blur");
    debugElement.innerHTML = `Scroll: ${scrollPosition}px<br>Class: ${hasClass}<br>Blur: ${blurValue}`;
  }
  
  // Mettre à jour toutes les 100ms
  setInterval(updateDebug, 100);
  
  // Écouter aussi l'événement de défilement
  window.addEventListener("scroll", updateDebug);
});