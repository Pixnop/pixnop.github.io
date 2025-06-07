---
title: "ECO-MED Application Hub"
description: "Complete application ecosystem to optimize business processes for an environmental consulting firm"
date: 2024-06-28
draft: false
tags: ["JavaScript", "Node.js", "MongoDB", "Express", "REST API", "Microsoft Graph", "Leaflet", "Chart.js"]
categories: ["Professional Projects"]
series: ["ECO-MED"]
showHero: true
heroStyle: "basic"
---

# ECO-MED Application Hub

Design and development of a complete application ecosystem to digitize and optimize business processes for ECO-MED, a consulting firm specialized in environmental expertise.

## 🌍 Context

12-week internship (April - June 2024) within the R&D department of ECO-MED, an SME with 100 employees specialized in ecological engineering. Mission: support the company's digital transformation by developing business tools adapted to the specific needs of ecologists and project managers.

## 🎯 Project Objectives

- **Centralize** access to various business tools through a single entry point
- **Automate** time-consuming tasks (report generation, data extraction...)
- **Optimize** internal processes (carpooling, field planning...)
- **Ensure reliability** of environmental data collected in the field
- **Facilitate** adoption of digital tools by teams

## 🚀 Developed Applications

### 1. Central Application Hub
Single entry point to all business tools:
- Responsive and intuitive web interface
- Simplified navigation between different applications
- Integrated FAQ section for user support
- Contact form for feedback and suggestions

### 2. ECO-carpooling
Field trip optimization application:
- Map visualization of planned routes
- Intelligent grouping of participants by zone
- Integration with ERP to retrieve schedules
- Filters by month, profile, and participant

### 3. GOAT (Generator of Atmospheric Observations in Tables)
Automatic weather table generation tool:
- Intuitive selection of study areas on interactive map
- Weather data retrieval via Open-Meteo API
- Export of formatted tables for study reports
- Data: temperature, wind, precipitation, humidity

### 4. FroggyFactors
Decision support application for amphibian inventories:
- Precipitation analysis over customizable period
- Interactive charts of rainfall data
- Comparison with historical data (5 years)
- Identification of optimal intervention periods

### 5. FeuForêt (FireForest)
Fire risk visualization module:
- Interactive map of French departments
- Real-time integration of prefectural data
- Legend adapted to ECO-MED's specific needs
- Quick access to critical information

## 🛠 Technical Architecture

### Technology Stack
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Mapping**: Leaflet.js
- **Charts**: Chart.js
- **APIs**: Microsoft Graph, Open-Meteo
- **Infrastructure**: Dedicated Linux Debian server

### Architecture Choices
- Classic client-server architecture
- REST API for communication
- Modular and scalable approach
- Compliance with SOLID principles
- Security according to OWASP recommendations

## 🔧 Technical Challenges Overcome

### 1. Interfacing with existing ERP
- **Problem**: No business API to retrieve schedules
- **Solution**: Using Microsoft Graph API to extract data from Excel export emails
- **Result**: Complete process automation without manual intervention

### 2. Data Quality Management
- **Problem**: Duplicates and incorrect data in exports
- **Solution**: Intelligent deduplication algorithm based on hashes
- **Result**: 100% reliability of processed data

### 3. Performance and Scalability
- **Problem**: Slowdowns during load increase
- **Solution**: MongoDB query optimization with indexing
- **Result**: Response time divided by 5

## 📊 Results and Impact

### Quantitative Gains
- ⏱️ **80%** reduction in weather report generation time
- 🚗 **30%** route optimization through carpooling
- 📈 **100%** automation of schedule data extraction
- 👥 **95%** user adoption rate

### User Feedback
- "The interface is intuitive and saves us precious time" - *Project Manager*
- "Weather tools have become essential for our inventories" - *Field Ecologist*
- "The hub centralizes everything, it's exactly what we needed" - *Agency Manager*

## 🎓 Skills Developed

### Technical
- Full-stack JavaScript development
- Modular architecture design
- Third-party API integration
- Performance optimization
- Geospatial data management

### Methodological
- Agile project management
- Needs analysis and formalization
- Technical documentation
- Testing and validation
- User training

### Cross-functional
- Communication with non-technical profiles
- Proposal force and innovation
- Adaptation to business constraints
- Autonomous work
- Technology watch

## 🔮 Evolution Perspectives

The developed application ecosystem constitutes a solid foundation for ECO-MED's digital transformation. Perspectives include:
- Integration of new modules (document management, AI for species recognition...)
- Migration to microservices architecture
- Native mobile application development
- Implementation of a Business Intelligence system

## 💻 Code Example

Here's an example of the REST API route developed for the ECO-carpooling application:

```javascript
/**
 * Route to retrieve field data.
 * This API aggregates planning data and formats it
 * for map display
 */
app.get('/terrains', async (req, res) => {
    try {
        const { terrains, dateMiseAJour } = dataProcessor.getProcessedData();
        
        const terrainsData = Array.from(terrains.values()).map(terrain => ({
            affaire: {
                code: terrain.affaire.code,
                nom: terrain.affaire.nom,
                commune: {
                    ville: terrain.affaire.commune.ville,
                    codePostal: terrain.affaire.commune.codePostal,
                    latitude: terrain.affaire.commune.latitude,
                    longitude: terrain.affaire.commune.longitude
                }
            },
            personne: {
                nom: terrain.personne.nom,
                prenom: terrain.personne.prenom,
                profils: terrain.personne.profils,
                agence: terrain.personne.agence,
            },
            quantiteParMois: terrain.quantiteParMois,
            estNuit: terrain.estNuit,
            ligneAffaire: terrain.ligneAffaire,
        }));

        res.json({
            terrains: terrainsData,
            dateMiseAJour: dateMiseAJour.toLocaleString('fr-FR', { 
                dateStyle: 'long', 
                timeStyle: 'short' 
            })
        });
    } catch (error) {
        console.error('Error retrieving terrains:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
```

## 💡 Innovation and Added Value

This project illustrates how digitalization can transform environmental professions. By automating repetitive tasks and facilitating access to information, the developed tools allow ecologists to focus on their core business: biodiversity protection.

> "This internship allowed me to put my technical skills at the service of a cause close to my heart: environmental preservation. Seeing the concrete impact of my work on the teams' daily life was extremely rewarding." - *Léon Fievet*

## 📸 Screenshots

*Screenshots of the different applications (Main Hub, ECO-carpooling, GOAT, FroggyFactors) can be added here to illustrate the interface and developed features.*

## 📄 Documentation

For more technical and methodological details, the complete internship report is available upon request.

---

*Project carried out as part of a 2nd year internship in Computer Science BUT, IAMSI track (Business Application and IT Services Engineering)*