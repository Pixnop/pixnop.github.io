---
title: "ECO-carpooling - Field Trip Optimization"
description: "Smart carpooling application to optimize ECO-MED team trips to study sites"
date: 2024-06-28
draft: false
tags: ["JavaScript", "Node.js", "Express", "MongoDB", "Leaflet", "Microsoft Graph", "Mapping"]
categories: ["Professional Projects"]
series: ["ECO-MED"]
showHero: true
heroStyle: "basic"
---

# ECO-carpooling - Field Trip Optimization

Smart carpooling application developed to optimize ECO-MED collaborators' trips to intervention sites, reduce carbon footprint and foster collaboration between teams.

## 🎯 Objective

ECO-carpooling aims to optimize business trip organization by automatically identifying carpooling opportunities between collaborators visiting nearby sites, thus contributing to ECO-MED's sustainable development goals.

## 🚗 Problem Solved

Before ECO-carpooling, trip organization had several inefficiencies:
- **Individual trips** to geographically close sites
- **Lack of knowledge** about colleagues' intervention schedules
- **Time-consuming manual coordination** and unreliable
- **High environmental impact** of business trips
- **Non-optimized transport costs**

## ⚡ Main Features

### Smart mapping visualization
- **Interactive map** displaying all planned intervention sites
- **Automatic grouping** of interventions by geographical area
- **Proximity calculation** between study sites
- **Differentiated display** according to user profiles

### Automated ERP integration
- **Automatic retrieval** of schedules from SX Everwin
- **Smart processing** of Excel exports via Microsoft Graph API
- **Daily synchronization** of planning data
- **Real-time management** of schedule changes

### Advanced filtering system
- **Temporal filters** (day, week, month)
- **Profile filters** by profession (botanist, ornithologist, etc.)
- **Specific user filters**
- **Agency filters** by membership

### Trip optimization
- **Automatic identification** of carpooling opportunities
- **Distance calculation** between intervention points
- **Grouping suggestions** according to time slots
- **Economic and environmental gains estimation**

## 🖼️ User Interface

### Main mapping view
![Intervention site map](Carte%20des%20terrains.webp)

The main interface presents an interactive map where each point represents an intervention site. Color codes allow quick distinction of:
- Different user profiles
- Intervention periods
- Agency membership
- Grouping opportunities

### Filtering panel
![Site map filters](filtres%20Carte%20des%20terrains.webp)

The filtering system allows display refinement according to several criteria:
- **Period**: time range selection
- **Profiles**: type of expertise required in the field
- **Users**: specific collaborators
- **Status**: day/night intervention, duration, etc.

## 🛠️ Technical Architecture

### Technology stack
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Mapping**: Leaflet.js with OpenStreetMap tiles
- **Integration**: Microsoft Graph API
- **Authentication**: JWT integrated with Azure AD

### Technical challenges overcome

#### Complex ERP integration
The main challenge was the absence of direct API to retrieve schedules from SX Everwin. The developed solution uses Microsoft Graph API to automatically extract export emails containing Excel planning files, then intelligently processes this data.

#### Deduplication algorithm
Duplicate management in ERP exports with a smart algorithm based on specific business criteria (project, date, user, site) to keep only the most recent records.

### Performance and optimization
- **Caching** of mapping data
- **Lazy loading** of intervention details
- **MongoDB query optimization** with indexes
- **API response compression**

## 📊 Results and Impact

### Environmental gains
- 🌍 **30%** reduction in kilometers traveled
- 🚗 **25%** decrease in number of vehicles used
- 💨 **Significant reduction** in CO₂ emissions
- 🌱 **Contribution** to ECO-MED's CSR objectives

### Operational gains
- ⏱️ **50%** reduction in coordination time
- 💰 **20%** savings on travel expenses
- 🤝 **Improved** inter-team collaboration
- 📊 **Increased visibility** on field workload

### User adoption
- 👥 **85%** of collaborators use the application
- ⭐ **4.7/5** average user satisfaction
- 📈 **Continuous increase** in organized carpools

## 🔄 Data Processing Workflow

### Automated data pipeline
1. **Daily extraction** of ERP export emails
2. **Smart parsing** of attached Excel files
3. **Data cleaning and validation**
4. **Geocoding** of intervention site addresses
5. **Distance calculation** and opportunity detection
6. **Interactive map update**

### Error management
- **Automatic validation** of data consistency
- **Anomaly reporting** to administrators
- **Graceful recovery** in case of processing failure
- **Detailed logs** for diagnosis and maintenance


## 💡 Innovation and Added Value

ECO-carpooling illustrates how technical innovation can serve environmental challenges. By automating carpooling opportunity detection, the application transforms a logistical constraint into a sustainable performance lever.

### Impact on organization
- **Strengthened collaborative culture**
- **Environmental awareness** raising
- **Internal resource optimization**
- **Responsible company image**

## 🎓 Skills Developed

### Technical
- Heterogeneous system integration
- Geospatial data processing
- Route optimization algorithms
- Microsoft Graph APIs
- Interactive web mapping

### Methodological
- Field user needs analysis
- Mobility-oriented interface design
- User experience optimization
- Environmental impact measurement

---

*ECO-carpooling demonstrates that technical innovation and environmental responsibility can converge to create high-value solutions, both operationally and in terms of positive environmental impact.*