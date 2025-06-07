---
title: "BlackArsenal - Site E-commerce PHP MVC"
description: "Projet universitaire d'un site de vente en ligne d'armes fictives de jeux vidéo, développé en PHP avec une architecture MVC propre et une base de données MySQL."
date: 2024-03-15
draft: false
tags: ["PHP", "MVC", "MySQL", "E-commerce", "Bootstrap"]
categories: ["Projets universitaires"]
series: ["Développement web"]
showHero: true
heroStyle: "basic"
---

{{< lead >}}
**BlackArsenal** est un projet universitaire de site e-commerce développé en PHP avec une architecture MVC, spécialisé dans la vente fictive d'armes de jeux vidéo pour démontrer les compétences en développement web back-end.
{{< /lead >}}

{{< badge >}}
Projet Universitaire
{{< /badge >}}
{{< badge >}}
PHP MVC
{{< /badge >}}
{{< badge >}}
E-commerce
{{< /badge >}}

{{< figure src="accueil- BlackArsenal.webp" alt="BlackArsenal - Page d'accueil" caption="Interface d'accueil du site BlackArsenal" >}}

## Vue d'Ensemble du Projet

{{< timeline >}}

{{< timelineItem icon="graduation-cap" header="Contexte Académique" badge="2024" subheader="Projet Universitaire" >}}
Développement d'un site e-commerce complet dans le cadre d'un cours sur le développement web avec PHP. L'objectif était de maîtriser l'architecture MVC et les concepts de programmation orientée objet.
{{< /timelineItem >}}

{{< timelineItem icon="code" header="Architecture MVC" badge="PHP 7.4+" subheader="Structure Modulaire" >}}
Implémentation d'une architecture Modèle-Vue-Contrôleur propre et maintenable :
- **Modèle** : Gestion des données et interaction avec MySQL
- **Vue** : Interface utilisateur responsive avec Bootstrap
- **Contrôleur** : Logique métier et routage des requêtes
{{< /timelineItem >}}

{{< timelineItem icon="database" header="Base de Données" badge="MySQL" subheader="Structure Relationnelle" >}}
Conception d'une base de données normalisée avec tables relationnelles bien structurées, script de création inclus et données de test pour démonstration immédiate.
{{< /timelineItem >}}

{{< /timeline >}}

## Stack Technique

{{< swatches "#8B5CF6" "#3B82F6" "#10B981" >}}

{{< keywordList >}}
{{< keyword icon="code" >}} **PHP 7.4+** - Backend avec orienté objet {{< /keyword >}}
{{< keyword icon="database" >}} **MySQL** - Base de données relationnelle {{< /keyword >}}
{{< keyword icon="globe" >}} **Bootstrap 4** - Framework CSS responsive {{< /keyword >}}
{{< keyword icon="shield" >}} **MVC** - Architecture modulaire {{< /keyword >}}
{{< /keywordList >}}

## Fonctionnalités Principales

### 1. Gestion des Utilisateurs

{{< gallery >}}
  <img src="page connexion - BlackArsenal.webp" class="grid-w50" />
  <img src="page creation de compte - BlackArsenal.webp" class="grid-w50" />
{{< /gallery >}}

- **Système d'authentification** complet avec inscription et connexion
- **Gestion des sessions** utilisateurs
- **Profils utilisateurs** avec informations personnalisées
- **Système de rôles** (administrateur/utilisateur standard)

### 2. Catalogue de Produits

{{< gallery >}}
  <img src="liste des armes - BlackArsenal.webp" class="grid-w50" />
  <img src="page arme - BlackArsenal.webp" class="grid-w50" />
{{< /gallery >}}

- **Affichage des produits** avec pagination
- **Pages détaillées** pour chaque produit
- **Système de catégories** pour organiser les produits
- **Images et descriptions** détaillées
- **Prix et disponibilité** en temps réel

### 3. Interface d'Administration

{{< gallery >}}
  <img src="formulaire creation arme - BlackArsenal.webp" class="grid-w50" />
  <img src="formulaire modification armes - BlackArsenal.webp" class="grid-w50" />
{{< /gallery >}}

