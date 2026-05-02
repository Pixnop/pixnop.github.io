---
title: "Portfolio d'Apprentissage"
description: "Mes apprentissages pour les six compétences du parcours IAMSI (Intégration d'Applications et Management du Système d'Information) du BUT Informatique"
showDate: false
showAuthor: false
showReadingTime: false
showTableOfContents: true
---

{{< lead >}}
Cette page présente mes apprentissages pour les six compétences du parcours **Intégration d'Applications et Management du Système d'Information (IAMSI)** du BUT Informatique. Trois compétences s'arrêtent au niveau 2 (C2, C3, C4) et trois sont développées jusqu'au niveau 3 (C1, C5, C6), principalement dans le contexte de mon alternance chez **ECO-MED** (bureau d'études environnementales).
{{< /lead >}}

## Compétence 1 : Réaliser un développement d'application

{{< alert icon="rocket" cardColor="#0ea5e9" textColor="#ffffff" iconColor="#ffffff" >}}
**Compétence en cours d'acquisition** au niveau 3 — *Se spécialiser sur un ensemble de supports avec un suivi qualitatif*
{{< /alert >}}

### Apprentissages Critiques et Traces

#### AC1 - Choisir et implémenter les architectures adaptées

{{< keywordList >}}
{{< keyword icon="code" >}} Architecture 3-couches {{< /keyword >}}
{{< keyword icon="fire" >}} Services modulaires {{< /keyword >}}
{{< keyword icon="star" >}} SOLID & OWASP {{< /keyword >}}
{{< /keywordList >}}

**Traces concrètes :**
- **Architecture en 3 couches** (présentation / métier / données) du [**Hub ECO-MED**](/projets/hub-eco-med/), avec une couche d'abstraction pour isoler les systèmes externes (SX Everwin, ArcGIS, Azure AD)
- **Architecture orientée services** pour [**RaTouf**](/projets/ratouf/) : AuthService, ApiService, ChiroptereService, ReferentialService, DataProcessor, ActivityLevelCalculator, SessionValidator
- Justification documentée des choix Node.js + Express + MongoDB face aux contraintes : flexibilité du schéma (réglementation évolutive), courbe d'apprentissage pour la reprise du projet, performance sur postes limités
- Application des principes **SOLID** et des recommandations **OWASP** dans tous les projets ECO-MED


#### AC2 - Développer des applications sur des supports spécifiques

{{< keywordList >}}
{{< keyword icon="globe" >}} Web responsive {{< /keyword >}}
{{< keyword icon="code" >}} Terrain mobile {{< /keyword >}}
{{< keyword icon="lightbulb" >}} Apps métier spécialisées {{< /keyword >}}
{{< /keywordList >}}

**Traces concrètes :**
- [**PetalPatrol**](/projets/petalpatrol/) — interface terrain conçue pour tablettes en conditions réelles : boutons largement dimensionnés, lisibilité plein soleil, fonctionnement avec connexion intermittente
- [**EcoSur**](/projets/hub-eco-med/) — synchronisation différée pour usage hors-ligne sur terrain à couverture limitée, avec résolution automatique des conflits à la reconnexion
- Conversion multi-projection (Lambert 93, UTM, WGS84) via **Proj4js** côté navigateur pour s'adapter aux contextes nationaux et internationaux


#### AC3 - Réaliser un audit d'une application

{{< keywordList >}}
{{< keyword icon="eye" >}} Audit qualité {{< /keyword >}}
{{< keyword icon="shield" >}} Audit sécurité {{< /keyword >}}
{{< keyword icon="check" >}} Tests automatisés {{< /keyword >}}
{{< /keywordList >}}

**Traces concrètes :**
- **Audit du parc informatique d'ECO-MED** réalisé pendant le stage : analyse du renouvellement, inventaire matériel, recommandations chiffrées
- Tests automatisés **Jest** sur les composants critiques : parser CSV de RaTouf, calculs d'activité chiroptères, conversions de coordonnées géographiques
- Mise en place d'un **système de logs centralisés** (actions utilisateurs, appels API externes, erreurs) pour audit et diagnostic en production
- Instrumentation du code pour analyse fine du comportement (optimisation du traitement des CSV volumineux dans RaTouf)
- **Audit de sécurité OWASP** mené sur les applications ECO-MED (rapport confidentiel, non publié)


#### AC4 - Intégrer des solutions dans un environnement de production

{{< keywordList >}}
{{< keyword icon="docker" >}} Déploiement Linux {{< /keyword >}}
{{< keyword icon="fire" >}} CI / CD {{< /keyword >}}
{{< keyword icon="code" >}} GitFlow {{< /keyword >}}
{{< /keywordList >}}

**Traces concrètes :**
- **Déploiement en production** du Hub et des applications métier sur VM Linux Debian + NGINX chez ECO-MED, avec dimensionnement défini avec le prestataire IT
- **GitFlow** complet : branches `main` / `dev` / `feature/*`, Pull Requests systématiques avant merge, branche dédiée à la configuration serveur
- **Intégration continue** GitHub : tests exécutés automatiquement à chaque push pour détecter les régressions
- **Authentification SSO JWT + Azure AD** intégrée à l'infrastructure existante d'ECO-MED, avec vérification périodique de la validité des tokens et reconnexion automatique


---

## Compétence 2 : Optimiser des applications

{{< alert icon="star" cardColor="#8b5cf6" textColor="#ffffff" iconColor="#ffffff" >}}
**Compétence acquise** au niveau 2
{{< /alert >}}

### Apprentissages Critiques et Traces

#### AC1 - Choisir des structures de données complexes adaptées au problème

{{< keywordList >}}
{{< keyword icon="code" >}} Structures avancées {{< /keyword >}}
{{< keyword icon="star" >}} Arbres spécialisés {{< /keyword >}}
{{< keyword icon="fire" >}} Tables de hachage {{< /keyword >}}
{{< /keywordList >}}

**Traces concrètes :**
- Implémentation d'un **Trie** pour l'autocomplétion dans le [**Hub ECO-MED**](/projets/hub-eco-med/) - recherche instantanée parmi 5000+ espèces
- Utilisation de **structures de graphes** pour l'algorithme de matching dans [**Eco-Voiturage**](/projets/eco-voiturage/)
- **Skip List** implémentée dans un TP pour la gestion optimisée de données ordonnées


#### AC2 - Utiliser des techniques algorithmiques adaptées pour des problèmes complexes

{{< keywordList >}}
{{< keyword icon="lightbulb" >}} Programmation dynamique {{< /keyword >}}
{{< keyword icon="shield" >}} Méthodes heuristiques {{< /keyword >}}
{{< keyword icon="code" >}} Intelligence artificielle {{< /keyword >}}
{{< /keywordList >}}

**Traces concrètes :**
- **Algorithme génétique** pour l'optimisation des tournées dans [**PetalPatrol**](/projets/petalpatrol/) - réduction de 40% des distances parcourues
- **A\*** implémenté pour la navigation dans l'application mobile [**SkyFuel**](/projets/skyfuel/)
- **Programmation dynamique** appliquée au problème du sac à dos dans une SAÉ (note: 18/20)


#### AC3 - Comprendre les enjeux et moyens de sécurisation des données et du code

{{< keywordList >}}
{{< keyword icon="lock" >}} Chiffrement AES {{< /keyword >}}
{{< keyword icon="shield" >}} Injection SQL {{< /keyword >}}
{{< keyword icon="eye" >}} Audit de code {{< /keyword >}}
{{< /keywordList >}}

**Traces concrètes :**
- **Sécurisation complète** de [**BlackArsenal**](/projets/blackarsenal/) : protection XSS, CSRF, injections SQL
- **Chiffrement AES-256** des données sensibles dans la base de données du [**Hub ECO-MED**](/projets/hub-eco-med/)
- **Création de défis sécurité** pour la [**Plateforme CTF YGGAME**](/projets/plateforme-ctf-yggame/) : buffer overflow, injection SQL, reverse engineering
- **Rapport d'audit de sécurité** réalisé avec OWASP ZAP sur mes projets


#### AC4 - Évaluer l'impact environnemental et sociétal des solutions proposées

{{< keywordList >}}
{{< keyword icon="fire" >}} Green IT {{< /keyword >}}
{{< keyword icon="star" >}} Éco-conception {{< /keyword >}}
{{< keyword icon="check" >}} Impact carbone {{< /keyword >}}
{{< /keywordList >}}

**Traces concrètes :**
- **Optimisation énergétique** de [**SkyFuel**](/projets/skyfuel/) : réduction de 60% de la consommation batterie
- **Analyse d'impact carbone** documentée pour le déploiement du [**Hub ECO-MED**](/projets/hub-eco-med/)
- **Lazy loading et pagination** implémentés pour réduire la bande passante de 70%


---

## Compétence 3 : Administrer des systèmes informatiques communicants complexes

{{< alert icon="shield" cardColor="#8b5cf6" textColor="#ffffff" iconColor="#ffffff" >}}
**Compétence acquise** au niveau 2
{{< /alert >}}

### Apprentissages Critiques et Traces

#### AC1 - Concevoir et développer des applications communicantes

{{< keywordList >}}
{{< keyword icon="globe" >}} API REST {{< /keyword >}}
{{< keyword icon="code" >}} WebSockets {{< /keyword >}}
{{< keyword icon="shield" >}} Microservices {{< /keyword >}}
{{< /keywordList >}}

**Traces concrètes :**
- **API REST complète** pour le [**Hub ECO-MED**](/projets/hub-eco-med/) avec documentation OpenAPI
- **WebSockets** implémentés dans [**PetalPatrol**](/projets/petalpatrol/) pour la synchronisation temps réel
- **Architecture microservices** avec Docker Compose pour découpler les services
- **Bot Discord et API CTFd** intégrés dans la [**Plateforme CTF YGGAME**](/projets/plateforme-ctf-yggame/) pour notifications temps réel


#### AC2 - Utiliser des serveurs et des services réseaux virtualisés

{{< keywordList >}}
{{< keyword icon="docker" >}} Docker & Kubernetes {{< /keyword >}}
{{< keyword icon="globe" >}} Cloud AWS/Azure {{< /keyword >}}
{{< keyword icon="fire" >}} Infrastructure as Code {{< /keyword >}}
{{< /keywordList >}}

**Traces concrètes :**
- **Dockerisation complète** de tous mes projets avec docker-compose.yml optimisés
- **Déploiement Kubernetes** pour le [**Hub ECO-MED**](/projets/hub-eco-med/) avec auto-scaling
- **Infrastructure CTF conteneurisée** dans la [**Plateforme CTF YGGAME**](/projets/plateforme-ctf-yggame/) : 8 défis Docker + Dockge
- **Terraform** utilisé pour provisionner l'infrastructure cloud de manière reproductible


#### AC3 - Sécuriser les services et données d'un système

{{< keywordList >}}
{{< keyword icon="lock" >}} Zero Trust Security {{< /keyword >}}
{{< keyword icon="shield" >}} WAF & IDS {{< /keyword >}}
{{< keyword icon="eye" >}} SIEM {{< /keyword >}}
{{< /keywordList >}}

**Traces concrètes :**
- **Sécurité multicouche** : WAF Cloudflare + fail2ban + audit logs pour [**BlackArsenal**](/projets/blackarsenal/)
- **Certificats SSL/TLS** avec Let's Encrypt et renouvellement automatique
- **Tests de pénétration** documentés avec remédiation des vulnérabilités identifiées


---

## Compétence 4 : Gérer des données de l'information

{{< alert icon="code" cardColor="#8b5cf6" textColor="#ffffff" iconColor="#ffffff" >}}
**Compétence acquise** au niveau 2
{{< /alert >}}

### Apprentissages Critiques et Traces

#### AC1 - Optimiser les modèles de données de l'entreprise + CE4.03 (bases mathématiques)

{{< keywordList >}}
{{< keyword icon="fire" >}} Normalisation 3NF {{< /keyword >}}
{{< keyword icon="star" >}} Index B-tree {{< /keyword >}}
{{< keyword icon="code" >}} Algèbre relationnelle {{< /keyword >}}
{{< /keywordList >}}

**Traces concrètes :**
- **Refactoring complet** de la base [**BlackArsenal**](/projets/blackarsenal/) : 3NF + index optimisés = 80% de gain
- **Modélisation mathématique** pour le [**Hub ECO-MED**](/projets/hub-eco-med/) avec calculs de cardinalités
- **Requêtes complexes optimisées** : jointures sur 7 tables passées de 12s à 0.3s

#### AC2 - Assurer la confidentialité des données + CE4.01 (respect vie privée)

{{< keywordList >}}
{{< keyword icon="lock" >}} Chiffrement E2E {{< /keyword >}}
{{< keyword icon="shield" >}} RGPD compliance {{< /keyword >}}
{{< keyword icon="eye" >}} Audit immutable {{< /keyword >}}
{{< /keywordList >}}

**Traces concrètes :**
- **Module RGPD complet** pour [**Eco-Voiturage**](/projets/eco-voiturage/) : consentement, portabilité, oubli
- **Chiffrement AES-256-GCM** des données sensibles avec rotation automatique des clés
- **Logs d'audit blockchain** pour traçabilité inaltérable dans [**PetalPatrol**](/projets/petalpatrol/)

#### AC3 - Organiser la restitution de données + CE4.02 (enjeux écologiques)

{{< keywordList >}}
{{< keyword icon="chart" >}} Dashboards interactifs {{< /keyword >}}
{{< keyword icon="fire" >}} Cache intelligent {{< /keyword >}}
{{< keyword icon="star" >}} Green computing {{< /keyword >}}
{{< /keywordList >}}

**Traces concrètes :**
- **Tableaux de bord temps réel** pour [**RaTouf**](/projets/ratouf/) avec Chart.js et WebSockets
- **Système de cache Redis** réduisant de 90% les requêtes base et la consommation serveur
- **Archivage progressif** : données chaudes SSD → tièdes HDD → froides S3


#### AC4 - Manipuler des données hétérogènes + CE4.04 (cohérence et qualité)

{{< keywordList >}}
{{< keyword icon="code" >}} ETL pipelines {{< /keyword >}}
{{< keyword icon="check" >}} Data validation {{< /keyword >}}
{{< keyword icon="globe" >}} Multi-formats {{< /keyword >}}
{{< /keywordList >}}

**Traces concrètes :**
- **Pipeline ETL Python** pour intégrer CSV, JSON, XML dans le [**Hub ECO-MED**](/projets/hub-eco-med/)
- **Validation multicouche** : schémas JSON, contraintes DB, tests unitaires = 99.9% intégrité
- **API universelle** supportant REST, GraphQL et export multi-formats


---

## Compétence 5 : Conduire un projet

{{< alert icon="rocket" cardColor="#0ea5e9" textColor="#ffffff" iconColor="#ffffff" >}}
**Compétence en cours d'acquisition** au niveau 3 — *Participer à la conception et à la mise en œuvre d'un projet système d'information*
{{< /alert >}}

### Apprentissages Critiques et Traces

#### AC1 - Mesurer les impacts économiques, sociétaux et technologiques d'un projet informatique

{{< keywordList >}}
{{< keyword icon="chart" >}} Analyse coût-bénéfice {{< /keyword >}}
{{< keyword icon="lightbulb" >}} ROI {{< /keyword >}}
{{< keyword icon="globe" >}} Conformité réglementaire {{< /keyword >}}
{{< /keywordList >}}

**Traces concrètes :**
- **Étude budgétaire détaillée** pour la production de pièges entomologiques connectés : analyse comparative chiffrée Li-Ion (1 379 € pour 30 unités) vs LiFePO4 (1 415 €), avec critères performance / autonomie / coût
- **Analyse de renouvellement de parc informatique** chez ECO-MED avec recommandations chiffrées remises à la direction
- **Mesure des gains de temps** via automatisation des transmissions de données vers l'INPN : suppression du processus manuel Excel → SIN, réduction des risques d'erreurs de saisie
- Impact sociétal documenté : conformité **RGPD**, **Code de l'environnement (article L411-1A)**, **directive INSPIRE**, **protocole SINP**


#### AC2 - Savoir intégrer un projet informatique dans le SI d'une organisation

{{< keywordList >}}
{{< keyword icon="globe" >}} Intégration ERP {{< /keyword >}}
{{< keyword icon="code" >}} API & adaptateurs {{< /keyword >}}
{{< keyword icon="shield" >}} SSO {{< /keyword >}}
{{< /keywordList >}}

**Traces concrètes :**
- **Intégration du [Hub ECO-MED](/projets/hub-eco-med/)** avec l'écosystème existant : ERP **SX Everwin** (gestion administrative), **SIN ArcGIS** (données naturalistes), **Azure AD** (identités)
- **Couche d'abstraction** isolant les systèmes externes : facilite la maintenance, les tests unitaires, et le remplacement éventuel d'un système sans impact sur le reste
- **Module HTTP custom** pour SX Everwin (qui ne propose pas d'API REST complète), avec cache intelligent pour limiter la charge serveur
- **EcoSur** récupère automatiquement les projets depuis SX Everwin → suppression de la ressaisie et garantie de cohérence inter-applications
- **PetalPatrol et RaTouf** envoient leurs données validées au SIN ArcGIS, qui les transmet ensuite à l'INPN selon le flux institutionnel établi


#### AC3 - Savoir adapter un système d'information

{{< keywordList >}}
{{< keyword icon="lightbulb" >}} Évolution architecturale {{< /keyword >}}
{{< keyword icon="fire" >}} Migration progressive {{< /keyword >}}
{{< keyword icon="check" >}} Continuité de service {{< /keyword >}}
{{< /keywordList >}}

**Traces concrètes :**
- **Évolution architecturale monolithique → modulaire** : choix d'un Hub fédérateur plutôt qu'une application unique, pour permettre l'ajout incrémental d'applications métier sans refonte
- **Migration progressive** des fiches sécurité Excel vers EcoSur sans rupture du processus terrain : versionning, calcul automatique des niveaux de risque, recherche avancée
- Choix **MongoDB** vs SQL Server justifié par la nécessité d'adapter le SI à l'évolution rapide des schémas réglementaires (fiches sécurité, formats INPN)
- **Synchronisation différée** introduite spécifiquement pour adapter le SI au contexte mobile/terrain à connectivité variable
- **Documentation technique systématique** des choix d'architecture et des intégrations, dans un contexte sans DSI : essentielle pour assurer la pérennité du SI au-delà de mon alternance


---

## Compétence 6 : Travailler dans une équipe informatique

{{< alert icon="rocket" cardColor="#0ea5e9" textColor="#ffffff" iconColor="#ffffff" >}}
**Compétence en cours d'acquisition** au niveau 3 — *Manager une équipe informatique*
{{< /alert >}}

### Apprentissages Critiques et Traces

#### AC1 - Organiser et partager une veille technologique et informationnelle

{{< keywordList >}}
{{< keyword icon="eye" >}} Veille structurée {{< /keyword >}}
{{< keyword icon="code" >}} Bot Discord RSS {{< /keyword >}}
{{< keyword icon="lightbulb" >}} Partage collaboratif {{< /keyword >}}
{{< /keywordList >}}

**Traces concrètes :**
- **Veille active sur 4 mois** sur trois thématiques complémentaires (Large Language Models, cybersécurité, obsolescence programmée), avec **cartographie itérative** des sources : entreprises (Anthropic, Meta), médias spécialisés (BleepingComputer, Dark Reading, Help Net Security), institutionnels (ARPP, HOP), académiques (IEEE, MIT, Univ. Chicago)
- **Bot Discord RSS développé** pour automatiser collecte et partage : surveillance continue des flux, publication par canaux thématiques, génération de résumés préliminaires, **analyse approfondie déclenchable via API Gemini** (traduction, extraction des points clés, scoring de pertinence)
- **6 articles publiés** sur le forum Moodle pédagogique : partenariat Anthropic-Islande sur l'éducation à l'IA, attaque Lazarus contre l'industrie défense européenne, modèles Meta Mango/Avocado, condamnation Microsoft pour obsolescence Windows 11, WiFi sensing & vie privée (IEEE 802.11bf), faille API WhatsApp — avec participation active aux discussions
- **Veille technique en entreprise** : documentation officielle, forums et exploration avant chaque choix technique majeur (API ArcGIS, Proj4js, JWT, Azure AD, MongoDB, stack alternative Go/Gin)
- Utilisation raisonnée des **outils IA** (Claude pour identification de sources, Gemini pour analyse d'articles), avec regard critique systématique


#### AC2 - Identifier les enjeux de l'économie de l'innovation

{{< keywordList >}}
{{< keyword icon="star" >}} Choix techno {{< /keyword >}}
{{< keyword icon="chart" >}} Open source vs propriétaire {{< /keyword >}}
{{< keyword icon="lightbulb" >}} Obsolescence & cycle de vie {{< /keyword >}}
{{< /keywordList >}}

**Traces concrètes :**
- **Analyse comparative Li-Ion (INR18650-25R) vs LiFePO4 (JGCFR18650-2200)** pour les pièges entomologiques : autonomie, coût, durabilité, sécurité — avec budgétisation chiffrée pour 30 unités
- Choix **open-source** (Node.js, Express, MongoDB, Leaflet, Proj4js) plutôt que solutions propriétaires pour réduire la dépendance fournisseur et le coût total de possession
- **Veille sur l'obsolescence programmée** (suivi de la condamnation Microsoft Windows 11 par le JDP, suivi du budget ADEME 2026 pour l'économie circulaire) → sensibilisation aux enjeux d'éco-conception et de durabilité logicielle
- Évaluation continue de l'écosystème IA (LLM, modèles Meta, recherche Anthropic) pour identifier les opportunités d'intégration dans les outils ECO-MED


#### AC3 - Guider la conduite du changement informatique au sein d'une organisation

{{< keywordList >}}
{{< keyword icon="check" >}} Conduite du changement {{< /keyword >}}
{{< keyword icon="star" >}} Adoption utilisateurs {{< /keyword >}}
{{< keyword icon="globe" >}} Pédagogie {{< /keyword >}}
{{< /keywordList >}}

**Traces concrètes :**
- **Introduction des pratiques agiles** chez ECO-MED (Kanban, GitFlow, Pull Requests, CI) dans une organisation auparavant en cycle en V — effort pédagogique auprès du tuteur et des parties prenantes
- **Démonstrations régulières** des avancées aux utilisateurs clés pour créer une boucle de feedback continue et favoriser l'appropriation
- **Reformulation du besoin EcoSur** : passage d'un simple formulaire de saisie initialement demandé à une solution complète (versionning, scoring de risque, recherche avancée) après dialogue utilisateurs — solution finalement saluée pour avoir répondu à des besoins non explicitement formulés
- **Documentation systématique** des choix techniques et des fonctionnalités pour assurer la continuité après mon départ
- **Adoption généralisée** des applications (Hub, PetalPatrol, RaTouf, EcoSur) par les équipes ECO-MED, avec **retours constructifs réguliers** des utilisateurs qui alimentent les évolutions successives

