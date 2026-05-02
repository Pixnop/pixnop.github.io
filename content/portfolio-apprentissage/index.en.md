---
title: "Learning Portfolio"
description: "My learnings for the six competencies of the IAMSI track (Application Integration and Information System Management) of the Computer Science BUT"
showDate: false
showAuthor: false
showReadingTime: false
showTableOfContents: true
---

{{< lead >}}
This page presents my learnings for the six competencies of the **Application Integration and Information System Management (IAMSI)** track of the Computer Science BUT. Three competencies stop at level 2 (C2, C3, C4) and three are developed up to level 3 (C1, C5, C6), mainly through my work-study program at **ECO-MED** (environmental consulting firm).
{{< /lead >}}

## Competency 1: Develop an Application

{{< alert icon="rocket" cardColor="#0ea5e9" textColor="#ffffff" iconColor="#ffffff" >}}
**Competency in progress** at level 3 — *Specialize on a set of platforms with qualitative monitoring*
{{< /alert >}}

### Critical Learning Outcomes and Evidence

#### CL1 - Choose and implement appropriate architectures

{{< keywordList >}}
{{< keyword icon="code" >}} 3-tier architecture {{< /keyword >}}
{{< keyword icon="fire" >}} Modular services {{< /keyword >}}
{{< keyword icon="star" >}} SOLID & OWASP {{< /keyword >}}
{{< /keywordList >}}

**Concrete evidence:**
- **3-tier architecture** (presentation / business / data) of the [**Hub ECO-MED**](/projets/hub-eco-med/), with an abstraction layer to isolate external systems (SX Everwin, ArcGIS, Azure AD)
- **Service-oriented architecture** for [**RaTouf**](/projets/ratouf/): AuthService, ApiService, ChiroptereService, ReferentialService, DataProcessor, ActivityLevelCalculator, SessionValidator
- Documented justification of Node.js + Express + MongoDB choices against constraints: schema flexibility (evolving regulations), learning curve for project handover, performance on limited workstations
- Application of **SOLID** principles and **OWASP** recommendations across all ECO-MED projects


#### CL2 - Develop applications on specific platforms

{{< keywordList >}}
{{< keyword icon="globe" >}} Responsive web {{< /keyword >}}
{{< keyword icon="code" >}} Field mobile {{< /keyword >}}
{{< keyword icon="lightbulb" >}} Specialized business apps {{< /keyword >}}
{{< /keywordList >}}

**Concrete evidence:**
- [**PetalPatrol**](/projets/petalpatrol/) — field interface designed for tablets in real conditions: large buttons, full-sun readability, intermittent connectivity support
- [**EcoSur**](/projets/hub-eco-med/) — deferred synchronization for offline use in low-coverage areas, with automatic conflict resolution on reconnection
- Multi-projection conversion (Lambert 93, UTM, WGS84) via **Proj4js** in-browser to support national and international contexts


#### CL3 - Audit an application

{{< keywordList >}}
{{< keyword icon="eye" >}} Quality audit {{< /keyword >}}
{{< keyword icon="shield" >}} Security audit {{< /keyword >}}
{{< keyword icon="check" >}} Automated tests {{< /keyword >}}
{{< /keywordList >}}

**Concrete evidence:**
- **IT fleet audit at ECO-MED** carried out during the internship: renewal analysis, hardware inventory, costed recommendations
- Automated **Jest** tests on critical components: RaTouf CSV parser, chiroptera activity computations, geographic coordinate conversions
- Implementation of a **centralized logging system** (user actions, external API calls, errors) for production audit and diagnostics
- Code instrumentation for fine behavior analysis (large CSV processing optimization in RaTouf)
- **OWASP security audit** carried out on the ECO-MED applications (confidential report, not published)


#### CL4 - Integrate solutions in a production environment

{{< keywordList >}}
{{< keyword icon="docker" >}} Linux deployment {{< /keyword >}}
{{< keyword icon="fire" >}} CI / CD {{< /keyword >}}
{{< keyword icon="code" >}} GitFlow {{< /keyword >}}
{{< /keywordList >}}

**Concrete evidence:**
- **Production deployment** of the Hub and business apps on Debian Linux VM + NGINX at ECO-MED, with sizing co-defined with the IT provider
- Full **GitFlow**: `main` / `dev` / `feature/*` branches, mandatory Pull Requests before merge, dedicated server-config branch
- **GitHub continuous integration**: tests run automatically on each push to detect regressions
- **JWT + Azure AD SSO** integrated with ECO-MED's existing infrastructure, with periodic token validity check and automatic reconnection


---

## Competency 2: Optimize Applications

