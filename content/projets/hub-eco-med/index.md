---
title: "Hub Applicatif ECO-MED"
description: "Écosystème applicatif complet pour optimiser les processus métiers d'un bureau d'études environnementales"
date: 2024-06-28
draft: false
tags: ["JavaScript", "Node.js", "MongoDB", "Express", "API REST", "Microsoft Graph", "Leaflet", "Chart.js"]
categories: ["Projets professionnels"]
series: ["ECO-MED"]
showHero: true
heroStyle: "basic"
---

# Hub Applicatif ECO-MED

Conception et développement d'un écosystème applicatif complet pour digitaliser et optimiser les processus métiers d'ECO-MED, bureau d'études spécialisé en expertise environnementale.

## 🌍 Contexte

Stage de 12 semaines (avril - juin 2024) au sein du pôle R&D d'ECO-MED, une PME de 100 collaborateurs spécialisée dans l'ingénierie écologique. Mission : accompagner la transformation numérique de l'entreprise en développant des outils métiers adaptés aux besoins spécifiques des écologues et chefs de projet.

## 🎯 Objectifs du projet

- **Centraliser** l'accès aux différents outils métiers via un point d'entrée unique
- **Automatiser** les tâches chronophages (génération de rapports, extraction de données...)
- **Optimiser** les processus internes (covoiturage, planification terrain...)
- **Fiabiliser** les données environnementales collectées sur le terrain
- **Faciliter** l'adoption des outils numériques par les équipes

## 🚀 Applications développées

### 1. Hub Applicatif Central
Point d'entrée unique vers l'ensemble des outils métiers :
- Interface web responsive et intuitive
- Navigation simplifiée entre les différentes applications
- Section FAQ intégrée pour l'accompagnement utilisateur
- Formulaire de contact pour les retours et suggestions

### 2. ECO-voiturage
Application d'optimisation des déplacements terrain :
- Visualisation cartographique des trajets planifiés
- Regroupement intelligent des intervenants par zone
- Intégration avec l'ERP pour récupérer les plannings
- Filtres par mois, profil et intervenant

### 3. GOAT (Générateur d'Observations Atmosphériques en Tableaux)
Outil de génération automatique de tableaux météorologiques :
- Sélection intuitive des zones d'étude sur carte interactive
- Récupération des données météo via API Open-Meteo
- Export des tableaux formatés pour les rapports d'étude
- Données : température, vent, précipitations, hygrométrie

### 4. FroggyFactors
Application d'aide à la décision pour les inventaires amphibiens :
- Analyse des précipitations sur période personnalisable
- Graphiques interactifs des données pluviométriques
- Comparaison avec les données historiques (5 ans)
- Identification des périodes optimales d'intervention

### 5. FeuForêt
Module de visualisation des risques incendie :
- Carte interactive des départements français
- Intégration des données préfectorales en temps réel
- Légende adaptée aux besoins spécifiques d'ECO-MED
- Accès rapide aux informations critiques

## 🛠 Architecture technique

### Stack technologique
- **Frontend** : JavaScript vanilla, HTML5, CSS3
- **Backend** : Node.js, Express.js
- **Base de données** : MongoDB
- **Cartographie** : Leaflet.js
- **Graphiques** : Chart.js
- **APIs** : Microsoft Graph, Open-Meteo
- **Infrastructure** : Serveur dédié Linux Debian

### Choix d'architecture
- Architecture client-serveur classique
- API REST pour la communication
- Approche modulaire et évolutive
- Respect des principes SOLID
- Sécurité selon les recommandations OWASP

## 🔧 Défis techniques relevés

### 1. Interfaçage avec l'ERP existant
- **Problème** : Absence d'API métier pour récupérer les plannings
- **Solution** : Utilisation de l'API Microsoft Graph pour extraire les données des mails d'export Excel
- **Résultat** : Automatisation complète du processus sans intervention manuelle

### 2. Gestion de la qualité des données
- **Problème** : Doublons et données incorrectes dans les exports
- **Solution** : Algorithme de dédoublonnage intelligent basé sur des hash
- **Résultat** : Fiabilisation à 100% des données traitées

