---
title: "Learning Portfolio - BUT 2"
description: "My learnings for the three competencies that stop at level 2 in the RACDV track of the Computer Science BUT"
showDate: false
showAuthor: false
showReadingTime: false
showTableOfContents: true
---

{{< lead >}}
This page presents my learnings for the three competencies that stop at level 2 in the RACDV track of the Computer Science BUT.
{{< /lead >}}

## 🎯 Competency 2: Optimize Applications

### Level 1: Understand and Build Algorithms

#### CE2.01 - By formalizing and modeling complex situations

**Achieved learnings:**
- Mastery of UML modeling (class, sequence, use case diagrams)
- Use of formal methods to represent complex problems
- Application of design patterns (Singleton, Factory, Observer)

**Evidence:**
- UML diagram for designing a library management application
- Implementation of MVC pattern in the task management project
- Graded assignment on modeling a reservation system (grade: 16/20)

**Reflection:**
I developed my ability to abstract complex problems using different formalisms. The task management project particularly allowed me to practice object-oriented modeling with a complete MVC architecture. I learned to identify entities, their relationships, and represent them in a clear and maintainable way.

#### CE2.02 - By cataloging common algorithms and data structures

**Achieved learnings:**
- Mastery of fundamental data structures (lists, trees, graphs, hash tables)
- Knowledge of sorting algorithms (quicksort, mergesort, heapsort) and searching
- Understanding of algorithmic complexity (Big O notation)

**Evidence:**
- Implementation of an AVL tree in Java with automatic rebalancing
- Lab comparing performance of different sorting algorithms
- Use of Dijkstra for route calculation in the carpool app

**Reflection:**
Through various projects and labs, I built a solid algorithmic "toolbox". I now know how to choose the appropriate data structure based on context (HashMap for O(1) access, TreeMap for ordered data, etc.).

### Level 2: Select Appropriate Algorithms to Solve a Given Problem

#### CE2.01 - By formalizing and modeling complex situations

**Achieved learnings:**
- In-depth analysis of constraints before algorithmic choice
- Modeling optimization problems (dynamic programming, greedy algorithms)
- Use of algorithmic design methods (divide and conquer, backtracking)

**Evidence:**
- SAE optimizing the matching system for the carpool application
- Personal project of optimized scheduling algorithm
- Participation in programming competition (ranking: top 15%)

**Reflection:**
I learned not to rush to the first solution. For the carpool application, I first modeled the problem as a weighted graph before choosing a variant of the maximum matching algorithm. This methodical approach allowed me to reduce complexity from O(n³) to O(n²log n).

#### CE2.02 - By cataloging common algorithms and data structures

**Achieved learnings:**
- Advanced use of specialized data structures (Trie, Bloom filter, Skip list)
- Implementation of complex graph algorithms (Bellman-Ford, Floyd-Warshall, A*)
- Mastery of probabilistic and approximation algorithms

**Evidence:**
- Implementation of a Trie for autocompletion in the task manager
- Use of A* algorithm for navigation in a game prototype
- Benchmark comparing Bloom filter vs HashSet for duplicate detection

**Reflection:**
My algorithmic repertoire has significantly expanded. I no longer settle for basic structures but seek the most suitable solutions. For example, using a Bloom filter in the Discord bot reduced memory usage by 90% for spam detection.

#### CE2.03 - By relying on reasoning patterns

**Achieved learnings:**
- Systematic application of algorithmic patterns (two pointers, sliding window)
- Reasoning by recurrence and induction
- Proof of algorithm correctness

**Evidence:**
- Analysis document of my modified merge sort algorithm's correctness
- Solving algorithmic problems with different approaches
- Presentation on "sliding window" pattern to the class

**Reflection:**
I developed a methodical approach to solving algorithmic problems. I always start by identifying the underlying pattern (is it a sliding window problem? dynamic programming?). This method allowed me to efficiently solve 80% of the advanced algorithmic module problems.

#### CE2.04 - By justifying choices and validating results

**Achieved learnings:**
- Comparative analysis of solutions (time, space, readability)
- Performance testing and benchmarking
- Validation through unit tests and property tests

**Evidence:**
- Comparative analysis report of 3 algorithms for the recommendation system
- Unit test suite with 95% coverage for the sorting module
- Benchmark graphs showing performance evolution

**Reflection:**
I no longer settle for implementing a solution that "works". For each important algorithmic choice, I document the alternatives considered, reasons for the final choice, and validate through tests. This rigor has prevented several performance issues in production.

---

## 🖥️ Competency 3: Administer Complex Communicating Computer Systems

### Level 1: Install and Configure a Workstation

#### CE3.01 - By securing the information system

**Achieved learnings:**
- Firewall and antivirus configuration
- User and permission management under Linux
- Implementation of basic security policies

**Evidence:**
- Automation script for secure Ubuntu configuration
- Documentation of a development workstation security guide
- Lab configuring iptables for a web server

**Reflection:**
I learned the importance of security from system installation. My installation script automates best practices: disabling SSH root, firewall configuration, fail2ban installation. This proactive approach has become systematic in all my projects.

### Level 2: Deploy Services in a Network Architecture

#### CE3.01 - By securing the information system

**Achieved learnings:**
- VPN and SSH tunnel configuration
- SSL/TLS certificate setup with Let's Encrypt
- API security with OAuth2 and JWT