{{< alert icon="star" cardColor="#8b5cf6" textColor="#ffffff" iconColor="#ffffff" >}}
**Competency acquired** at level 2
{{< /alert >}}

### Critical Learning Outcomes and Evidence

#### CL1 - Choose appropriate complex data structures for the problem

{{< keywordList >}}
{{< keyword icon="code" >}} Advanced structures {{< /keyword >}}
{{< keyword icon="star" >}} Specialized trees {{< /keyword >}}
{{< keyword icon="fire" >}} Hash tables {{< /keyword >}}
{{< /keywordList >}}

**Concrete evidence:**
- **Trie implementation** for autocompletion in [**Hub ECO-MED**](/projets/hub-eco-med/) - instant search among 5000+ species
- **Graph structures** for matching algorithm in [**Eco-Carpooling**](/projets/eco-voiturage/)
- **Skip List** implemented in lab work for optimized ordered data management

{{< alert icon="check" cardColor="#10b981" textColor="#000000" iconColor="#ffffff" >}}
**Mastery validated** - I can analyze requirements and choose the most suitable structure (time vs space complexity)
{{< /alert >}}

#### CL2 - Use appropriate algorithmic techniques for complex problems

{{< keywordList >}}
{{< keyword icon="lightbulb" >}} Dynamic programming {{< /keyword >}}
{{< keyword icon="shield" >}} Heuristic methods {{< /keyword >}}
{{< keyword icon="code" >}} Artificial intelligence {{< /keyword >}}
{{< /keywordList >}}

**Concrete evidence:**
- **Genetic algorithm** for route optimization in [**PetalPatrol**](/projets/petalpatrol/) - 40% distance reduction
- **A\*** implemented for navigation in mobile app [**SkyFuel**](/projets/skyfuel/)
- **Dynamic programming** applied to knapsack problem in SAÉ (grade: 18/20)

{{< alert icon="star" cardColor="#f59e0b" textColor="#000000" iconColor="#ffffff" >}}
**Expertise acquired** - I master advanced algorithmic paradigms and can apply them to real problems
{{< /alert >}}

#### CL3 - Understand issues and means of securing data and code

{{< keywordList >}}
{{< keyword icon="lock" >}} AES encryption {{< /keyword >}}
{{< keyword icon="shield" >}} SQL injection {{< /keyword >}}
{{< keyword icon="eye" >}} Code audit {{< /keyword >}}
{{< /keywordList >}}

**Concrete evidence:**
- **Complete security** for [**BlackArsenal**](/projets/blackarsenal/): XSS, CSRF, SQL injection protection
- **AES-256 encryption** of sensitive data in [**Hub ECO-MED**](/projets/hub-eco-med/) database
- **Security challenges creation** for [**YGGAME CTF Platform**](/projets/plateforme-ctf-yggame/): buffer overflow, SQL injection, reverse engineering
- **Security audit report** performed with OWASP ZAP on my projects

{{< alert icon="shield" cardColor="#ef4444" textColor="#000000" iconColor="#ffffff" >}}
**Integrated security** - Systematic application of "security by design" principle in all developments
{{< /alert >}}

#### CL4 - Evaluate environmental and societal impact of proposed solutions

{{< keywordList >}}
{{< keyword icon="fire" >}} Green IT {{< /keyword >}}
{{< keyword icon="star" >}} Eco-design {{< /keyword >}}
{{< keyword icon="check" >}} Carbon footprint {{< /keyword >}}
{{< /keywordList >}}

**Concrete evidence:**
- **Energy optimization** of [**SkyFuel**](/projets/skyfuel/): 60% battery consumption reduction
- **Carbon impact analysis** documented for [**Hub ECO-MED**](/projets/hub-eco-med/) deployment
- **Lazy loading and pagination** implemented to reduce bandwidth by 70%

{{< alert icon="lightbulb" cardColor="#10b981" textColor="#000000" iconColor="#ffffff" >}}
**Environmental awareness** - Systematic evaluation of environmental footprint of my technical solutions
{{< /alert >}}

---

## Competency 3: Administer Complex Communicating Computer Systems

{{< alert icon="shield" cardColor="#8b5cf6" textColor="#ffffff" iconColor="#ffffff" >}}
**Competency acquired** at level 2
{{< /alert >}}

### Critical Learning Outcomes and Evidence

#### CL1 - Design and develop communicating applications

{{< keywordList >}}
{{< keyword icon="globe" >}} REST APIs {{< /keyword >}}
{{< keyword icon="code" >}} WebSockets {{< /keyword >}}
{{< keyword icon="shield" >}} Microservices {{< /keyword >}}
{{< /keywordList >}}

