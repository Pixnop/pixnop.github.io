---
title: "RateMySlide - Water Slide Review Application"
description: "Full-stack web application for rating and reviewing water slides, built with Symfony 6, API Platform and Vue.js 3. JWT authentication, rate limiting and code quality with PHPStan and SonarQube."
date: 2024-01-15
draft: false
tags: ["Symfony", "Vue.js", "API Platform", "Docker", "JWT", "PHPStan", "MariaDB"]
categories: ["Academic projects"]
series: ["BUT Computer Science"]
showHero: true
heroStyle: "basic"
---

{{< lead >}}
**RateMySlide** is a water slide rating web application developed as a pair project during the BUT Computer Science program (Semester 5). A humorous concept that conceals a serious and professional technical architecture.
{{< /lead >}}


## Project Context

This project was carried out as part of a SAÉ (Learning and Assessment Situation) in the BUT Computer Science program. The educational goal was to master full-stack development with a modern PHP framework (Symfony) coupled with a reactive JavaScript framework (Vue.js), while integrating DevOps and code quality practices.

In pair with Quentin Grelier, we designed and developed a complete application respecting industry standards.

### Technical Goals

- Design and implement a **REST API** respecting standards
- Develop a **modern and reactive user interface**
- Set up a **secure authentication system** (JWT)
- Apply **development best practices** (tests, static analysis, CI/CD)
- Work as a **team** with a professional Git workflow

## API Documentation

The API is fully documented via Swagger UI, allowing endpoints to be tested directly from the browser.

{{< figure src="swagger.png" alt="RateMySlide API Swagger Documentation" caption="Swagger UI interface for exploring and testing the REST API" >}}

## Main Features

### User Management

- **Secure registration**: Robust password validation (strength, length)
- **JWT authentication**: Access tokens with refresh token system
- **Profile management**: Personal information modification

### Slide Management

- **Complete CRUD**: Create, read, update, delete with draft/publication system
- **Advanced filters**: Search by location, type, height, length
- **Multi-criteria sorting**: Personalized result organization
- **Favorites system**: Save favorite slides

### Review System

- **Review publishing**: Detailed reviews on slides
- **Rating**: Star system and comments
- **Automatic linking**: Association with logged-in author

### Application Security

- **Rate limiting**: Anti-bruteforce protection on authentication
- **Symfony Voters**: Granular access control to resources
- **Contextual filtering**: Automatic data display based on user profile

## Technical Architecture

### Technology Stack

| Layer | Technologies |
|-------|--------------|
| **Backend** | Symfony 6.4 LTS, API Platform 4.2, Doctrine ORM 3 |
| **Frontend** | Vue.js 3, Composition API |
| **Database** | MariaDB 10.5 |
| **Authentication** | JWT (Lexik JWT + Gesdinet Refresh Token) |
| **Quality** | PHPStan (level 6), PHP CS Fixer, PHPUnit |
| **DevOps** | Docker, Docker Compose, SonarQube |

### Project Structure

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

## My Role and Contributions

- **Backend architecture**: Setting up the API Platform structure with custom processors
- **Authentication system**: Complete implementation of JWT flow with refresh tokens
- **Security**: Development of rate limiting and authorization voters
- **Code quality**: PHPStan configuration, automated tests setup
- **Dockerization**: Development environment containerization

## Quality Indicators

The project is monitored by SonarQube with the following metrics:

| Metric | Status |
|--------|--------|
| Quality Gate | ✅ Passed |
| Test coverage | Measured |
| Duplicated lines | Controlled |
| Security hotspots | Analyzed |

## Skills Developed

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

This project allowed me to consolidate my full-stack web development skills while discovering essential professional practices: clean software architecture, application security, and continuous integration.

{{< keywordList >}}
{{< keyword icon="code" >}} Symfony 6 {{< /keyword >}}
{{< keyword icon="code" >}} Vue.js 3 {{< /keyword >}}
{{< keyword icon="shield" >}} JWT {{< /keyword >}}
{{< keyword icon="server" >}} API Platform {{< /keyword >}}
{{< keyword icon="cube" >}} Docker {{< /keyword >}}
{{< /keywordList >}}