**Evidence:**
- Nginx reverse proxy configuration with SSL
- Secure deployment of task manager API with JWT authentication
- Documentation of production server security procedures

**Reflection:**
Security has become a central concern in my deployments. For my projects, I implemented multi-layered secure architecture: mandatory HTTPS, JWT authentication with refresh tokens, rate limiting, and centralized logs. This experience prepared me for enterprise security requirements.

#### CE3.02 - By offering optimal service quality

**Achieved learnings:**
- Load balancer configuration (HAProxy, Nginx)
- Monitoring setup (Prometheus, Grafana)
- Network performance optimization

**Evidence:**
- Grafana dashboard for real-time infrastructure monitoring
- Load balancing configuration with automatic health checks
- API response time analysis and optimization report

**Reflection:**
I learned to think beyond just "it works". For the ECO-MED hub project, I set up comprehensive monitoring to detect problems before they impact users. Load balancing maintained 99.9% availability even during usage peaks.

#### CE3.03 - By applying current standards and best practices

**Achieved learnings:**
- Compliance with ISO 27001 security standards
- Application of DevOps and Infrastructure as Code principles
- Documentation according to ITIL standards

**Evidence:**
- Infrastructure as Code with Docker Compose and Kubernetes
- Runbooks for operational procedures
- GDPR compliance checklist for data storage

**Reflection:**
My professional experience exposed me to enterprise requirements. I had to learn to document rigorously, follow established procedures, and respect strict standards. This rigor, initially constraining, has become natural and helps me produce professional quality work.

#### CE3.04 - By ensuring business continuity

**Achieved learnings:**
- Automated backup implementation
- High availability configuration
- Disaster recovery plans (DRP)

**Evidence:**
- Incremental backup system script with rotation
- Multi-zone deployment architecture for high availability
- Detailed DRP document for task manager infrastructure

**Reflection:**
Service continuity is critical. I implemented automatic backup systems for my projects (3-2-1 backup rule), database replication, and regularly tested restoration procedures. An incident on the Discord bot (data loss) made me aware of the importance of these preventive measures.

---

## 🗄️ Competency 4: Manage Information Data

### Level 1: Design and Implement a Database

#### CE4.01 - By respecting regulations

**Achieved learnings:**
- Understanding and applying GDPR
- Data anonymization and pseudonymization
- User consent management

**Evidence:**
- GDPR management module for the carpool application
- Compliant privacy policy written
- GDPR compliance audit report for the task manager

**Reflection:**
GDPR transformed how I design databases. For the carpool application, I implemented from conception: minimization of collected data, retention periods, automated right to be forgotten. This "privacy by design" approach is now systematic in my projects.

### Level 2: Optimize a Database

#### CE4.01 - By respecting privacy regulations

**Achieved learnings:**
- Encryption of sensitive data in database
- Audit trails and compliance logs
- Fine-grained access rights management

**Evidence:**
- Implementation of AES-256 encryption for personal data
- Architecture with PII data separation in dedicated database
- Test scenarios for GDPR compliance

**Reflection:**
I deepened my knowledge of data protection. For the ECO-MED hub, I implemented encryption at rest and in transit, immutable audit logs, and granular permission management. These measures ensure compliance while maintaining performance.

#### CE4.02 - By respecting economic, societal and ecological stakes

**Achieved learnings:**
- Query optimization to reduce consumption
- Intelligent archiving of old data
- Green IT and eco-design

**Evidence:**
- Benchmark showing 70% CPU time reduction through query optimization
- Partitioning strategy to minimize disk space
- Report on data infrastructure environmental impact

**Reflection:**
I became aware of the environmental impact of data storage. For my projects, I implemented a progressive archiving strategy: hot data on SSD, warm on HDD, cold in object storage. This approach reduced costs by 60% and carbon footprint by 40%.

#### CE4.03 - By relying on mathematical foundations

**Achieved learnings:**
- Relational algebra and query optimization
- Statistics for performance analysis
- Set theory applied to databases

**Evidence:**
- Using relational algebra to optimize complex joins
- Implementation of recommendation system based on cosine similarity
- Database sizing calculations based on statistical models

**Reflection:**
Mathematics is essential for optimizing databases. I used relational algebra to rewrite complex queries, going from 30s to 0.5s execution time. Understanding B-tree indexes and their logarithmic complexity guides my indexing choices.

#### CE4.04 - By ensuring consistency and quality

**Achieved learnings:**
- Advanced integrity constraints
- ACID transactions and isolation levels
- Automated consistency tests

**Evidence:**
- Triggers and stored procedures to maintain consistency
- Data integrity test suite
- Monitoring with automatic alerts on detected inconsistencies

**Reflection:**
Data quality is crucial. I implemented multi-level validation mechanisms for each project: database constraints, application validation, and periodic consistency tests. This "defense in depth" approach maintained 99.99% integrity on critical data.

---

## Conclusion

These three competencies allowed me to develop a comprehensive approach to software development:
- **Optimization**: I can choose and implement the most suitable algorithms
- **Administration**: I can deploy and maintain complex infrastructures
- **Data Management**: I design performant and compliant data systems

This technical versatility, combined with my practical experience, ideally prepares me for continuing my journey in application development.

{{< button href="/projets" >}}
Discover my projects
{{< /button >}}

{{< button href="/competences" >}}
View my technical skills
{{< /button >}}