**Concrete evidence:**
- **Complete REST API** for [**Hub ECO-MED**](/projets/hub-eco-med/) with OpenAPI documentation
- **WebSockets** implemented in [**PetalPatrol**](/projets/petalpatrol/) for real-time synchronization
- **Microservices architecture** with Docker Compose to decouple services
- **Discord Bot and CTFd API** integrated in [**YGGAME CTF Platform**](/projets/plateforme-ctf-yggame/) for real-time notifications

{{< alert icon="fire" cardColor="#10b981" textColor="#000000" iconColor="#ffffff" >}}
**Mastered architecture** - Design of scalable and maintainable distributed applications
{{< /alert >}}

#### CL2 - Use virtualized servers and network services

{{< keywordList >}}
{{< keyword icon="docker" >}} Docker & Kubernetes {{< /keyword >}}
{{< keyword icon="globe" >}} AWS/Azure Cloud {{< /keyword >}}
{{< keyword icon="fire" >}} Infrastructure as Code {{< /keyword >}}
{{< /keywordList >}}

**Concrete evidence:**
- **Complete Dockerization** of all projects with optimized docker-compose.yml files
- **Kubernetes deployment** for [**Hub ECO-MED**](/projets/hub-eco-med/) with auto-scaling
- **Containerized CTF infrastructure** in [**YGGAME CTF Platform**](/projets/plateforme-ctf-yggame/): 8 Docker challenges + Dockge
- **Terraform** used to provision cloud infrastructure in a reproducible way

{{< alert icon="star" cardColor="#f59e0b" textColor="#000000" iconColor="#ffffff" >}}
**Applied DevOps** - Fully automated and versioned infrastructure
{{< /alert >}}

#### CL3 - Secure system services and data

{{< keywordList >}}
{{< keyword icon="lock" >}} Zero Trust Security {{< /keyword >}}
{{< keyword icon="shield" >}} WAF & IDS {{< /keyword >}}
{{< keyword icon="eye" >}} SIEM {{< /keyword >}}
{{< /keywordList >}}

**Concrete evidence:**
- **Multi-layer security**: Cloudflare WAF + fail2ban + audit logs for [**BlackArsenal**](/projets/blackarsenal/)
- **SSL/TLS certificates** with Let's Encrypt and automatic renewal
- **Penetration testing** documented with remediation of identified vulnerabilities

{{< alert icon="shield" cardColor="#ef4444" textColor="#000000" iconColor="#ffffff" >}}
**Proactive security** - Continuous monitoring and automated threat response
{{< /alert >}}

---

## Competency 4: Manage Information Data

{{< alert icon="code" cardColor="#8b5cf6" textColor="#ffffff" iconColor="#ffffff" >}}
**Competency acquired** at level 2
{{< /alert >}}

### Critical Learning Outcomes and Evidence

#### CL1 - Optimize enterprise data models + CE4.03 (mathematical foundations)

{{< keywordList >}}
{{< keyword icon="fire" >}} 3NF Normalization {{< /keyword >}}
{{< keyword icon="star" >}} B-tree indexes {{< /keyword >}}
{{< keyword icon="code" >}} Relational algebra {{< /keyword >}}
{{< /keywordList >}}

**Concrete evidence:**
- **Complete refactoring** of [**BlackArsenal**](/projets/blackarsenal/) database: 3NF + optimized indexes = 80% gain
- **Mathematical modeling** for [**Hub ECO-MED**](/projets/hub-eco-med/) with cardinality calculations
- **Optimized complex queries**: 7-table joins went from 12s to 0.3s

{{< alert icon="fire" cardColor="#10b981" textColor="#000000" iconColor="#ffffff" >}}
**Drastic performance** - Rigorous application of relational algebra for measurable gains
{{< /alert >}}

#### CL2 - Ensure data confidentiality + CE4.01 (privacy respect)

{{< keywordList >}}
{{< keyword icon="lock" >}} E2E Encryption {{< /keyword >}}
{{< keyword icon="shield" >}} GDPR compliance {{< /keyword >}}
{{< keyword icon="eye" >}} Immutable audit {{< /keyword >}}
{{< /keywordList >}}

**Concrete evidence:**
- **Complete GDPR module** for [**Eco-Carpooling**](/projets/eco-voiturage/): consent, portability, forgetting
- **AES-256-GCM encryption** of sensitive data with automatic key rotation
- **Blockchain audit logs** for unalterable traceability in [**PetalPatrol**](/projets/petalpatrol/)

{{< alert icon="shield" cardColor="#8b5cf6" textColor="#000000" iconColor="#ffffff" >}}
**Maximum protection** - End-to-end encrypted data with full legal compliance
{{< /alert >}}