- **CRUD complet** (Create, Read, Update, Delete) pour les produits
- **Interface d'ajout** de nouveaux produits
- **Modification en ligne** des caractéristiques
- **Gestion des stocks** et des prix
- **Upload d'images** pour les produits

### 4. Expérience Utilisateur

{{< gallery >}}
  <img src="liste des armes contendante - BlackArsenal.webp" class="grid-w50" />
  <img src="page arme contendante- BlackArsenal.webp" class="grid-w50" />
{{< /gallery >}}

- **Design responsive** adapté aux mobiles et tablettes
- **Navigation intuitive** avec menu déroulant
- **Recherche et filtrage** des produits
- **Interface utilisateur moderne** avec Bootstrap

## Base de Données

La base de données comprend :
- **Schéma complet** normalisé et optimisé
- **Tables relationnelles** bien structurées
- **Données de test** pour les produits et utilisateurs
- **Relations** parfaitement intégrées entre les entités

### Structure des Tables

{{< alert icon="code" cardColor="#3b82f6" textColor="#ffffff" iconColor="#ffffff" >}}
**Base de Données Complète** - Structure normalisée avec schéma relationnel et tables optimisées
{{< /alert >}}

```sql
-- Structure de la base de données BlackArsenal

CREATE TABLE utilisateur(
    id VARCHAR(50),
    nom VARCHAR(50),
    email VARCHAR(50),
    mdp VARCHAR(50),
    PRIMARY KEY(id)
);

CREATE TABLE arme(
    id INT,
    nom VARCHAR(50),
    prix DOUBLE,
    description VARCHAR(200),
    stock INT,
    image VARCHAR(50),
    PRIMARY KEY(id)
);

CREATE TABLE armeCorpsACorps(
    id INT,
    tranchante LOGICAL,
    contondante LOGICAL,
    deLancee LOGICAL,
    poids VARCHAR(50),
    longueur DOUBLE,
    diametre DOUBLE,
    distanceDeLance DOUBLE,
    nbLots INT,
    PRIMARY KEY(id),
    FOREIGN KEY(id) REFERENCES arme(id)
);

CREATE TABLE arme_a_feu(
    id INT,
    modeDeTir VARCHAR(50),
    portee DECIMAL(15,2),
    type VARCHAR(50),
    nbBalles INT,
    typeMunition VARCHAR(50),
    PRIMARY KEY(id),
    FOREIGN KEY(id) REFERENCES arme(id)
);

CREATE TABLE Stand(
    id INT,
    types VARCHAR(50),
    Destructive_Power SMALLINT,
    Speed SMALLINT,
    Range_Of_Manifestation SMALLINT,
    Stamina SMALLINT,
    Precision_Accuracy SMALLINT,
    Development_Potential SMALLINT,
    PRIMARY KEY(id),
    FOREIGN KEY(id) REFERENCES arme(id)
);

CREATE TABLE Commande(
    id INT,
    dateCommande DATE,
    montant DECIMAL(15,2),
    statut VARCHAR(50),
    id_user VARCHAR(50) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_user) REFERENCES utilisateur(id)
);
```

### Architecture des Tables

- {{< icon "graduation-cap" >}} **Utilisateur** : Gestion des comptes utilisateurs et authentification
- {{< icon "tag" >}} **Arme** : Catalogue principal avec caractéristiques communes
- {{< icon "shield" >}} **ArmeCorpsACorps** : Spécialisation pour armes de mêlée
- {{< icon "fire" >}} **Arme_a_feu** : Spécialisation pour armes à distance  
- {{< icon "star" >}} **Stand** : Catégorie spéciale d'armes fictives
- {{< icon "heart" >}} **Commande** : Système de gestion des commandes

## Compétences Démontrées

{{< carousel images="{formulaire creation arme - BlackArsenal.webp,formulaire modification armes - BlackArsenal.webp,liste des armes - BlackArsenal.webp,page arme - BlackArsenal.webp}" aspectRatio="16-9" interval="3000" >}}

{{< alert icon="lightbulb" cardColor="#10b981" textColor="#ffffff" iconColor="#ffffff" >}}
**Apprentissages Clés** - Maîtrise complète du cycle de développement web avec PHP MVC
{{< /alert >}}

