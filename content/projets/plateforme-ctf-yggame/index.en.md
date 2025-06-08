---
title: "YGGAME CTF Platform - Capture The Flag"
description: "Creation of a complete Capture The Flag platform for the YGGAME association, based on CTFd and deployed via Docker on VPS. The platform offers various cybersecurity challenges with Discord notification system and advanced administration interface."
date: 2024-06-15
draft: false
tags: ["CTF", "Docker", "CTFd", "DevOps", "Cybersecurity", "Full Stack", "Python", "PHP", "C", "Assembly"]
categories: ["University projects"]
series: ["Web development"]
showHero: true
heroStyle: "basic"
---

{{< lead >}}
**YGGAME CTF Platform** is an ambitious university project creating a complete Capture The Flag platform for the YGGAME association, integrating various cybersecurity challenges and a robust infrastructure based on Docker and CTFd.
{{< /lead >}}

{{< badge >}}
Academic Project
{{< /badge >}}
{{< badge >}}
Team of 4
{{< /badge >}}
{{< badge >}}
Docker & CTFd
{{< /badge >}}

## Project Context

This project was carried out as part of a SAÉ (Learning and Assessment Situation) in the Computer Science BUT program. The YGGAME association, specialized in organizing events around video games and IT, wanted to diversify its activities by offering cybersecurity competitions in the form of Capture The Flag (CTF).

Our team of 4 students was mandated to design and implement a complete web platform for managing these CTF events.

## Main Features

### Infrastructure and Deployment

- **CTFd Platform**: Using CTFd as a base, customized to meet specific needs
- **Docker Deployment**: Containerized architecture for efficient management
- **Dedicated VPS**: Hosting on virtual private server
- **Dockge Interface**: Simplified Docker container administration
- **Automated Backups**: Regular backup system

### Notification and Communication System

- **Discord Bot**: Real-time event notifications
- **Multilingual Translation**: Interface accessible in multiple languages
- **Dynamic Scoring**: Real-time participant ranking

### Developed Challenges

#### 1. Drupal Challenge with JSON API
- Exploration of a vulnerable Drupal JSON API
- Technologies: Drupal 9, MySQL, Docker
- Objective: Extract a hidden flag from content

#### 2. SQL Injection Challenge
- PHP application vulnerable to SQL injections
- Technologies: PHP 7.4, MySQL, Apache
- Objective: Exploit security vulnerabilities

#### 3. GDPR Challenge
- Interactive questionnaire on GDPR compliance
- Technologies: PHP, CSS, JavaScript
- Objective: Test legal knowledge

#### 4. Low-Level Challenge (Buffer Overflow)
- Vulnerable C program with Flask interface
- Technologies: C, Python, Flask, Docker
- Objective: Exploit a buffer overflow

#### 5. SSH Challenge
- Shell restriction bypass
- Technologies: OpenSSH, Bash, Linux
- Objective: Bypass security mechanisms

#### 6. Assembly Challenge
- Reverse engineering of an assembly program
- Technologies: NASM, x86 Assembly
- Objective: Understand and exploit the code

#### 7. Bluetooth Challenge - Mystery Exchange
- Analysis of Bluetooth communications
- Technologies: Python, Wireshark, Docker
- Objective: Intercept and decrypt exchanges

#### 8. BodyLanguage - Gesture Challenge
- BrainFuck programming through motion detection
- Technologies: Python, OpenCV, MediaPipe, Flask
- Objective: "Dance" the code to get the flag

## Screenshots

{{< figure src="Page d'accueil CTFd.png" alt="CTFd platform homepage" caption="Customized welcome interface of our CTF platform" >}}

{{< figure src="Page des challenges CTFd.png" alt="CTFd challenges page" caption="Overview of available challenges with their category and points" >}}

{{< figure src="Diagramme de sequence complet du projet CTF.png" alt="Project sequence diagram" caption="Complete architecture of interactions between different components" >}}

## Technical Architecture

### Technology Stack

- **Backend**: CTFd (Python), Flask, PHP
- **Frontend**: Customized CTFd interface
- **Database**: MySQL
- **Containerization**: Docker, Docker Compose
- **Deployment**: Linux VPS
- **Monitoring**: Dockge
- **Communication**: Discord API

### Security

- SSL/TLS certificates for encryption
- Environment isolation via Docker
- User input sanitization
- GDPR compliance for personal data

## Development Methodology

### Agile Approach

- **5 development sprints**
- **Product Owner**: Raphaël Lambert
- **Scrum Master**: Quentin Grelier
- **Developers**: Léon Fievet, Aurélien Arqué

### Organization

- Daily 10-minute meetings
- Sprint reviews with client (Paul Budzynski)
- Continuous documentation on Git
- Rigorous testing of each challenge

## Results and Learning

### Technical Skills

- In-depth mastery of Docker and containerization
- Full-stack development with various technologies
- Implementation of security mechanisms
- Network infrastructure management

### Organizational Skills

- Agile project management in real conditions
- Effective client communication
- Structured teamwork
- Adaptation to technical constraints

### Project Strengths

- Modular and scalable architecture
- Intuitive user interface
- Diversity of proposed challenges
- Complete documentation
- Respect for deadlines and specifications

## Future Perspectives

- Addition of new challenge types
- Advanced gamification system
- Complete interface translation
- Integration of performance analysis tools
- Multi-site competition mode

This project was an enriching experience combining technical development, project management, and teamwork. It allowed us to put our knowledge into practice while developing a concrete solution meeting the real needs of an association.