#### CL3 - Organize data restitution + CE4.02 (ecological stakes)

{{< keywordList >}}
{{< keyword icon="chart" >}} Interactive dashboards {{< /keyword >}}
{{< keyword icon="fire" >}} Smart caching {{< /keyword >}}
{{< keyword icon="star" >}} Green computing {{< /keyword >}}
{{< /keywordList >}}

**Concrete evidence:**
- **Real-time dashboards** for [**RaTouf**](/projets/ratouf/) with Chart.js and WebSockets
- **Redis cache system** reducing database queries by 90% and server consumption
- **Progressive archiving**: hot data SSD → warm HDD → cold S3

{{< alert icon="star" cardColor="#f59e0b" textColor="#000000" iconColor="#ffffff" >}}
**Eco-responsibility** - 65% carbon footprint reduction through intelligent optimization
{{< /alert >}}

#### CL4 - Manipulate heterogeneous data + CE4.04 (consistency and quality)

{{< keywordList >}}
{{< keyword icon="code" >}} ETL pipelines {{< /keyword >}}
{{< keyword icon="check" >}} Data validation {{< /keyword >}}
{{< keyword icon="globe" >}} Multi-formats {{< /keyword >}}
{{< /keywordList >}}

**Concrete evidence:**
- **Python ETL pipeline** to integrate CSV, JSON, XML in [**Hub ECO-MED**](/projets/hub-eco-med/)
- **Multi-layer validation**: JSON schemas, DB constraints, unit tests = 99.9% integrity
- **Universal API** supporting REST, GraphQL and multi-format export

{{< alert icon="check" cardColor="#ef4444" textColor="#000000" iconColor="#ffffff" >}}
**Quality guaranteed** - Heterogeneous data unified with 99.99% consistency maintained
{{< /alert >}}

---

## Competency 5: Lead a Project

{{< alert icon="rocket" cardColor="#0ea5e9" textColor="#ffffff" iconColor="#ffffff" >}}
**Competency in progress** at level 3 — *Participate in the design and implementation of an information system project*
{{< /alert >}}

### Critical Learning Outcomes and Evidence

#### CL1 - Measure the economic, societal and technological impacts of an IT project

{{< keywordList >}}
{{< keyword icon="chart" >}} Cost-benefit analysis {{< /keyword >}}
{{< keyword icon="lightbulb" >}} ROI {{< /keyword >}}
{{< keyword icon="globe" >}} Regulatory compliance {{< /keyword >}}
{{< /keywordList >}}

**Concrete evidence:**
- **Detailed budget study** for the production of connected entomological traps: costed Li-Ion (€1,379 for 30 units) vs LiFePO4 (€1,415) comparison, with performance / autonomy / cost criteria
- **IT fleet renewal analysis** at ECO-MED with costed recommendations delivered to management
- **Time savings measurement** through automation of data transmission to INPN: removal of the manual Excel → SIN process, reduced data-entry error risk
- Documented societal impact: **GDPR**, **French Environmental Code (article L411-1A)**, **INSPIRE directive**, **SINP protocol** compliance


#### CL2 - Integrate an IT project into the IS of an organization

{{< keywordList >}}
{{< keyword icon="globe" >}} ERP integration {{< /keyword >}}
{{< keyword icon="code" >}} APIs & adapters {{< /keyword >}}
{{< keyword icon="shield" >}} SSO {{< /keyword >}}
{{< /keywordList >}}

**Concrete evidence:**
- **Integration of the [Hub ECO-MED](/projets/hub-eco-med/)** with the existing ecosystem: **SX Everwin** ERP (administrative management), **SIN ArcGIS** (naturalist data), **Azure AD** (identities)
- **Abstraction layer** isolating external systems: eases maintenance, unit testing, and replacing a system without impacting the rest
- **Custom HTTP module** for SX Everwin (which lacks a complete REST API), with smart caching to limit server load
- **EcoSur** automatically retrieves projects from SX Everwin → eliminates re-entry and ensures cross-app consistency
- **PetalPatrol and RaTouf** push validated data to the SIN ArcGIS, which then forwards them to INPN through the established institutional flow


#### CL3 - Adapt an information system

{{< keywordList >}}
{{< keyword icon="lightbulb" >}} Architectural evolution {{< /keyword >}}
{{< keyword icon="fire" >}} Progressive migration {{< /keyword >}}
{{< keyword icon="check" >}} Service continuity {{< /keyword >}}
{{< /keywordList >}}

