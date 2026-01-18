---
title: "RateMySlide - Application de critiques de toboggans"
description: "Application web full-stack pour noter et critiquer des toboggans aquatiques, développée avec Symfony 6, API Platform et Vue.js 3. Authentification JWT, rate limiting et qualité de code avec PHPStan et SonarQube."
date: 2024-01-15
draft: false
tags: ["Symfony", "Vue.js", "API Platform", "Docker", "JWT", "PHPStan", "MariaDB"]
categories: ["Projets universitaires"]
series: ["BUT Informatique"]
showHero: true
heroStyle: "basic"
---

{{< lead >}}
**RateMySlide** est une application web de notation de toboggans aquatiques développée en binôme dans le cadre du BUT Informatique (Semestre 5). Un concept humoristique qui cache une architecture technique sérieuse et professionnelle.
{{< /lead >}}


## Contexte du Projet

Ce projet a été réalisé dans le cadre d'une SAÉ du BUT Informatique. L'objectif pédagogique était de maîtriser le développement full-stack avec un framework PHP moderne (Symfony) couplé à un framework JavaScript réactif (Vue.js), tout en intégrant des pratiques DevOps et de qualité de code.

En binôme avec Quentin Grelier, nous avons conçu et développé une application complète respectant les standards de l'industrie.

### Objectifs Techniques

- Concevoir et implémenter une **API REST** respectant les standards
- Développer une **interface utilisateur** moderne et réactive
- Mettre en place un système d'**authentification sécurisé** (JWT)
- Appliquer les **bonnes pratiques** de développement (tests, analyse statique, CI/CD)
- Travailler en **équipe** avec un workflow Git professionnel

## Documentation API

L'API est entièrement documentée via Swagger UI, permettant de tester les endpoints directement depuis le navigateur.

{{< figure src="swagger.png" alt="Documentation Swagger de l'API RateMySlide" caption="Interface Swagger UI pour explorer et tester l'API REST" >}}

## Fonctionnalités Principales

### Gestion des Utilisateurs

- **Inscription sécurisée** : Validation robuste du mot de passe (force, longueur)
- **Authentification JWT** : Tokens d'accès avec système de refresh token
- **Gestion du profil** : Modification des informations personnelles

### Gestion des Toboggans

- **CRUD complet** : Création, lecture, modification, suppression avec système de brouillons/publication
- **Filtres avancés** : Recherche par lieu, type, hauteur, longueur
- **Tri multi-critères** : Organisation personnalisée des résultats
- **Système de favoris** : Sauvegarde des toboggans préférés

### Système de Critiques

- **Publication de critiques** : Avis détaillés sur les toboggans
- **Notation** : Système d'étoiles et commentaires
- **Liaison automatique** : Association avec l'auteur connecté

### Sécurité Applicative

- **Rate limiting** : Protection anti-bruteforce sur l'authentification
- **Voters Symfony** : Contrôle d'accès granulaire aux ressources
- **Filtrage contextuel** : Affichage automatique des données selon le profil utilisateur

## Architecture Technique

### Stack Technologique

| Couche | Technologies |
|--------|--------------|
| **Backend** | Symfony 6.4 LTS, API Platform 4.2, Doctrine ORM 3 |
| **Frontend** | Vue.js 3, Composition API |
| **Base de données** | MariaDB 10.5 |
| **Authentification** | JWT (Lexik JWT + Gesdinet Refresh Token) |
| **Qualité** | PHPStan (level 6), PHP CS Fixer, PHPUnit |
| **DevOps** | Docker, Docker Compose, SonarQube |

### Structure du Projet

```
src/
├── Controller/          # Contrôleurs et traits réutilisables
├── Doctrine/Extension/  # Filtrage automatique des requêtes
├── Entity/              # Entités Doctrine avec traits
├── Enum/                # Énumérations PHP 8.1
├── EventSubscriber/     # Gestion des événements (rate limiting)
├── Repository/          # Couche d'accès aux données
├── Security/Voter/      # Contrôle d'accès granulaire
└── State/               # Processors API Platform
```

## Mon Rôle et Contributions

- **Architecture backend** : Mise en place de la structure API Platform avec les processors personnalisés
- **Système d'authentification** : Implémentation complète du flux JWT avec refresh tokens
- **Sécurité** : Développement du rate limiting et des voters d'autorisation
- **Qualité de code** : Configuration de PHPStan, mise en place des tests automatisés
- **Dockerisation** : Configuration de l'environnement de développement conteneurisé

## Indicateurs de Qualité

Le projet est suivi par SonarQube avec les métriques suivantes :

| Métrique | Statut |
|----------|--------|
| Quality Gate | ✅ Passed |
| Couverture de tests | Mesurée |
| Lignes dupliquées | Contrôlées |
| Hotspots de sécurité | Analysés |

## Compétences Développées

### Développement Backend

- Maîtrise de **Symfony 6** et de son écosystème (Doctrine, Security, Events)
- Conception d'**API REST** avec API Platform
- Utilisation des **fonctionnalités PHP 8.1+** (Enums, Attributes, Traits)

### Sécurité Applicative

- Implémentation de l'**authentification JWT**
- Protection contre les attaques par **force brute**
- Gestion fine des **autorisations** avec le pattern Voter

### DevOps et Qualité

- Conteneurisation avec **Docker**
- Analyse statique avec **PHPStan**
- Intégration continue avec **SonarQube**
- Tests automatisés avec **PHPUnit**

### Travail Collaboratif

- Utilisation de **Git** en équipe (branches, pull requests, code review)
- Documentation technique (README, OpenAPI)

---

Ce projet m'a permis de consolider mes compétences en développement web full-stack tout en découvrant des pratiques professionnelles essentielles : architecture logicielle propre, sécurité applicative, et intégration continue.

{{< keywordList >}}
{{< keyword icon="code" >}} Symfony 6 {{< /keyword >}}
{{< keyword icon="code" >}} Vue.js 3 {{< /keyword >}}
{{< keyword icon="shield" >}} JWT {{< /keyword >}}
{{< keyword icon="server" >}} API Platform {{< /keyword >}}
{{< keyword icon="cube" >}} Docker {{< /keyword >}}
{{< /keywordList >}}
