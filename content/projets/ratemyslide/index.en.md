---
title: "RateMySlide - Water Slide Review Application"
description: "Full-stack web application for rating and reviewing water slides, built with Symfony and Vue.js"
date: 2024-01-15
draft: false
tags: ["Symfony", "Vue.js", "API Platform", "Docker", "JWT", "PHPStan", "MariaDB"]
categories: ["Academic projects"]
series: ["BUT Computer Science"]
showHero: true
heroStyle: "basic"
---

# RateMySlide - Water Slide Review Application

A web application for rating water slides, developed as a pair project during the BUT Computer Science program (Semester 5). A humorous concept that conceals a serious and professional technical architecture.

## 🎯 Objective

Develop a complete web application following industry best practices: REST API with Symfony and API Platform, reactive frontend with Vue.js, secure JWT authentication, and DevOps practices integration.

## 🎢 Project Context

The educational goal was to master full-stack development with a modern PHP framework coupled with a reactive JavaScript framework, while integrating DevOps and code quality practices.

### Technical Goals
- Design and implement a **REST API** respecting standards
- Develop a **modern and reactive user interface**
- Set up a **secure authentication system** (JWT)
- Apply **development best practices** (tests, static analysis, CI/CD)
- Work as a **team** with a professional Git workflow

## 🛠️ Technical Stack

| Layer | Technologies |
|-------|--------------|
| **Backend** | Symfony 6.4 LTS, API Platform 4.2, Doctrine ORM 3 |
| **Frontend** | Vue.js 3, Composition API |
| **Database** | MariaDB 10.5 |
| **Authentication** | JWT (Lexik JWT + Gesdinet Refresh Token) |
| **Quality** | PHPStan (level 6), PHP CS Fixer, PHPUnit |
| **DevOps** | Docker, Docker Compose, SonarQube |

## 📖 API Documentation

The API is fully documented via Swagger UI, allowing endpoints to be tested directly from the browser.

![RateMySlide API Swagger Documentation](swagger.png)

## ⚡ Implemented Features

### User Management
- 👤 **Registration** with robust password validation (strength, length)
- 🔐 **JWT authentication** with refresh token
- ⚙️ **Profile management**

### Slide Management
- 📝 **Complete CRUD** with draft/publication system
- 🔍 **Advanced filters** (location, type, height, length)
- 📊 **Multi-criteria sorting**
- ⭐ **Personalized favorites system**

### Review System
- 💬 **Review publishing** on slides
- ⭐ **Rating and comments**
- 🔗 **Automatic linking** with author

### Security
- 🛡️ **Rate limiting** on authentication (anti-bruteforce protection)
- 🔒 **Symfony Voters** for granular access control
- 🔐 **Automatic data filtering** based on user context

## 👨‍💻 My Role and Contributions

In pair with Quentin Grelier, I mainly worked on:

- **Backend architecture**: Setting up the API Platform structure with custom processors
- **Authentication system**: Complete implementation of JWT flow with refresh tokens
- **Security**: Development of rate limiting and authorization voters
- **Code quality**: PHPStan configuration, automated tests setup
- **Dockerization**: Development environment containerization

## 📁 Project Architecture

```
src/
├── Controller/          # Controllers and reusable traits
├── Doctrine/Extension/  # Automatic query filtering
├── Entity/              # Doctrine entities with traits
├── Enum/                # PHP 8.1 Enumerations
├── EventSubscriber/     # Event handling (rate limiting)
├── Repository/          # Data access layer
├── Security/Voter/      # Granular access control
└── State/               # API Platform processors
```

## 📊 Quality Indicators

The project is monitored by SonarQube with the following metrics:

| Metric | Status |
|--------|--------|
| Quality Gate | ✅ Passed |
| Test coverage | Measured |
| Duplicated lines | Controlled |
| Security hotspots | Analyzed |

## 🎓 Skills Developed

### Backend Development
- Mastery of **Symfony 6** and its ecosystem (Doctrine, Security, Events)
- **REST API** design with API Platform
- Use of **PHP 8.1+ features** (Enums, Attributes, Traits)

### Application Security
- **JWT authentication** implementation
- Protection against **brute force** attacks
- Fine-grained **authorization management** with the Voter pattern

### DevOps and Quality
- Containerization with **Docker**
- Static analysis with **PHPStan**
- Continuous integration with **SonarQube**
- Automated testing with **PHPUnit**

### Collaborative Work
- Using **Git** as a team (branches, pull requests, code review)
- Technical documentation (README, OpenAPI)

---

*RateMySlide allowed me to consolidate my full-stack web development skills while discovering essential professional practices: clean software architecture, application security, and continuous integration.*
