---
title: "Plateforme CTF YGGAME - Capture The Flag"
description: "Création d'une plateforme complète de Capture The Flag pour l'association YGGAME, basée sur CTFd et déployée via Docker sur VPS. La plateforme propose des défis variés en cybersécurité avec système de notifications Discord et interface d'administration avancée."
date: 2024-06-15
draft: false
tags: ["CTF", "Docker", "CTFd", "DevOps", "Cybersécurité", "Full Stack", "Python", "PHP", "C", "Assembleur"]
categories: ["Projets universitaires"]
series: ["Développement web"]
showHero: true
heroStyle: "basic"
---

{{< lead >}}
**Plateforme CTF YGGAME** est un projet universitaire ambitieux de création d'une plateforme complète de Capture The Flag pour l'association YGGAME, intégrant des défis variés en cybersécurité et une infrastructure robuste basée sur Docker et CTFd.
{{< /lead >}}

{{< badge >}}
SAÉ S4
{{< /badge >}}
{{< badge >}}
Équipe de 4
{{< /badge >}}
{{< badge >}}
Docker & CTFd
{{< /badge >}}

## Contexte du Projet

Ce projet a été réalisé dans le cadre d'une SAÉ (Situation d'Apprentissage et d'Évaluation) du BUT Informatique. L'association YGGAME, spécialisée dans l'organisation d'événements autour du jeu vidéo et de l'informatique, souhaitait diversifier ses activités en proposant des compétitions de cybersécurité sous forme de Capture The Flag (CTF).

Notre équipe de 4 étudiants a été mandatée pour concevoir et implémenter une plateforme web complète permettant la gestion de ces événements CTF.

## Fonctionnalités Principales

### Infrastructure et Déploiement

- **Plateforme CTFd** : Utilisation de CTFd comme base, personnalisée selon les besoins
- **Déploiement Docker** : Architecture conteneurisée pour une gestion efficace
- **VPS dédié** : Hébergement sur serveur privé virtuel
- **Interface Dockge** : Administration simplifiée des conteneurs Docker
- **Sauvegardes automatisées** : Système de backup régulier

### Système de Notifications et Communication

- **Bot Discord** : Notifications en temps réel des événements
- **Traduction multilingue** : Interface accessible en plusieurs langues
- **Scoring dynamique** : Classement en temps réel des participants

### Défis Développés

#### 1. Défi Drupal avec API JSON
- Exploration d'une API JSON Drupal vulnérable
- Technologies : Drupal 9, MySQL, Docker
- Objectif : Extraire un flag caché dans le contenu

#### 2. Défi Injection SQL
- Application PHP vulnérable aux injections SQL
- Technologies : PHP 7.4, MySQL, Apache
- Objectif : Exploiter les failles de sécurité

#### 3. Défi RGPD
- Questionnaire interactif sur la conformité RGPD
- Technologies : PHP, CSS, JavaScript
- Objectif : Tester les connaissances légales

#### 4. Défi Bas Niveau (Buffer Overflow)
- Programme C vulnérable avec interface Flask
- Technologies : C, Python, Flask, Docker
- Objectif : Exploiter un buffer overflow

#### 5. Défi SSH
- Contournement de restrictions shell
- Technologies : OpenSSH, Bash, Linux
- Objectif : Bypass des mécanismes de sécurité

#### 6. Défi Assembleur
- Reverse engineering d'un programme assembleur
- Technologies : NASM, x86 Assembly
- Objectif : Comprendre et exploiter le code

#### 7. Défi Bluetooth - Échange Mystère
- Analyse de communications Bluetooth
- Technologies : Python, Wireshark, Docker
- Objectif : Intercepter et décrypter des échanges

#### 8. BodyLanguage - Challenge Gestuel
- Programmation BrainFuck par détection de mouvements
- Technologies : Python, OpenCV, MediaPipe, Flask
- Objectif : "Danser" le code pour obtenir le flag

## Captures d'écran

{{< figure src="Page d'accueil CTFd.png" alt="Page d'accueil de la plateforme CTFd" caption="Interface d'accueil personnalisée de notre plateforme CTF" >}}

{{< figure src="Page des challenges CTFd.png" alt="Page des défis CTFd" caption="Vue d'ensemble des défis disponibles avec leur catégorie et points" >}}

{{< figure src="Diagramme de sequence complet du projet CTF.png" alt="Diagramme de séquence du projet" caption="Architecture complète des interactions entre les différents composants" >}}

## Architecture Technique

### Stack Technologique

- **Backend** : CTFd (Python), Flask, PHP
- **Frontend** : Interface CTFd personnalisée
- **Base de données** : MySQL
- **Conteneurisation** : Docker, Docker Compose
- **Déploiement** : VPS Linux
- **Monitoring** : Dockge
- **Communication** : API Discord

### Sécurité

- Certificats SSL/TLS pour le chiffrement
- Isolation des environnements via Docker
- Sanitisation des entrées utilisateur
- Conformité RGPD pour les données personnelles

## Méthodologie de Développement

### Approche Agile

- **5 sprints** de développement
- **Product Owner** : Raphaël Lambert
- **Scrum Master** : Quentin Grelier
- **Développeurs** : Léon Fievet, Aurélien Arqué

### Organisation

- Réunions quotidiennes de 10 minutes
- Revues de sprint avec le client (Paul Budzynski)
- Documentation continue sur Git
- Tests rigoureux de chaque défi

## Résultats et Apprentissages

### Compétences Techniques

- Maîtrise approfondie de Docker et de la conteneurisation
- Développement full-stack avec technologies variées
- Implémentation de mécanismes de sécurité
- Gestion d'infrastructure réseau

### Compétences Organisationnelles

- Gestion de projet agile en conditions réelles
- Communication client efficace
- Travail en équipe structuré
- Adaptation aux contraintes techniques

### Points Forts du Projet

- Architecture modulaire et évolutive
- Interface utilisateur intuitive
- Diversité des défis proposés
- Documentation complète
- Respect des délais et du cahier des charges

## Perspectives d'Évolution

- Ajout de nouveaux types de défis
- Système de gamification avancé
- Traduction complète de l'interface
- Intégration d'outils d'analyse des performances
- Mode compétition multi-sites

Ce projet a été une expérience enrichissante combinant développement technique, gestion de projet et travail d'équipe. Il nous a permis de mettre en pratique nos connaissances tout en développant une solution concrète répondant aux besoins réels d'une association.