---
title: "Curriculum Vitae"
description: "CV de Léon Fievet - Développeur Full-Stack"
showDate: false
showAuthor: false
showReadingTime: false
layout: "simple"
---

<style>
.cv-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.cv-header {
  text-align: center;
  margin-bottom: 3rem;
}

.cv-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.cv-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #84cc16 0%, #10b981 100%);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cv-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.cv-button-secondary {
  background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
}

.cv-preview {
  width: 100%;
  height: 800px;
  border: none;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  background: white;
}

.cv-info {
  background: linear-gradient(135deg, rgba(132, 204, 22, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.cv-icon {
  font-size: 1.25rem;
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .cv-preview {
    height: 600px;
  }
  
  .cv-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .cv-button {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
</style>

<div class="cv-container">
  <div class="cv-header">
    <h1>Mon Curriculum Vitae</h1>
    <p style="font-size: 1.125rem; color: #ffffff; font-weight: 500; text-shadow: 0 1px 2px rgba(0,0,0,0.2);">
      Développeur Full-Stack passionné, spécialisé en Go, Rust et technologies web modernes
    </p>
  </div>

  <div class="cv-info">
    <p>
      <span class="cv-icon">📄</span>
      <strong>Format :</strong> PDF | <strong>Taille :</strong> ~200 KB | <strong>Dernière mise à jour :</strong> Mai 2025
    </p>
  </div>

  <div class="cv-actions">
    <a href="/cv/leon-fievet-cv.pdf" class="cv-button" download>
      <span class="cv-icon">⬇️</span>
      Télécharger le CV
    </a>
    <a href="/cv/leon-fievet-cv.pdf" class="cv-button cv-button-secondary" target="_blank">
      <span class="cv-icon">🔍</span>
      Ouvrir dans un nouvel onglet
    </a>
    <a href="#preview" class="cv-button cv-button-secondary">
      <span class="cv-icon">👁️</span>
      Voir l'aperçu ci-dessous
    </a>
  </div>

  <div id="preview">
    <h2 style="text-align: center; margin-bottom: 1.5rem;">Aperçu du CV</h2>
    <iframe 
      src="/cv/leon-fievet-cv.pdf" 
      class="cv-preview"
      title="CV de Léon Fievet">
    </iframe>
  </div>
</div>

{{< alert icon="info" >}}
**Problème d'affichage ?** Si le PDF ne s'affiche pas correctement, vous pouvez le [télécharger directement](/cv/leon-fievet-cv.pdf) ou l'[ouvrir dans un nouvel onglet](/cv/leon-fievet-cv.pdf).
{{< /alert >}}