### Développement Backend
- {{< icon "code" >}} {{< badge >}}PHP orienté objet{{< /badge >}} avec classes et héritage
- {{< icon "shield" >}} {{< badge >}}Architecture MVC{{< /badge >}} propre et modulaire  
- {{< icon "code" >}} {{< badge >}}Base de données{{< /badge >}} avec PDO et requêtes sécurisées
- {{< icon "lock" >}} {{< badge >}}Sécurité{{< /badge >}} protection contre injections SQL

### Développement Frontend  
- {{< icon "globe" >}} {{< badge >}}HTML5 sémantique{{< /badge >}} bien structuré
- {{< icon "globe" >}} {{< badge >}}CSS3 responsive{{< /badge >}} design adaptatif
- {{< icon "globe" >}} {{< badge >}}Bootstrap{{< /badge >}} interface professionnelle
- {{< icon "code" >}} {{< badge >}}JavaScript{{< /badge >}} interactions dynamiques

### Gestion de Projet
- {{< icon "shield" >}} {{< badge >}}Code organisé{{< /badge >}} structure maintenable
- {{< icon "lightbulb" >}} {{< badge >}}Documentation{{< /badge >}} technique complète  
- {{< icon "github" >}} {{< badge >}}Versioning{{< /badge >}} gestion des fichiers

## Aspects Pédagogiques

{{< mermaid >}}
graph TD
    A[Analyse des Besoins] --> B[Conception MVC]
    B --> C[Modélisation BDD]
    C --> D[Développement Backend]
    D --> E[Interface Frontend]
    E --> F[Tests & Débogage]
    F --> G[Documentation]
    
    B --> H[Séparation des Responsabilités]
    D --> I[Sécurisation]
    E --> J[UX/UI Design]
    F --> K[Bonnes Pratiques]
{{< /mermaid >}}

Ce projet illustre une approche méthodique du développement web :
- {{< icon "shield" >}} **Séparation des responsabilités** avec le pattern MVC
- {{< icon "check" >}} **Bonnes pratiques** de développement web professionnel  
- {{< icon "lock" >}} **Sécurisation** d'une application web complète
- {{< icon "globe" >}} **Intégration** frontend/backend harmonieuse
- {{< icon "code" >}} **Conception** d'une base de données relationnelle

## Installation et Configuration

{{< alert icon="download" cardColor="#6366f1" textColor="#ffffff" iconColor="#ffffff" >}}
**Prêt à l'emploi** - Projet livré avec tous les éléments nécessaires pour un déploiement immédiat
{{< /alert >}}

Le projet comprend :
- {{< icon "code" >}} **Base de données** conception et implémentation
- {{< icon "wand-magic-sparkles" >}} **Configuration** simple pour environnement local  
- {{< icon "lightbulb" >}} **Documentation** technique complète
- {{< icon "bug" >}} **Données de test** pour démonstration

{{< alert icon="info" cardColor="#3b82f6" textColor="#ffffff" iconColor="#ffffff" >}}
**Projet Académique** - Ce site simule la vente d'armes fictives de jeux vidéo dans un cadre purement éducatif pour démontrer les compétences en développement web.
{{< /alert >}}

{{< alert icon="graduation-cap" cardColor="#8b5cf6" textColor="#ffffff" iconColor="#ffffff" >}}
**Portfolio d'Apprentissage** - Ce projet illustre concrètement les compétences développées dans mon [Portfolio d'Apprentissage BUT 2](/portfolio-apprentissage/) : modélisation UML, architecture MVC et conception de bases de données.
{{< /alert >}}


{{< keywordList >}}
{{< keyword icon="code" >}} PHP {{< /keyword >}}
{{< keyword icon="shield" >}} MVC {{< /keyword >}}
{{< keyword icon="code" >}} MySQL {{< /keyword >}}
{{< keyword icon="globe" >}} E-commerce {{< /keyword >}}
{{< keyword icon="graduation-cap" >}} Universitaire {{< /keyword >}}
{{< /keywordList >}}