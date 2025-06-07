---
title: "BlackArsenal - PHP MVC E-commerce Site"
description: "University project for an online store specializing in fictional video game weapons, developed in PHP with clean MVC architecture and MySQL database."
date: 2024-03-15
draft: false
tags: ["PHP", "MVC", "MySQL", "E-commerce", "Bootstrap"]
categories: ["University projects"]
series: ["Web development"]
showHero: true
heroStyle: "basic"
---

{{< lead >}}
**BlackArsenal** is a university e-commerce project developed in PHP with MVC architecture, specializing in fictional video game weapon sales to demonstrate back-end web development skills.
{{< /lead >}}

{{< badge >}}
University Project
{{< /badge >}}
{{< badge >}}
PHP MVC
{{< /badge >}}
{{< badge >}}
E-commerce
{{< /badge >}}

{{< figure src="accueil- BlackArsenal.png" alt="BlackArsenal - Homepage" caption="BlackArsenal website homepage interface" >}}

## Project Overview

{{< timeline >}}

{{< timelineItem icon="graduation-cap" header="Academic Context" badge="2024" subheader="University Project" >}}
Development of a complete e-commerce site as part of a university course on web development with PHP. The objective was to master MVC architecture and object-oriented programming concepts.
{{< /timelineItem >}}

{{< timelineItem icon="code" header="MVC Architecture" badge="PHP 7.4+" subheader="Modular Structure" >}}
Implementation of a clean and maintainable Model-View-Controller architecture:
- **Model**: Data management and MySQL database interaction
- **View**: Responsive user interface with Bootstrap
- **Controller**: Business logic and request routing
{{< /timelineItem >}}

{{< timelineItem icon="database" header="Database" badge="MySQL" subheader="Relational Structure" >}}
Design of a normalized database with well-structured relational tables, included creation script and test data for immediate demonstration.
{{< /timelineItem >}}

{{< /timeline >}}

## Technical Stack

{{< swatches "#8B5CF6" "#3B82F6" "#10B981" >}}

{{< keywordList >}}
{{< keyword icon="code" >}} **PHP 7.4+** - Object-oriented backend {{< /keyword >}}
{{< keyword icon="database" >}} **MySQL** - Relational database {{< /keyword >}}
{{< keyword icon="globe" >}} **Bootstrap 4** - Responsive CSS framework {{< /keyword >}}
{{< keyword icon="shield" >}} **MVC** - Modular architecture {{< /keyword >}}
{{< /keywordList >}}

## Main Features

### 1. User Management

{{< gallery >}}
  <img src="page connexion - BlackArsenal.png" class="grid-w50" />
  <img src="page creation de compte - BlackArsenal.png" class="grid-w50" />
{{< /gallery >}}

- **Complete authentication system** with registration and login
- **User session management**
- **User profiles** with personalized information
- **Role system** (administrator/standard user)

### 2. Product Catalog

{{< gallery >}}
  <img src="liste des armes - BlackArsenal.png" class="grid-w50" />
  <img src="page arme - BlackArsenal.png" class="grid-w50" />
{{< /gallery >}}

- **Product display** with pagination
- **Detailed pages** for each product
- **Category system** to organize products
- **Images and detailed descriptions**
- **Real-time pricing and availability**

### 3. Administration Interface

{{< gallery >}}
  <img src="formulaire creation arme - BlackArsenal.png" class="grid-w50" />
  <img src="formulaire modification armes - BlackArsenal.png" class="grid-w50" />
{{< /gallery >}}

- **Complete CRUD** (Create, Read, Update, Delete) for products
- **Add interface** for new products
- **Inline editing** of product characteristics
- **Stock and price management**
- **Image upload** for products

### 4. User Experience

{{< gallery >}}
  <img src="liste des armes contendante - BlackArsenal.png" class="grid-w50" />
  <img src="page arme contendante- BlackArsenal.png" class="grid-w50" />
{{< /gallery >}}

- **Responsive design** adapted for mobile and tablets
- **Intuitive navigation** with dropdown menu
- **Product search and filtering**
- **Modern user interface** with Bootstrap

## Database

The database features:
- **Complete normalized schema**
- **Well-structured relational tables**
- **Test data** for products and users
- **Optimized relationships** between entities

