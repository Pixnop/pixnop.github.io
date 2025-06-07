---
title: "ECO-voiturage - Optimisation des Déplacements Terrain"
description: "Application de covoiturage intelligent pour optimiser les déplacements des équipes ECO-MED sur les sites d'étude"
date: 2024-06-28
draft: false
tags: ["JavaScript", "Node.js", "Express", "MongoDB", "Leaflet", "Microsoft Graph", "Cartographie"]
categories: ["Projets professionnels"]
series: ["ECO-MED"]
showHero: true
heroStyle: "basic"
---

# ECO-voiturage - Optimisation des Déplacements Terrain

Application de covoiturage intelligent développée pour optimiser les déplacements des collaborateurs ECO-MED vers les sites d'intervention, réduire l'empreinte carbone et favoriser la collaboration entre équipes.

## 🎯 Objectif

ECO-voiturage vise à optimiser l'organisation des déplacements professionnels en identifiant automatiquement les opportunités de covoiturage entre collaborateurs se rendant sur des sites proches, contribuant ainsi aux objectifs de développement durable d'ECO-MED.

## 🚗 Problématique résolue

Avant ECO-voiturage, l'organisation des déplacements présentait plusieurs inefficacités :
- **Trajets individuels** vers des sites géographiquement proches
- **Méconnaissance** des plannings d'intervention des collègues
- **Coordination manuelle** chronophage et peu fiable
- **Impact environnemental** élevé des déplacements professionnels
- **Coûts de transport** non optimisés

## ⚡ Fonctionnalités principales

### Visualisation cartographique intelligente
- **Carte interactive** affichant tous les sites d'intervention planifiés
- **Regroupement automatique** des interventions par zone géographique
- **Calcul de proximité** entre sites d'étude
- **Affichage différencié** selon les profils d'intervenants

### Intégration ERP automatisée
- **Récupération automatique** des plannings depuis SX Everwin
- **Traitement intelligent** des exports Excel via Microsoft Graph API
- **Synchronisation quotidienne** des données de planification
- **Gestion des modifications** de planning en temps réel

### Système de filtrage avancé
- **Filtres temporels** (jour, semaine, mois)
- **Filtres par profil** métier (botaniste, ornithologue, etc.)
- **Filtres par intervenant** spécifique
- **Filtres par agence** d'appartenance

### Optimisation des trajets
- **Identification automatique** des opportunités de covoiturage
- **Calcul des distances** entre points d'intervention
- **Suggestions de regroupement** selon les créneaux horaires
- **Estimation des gains** économiques et environnementaux

## 🖼️ Interface utilisateur

### Vue cartographique principale
![Carte des terrains d'intervention](Carte%20des%20terrains.webp)

L'interface principale présente une carte interactive où chaque point représente un site d'intervention. Les codes couleur permettent de distinguer rapidement :
- Les différents profils d'intervenants
- Les périodes d'intervention
- Les agences d'appartenance
- Les opportunités de regroupement

### Panneau de filtrage
![Filtres de la carte des terrains](filtres%20Carte%20des%20terrains.webp)

Le système de filtrage permet d'affiner l'affichage selon plusieurs critères :
- **Période** : sélection de la plage temporelle
- **Profils** : type d'expertise requise sur le terrain
- **Intervenants** : collaborateurs spécifiques
- **Statut** : intervention de jour/nuit, durée, etc.

## 🛠️ Architecture technique

### Stack technologique
- **Frontend** : JavaScript vanilla, HTML5, CSS3
- **Backend** : Node.js, Express.js
- **Base de données** : MongoDB
- **Cartographie** : Leaflet.js avec tuiles OpenStreetMap
- **Intégration** : Microsoft Graph API
- **Authentification** : JWT intégré avec Azure AD

### Défis techniques surmontés

#### Intégration ERP complexe
Le principal défi était l'absence d'API directe pour récupérer les plannings depuis SX Everwin. La solution développée utilise Microsoft Graph API pour extraire automatiquement les emails d'export contenant les fichiers Excel de planning, puis traite intelligemment ces données.

#### Algorithme de dédoublonnage
Gestion des doublons dans les exports ERP avec un algorithme intelligent basé sur des critères métier spécifiques (projet, date, intervenant, site) pour conserver uniquement les enregistrements les plus récents.

### Performance et optimisation
- **Mise en cache** des données cartographiques
- **Chargement paresseux** des détails d'intervention
- **Optimisation des requêtes** MongoDB avec indexes
- **Compression** des réponses API

## 📊 Résultats et impact

### Gains environnementaux
- 🌍 **30%** de réduction des kilomètres parcourus
- 🚗 **25%** de diminution du nombre de véhicules utilisés
- 💨 **Réduction significative** des émissions CO₂
- 🌱 **Contribution** aux objectifs RSE d'ECO-MED

### Gains opérationnels
- ⏱️ **50%** de réduction du temps de coordination
- 💰 **20%** d'économies sur les frais de déplacement
- 🤝 **Amélioration** de la collaboration inter-équipes
- 📊 **Visibilité** accrue sur la charge terrain

### Adoption utilisateur
- 👥 **85%** des collaborateurs utilisent l'application
- ⭐ **4.7/5** de satisfaction utilisateur moyenne
- 📈 **Augmentation continue** du nombre de covoiturages organisés

## 🔄 Processus de traitement des données

### Pipeline de données automatisé
1. **Extraction quotidienne** des emails d'export ERP
2. **Parsing intelligent** des fichiers Excel attachés
3. **Nettoyage et validation** des données importées
4. **Géocodage** des adresses de sites d'intervention
5. **Calcul des distances** et détection des opportunités
6. **Mise à jour** de la carte interactive

### Gestion des erreurs
- **Validation automatique** de la cohérence des données
- **Signalement** des anomalies aux administrateurs
- **Récupération gracieuse** en cas d'échec de traitement
- **Logs détaillés** pour le diagnostic et la maintenance


## 💡 Innovation et valeur ajoutée

ECO-voiturage illustre comment l'innovation technique peut servir les enjeux environnementaux. En automatisant la détection des opportunités de covoiturage, l'application transforme une contrainte logistique en levier de performance durable.

### Impact sur l'organisation
- **Culture collaborative** renforcée
- **Sensibilisation** aux enjeux environnementaux
- **Optimisation** des ressources internes
- **Image** d'entreprise responsable

## 🎓 Compétences développées

### Techniques
- Intégration de systèmes hétérogènes
- Traitement de données géospatiales
- Algorithmes d'optimisation de trajets
- APIs Microsoft Graph
- Cartographie web interactive

### Méthodologiques
- Analyse des besoins utilisateurs terrain
- Conception d'interfaces orientées mobilité
- Optimisation de l'expérience utilisateur
- Mesure d'impact environnemental

---

*ECO-voiturage démontre qu'innovation technique et responsabilité environnementale peuvent converger pour créer des solutions à forte valeur ajoutée, tant sur le plan opérationnel qu'en termes d'impact positif sur l'environnement.*