**Concrete evidence:**
- **Monolithic → modular architectural evolution**: choice of a federating Hub rather than a single application, to allow incremental addition of business apps without redesign
- **Progressive migration** of safety sheets from Excel to EcoSur without disrupting the field process: versioning, automatic risk-level computation, advanced search
- **MongoDB** vs SQL Server choice justified by the need to adapt the IS to fast-evolving regulatory schemas (safety sheets, INPN formats)
- **Deferred synchronization** introduced specifically to adapt the IS to the mobile/field context with variable connectivity
- **Systematic technical documentation** of architectural choices and integrations, in a context without IT department: essential to ensure IS sustainability beyond my work-study contract


---

## Competency 6: Work in a Computing Team

{{< alert icon="rocket" cardColor="#0ea5e9" textColor="#ffffff" iconColor="#ffffff" >}}
**Competency in progress** at level 3 — *Manage a computing team*
{{< /alert >}}

### Critical Learning Outcomes and Evidence

#### CL1 - Organize and share technological and informational watch

{{< keywordList >}}
{{< keyword icon="eye" >}} Structured watch {{< /keyword >}}
{{< keyword icon="code" >}} Discord RSS bot {{< /keyword >}}
{{< keyword icon="lightbulb" >}} Collaborative sharing {{< /keyword >}}
{{< /keywordList >}}

**Concrete evidence:**
- **4-month active watch** on three complementary themes (Large Language Models, cybersecurity, planned obsolescence), with **iterative source mapping**: companies (Anthropic, Meta), specialized media (BleepingComputer, Dark Reading, Help Net Security), institutional bodies (ARPP, HOP), academic (IEEE, MIT, Univ. Chicago)
- **Discord RSS bot developed** to automate collection and sharing: continuous feed monitoring, thematic-channel publishing, preliminary summary generation, **on-demand deep analysis via Gemini API** (translation, key-point extraction, relevance scoring)
- **6 articles published** on the educational Moodle forum: Anthropic-Iceland AI education partnership, Lazarus group attack on European defense industry, Meta's Mango/Avocado models, Microsoft conviction over Windows 11 obsolescence, WiFi sensing & privacy (IEEE 802.11bf), WhatsApp API flaw — with active participation in discussions
- **Technical watch in a corporate setting**: official documentation, forums and exploration before each major technical choice (ArcGIS API, Proj4js, JWT, Azure AD, MongoDB, alternative Go/Gin stack)
- Reasoned use of **AI tools** (Claude for source identification, Gemini for article analysis), with systematic critical review


#### CL2 - Identify the stakes of innovation economics

{{< keywordList >}}
{{< keyword icon="star" >}} Tech choices {{< /keyword >}}
{{< keyword icon="chart" >}} Open source vs proprietary {{< /keyword >}}
{{< keyword icon="lightbulb" >}} Obsolescence & lifecycle {{< /keyword >}}
{{< /keywordList >}}

**Concrete evidence:**
- **Comparative analysis Li-Ion (INR18650-25R) vs LiFePO4 (JGCFR18650-2200)** for entomological traps: autonomy, cost, durability, safety — with costed budgeting for 30 units
- **Open-source choice** (Node.js, Express, MongoDB, Leaflet, Proj4js) over proprietary solutions to reduce vendor lock-in and total cost of ownership
- **Watch on planned obsolescence** (tracking Microsoft Windows 11 condemnation by the JDP, monitoring the 2026 ADEME budget for circular economy) → awareness of eco-design and software-durability stakes
- Continuous evaluation of the AI ecosystem (LLMs, Meta models, Anthropic research) to spot integration opportunities for ECO-MED tools


#### CL3 - Guide IT change management within an organization

{{< keywordList >}}
{{< keyword icon="check" >}} Change management {{< /keyword >}}
{{< keyword icon="star" >}} User adoption {{< /keyword >}}
{{< keyword icon="globe" >}} Pedagogy {{< /keyword >}}
{{< /keywordList >}}

**Concrete evidence:**
- **Introduction of agile practices** at ECO-MED (Kanban, GitFlow, Pull Requests, CI) in an organization previously running in a V-cycle — pedagogical effort with the tutor and stakeholders
- **Regular demos** of progress to key users to create a continuous feedback loop and foster ownership
- **EcoSur requirement reframing**: shifting from a simple data-entry form initially requested to a complete solution (versioning, risk scoring, advanced search) after user dialogue — solution ultimately praised for addressing needs the users hadn't explicitly formulated
- **Systematic documentation** of technical choices and features to ensure continuity after my departure
- **Widespread adoption** of the applications (Hub, PetalPatrol, RaTouf, EcoSur) by ECO-MED teams, with **regular constructive feedback** from users feeding into successive iterations

