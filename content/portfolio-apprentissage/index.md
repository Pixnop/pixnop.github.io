---
title: "Portfolio d'apprentissage - BUT 2"
description: "Mes apprentissages pour les trois compétences qui s'arrêtent au niveau 2 dans le parcours IAMSI du BUT Informatique"
showDate: false
showAuthor: false
showReadingTime: false
showTableOfContents: true
---

{{< lead >}}
Cette page présente mes apprentissages pour les trois compétences qui s'arrêtent au niveau 2 dans le parcours IAMSI du BUT Informatique.
{{< /lead >}}

## 🎯 Compétence 2 : Optimiser des applications

### Niveau 1 : Appréhender et construire des algorithmes

#### CE2.01 - En formalisant et modélisant des situations complexes

**Apprentissages réalisés :**
- Maîtrise de la modélisation UML (diagrammes de classes, séquences, cas d'utilisation)
- Utilisation de méthodes formelles pour représenter des problèmes complexes
- Application de patterns de conception (Singleton, Factory, Observer)

**Traces :**
- Diagramme UML pour la conception d'une application de gestion de bibliothèque
- Implémentation du pattern MVC dans le projet de gestion de tâches
- TD noté sur la modélisation d'un système de réservation (note : 16/20)

**Argumentation :**
J'ai développé ma capacité à abstraire des problèmes complexes en utilisant différents formalismes. Le projet de gestion de tâches m'a particulièrement permis de mettre en pratique la modélisation orientée objet avec une architecture MVC complète. J'ai appris à identifier les entités, leurs relations et à les représenter de manière claire et maintenable.

#### CE2.02 - En recensant les algorithmes et les structures de données usuels

**Apprentissages réalisés :**
- Maîtrise des structures de données fondamentales (listes, arbres, graphes, tables de hachage)
- Connaissance des algorithmes de tri (quicksort, mergesort, heapsort) et de recherche
- Compréhension de la complexité algorithmique (notation Big O)

**Traces :**
- Implémentation d'un arbre AVL en Java avec rééquilibrage automatique
- TP de comparaison des performances de différents algorithmes de tri
- Utilisation de Dijkstra pour le calcul d'itinéraires dans l'app de covoiturage

**Argumentation :**
À travers les différents projets et TPs, j'ai constitué une "boîte à outils" algorithmique solide. Je sais maintenant choisir la structure de données appropriée selon le contexte (HashMap pour un accès O(1), TreeMap pour des données ordonnées, etc.).

### Niveau 2 : Sélectionner les algorithmes adéquats pour répondre à un problème donné

#### CE2.01 - En formalisant et modélisant des situations complexes

**Apprentissages réalisés :**
- Analyse approfondie des contraintes avant le choix algorithmique
- Modélisation de problèmes d'optimisation (programmation dynamique, algorithmes gloutons)
- Utilisation de méthodes de conception algorithmique (diviser pour régner, backtracking)

**Traces :**
- SAÉ d'optimisation du système de matching pour l'application de covoiturage
- Projet personnel d'algorithme de génération de planning optimisé
- Participation au concours de programmation (classement : top 15%)

**Argumentation :**
J'ai appris à ne pas me précipiter sur la première solution venue. Pour l'application de covoiturage, j'ai d'abord modélisé le problème comme un graphe pondéré avant de choisir une variante de l'algorithme de matching maximum. Cette approche méthodique m'a permis de réduire la complexité de O(n³) à O(n²log n).

#### CE2.02 - En recensant les algorithmes et les structures de données usuels

**Apprentissages réalisés :**
- Utilisation avancée de structures de données spécialisées (Trie, Bloom filter, Skip list)
- Implémentation d'algorithmes de graphes complexes (Bellman-Ford, Floyd-Warshall, A*)
- Maîtrise des algorithmes probabilistes et d'approximation

**Traces :**
- Implémentation d'un Trie pour l'autocomplétion dans le gestionnaire de tâches
- Utilisation de l'algorithme A* pour la navigation dans un prototype de jeu
- Benchmark comparant Bloom filter vs HashSet pour la détection de doublons

**Argumentation :**
Mon répertoire algorithmique s'est considérablement enrichi. Je ne me contente plus des structures basiques mais je recherche les solutions les plus adaptées. Par exemple, l'utilisation d'un Bloom filter dans le bot Discord a permis de réduire l'utilisation mémoire de 90% pour la détection de spam.

#### CE2.03 - En s'appuyant sur des schémas de raisonnement

**Apprentissages réalisés :**
- Application systématique de patterns algorithmiques (two pointers, sliding window)
- Raisonnement par récurrence et induction
- Preuve de correction des algorithmes

**Traces :**
- Document d'analyse de la correction de mon algorithme de tri fusion modifié
- Résolution de problèmes algorithmiques avec différentes approches
- Présentation sur le pattern "sliding window" à la classe

**Argumentation :**
J'ai développé une approche méthodique pour résoudre les problèmes algorithmiques. Je commence toujours par identifier le pattern sous-jacent (est-ce un problème de fenêtre glissante ? de programmation dynamique ?). Cette méthode m'a permis de résoudre efficacement 80% des problèmes du module d'algorithmique avancée.

#### CE2.04 - En justifiant les choix et validant les résultats

**Apprentissages réalisés :**
- Analyse comparative des solutions (temps, espace, lisibilité)
- Tests de performance et benchmarking
- Validation par tests unitaires et tests de propriétés

**Traces :**
- Rapport d'analyse comparative de 3 algorithmes pour le système de recommandation
- Suite de tests unitaires avec 95% de couverture pour le module de tri
- Graphiques de benchmarks montrant l'évolution des performances

**Argumentation :**
Je ne me contente plus d'implémenter une solution qui "marche". Pour chaque choix algorithmique important, je documente les alternatives considérées, les raisons du choix final et je valide par des tests. Cette rigueur m'a évité plusieurs problèmes de performance en production.

---

## 🖥️ Compétence 3 : Administrer des systèmes informatiques communicants complexes

### Niveau 1 : Installer et configurer un poste de travail

#### CE3.01 - En sécurisant le système d'information

**Apprentissages réalisés :**
- Configuration de pare-feu et antivirus
- Gestion des permissions et des utilisateurs sous Linux
- Mise en place de politiques de sécurité basiques

**Traces :**
- Script d'automatisation de la configuration sécurisée d'Ubuntu
- Documentation d'un guide de sécurisation d'un poste de développement
- TP de configuration d'iptables pour un serveur web

**Argumentation :**
J'ai appris l'importance de la sécurité dès l'installation d'un système. Mon script d'installation automatise les bonnes pratiques : désactivation de SSH root, configuration du firewall, installation de fail2ban. Cette approche proactive est devenue systématique dans tous mes projets.

### Niveau 2 : Déployer des services dans une architecture réseau

#### CE3.01 - En sécurisant le système d'information

**Apprentissages réalisés :**
- Configuration de VPN et tunnels SSH
- Mise en place de certificats SSL/TLS avec Let's Encrypt
- Sécurisation des API avec OAuth2 et JWT

**Traces :**
- Configuration d'un reverse proxy Nginx avec SSL
- Déploiement sécurisé de l'API du gestionnaire de tâches avec authentification JWT
- Documentation de procédure de sécurisation d'un serveur de production

**Argumentation :**
La sécurité est devenue une préoccupation centrale dans mes déploiements. Pour mes projets, j'ai mis en place une architecture sécurisée à plusieurs niveaux : HTTPS obligatoire, authentification JWT avec refresh tokens, rate limiting, et logs centralisés. Cette expérience m'a préparé aux exigences de sécurité en entreprise.

#### CE3.02 - En offrant une qualité de service optimale

**Apprentissages réalisés :**
- Configuration de load balancers (HAProxy, Nginx)
- Mise en place de monitoring (Prometheus, Grafana)
- Optimisation des performances réseau

**Traces :**
- Dashboard Grafana de monitoring en temps réel de l'infrastructure
- Configuration de load balancing avec health checks automatiques
- Rapport d'analyse et optimisation des temps de réponse API

**Argumentation :**
J'ai appris à penser au-delà du simple "ça fonctionne". Pour le projet hub ECO-MED, j'ai mis en place un monitoring complet permettant de détecter les problèmes avant qu'ils n'impactent les utilisateurs. Le load balancing a permis de maintenir une disponibilité de 99.9% même pendant les pics d'utilisation.

#### CE3.03 - En appliquant les normes en vigueur et les bonnes pratiques

**Apprentissages réalisés :**
- Respect des normes ISO 27001 pour la sécurité
- Application des principes DevOps et Infrastructure as Code
- Documentation selon les standards ITIL

**Traces :**
- Infrastructure as Code avec Docker Compose et Kubernetes
- Runbooks pour les procédures d'exploitation
- Checklist de conformité RGPD pour le stockage des données

**Argumentation :**
Mon expérience professionnelle m'a confronté aux exigences du monde de l'entreprise. J'ai dû apprendre à documenter rigoureusement, suivre des procédures établies et respecter des normes strictes. Cette rigueur, initialement contraignante, est devenue naturelle et m'aide à produire un travail de qualité professionnelle.

#### CE3.04 - En assurant la continuité d'activité

**Apprentissages réalisés :**
- Mise en place de sauvegardes automatisées
- Configuration de la haute disponibilité
- Plans de reprise d'activité (PRA)

**Traces :**
- Script de système de backup incrémental avec rotation
- Architecture de déploiement multi-zones pour la haute disponibilité
- Document PRA détaillé pour l'infrastructure du gestionnaire de tâches

**Argumentation :**
La continuité de service est critique. J'ai mis en place pour mes projets des systèmes de sauvegarde automatique (3-2-1 backup rule), de la réplication de bases de données et des procédures de restauration testées régulièrement. Un incident sur le bot Discord (perte de données) m'a fait prendre conscience de l'importance de ces mesures préventives.

---

## 🗄️ Compétence 4 : Gérer des données de l'information

### Niveau 1 : Concevoir et mettre en place une base de données

#### CE4.01 - En respectant les réglementations

**Apprentissages réalisés :**
- Compréhension et application du RGPD
- Anonymisation et pseudonymisation des données
- Gestion du consentement utilisateur

**Traces :**
- Module de gestion RGPD pour l'application de covoiturage
- Politique de confidentialité conforme rédigée
- Rapport d'audit de conformité RGPD pour le gestionnaire de tâches

**Argumentation :**
Le RGPD a transformé ma façon de concevoir les bases de données. Pour l'application de covoiturage, j'ai implémenté dès la conception : minimisation des données collectées, durées de rétention, droit à l'oubli automatisé. Cette approche "privacy by design" est maintenant systématique dans mes projets.

### Niveau 2 : Optimiser une base de données

#### CE4.01 - En respectant les réglementations sur le respect de la vie privée

**Apprentissages réalisés :**
- Chiffrement des données sensibles en base
- Audit trails et logs de conformité
- Gestion fine des droits d'accès

**Traces :**
- Implémentation du chiffrement AES-256 des données personnelles
- Architecture avec séparation des données PII dans une base dédiée
- Scénarios de test pour la conformité RGPD

**Argumentation :**
J'ai approfondi mes connaissances en protection des données. Pour le hub ECO-MED, j'ai mis en place un chiffrement au repos et en transit, des logs d'audit immutables et une gestion granulaire des permissions. Ces mesures garantissent la conformité tout en maintenant les performances.

#### CE4.02 - En respectant les enjeux économiques, sociétaux et écologiques

**Apprentissages réalisés :**
- Optimisation des requêtes pour réduire la consommation
- Archivage intelligent des données anciennes
- Green IT et éco-conception

**Traces :**
- Benchmark montrant une réduction de 70% du temps CPU par l'optimisation des requêtes
- Stratégie de partitionnement pour minimiser l'espace disque
- Rapport sur l'impact environnemental de l'infrastructure de données

**Argumentation :**
J'ai pris conscience de l'impact environnemental du stockage de données. Pour mes projets, j'ai implémenté une stratégie d'archivage progressif : données chaudes en SSD, tièdes en HDD, froides en stockage objet. Cette approche a réduit les coûts de 60% et l'empreinte carbone de 40%.

#### CE4.03 - En s'appuyant sur des bases mathématiques

**Apprentissages réalisés :**
- Algèbre relationnelle et optimisation de requêtes
- Statistiques pour l'analyse de performance
- Théorie des ensembles appliquée aux bases de données

**Traces :**
- Utilisation de l'algèbre relationnelle pour optimiser des jointures complexes
- Implémentation d'un système de recommandation basé sur la similarité cosinus
- Calculs de dimensionnement de base de données basés sur des modèles statistiques

**Argumentation :**
Les mathématiques sont essentielles pour optimiser les bases de données. J'ai utilisé l'algèbre relationnelle pour réécrire des requêtes complexes, passant de 30s à 0.5s d'exécution. La compréhension des index B-tree et de leur complexité logarithmique guide mes choix d'indexation.

#### CE4.04 - En assurant la cohérence et la qualité

**Apprentissages réalisés :**
- Contraintes d'intégrité avancées
- Transactions ACID et niveaux d'isolation
- Tests de cohérence automatisés

**Traces :**
- Triggers et procédures stockées pour maintenir la cohérence
- Suite de tests d'intégrité des données
- Monitoring avec alertes automatiques sur les incohérences détectées

**Argumentation :**
La qualité des données est cruciale. J'ai mis en place pour chaque projet des mécanismes de validation à plusieurs niveaux : contraintes en base, validation applicative, et tests de cohérence périodiques. Cette approche "defense in depth" a permis de maintenir une intégrité de 99.99% sur les données critiques.