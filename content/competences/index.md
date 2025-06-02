---
title: "Compétences"
description: "Technologies modernes et expertise full-stack"
showDate: false
showAuthor: false
showReadingTime: false
showTableOfContents: true
---

{{< lead >}}
Passionné par les technologies de pointe, je crée des solutions performantes et élégantes qui font la différence.
{{< /lead >}}

<style>
.skill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.skill-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.skill-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, transparent 0%, rgba(132, 204, 22, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.skill-card:hover::before {
  opacity: 1;
}

.progress-bar {
  background: rgba(0,0,0,0.1);
  border-radius: 10px;
  height: 8px;
  overflow: hidden;
  margin-top: 1rem;
}

.progress-fill {
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(90deg, #84cc16 0%, #10b981 100%);
  transition: width 1s ease-out;
  position: relative;
  overflow: hidden;
}

.progress-fill::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 100%
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.tech-pill {
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  background: rgba(132, 204, 22, 0.1);
  border: 1px solid rgba(132, 204, 22, 0.3);
  border-radius: 25px;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  cursor: default;
}

.tech-pill:hover {
  background: rgba(132, 204, 22, 0.2);
  border-color: rgba(132, 204, 22, 0.5);
  transform: translateY(-2px);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.feature-box {
  text-align: center;
  padding: 2rem;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(132, 204, 22, 0.05) 0%, transparent 100%);
  border: 1px solid rgba(132, 204, 22, 0.2);
  transition: all 0.3s ease;
}

.feature-box:hover {
  border-color: rgba(132, 204, 22, 0.5);
  background: linear-gradient(135deg, rgba(132, 204, 22, 0.1) 0%, transparent 100%);
}

.icon-large {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.skill-description {
  font-size: 0.875rem;
  margin-top: 0.5rem;
  color: #374151; /* Gris plus foncé pour meilleur contraste */
}

.card-description {
  color: #1f2937; /* Gris très foncé pour excellent contraste */
  margin-bottom: 1.5rem;
}

.feature-description {
  font-size: 0.875rem;
  color: #374151;
}

@media (prefers-color-scheme: dark) {
  .skill-card {
    background: linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%);
    border-color: rgba(255,255,255,0.1);
  }
  
  .progress-bar {
    background: rgba(255,255,255,0.1);
  }
  
  .tech-pill {
    background: rgba(132, 204, 22, 0.2);
    border-color: rgba(132, 204, 22, 0.4);
  }
  
  .tech-pill:hover {
    background: rgba(132, 204, 22, 0.3);
    border-color: rgba(132, 204, 22, 0.6);
  }
  
  .skill-description {
    color: #d1d5db; /* Gris clair en mode sombre */
  }
  
  .card-description {
    color: #e5e7eb; /* Gris très clair en mode sombre */
  }
  
  .feature-description {
    color: #d1d5db;
  }
}
</style>

## 🚀 Expertise Technique

<div class="skill-grid">
  <div class="skill-card">
    <h3 style="font-size: 1.5rem; margin-bottom: 1rem; background: linear-gradient(90deg, #84cc16 0%, #10b981 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
      Backend Development
    </h3>
    <p class="card-description">
      Architecture de microservices scalables et APIs haute performance
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
      <span class="tech-pill">Go</span>
      <span class="tech-pill">Rust</span>
      <span class="tech-pill">Node.js</span>
      <span class="tech-pill">gRPC</span>
      <span class="tech-pill">GraphQL</span>
    </div>
  </div>

  <div class="skill-card">
    <h3 style="font-size: 1.5rem; margin-bottom: 1rem; background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
      Frontend Development
    </h3>
    <p class="card-description">
      Interfaces modernes et expériences utilisateur exceptionnelles
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
      <span class="tech-pill">React</span>
      <span class="tech-pill">Vue 3</span>
      <span class="tech-pill">TypeScript</span>
      <span class="tech-pill">Next.js</span>
      <span class="tech-pill">Tailwind</span>
    </div>
  </div>

  <div class="skill-card">
    <h3 style="font-size: 1.5rem; margin-bottom: 1rem; background: linear-gradient(90deg, #f59e0b 0%, #ef4444 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
      DevOps & Cloud
    </h3>
    <p class="card-description">
      Infrastructure moderne et déploiement continu
    </p>
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
      <span class="tech-pill">Docker</span>
      <span class="tech-pill">Kubernetes</span>
      <span class="tech-pill">AWS</span>
      <span class="tech-pill">CI/CD</span>
      <span class="tech-pill">Terraform</span>
    </div>
  </div>
</div>

## 💻 Langages & Maîtrise

<div style="margin: 3rem 0;">
  <div style="margin-bottom: 2rem;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
      <h4 style="font-size: 1.125rem; font-weight: 600;">Go</h4>
      <span style="color: #10b981; font-weight: 500;">95%</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 95%;"></div>
    </div>
    <p class="skill-description">
      Microservices • Concurrence • APIs REST/gRPC • Performance
    </p>
  </div>

  <div style="margin-bottom: 2rem;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
      <h4 style="font-size: 1.125rem; font-weight: 600;">JavaScript/TypeScript</h4>
      <span style="color: #10b981; font-weight: 500;">90%</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 90%;"></div>
    </div>
    <p class="skill-description">
      React • Vue • Node.js • Full-Stack • Modern ES6+
    </p>
  </div>

  <div style="margin-bottom: 2rem;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
      <h4 style="font-size: 1.125rem; font-weight: 600;">Rust</h4>
      <span style="color: #f59e0b; font-weight: 500;">85%</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 85%; background: linear-gradient(90deg, #f59e0b 0%, #ef4444 100%);"></div>
    </div>
    <p class="skill-description">
      Systems Programming • WebAssembly • Memory Safety • Async
    </p>
  </div>

  <div style="margin-bottom: 2rem;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
      <h4 style="font-size: 1.125rem; font-weight: 600;">Python</h4>
      <span style="color: #3b82f6; font-weight: 500;">75%</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 75%; background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);"></div>
    </div>
    <p class="skill-description">
      Scripts • Automatisation • APIs • Data Processing
    </p>
  </div>
</div>

## 🛠️ Stack Technique Complète

<div class="feature-grid">
  <div class="feature-box">
    <span class="icon-large">⚛️</span>
    <h4 style="margin-bottom: 0.5rem;">React Ecosystem</h4>
    <p class="feature-description">
      Next.js, Redux, React Query, Styled Components
    </p>
  </div>

  <div class="feature-box">
    <span class="icon-large">🐳</span>
    <h4 style="margin-bottom: 0.5rem;">Containerisation</h4>
    <p class="feature-description">
      Docker, Kubernetes, Docker Compose, Helm
    </p>
  </div>

  <div class="feature-box">
    <span class="icon-large">🗄️</span>
    <h4 style="margin-bottom: 0.5rem;">Bases de données</h4>
    <p class="feature-description">
      PostgreSQL, MongoDB, Redis, Elasticsearch
    </p>
  </div>

  <div class="feature-box">
    <span class="icon-large">🔧</span>
    <h4 style="margin-bottom: 0.5rem;">Outils Dev</h4>
    <p class="feature-description">
      Git, VS Code, Postman, Figma
    </p>
  </div>

  <div class="feature-box">
    <span class="icon-large">📊</span>
    <h4 style="margin-bottom: 0.5rem;">Monitoring</h4>
    <p class="feature-description">
      Prometheus, Grafana, ELK Stack, Sentry
    </p>
  </div>

  <div class="feature-box">
    <span class="icon-large">🔐</span>
    <h4 style="margin-bottom: 0.5rem;">Sécurité</h4>
    <p class="feature-description">
      OAuth2, JWT, SSL/TLS, OWASP
    </p>
  </div>
</div>

## 🌟 Ce qui me distingue

{{< timeline >}}
{{< timelineItem icon="rocket" header="Innovation constante" badge="Mindset" >}}
Je reste à l'affût des dernières technologies et n'hésite pas à explorer de nouvelles approches pour résoudre des problèmes complexes.
{{< /timelineItem >}}

{{< timelineItem icon="code" header="Code de qualité" badge="Standards" >}}
Tests automatisés, documentation claire, architecture propre - je livre du code maintenable et évolutif.
{{< /timelineItem >}}

{{< timelineItem icon="users" header="Collaboration efficace" badge="Team" >}}
Communication transparente, partage de connaissances et mentoring font partie intégrante de mon approche professionnelle.
{{< /timelineItem >}}
{{< /timeline >}}

## 🚁 Au-delà du code

<div style="background: linear-gradient(135deg, rgba(132, 204, 22, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%); border-radius: 20px; padding: 2rem; margin: 2rem 0;">
  <h3 style="margin-bottom: 1rem;">Pilote FPV & Maker</h3>
  <p class="card-description">
    Passionné de drones FPV depuis 2019, je conçois et pilote mes propres appareils. Cette passion m'a enseigné la précision, la patience et l'importance des détails - des qualités que j'applique dans chaque projet de développement.
  </p>
  <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1.5rem;">
    <div style="flex: 1; min-width: 200px;">
      <h4 style="font-size: 1rem; margin-bottom: 0.5rem;">🛠️ Construction</h4>
      <p class="feature-description">Assemblage de composants, soudure, configuration</p>
    </div>
    <div style="flex: 1; min-width: 200px;">
      <h4 style="font-size: 1rem; margin-bottom: 0.5rem;">🎮 Pilotage</h4>
      <p class="feature-description">Vol en immersion, freestyle, cinématique</p>
    </div>
    <div style="flex: 1; min-width: 200px;">
      <h4 style="font-size: 1rem; margin-bottom: 0.5rem;">🎬 Création</h4>
      <p class="feature-description">Montage vidéo, post-production, storytelling</p>
    </div>
  </div>
</div>

---

<div style="text-align: center; margin-top: 4rem;">
  <p style="font-size: 1.125rem; color: #ffffff; margin-bottom: 2rem; font-weight: 500; text-shadow: 0 1px 2px rgba(0,0,0,0.2);">
    Prêt à donner vie à vos idées ?
  </p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center">
    {{< button href="/projets" >}}
    Découvrir mes projets
    {{< /button >}}
    {{< button href="/contact" >}}
    Discutons ensemble
    {{< /button >}}
  </div>
</div>