```sql
-- BlackArsenal Database Structure

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

### Table Architecture
- {{< icon "graduation-cap" >}} **Utilisateur**: User account management and authentication
- {{< icon "tag" >}} **Arme**: Main catalog with common characteristics
- {{< icon "shield" >}} **ArmeCorpsACorps**: Specialization for melee weapons
- {{< icon "fire" >}} **Arme_a_feu**: Specialization for ranged weapons
- {{< icon "star" >}} **Stand**: Special category of fictional weapons
- {{< icon "heart" >}} **Commande**: Order management system

## Demonstrated Skills

{{< carousel images="{formulaire creation arme - BlackArsenal.png,formulaire modification armes - BlackArsenal.png,liste des armes - BlackArsenal.png,page arme - BlackArsenal.png}" aspectRatio="16-9" interval="3000" >}}

{{< alert icon="lightbulb" cardColor="#10b981" textColor="#ffffff" iconColor="#ffffff" >}}
**Key Learning** - Complete mastery of web development cycle with PHP MVC
{{< /alert >}}

### Backend Development
- {{< icon "code" >}} {{< badge >}}Object-oriented PHP{{< /badge >}} with classes and inheritance
- {{< icon "shield" >}} {{< badge >}}MVC Architecture{{< /badge >}} clean and modular
- {{< icon "code" >}} {{< badge >}}Database{{< /badge >}} with PDO and secure queries
- {{< icon "lock" >}} {{< badge >}}Security{{< /badge >}} SQL injection protection

### Frontend Development
- {{< icon "globe" >}} {{< badge >}}Semantic HTML5{{< /badge >}} well-structured
- {{< icon "globe" >}} {{< badge >}}Responsive CSS3{{< /badge >}} adaptive design
- {{< icon "globe" >}} {{< badge >}}Bootstrap{{< /badge >}} professional interface
- {{< icon "code" >}} {{< badge >}}JavaScript{{< /badge >}} dynamic interactions

### Project Management
- {{< icon "shield" >}} {{< badge >}}Organized Code{{< /badge >}} maintainable structure
- {{< icon "lightbulb" >}} {{< badge >}}Documentation{{< /badge >}} complete technical docs
- {{< icon "github" >}} {{< badge >}}Versioning{{< /badge >}} file management

## Educational Aspects

{{< mermaid >}}
graph TD
    A[Requirements Analysis] --> B[MVC Design]
    B --> C[Database Modeling]
    C --> D[Backend Development]
    D --> E[Frontend Interface]
    E --> F[Testing & Debugging]
    F --> G[Documentation]
    
    B --> H[Separation of Concerns]
    D --> I[Security]
    E --> J[UX/UI Design]
    F --> K[Best Practices]
{{< /mermaid >}}

This project illustrates a methodical approach to web development:
- {{< icon "shield" >}} **Separation of concerns** with MVC pattern
- {{< icon "check" >}} **Best practices** in professional web development
- {{< icon "lock" >}} **Securing** a complete web application
- {{< icon "globe" >}} **Frontend/backend integration** harmonious
- {{< icon "code" >}} **Relational database design**

## Installation and Configuration

{{< alert icon="download" cardColor="#6366f1" textColor="#ffffff" iconColor="#ffffff" >}}
**Ready to Use** - Project delivered with all necessary elements for immediate deployment
{{< /alert >}}

The project includes:
- {{< icon "code" >}} **Database** design and implementation
- {{< icon "wand-magic-sparkles" >}} **Simple configuration** for local environment
- {{< icon "lightbulb" >}} **Complete technical documentation**
- {{< icon "bug" >}} **Test data** for demonstration

{{< alert icon="info" cardColor="#3b82f6" textColor="#ffffff" iconColor="#ffffff" >}}
**Academic Project** - This site simulates the sale of fictional video game weapons in a purely educational context to demonstrate web development skills.
{{< /alert >}}


{{< keywordList >}}
{{< keyword icon="code" >}} PHP {{< /keyword >}}
{{< keyword icon="shield" >}} MVC {{< /keyword >}}
{{< keyword icon="code" >}} MySQL {{< /keyword >}}
{{< keyword icon="globe" >}} E-commerce {{< /keyword >}}
{{< keyword icon="graduation-cap" >}} University {{< /keyword >}}
{{< /keywordList >}}