### 3. Performance et scalabilité
- **Problème** : Ralentissements lors de la montée en charge
- **Solution** : Optimisation des requêtes MongoDB avec indexation
- **Résultat** : Temps de réponse divisé par 5

## 📊 Résultats et impact

### Gains quantitatifs
- ⏱️ **80%** de réduction du temps de génération des rapports météo
- 🚗 **30%** d'optimisation des trajets grâce au covoiturage
- 📈 **100%** d'automatisation des extractions de données planning
- 👥 **95%** de taux d'adoption par les utilisateurs

### Retours utilisateurs
- "L'interface est intuitive et nous fait gagner un temps précieux" - *Chef de projet*
- "Les outils météo sont devenus indispensables pour nos inventaires" - *Écologue terrain*
- "Le hub centralise tout, c'est exactement ce qu'il nous fallait" - *Responsable d'agence*

## 🎓 Compétences développées

### Techniques
- Développement full-stack JavaScript
- Conception d'architectures modulaires
- Intégration d'APIs tierces
- Optimisation de performances
- Gestion de données géospatiales

### Méthodologiques
- Gestion de projet agile
- Analyse et formalisation des besoins
- Documentation technique
- Tests et validation
- Formation utilisateur

### Transversales
- Communication avec des profils non-techniques
- Force de proposition et innovation
- Adaptation aux contraintes métiers
- Travail en autonomie
- Veille technologique

## 🔮 Perspectives d'évolution

L'écosystème applicatif développé constitue une base solide pour la transformation numérique d'ECO-MED. Les perspectives incluent :
- Intégration de nouveaux modules (gestion documentaire, IA pour reconnaissance d'espèces...)
- Migration vers une architecture microservices
- Développement d'applications mobiles natives
- Mise en place d'un système de Business Intelligence

## 💻 Exemple de code

Voici un exemple de route API REST développée pour l'application ECO-voiturage :

```javascript
/**
 * Route pour récupérer les données des terrains.
 * Cette API agrège les données de planification et les formate
 * pour l'affichage cartographique
 */
app.get('/terrains', async (req, res) => {
    try {
        const { terrains, dateMiseAJour } = dataProcessor.getProcessedData();
        
        const terrainsData = Array.from(terrains.values()).map(terrain => ({
            affaire: {
                code: terrain.affaire.code,
                nom: terrain.affaire.nom,
                commune: {
                    ville: terrain.affaire.commune.ville,
                    codePostal: terrain.affaire.commune.codePostal,
                    latitude: terrain.affaire.commune.latitude,
                    longitude: terrain.affaire.commune.longitude
                }
            },
            personne: {
                nom: terrain.personne.nom,
                prenom: terrain.personne.prenom,
                profils: terrain.personne.profils,
                agence: terrain.personne.agence,
            },
            quantiteParMois: terrain.quantiteParMois,
            estNuit: terrain.estNuit,
            ligneAffaire: terrain.ligneAffaire,
        }));

        res.json({
            terrains: terrainsData,
            dateMiseAJour: dateMiseAJour.toLocaleString('fr-FR', { 
                dateStyle: 'long', 
                timeStyle: 'short' 
            })
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des terrains :', error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
});
```

## 💡 Innovation et valeur ajoutée

Ce projet illustre comment la digitalisation peut transformer les métiers de l'environnement. En automatisant les tâches répétitives et en facilitant l'accès à l'information, les outils développés permettent aux écologues de se concentrer sur leur cœur de métier : la protection de la biodiversité.

> "Ce stage m'a permis de mettre mes compétences techniques au service d'une cause qui me tient à cœur : la préservation de l'environnement. Voir l'impact concret de mon travail sur le quotidien des équipes a été extrêmement gratifiant." - *Léon Fievet*

## 📸 Captures d'écran

*Les captures d'écran des différentes applications (Hub principal, ECO-voiturage, GOAT, FroggyFactors) peuvent être ajoutées ici pour illustrer l'interface et les fonctionnalités développées.*

## 📄 Documentation

Pour plus de détails techniques et méthodologiques, le rapport de stage complet est disponible sur demande.

---

*Projet réalisé dans le cadre d'un stage de 2ᵉ année de BUT Informatique, parcours IAMSI (Ingénierie des Applications Métiers et Services Informatiques)*